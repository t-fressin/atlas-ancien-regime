# Versions

## 1.0.2 (17 novembre 2026)

* Diocèses : province ecclésiastique des dix diocèses corrigés en 1.0.1 établie sur l'*Almanach royal* de 1789 et *L'État de la France* de 1749 (t. III), Wikipédia ne servant plus que de contrôle ; Le Puy, exempt, rangé sous Bourges, dont il relevait « seulement pour le for contentieux » ; source de la correction portée dans la propriété `source` des entités et dans l'attribution de la couche (`sources/provinces_ecclesiastiques.csv`, `docs/corrections.md`).
* Généralités : sources de Vaudricourt complétées (Saugrain, t. I, art. ALLENAY ; notice d'Ault des Archives départementales de la Somme).
* Site : voile de chargement pendant l'affichage d'une couche.

## 1.0.1 (17 novembre 2026)

* Diocèses : province ecclésiastique corrigée pour dix diocèses (Carpentras, Cavaillon, Boulogne, Ypres, Le Puy, Ajaccio, Aléria, Sagone, Mariana, Nebbio), d'après la liste des provinces ecclésiastiques de Wikipédia (sources revues en 1.0.2).
* Généralités : source supplémentaire pour Vaudricourt (80780), généralité de Rouen par l'élection d'Eu (notice d'Ault des Archives départementales de la Somme).

## 1.0.0 (1er novembre 2026)

Première version publiée.

* Couches de 1789 : généralités (deux versions du Languedoc), bailliages et sénéchaussées de la convocation des États généraux, diocèses, provinces, gouvernements généraux, parlements et conseils souverains, territoires du royaume aujourd'hui hors de France ; toutes rattachées aux communes actuelles et à l'étendue du royaume selon Brette.
* Corrections sourcées, commune par commune ou paroisse par paroisse (`docs/corrections.md`, `sources/`), et colonne `certitude` des rattachements.
* Tableau des lieux : une ligne par commune actuelle et par territoire extérieur, avec l'entité de chaque couche, sa certitude, les décisions prises et leurs sources (`donnees/lieux/lieux_1789.csv`).
* Site : carte interactive, recherche des communes, documentation (https://t-fressin.github.io/atlas-ancien-regime/).
