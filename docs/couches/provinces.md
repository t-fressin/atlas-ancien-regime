# Provinces en 1789

Fiche de la couche `donnees/provinces/`. Principes communs à toutes les couches : `docs/methode.md`.

## Sources

* Milenioscuro, *France location map-Provinces 1789.svg* et cartes *… in France (1789).svg*, Wikimedia Commons, CC BY-SA 4.0, sur le fond *France location map-Departements 1790.svg* de Sémhur (auteur de chaque fichier : `sources/commons_entites.json`, champ Artist).
* Fond : IGN, ADMIN EXPRESS COG CARTO, Licence Ouverte 2.0 ; étendue du royaume : Gay, Gobbi et Goñi (2024), d'après Brette, CC BY 4.0.
* Brette 1907, p. 57-59 : la « province » n'a pas, en 1789, de définition administrative précise ; la couche est conventionnelle.
* Sources de correction (version 1.0.3) : Robert de Hesseln, *Dictionnaire universel de la France*, 1771 ; Expilly, *Dictionnaire géographique…*, 1762-1770 (dont t. II, 1764, art. CONDOMOIS) ; Brette 1907, p. 66 et 104 ; *Règlement fait par le roi […] dans sa province des Trois-Évêchés et du Clermontois, du 7 février 1789* (*Archives parlementaires*, 1re série, t. I, p. 671-672) ; Félix Liénard, *Dictionnaire topographique du département de la Meuse*, 1872 ; Auguste Matton, *Dictionnaire topographique du département de l'Aisne*, 1871. Règle : « une source scientifique prime sur l'atlas » ; « entre sources scientifiques, les plus récentes priment sur les anciennes ». Copies OCR lues : `sources/cache/ocr_provinces_1_0_3/` (non versionné).

## Méthode

Les tracés viennent de cartes vectorielles (SVG) de Wikimedia Commons, qui ne citent pas leurs sources ; les couches qui en dérivent sont donc **des cartes d'après Wikipédia**, à utiliser comme telles.

