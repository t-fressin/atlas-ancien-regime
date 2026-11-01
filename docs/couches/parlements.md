# Parlements et conseils souverains en 1789

Fiche de la couche `donnees/parlements/`. Principes communs à toutes les couches : `docs/methode.md`.

## Sources

* Table des ressorts : `sources/parlements_bailliages.csv`, une ligne par bailliage de convocation (436, Sarrelouis compris), avec la cour, la certitude, la source (ouvrage, tome, page ou vedette, URL), la citation recopiée et une remarque.
* Source principale, la plus proche de 1789 : *État des grands bailliages érigés dans l'étendue du royaume*, « fait & arrêté au Conseil d'État du Roi […] le 1er mai 1788 », Versailles, Pierres, 8 p. ([Internet Archive, tatdesgrandsbail00fran](https://archive.org/details/tatdesgrandsbail00fran) ; p. 1 à 4 et 7 relues sur l'image) : liste, cour par cour, des présidiaux réunis à chaque grand bailliage.
* Guyot, *Répertoire universel et raisonné de jurisprudence*, Paris, Panckoucke : t. XLIV (1781), s.v. « Parlement » (Toulouse p. 317, Dijon p. 344-345, Rouen p. 349, Metz p. 372, Besançon p. 379, Nancy p. 400) ([rpertoireunive44guyo](https://archive.org/details/rpertoireunive44guyo)) ; t. IX (1777) « Charleville » ; t. XX (1778) « Douai », « Dombes » ; t. XLII (1781) « Nomination royale » ; *Supplément*, t. XI (1786) « Humiers ».
* Robert de Hesseln, *Dictionnaire universel de la France*, 6 vol., 1771 ([t. I](https://archive.org/details/dictionnaireuniv01hessuoft)), cité par vedette.
* Expilly, *Dictionnaire géographique, historique et politique des Gaules et de la France*, t. I-VI, 1762-1770 : art. « Parlement », t. V, 1768, p. 577-581 ([bub_gb_T1Q_AAAAcAAJ](https://archive.org/details/bub_gb_T1Q_AAAAcAAJ)), et articles des chefs-lieux (feuillets Internet Archive, la correspondance avec la page imprimée s'étant révélée fausse par endroits).
* A. Brette, *Recueil de documents relatifs à la convocation des États généraux de 1789*, t. I (1894), III (1904), IV (1915) ([t. IV](https://archive.org/details/recueildedocumen04bret)) : notes préliminaires par généralité ; *Les limites et les divisions territoriales de la France en 1789*, 1907, p. 66-67 (Barrois mouvant et non mouvant).
* Bastard d'Estang, *Les parlements de France*, t. I, 1857, p. 242 ([lesparlementsdef01bastuoft](https://archive.org/details/lesparlementsdef01bastuoft)), en appoint.
* Liste des cours : *Almanach royal*, 1789, p. 357-360 d'après l'OCR ([almanachroyalann00hour](https://archive.org/details/almanachroyalann00hour)) : treize parlements, conseils supérieurs d'Alsace, de Roussillon et de Corse, conseil provincial d'Artois. L'*Almanach* ne donne pas les ressorts.
* Territoires : bailliages de convocation de Brette (1904), d'après V. Gay, P. E. Gobbi et M. Goñi, [doi:10.7910/DVN/T8UXHK](https://doi.org/10.7910/DVN/T8UXHK) (CC BY 4.0) ; fond : IGN, ADMIN EXPRESS COG CARTO (Licence Ouverte 2.0).

## Méthode



1. Chaque bailliage de convocation reçoit la cour où ressortissaient ses appels. Ordre des preuves : l'*État* de 1788 ; à défaut Guyot (1777-1786) ou Hesseln (1771), qui nomment la ville ; à défaut une phrase de Brette sur le bailliage ou sur sa généralité ; à défaut l'article du chef-lieu ou l'article « Parlement » d'Expilly (1768).
2. Certitude : `haute`, la source nomme la cour pour ce siège, sa ville ou l'ensemble des sièges de sa généralité ; `moyenne`, la cour se déduit de la province nommée par Expilly ou d'un siège voisin.
3. Chaque commune suit son bailliage principal ; les communes sont réunies par cour.
4. Propriétés : `nature` (parlement, conseil souverain, conseil supérieur, conseil provincial, ressort partagé) ; `appel`, la cour supérieure quand la cour n'est pas souveraine en tout (conseil provincial d'Artois : parlement de Paris).
5. Les Marches communes de Poitou et de Bretagne, dont les communautés relevaient pour partie de Paris et pour partie de Rennes (Brette, *Recueil*, t. IV, p. 519), forment une entité de nature « ressort partagé ».

## Entités

18 entités : les treize parlements (Paris, Toulouse, Grenoble, Bordeaux, Dijon, Rouen, Aix, Rennes, Pau, Metz, Besançon, Flandre à Douai, Nancy), les conseils souverains d'Alsace et de Roussillon, le conseil supérieur de Corse, le conseil provincial d'Artois et les Marches communes. Table des communes : `parlements_1789_communes.csv` (colonne `bailliage_id`).

## Corrections

Par rapport à la première lecture (Expilly 1768 et Brette), trois attributions changent à la lecture des sources de 1771-1788 : Mohon passe de Paris à Metz (Guyot 1781, « les baillages de Sedan, Thionville, Longwy, Mouzon, & Mohon ») ; Martel va à Bordeaux (Hesseln 1771, « dans le vicomté de Turenne […] parlement de Bordeaux », et le *Calendrier* de 1786 cité par Brette, contre Expilly et Bastard d'Estang qui disent Toulouse ; certitude moyenne) ; la Dombes est confirmée à Dijon (en 1778 les appels allaient à Paris selon Guyot ; en 1788, « la Sénéchaussée de Trévoux » est réunie au grand bailliage de Bourg-en-Bresse). La couche hérite en outre des corrections des bailliages (`docs/corrections.md`).

## Limites connues

Les partages à l'intérieur d'un bailliage ne sont pas représentés ; la commune suit son bailliage principal :

* Bailleul (Flandre maritime) va entier au parlement de Flandre, alors que Dunkerque, Bourbourg et Gravelines « ressortissent au conseil d'Artois ; & de-là […] au parlement de Paris » (Guyot, t. XX, 1778, s.v. « Douai ») ; l'étendue de leurs territoires n'est pas établie.
* Saintes (Bordeaux, sauf « quelques paroisses » du présidial d'Angoulême, Paris : Brette, t. IV, p. 419) ; Lauzerte (« la plus grande partie » à Toulouse, t. IV, p. 24) ; paroisses de la vicomté de Turenne dans les sièges du Quercy (Bordeaux) ; enclave du diocèse de Périgueux ressortissant à Paris (t. IV, p. 328) ; paroisses mi-parties de Langres (t. III, p. 247) ; Bruillois (Toulouse), voisin d'Agen (t. IV, p. 250).
* Dax : l'édit de mars 1648 qui portait au parlement de Navarre la partie des Landes « au delà de la rivière de la Doue » (Brette, t. IV, p. 351-352) n'est confirmé par aucune source proche de 1789 ; le partage n'est pas retenu.
* La couche couvre le royaume à l'intérieur des frontières actuelles ; les sièges aujourd'hui hors de France (Sarrelouis, Landau, Philippeville…) attendent l'intégration des territoires extérieurs.

## Points ouverts

* 16 sièges en certitude `moyenne` : Usson et Versailles (cour donnée par la chaîne des ressorts : Hesseln les fait ressortir à la sénéchaussée de Riom et à la prévôté et vicomté de Paris) ; Montaigut, Meulan, Vincennes, Compiègne, Creil, Tonnay-Charente, Pons, Saint-Jean-d'Angély, Saint-Omer, Quatre-Vallées, Couserans, Rustaing (aucune source de 1771-1788 trouvée ; Hesseln a un article sans mention de cour pour Compiègne, Creil, Tonnay-Charente, Saint-Jean-d'Angély et les Quatre-Vallées).
* Saint-Amand (Flandre) : Hesseln (1771, t. VI, p. 7-8), relu sur l'image, écrit « parlement de Paris » ; l'*État* de 1788, officiel et postérieur, qui le range sous Douai, est suivi.
* Ressort de Dunkerque, Bourbourg et Gravelines : Guyot ne parle que des « trois villes » ; les notices paroissiales d'Expilly sont incohérentes (« parlement de Douay » pour Loon, Grande-Synthe, Coudekerque ; « parlement de Paris » pour Petite-Synthe, Bollezeele) : non établi.
* Sources non lues : *Encyclopédie méthodique, Jurisprudence* ; Denisart (édition de 1783-1790) ; almanachs provinciaux de 1789.
* Contrôle par la carte *Parlements Royaume de France (1789).svg* (Wikimedia Commons, 2023, CC BY-SA 4.0, sans source citée) : non fait.


