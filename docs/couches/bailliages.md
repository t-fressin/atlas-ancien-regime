# Bailliages et sénéchaussées en 1789

Fiche de la couche `donnees/bailliages/`. Principes communs à toutes les couches : `docs/methode.md`.

## Sources

* Paroisses de Cassini et leur bailliage et généralité selon Brette (1904) : V. Gay, P. E. Gobbi, M. Goñi, *Bailliages in 1789 France*, v. 2.0, Harvard Dataverse, [doi:10.7910/DVN/T8UXHK](https://doi.org/10.7910/DVN/T8UXHK), CC BY 4.0 (couche `BAILLIAGES_1789_BRETTE_POINTS` et table `BAILLIAGES_1789_BRETTE.txt` : nom, rang, bailliage principal, chef-lieu ; couche, 42 771 paroisses ; étendue du royaume : `FRANCE_1789_BRETTE`) ; article : « The Atlas of Local Jurisdictions of Ancien Régime France », *Journal of Historical Geography*, 84, 2024, p. 49-60.
* Fond : IGN, ADMIN EXPRESS COG CARTO, communes, Licence Ouverte 2.0 (date de téléchargement et empreinte : `sources/empreintes.json`).
* Sources des corrections : `docs/corrections.md` et `docs/sources.md`.

## Méthode

Même méthode que les généralités, sur le bailliage de chaque paroisse (436 bailliages ou juridictions assimilées ayant formé unité électorale en 1789, dont Sarrelouis). La propriété `generalite` d'un bailliage est celle que lui donne Brette ; les corrections de généralité par paroisse (ci-dessus) ne touchent pas la couche des bailliages, si bien qu'un bailliage peut déborder sur une généralité voisine : les deux couches ne s'emboîtent pas partout. Nom, rang et chef-lieu viennent de la table des bailliages du même jeu (`BAILLIAGES_1789_BRETTE.txt`). Deux bailliages de la table n'ont pas de paroisse sur le fond français : Sarrelouis, aujourd'hui en Allemagne (dessiné sur les fonds allemands, voir les territoires extérieurs), et la « province du Bassigny-Barrois », formée des bailliages de La Marche et de Bourmont, qui ont chacun leur entité. Les villes qui formaient une circonscription distincte (Paris, Strasbourg, Metz, Arles, etc.) occupent la commune de la ville ; leur bailliage ou sénéchaussée occupe le reste. Un territoire hors de la convocation n'a pas de bailliage, même s'il a une généralité par correction (`corrections.md`).

Rang : rangs 1 et 2 de Gay, Gobbi et Goñi = « principal » (2 : principal auquel des secondaires sont rattachés), rang 3 = « secondaire ».

## Entités

436 entités (`bailliages_1789.geojson`) sur 437 bailliages de la table : 435 sur le fond communal français, plus Sarrelouis (bailliage 333), dessiné sur les fonds allemands (`docs/couches/exterieurs.md`) ; sans territoire : la « province du Bassigny-Barrois » (445). Table des communes : `bailliages_1789_communes.csv`.

## Corrections

Corrections en vigueur : Le Pont-de-Beauvoisin (Savoie, 73204) hors du royaume ; Zillisheim (68384), Hirsingue (68138), Heimersdorf (68128), Ruederbach (68288) et Bruebach (68055) en « Districts de Belfort et Huningue » (`docs/corrections.md`). Les corrections de généralité ne s'appliquent pas à cette couche.

## Limites connues

Les territoires hors de la convocation n'ont pas de bailliage, même rattachés par correction à une généralité ou à une province (Montjoie-Vaufrey dans le Doubs, Escos, Bergouey) ; exception : les terres de Montjoie dans le Sundgau, qui reçoivent le bailliage de leurs voisines. La propriété `generalite` est celle de Brette.

## Points ouverts

Aucun point ouvert propre à la couche : Sarrelouis et les territoires aujourd'hui hors de France sont traités par la couche des territoires extérieurs ; la cour souveraine de chaque bailliage, par la couche des parlements.


