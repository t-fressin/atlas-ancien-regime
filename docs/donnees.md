# Propriétés des entités

Toutes les couches : GeoJSON, WGS 84 (EPSG:4326), une entité (Polygon ou MultiPolygon) par circonscription.

| Propriété | Couches | Contenu |
|---|---|---|
| `id` | toutes | identifiant stable : `generalite-…`, `diocese-…`, `province-…`, `gouvernement-…` (nom sans accents ; pour une généralité, nom de la ville seul), `bailliage-NNN` (numéro du bailliage chez Gay, Gobbi et Goñi) |
| `nom` | toutes | nom de la circonscription |
| `type` | toutes | `generalite`, `bailliage`, `diocese`, `province`, `gouvernement`, `parlement` ou `territoire` (territoires extérieurs) |
| `etat_au` | toutes | date de l'état décrit (`1789`) |
| `ensemble` | provinces | regroupement auquel la province appartient quand une carte de Commons en existe (« Guyenne et Gascogne », « Lorraine et Barrois », « Maine et Perche », « Flandre et Hainaut », « Poitou et Saumurois ») ; vide sinon |
| `classe` | gouvernements | `1` (gouvernements de 60 000 livres), `2` (30 000 livres), `hors série` (ville, prévôté et vicomté de Paris), d'après l'ordonnance du 18 mars 1776 |
| `nature` | parlements | `parlement`, `conseil souverain`, `conseil supérieur`, `conseil provincial` ou `ressort partagé` (Marches communes de Poitou et de Bretagne) |
| `statut`, `contestation` | territoires extérieurs | `royaume` pour les unités dessinées ; `contestation` : « souveraineté du roi contestée par l'Empire (« bailliages contestés ») » pour les villages de la Lauter, vide sinon |
| `generalite`, `bailliage_id`, `diocese`, `province`, `gouvernement`, `parlement`, `confiance` | territoires extérieurs | rattachements de l'unité (vide : non établi) et certitude (`haute`, `moyenne`) ; sources dans `source` et dans `sources/territoires_exterieurs.csv` |
| `appel` | parlements | cour où allaient les appels d'une cour qui n'était pas souveraine en tout (conseil provincial d'Artois : `Parlement de Paris`) ; vide sinon |
| `nom_brette` | bailliages | nom donné par Brette (1904), avec le siège quand il diffère (« Sénéchaussée d'Albret à Nérac ») |
| `rang` | bailliages | `principal` ou `secondaire`, d'après Gay, Gobbi et Goñi (2024) : les bailliages qui avaient formé circonscription aux états généraux de 1614 furent dits principaux en 1789, les autres secondaires et rattachés à un principal |
| `bailliage_principal` | bailliages | `id` du bailliage principal d'un secondaire ; vide pour un principal |
| `generalite` | bailliages | généralité du bailliage selon Brette ; une partie du ressort peut relever d'une généralité voisine (`couches/generalites.md`, méthode, point 5) |
| `chef_lieu`, `chef_lieu_insee` | bailliages | commune actuelle (nom, code INSEE) où siégea l'assemblée du bailliage |
| `province_ecclesiastique` | diocèses | métropole de rattachement, d'après la carte d'ensemble de Maxence Jeanjean |
| `source` | toutes | attribution complète de la ou des sources de l'entité |
| `licence` | toutes | `CC BY 4.0` (généralités, bailliages, parlements, territoires extérieurs) ou `CC BY-SA 4.0` (diocèses, provinces, gouvernements) ; voir le `LICENCE.md` de chaque dossier |
| `lieu_actuel`, `fond`, `code_unite`, `nom_unite` | territoires extérieurs | lieu actuel ; fond étranger de l'unité dessinée (`gemarkung-rp`, `gemarkung-sl`, `division-be`, `commune-ch`), son code et son nom dans ce fond |
| (pas de champ `pays`) | — | le pays actuel d'une unité extérieure se lit dans `fond` (`gemarkung-*` : Allemagne ; `division-be` : Belgique ; `commune-ch` : Suisse) et figure dans la colonne `pays_actuel` de `sources/territoires_exterieurs.csv` ; l'atlas n'a pas de champ pour les « pays » de l'Ancien Régime |

Les dates de début et de fin (`start_date`, `end_date`, sur le modèle d'OpenHistoricalMap) seront ajoutées avec les états antérieurs à 1789.

## Tables des communes (`donnees/<couche>/<couche>_1789_communes.csv`)

Une ligne par commune actuelle de l'IGN rattachée à une entité (deux lignes ou plus pour une commune découpée entre généralités ou entre bailliages). Même licence que la couche.

| Colonne | Contenu |
|---|---|
| `code_insee` | code de la commune (ADMIN EXPRESS COG CARTO, édition téléchargée : `sources/empreintes.json`) |
| `commune` | nom officiel actuel |
| `id`, `nom` | entité de la couche |
| `part` | part de la surface de la commune comprise dans l'entité (de 0 à 1) : pour les diocèses et les provinces, part recouverte par le tracé de Commons calé, avant rattachement ; vide pour une commune complétée par voisinage |
| `mode` | `paroisses` (toutes les paroisses de Brette de la commune dans la même généralité ou le même bailliage), `découpée` (paroisses d'entités différentes), `paroisse la plus proche` (commune sans paroisse), `correction` (`corrections.md`), `recouvrement` (diocèses, provinces : plus grand recouvrement), `voisinage` (complément, `methode.md`), `province` ou `bailliage` (gouvernements : `couches/gouvernements.md`) |

Une `part` faible signale une limite qui passe dans la commune : l'entité de la paroisse de 1789 peut y différer de celle de la commune.

## Certitude des rattachements communaux

Les tables `generalites_1789_communes.csv`, `dioceses_1789_communes.csv` et `provinces_1789_communes.csv` portent une colonne `certitude` :

| Valeur | Sens |
|---|---|
| `corrigé` | correction sourcée de la commune (ou, pour les généralités, d'une de ses paroisses de Brette) : `sources/corrections.json`, `sources/corrections_paroisses_generalites.csv` |
| `confirmé` | une source lue confirme la valeur de la base : `sources/certitudes.csv` |
| `douteux` | sources discordantes ou valeur non établie après recherche ; valeur de la base gardée : `sources/certitudes.csv` (motif et source par commune) |
| `base` | valeur de la source de base (Brette pour les généralités, cartes de Commons pour les diocèses et les provinces), non vérifiée commune par commune |

Pour les généralités, `douteux` signale surtout les paroisses des ressorts dont un débordement de généralité est connu et dont l'élection de 1789 n'a pu être établie.

## Tables complémentaires

* `donnees/parlements/parlements_1789_communes.csv` : colonnes de toutes les tables de communes, plus `bailliage_id`, le bailliage principal de la commune, par lequel la cour est attribuée.
* `donnees/<couche>/<couche>_1789_exterieurs.csv` (et `generalites_1789_languedoc_uni_exterieurs.csv`) : une ligne par unité étrangère ajoutée à la couche : `lieu` (identifiant de la ligne de `sources/territoires_exterieurs.csv`), `nom_1789`, `fond`, `code_unite`, `nom_unite`, `entite` (identifiant de l'entité de la couche), `nom_entite`.

## Tableau des lieux (`donnees/lieux/lieux_1789.csv`)

Tableau unique, une ligne par lieu, établi à partir des tables de communes des couches et des tables de décisions de `sources/` ; il ne change aucune valeur. Les lignes sont d'abord les communes actuelles de France métropolitaine (IGN), celles hors du royaume de 1789 comprises, puis les lignes de `sources/territoires_exterieurs.csv` (territoires aujourd'hui hors de France, dessinés ou non). Licence CC BY-SA 4.0 (`donnees/lieux/LICENCE.md`).

| Colonne | Contenu |
|---|---|
| `code_insee` | code de la commune française (vide pour un territoire extérieur) |
| `code_etranger` | territoire extérieur : fond et code de l'unité (`gemarkung-rp:…`, `gemarkung-sl:…`, `division-be:…`, `commune-ch:…`), ou, pour un lieu sans unité dessinée, identifiant de la ligne de `sources/territoires_exterieurs.csv` (`exterieurs:BE15`) |
| `commune` | nom actuel |
| `lieu_1789` | territoire extérieur : nom en 1789 |
| `royaume_1789` | `oui`, `non` (hors du royaume selon Brette ou par correction), ou, pour un territoire extérieur non dessiné, `non dessiné` |
| `decision`, `source` | décision sur l'appartenance au royaume (correction « hors du royaume », statut, contestation et confiance d'un territoire extérieur) et sa source |
| `generalite`, `bailliage`, `diocese`, `province`, `gouvernement`, `parlement` | entité de chaque couche ; pour une commune partagée, l'entité de la plus grande part (les autres sont dans la colonne `…_decision`) |
| `<couche>_certitude` | généralités, bailliages, diocèses, provinces : `corrigé`, `confirmé`, `douteux` ou `base` (voir ci-dessus) ; pour un territoire extérieur, `confirmé` si la confiance de la table est haute, `douteux` sinon |
| `<couche>_decision` | toutes les décisions qui portent sur la valeur, séparées par « \| » : correction (avec son motif et la citation), confirmation, doute, paroisse de Brette corrigée par élection (généralités), commune partagée (avec les parts), complément par voisinage, rattachement d'une commune sans paroisse ; `gouvernement_decision` : rattachement par le bailliage |
| `<couche>_source` | sources des décisions, dans le même ordre |

La version « Languedoc réuni » des généralités ne diffère que pour le Languedoc (`generalites_1789_languedoc_uni.geojson`) et n'a pas de colonne propre.