1. **Tracé de chaque entité** : chaque carte « une entité par fichier » de Commons met une entité en évidence sur un fond commun (#c12838 dans le royaume, #881c28 au-dehors, ainsi pour les diocèses de Savoie et de Nice) ; ce tracé est extrait (courbes échantillonnées tous les 0,5 point). Les éléments mis en évidence dans **toutes** les cartes d'une série sont des artefacts du fond et sont écartés (quatre tracés communs à toutes les cartes de diocèses).
2. **Calage** : le fond commun est une projection équirectangulaire ; une transformation affine du plan du SVG vers les longitudes et latitudes est ajustée par itérations du point le plus proche entre le contour de la France du SVG et celui des communes de l'IGN (écart médian de 0,005°, soit environ 400 m ; 90 % des points à moins de 0,044°, les plus grands écarts tenant aux côtes et aux estuaires).
3. **Rattachement** : chaque commune reçoit l'entité qui recouvre la plus grande part de sa surface, à condition que cette part atteigne 20 % ; les communes sont réunies par entité. Aucune commune n'est découpée.
   **Complément** : une commune du royaume de 1789 (Brette) restée sans entité, ce qui tient aux écarts du calage sur les côtes, les îles et les frontières, prend l'entité de la commune voisine avec laquelle sa limite est la plus longue, ou de la plus proche pour une île. **L'étendue du royaume est celle de Brette dans toutes les couches** : une commune qui a une généralité a aussi une province. Quand les cartes de Commons placent une telle commune dans un territoire hors du royaume (Comtat Venaissin, comté de Nice, comté de Sarrewerden, principauté de Montbéliard, Savoie), le désaccord est noté (colonne `territoire_commons`) et repris dans `corrections.md`.
4. **Provinces** : niveau le plus fin des cartes de Commons (Anjou, Saumurois, Maine, Perche, Guyenne, Gascogne, Lorraine, Barrois, Trois-Évêchés, etc.) ; la propriété `ensemble` donne le regroupement quand Commons en propose une carte (« Guyenne et Gascogne », « Lorraine et Barrois », « Maine et Perche », « Flandre et Hainaut », « Poitou et Saumurois »). Seules les communes du royaume de 1789 (Brette) sont rattachées.

5. **Communes sans entité** : hors du royaume seulement. Diocèses : Menton, la Roya et la Bévéra (diocèse de Vintimille, absent de la liste de Wikipédia), Ambilly (Genève). Provinces : territoires hors du royaume ci-dessus.

## Entités

42 provinces : les 41 du niveau le plus fin des cartes de Commons, avec la propriété `ensemble`, et la **province du Clermontois** (version 1.0.3, sans ensemble), absente des cartes de Commons, ajoutée sur source. Table des communes : `provinces_1789_communes.csv`.

## Corrections

Corrections en vigueur : Le Pont-de-Beauvoisin (Savoie, 73204) hors du royaume ; comté de Montjoie-Vaufrey et ses terres du Sundgau en Alsace ; Escos et Bergouey-Viellenave en Béarn ; Zillisheim en Alsace (`docs/corrections.md`).

* **Province du Clermontois** (18 novembre 2026, version 1.0.3) : « Capitale de la province du Clermontois, cette ville » (mémoire des officiers municipaux de Clermont au roi, 2 mars 1789) ; l'assemblée des trois ordres de Clermont-en-Argonne dit « la province aujourd'hui connue sous ce nom […] composée de quatre comtés, savoir : celui de Clermont, celui de Dun, celui de Stenay et celui de Jametz » (Brette 1907, p. 66) ; le Clermontois « ne dépendait d'aucun gouvernement général » (p. 104). Le règlement royal du 7 février 1789 pour « sa province des Trois-Évêchés et du Clermontois » lui donne un bailliage de convocation propre, « Clermontois-Varennes » : la province est prise comme ce bailliage (68 communes du bailliage de Clermont-en-Argonne de Brette, en Champagne ou dans les Trois-Évêchés sur la carte de Commons), plus six communes hors de ce bailliage chez Brette que Liénard dit « Avant 1790, Clermontois » dans leur propre article : Boureuilles, Halles-sous-les-Côtes, Malancourt, Montfaucon-d'Argonne, Montigny-devant-Sassey, Villers-devant-Dun. Les rubriques « Avant 1790, Clermontois » de Liénard (l'OCR lit souvent « Glermontois ») ont été relues une à une avec leur article : les autres portent sur des communes du bailliage, des écarts ou des bois ; Brizeaux, un temps retenu, est dit « Avant 1790, Champagne » dans son article (la rubrique « Clermontois » voisine est celle de Brocourt).
* **Condomois, Bazadois** (version 1.0.3) : Langon (Hesseln, t. III : « petite ville du Bazadois, en Guienne »), Nérac et Astaffort (Hesseln : « du Condomois »), Dunes, Moncrabeau et le Mas-d'Agenais (Expilly : « dans le Condomois ») passent de la Gascogne à la Guyenne, Hesseln (t. II, art. CONDOMOIS) faisant du Condomois un « petit pays de la Guienne », alors qu'Expilly, plus ancien, le disait « en Gascogne » (t. II, art. CONDOMOIS). La « Guienne » de Hesseln est à prendre avec réserve : le même article range Mont-de-Marsan dans le Condomois et le dit « sous le gouvernement de Guienne & de Gascogne ».
* **Saint-Junien** (version 1.0.3) : Marche au lieu du Limousin (Hesseln, t. VI : « petite ville de la basse Marche, aux frontières du Limosin »).
* **Fère-en-Tardenois** (version 1.0.3) : Île-de-France au lieu de la Champagne (Matton, Aisne, 1871, art. SOISSONNAIS : le Tardenois, subdivision du Soissonnais, compris « dans l'Ile-de-France lors de la formation des grands gouvernements militaires », sauf quelques localités au sud de Villers-Agron, Goussancourt, Latilly et Dammard).

* **Gouvernement de Charlemont** (31 octobre 2026) : Givet, Fépin, Fromelennes, Ham-sur-Meuse, Hargnies, Landrichamps, Rancennes, Charnois et Vireux-Wallerand passent de la Champagne (carte de Commons) au Hainaut : Expilly (t. II, 1764, art. « Charlemont ») dit le « Namur-François » « dans le Haynault ou plutôt au gouvernement général de Flandres & Haynault » et en donne le dénombrement par paroisse. Hierges, Aubrives, Chooz et Vireux-Molhain, cédés par Liège et « incorporé[s] […] au comté d'Agimont-françois » par le traité du 24 mai 1772 (art. V-VI), et Haybes (« gouvernement & recette de Charlemont », Expilly) passent aussi en Hainaut. Foisches (dont 100 bonniers seulement furent cédés) et Montigny-sur-Meuse (non nommé) restent en Champagne, en certitude `douteux`.

## Limites connues

Les cartes de Commons suivent à peu près les gouvernements généraux sans en être la liste officielle ; précision du calage et de la commune (environ 800 communes ont une part inférieure à 0,8).

* **Luxembourg français** (Thionville, Montmédy, Carignan, Marville, Damvillers…, cédé en 1659) : la carte de Commons n'en fait pas une province et le range dans les Trois-Évêchés, comme Expilly qui dit ses lieux « au Pays-Messin » (t. IV, art. « Margny » : « dans la principauté de Carignan, au Pays-Messin, diocèse de Trêves, parlement & intendance de Metz »). Il n'était pas une province administrative en 1789 : ni intendant, ni états, ni gouverneur général propres ; ses six prévôtés (Thionville, Montmédy, Chauvency, Marville, Damvillers, Yvois-Carignan, d'après Expilly, t. IV, art. « Luxembourg François ») relevaient de la généralité, de l'intendance et du parlement de Metz et du gouvernement général des Évêchés (Expilly : « du gouvernement-général militaire des trois Évêchés » ; *Almanach royal*, 1789, p. 101, qui distingue « Metz et Pays Messin, Verdun et Verdunois, ou Évêchés » de « Lorraine et Barrois » ; Brette 1907, p. 82 et 101, n. 1), et non du gouvernement de Lorraine-et-Barrois où le place Wikipédia (« Territoires du royaume de France », révision 240706144).

## Points ouverts

* **Condomois** : Hesseln range tout le Condomois en Guienne, mais au sens large, puisqu'il y met Mont-de-Marsan et parle du « gouvernement de Guienne & de Gascogne » ; seules les communes qu'une source nomme sont corrigées. Le reste du pays, aux limites indécises (Brette 1907 : les « pays » ne se définissent pas mieux que les provinces), reste en Gascogne comme sur la carte de Commons.
* **Tardenois** : d'après Matton, le Tardenois, sauf son extrémité sud, était en Île-de-France ; seule Fère-en-Tardenois est corrigée.
* **Basse Marche** : Saint-Junien est corrigée seule ; l'étendue de la basse Marche du côté du Limousin n'a pas été reprise.
* **Clermontois, communes partagées** : Saulmory (« Avant 1790, Glermontois, après avoir été Barrois lorrain », Liénard) et le hameau de Drillancourt (« Avant 1790, Clermontois », Liénard) sont dits Clermontois, mais l'autre partie de leur commune actuelle (Villefranche, Gercourt) n'a pas été trouvée dans Liénard : Saulmory-Villefranche et Gercourt-et-Drillancourt restent en Champagne.
* **Avocourt** (55023, bailliage de Verdun chez Brette) : entourée de communes du Clermontois, elle reste en Champagne, comme sur la carte de Commons ; son article n'a pas été retrouvé dans l'OCR de Liénard. Elle figure de ce fait dans le grand vide de la couche des gouvernements (`vides_1789.md`), qui liste les communes situées dans le contour du vide, sans en être un.


