// Mesure d'audience par l'instance Matomo de l'auteur (https://tfressin.fr/matomo/, site 9) : sans cookie, adresse IP
// anonymisée par le serveur (2 octets), aucune donnée transmise à un tiers. Rien n'est chargé si le navigateur demande
// de ne pas être suivi (Do Not Track), s'il est piloté par un automate, ou hors du site publié (copie locale, tests).
(function () {
    const MATOMO = "https://tfressin.fr/matomo/", SITE = "9";
    const dnt = [navigator.doNotTrack, window.doNotTrack, navigator.msDoNotTrack];
    if (location.hostname !== "t-fressin.github.io" || navigator.webdriver === true
        || dnt.some(function (v) { return v === "1" || v === "yes"; })) return;
    const paq = window._paq = window._paq || [];
    paq.push(["disableCookies"], ["setDoNotTrack", true], ["setTrackerUrl", MATOMO + "matomo.php"], ["setSiteId", SITE],
             ["trackPageView"], ["enableLinkTracking"]);
    const s = document.createElement("script");
    s.async = true;
    s.src = MATOMO + "matomo.js";
    document.head.appendChild(s);
})();
