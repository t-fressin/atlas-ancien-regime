// Carte de l'atlas d'Ancien Régime : couches de 1789 sur un fond Natural Earth, recherche des communes dans le
// tableau des lieux (donnees/lieux/lieux_1789.csv).
"use strict";

const BLEU = "#114A93";
const ETIQUETTES = {
    nom: "Nom", nom_brette: "Nom chez Brette", type: "Type", rang: "Rang", bailliage_principal: "Bailliage principal",
    generalite: "Généralité", chef_lieu: "Chef-lieu", chef_lieu_insee: "Code INSEE du chef-lieu",
    province_ecclesiastique: "Province ecclésiastique", classe: "Classe (ordonnance de 1776)", ensemble: "Ensemble",
    nature: "Nature", appel: "Appel", lieu_actuel: "Lieu actuel", fond: "Fond", code_unite: "Code de l'unité",
    nom_unite: "Unité", statut: "Statut en 1789", contestation: "Contestation", bailliage_id: "Bailliage",
    diocese: "Diocèse", province: "Province", gouvernement: "Gouvernement", parlement: "Parlement",
    confiance: "Confiance", source: "Source", licence: "Licence"
};
const MASQUES = new Set(["id", "couleur", "type", "chef_lieu_insee", "bailliage_id"]);
const COLONNES_LIEU = [
    ["generalite", "Généralité"], ["bailliage", "Bailliage"], ["diocese", "Diocèse"], ["province", "Province"],
    ["gouvernement", "Gouvernement"], ["parlement", "Parlement"]
];

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
const plier = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[-'’]/g, " ").replace(/\bsaint\b/g, "st").replace(/\bsainte\b/g, "ste").replace(/\s+/g, " ").trim();

const map = L.map("map", {zoomSnap: 0.1, zoomDelta: 0.5, minZoom: 4, maxZoom: 13, attributionControl: true});
// France métropolitaine avec la Corse, sur toute la carte, avec 5 % de marge
const FRANCE = L.latLngBounds([41.33, -5.15], [51.09, 9.57]);
function cadrer(etendue = FRANCE, anime = false) {
    const t = map.getSize();
    map.fitBounds(etendue, {paddingTopLeft: [t.x * 0.05, t.y * 0.05], paddingBottomRight: [t.x * 0.05, t.y * 0.05], animate: anime});
}
cadrer();
map.attributionControl.setPrefix('<a href="https://leafletjs.com">Leaflet</a>');
L.control.scale({position: "bottomright", imperial: false}).addTo(map);

let config, couche = null, coucheId = null, attributionCourante = "", marqueur = null, index = null;
const fichiersLieux = {};

async function json(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(url + " : " + r.status);
    return r.json();
}

// fond : terres blanches cernées de gris, fleuves et lacs (rendu de l'atlas de la gendarmerie)
async function fond() {
    const [terres, fleuves, lacs] = await Promise.all(["terres", "fleuves", "lacs"].map(n => json(`donnees/fond_${n}.json`)));
    map.createPane("fond").style.zIndex = 200;
    map.createPane("eaux").style.zIndex = 450;
    L.geoJSON(terres, {pane: "fond", interactive: false, style: {color: "grey", weight: 2, fillColor: "white", fillOpacity: 1}}).addTo(map);
    L.geoJSON(lacs, {pane: "eaux", interactive: false, style: {color: "#B5D0D0", weight: 1, fillColor: "#B5D0D0", fillOpacity: 1}}).addTo(map);
    L.geoJSON(fleuves, {pane: "eaux", interactive: false, style: {color: "#B5D0D0", weight: 1.2}}).addTo(map);
    map.attributionControl.addAttribution('fond : <a href="https://www.naturalearthdata.com/">Natural Earth</a> (domaine public)');
}

function style(f) {
    return {color: BLEU, weight: 0.7, opacity: 0.9, fillColor: f.properties.couleur, fillOpacity: 0.45};
}

function popup(p) {
    let h = `<h6 class="mb-1">${esc(p.nom)}</h6><table class="table table-sm small mb-0"><tbody>`;
    for (const [k, v] of Object.entries(p)) {
        if (MASQUES.has(k) || k === "nom" || k === "source" || k === "licence" || !v) continue;
        h += `<tr><th>${esc(ETIQUETTES[k] || k)}</th><td>${esc(v)}</td></tr>`;
    }
    h += `</tbody></table><div class="small text-secondary mt-1">${esc(p.source || "")}<br>Licence : ${esc(p.licence || "")}</div>`;
    return h;
}

async function choisirCouche(id) {
    const c = config.couches.find(x => x.id === id) || config.couches[0];
    const donnees = await json(`donnees/${c.id}.json`);
    if (couche) map.removeLayer(couche);
    if (attributionCourante) map.attributionControl.removeAttribution(attributionCourante);
    coucheId = c.id;
    couche = L.geoJSON(donnees, {
        style,
        onEachFeature: (f, l) => {
            l.bindTooltip(esc(f.properties.nom), {sticky: true, direction: "top", className: "etiquette"});
            l.bindPopup(popup(f.properties), {maxWidth: 380});
            l.on({
                mouseover: e => { e.target.setStyle({weight: 2.5}); info.montrer(f.properties); },
                mouseout: e => { couche.resetStyle(e.target); info.montrer(null); }
            });
        }
    }).addTo(map);
    cadrer(couche.getBounds(), true);  // la couche entière, avec 5 % de marge
    attributionCourante = `${esc(c.titre)} : ${esc(c.attribution)} ; ${esc(c.licence)} · <a href="projet.html">Atlas d'Ancien Régime</a>`;
    map.attributionControl.addAttribution(attributionCourante);
    document.getElementById("titre-couche").textContent = c.titre + " en 1789";
    document.getElementById("resume-couche").textContent = `${donnees.features.length} entités · licence ${c.licence}`;
    document.getElementById("liens-couche").innerHTML =
        `<a href="${c.fiche}">Fiche de la couche</a> · <a href="${c.telecharger}">Télécharger (GeoJSON)</a>` +
        (c.variante ? ` · <a href="${c.variante}">version au Languedoc réuni</a>` : "") +
        ` · <a href="${config.tableau}">Tableau des lieux (CSV)</a>`;
    document.querySelectorAll("#choix-couches input").forEach(i => { i.checked = i.value === c.id; });
    const liste = document.getElementById("entites");
    liste.innerHTML = "";
    const couches = [];
    couche.eachLayer(l => couches.push(l));
    couches.sort((a, b) => a.feature.properties.nom.localeCompare(b.feature.properties.nom, "fr"));
    for (const l of couches) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="pastille" style="background:${esc(l.feature.properties.couleur)}"></span><a href="#">${esc(l.feature.properties.nom)}</a>`;
        li.querySelector("a").addEventListener("click", e => {
            e.preventDefault();
            map.fitBounds(l.getBounds(), {maxZoom: 9, padding: [20, 20]});
            l.openPopup();
        });
        liste.appendChild(li);
    }
    document.getElementById("nombre").textContent = `(${couches.length})`;
    etat();
}

// encart « Citer le projet » (fenêtre modale de la page)
const citer = L.control({position: "bottomleft"});
citer.onAdd = () => {
    const d = L.DomUtil.create("div", "leaflet-control citer");
    d.innerHTML = '<button type="button" class="btn btn-sm btn-light border" data-bs-toggle="modal" data-bs-target="#modaleCiter">Citer le projet</button>';
    L.DomEvent.disableClickPropagation(d);
    return d;
};
citer.addTo(map);
document.querySelectorAll("[data-copier]").forEach(b => b.addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById(b.dataset.copier).innerText).then(() => {
        b.textContent = "Copié";
        setTimeout(() => { b.textContent = "Copier"; }, 1500);
    });
}));

// panneau d'information au survol : tout ce que la couche sait du territoire
const info = L.control({position: "topleft"});
info.onAdd = function () {
    this._div = L.DomUtil.create("div", "info survol p-2 leaflet-control");
    this.montrer(null);
    return this._div;
};
info.montrer = function (p) {
    if (!this._div) return;
    this._div.innerHTML = p ? popup(p) : '<span class="small text-secondary">Survolez un territoire pour en voir les informations ; cliquez pour les garder.</span>';
};
info.addTo(map);

function controleCouches() {
    const ctl = L.control({position: "topright"});
    ctl.onAdd = () => {
        const d = L.DomUtil.create("div", "info legend p-2 leaflet-control-layers leaflet-control");
        let h = '<details open class="details-legend"><summary><h6 class="d-inline">Couches</h6></summary><div id="choix-couches" class="mt-1">';
        for (const c of config.couches) {
            h += `<label class="d-block"><input type="radio" name="couche" value="${c.id}"> ${esc(c.titre)}</label>`;
        }
        d.innerHTML = h + "</div></details>";
        L.DomEvent.disableClickPropagation(d);
        d.querySelectorAll("input").forEach(i => i.addEventListener("change", () => choisirCouche(i.value)));
        return d;
    };
    ctl.addTo(map);
}

// recherche d'une commune dans le tableau des lieux
async function chargerIndex() {
    if (!index) {
        index = (await json("donnees/lieux/index.json")).map(r => ({code: r[0], nom: r[1], lat: r[2], lon: r[3], f: r[4], cle: plier(r[1])}));
    }
    return index;
}

async function suggerer() {
    const q = plier(document.getElementById("recherche").value);
    const ul = document.getElementById("suggestions");
    ul.innerHTML = "";
    if (q.length < 2) return;
    const idx = await chargerIndex();
    const debut = [], dedans = [];
    for (const r of idx) {
        if (r.code === q || r.cle.startsWith(q)) debut.push(r);
        else if (r.cle.includes(q)) dedans.push(r);
        if (debut.length >= 15) break;
    }
    for (const r of debut.concat(dedans).slice(0, 15)) {
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-action small py-1";
        li.textContent = `${r.nom} (${/^(\d{5}|2[AB]\d{3})$/.test(r.code) ? r.code : "hors de France"})`;
        li.addEventListener("mousedown", () => afficherLieu(r.code));
        ul.appendChild(li);
    }
}

const BADGES = {"corrigé": "corrige", "confirmé": "confirme", "douteux": "douteux", "base": "base"};

function bloc(titre, valeur, cert, decision, source) {
    let h = `<tr><th>${esc(titre)}</th><td>${esc(valeur || "—")}`;
    if (cert) h += ` <span class="badge certitude ${BADGES[cert] || ""}">${esc(cert)}</span>`;
    if (decision || source) {
        h += `<details class="small mt-1"><summary>décision et source</summary>`;
        if (decision) h += `<div>${esc(decision).replaceAll(" | ", "<br>")}</div>`;
        if (source) h += `<div class="text-secondary mt-1">${esc(source).replaceAll(" | ", "<br>")}</div>`;
        h += "</details>";
    }
    return h + "</td></tr>";
}

async function afficherLieu(code) {
    const idx = await chargerIndex();
    const r = idx.find(x => x.code === code);
    if (!r) return;
    fichiersLieux[r.f] = fichiersLieux[r.f] || await json(`donnees/lieux/${r.f}.json`);
    const l = fichiersLieux[r.f][code];
    const fiche = document.getElementById("fiche-lieu");
    let h = `<div class="d-flex justify-content-between"><h5 class="mb-1">${esc(r.nom)}</h5><button type="button" class="btn-close" aria-label="Fermer"></button></div>`;
    h += `<div class="small text-secondary mb-2">${l.code_insee ? "code INSEE " + esc(l.code_insee) : esc(l.code_etranger)} · dans le royaume en 1789 : <b>${esc(l.royaume_1789)}</b></div>`;
    if (l.decision || l.source) {
        h += `<details class="small mb-2"><summary>appartenance au royaume : décision et source</summary><div>${esc(l.decision || "")}</div><div class="text-secondary mt-1">${esc(l.source || "")}</div></details>`;
    }
    h += '<table class="table table-sm small mb-0"><tbody>';
    for (const [c, t] of COLONNES_LIEU) {
        h += bloc(t, l[c], l[c + "_certitude"], l[c + "_decision"], l[c + "_source"]);
    }
    h += `</tbody></table><div class="small text-secondary mt-1">Ligne du <a href="${config.tableau}">tableau des lieux</a> ; certitude : voir <a href="donnees.html">Données</a>.</div>`;
    fiche.innerHTML = h;
    fiche.hidden = false;
    fiche.querySelector(".btn-close").addEventListener("click", () => {
        fiche.hidden = true;
        if (marqueur) map.removeLayer(marqueur);
        marqueur = null;
        etat(null);
    });
    document.getElementById("suggestions").innerHTML = "";
    document.getElementById("recherche").value = r.nom;
    if (marqueur) map.removeLayer(marqueur);
    if (r.lat !== null) {
        marqueur = L.circleMarker([r.lat, r.lon], {radius: 7, color: "white", weight: 2, fillColor: "#DA121A", fillOpacity: 1}).addTo(map).bindTooltip(esc(r.nom));
        map.flyTo([r.lat, r.lon], Math.max(map.getZoom(), 9), {duration: 0.8});
    }
    etat(code);
}

// état dans l'adresse : #couche=…&lieu=…
let lieuCourant = null;
function etat(lieu) {
    if (lieu !== undefined) lieuCourant = lieu;
    const p = new URLSearchParams();
    if (coucheId) p.set("couche", coucheId);
    if (lieuCourant) p.set("lieu", lieuCourant);
    history.replaceState(null, "", "#" + p.toString());
}

(async function () {
    config = await json("donnees/config.json");
    controleCouches();
    await fond();
    const p = new URLSearchParams(location.hash.slice(1));
    await choisirCouche(p.get("couche") || "generalites");
    if (p.get("lieu")) afficherLieu(p.get("lieu"));
    const champ = document.getElementById("recherche");
    let minuterie;
    champ.addEventListener("input", () => { clearTimeout(minuterie); minuterie = setTimeout(suggerer, 150); });
    champ.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            const premier = document.querySelector("#suggestions li");
            if (premier) premier.dispatchEvent(new Event("mousedown"));
        }
    });
    champ.addEventListener("blur", () => setTimeout(() => { document.getElementById("suggestions").innerHTML = ""; }, 200));
})();
