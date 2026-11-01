# Généralités en 1789

Fiche de la couche `donnees/generalites/`. Principes communs à toutes les couches : `docs/methode.md`.

## Sources

* Paroisses de Cassini et leur bailliage et généralité selon Brette (1904) : V. Gay, P. E. Gobbi, M. Goñi, *Bailliages in 1789 France*, v. 2.0, Harvard Dataverse, [doi:10.7910/DVN/T8UXHK](https://doi.org/10.7910/DVN/T8UXHK), CC BY 4.0 (couche `BAILLIAGES_1789_BRETTE_POINTS`, 42 771 paroisses ; étendue du royaume : `FRANCE_1789_BRETTE`) ; article : « The Atlas of Local Jurisdictions of Ancien Régime France », *Journal of Historical Geography*, 84, 2024, p. 49-60.
* Fond : IGN, ADMIN EXPRESS COG CARTO, communes, Licence Ouverte 2.0 (date de téléchargement et empreinte : `sources/empreintes.json`).
* Sources des corrections : `docs/corrections.md` et `docs/sources.md`.

## Méthode

1. Chaque paroisse de Cassini porte la généralité où Brette (1904) range son bailliage (Gay, Gobbi et Goñi, 2024).
2. Une commune dont toutes les paroisses relèvent d'une même généralité la reçoit entière.
3. Une commune qui réunit des paroisses de généralités différentes est découpée entre elles (cellules de Voronoï des chefs-lieux de paroisse, limitées au contour de la commune). Ce cas est rare (cinq communes), parce que Gay, Gobbi et Goñi ont eux-mêmes attribué les paroisses d'après des communes de 2021, sauf corrections manuelles.
4. Une commune sans paroisse prend la généralité de la paroisse la plus proche si elle est dans le royaume de 1789, aucune sinon.
5. Réserve propre à la source : la généralité est celle du **bailliage** de convocation ; or plusieurs bailliages débordaient sur une généralité voisine (relevé en cours, `corrections.md`, section « Limite connue »).
6. **Corrections** (`sources/corrections.json`, détail et sources dans `corrections.md`) : une correction de **commune** (`code_insee`) remplace le rattachement de la commune entière, ou la met hors du royaume ; une correction de **paroisse** (`noacass`, identifiant de Cassini) change la généralité d'une paroisse de Brette avant le rattachement des communes (étapes 2 à 4), ce qui garde le découpage d'une commune qui réunit des paroisses de généralités différentes. C'est par des corrections de paroisse que les généralités sont redressées élection par élection.

Deux versions : `generalites_1789.geojson` (33 généralités, Toulouse et Montpellier séparées, comme chez Brette) et `generalites_1789_languedoc_uni.geojson` (Languedoc réuni, une intendance).

Les quatre généralités qui n'avaient « ni états ni élections » (Brette 1907, p. 112) portent aussi le nom de leur pays : « Metz (Trois-Évêchés) », « Nancy (Lorraine) », « Perpignan (Roussillon) », « Strasbourg (Alsace) ».

## Entités

33 généralités (`generalites_1789.geojson`) ; 32 dans la version au Languedoc réuni (`generalites_1789_languedoc_uni.geojson`). Table des communes : `generalites_1789_communes.csv`.

## Corrections

**Corrections de commune** (`sources/corrections.json`, détail et citations dans `docs/corrections.md`) : Le Pont-de-Beauvoisin (Savoie, 73204) hors du royaume ; comté de Montjoie-Vaufrey (25402, 25591, 25386, 25275, 25102, 25314) et ses terres du Sundgau (68138, 68128, 68288, 68055) en « Strasbourg (Alsace) » ; Escos (64205) et Bergouey-Viellenave (64113) en Auch ; Zillisheim (68384) en « Strasbourg (Alsace) ».

**Corrections de paroisse, par élection** (`sources/corrections_paroisses_generalites.csv`, **1 294 paroisses**, une ligne par paroisse : `noacass`, paroisse de Cassini, nom de 1999, bailliage et généralité de Brette, élection et généralité de 1789, source, citation recopiée de l'OCR, remarque). Une paroisse n'y figure que si une source lue la place dans une élection d'une autre généralité que celle de son bailliage chez Brette ; la généralité de l'élection est celle de l'*Almanach royal* de 1789 (p. 259-266). Sources (première citée par ligne) : Expilly (632) ; Saugrain (254) ; Ch. Porée (100) ; Hippeau (128) ; inventaires sommaires des archives départementales, série C, de l'Orne et du Cher (57) ; procès-verbal de la généralité de Moulins de 1686 (30) ; Robert de Hesseln (17) ; Charpillon et Caresme (13) ; Y. Bohineust (12) ; Boutiot et Socard (4) ; L. Rédet (2) ; A. Roserot (1). Principaux mouvements (généralité de Brette → généralité de l'élection) : Rouen → Alençon (267) ; Caen → Alençon (190) ; Riom → Moulins (134) ; Limoges → La Rochelle (105) ; Moulins → Bourges (82) ; Poitiers → Bourges (62) ; Dijon → Paris (56) ; Amiens → Rouen (50) ; Dijon → Orléans (45) ; Moulins → Orléans (33) ; Poitiers → Limoges (32) ; Moulins → Paris (27) ; Tours → Bourges (23) ; Orléans → Paris (21). Dans les citations, un « @ » produit par l'OCR (« Ele@ion » pour « Election ») est écrit « [@] ».

Effet sur les communes (31 octobre 2026) : 766 communes changent de généralité principale par rapport à Brette après la deuxième passe, et 72 de plus après la troisième ; 159 lignes de plus dans la table des communes, pour les communes découpées entre paroisses de généralités différentes.

## Limites connues

La généralité est celle de l'élection pour les 1 294 paroisses corrigées, celle du bailliage de Brette pour toutes les autres. Le relevé n'a porté que sur les bailliages dont un débordement était connu (Falaise, Orbec, Breteuil, Beaumont-le-Roger, Chartres, Ponthieu, Amiens, Clermont-en-Beauvaisis, Sens, Saint-Quentin, Ham, Roye, Bellême, Dijon, Fismes ; Montmorillon, Poitiers, Angoulême, Cognac, Moulins, Châtillon-sur-Indre, Auxerre, Nevers, Riom) : dans ces ressorts, environ 2 100 paroisses restent indéterminées faute d'article identifiable (dont 75 entourées de voisines établies d'une autre généralité après la troisième passe), et d'autres bailliages peuvent déborder sans qu'on le sache. D'où des îlots nouveaux (143 après la deuxième passe, 2 512 km², non recomptés après la troisième ; 164 îlots avant correction, la plupart historiques, comme les enclaves des Trois-Évêchés en Lorraine) : parties d'une généralité entourées par une seule autre, souvent des paroisses non corrigées au milieu de paroisses corrigées. Les sources sont de 1726 (Saugrain), 1762-1770 (Expilly), 1771 (Hesseln), 1909 (Porée, état de 1789) : un changement d'élection entre la source et 1789 n'est relevé que s'il est connu. État de 1789 : un registre plus ancien peut donner une autre généralité, juste à sa date (pays de Foix : intendance de Perpignan dans l'*Almanach royal* de 1778, d'Auch dans celui de 1789). Précision de la commune actuelle, sauf communes découpées entre paroisses.

## Points ouverts

* **Paroisses indéterminées des ressorts relevés** : 34 entourées de voisines établies d'une autre généralité après la sixième passe (Combraille, Nièvre, Angoumois, Poitou-Berry, une partie du comté d'Eu et de la Haute-Normandie ; Saint-Père, dans la Nièvre, dont l'article de Saugrain, « S. Pere du Mont, […] Election de Clamecy », n'est pas sûrement identifié), 529 à voisines partagées, 101 sans voisine établie. Sources cherchées sans résultat en texte intégral : procès-verbaux de l'assemblée provinciale de Basse-Normandie, Odolant-Desnos, assemblée provinciale du Berry, Boislisle pour Vézelay ; il n'existe pas de dictionnaire topographique de l'Orne.
* **Élection du Blanc** : les 12 paroisses corrigées le sont d'après une thèse de 1939 (Bohineust), tirée des convocations de 1789, qui compte aussi des enclaves : Lussac-les-Églises y figure alors qu'Expilly le met en élection de Limoges ; à confirmer par un état de l'élection.
* **Identifications probables** de la troisième passe : Notre-Dame-du-Bois pour le point « St Evroult », Sainte-Anne pour Sainte-Anne-d'Entremont, Saint-Quentin pour Saint-Quentin-de-la-Roche.
* Réserves : le *Procès-verbal de la généralité de Moulins* (1686) tranche le bailliage de Riom dans l'état de 1686 (au moins un transfert avant 1789 : Sauzay) ; six paroisses normandes où Hippeau ou Charpillon nomment une autre généralité que celle de l'élection (la généralité de l'élection est retenue) ; point de Brette de La Magdeleine (Charente) à vérifier.
* Paroisses douteuses relevées par les recherches : Coudray-au-Perche (mi-partie), Merry-Sec, Chitry, Javerdat (élection de Limoges ou de Confolens), Martel ; Roumare rangé à tort en Ponthieu par Brette.


