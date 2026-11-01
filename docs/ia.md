# Réalisation avec l'intelligence artificielle

L'atlas a été réalisé avec l'aide d'une intelligence artificielle : Claude Code, l'assistant de programmation d'Anthropic, avec les modèles Claude Opus (session principale) et Claude Sonnet (recherches documentaires confiées à des agents), du 30 octobre au 1er novembre 2026. Cette page dit ce qui a été fait par l'IA, ce qui relève de l'auteur, et comment vérifier le résultat.

## Ce qui a été fait par l'IA

* **Le code** : toute la chaîne de construction (téléchargement des sources, extraction des tracés des cartes de Wikimedia Commons, calage géographique, rattachement aux communes, corrections, couches dérivées, tableau des lieux, aperçus), leurs tests, l'exécution de la chaîne, et le site de l'atlas (https://t-fressin.github.io/atlas-ancien-regime/). Ce code reste dans le dépôt de travail de l'auteur et n'est pas publié : seuls les données, le tableau des lieux et la documentation le sont ; la documentation nomme les programmes pour dire de quelle étape vient chaque résultat.
* **La recherche documentaire** : recherche et lecture des textes intégraux (OCR) et, au besoin, des images des ouvrages en ligne (Internet Archive, Gallica, Google Livres, HathiTrust, Persée, Wikisource, Wikipédia, Dictionnaire historique de la Suisse) ; relevé des citations et des références ; proposition des corrections, des confirmations et des doutes. Les tables de `sources/` (`corrections.json`, `corrections_paroisses_generalites.csv`, `certitudes.csv`, `parlements_bailliages.csv`, `territoires_exterieurs.csv`) ont été remplies ainsi.
* **La documentation** : README, fiches des couches, `docs/` en entier, `CHANGELOG.md`.
* **Les contrôles** : tests automatiques, comparaison des couches avec Wikipédia et avec d'autres cartes, et relecture du dépôt avant publication. La « relecture indépendante » prévue avant chaque publication a été faite par une autre instance de l'IA, sans accès au raisonnement de la première : ce n'est pas une relecture humaine.

## Ce qui relève de l'auteur

* le projet, son périmètre (état de 1789, étendue du royaume selon Brette, couches retenues) et le choix de publier les données et la documentation sous licences ouvertes ;
* les consignes de méthode : sourcing de chaque action, aucune correction sans source lue, rien d'inventé, sources locales sur chaque territoire avant les dictionnaires généraux ;
* les arbitrages entre sources discordantes et les choix de méthode (par exemple, garder la valeur de la carte pour les cas douteux en le signalant, couper les diocèses aux limites du royaume, préférer Fallex à Brette pour les cessions de 1769 et 1779) ;
* l'examen des cartes produites.

## Limites et vérification

* Les citations ont été relevées par l'IA dans les textes consultés ; l'auteur ne les a pas toutes relues. L'OCR des ouvrages anciens est fautif (s long lu f, mots coupés) : les citations marquées « OCR brut, non corrigé » le reproduisent tel quel, et les mentions « page déduite », « page imprimée non établie », « appariement approché » ou « à vérifier » signalent ce qui n'a pas été lu sur l'image.
* L'IA peut mal lire un texte. Des erreurs de cette sorte ont été trouvées et corrigées en cours de travail (ainsi « Ham » lu pour « Haib », c'est-à-dire Haybes) ; il peut en rester.
* Pour limiter le risque d'invention, toute correction porte sa source et, le plus souvent, sa citation et le lien du document consulté (un contrôle automatique vérifie qu'aucune correction n'est sans motif ni source) : chaque décision peut donc être contrôlée sur le document. La colonne `certitude` et le tableau des lieux (`donnees/lieux/lieux_1789.csv`) donnent, commune par commune, la décision et sa source.
* Les signalements d'erreur sont bienvenus.
