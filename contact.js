// adresse reconstituée au clic seulement : elle n'apparaît pas en clair dans la page (protection contre les robots)
document.getElementById("afficher-courriel").addEventListener("click", function () {
    const a = ["thomas", "fressin"].join("."), d = ["univ-eiffel", "fr"].join(".");
    const lien = document.createElement("a");
    lien.href = "mailto:" + a + String.fromCharCode(64) + d;
    lien.textContent = a + String.fromCharCode(64) + d;
    const s = document.getElementById("courriel");
    s.replaceChildren(lien);
});
