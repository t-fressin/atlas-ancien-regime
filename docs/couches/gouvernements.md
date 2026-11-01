# Gouvernements généraux militaires en 1789

Fiche de la couche `donnees/gouvernements/`. Principes communs à toutes les couches : `docs/methode.md`.

## Sources

* Liste : ordonnance du 18 mars 1776 « portant règlement sur les gouvernements généraux des provinces, gouvernements particuliers… », art. 1er : « Le nombre des gouvernements généraux des provinces restera fixé à trente-neuf, comme il l'est aujourd'hui, et divisé en deux classes » ; liste des dix-huit gouvernements de la première classe et des vingt et un de la seconde dans la note de l'éditeur : Jourdan, Decrusy, Isambert, *Recueil général des anciennes lois françaises*, t. XXIII, p. 436-437 ([Internet Archive](https://archive.org/details/recueilgnral23fran)). Paris (« Ville, prévôté et vicomté ») et Monaco, hors des 39 : A. Brette, *Les limites et les divisions territoriales de la France en 1789*, 1907, p. 77 ; noms et titulaires : *Almanach royal*, 1789, p. 101-104.
* Territoires : couche des provinces de l'atlas (`docs/couches/provinces.md` : cartes de Milenioscuro, Wikimedia Commons, CC BY-SA 4.0) ; bailliages de convocation de Brette (1904), d'après V. Gay, P. E. Gobbi et M. Goñi, [doi:10.7910/DVN/T8UXHK](https://doi.org/10.7910/DVN/T8UXHK) (CC BY 4.0) ; fond : IGN, ADMIN EXPRESS COG CARTO (Licence Ouverte 2.0).
* Nature des gouvernements : Brette 1907, chap. V, p. 95-107 : « aucun ressort précis, comme nous l'entendrions aujourd'hui, n'était fixé » (p. 100) ; « fonctions purement nominales des gouverneurs généraux, limites indécises des territoires qui leur sont nominalement soumis » (p. 104).
* Contrôle prévu (aucune géométrie reprise) : *1789 France gouvernements généraux militaires map-fr.svg*, Flappiefh, Wikimedia Commons, 2016, CC BY-SA 4.0, « d'après Armand Brette ».

## Méthode



1. Chaque commune reçoit le gouvernement de sa province : Flandre, Hainaut et Cambrésis → Flandre et Hainaut ; Lorraine et Barrois → Lorraine et Barrois ; Guyenne et Gascogne → Guyenne et Gascogne ; Maine et Perche → Maine et Perche ; Saintonge et Angoumois → Saintonge et Angoumois ; Béarn → Navarre et Béarn ; Franche-Comté → Comté de Bourgogne ; Bourgogne → Duché de Bourgogne ; Lyonnais → Lyonnais, Forez et Beaujolais ; Champagne → Champagne et Brie ; Foix → Foix, Donnezan et Andorre ; Marche → Haute et Basse-Marche ; les autres provinces portent le nom de leur gouvernement.
2. Cinq gouvernements que les provinces ne distinguent pas prennent le territoire de leur bailliage de convocation chez Brette (bailliage principal de la commune) : Le Havre (« Bailliage du Havre », `bailliage-056`, secondaire de Caudebec ; Brette 1907 : « le Havre était constitué en gouvernement général identique quant aux droits » à la Normandie) ; Boulonnais (sénéchaussée de Boulogne, `bailliage-042`) ; principauté de Sedan (bailliage de Sedan, `bailliage-342`) ; Toul et Toulois (bailliage de Toul, `bailliage-337`) ; ville, prévôté et vicomté de Paris (prévôté et vicomté de Paris, ville et faubourgs, `bailliage-144`, et hors les murs, `bailliage-145`).
3. Le Clermontois (bailliage de Clermont-en-Argonne, `bailliage-341`, formé des comtés de Clermont, Dun, Stenay et Jametz d'après le procès-verbal de son assemblée de 1789 cité par Brette) reste sans gouvernement : « le Clermontois, qui appartenait au prince de Condé, ne dépendait d'aucun gouvernement général » (Brette 1907, p. 104, citant Brion, *Coup d'œil général sur la France*, 1765 : « Le Clermontois... appartient au prince de Condé et ne dépend d'aucun gouvernement, le roi ne s'y étant réservé que l'hommage et le ressort de la justice »).
4. Les communes sont réunies par gouvernement ; propriété `classe` : 1 (60 000 livres), 2 (30 000 livres) ou « hors série » (Paris).

## Entités

40 entités : les 39 gouvernements généraux de 1776 et la ville, prévôté et vicomté de Paris. Monaco, hors du royaume, n'y est pas. Table des communes : `gouvernements_1789_communes.csv` (colonne `mode` : `province` ou `bailliage`).

## Corrections

Aucune correction propre à la couche ; elle hérite de celles des provinces et des bailliages (`docs/corrections.md`).

## Limites connues

Couche **conventionnelle** : les gouvernements n'avaient pas de limites fixées (Brette 1907, p. 97, 100, 104), et les provinces de Commons ne sont ni la liste de 1776 ni ses limites. La prévôté et vicomté de Paris hors les murs, unité de convocation, couvre une large part de l'Île-de-France : le gouvernement d'Île-de-France en est réduit d'autant ; c'est un choix (« comme Brette »), non une limite attestée. Le Havre est réduit au bailliage du Havre. La Dombes, réunie en 1762, suit la province où la carte de Commons la place. Les gouvernements particuliers (villes et citadelles) ne sont pas représentés.

## Points ouverts

* Comparaison avec la carte des gouvernements jointe à Brette 1907 (la carte de Flappiefh, faite « d'après Brette », a été comparée : voir « Contrôles »).
* Écarts les plus nombreux avec Flappiefh, à examiner : limite de la prévôté et vicomté de Paris (415 communes, dans les deux sens) ; Lorraine et Barrois contre Trois-Évêchés (359, enclaves) ; Champagne et Brie contre Île-de-France (136) ; Comté contre Duché de Bourgogne (108) ; Artois contre Picardie (101) ; Bourbonnais contre Auvergne (86).


