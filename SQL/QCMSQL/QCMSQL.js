const questions = [
 {
  question: "1) SQL signifie :",
  answers: [
    "a) Structured Query Language",
    "b) Simple Query Language",
    "c) Standard Question Language",
    "d) System Query Logic",
  ],
  correct: 0,
},
{
  question: "2) Quelle commande permet de récupérer des données dans une table ?",
  answers: [
    "a) GET",
    "b) SELECT",
    "c) FETCH",
    "d) READ",
  ],
  correct: 1,
},
{
  question: "3) Quelle clause permet de filtrer les lignes retournées par une requête ?",
  answers: [
    "a) ORDER BY",
    "b) GROUP BY",
    "c) WHERE",
    "d) HAVING",
  ],
  correct: 2,
},
{
  question: "4) Quelle clause permet de trier les résultats d'une requête ?",
  answers: [
    "a) SORT BY",
    "b) ORDER BY",
    "c) GROUP BY",
    "d) FILTER BY",
  ],
  correct: 1,
},
{
  question: "5) Quelle instruction permet d'ajouter une nouvelle ligne dans une table ?",
  answers: [
    "a) ADD",
    "b) INSERT",
    "c) CREATE",
    "d) APPEND",
  ],
  correct: 1,
},
{
  question: "6) Quelle instruction permet de modifier des données existantes ?",
  answers: [
    "a) MODIFY",
    "b) CHANGE",
    "c) UPDATE",
    "d) ALTER",
  ],
  correct: 2,
},
{
  question: "7) Quelle instruction permet de supprimer des lignes d'une table ?",
  answers: [
    "a) REMOVE",
    "b) DELETE",
    "c) DROP",
    "d) ERASE",
  ],
  correct: 1,
},
{
  question: "8) Quelle commande permet de créer une nouvelle table ?",
  answers: [
    "a) NEW TABLE",
    "b) MAKE TABLE",
    "c) CREATE TABLE",
    "d) BUILD TABLE",
  ],
  correct: 2,
},
{
  question: "9) Quelle commande permet de supprimer complètement une table ?",
  answers: [
    "a) DELETE TABLE",
    "b) REMOVE TABLE",
    "c) DROP TABLE",
    "d) CLEAR TABLE",
  ],
  correct: 2,
},
{
  question: "10) Quelle clause permet d'éviter les doublons dans le résultat d'un SELECT ?",
  answers: [
    "a) UNIQUE",
    "b) DISTINCT",
    "c) DIFFERENT",
    "d) NODUPLICATE",
  ],
  correct: 1,
},
{
  question: "11) Que retourne la requête SELECT * FROM clients ?",
  answers: [
    "a) Toutes les colonnes et toutes les lignes de clients",
    "b) Seulement la première ligne",
    "c) Seulement la première colonne",
    "d) La structure de la table",
  ],
  correct: 0,
},
{
  question: "12) Quel symbole représente toutes les colonnes dans un SELECT ?",
  answers: [
    "a) %",
    "b) #",
    "c) *",
    "d) @",
  ],
  correct: 2,
},
{
  question: "13) Quelle clause permet de sélectionner uniquement les lignes correspondant à une condition ?",
  answers: [
    "a) WHERE",
    "b) SELECT",
    "c) FROM",
    "d) VALUES",
  ],
  correct: 0,
},
{
  question: "14) Quel opérateur permet de vérifier une égalité en SQL ?",
  answers: [
    "a) ==",
    "b) =",
    "c) :=",
    "d) ===",
  ],
  correct: 1,
},
{
  question: "15) Quel opérateur signifie « différent de » en SQL standard ?",
  answers: [
    "a) <>",
    "b) ><",
    "c) !=",
    "d) A et C",
  ],
  correct: 3,
},
{
  question: "16) Quelle condition permet de sélectionner les clients dont l'âge est supérieur à 18 ?",
  answers: [
    "a) WHERE age < 18",
    "b) WHERE age = 18",
    "c) WHERE age > 18",
    "d) WHERE age <= 18",
  ],
  correct: 2,
},
{
  question: "17) Quel opérateur permet de combiner deux conditions lorsque les deux doivent être vraies ?",
  answers: [
    "a) OR",
    "b) AND",
    "c) BOTH",
    "d) WITH",
  ],
  correct: 1,
},
{
  question: "18) Quel opérateur permet de sélectionner une ligne lorsque l'une des conditions est vraie ?",
  answers: [
    "a) AND",
    "b) OR",
    "c) EITHER",
    "d) WITH",
  ],
  correct: 1,
},
{
  question: "19) Quel opérateur logique permet d'inverser une condition ?",
  answers: [
    "a) NOT",
    "b) NO",
    "c) NEGATE",
    "d) REVERSE",
  ],
  correct: 0,
},
{
  question: "20) Quel opérateur permet de rechercher une valeur comprise dans une liste ?",
  answers: [
    "a) BETWEEN",
    "b) IN",
    "c) RANGE",
    "d) LIST",
  ],
  correct: 1,
},
{
  question: "21) Quelle clause permet de tester si une valeur appartient à un intervalle ?",
  answers: [
    "a) IN",
    "b) RANGE",
    "c) BETWEEN",
    "d) INTERVAL",
  ],
  correct: 2,
},
{
  question: "22) Quelle clause permet de rechercher un motif dans une chaîne de caractères ?",
  answers: [
    "a) LIKE",
    "b) MATCH",
    "c) FIND",
    "d) SEARCH",
  ],
  correct: 0,
},
{
  question: "23) Dans une expression LIKE, quel caractère représente zéro ou plusieurs caractères ?",
  answers: [
    "a) _",
    "b) %",
    "c) *",
    "d) #",
  ],
  correct: 1,
},
{
  question: "24) Dans une expression LIKE, quel caractère représente exactement un caractère ?",
  answers: [
    "a) %",
    "b) *",
    "c) _",
    "d) ?",
  ],
  correct: 2,
},
{
  question: "25) Quelle requête permet de trouver les noms qui commencent par « A » ?",
  answers: [
    "a) WHERE nom LIKE '%A'",
    "b) WHERE nom LIKE 'A%'",
    "c) WHERE nom = 'A%'",
    "d) WHERE nom STARTS 'A'",
  ],
  correct: 1,
},
{
  question: "26) Quelle requête permet de trouver les noms qui se terminent par « a » ?",
  answers: [
    "a) WHERE nom LIKE 'a%'",
    "b) WHERE nom LIKE '%a'",
    "c) WHERE nom LIKE '_a'",
    "d) WHERE nom = '%a'",
  ],
  correct: 1,
},
{
  question: "27) Comment tester correctement si une colonne contient NULL ?",
  answers: [
    "a) WHERE colonne = NULL",
    "b) WHERE colonne == NULL",
    "c) WHERE colonne IS NULL",
    "d) WHERE colonne NULL",
  ],
  correct: 2,
},
{
  question: "28) Comment tester si une colonne ne contient pas NULL ?",
  answers: [
    "a) WHERE colonne != NULL",
    "b) WHERE colonne IS NOT NULL",
    "c) WHERE colonne NOT NULL",
    "d) WHERE colonne <> NULL",
  ],
  correct: 1,
},
{
  question: "29) Que représente la valeur NULL en SQL ?",
  answers: [
    "a) La valeur zéro",
    "b) Une chaîne vide",
    "c) Une valeur inconnue ou absente",
    "d) La valeur false",
  ],
  correct: 2,
},
{
  question: "30) Quelle fonction permet de compter le nombre de lignes ?",
  answers: [
    "a) SUM()",
    "b) TOTAL()",
    "c) COUNT()",
    "d) NUMBER()",
  ],
  correct: 2,
},
{
  question: "31) Quelle fonction permet de calculer une somme ?",
  answers: [
    "a) ADD()",
    "b) SUM()",
    "c) TOTAL()",
    "d) PLUS()",
  ],
  correct: 1,
},
{
  question: "32) Quelle fonction permet de calculer une moyenne ?",
  answers: [
    "a) AVG()",
    "b) MEAN()",
    "c) AVERAGE()",
    "d) MID()",
  ],
  correct: 0,
},
{
  question: "33) Quelle fonction retourne la plus grande valeur ?",
  answers: [
    "a) HIGH()",
    "b) MAX()",
    "c) TOP()",
    "d) UPPER()",
  ],
  correct: 1,
},
{
  question: "34) Quelle fonction retourne la plus petite valeur ?",
  answers: [
    "a) MIN()",
    "b) LOW()",
    "c) SMALL()",
    "d) BOTTOM()",
  ],
  correct: 0,
},
{
  question: "35) Quelle clause est généralement utilisée avec les fonctions d'agrégation pour regrouper les lignes ?",
  answers: [
    "a) ORDER BY",
    "b) GROUP BY",
    "c) COLLECT BY",
    "d) AGGREGATE BY",
  ],
  correct: 1,
},
{
  question: "36) Quelle clause permet de filtrer les groupes après GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) FILTER",
    "c) HAVING",
    "d) GROUP WHERE",
  ],
  correct: 2,
},
{
  question: "37) Quelle instruction permet de supprimer toutes les lignes d'une table tout en conservant généralement sa structure ?",
  answers: [
    "a) DROP",
    "b) TRUNCATE",
    "c) DELETE DATABASE",
    "d) REMOVE",
  ],
  correct: 1,
},
{
  question: "38) Quelle commande supprime la table elle-même ainsi que ses données ?",
  answers: [
    "a) DELETE TABLE",
    "b) TRUNCATE TABLE",
    "c) DROP TABLE",
    "d) CLEAR TABLE",
  ],
  correct: 2,
},
{
  question: "39) Quel mot-clé permet de renommer une colonne dans le résultat d'une requête ?",
  answers: [
    "a) AS",
    "b) RENAME",
    "c) LABEL",
    "d) NAME",
  ],
  correct: 0,
},
{
  question: "40) Quelle requête est correcte pour donner l'alias « total » à une colonne ?",
  answers: [
    "a) SELECT prix RENAME total FROM produits",
    "b) SELECT prix AS total FROM produits",
    "c) SELECT AS prix total FROM produits",
    "d) SELECT prix TO total FROM produits",
  ],
  correct: 1,
},
{
  question: "41) Quel mot-clé permet de trier les résultats dans l'ordre décroissant ?",
  answers: [
    "a) DOWN",
    "b) DESC",
    "c) DESCENDING",
    "d) REVERSE",
  ],
  correct: 1,
},
{
  question: "42) Quel mot-clé permet de trier les résultats dans l'ordre croissant ?",
  answers: [
    "a) ASC",
    "b) UP",
    "c) ASCENDING",
    "d) RISE",
  ],
  correct: 0,
},
{
  question: "43) Quelle clause doit normalement suivre FROM pour filtrer les lignes ?",
  answers: [
    "a) WHERE",
    "b) FILTER",
    "c) HAVING",
    "d) CHECK",
  ],
  correct: 0,
},
{
  question: "44) Quelle instruction permet de sélectionner uniquement les colonnes nom et age de la table clients ?",
  answers: [
    "a) SELECT nom, age FROM clients",
    "b) GET nom, age FROM clients",
    "c) SELECT clients.nom AND age",
    "d) SELECT nom AND age IN clients",
  ],
  correct: 0,
},
{
  question: "45) Quelle requête sélectionne les clients âgés entre 18 et 30 ans inclus ?",
  answers: [
    "a) WHERE age IN 18 AND 30",
    "b) WHERE age BETWEEN 18 AND 30",
    "c) WHERE age RANGE 18 TO 30",
    "d) WHERE age >= 18 OR age <= 30",
  ],
  correct: 1,
},
{
  question: "46) Quelle requête sélectionne les clients dont le pays est France ou Maroc ?",
  answers: [
    "a) WHERE pays = 'France' AND 'Maroc'",
    "b) WHERE pays IN ('France', 'Maroc')",
    "c) WHERE pays BETWEEN 'France' AND 'Maroc'",
    "d) WHERE pays LIKE 'France, Maroc'",
  ],
  correct: 1,
},
{
  question: "47) Quelle commande permet d'ajouter une nouvelle colonne à une table existante ?",
  answers: [
    "a) UPDATE TABLE",
    "b) MODIFY TABLE",
    "c) ALTER TABLE",
    "d) CHANGE DATABASE",
  ],
  correct: 2,
},
{
  question: "48) Quelle contrainte garantit qu'une colonne ne peut pas contenir NULL ?",
  answers: [
    "a) UNIQUE",
    "b) NOT NULL",
    "c) REQUIRED",
    "d) NO EMPTY",
  ],
  correct: 1,
},
{
  question: "49) Quelle contrainte garantit que toutes les valeurs d'une colonne sont différentes ?",
  answers: [
    "a) UNIQUE",
    "b) DISTINCT",
    "c) DIFFERENT",
    "d) ONLY",
  ],
  correct: 0,
},
{
  question: "50) Quelle contrainte identifie de manière unique chaque ligne d'une table ?",
  answers: [
    "a) FOREIGN KEY",
    "b) UNIQUE KEY",
    "c) PRIMARY KEY",
    "d) IDENTIFIER",
  ],
  correct: 2,
},
{
  question: "51) Quel type de clé permet d'identifier de manière unique chaque enregistrement d'une table ?",
  answers: [
    "a) FOREIGN KEY",
    "b) PRIMARY KEY",
    "c) INDEX KEY",
    "d) CANDIDATE KEY",
  ],
  correct: 1,
},
{
  question: "52) Une PRIMARY KEY peut-elle contenir une valeur NULL ?",
  answers: [
    "a) Oui, toujours",
    "b) Oui, une seule fois",
    "c) Non",
    "d) Seulement avec MySQL",
  ],
  correct: 2,
},
{
  question: "53) Quel est le rôle principal d'une FOREIGN KEY ?",
  answers: [
    "a) Accélérer les requêtes",
    "b) Identifier chaque ligne de la table",
    "c) Établir une relation entre deux tables",
    "d) Trier les données",
  ],
  correct: 2,
},
{
  question: "54) Une FOREIGN KEY fait généralement référence à :",
  answers: [
    "a) Une colonne quelconque",
    "b) Une PRIMARY KEY ou une clé unique",
    "c) Une colonne contenant NULL",
    "d) Un index uniquement",
  ],
  correct: 1,
},
{
  question: "55) Quel type de relation existe lorsqu'un client peut passer plusieurs commandes ?",
  answers: [
    "a) Un-à-un",
    "b) Un-à-plusieurs",
    "c) Plusieurs-à-un",
    "d) Plusieurs-à-plusieurs uniquement",
  ],
  correct: 1,
},
{
  question: "56) Dans une relation un-à-plusieurs entre CLIENT et COMMANDE, où place-t-on généralement la FOREIGN KEY ?",
  answers: [
    "a) Dans CLIENT",
    "b) Dans COMMANDE",
    "c) Dans les deux obligatoirement",
    "d) Dans une troisième table",
  ],
  correct: 1,
},
{
  question: "57) Quel JOIN retourne uniquement les lignes ayant une correspondance dans les deux tables ?",
  answers: [
    "a) LEFT JOIN",
    "b) RIGHT JOIN",
    "c) INNER JOIN",
    "d) FULL JOIN",
  ],
  correct: 2,
},
{
  question: "58) Quel JOIN retourne toutes les lignes de la table de gauche, même sans correspondance ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) RIGHT JOIN",
    "d) CROSS JOIN",
  ],
  correct: 1,
},
{
  question: "59) Quel JOIN retourne toutes les lignes de la table de droite, même sans correspondance ?",
  answers: [
    "a) LEFT JOIN",
    "b) INNER JOIN",
    "c) RIGHT JOIN",
    "d) CROSS JOIN",
  ],
  correct: 2,
},
{
  question: "60) Quel JOIN retourne toutes les lignes des deux tables, qu'il y ait une correspondance ou non ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) RIGHT JOIN",
    "d) FULL OUTER JOIN",
  ],
  correct: 3,
},
{
  question: "61) Quelle syntaxe permet de réaliser un INNER JOIN ?",
  answers: [
    "a) SELECT * FROM A JOIN B ON A.id = B.id",
    "b) SELECT * FROM A WITH B ON A.id = B.id",
    "c) SELECT * FROM A CONNECT B A.id = B.id",
    "d) SELECT * FROM A MERGE B A.id = B.id",
  ],
  correct: 0,
},
{
  question: "62) Dans une clause JOIN, quel mot-clé permet généralement de définir la condition de jointure ?",
  answers: [
    "a) WHERE",
    "b) ON",
    "c) WITH",
    "d) USING ONLY",
  ],
  correct: 1,
},
{
  question: "63) Quelle requête permet de récupérer les noms des clients et leurs commandes ?",
  answers: [
    "a) SELECT c.nom, o.id FROM clients c INNER JOIN commandes o ON c.id = o.client_id",
    "b) SELECT c.nom, o.id FROM clients c WHERE o.client_id",
    "c) SELECT c.nom AND o.id FROM clients c JOIN commandes o",
    "d) GET c.nom, o.id FROM clients, commandes",
  ],
  correct: 0,
},
{
  question: "64) Qu'est-ce qu'un CROSS JOIN produit ?",
  answers: [
    "a) Une seule ligne",
    "b) Le produit cartésien des deux tables",
    "c) Uniquement les lignes correspondantes",
    "d) Les lignes NULL uniquement",
  ],
  correct: 1,
},
{
  question: "65) Si une table A contient 3 lignes et une table B contient 4 lignes, un CROSS JOIN peut produire :",
  answers: [
    "a) 7 lignes",
    "b) 12 lignes",
    "c) 4 lignes",
    "d) 3 lignes",
  ],
  correct: 1,
},
{
  question: "66) Quel JOIN est le plus approprié pour afficher tous les employés, y compris ceux qui n'ont aucun département associé ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) CROSS JOIN",
    "d) SELF JOIN",
  ],
  correct: 1,
},
{
  question: "67) Qu'est-ce qu'un SELF JOIN ?",
  answers: [
    "a) Une jointure d'une table avec elle-même",
    "b) Une jointure sans condition",
    "c) Une jointure entre deux bases",
    "d) Une jointure uniquement sur les clés primaires",
  ],
  correct: 0,
},
{
  question: "68) Quel opérateur permet de tester l'existence d'au moins une ligne retournée par une sous-requête ?",
  answers: [
    "a) EXISTS",
    "b) FOUND",
    "c) ANYROW",
    "d) PRESENT",
  ],
  correct: 0,
},
{
  question: "69) Une sous-requête est :",
  answers: [
    "a) Une requête SQL placée à l'intérieur d'une autre requête",
    "b) Une nouvelle base de données",
    "c) Une table temporaire obligatoire",
    "d) Une procédure stockée",
  ],
  correct: 0,
},
{
  question: "70) Quel opérateur peut être utilisé avec une sous-requête retournant plusieurs valeurs ?",
  answers: [
    "a) IN",
    "b) IS",
    "c) EQUAL",
    "d) SAME",
  ],
  correct: 0,
},
{
  question: "71) Quelle fonction permet de compter toutes les lignes d'une table, y compris celles contenant NULL dans certaines colonnes ?",
  answers: [
    "a) COUNT(*)",
    "b) COUNT(NULL)",
    "c) COUNT(ALL NULL)",
    "d) TOTAL(*)",
  ],
  correct: 0,
},
{
  question: "72) Quelle différence principale existe entre COUNT(*) et COUNT(colonne) ?",
  answers: [
    "a) COUNT(*) compte les lignes, COUNT(colonne) ignore les NULL de cette colonne",
    "b) Ils sont toujours différents",
    "c) COUNT(*) ne fonctionne pas avec les tables",
    "d) COUNT(colonne) compte uniquement les NULL",
  ],
  correct: 0,
},
{
  question: "73) Quelle requête compte le nombre de clients ?",
  answers: [
    "a) SELECT NUMBER(*) FROM clients",
    "b) SELECT COUNT(*) FROM clients",
    "c) SELECT TOTAL(clients) FROM clients",
    "d) SELECT SUM(*) FROM clients",
  ],
  correct: 1,
},
{
  question: "74) Quelle requête calcule le salaire moyen ?",
  answers: [
    "a) SELECT MEAN(salaire) FROM employes",
    "b) SELECT AVG(salaire) FROM employes",
    "c) SELECT AVERAGE(salaire) FROM employes",
    "d) SELECT MID(salaire) FROM employes",
  ],
  correct: 1,
},
{
  question: "75) Quelle requête retourne le salaire maximum ?",
  answers: [
    "a) SELECT TOP(salaire) FROM employes",
    "b) SELECT HIGH(salaire) FROM employes",
    "c) SELECT MAX(salaire) FROM employes",
    "d) SELECT BIGGEST(salaire) FROM employes",
  ],
  correct: 2,
},
{
  question: "76) Quelle requête permet de calculer le total des salaires ?",
  answers: [
    "a) SELECT SUM(salaire) FROM employes",
    "b) SELECT TOTAL(salaire) FROM employes",
    "c) SELECT ADD(salaire) FROM employes",
    "d) SELECT COUNT(salaire) FROM employes",
  ],
  correct: 0,
},
{
  question: "77) Que fait GROUP BY ?",
  answers: [
    "a) Il supprime les tables",
    "b) Il regroupe les lignes ayant les mêmes valeurs selon une ou plusieurs colonnes",
    "c) Il trie toujours les données",
    "d) Il crée une nouvelle base",
  ],
  correct: 1,
},
{
  question: "78) Quelle requête compte le nombre d'employés par département ?",
  answers: [
    "a) SELECT departement_id, COUNT(*) FROM employes GROUP BY departement_id",
    "b) SELECT COUNT(*) FROM employes ORDER BY departement_id",
    "c) SELECT departement_id FROM employes GROUP BY COUNT(*)",
    "d) SELECT GROUP(departement_id), COUNT(*) FROM employes",
  ],
  correct: 0,
},
{
  question: "79) Quelle clause permet de filtrer les résultats agrégés après GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) FILTER",
    "d) CHECK",
  ],
  correct: 1,
},
{
  question: "80) Quelle requête affiche les départements ayant plus de 5 employés ?",
  answers: [
    "a) SELECT departement_id, COUNT(*) FROM employes GROUP BY departement_id HAVING COUNT(*) > 5",
    "b) SELECT departement_id, COUNT(*) FROM employes WHERE COUNT(*) > 5 GROUP BY departement_id",
    "c) SELECT departement_id FROM employes HAVING employes > 5",
    "d) SELECT departement_id FROM employes GROUP BY COUNT(*) > 5",
  ],
  correct: 0,
},
{
  question: "81) Quelle clause est généralement évaluée avant GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) ORDER BY",
    "d) LIMIT",
  ],
  correct: 0,
},
{
  question: "82) Quelle clause est généralement appliquée après GROUP BY et permet de filtrer les groupes ?",
  answers: [
    "a) WHERE",
    "b) FROM",
    "c) HAVING",
    "d) DISTINCT",
  ],
  correct: 2,
},
{
  question: "83) Peut-on utiliser une fonction d'agrégation comme COUNT() avec GROUP BY ?",
  answers: [
    "a) Non",
    "b) Oui",
    "c) Seulement avec DELETE",
    "d) Seulement avec INSERT",
  ],
  correct: 1,
},
{
  question: "84) Quelle requête permet d'obtenir le nombre de commandes par client ?",
  answers: [
    "a) SELECT client_id, COUNT(*) FROM commandes GROUP BY client_id",
    "b) SELECT COUNT(client_id) GROUP commandes",
    "c) SELECT client_id FROM commandes ORDER BY COUNT(*)",
    "d) SELECT GROUP BY client_id, COUNT(*) FROM commandes",
  ],
  correct: 0,
},
{
  question: "85) Que retourne SELECT DISTINCT ville FROM clients ?",
  answers: [
    "a) Toutes les villes avec leurs doublons",
    "b) Les villes sans doublons",
    "c) Le nombre de villes",
    "d) La première ville uniquement",
  ],
  correct: 1,
},
{
  question: "86) Quelle requête permet d'obtenir les clients dont le nom commence par 'M' ?",
  answers: [
    "a) SELECT * FROM clients WHERE nom LIKE 'M%'",
    "b) SELECT * FROM clients WHERE nom LIKE '%M'",
    "c) SELECT * FROM clients WHERE nom = 'M%'",
    "d) SELECT * FROM clients WHERE nom START 'M'",
  ],
  correct: 0,
},
{
  question: "87) Quelle requête permet d'obtenir les clients dont le nom contient 'ali' ?",
  answers: [
    "a) WHERE nom LIKE 'ali%'",
    "b) WHERE nom LIKE '%ali%'",
    "c) WHERE nom = '%ali%'",
    "d) WHERE nom CONTAINS 'ali'",
  ],
  correct: 1,
},
{
  question: "88) Quelle condition sélectionne les salaires supérieurs ou égaux à 3000 ?",
  answers: [
    "a) salaire > 3000",
    "b) salaire >= 3000",
    "c) salaire => 3000",
    "d) salaire == 3000",
  ],
  correct: 1,
},
{
  question: "89) Quelle condition sélectionne les employés dont le salaire est différent de 3000 ?",
  answers: [
    "a) salaire != 3000",
    "b) salaire <> 3000",
    "c) salaire =! 3000",
    "d) A et B",
  ],
  correct: 3,
},
{
  question: "90) Quelle requête retourne les produits dont le prix est compris entre 100 et 500 inclus ?",
  answers: [
    "a) SELECT * FROM produits WHERE prix BETWEEN 100 AND 500",
    "b) SELECT * FROM produits WHERE prix IN 100 TO 500",
    "c) SELECT * FROM produits WHERE prix > 100 OR prix < 500",
    "d) SELECT * FROM produits WHERE prix RANGE 100,500",
  ],
  correct: 0,
},
{
  question: "91) Dans SQL, BETWEEN 10 AND 20 inclut généralement :",
  answers: [
    "a) Seulement 10",
    "b) Seulement 20",
    "c) 10 et 20",
    "d) Ni 10 ni 20",
  ],
  correct: 2,
},
{
  question: "92) Quelle requête sélectionne les employés dont le département est 1, 2 ou 3 ?",
  answers: [
    "a) WHERE departement_id BETWEEN 1 AND 3",
    "b) WHERE departement_id IN (1, 2, 3)",
    "c) WHERE departement_id = 1 AND 2 AND 3",
    "d) WHERE departement_id LIKE (1,2,3)",
  ],
  correct: 1,
},
{
  question: "93) Quelle requête est correcte pour rechercher les valeurs NULL ?",
  answers: [
    "a) SELECT * FROM employes WHERE telephone = NULL",
    "b) SELECT * FROM employes WHERE telephone IS NULL",
    "c) SELECT * FROM employes WHERE telephone == NULL",
    "d) SELECT * FROM employes WHERE telephone NULL",
  ],
  correct: 1,
},
{
  question: "94) Que retourne une comparaison directe avec NULL, comme salaire = NULL ?",
  answers: [
    "a) TRUE si salaire est NULL",
    "b) FALSE dans tous les cas",
    "c) UNKNOWN plutôt qu'une égalité vraie",
    "d) 0",
  ],
  correct: 2,
},
{
  question: "95) Quelle commande permet d'insérer une ligne dans une table ?",
  answers: [
    "a) INSERT INTO",
    "b) ADD INTO",
    "c) CREATE ROW",
    "d) APPEND ROW",
  ],
  correct: 0,
},
{
  question: "96) Quelle syntaxe est correcte pour insérer une ligne ?",
  answers: [
    "a) INSERT clients VALUES (1, 'Ali')",
    "b) INSERT INTO clients VALUES (1, 'Ali')",
    "c) ADD INTO clients VALUES (1, 'Ali')",
    "d) INSERT ROW clients (1, 'Ali')",
  ],
  correct: 1,
},
{
  question: "97) Quelle commande permet de modifier uniquement certaines lignes d'une table ?",
  answers: [
    "a) UPDATE ... WHERE",
    "b) ALTER ... WHERE",
    "c) MODIFY ... FILTER",
    "d) CHANGE ... WHERE",
  ],
  correct: 0,
},
{
  question: "98) Que risque-t-il de se produire avec UPDATE employes SET salaire = 5000 sans WHERE ?",
  answers: [
    "a) Une seule ligne est modifiée",
    "b) Aucune ligne n'est modifiée",
    "c) Toutes les lignes peuvent être modifiées",
    "d) La table est supprimée",
  ],
  correct: 2,
},
{
  question: "99) Que risque-t-il de se produire avec DELETE FROM clients sans WHERE ?",
  answers: [
    "a) Seul le premier client est supprimé",
    "b) Toutes les lignes peuvent être supprimées",
    "c) La table est automatiquement supprimée",
    "d) La base entière est supprimée",
  ],
  correct: 1,
},
{
  question: "100) Quelle instruction permet de supprimer uniquement les clients dont l'âge est inférieur à 18 ?",
  answers: [
    "a) DELETE clients WHERE age < 18",
    "b) DELETE FROM clients WHERE age < 18",
    "c) REMOVE FROM clients WHERE age < 18",
    "d) DROP FROM clients WHERE age < 18",
  ],
  correct: 1,
},
{
  question: "101) Quelle catégorie SQL contient principalement CREATE, ALTER et DROP ?",
  answers: [
    "a) DML",
    "b) DDL",
    "c) DCL",
    "d) TCL",
  ],
  correct: 1,
},
{
  question: "102) Que signifie DDL ?",
  answers: [
    "a) Data Definition Language",
    "b) Data Description Logic",
    "c) Database Definition Level",
    "d) Data Development Language",
  ],
  correct: 0,
},
{
  question: "103) Quelle commande appartient au DML ?",
  answers: [
    "a) CREATE",
    "b) ALTER",
    "c) INSERT",
    "d) DROP",
  ],
  correct: 2,
},
{
  question: "104) Que signifie DML ?",
  answers: [
    "a) Data Management Logic",
    "b) Data Manipulation Language",
    "c) Database Management Language",
    "d) Data Modification Level",
  ],
  correct: 1,
},
{
  question: "105) Quelle commande permet de modifier la structure d'une table existante ?",
  answers: [
    "a) UPDATE TABLE",
    "b) ALTER TABLE",
    "c) MODIFY DATABASE",
    "d) CHANGE TABLE",
  ],
  correct: 1,
},
{
  question: "106) Quelle commande permet généralement d'ajouter une colonne à une table ?",
  answers: [
    "a) ALTER TABLE ... ADD",
    "b) UPDATE TABLE ... ADD",
    "c) INSERT COLUMN",
    "d) CREATE COLUMN",
  ],
  correct: 0,
},
{
  question: "107) Quelle commande permet de supprimer une colonne d'une table dans les SGBD qui supportent cette syntaxe ?",
  answers: [
    "a) DELETE COLUMN",
    "b) ALTER TABLE ... DROP COLUMN",
    "c) REMOVE COLUMN",
    "d) DROP TABLE COLUMN",
  ],
  correct: 1,
},
{
  question: "108) Quelle commande permet de supprimer une table ?",
  answers: [
    "a) DELETE TABLE",
    "b) REMOVE TABLE",
    "c) DROP TABLE",
    "d) CLEAR TABLE",
  ],
  correct: 2,
},
{
  question: "109) Quelle commande supprime les données d'une table sans supprimer normalement sa structure ?",
  answers: [
    "a) DROP",
    "b) TRUNCATE",
    "c) DELETE DATABASE",
    "d) REMOVE TABLE",
  ],
  correct: 1,
},
{
  question: "110) Quelle commande permet de supprimer certaines lignes selon une condition ?",
  answers: [
    "a) DROP",
    "b) DELETE",
    "c) TRUNCATE",
    "d) ALTER",
  ],
  correct: 1,
},
{
  question: "111) Quelle instruction permet de créer une base de données ?",
  answers: [
    "a) MAKE DATABASE",
    "b) NEW DATABASE",
    "c) CREATE DATABASE",
    "d) BUILD DATABASE",
  ],
  correct: 2,
},
{
  question: "112) Quelle commande permet de supprimer une base de données ?",
  answers: [
    "a) DELETE DATABASE",
    "b) DROP DATABASE",
    "c) REMOVE DATABASE",
    "d) CLEAR DATABASE",
  ],
  correct: 1,
},
{
  question: "113) Quelle contrainte empêche l'insertion d'une valeur NULL dans une colonne ?",
  answers: [
    "a) UNIQUE",
    "b) NOT NULL",
    "c) PRIMARY",
    "d) CHECK",
  ],
  correct: 1,
},
{
  question: "114) Quelle contrainte garantit l'unicité des valeurs d'une colonne ou d'un ensemble de colonnes ?",
  answers: [
    "a) UNIQUE",
    "b) DISTINCT",
    "c) PRIMARY ONLY",
    "d) DIFFERENT",
  ],
  correct: 0,
},
{
  question: "115) Quelle contrainte permet d'imposer une condition sur les valeurs d'une colonne ?",
  answers: [
    "a) CHECK",
    "b) TEST",
    "c) VALIDATE",
    "d) CONDITION",
  ],
  correct: 0,
},
{
  question: "116) Quelle contrainte permet de définir une valeur automatiquement lorsqu'aucune valeur n'est fournie ?",
  answers: [
    "a) AUTO",
    "b) DEFAULT",
    "c) AUTOMATIC",
    "d) VALUE",
  ],
  correct: 1,
},
{
  question: "117) Quel est l'objectif principal d'une contrainte CHECK ?",
  answers: [
    "a) Créer un index",
    "b) Vérifier qu'une valeur respecte une condition",
    "c) Supprimer les doublons",
    "d) Créer une relation entre deux bases",
  ],
  correct: 1,
},
{
  question: "118) Quelle définition est correcte pour une clé primaire composée ?",
  answers: [
    "a) Une clé primaire utilisant plusieurs colonnes",
    "b) Une clé primaire contenant plusieurs tables",
    "c) Une clé primaire contenant uniquement NULL",
    "d) Une clé primaire créée automatiquement dans toutes les tables",
  ],
  correct: 0,
},
{
  question: "119) Une table peut-elle avoir plusieurs PRIMARY KEY séparées ?",
  answers: [
    "a) Oui, sans limite",
    "b) Oui, exactement deux",
    "c) Non, une table possède au maximum une contrainte PRIMARY KEY",
    "d) Seulement dans MySQL",
  ],
  correct: 2,
},
{
  question: "120) Une PRIMARY KEY peut-elle être composée de plusieurs colonnes ?",
  answers: [
    "a) Non",
    "b) Oui",
    "c) Seulement avec Oracle",
    "d) Seulement avec PostgreSQL",
  ],
  correct: 1,
},
{
  question: "121) Une table peut-elle avoir plusieurs contraintes UNIQUE ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement une",
    "d) Seulement deux",
  ],
  correct: 0,
},
{
  question: "122) Quel est le rôle d'un INDEX en SQL ?",
  answers: [
    "a) Accélérer certaines recherches et opérations de lecture",
    "b) Remplacer une PRIMARY KEY obligatoirement",
    "c) Stocker uniquement les valeurs NULL",
    "d) Supprimer les doublons automatiquement",
  ],
  correct: 0,
},
{
  question: "123) Quel est l'inconvénient possible d'un grand nombre d'index ?",
  answers: [
    "a) Les SELECT deviennent toujours impossibles",
    "b) Les opérations INSERT, UPDATE et DELETE peuvent être plus coûteuses",
    "c) Les tables deviennent automatiquement vides",
    "d) Les clés primaires sont supprimées",
  ],
  correct: 1,
},
{
  question: "124) Quelle instruction permet de créer un index ?",
  answers: [
    "a) MAKE INDEX",
    "b) CREATE INDEX",
    "c) ADD INDEX TABLE",
    "d) NEW INDEX",
  ],
  correct: 1,
},
{
  question: "125) Quelle syntaxe est correcte pour créer un index sur la colonne nom ?",
  answers: [
    "a) CREATE INDEX idx_nom ON clients(nom)",
    "b) INDEX CREATE idx_nom FROM clients(nom)",
    "c) CREATE idx_nom INDEX clients(nom)",
    "d) ADD INDEX idx_nom clients.nomm",
  ],
  correct: 0,
},
{
  question: "126) Un index garantit-il que les valeurs d'une colonne sont uniques ?",
  answers: [
    "a) Toujours",
    "b) Non, sauf s'il s'agit d'un index unique",
    "c) Oui, pour tous les SGBD",
    "d) Seulement avec PRIMARY KEY",
  ],
  correct: 1,
},
{
  question: "127) Quelle commande permet de créer un index avec des valeurs uniques ?",
  answers: [
    "a) CREATE UNIQUE INDEX",
    "b) CREATE DISTINCT INDEX",
    "c) CREATE INDEX ONLY",
    "d) CREATE INDEX DIFFERENT",
  ],
  correct: 0,
},
{
  question: "128) Qu'est-ce qu'une VIEW en SQL ?",
  answers: [
    "a) Une table physique contenant obligatoirement une copie des données",
    "b) Une requête enregistrée présentée comme une table virtuelle",
    "c) Un index spécial",
    "d) Une base de données temporaire",
  ],
  correct: 1,
},
{
  question: "129) Quelle commande permet de créer une vue ?",
  answers: [
    "a) CREATE VIEW",
    "b) CREATE TABLE VIEW",
    "c) MAKE VIEW",
    "d) NEW VIEW",
  ],
  correct: 0,
},
{
  question: "130) Quelle instruction permet de supprimer une vue ?",
  answers: [
    "a) DELETE VIEW",
    "b) DROP VIEW",
    "c) REMOVE VIEW",
    "d) CLEAR VIEW",
  ],
  correct: 1,
},
{
  question: "131) Quel est un avantage possible d'une VIEW ?",
  answers: [
    "a) Simplifier des requêtes complexes",
    "b) Remplacer obligatoirement toutes les tables",
    "c) Supprimer les contraintes",
    "d) Désactiver les transactions",
  ],
  correct: 0,
},
{
  question: "132) Une VIEW contient-elle normalement une copie indépendante de toutes les données de ses tables sources ?",
  answers: [
    "a) Oui, toujours",
    "b) Non, elle est généralement basée sur une requête",
    "c) Oui, uniquement avec SELECT",
    "d) Oui, uniquement avec MySQL",
  ],
  correct: 1,
},
{
  question: "133) Que signifie TCL ?",
  answers: [
    "a) Transaction Control Language",
    "b) Table Control Language",
    "c) Transaction Command Logic",
    "d) Table Creation Language",
  ],
  correct: 0,
},
{
  question: "134) Quelle commande permet de valider une transaction ?",
  answers: [
    "a) SAVE",
    "b) COMMIT",
    "c) CONFIRM",
    "d) APPLY",
  ],
  correct: 1,
},
{
  question: "135) Quelle commande permet généralement d'annuler les modifications non validées d'une transaction ?",
  answers: [
    "a) CANCEL",
    "b) UNDO",
    "c) ROLLBACK",
    "d) REVERSE",
  ],
  correct: 2,
},
{
  question: "136) Quel est le rôle de COMMIT ?",
  answers: [
    "a) Annuler une transaction",
    "b) Valider définitivement les modifications de la transaction",
    "c) Supprimer une table",
    "d) Créer une sauvegarde complète",
  ],
  correct: 1,
},
{
  question: "137) Quel est le rôle de ROLLBACK ?",
  answers: [
    "a) Valider les modifications",
    "b) Annuler les modifications non validées",
    "c) Créer une table",
    "d) Créer un index",
  ],
  correct: 1,
},
{
  question: "138) Que représente une transaction en SQL ?",
  answers: [
    "a) Un ensemble d'opérations traité comme une unité logique",
    "b) Une simple colonne",
    "c) Un index",
    "d) Une vue",
  ],
  correct: 0,
},
{
  question: "139) Que signifie ACID dans le contexte des transactions ?",
  answers: [
    "a) Atomicity, Consistency, Isolation, Durability",
    "b) Accuracy, Control, Integrity, Data",
    "c) Atomicity, Control, Index, Database",
    "d) Access, Consistency, Information, Data",
  ],
  correct: 0,
},
{
  question: "140) Que signifie Atomicity dans ACID ?",
  answers: [
    "a) Une transaction est exécutée entièrement ou pas du tout",
    "b) Les données sont toujours triées",
    "c) Chaque table possède une clé primaire",
    "d) Les utilisateurs sont authentifiés",
  ],
  correct: 0,
},
{
  question: "141) Que garantit la Consistency dans ACID ?",
  answers: [
    "a) La base passe d'un état cohérent à un autre état cohérent",
    "b) Les requêtes sont toujours rapides",
    "c) Les données sont toujours chiffrées",
    "d) Les tables sont toujours triées",
  ],
  correct: 0,
},
{
  question: "142) Que signifie Isolation dans ACID ?",
  answers: [
    "a) Les transactions concurrentes sont isolées selon le niveau d'isolation utilisé",
    "b) La base est isolée du réseau",
    "c) Les tables sont séparées physiquement",
    "d) Les utilisateurs ne peuvent pas utiliser SQL",
  ],
  correct: 0,
},
{
  question: "143) Que signifie Durability dans ACID ?",
  answers: [
    "a) Les données validées persistent même après une panne, selon les garanties du SGBD",
    "b) Les requêtes ne peuvent jamais échouer",
    "c) Les données ne peuvent jamais être supprimées",
    "d) Les tables sont automatiquement sauvegardées chaque minute",
  ],
  correct: 0,
},
{
  question: "144) Quel niveau de normalisation élimine généralement les groupes répétitifs et exige des valeurs atomiques ?",
  answers: [
    "a) 1NF",
    "b) 2NF",
    "c) 3NF",
    "d) 4NF",
  ],
  correct: 0,
},
{
  question: "145) Que signifie 1NF ?",
  answers: [
    "a) First Normal Form",
    "b) First Numeric Function",
    "c) Fundamental Normal Field",
    "d) First Network Form",
  ],
  correct: 0,
},
{
  question: "146) Quel est l'objectif principal de la normalisation d'une base de données ?",
  answers: [
    "a) Réduire les redondances et les anomalies de données",
    "b) Augmenter volontairement les doublons",
    "c) Supprimer toutes les relations",
    "d) Remplacer SQL par un autre langage",
  ],
  correct: 0,
},
{
  question: "147) Quelle forme normale élimine les dépendances partielles par rapport à une clé composée ?",
  answers: [
    "a) 1NF",
    "b) 2NF",
    "c) 3NF",
    "d) BCNF uniquement",
  ],
  correct: 1,
},
{
  question: "148) Quelle forme normale vise notamment à éliminer les dépendances transitives entre attributs non-clés ?",
  answers: [
    "a) 1NF",
    "b) 2NF",
    "c) 3NF",
    "d) 5NF",
  ],
  correct: 2,
},
{
  question: "149) Une dépendance fonctionnelle X → Y signifie que :",
  answers: [
    "a) X détermine Y",
    "b) Y détermine toujours X",
    "c) X et Y sont obligatoirement des clés primaires",
    "d) X et Y doivent être dans deux tables différentes",
  ],
  correct: 0,
},
{
  question: "150) Quel problème peut apparaître lorsqu'une même information est répétée dans plusieurs lignes ?",
  answers: [
    "a) Une anomalie de mise à jour",
    "b) Une amélioration automatique des performances",
    "c) Une création automatique d'index",
    "d) Une suppression automatique des doublons",
  ],
  correct: 0,
},
{
  question: "151) Soit la table clients(id, nom, age). Que retourne SELECT nom FROM clients WHERE age > 30 ?",
  answers: [
    "a) Tous les clients",
    "b) Les noms des clients âgés de plus de 30 ans",
    "c) Les âges supérieurs à 30",
    "d) Les clients âgés de moins de 30 ans",
  ],
  correct: 1,
},
{
  question: "152) Soit clients(id, nom, ville). Quelle requête retourne les clients habitant à Rabat ?",
  answers: [
    "a) SELECT * FROM clients WHERE ville = 'Rabat'",
    "b) SELECT * FROM clients WHERE ville == 'Rabat'",
    "c) SELECT * FROM clients WHERE ville IS 'Rabat'",
    "d) SELECT * FROM clients WHERE ville IN Rabat",
  ],
  correct: 0,
},
{
  question: "153) Quelle requête retourne les noms des clients par ordre alphabétique croissant ?",
  answers: [
    "a) SELECT nom FROM clients SORT nom",
    "b) SELECT nom FROM clients ORDER BY nom ASC",
    "c) SELECT nom FROM clients GROUP BY nom ASC",
    "d) SELECT nom FROM clients ORDER nom",
  ],
  correct: 1,
},
{
  question: "154) Quelle requête retourne les produits du plus cher au moins cher ?",
  answers: [
    "a) SELECT * FROM produits ORDER BY prix ASC",
    "b) SELECT * FROM produits ORDER BY prix DESC",
    "c) SELECT * FROM produits SORT prix DOWN",
    "d) SELECT * FROM produits GROUP BY prix DESC",
  ],
  correct: 1,
},
{
  question: "155) Soit une table produits avec 10 lignes. Que retourne SELECT COUNT(*) FROM produits ?",
  answers: [
    "a) 0",
    "b) 1",
    "c) 10",
    "d) Le nombre de colonnes",
  ],
  correct: 2,
},
{
  question: "156) Si une table contient les valeurs salaire : 1000, 2000, 3000, que retourne SELECT SUM(salaire) ?",
  answers: [
    "a) 2000",
    "b) 3000",
    "c) 6000",
    "d) 1000",
  ],
  correct: 2,
},
{
  question: "157) Si une table contient les valeurs 10, 20 et 30, que retourne SELECT AVG(valeur) ?",
  answers: [
    "a) 10",
    "b) 20",
    "c) 30",
    "d) 60",
  ],
  correct: 1,
},
{
  question: "158) Si les valeurs sont 15, 8, 27 et 4, que retourne MAX(valeur) ?",
  answers: [
    "a) 4",
    "b) 8",
    "c) 15",
    "d) 27",
  ],
  correct: 3,
},
{
  question: "159) Si les valeurs sont 15, 8, 27 et 4, que retourne MIN(valeur) ?",
  answers: [
    "a) 4",
    "b) 8",
    "c) 15",
    "d) 27",
  ],
  correct: 0,
},
{
  question: "160) Soit clients(id, nom, ville). Quelle requête retourne chaque ville une seule fois ?",
  answers: [
    "a) SELECT ville FROM clients",
    "b) SELECT UNIQUE ville FROM clients",
    "c) SELECT DISTINCT ville FROM clients",
    "d) SELECT ONLY ville FROM clients",
  ],
  correct: 2,
},
{
  question: "161) Soit produits(id, nom, prix). Quelle requête retourne les produits dont le prix est supérieur à 100 ?",
  answers: [
    "a) SELECT * FROM produits WHERE prix > 100",
    "b) SELECT * FROM produits HAVING prix > 100",
    "c) SELECT * FROM produits WHERE prix => 100",
    "d) SELECT * FROM produits IF prix > 100",
  ],
  correct: 0,
},
{
  question: "162) Quelle requête retourne les employés dont le salaire est inférieur ou égal à 2500 ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire <= 2500",
    "b) SELECT * FROM employes WHERE salaire =< 2500",
    "c) SELECT * FROM employes WHERE salaire <=> 2500",
    "d) SELECT * FROM employes WHERE salaire < 2500 ONLY",
  ],
  correct: 0,
},
{
  question: "163) Quelle requête retourne les clients dont l'âge n'est pas 25 ?",
  answers: [
    "a) SELECT * FROM clients WHERE age != 25",
    "b) SELECT * FROM clients WHERE age <> 25",
    "c) SELECT * FROM clients WHERE age =! 25",
    "d) A et B",
  ],
  correct: 3,
},
{
  question: "164) Quelle requête retourne les produits dont le prix est 10, 20 ou 30 ?",
  answers: [
    "a) SELECT * FROM produits WHERE prix IN (10, 20, 30)",
    "b) SELECT * FROM produits WHERE prix BETWEEN (10, 20, 30)",
    "c) SELECT * FROM produits WHERE prix = (10,20,30)",
    "d) SELECT * FROM produits WHERE prix LIKE (10,20,30)",
  ],
  correct: 0,
},
{
  question: "165) Quelle requête retourne les personnes dont le nom commence par 'A' et se termine par 'n' ?",
  answers: [
    "a) WHERE nom LIKE 'A%n'",
    "b) WHERE nom LIKE '%A%n%'",
    "c) WHERE nom LIKE 'A_n'",
    "d) WHERE nom = 'A%n'",
  ],
  correct: 0,
},
{
  question: "166) Que signifie le motif LIKE 'A%' ?",
  answers: [
    "a) Se termine par A",
    "b) Commence par A",
    "c) Contient uniquement A",
    "d) Contient exactement deux caractères",
  ],
  correct: 1,
},
{
  question: "167) Que signifie le motif LIKE '%A' ?",
  answers: [
    "a) Commence par A",
    "b) Se termine par A",
    "c) Contient uniquement A",
    "d) Ne contient pas A",
  ],
  correct: 1,
},
{
  question: "168) Que signifie le motif LIKE '%A%' ?",
  answers: [
    "a) Le texte contient A",
    "b) Le texte commence obligatoirement par A",
    "c) Le texte se termine obligatoirement par A",
    "d) Le texte ne contient pas A",
  ],
  correct: 0,
},
{
  question: "169) Que signifie le motif LIKE '_a%' ?",
  answers: [
    "a) Le deuxième caractère est 'a'",
    "b) Le premier caractère est 'a'",
    "c) Le texte se termine par 'a'",
    "d) Le texte contient uniquement 'a'",
  ],
  correct: 0,
},
{
  question: "170) Quelle condition permet de trouver les clients sans numéro de téléphone ?",
  answers: [
    "a) telephone = NULL",
    "b) telephone IS NULL",
    "c) telephone == NULL",
    "d) telephone = 'NULL'",
  ],
  correct: 1,
},
{
  question: "171) Quelle condition permet de trouver les clients ayant un numéro de téléphone ?",
  answers: [
    "a) telephone != NULL",
    "b) telephone IS NOT NULL",
    "c) telephone <> NULL",
    "d) telephone EXISTS",
  ],
  correct: 1,
},
{
  question: "172) Soit clients(id, nom, age). Quelle requête sélectionne les clients âgés de 20 à 30 ans et habitant à Casablanca ?",
  answers: [
    "a) SELECT * FROM clients WHERE age BETWEEN 20 AND 30 AND ville = 'Casablanca'",
    "b) SELECT * FROM clients WHERE age BETWEEN 20 AND 30 OR ville = 'Casablanca'",
    "c) SELECT * FROM clients WHERE age IN 20 AND 30 AND ville = Casablanca",
    "d) SELECT * FROM clients WHERE age > 20 AND ville < 30",
  ],
  correct: 0,
},
{
  question: "173) Quelle requête sélectionne les employés du département 1 ou 2 ?",
  answers: [
    "a) WHERE departement_id = 1 AND departement_id = 2",
    "b) WHERE departement_id IN (1, 2)",
    "c) WHERE departement_id BETWEEN 1 OR 2",
    "d) WHERE departement_id LIKE 1,2",
  ],
  correct: 1,
},
{
  question: "174) Quelle requête sélectionne les employés qui ne travaillent pas dans les départements 1 et 2 ?",
  answers: [
    "a) WHERE departement_id NOT IN (1, 2)",
    "b) WHERE departement_id != (1, 2)",
    "c) WHERE departement_id NOT BETWEEN 1 AND 2",
    "d) WHERE departement_id EXCEPT (1,2)",
  ],
  correct: 0,
},
{
  question: "175) Quelle est la différence principale entre AND et OR ?",
  answers: [
    "a) AND exige généralement que les deux conditions soient vraies, OR qu'au moins une soit vraie",
    "b) AND et OR sont toujours identiques",
    "c) OR exige toujours deux conditions vraies",
    "d) AND est utilisé uniquement avec SELECT",
  ],
  correct: 0,
},
{
  question: "176) Dans quelle partie d'une requête trouve-t-on généralement les tables utilisées ?",
  answers: [
    "a) SELECT",
    "b) FROM",
    "c) WHERE",
    "d) HAVING",
  ],
  correct: 1,
},
{
  question: "177) Quelle clause permet de limiter les lignes avant ou après le tri selon le SGBD utilisé ?",
  answers: [
    "a) LIMIT",
    "b) REDUCE",
    "c) CUT",
    "d) RESTRICT ROW",
  ],
  correct: 0,
},
{
  question: "178) Dans MySQL et PostgreSQL, quelle clause est couramment utilisée pour limiter le nombre de lignes retournées ?",
  answers: [
    "a) TOP",
    "b) LIMIT",
    "c) FIRST",
    "d) ROWCOUNT",
  ],
  correct: 1,
},
{
  question: "179) Dans SQL Server, quelle syntaxe est traditionnellement utilisée pour limiter le nombre de lignes retournées au début d'une requête SELECT ?",
  answers: [
    "a) LIMIT",
    "b) TOP",
    "c) FIRST",
    "d) MAXROWS",
  ],
  correct: 1,
},
{
  question: "180) Quelle requête retourne les 5 premiers produits selon un prix décroissant dans un SGBD supportant LIMIT ?",
  answers: [
    "a) SELECT * FROM produits LIMIT 5 ORDER BY prix DESC",
    "b) SELECT * FROM produits ORDER BY prix DESC LIMIT 5",
    "c) SELECT TOP 5 * FROM produits ORDER prix DESC",
    "d) SELECT * FROM produits FIRST 5 ORDER BY prix DESC",
  ],
  correct: 1,
},
{
  question: "181) Soit commandes(id, client_id, montant). Quelle requête calcule le total des commandes par client ?",
  answers: [
    "a) SELECT client_id, SUM(montant) FROM commandes GROUP BY client_id",
    "b) SELECT client_id, SUM(montant) FROM commandes ORDER BY client_id",
    "c) SELECT SUM(client_id), montant FROM commandes GROUP BY montant",
    "d) SELECT client_id FROM commandes SUM montant",
  ],
  correct: 0,
},
{
  question: "182) Soit commandes(client_id, montant). Quelle requête affiche uniquement les clients dont le total des commandes dépasse 10000 ?",
  answers: [
    "a) SELECT client_id, SUM(montant) FROM commandes GROUP BY client_id HAVING SUM(montant) > 10000",
    "b) SELECT client_id, SUM(montant) FROM commandes WHERE SUM(montant) > 10000 GROUP BY client_id",
    "c) SELECT client_id FROM commandes WHERE montant > 10000",
    "d) SELECT client_id, SUM(montant) FROM commandes HAVING montant > 10000",
  ],
  correct: 0,
},
{
  question: "183) Quelle clause est utilisée pour filtrer les lignes avant le regroupement ?",
  answers: [
    "a) HAVING",
    "b) WHERE",
    "c) GROUP BY",
    "d) ORDER BY",
  ],
  correct: 1,
},
{
  question: "184) Quelle clause est utilisée pour filtrer les groupes après GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) FILTER",
    "c) HAVING",
    "d) GROUP WHERE",
  ],
  correct: 2,
},
{
  question: "185) Quelle requête est généralement correcte pour trouver le salaire maximum par département ?",
  answers: [
    "a) SELECT departement_id, MAX(salaire) FROM employes GROUP BY departement_id",
    "b) SELECT MAX(salaire), departement_id FROM employes",
    "c) SELECT departement_id FROM employes MAX(salaire)",
    "d) SELECT MAX(departement_id), salaire FROM employes GROUP BY salaire",
  ],
  correct: 0,
},
{
  question: "186) Une requête SELECT peut-elle contenir plusieurs conditions dans WHERE ?",
  answers: [
    "a) Non",
    "b) Oui, avec des opérateurs logiques comme AND et OR",
    "c) Seulement avec ORDER BY",
    "d) Seulement avec GROUP BY",
  ],
  correct: 1,
},
{
  question: "187) Quelle requête retourne les employés dont le salaire est supérieur à 2000 et inférieur à 5000 ?",
  answers: [
    "a) WHERE salaire > 2000 AND salaire < 5000",
    "b) WHERE salaire > 2000 OR salaire < 5000",
    "c) WHERE salaire BETWEEN 2000 OR 5000",
    "d) WHERE salaire IN (2000,5000)",
  ],
  correct: 0,
},
{
  question: "188) Quelle requête est équivalente à salaire >= 2000 AND salaire <= 5000 ?",
  answers: [
    "a) salaire BETWEEN 2000 AND 5000",
    "b) salaire IN (2000,5000)",
    "c) salaire BETWEEN 2000 OR 5000",
    "d) salaire RANGE 2000,5000",
  ],
  correct: 0,
},
{
  question: "189) Soit A(id) contenant 1,2,3 et B(id) contenant 2,3,4. Quel résultat produit un INNER JOIN sur id ?",
  answers: [
    "a) 1,2,3,4",
    "b) 1,4",
    "c) 2,3",
    "d) Aucun résultat",
  ],
  correct: 2,
},
{
  question: "190) Soit A(id) contenant 1,2,3 et B(id) contenant 2,3,4. Quel résultat de clés est conservé par un LEFT JOIN de A vers B ?",
  answers: [
    "a) 2,3 uniquement",
    "b) 1,2,3",
    "c) 2,3,4",
    "d) 1,4",
  ],
  correct: 1,
},
{
  question: "191) Dans un LEFT JOIN, que contient généralement une colonne de la table droite lorsqu'aucune correspondance n'existe ?",
  answers: [
    "a) 0",
    "b) Une chaîne vide",
    "c) NULL",
    "d) La valeur de la clé primaire",
  ],
  correct: 2,
},
{
  question: "192) Soit clients et commandes. Quel JOIN permet d'afficher tous les clients, même ceux sans commande ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN depuis clients",
    "c) RIGHT JOIN depuis commandes",
    "d) CROSS JOIN",
  ],
  correct: 1,
},
{
  question: "193) Quelle condition peut permettre de trouver les clients n'ayant aucune commande après un LEFT JOIN ?",
  answers: [
    "a) commandes.id IS NULL",
    "b) commandes.id = NULL",
    "c) commandes.id = 0",
    "d) commandes.id NOT EXISTS NULL",
  ],
  correct: 0,
},
{
  question: "194) Quelle commande permet de combiner les résultats de deux SELECT compatibles ?",
  answers: [
    "a) MERGE",
    "b) UNION",
    "c) JOIN",
    "d) COMBINE",
  ],
  correct: 1,
},
{
  question: "195) Quelle différence caractérise généralement UNION par rapport à UNION ALL ?",
  answers: [
    "a) UNION supprime généralement les doublons, UNION ALL les conserve",
    "b) UNION conserve toujours les doublons",
    "c) UNION ALL ne retourne aucune ligne",
    "d) Il n'existe aucune différence",
  ],
  correct: 0,
},
{
  question: "196) Pour utiliser UNION, les SELECT doivent généralement avoir :",
  answers: [
    "a) Le même nom de table",
    "b) Le même nombre de colonnes avec des types compatibles",
    "c) La même PRIMARY KEY",
    "d) Le même nombre de lignes",
  ],
  correct: 1,
},
{
  question: "197) Quelle opération SQL permet de vérifier qu'une sous-requête retourne au moins une ligne ?",
  answers: [
    "a) EXISTS",
    "b) INCLUDES",
    "c) FOUND",
    "d) ANYROW",
  ],
  correct: 0,
},
{
  question: "198) Quelle requête peut sélectionner les clients ayant au moins une commande ?",
  answers: [
    "a) SELECT * FROM clients c WHERE EXISTS (SELECT 1 FROM commandes o WHERE o.client_id = c.id)",
    "b) SELECT * FROM clients WHERE EXISTS NULL",
    "c) SELECT * FROM clients WHERE commandes EXISTS",
    "d) SELECT * FROM clients IF EXISTS commandes",
  ],
  correct: 0,
},
{
  question: "199) Quelle instruction permet de renommer une colonne uniquement dans le résultat d'un SELECT sans modifier la structure de la table ?",
  answers: [
    "a) AS",
    "b) ALTER",
    "c) RENAME COLUMN",
    "d) CHANGE",
  ],
  correct: 0,
},
{
  question: "200) Quelle requête est correcte pour afficher le nom et le salaire avec le salaire augmenté de 10 % sous l'alias nouveau_salaire ?",
  answers: [
    "a) SELECT nom, salaire * 1.10 AS nouveau_salaire FROM employes",
    "b) SELECT nom, salaire + 10% AS nouveau_salaire FROM employes",
    "c) SELECT nom, salaire * 10 AS nouveau_salaire FROM employes",
    "d) SELECT nom, salaire INCREASE 10 AS nouveau_salaire FROM employes",
  ],
  correct: 0,
},
{
  question: "201) Quel type SQL est généralement utilisé pour stocker une chaîne de caractères de longueur variable ?",
  answers: [
    "a) VARCHAR",
    "b) INTEGER",
    "c) BOOLEAN",
    "d) DATE",
  ],
  correct: 0,
},
{
  question: "202) Quel type est généralement utilisé pour stocker un nombre entier ?",
  answers: [
    "a) VARCHAR",
    "b) INTEGER",
    "c) DATE",
    "d) TEXT",
  ],
  correct: 1,
},
{
  question: "203) Quel type SQL est destiné à stocker une date ?",
  answers: [
    "a) DATE",
    "b) STRING",
    "c) YEARTEXT",
    "d) CALENDAR",
  ],
  correct: 0,
},
{
  question: "204) Quel type est généralement utilisé pour stocker une date et une heure ?",
  answers: [
    "a) DATEONLY",
    "b) DATETIME ou TIMESTAMP selon le SGBD",
    "c) TIMEONLY",
    "d) CALENDAR",
  ],
  correct: 1,
},
{
  question: "205) Quel type est adapté au stockage de nombres avec des décimales exactes, notamment pour des montants financiers ?",
  answers: [
    "a) FLOAT uniquement",
    "b) DECIMAL ou NUMERIC",
    "c) TEXT",
    "d) BOOLEAN",
  ],
  correct: 1,
},
{
  question: "206) Quelle est une caractéristique de VARCHAR(n) ?",
  answers: [
    "a) Il stocke obligatoirement exactement n caractères",
    "b) Il permet une chaîne de longueur variable jusqu'à une limite définie",
    "c) Il stocke uniquement des nombres",
    "d) Il ne peut jamais contenir de caractères",
  ],
  correct: 1,
},
{
  question: "207) Quelle est la différence générale entre CHAR(n) et VARCHAR(n) ?",
  answers: [
    "a) CHAR est généralement de longueur fixe, VARCHAR de longueur variable",
    "b) CHAR stocke des nombres et VARCHAR des dates",
    "c) VARCHAR est toujours plus rapide",
    "d) Il n'existe aucune différence",
  ],
  correct: 0,
},
{
  question: "208) Quel type est généralement adapté pour stocker une valeur vraie ou fausse lorsque le SGBD le supporte ?",
  answers: [
    "a) BOOLEAN",
    "b) LOGIC",
    "c) TRUEFALSE",
    "d) BITSTRING",
  ],
  correct: 0,
},
{
  question: "209) Quelle contrainte impose une valeur par défaut lorsqu'aucune valeur n'est fournie ?",
  answers: [
    "a) DEFAULT",
    "b) AUTO",
    "c) FALLBACK",
    "d) STANDARD",
  ],
  correct: 0,
},
{
  question: "210) Quelle définition est correcte pour une FOREIGN KEY ?",
  answers: [
    "a) Une colonne qui référence généralement une clé candidate d'une autre table",
    "b) Une colonne qui contient obligatoirement des valeurs uniques",
    "c) Une colonne qui ne peut jamais être NULL",
    "d) Un index obligatoire",
  ],
  correct: 0,
},
{
  question: "211) Quel problème cherche à éviter l'intégrité référentielle ?",
  answers: [
    "a) Les lignes orphelines et les références invalides entre tables",
    "b) Les erreurs de syntaxe SQL",
    "c) Les requêtes trop longues",
    "d) Les doublons dans toutes les colonnes",
  ],
  correct: 0,
},
{
  question: "212) Une FOREIGN KEY peut-elle contenir des valeurs NULL ?",
  answers: [
    "a) Jamais",
    "b) Oui, si la colonne n'est pas définie NOT NULL et selon les contraintes",
    "c) Seulement dans Oracle",
    "d) Seulement dans MySQL",
  ],
  correct: 1,
},
{
  question: "213) Que signifie ON DELETE CASCADE sur une FOREIGN KEY ?",
  answers: [
    "a) Supprimer automatiquement les lignes dépendantes lorsqu'une ligne référencée est supprimée",
    "b) Empêcher toute suppression",
    "c) Supprimer toute la base",
    "d) Mettre toutes les colonnes à zéro",
  ],
  correct: 0,
},
{
  question: "214) Que signifie ON DELETE SET NULL ?",
  answers: [
    "a) Supprimer la table",
    "b) Mettre la clé étrangère à NULL lorsque la ligne référencée est supprimée, si cela est autorisé",
    "c) Mettre la clé étrangère à 0",
    "d) Annuler automatiquement toute transaction",
  ],
  correct: 1,
},
{
  question: "215) Quelle contrainte peut garantir qu'un âge soit supérieur ou égal à 18 ?",
  answers: [
    "a) CHECK (age >= 18)",
    "b) UNIQUE (age >= 18)",
    "c) DEFAULT (age >= 18)",
    "d) INDEX (age >= 18)",
  ],
  correct: 0,
},
{
  question: "216) Quelle instruction crée correctement une table simple ?",
  answers: [
    "a) CREATE TABLE clients (id INT, nom VARCHAR(100))",
    "b) NEW TABLE clients (id INT, nom VARCHAR(100))",
    "c) MAKE clients TABLE (id INT)",
    "d) CREATE clients AS TABLE id INT",
  ],
  correct: 0,
},
{
  question: "217) Quelle définition permet de déclarer id comme clé primaire ?",
  answers: [
    "a) id INT PRIMARY KEY",
    "b) id INT MAIN KEY",
    "c) id INT UNIQUE PRIMARY",
    "d) id INT KEY MAIN",
  ],
  correct: 0,
},
{
  question: "218) Quelle définition permet de rendre nom obligatoire ?",
  answers: [
    "a) nom VARCHAR(100) REQUIRED",
    "b) nom VARCHAR(100) NOT NULL",
    "c) nom VARCHAR(100) MANDATORY",
    "d) nom VARCHAR(100) NOEMPTY",
  ],
  correct: 1,
},
{
  question: "219) Quelle définition impose que email soit unique ?",
  answers: [
    "a) email VARCHAR(150) DISTINCT",
    "b) email VARCHAR(150) UNIQUE",
    "c) email VARCHAR(150) DIFFERENT",
    "d) email VARCHAR(150) ONLY",
  ],
  correct: 1,
},
{
  question: "220) Une contrainte PRIMARY KEY implique généralement :",
  answers: [
    "a) Unicité et absence de NULL",
    "b) Autorisation de tous les doublons",
    "c) Présence obligatoire de texte",
    "d) Création d'une VIEW",
  ],
  correct: 0,
},
{
  question: "221) Quelle commande permet d'ajouter une contrainte à une table existante ?",
  answers: [
    "a) ALTER TABLE",
    "b) UPDATE CONSTRAINT",
    "c) MODIFY DATABASE",
    "d) ADD DATABASE",
  ],
  correct: 0,
},
{
  question: "222) Quelle syntaxe est correcte pour ajouter une PRIMARY KEY à une table existante ?",
  answers: [
    "a) ALTER TABLE clients ADD PRIMARY KEY (id)",
    "b) UPDATE TABLE clients PRIMARY KEY (id)",
    "c) ADD PRIMARY clients KEY id",
    "d) ALTER clients PRIMARY (id)",
  ],
  correct: 0,
},
{
  question: "223) Quelle syntaxe permet généralement d'ajouter une FOREIGN KEY ?",
  answers: [
    "a) ALTER TABLE commandes ADD FOREIGN KEY (client_id) REFERENCES clients(id)",
    "b) ALTER TABLE commandes ADD REFERENCE client_id TO clients(id)",
    "c) ADD FOREIGN commandes(client_id) clients(id)",
    "d) UPDATE TABLE commandes FOREIGN KEY clients",
  ],
  correct: 0,
},
{
  question: "224) Quel est le rôle d'une clé candidate ?",
  answers: [
    "a) Une clé pouvant potentiellement identifier de manière unique chaque ligne",
    "b) Une clé qui doit toujours être étrangère",
    "c) Une clé contenant uniquement NULL",
    "d) Une clé utilisée uniquement pour les transactions",
  ],
  correct: 0,
},
{
  question: "225) Parmi plusieurs clés candidates, laquelle est choisie pour identifier officiellement les lignes ?",
  answers: [
    "a) FOREIGN KEY",
    "b) PRIMARY KEY",
    "c) INDEX KEY",
    "d) DEFAULT KEY",
  ],
  correct: 1,
},
{
  question: "226) Qu'est-ce qu'une clé naturelle ?",
  answers: [
    "a) Une clé basée sur une donnée ayant déjà une signification métier",
    "b) Une clé générée aléatoirement par le SGBD uniquement",
    "c) Une clé étrangère obligatoire",
    "d) Une clé contenant toujours des nombres",
  ],
  correct: 0,
},
{
  question: "227) Qu'est-ce qu'une clé artificielle ou surrogate key ?",
  answers: [
    "a) Un identifiant créé spécifiquement pour identifier une ligne",
    "b) Une clé provenant obligatoirement d'une autre table",
    "c) Une clé composée de texte métier",
    "d) Une contrainte CHECK",
  ],
  correct: 0,
},
{
  question: "228) Quel est l'objectif principal d'un index composite ?",
  answers: [
    "a) Indexer plusieurs colonnes ensemble",
    "b) Créer plusieurs bases",
    "c) Remplacer toutes les FOREIGN KEY",
    "d) Stocker uniquement les doublons",
  ],
  correct: 0,
},
{
  question: "229) Pour un index composite sur (nom, prenom), quelle colonne est généralement la première dans l'ordre de l'index ?",
  answers: [
    "a) prenom",
    "b) nom",
    "c) Les deux sont toujours identiques",
    "d) Aucune",
  ],
  correct: 1,
},
{
  question: "230) Pourquoi les index peuvent-ils améliorer les SELECT ?",
  answers: [
    "a) Ils peuvent permettre au SGBD de trouver certaines données plus efficacement",
    "b) Ils suppriment automatiquement les données inutiles",
    "c) Ils remplacent WHERE",
    "d) Ils empêchent toutes les erreurs SQL",
  ],
  correct: 0,
},
{
  question: "231) Quelle commande appartient généralement au DCL ?",
  answers: [
    "a) GRANT",
    "b) SELECT",
    "c) INSERT",
    "d) CREATE",
  ],
  correct: 0,
},
{
  question: "232) Que signifie DCL ?",
  answers: [
    "a) Data Control Language",
    "b) Database Creation Language",
    "c) Data Command Logic",
    "d) Database Control Level",
  ],
  correct: 0,
},
{
  question: "233) Quelle commande permet d'accorder des privilèges à un utilisateur ?",
  answers: [
    "a) ALLOW",
    "b) GRANT",
    "c) PERMIT",
    "d) AUTHORIZE",
  ],
  correct: 1,
},
{
  question: "234) Quelle commande permet de retirer des privilèges ?",
  answers: [
    "a) REMOVE",
    "b) DENY",
    "c) REVOKE",
    "d) CANCEL",
  ],
  correct: 2,
},
{
  question: "235) Quelle instruction donne le privilège SELECT sur clients à un utilisateur appelé user1 ?",
  answers: [
    "a) GRANT SELECT ON clients TO user1",
    "b) GIVE SELECT clients TO user1",
    "c) ALLOW SELECT FROM clients user1",
    "d) GRANT clients SELECT FOR user1",
  ],
  correct: 0,
},
{
  question: "236) Quelle instruction retire le privilège SELECT sur clients à user1 ?",
  answers: [
    "a) DELETE SELECT ON clients FROM user1",
    "b) REVOKE SELECT ON clients FROM user1",
    "c) REMOVE SELECT clients user1",
    "d) CANCEL SELECT FROM clients user1",
  ],
  correct: 1,
},
{
  question: "237) Quel privilège permet généralement de supprimer des lignes d'une table ?",
  answers: [
    "a) SELECT",
    "b) INSERT",
    "c) DELETE",
    "d) READ",
  ],
  correct: 2,
},
{
  question: "238) Quel privilège permet généralement d'ajouter des lignes ?",
  answers: [
    "a) INSERT",
    "b) ADD",
    "c) WRITE",
    "d) CREATE ROW",
  ],
  correct: 0,
},
{
  question: "239) Quel privilège permet généralement de modifier des lignes existantes ?",
  answers: [
    "a) CHANGE",
    "b) UPDATE",
    "c) MODIFY ROW",
    "d) ALTER DATA",
  ],
  correct: 1,
},
{
  question: "240) Quelle commande permet de commencer explicitement une transaction dans de nombreux SGBD ?",
  answers: [
    "a) BEGIN",
    "b) START TRANSACTION",
    "c) A et B selon le SGBD",
    "d) Les deux sont toujours obligatoires",
  ],
  correct: 2,
},
{
  question: "241) Quelle instruction valide les modifications d'une transaction ?",
  answers: [
    "a) COMMIT",
    "b) SAVE",
    "c) ACCEPT",
    "d) APPLY",
  ],
  correct: 0,
},
{
  question: "242) Quelle instruction annule les modifications non validées d'une transaction ?",
  answers: [
    "a) CANCEL",
    "b) ROLLBACK",
    "c) UNDO ALL",
    "d) RESET",
  ],
  correct: 1,
},
{
  question: "243) Qu'est-ce qu'un SAVEPOINT ?",
  answers: [
    "a) Un point intermédiaire dans une transaction auquel on peut revenir",
    "b) Une sauvegarde complète de la base",
    "c) Un index",
    "d) Une clé primaire",
  ],
  correct: 0,
},
{
  question: "244) Quelle commande permet de créer un point de sauvegarde dans une transaction ?",
  answers: [
    "a) CREATE SAVE",
    "b) SAVEPOINT",
    "c) CHECKPOINT SQL",
    "d) MARK TRANSACTION",
  ],
  correct: 1,
},
{
  question: "245) Quel est le but de ROLLBACK TO SAVEPOINT ?",
  answers: [
    "a) Annuler toute la base",
    "b) Revenir à un point précis de la transaction",
    "c) Valider la transaction",
    "d) Supprimer le savepoint uniquement",
  ],
  correct: 1,
},
{
  question: "246) Quelle anomalie peut apparaître lorsque deux transactions accèdent simultanément aux mêmes données sans isolation suffisante ?",
  answers: [
    "a) Lecture sale",
    "b) Erreur de syntaxe",
    "c) Suppression de la base",
    "d) Création automatique d'une table",
  ],
  correct: 0,
},
{
  question: "247) Une lecture sale (dirty read) correspond à :",
  answers: [
    "a) La lecture de données modifiées par une autre transaction mais pas encore validées",
    "b) La lecture d'une colonne contenant NULL",
    "c) La lecture d'une table vide",
    "d) La lecture d'un index",
  ],
  correct: 0,
},
{
  question: "248) Quelle anomalie correspond au fait de relire une même ligne et d'obtenir une valeur différente après modification par une autre transaction ?",
  answers: [
    "a) Dirty read",
    "b) Non-repeatable read",
    "c) Syntax error",
    "d) Dead column",
  ],
  correct: 1,
},
{
  question: "249) Quel est le principe général de la 3NF ?",
  answers: [
    "a) Éliminer certaines dépendances transitives des attributs non-clés",
    "b) Autoriser tous les doublons",
    "c) Supprimer toutes les clés étrangères",
    "d) Mettre toutes les données dans une seule table",
  ],
  correct: 0,
},
{
  question: "250) Quel est le principal risque d'une dénormalisation excessive ?",
  answers: [
    "a) Une augmentation de la redondance et des anomalies de mise à jour",
    "b) La disparition de toutes les données",
    "c) L'impossibilité d'utiliser SELECT",
    "d) La suppression automatique des index",
  ],
  correct: 0,
},
{
  question: "251) Quel est l'ordre logique général d'exécution d'une requête SELECT ?",
  answers: [
    "a) SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
    "b) FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
    "c) WHERE → FROM → SELECT → GROUP BY → ORDER BY",
    "d) FROM → SELECT → WHERE → ORDER BY → GROUP BY",
  ],
  correct: 1,
},
{
  question: "252) Quelle clause est utilisée pour spécifier les tables sources d'une requête ?",
  answers: [
    "a) SELECT",
    "b) FROM",
    "c) WHERE",
    "d) INTO",
  ],
  correct: 1,
},
{
  question: "253) Quelle requête retourne uniquement les noms des employés ayant un salaire supérieur à 4000 ?",
  answers: [
    "a) SELECT nom FROM employes WHERE salaire > 4000",
    "b) SELECT nom WHERE salaire > 4000 FROM employes",
    "c) SELECT * FROM employes HAVING salaire > 4000",
    "d) GET nom FROM employes IF salaire > 4000",
  ],
  correct: 0,
},
{
  question: "254) Quelle requête retourne les employés du département 2 triés par salaire décroissant ?",
  answers: [
    "a) SELECT * FROM employes WHERE departement_id = 2 ORDER BY salaire DESC",
    "b) SELECT * FROM employes ORDER BY salaire DESC WHERE departement_id = 2",
    "c) SELECT * FROM employes WHERE departement_id = 2 SORT salaire DOWN",
    "d) SELECT * FROM employes GROUP BY salaire DESC WHERE departement_id = 2",
  ],
  correct: 0,
},
{
  question: "255) Quelle requête retourne les 3 salaires les plus élevés dans un SGBD supportant LIMIT ?",
  answers: [
    "a) SELECT salaire FROM employes LIMIT 3 ORDER BY salaire DESC",
    "b) SELECT salaire FROM employes ORDER BY salaire DESC LIMIT 3",
    "c) SELECT TOP salaire 3 FROM employes",
    "d) SELECT salaire FROM employes MAX 3",
  ],
  correct: 1,
},
{
  question: "256) Quelle fonction permet de remplacer une valeur NULL par une autre valeur dans de nombreux SGBD SQL ?",
  answers: [
    "a) COALESCE",
    "b) REPLACE_NULL uniquement",
    "c) IFEMPTY",
    "d) NULLVALUE",
  ],
  correct: 0,
},
{
  question: "257) Que retourne COALESCE(NULL, 'Inconnu') ?",
  answers: [
    "a) NULL",
    "b) Une erreur obligatoire",
    "c) 'Inconnu'",
    "d) Une chaîne vide",
  ],
  correct: 2,
},
{
  question: "258) Quelle fonction permet de convertir une chaîne en majuscules dans SQL standard et de nombreux SGBD ?",
  answers: [
    "a) UPPER",
    "b) CAPITAL",
    "c) MAJ",
    "d) TOUPPER",
  ],
  correct: 0,
},
{
  question: "259) Quelle fonction permet généralement de convertir une chaîne en minuscules ?",
  answers: [
    "a) LOWER",
    "b) SMALL",
    "c) MINUS",
    "d) TOLOWERCASE",
  ],
  correct: 0,
},
{
  question: "260) Quelle fonction permet généralement de compter le nombre de caractères d'une chaîne ?",
  answers: [
    "a) SIZE",
    "b) LENGTH",
    "c) COUNTCHAR",
    "d) CHARCOUNT",
  ],
  correct: 1,
},
{
  question: "261) Quelle requête permet de supprimer les doublons d'une combinaison de deux colonnes ?",
  answers: [
    "a) SELECT DISTINCT ville, pays FROM clients",
    "b) SELECT UNIQUE ONLY ville, pays FROM clients",
    "c) SELECT ville, pays REMOVE DUPLICATES FROM clients",
    "d) SELECT DIFFERENT ville AND pays FROM clients",
  ],
  correct: 0,
},
{
  question: "262) Que fait SELECT DISTINCT ville, pays FROM clients ?",
  answers: [
    "a) Supprime les lignes contenant NULL",
    "b) Retourne les combinaisons distinctes de ville et pays",
    "c) Retourne uniquement les villes",
    "d) Compte les pays",
  ],
  correct: 1,
},
{
  question: "263) Quelle requête sélectionne les clients dont le nom ne commence pas par 'A' ?",
  answers: [
    "a) WHERE nom NOT LIKE 'A%'",
    "b) WHERE nom != LIKE 'A%'",
    "c) WHERE nom NOT 'A%'",
    "d) WHERE nom <> LIKE 'A%'",
  ],
  correct: 0,
},
{
  question: "264) Quel opérateur permet de tester qu'une sous-requête ne retourne aucune ligne correspondante ?",
  answers: [
    "a) NOT EXISTS",
    "b) NO EXISTS",
    "c) NOT FOUND",
    "d) EMPTY",
  ],
  correct: 0,
},
{
  question: "265) Quelle requête sélectionne les produits dont le prix est supérieur au prix moyen ?",
  answers: [
    "a) SELECT * FROM produits WHERE prix > (SELECT AVG(prix) FROM produits)",
    "b) SELECT * FROM produits WHERE prix > AVG(prix)",
    "c) SELECT * FROM produits HAVING prix > AVG",
    "d) SELECT * FROM produits WHERE prix > SELECT AVG(prix)",
  ],
  correct: 0,
},
{
  question: "266) Une sous-requête placée dans la clause WHERE peut-elle retourner plusieurs lignes avec l'opérateur IN ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement avec DELETE",
    "d) Seulement avec UPDATE",
  ],
  correct: 0,
},
{
  question: "267) Quel opérateur peut comparer une valeur à au moins une valeur retournée par une sous-requête ?",
  answers: [
    "a) ANY",
    "b) SOME",
    "c) A et B",
    "d) EACH",
  ],
  correct: 2,
},
{
  question: "268) Quel opérateur permet de comparer une valeur à toutes les valeurs retournées par une sous-requête ?",
  answers: [
    "a) ALL",
    "b) EVERYROW",
    "c) EACH",
    "d) TOTAL",
  ],
  correct: 0,
},
{
  question: "269) Quelle requête retourne les employés dont le salaire est supérieur à tous les salaires du département 3 ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire > ALL (SELECT salaire FROM employes WHERE departement_id = 3)",
    "b) SELECT * FROM employes WHERE salaire > ANY (SELECT salaire FROM employes WHERE departement_id = 3)",
    "c) SELECT * FROM employes WHERE salaire ALL > 3",
    "d) SELECT * FROM employes WHERE salaire > EVERY salaire",
  ],
  correct: 0,
},
{
  question: "270) Quel type de JOIN est généralement utilisé pour trouver les lignes sans correspondance dans une autre table ?",
  answers: [
    "a) LEFT JOIN avec un test IS NULL",
    "b) INNER JOIN uniquement",
    "c) CROSS JOIN uniquement",
    "d) UNION uniquement",
  ],
  correct: 0,
},
{
  question: "271) Quelle requête permet de trouver les clients sans commande ?",
  answers: [
    "a) SELECT c.* FROM clients c LEFT JOIN commandes o ON c.id = o.client_id WHERE o.id IS NULL",
    "b) SELECT c.* FROM clients c INNER JOIN commandes o ON c.id = o.client_id",
    "c) SELECT c.* FROM clients c WHERE o.id = NULL",
    "d) SELECT c.* FROM clients c RIGHT JOIN commandes o WHERE o.id IS NULL",
  ],
  correct: 0,
},
{
  question: "272) Quelle est la conséquence possible d'un mauvais critère de JOIN ?",
  answers: [
    "a) Obtenir des résultats incorrects ou un produit cartésien involontaire",
    "b) La base est automatiquement supprimée",
    "c) SQL corrige toujours automatiquement la condition",
    "d) Toutes les lignes deviennent NULL",
  ],
  correct: 0,
},
{
  question: "273) Que se passe-t-il généralement si une requête JOIN ne contient aucune condition de jointure et utilise simplement JOIN/CROSS JOIN selon la syntaxe ?",
  answers: [
    "a) Les lignes peuvent être combinées selon un produit cartésien",
    "b) Seules les lignes identiques sont retournées",
    "c) La requête devient automatiquement un INNER JOIN",
    "d) Aucune ligne n'est retournée",
  ],
  correct: 0,
},
{
  question: "274) Quelle requête permet de joindre trois tables ?",
  answers: [
    "a) SELECT * FROM A JOIN B ON A.id = B.a_id JOIN C ON B.id = C.b_id",
    "b) SELECT * FROM A WITH B WITH C",
    "c) SELECT * FROM A JOIN B, C WITHOUT ON",
    "d) JOIN A B C SELECT *",
  ],
  correct: 0,
},
{
  question: "275) Quelle clause permet de donner un alias à une table ?",
  answers: [
    "a) AS",
    "b) ALIAS",
    "c) NAME",
    "d) RENAME",
  ],
  correct: 0,
},
{
  question: "276) Pourquoi utiliser des alias de tables dans une requête SQL ?",
  answers: [
    "a) Pour rendre la requête plus lisible et faciliter les références aux tables",
    "b) Pour supprimer les données",
    "c) Pour créer automatiquement un index",
    "d) Pour remplacer les clés étrangères",
  ],
  correct: 0,
},
{
  question: "277) Quelle requête est correcte avec un alias de table ?",
  answers: [
    "a) SELECT c.nom FROM clients AS c",
    "b) SELECT c.nom FROM AS clients c",
    "c) SELECT AS c.nom FROM clients",
    "d) SELECT clients AS c.nom FROM clients",
  ],
  correct: 0,
},
{
  question: "278) Quelle opération SQL modifie la structure d'une table ?",
  answers: [
    "a) UPDATE",
    "b) ALTER",
    "c) SELECT",
    "d) INSERT",
  ],
  correct: 1,
},
{
  question: "279) Quelle opération SQL modifie les valeurs contenues dans les lignes ?",
  answers: [
    "a) UPDATE",
    "b) ALTER",
    "c) CREATE",
    "d) DROP",
  ],
  correct: 0,
},
{
  question: "280) Quelle opération SQL ajoute de nouvelles lignes ?",
  answers: [
    "a) INSERT",
    "b) UPDATE",
    "c) ALTER",
    "d) CREATE COLUMN",
  ],
  correct: 0,
},
{
  question: "281) Quelle opération SQL récupère des données sans les modifier ?",
  answers: [
    "a) SELECT",
    "b) UPDATE",
    "c) DELETE",
    "d) ALTER",
  ],
  correct: 0,
},
{
  question: "282) Quelle opération supprime des lignes sans supprimer nécessairement la structure de la table ?",
  answers: [
    "a) DELETE",
    "b) DROP",
    "c) ALTER",
    "d) DESTROY",
  ],
  correct: 0,
},
{
  question: "283) Quelle commande supprime la structure de la table elle-même ?",
  answers: [
    "a) DELETE TABLE",
    "b) DROP TABLE",
    "c) TRUNCATE ROWS",
    "d) CLEAR TABLE",
  ],
  correct: 1,
},
{
  question: "284) Quelle affirmation sur TRUNCATE est généralement correcte ?",
  answers: [
    "a) Elle supprime toutes les lignes tout en conservant la structure de la table",
    "b) Elle supprime uniquement une ligne",
    "c) Elle modifie uniquement les lignes sélectionnées par WHERE",
    "d) Elle transforme la table en VIEW",
  ],
  correct: 0,
},
{
  question: "285) Peut-on généralement utiliser WHERE directement avec TRUNCATE TABLE ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement avec SELECT",
    "d) Seulement avec PostgreSQL",
  ],
  correct: 1,
},
{
  question: "286) Quelle instruction permet de créer une vue basée sur une requête SELECT ?",
  answers: [
    "a) CREATE VIEW nom AS SELECT ...",
    "b) CREATE SELECT VIEW nom",
    "c) NEW VIEW nom FROM SELECT",
    "d) VIEW CREATE SELECT nom",
  ],
  correct: 0,
},
{
  question: "287) Quel avantage d'une vue peut être lié à la sécurité ?",
  answers: [
    "a) Elle peut exposer seulement certaines colonnes ou lignes aux utilisateurs autorisés",
    "b) Elle chiffre automatiquement toutes les données",
    "c) Elle empêche toujours les attaques SQL",
    "d) Elle supprime les droits utilisateurs",
  ],
  correct: 0,
},
{
  question: "288) Quel est le rôle d'une procédure stockée ?",
  answers: [
    "a) Stocker et exécuter un ensemble d'instructions côté SGBD selon les capacités du système",
    "b) Remplacer obligatoirement toutes les tables",
    "c) Créer uniquement des index",
    "d) Stocker uniquement des images",
  ],
  correct: 0,
},
{
  question: "289) Quel est le rôle général d'un trigger ?",
  answers: [
    "a) Exécuter automatiquement certaines actions lorsqu'un événement défini se produit",
    "b) Trier toutes les tables",
    "c) Créer une base automatiquement à chaque SELECT",
    "d) Remplacer SQL",
  ],
  correct: 0,
},
{
  question: "290) Quel événement peut déclencher un trigger selon le SGBD ?",
  answers: [
    "a) INSERT",
    "b) UPDATE",
    "c) DELETE",
    "d) A, B et C",
  ],
  correct: 3,
},
{
  question: "291) Quelle technique permet de réduire le risque d'injection SQL lors de l'utilisation d'entrées utilisateur ?",
  answers: [
    "a) Utiliser des requêtes préparées / paramètres",
    "b) Concaténer toutes les chaînes directement",
    "c) Désactiver WHERE",
    "d) Utiliser SELECT * uniquement",
  ],
  correct: 0,
},
{
  question: "292) Pourquoi concaténer directement une entrée utilisateur dans une requête SQL peut-il être dangereux ?",
  answers: [
    "a) Cela peut permettre à une entrée malveillante de modifier la logique de la requête",
    "b) Cela accélère toujours la requête",
    "c) Cela crée automatiquement une clé primaire",
    "d) Cela empêche toute erreur SQL",
  ],
  correct: 0,
},
{
  question: "293) Quelle propriété ACID garantit qu'une transaction est entièrement exécutée ou entièrement annulée ?",
  answers: [
    "a) Atomicity",
    "b) Consistency",
    "c) Isolation",
    "d) Durability",
  ],
  correct: 0,
},
{
  question: "294) Quelle propriété ACID concerne la persistance des données validées après une panne ?",
  answers: [
    "a) Atomicity",
    "b) Consistency",
    "c) Isolation",
    "d) Durability",
  ],
  correct: 3,
},
{
  question: "295) Quelle propriété ACID concerne principalement la séparation des effets des transactions concurrentes ?",
  answers: [
    "a) Atomicity",
    "b) Consistency",
    "c) Isolation",
    "d) Durability",
  ],
  correct: 2,
},
{
  question: "296) Quelle propriété ACID garantit le respect des contraintes et règles d'intégrité lors des transitions de la base ?",
  answers: [
    "a) Consistency",
    "b) Isolation",
    "c) Atomicity",
    "d) Durability",
  ],
  correct: 0,
},
{
  question: "297) Quelle forme normale exige que chaque attribut contienne une valeur atomique et qu'il n'y ait pas de groupes répétitifs ?",
  answers: [
    "a) 1NF",
    "b) 2NF",
    "c) 3NF",
    "d) BCNF",
  ],
  correct: 0,
},
{
  question: "298) Quel est l'un des principaux objectifs de la normalisation ?",
  answers: [
    "a) Réduire la redondance et les anomalies d'insertion, de mise à jour et de suppression",
    "b) Augmenter le nombre de doublons",
    "c) Supprimer toutes les relations",
    "d) Éviter l'utilisation des clés",
  ],
  correct: 0,
},
{
  question: "299) Quelle instruction permet de valider les modifications d'une transaction ?",
  answers: [
    "a) ROLLBACK",
    "b) COMMIT",
    "c) SAVEPOINT",
    "d) CANCEL",
  ],
  correct: 1,
},
{
  question: "300) Quelle instruction permet généralement d'annuler les modifications non validées d'une transaction ?",
  answers: [
    "a) COMMIT",
    "b) APPLY",
    "c) ROLLBACK",
    "d) ACCEPT",
  ],
  correct: 2,
},
{
  question: "301) Quelle clause permet de renommer temporairement une colonne dans le résultat ?",
  answers: [
    "a) AS",
    "b) RENAME",
    "c) CHANGE",
    "d) LABEL",
  ],
  correct: 0,
},
{
  question: "302) Quelle requête est correcte pour sélectionner les employés dont le salaire est supérieur à 3000 ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire > 3000",
    "b) SELECT * FROM employes IF salaire > 3000",
    "c) SELECT * FROM employes HAVING salaire > 3000",
    "d) SELECT * FROM employes CHECK salaire > 3000",
  ],
  correct: 0,
},
{
  question: "303) Quelle requête retourne uniquement les colonnes nom et email de la table clients ?",
  answers: [
    "a) SELECT nom, email FROM clients",
    "b) SELECT nom AND email FROM clients",
    "c) GET nom, email FROM clients",
    "d) SELECT (nom, email) IN clients",
  ],
  correct: 0,
},
{
  question: "304) Que retourne SELECT 2 + 3 en SQL ?",
  answers: [
    "a) 23",
    "b) 5",
    "c) Une erreur obligatoire",
    "d) NULL",
  ],
  correct: 1,
},
{
  question: "305) Quel opérateur permet de vérifier qu'une valeur n'est pas comprise dans une liste ?",
  answers: [
    "a) NOT IN",
    "b) OUT",
    "c) NOT LIST",
    "d) EXCLUDE",
  ],
  correct: 0,
},
{
  question: "306) Quelle requête sélectionne les employés dont le département n'est ni 1 ni 3 ?",
  answers: [
    "a) SELECT * FROM employes WHERE departement_id NOT IN (1, 3)",
    "b) SELECT * FROM employes WHERE departement_id != (1, 3)",
    "c) SELECT * FROM employes WHERE departement_id NOT = 1,3",
    "d) SELECT * FROM employes WHERE departement_id OUT (1,3)",
  ],
  correct: 0,
},
{
  question: "307) Quelle requête retourne les produits dont le nom contient le mot 'pro' ?",
  answers: [
    "a) SELECT * FROM produits WHERE nom LIKE '%pro%'",
    "b) SELECT * FROM produits WHERE nom LIKE 'pro%'",
    "c) SELECT * FROM produits WHERE nom = '%pro%'",
    "d) SELECT * FROM produits WHERE nom CONTAINS '%pro%'",
  ],
  correct: 0,
},
{
  question: "308) Quelle requête retourne les noms contenant exactement quatre caractères ?",
  answers: [
    "a) WHERE nom LIKE '____'",
    "b) WHERE nom LIKE '%%%%'",
    "c) WHERE nom LIKE '____%'",
    "d) WHERE nom LIKE '%____'",
  ],
  correct: 0,
},
{
  question: "309) Dans LIKE, que représente le caractère _ ?",
  answers: [
    "a) Zéro ou plusieurs caractères",
    "b) Exactement un caractère",
    "c) Un nombre entier",
    "d) Un espace obligatoire",
  ],
  correct: 1,
},
{
  question: "310) Dans LIKE, que représente le caractère % ?",
  answers: [
    "a) Exactement un caractère",
    "b) Zéro ou plusieurs caractères",
    "c) Uniquement un chiffre",
    "d) Une valeur NULL",
  ],
  correct: 1,
},
{
  question: "311) Quelle clause permet de regrouper les résultats selon une colonne ?",
  answers: [
    "a) GROUP BY",
    "b) ORDER BY",
    "c) COLLECT BY",
    "d) GROUP WITH",
  ],
  correct: 0,
},
{
  question: "312) Quelle requête calcule le nombre d'employés par ville ?",
  answers: [
    "a) SELECT ville, COUNT(*) FROM employes GROUP BY ville",
    "b) SELECT ville, COUNT(*) FROM employes ORDER BY ville",
    "c) SELECT COUNT(ville) GROUP employes BY ville",
    "d) SELECT ville FROM employes GROUP COUNT(*)",
  ],
  correct: 0,
},
{
  question: "313) Quelle requête retourne uniquement les villes ayant au moins 10 employés ?",
  answers: [
    "a) SELECT ville, COUNT(*) FROM employes GROUP BY ville HAVING COUNT(*) >= 10",
    "b) SELECT ville, COUNT(*) FROM employes WHERE COUNT(*) >= 10 GROUP BY ville",
    "c) SELECT ville FROM employes WHERE ville >= 10",
    "d) SELECT ville, COUNT(*) FROM employes GROUP BY COUNT(*) >= 10",
  ],
  correct: 0,
},
{
  question: "314) Peut-on utiliser WHERE pour filtrer directement le résultat de COUNT(*) ?",
  answers: [
    "a) Oui, toujours",
    "b) Non, on utilise généralement HAVING pour filtrer un agrégat après GROUP BY",
    "c) Oui, uniquement avec ORDER BY",
    "d) Seulement avec DELETE",
  ],
  correct: 1,
},
{
  question: "315) Quelle fonction retourne le nombre de valeurs non NULL d'une colonne ?",
  answers: [
    "a) COUNT(colonne)",
    "b) COUNT(NULL)",
    "c) NUMBER(colonne)",
    "d) TOTAL(colonne)",
  ],
  correct: 0,
},
{
  question: "316) Si une colonne contient les valeurs 10, NULL, 20, NULL, que retourne COUNT(colonne) ?",
  answers: [
    "a) 4",
    "b) 3",
    "c) 2",
    "d) 0",
  ],
  correct: 2,
},
{
  question: "317) Si une table contient 5 lignes, dont 3 ont une valeur NULL dans la colonne age, que retourne COUNT(*) ?",
  answers: [
    "a) 2",
    "b) 3",
    "c) 5",
    "d) 0",
  ],
  correct: 2,
},
{
  question: "318) Si une colonne contient 10, NULL et 20, AVG(colonne) ignore généralement :",
  answers: [
    "a) 10",
    "b) 20",
    "c) NULL",
    "d) Toutes les valeurs",
  ],
  correct: 2,
},
{
  question: "319) Quelle fonction permet généralement de retourner la première valeur non NULL parmi plusieurs expressions ?",
  answers: [
    "a) COALESCE",
    "b) FIRST_VALUE uniquement",
    "c) FIRSTNULL",
    "d) NONNULL",
  ],
  correct: 0,
},
{
  question: "320) Que retourne COALESCE(NULL, NULL, 15, 20) ?",
  answers: [
    "a) NULL",
    "b) 15",
    "c) 20",
    "d) 35",
  ],
  correct: 1,
},
{
  question: "321) Quelle fonction permet généralement d'arrondir une valeur numérique ?",
  answers: [
    "a) ROUND",
    "b) INTEGER",
    "c) APPROX",
    "d) FORMATNUM",
  ],
  correct: 0,
},
{
  question: "322) Quelle fonction retourne généralement la valeur absolue d'un nombre ?",
  answers: [
    "a) ABS",
    "b) POSITIVE",
    "c) MOD",
    "d) VALUE",
  ],
  correct: 0,
},
{
  question: "323) Quelle fonction permet de calculer le reste d'une division dans de nombreux SGBD ?",
  answers: [
    "a) MOD",
    "b) REST",
    "c) REMAINDER uniquement",
    "d) DIVIDE",
  ],
  correct: 0,
},
{
  question: "324) Quel opérateur est généralement utilisé pour additionner deux valeurs numériques ?",
  answers: [
    "a) +",
    "b) &",
    "c) ADD",
    "d) ++",
  ],
  correct: 0,
},
{
  question: "325) Quelle requête retourne les employés ayant un salaire entre 2500 et 4000 inclus ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire BETWEEN 2500 AND 4000",
    "b) SELECT * FROM employes WHERE salaire IN 2500 AND 4000",
    "c) SELECT * FROM employes WHERE salaire > 2500 OR salaire < 4000",
    "d) SELECT * FROM employes WHERE salaire RANGE 2500 TO 4000",
  ],
  correct: 0,
},
{
  question: "326) Que signifie BETWEEN 10 AND 20 ?",
  answers: [
    "a) Valeurs strictement supérieures à 10 et inférieures à 20",
    "b) Valeurs généralement comprises entre 10 et 20, bornes incluses",
    "c) Uniquement 10 et 20",
    "d) Valeurs inférieures à 10 ou supérieures à 20",
  ],
  correct: 1,
},
{
  question: "327) Quelle requête permet de trier d'abord par ville puis par nom ?",
  answers: [
    "a) SELECT * FROM clients ORDER BY ville ASC, nom ASC",
    "b) SELECT * FROM clients SORT ville AND nom",
    "c) SELECT * FROM clients GROUP BY ville, nom",
    "d) SELECT * FROM clients ORDER ville THEN nom",
  ],
  correct: 0,
},
{
  question: "328) Quelle requête trie par ville croissante et, pour une même ville, par salaire décroissant ?",
  answers: [
    "a) ORDER BY ville ASC, salaire DESC",
    "b) ORDER BY ville DESC, salaire ASC",
    "c) GROUP BY ville ASC, salaire DESC",
    "d) ORDER ville, salaire DOWN",
  ],
  correct: 0,
},
{
  question: "329) Quelle clause est normalement placée à la fin d'une requête SELECT pour effectuer un tri ?",
  answers: [
    "a) WHERE",
    "b) GROUP BY",
    "c) ORDER BY",
    "d) FROM",
  ],
  correct: 2,
},
{
  question: "330) Quelle requête sélectionne les clients dont le prénom est soit 'Ali' soit 'Sara' ?",
  answers: [
    "a) SELECT * FROM clients WHERE prenom IN ('Ali', 'Sara')",
    "b) SELECT * FROM clients WHERE prenom = 'Ali' AND 'Sara'",
    "c) SELECT * FROM clients WHERE prenom LIKE ('Ali','Sara')",
    "d) SELECT * FROM clients WHERE prenom BETWEEN 'Ali' AND 'Sara'",
  ],
  correct: 0,
},
{
  question: "331) Quelle requête est équivalente à WHERE ville IN ('Rabat', 'Agadir') ?",
  answers: [
    "a) WHERE ville = 'Rabat' AND ville = 'Agadir'",
    "b) WHERE ville = 'Rabat' OR ville = 'Agadir'",
    "c) WHERE ville <> 'Rabat' OR ville <> 'Agadir'",
    "d) WHERE ville BETWEEN 'Rabat' AND 'Agadir'",
  ],
  correct: 1,
},
{
  question: "332) Quel est le résultat logique de TRUE AND FALSE ?",
  answers: [
    "a) TRUE",
    "b) FALSE",
    "c) NULL",
    "d) ERROR",
  ],
  correct: 1,
},
{
  question: "333) Quel est le résultat logique de TRUE OR FALSE ?",
  answers: [
    "a) TRUE",
    "b) FALSE",
    "c) NULL",
    "d) ERROR",
  ],
  correct: 0,
},
{
  question: "334) Quel est le résultat logique de NOT TRUE ?",
  answers: [
    "a) TRUE",
    "b) FALSE",
    "c) NULL",
    "d) ERROR",
  ],
  correct: 1,
},
{
  question: "335) Quelle valeur logique particulière intervient dans la logique SQL à trois valeurs ?",
  answers: [
    "a) UNKNOWN",
    "b) MAYBE",
    "c) UNDEFINED uniquement",
    "d) INVALID",
  ],
  correct: 0,
},
{
  question: "336) Quelle expression permet de tester une valeur NULL ?",
  answers: [
    "a) = NULL",
    "b) IS NULL",
    "c) == NULL",
    "d) NULL =",
  ],
  correct: 1,
},
{
  question: "337) Quelle expression permet de tester une valeur non NULL ?",
  answers: [
    "a) != NULL",
    "b) IS NOT NULL",
    "c) <> NULL",
    "d) NOT NULL =",
  ],
  correct: 1,
},
{
  question: "338) Quelle requête permet de modifier le salaire de l'employé ayant id = 5 ?",
  answers: [
    "a) UPDATE employes SET salaire = 5000 WHERE id = 5",
    "b) ALTER employes SET salaire = 5000 WHERE id = 5",
    "c) MODIFY employes salaire = 5000 IF id = 5",
    "d) CHANGE employes SET salaire 5000 WHERE id 5",
  ],
  correct: 0,
},
{
  question: "339) Quelle clause est essentielle pour éviter de modifier toutes les lignes lors d'un UPDATE ciblé ?",
  answers: [
    "a) ORDER BY",
    "b) WHERE",
    "c) GROUP BY",
    "d) HAVING",
  ],
  correct: 1,
},
{
  question: "340) Quelle requête supprime le client dont id = 10 ?",
  answers: [
    "a) DELETE clients WHERE id = 10",
    "b) DELETE FROM clients WHERE id = 10",
    "c) DROP FROM clients WHERE id = 10",
    "d) REMOVE clients WHERE id = 10",
  ],
  correct: 1,
},
{
  question: "341) Quelle commande permet d'ajouter une nouvelle ligne dans clients ?",
  answers: [
    "a) INSERT INTO clients (...) VALUES (...)",
    "b) ADD ROW clients (...)",
    "c) CREATE ROW IN clients (...)",
    "d) APPEND clients (...)",
  ],
  correct: 0,
},
{
  question: "342) Quelle instruction permet de modifier la structure d'une table sans supprimer la table ?",
  answers: [
    "a) UPDATE",
    "b) ALTER TABLE",
    "c) SELECT",
    "d) INSERT",
  ],
  correct: 1,
},
{
  question: "343) Quelle instruction peut ajouter une colonne email à clients ?",
  answers: [
    "a) ALTER TABLE clients ADD email VARCHAR(150)",
    "b) UPDATE TABLE clients ADD email VARCHAR(150)",
    "c) INSERT COLUMN email INTO clients",
    "d) CREATE COLUMN email IN clients",
  ],
  correct: 0,
},
{
  question: "344) Quelle commande permet de supprimer un index ?",
  answers: [
    "a) DROP INDEX",
    "b) DELETE INDEX",
    "c) REMOVE INDEX",
    "d) CLEAR INDEX",
  ],
  correct: 0,
},
{
  question: "345) Quelle commande permet de créer une vue ?",
  answers: [
    "a) CREATE VIEW",
    "b) MAKE VIEW",
    "c) NEW VIEW",
    "d) BUILD VIEW",
  ],
  correct: 0,
},
{
  question: "346) Quelle commande permet de supprimer une vue ?",
  answers: [
    "a) DELETE VIEW",
    "b) DROP VIEW",
    "c) REMOVE VIEW",
    "d) CLEAR VIEW",
  ],
  correct: 1,
},
{
  question: "347) Quelle instruction permet de créer une table à partir du résultat d'une requête dans les SGBD supportant CREATE TABLE AS ?",
  answers: [
    "a) CREATE TABLE nouvelle AS SELECT ...",
    "b) CREATE TABLE nouvelle FROM SELECT ...",
    "c) NEW TABLE nouvelle WITH SELECT ...",
    "d) COPY TABLE nouvelle SELECT ...",
  ],
  correct: 0,
},
{
  question: "348) Quelle opération permet de combiner les lignes de deux SELECT compatibles en conservant les doublons ?",
  answers: [
    "a) UNION",
    "b) UNION ALL",
    "c) JOIN ALL",
    "d) MERGE ALL",
  ],
  correct: 1,
},
{
  question: "349) Quelle opération combine deux résultats et élimine généralement les doublons ?",
  answers: [
    "a) UNION",
    "b) UNION ALL",
    "c) JOIN",
    "d) MERGE",
  ],
  correct: 0,
},
{
  question: "350) Quelle affirmation concernant UNION est correcte ?",
  answers: [
    "a) Les deux SELECT doivent généralement avoir le même nombre de colonnes avec des types compatibles",
    "b) Les deux SELECT doivent obligatoirement utiliser la même table",
    "c) Les deux SELECT doivent avoir exactement le même nombre de lignes",
    "d) UNION fonctionne uniquement avec des colonnes numériques",
  ],
  correct: 0,
},
{
  question: "351) Quel JOIN retourne uniquement les enregistrements correspondants dans les deux tables ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) RIGHT JOIN",
    "d) FULL OUTER JOIN",
  ],
  correct: 0,
},
{
  question: "352) Quel JOIN conserve toutes les lignes de la table gauche ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) RIGHT JOIN",
    "d) CROSS JOIN",
  ],
  correct: 1,
},
{
  question: "353) Dans un LEFT JOIN entre A et B, si une ligne de A n'a aucune correspondance dans B, les colonnes de B valent généralement :",
  answers: [
    "a) 0",
    "b) Une chaîne vide",
    "c) NULL",
    "d) FALSE",
  ],
  correct: 2,
},
{
  question: "354) Quelle syntaxe correspond à un LEFT JOIN ?",
  answers: [
    "a) SELECT * FROM A LEFT JOIN B ON A.id = B.a_id",
    "b) SELECT * FROM A JOIN LEFT B ON A.id = B.a_id",
    "c) SELECT * FROM A LEFT B JOIN ON A.id = B.a_id",
    "d) SELECT * FROM A JOIN B LEFT A.id = B.a_id",
  ],
  correct: 0,
},
{
  question: "355) Quelle syntaxe correspond à un RIGHT JOIN ?",
  answers: [
    "a) SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id",
    "b) SELECT * FROM A JOIN RIGHT B A.id = B.a_id",
    "c) SELECT * FROM A RIGHT B ON A.id = B.a_id",
    "d) SELECT * FROM A JOIN B RIGHT A.id = B.a_id",
  ],
  correct: 0,
},
{
  question: "356) Quel JOIN produit toutes les combinaisons possibles entre les lignes de deux tables ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) CROSS JOIN",
    "d) SELF JOIN",
  ],
  correct: 2,
},
{
  question: "357) Si A contient 5 lignes et B contient 4 lignes, un CROSS JOIN peut produire :",
  answers: [
    "a) 9 lignes",
    "b) 20 lignes",
    "c) 5 lignes",
    "d) 4 lignes",
  ],
  correct: 1,
},
{
  question: "358) Quel type de JOIN consiste à joindre une table avec elle-même ?",
  answers: [
    "a) SELF JOIN",
    "b) INTERNAL JOIN",
    "c) RECURSIVE JOIN uniquement",
    "d) SAME JOIN",
  ],
  correct: 0,
},
{
  question: "359) Pourquoi utilise-t-on souvent deux alias dans un SELF JOIN ?",
  answers: [
    "a) Pour distinguer les deux utilisations de la même table",
    "b) Pour créer deux tables physiques",
    "c) Pour supprimer les doublons",
    "d) Pour créer deux clés primaires",
  ],
  correct: 0,
},
{
  question: "360) Quelle requête peut comparer un employé à son manager stocké dans la même table ?",
  answers: [
    "a) SELECT e.nom, m.nom FROM employes e JOIN employes m ON e.manager_id = m.id",
    "b) SELECT e.nom, m.nom FROM employes e UNION employes m",
    "c) SELECT e.nom, m.nom FROM employes e CROSS manager m",
    "d) SELECT manager FROM employes WHERE manager = employes",
  ],
  correct: 0,
},
{
  question: "361) Quelle clause définit habituellement la condition de correspondance d'un JOIN ?",
  answers: [
    "a) ON",
    "b) WITH",
    "c) WHERE ONLY",
    "d) MATCH",
  ],
  correct: 0,
},
{
  question: "362) Quelle clause peut aussi être utilisée pour une jointure sur une colonne portant le même nom dans les deux tables ?",
  answers: [
    "a) USING",
    "b) MATCHING",
    "c) SAME",
    "d) COMMON",
  ],
  correct: 0,
},
{
  question: "363) Quelle syntaxe est correcte avec USING ?",
  answers: [
    "a) SELECT * FROM clients JOIN commandes USING (client_id)",
    "b) SELECT * FROM clients JOIN commandes USING client_id",
    "c) SELECT * FROM clients USING JOIN commandes (client_id)",
    "d) SELECT * FROM clients JOIN USING commandes.client_id",
  ],
  correct: 0,
},
{
  question: "364) Que fait un INNER JOIN si aucune ligne ne correspond à la condition ?",
  answers: [
    "a) Il retourne toutes les lignes de gauche",
    "b) Il retourne toutes les lignes de droite",
    "c) Il ne retourne aucune ligne correspondante",
    "d) Il retourne des lignes avec NULL",
  ],
  correct: 2,
},
{
  question: "365) Quelle requête permet de récupérer les commandes et le nom du client associé ?",
  answers: [
    "a) SELECT o.id, c.nom FROM commandes o INNER JOIN clients c ON o.client_id = c.id",
    "b) SELECT o.id, c.nom FROM commandes o WHERE c.id = o.client_id",
    "c) SELECT o.id AND c.nom FROM commandes o JOIN clients c",
    "d) GET o.id, c.nom FROM commandes o WITH clients c",
  ],
  correct: 0,
},
{
  question: "366) Quel est le principal danger d'un JOIN sans condition appropriée ?",
  answers: [
    "a) Produit cartésien involontaire",
    "b) Création automatique d'une clé primaire",
    "c) Suppression des tables",
    "d) Transformation en UPDATE",
  ],
  correct: 0,
},
{
  question: "367) Une sous-requête est :",
  answers: [
    "a) Une requête située à l'intérieur d'une autre requête",
    "b) Une table permanente",
    "c) Une procédure obligatoire",
    "d) Un index",
  ],
  correct: 0,
},
{
  question: "368) Où peut-on trouver une sous-requête selon la syntaxe SQL ?",
  answers: [
    "a) WHERE",
    "b) FROM",
    "c) SELECT",
    "d) Plusieurs de ces clauses",
  ],
  correct: 3,
},
{
  question: "369) Quelle requête trouve les employés gagnant plus que le salaire moyen ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire > (SELECT AVG(salaire) FROM employes)",
    "b) SELECT * FROM employes WHERE salaire > AVG(salaire)",
    "c) SELECT * FROM employes HAVING salaire > AVG(salaire)",
    "d) SELECT * FROM employes WHERE salaire > SELECT AVG(salaire)",
  ],
  correct: 0,
},
{
  question: "370) Une sous-requête scalaire retourne généralement :",
  answers: [
    "a) Une seule valeur",
    "b) Une base entière",
    "c) Une table obligatoirement vide",
    "d) Plusieurs tables",
  ],
  correct: 0,
},
{
  question: "371) Quel opérateur est adapté lorsqu'une sous-requête retourne plusieurs valeurs et qu'on souhaite tester l'appartenance ?",
  answers: [
    "a) IN",
    "b) = uniquement",
    "c) IS",
    "d) SAME",
  ],
  correct: 0,
},
{
  question: "372) Quelle requête trouve les employés travaillant dans les départements où existe au moins un employé nommé 'Ali' ?",
  answers: [
    "a) SELECT * FROM employes WHERE departement_id IN (SELECT departement_id FROM employes WHERE nom = 'Ali')",
    "b) SELECT * FROM employes WHERE departement_id = SELECT departement_id FROM employes",
    "c) SELECT * FROM employes WHERE departement_id LIKE (SELECT departement_id)",
    "d) SELECT * FROM employes WHERE departement_id EXISTS 'Ali'",
  ],
  correct: 0,
},
{
  question: "373) Quel opérateur teste l'existence d'au moins une ligne dans une sous-requête ?",
  answers: [
    "a) EXISTS",
    "b) PRESENT",
    "c) FOUND",
    "d) THERE",
  ],
  correct: 0,
},
{
  question: "374) Quelle requête trouve les clients ayant au moins une commande ?",
  answers: [
    "a) SELECT * FROM clients c WHERE EXISTS (SELECT 1 FROM commandes o WHERE o.client_id = c.id)",
    "b) SELECT * FROM clients WHERE EXISTS commandes",
    "c) SELECT * FROM clients WHERE commandes EXISTS",
    "d) SELECT * FROM clients IF EXISTS commandes",
  ],
  correct: 0,
},
{
  question: "375) Quelle expression recherche les clients n'ayant aucune commande ?",
  answers: [
    "a) WHERE NOT EXISTS (SELECT 1 FROM commandes o WHERE o.client_id = c.id)",
    "b) WHERE NO EXISTS commandes",
    "c) WHERE EXISTS NOT commandes",
    "d) WHERE commandes IS EMPTY",
  ],
  correct: 0,
},
{
  question: "376) Quelle différence principale existe entre IN et EXISTS ?",
  answers: [
    "a) IN teste généralement l'appartenance à un ensemble de valeurs, EXISTS teste l'existence de lignes",
    "b) IN fonctionne uniquement avec les nombres",
    "c) EXISTS ne fonctionne jamais avec une sous-requête",
    "d) Ils sont syntaxiquement identiques",
  ],
  correct: 0,
},
{
  question: "377) Quel opérateur permet de comparer une valeur à toutes les valeurs d'une sous-requête ?",
  answers: [
    "a) ALL",
    "b) EVERY",
    "c) EACH",
    "d) TOTAL",
  ],
  correct: 0,
},
{
  question: "378) Quel opérateur permet de comparer une valeur à au moins une valeur d'une sous-requête ?",
  answers: [
    "a) ANY",
    "b) ALL",
    "c) EACH",
    "d) EACHONE",
  ],
  correct: 0,
},
{
  question: "379) Quelle condition signifie généralement « salaire supérieur à tous les salaires retournés » ?",
  answers: [
    "a) salaire > ALL (sous-requête)",
    "b) salaire > ANY (sous-requête)",
    "c) salaire IN (sous-requête)",
    "d) salaire EXISTS (sous-requête)",
  ],
  correct: 0,
},
{
  question: "380) Quelle condition signifie généralement « salaire supérieur à au moins un salaire retourné » ?",
  answers: [
    "a) salaire > ALL (sous-requête)",
    "b) salaire > ANY (sous-requête)",
    "c) salaire = ALL (sous-requête)",
    "d) salaire EXISTS (sous-requête)",
  ],
  correct: 1,
},
{
  question: "381) Quelle expression permet de produire une valeur différente selon une condition ?",
  answers: [
    "a) CASE",
    "b) SWITCH SQL",
    "c) IFCASE",
    "d) CONDITION",
  ],
  correct: 0,
},
{
  question: "382) Quelle syntaxe est correcte ?",
  answers: [
    "a) CASE WHEN salaire >= 5000 THEN 'Haut' ELSE 'Normal' END",
    "b) CASE salaire WHEN >= 5000 THEN 'Haut'",
    "c) IF salaire >= 5000 THEN 'Haut'",
    "d) CASE IF salaire >= 5000 RETURN 'Haut'",
  ],
  correct: 0,
},
{
  question: "383) Quelle requête classe les employés en 'Senior' si leur salaire est au moins 5000 ?",
  answers: [
    "a) SELECT nom, CASE WHEN salaire >= 5000 THEN 'Senior' ELSE 'Junior' END AS niveau FROM employes",
    "b) SELECT nom, IF salaire >= 5000 THEN Senior FROM employes",
    "c) SELECT nom, CLASSIFY salaire >= 5000 FROM employes",
    "d) SELECT nom, CASE salaire > 5000 RETURN Senior FROM employes",
  ],
  correct: 0,
},
{
  question: "384) Une expression CASE peut-elle contenir plusieurs WHEN ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement deux",
    "d) Seulement avec UPDATE",
  ],
  correct: 0,
},
{
  question: "385) Quel mot-clé définit le résultat lorsque aucune condition WHEN n'est vraie ?",
  answers: [
    "a) DEFAULT",
    "b) ELSE",
    "c) OTHERWISE",
    "d) FALLBACK",
  ],
  correct: 1,
},
{
  question: "386) Que se passe-t-il si un CASE n'a pas de ELSE et qu'aucune condition n'est vraie ?",
  answers: [
    "a) Il retourne généralement NULL",
    "b) Il retourne toujours 0",
    "c) Il retourne FALSE",
    "d) Il provoque obligatoirement une erreur",
  ],
  correct: 0,
},
{
  question: "387) Quelle commande permet de combiner deux résultats en supprimant généralement les doublons ?",
  answers: [
    "a) UNION",
    "b) UNION ALL",
    "c) JOIN",
    "d) MERGE",
  ],
  correct: 0,
},
{
  question: "388) Quelle commande conserve généralement les doublons entre deux résultats ?",
  answers: [
    "a) UNION",
    "b) UNION ALL",
    "c) DISTINCT UNION",
    "d) ALL UNION ONLY",
  ],
  correct: 1,
},
{
  question: "389) Quelle opération retourne les lignes présentes dans les deux résultats selon le support du SGBD ?",
  answers: [
    "a) INTERSECT",
    "b) COMMON",
    "c) SAME",
    "d) OVERLAP",
  ],
  correct: 0,
},
{
  question: "390) Quelle opération retourne les lignes du premier résultat qui ne sont pas dans le second, selon le SGBD ?",
  answers: [
    "a) EXCEPT",
    "b) DIFFERENCE",
    "c) MINUSROW",
    "d) NOT UNION",
  ],
  correct: 0,
},
{
  question: "391) Quel est généralement le nombre de colonnes requis pour les deux SELECT d'un UNION ?",
  answers: [
    "a) Le même nombre",
    "b) N'importe quel nombre",
    "c) Toujours une seule colonne",
    "d) Toujours deux colonnes",
  ],
  correct: 0,
},
{
  question: "392) Les types des colonnes correspondantes dans un UNION doivent-ils être compatibles ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement pour VARCHAR",
    "d) Seulement pour INTEGER",
  ],
  correct: 0,
},
{
  question: "393) Où place-t-on généralement l'ORDER BY lorsqu'on utilise un UNION pour trier le résultat final ?",
  answers: [
    "a) À la fin de la requête combinée",
    "b) Toujours entre les deux SELECT",
    "c) Avant le premier SELECT",
    "d) Dans FROM",
  ],
  correct: 0,
},
{
  question: "394) Quelle requête retourne le nombre total de lignes d'une table ?",
  answers: [
    "a) SELECT COUNT(*) FROM table_name",
    "b) SELECT TOTAL(*) FROM table_name",
    "c) SELECT NUMBER(*) FROM table_name",
    "d) SELECT ROWS FROM table_name",
  ],
  correct: 0,
},
{
  question: "395) Quelle fonction ignore généralement les valeurs NULL lors du calcul d'une moyenne ?",
  answers: [
    "a) AVG",
    "b) SUM",
    "c) COUNT(*)",
    "d) MAX uniquement",
  ],
  correct: 0,
},
{
  question: "396) Quelle requête retourne le nombre de valeurs distinctes d'une colonne ville ?",
  answers: [
    "a) SELECT COUNT(DISTINCT ville) FROM clients",
    "b) SELECT DISTINCT COUNT(ville) FROM clients",
    "c) SELECT COUNT UNIQUE ville FROM clients",
    "d) SELECT NUMBER(DISTINCT ville) FROM clients",
  ],
  correct: 0,
},
{
  question: "397) Que retourne COUNT(DISTINCT ville) ?",
  answers: [
    "a) Le nombre de lignes total",
    "b) Le nombre de villes distinctes non NULL",
    "c) Le nombre de valeurs NULL",
    "d) La liste des villes",
  ],
  correct: 1,
},
{
  question: "398) Quelle requête trouve le salaire maximum des employés de chaque département ?",
  answers: [
    "a) SELECT departement_id, MAX(salaire) FROM employes GROUP BY departement_id",
    "b) SELECT departement_id, MAX(salaire) FROM employes ORDER BY departement_id",
    "c) SELECT MAX(salaire), departement_id FROM employes",
    "d) SELECT departement_id FROM employes MAX salaire",
  ],
  correct: 0,
},
{
  question: "399) Quelle requête trouve les départements dont le salaire moyen dépasse 4000 ?",
  answers: [
    "a) SELECT departement_id, AVG(salaire) FROM employes GROUP BY departement_id HAVING AVG(salaire) > 4000",
    "b) SELECT departement_id, AVG(salaire) FROM employes WHERE AVG(salaire) > 4000 GROUP BY departement_id",
    "c) SELECT departement_id FROM employes WHERE salaire > AVG(4000)",
    "d) SELECT departement_id FROM employes HAVING salaire > 4000",
  ],
  correct: 0,
},
{
  question: "400) Quelle clause permet de filtrer les résultats d'une fonction d'agrégation après GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) FILTER BY",
    "d) CHECK",
  ],
  correct: 1,
},
{
  question: "401) Soit la table employes(id, nom, salaire) avec (1,'Ali',3000), (2,'Sara',5000), (3,'Omar',4000). Que retourne SELECT COUNT(*) FROM employes ?",
  answers: [
    "a) 2",
    "b) 3",
    "c) 12000",
    "d) 1",
  ],
  correct: 1,
},
{
  question: "402) Avec les données (3000, 5000, 4000), que retourne SELECT AVG(salaire) FROM employes ?",
  answers: [
    "a) 3000",
    "b) 4000",
    "c) 5000",
    "d) 12000",
  ],
  correct: 1,
},
{
  question: "403) Avec les salaires 3000, 5000 et 4000, que retourne MAX(salaire) ?",
  answers: [
    "a) 3000",
    "b) 4000",
    "c) 5000",
    "d) 12000",
  ],
  correct: 2,
},
{
  question: "404) Avec les salaires 3000, 5000 et 4000, que retourne MIN(salaire) ?",
  answers: [
    "a) 3000",
    "b) 4000",
    "c) 5000",
    "d) 1000",
  ],
  correct: 0,
},
{
  question: "405) Avec les salaires 3000, 5000 et 4000, que retourne SUM(salaire) ?",
  answers: [
    "a) 4000",
    "b) 9000",
    "c) 12000",
    "d) 15000",
  ],
  correct: 2,
},
{
  question: "406) Soit employes(id, nom, salaire). Quelle requête retourne Ali et Omar uniquement ?",
  answers: [
    "a) SELECT nom FROM employes WHERE nom IN ('Ali','Omar')",
    "b) SELECT nom FROM employes WHERE nom = 'Ali' AND 'Omar'",
    "c) SELECT nom FROM employes WHERE nom BETWEEN 'Ali' AND 'Omar'",
    "d) SELECT nom FROM employes WHERE nom LIKE ('Ali','Omar')",
  ],
  correct: 0,
},
{
  question: "407) Soit employes avec les salaires 3000, 5000 et 4000. Quelle requête retourne Ali et Omar ?",
  answers: [
    "a) SELECT nom FROM employes WHERE salaire < 5000",
    "b) SELECT nom FROM employes WHERE salaire <= 5000",
    "c) SELECT nom FROM employes WHERE salaire > 3000",
    "d) SELECT nom FROM employes WHERE salaire BETWEEN 3000 AND 4000",
  ],
  correct: 3,
},
{
  question: "408) Quelle requête retourne les employés gagnant exactement 4000 ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire = 4000",
    "b) SELECT * FROM employes WHERE salaire == 4000",
    "c) SELECT * FROM employes WHERE salaire IS 4000",
    "d) SELECT * FROM employes WHERE salaire LIKE 4000",
  ],
  correct: 0,
},
{
  question: "409) Soit la table clients(id, nom) contenant 1,'Ali', 2,'Sara', 3,'Ali'. Que retourne SELECT DISTINCT nom FROM clients ?",
  answers: [
    "a) Ali uniquement",
    "b) Ali et Sara",
    "c) Trois lignes",
    "d) Une erreur",
  ],
  correct: 1,
},
{
  question: "410) Quelle requête retourne le nombre de noms différents dans clients ?",
  answers: [
    "a) SELECT COUNT(DISTINCT nom) FROM clients",
    "b) SELECT DISTINCT COUNT(nom) FROM clients",
    "c) SELECT COUNT(UNIQUE nom) FROM clients",
    "d) SELECT DISTINCT nom COUNT FROM clients",
  ],
  correct: 0,
},
{
  question: "411) Soit clients avec ville = 'Rabat', 'Casa', 'Rabat'. Que retourne SELECT COUNT(DISTINCT ville) ?",
  answers: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) 0",
  ],
  correct: 1,
},
{
  question: "412) Quelle requête retourne les employés dont le salaire est supérieur à la moyenne ?",
  answers: [
    "a) SELECT * FROM employes WHERE salaire > (SELECT AVG(salaire) FROM employes)",
    "b) SELECT * FROM employes WHERE salaire > AVG(salaire)",
    "c) SELECT * FROM employes HAVING salaire > AVG(salaire)",
    "d) SELECT * FROM employes WHERE salaire > SELECT AVG(salaire)",
  ],
  correct: 0,
},
{
  question: "413) Si la moyenne des salaires est 4000, quelle condition retourne les salaires supérieurs à cette moyenne ?",
  answers: [
    "a) salaire < 4000",
    "b) salaire = 4000",
    "c) salaire > 4000",
    "d) salaire <= 4000",
  ],
  correct: 2,
},
{
  question: "414) Soit les salaires 2000, 3000, 5000 et 7000. Quelle requête retourne le salaire le plus élevé ?",
  answers: [
    "a) SELECT MAX(salaire) FROM employes",
    "b) SELECT TOP(salaire) FROM employes",
    "c) SELECT HIGH(salaire) FROM employes",
    "d) SELECT FIRST(salaire) FROM employes",
  ],
  correct: 0,
},
{
  question: "415) Quelle requête retourne le deuxième plus grand salaire dans un SGBD supportant OFFSET et LIMIT ?",
  answers: [
    "a) SELECT salaire FROM employes ORDER BY salaire DESC LIMIT 1 OFFSET 1",
    "b) SELECT salaire FROM employes ORDER BY salaire ASC LIMIT 2",
    "c) SELECT MAX(salaire) OFFSET 2 FROM employes",
    "d) SELECT salaire FROM employes SECOND DESC",
  ],
  correct: 0,
},
{
  question: "416) Quelle clause est utilisée pour effectuer un tri après sélection et regroupement ?",
  answers: [
    "a) ORDER BY",
    "b) SORT",
    "c) GROUP BY",
    "d) FILTER BY",
  ],
  correct: 0,
},
{
  question: "417) Quelle requête trie les employés par salaire croissant ?",
  answers: [
    "a) SELECT * FROM employes ORDER BY salaire ASC",
    "b) SELECT * FROM employes ORDER BY salaire DESC",
    "c) SELECT * FROM employes GROUP BY salaire ASC",
    "d) SELECT * FROM employes SORT salaire",
  ],
  correct: 0,
},
{
  question: "418) Quelle requête trie les employés par salaire décroissant ?",
  answers: [
    "a) SELECT * FROM employes ORDER BY salaire ASC",
    "b) SELECT * FROM employes ORDER BY salaire DESC",
    "c) SELECT * FROM employes GROUP BY salaire DESC",
    "d) SELECT * FROM employes SORT salaire DOWN",
  ],
  correct: 1,
},
{
  question: "419) Soit la table commandes(client_id, montant). Quelle requête calcule le total par client ?",
  answers: [
    "a) SELECT client_id, SUM(montant) FROM commandes GROUP BY client_id",
    "b) SELECT client_id, SUM(montant) FROM commandes ORDER BY client_id",
    "c) SELECT SUM(client_id), montant FROM commandes GROUP BY montant",
    "d) SELECT client_id FROM commandes TOTAL montant",
  ],
  correct: 0,
},
{
  question: "420) Quelle clause permet de sélectionner uniquement les groupes dont le total dépasse 5000 ?",
  answers: [
    "a) WHERE SUM(montant) > 5000",
    "b) HAVING SUM(montant) > 5000",
    "c) GROUP BY SUM(montant) > 5000",
    "d) ORDER BY SUM(montant) > 5000",
  ],
  correct: 1,
},
{
  question: "421) Soit commandes(client_id, montant) avec (1,100), (1,200), (2,500). Quel est le total du client 1 ?",
  answers: [
    "a) 100",
    "b) 200",
    "c) 300",
    "d) 800",
  ],
  correct: 2,
},
{
  question: "422) Avec les mêmes données, quel est le total du client 2 ?",
  answers: [
    "a) 100",
    "b) 300",
    "c) 500",
    "d) 800",
  ],
  correct: 2,
},
{
  question: "423) Quelle requête retourne les clients ayant plus d'une commande ?",
  answers: [
    "a) SELECT client_id FROM commandes GROUP BY client_id HAVING COUNT(*) > 1",
    "b) SELECT client_id FROM commandes WHERE COUNT(*) > 1 GROUP BY client_id",
    "c) SELECT client_id FROM commandes WHERE commandes > 1",
    "d) SELECT client_id FROM commandes COUNT(*) > 1",
  ],
  correct: 0,
},
{
  question: "424) Quelle fonction permet de compter les lignes d'un groupe ?",
  answers: [
    "a) COUNT(*)",
    "b) SUM(*)",
    "c) NUMBER(*)",
    "d) ROWS(*)",
  ],
  correct: 0,
},
{
  question: "425) Quelle requête retourne les départements contenant au moins 3 employés ?",
  answers: [
    "a) SELECT departement_id FROM employes GROUP BY departement_id HAVING COUNT(*) >= 3",
    "b) SELECT departement_id FROM employes WHERE COUNT(*) >= 3",
    "c) SELECT departement_id FROM employes GROUP COUNT(*) >= 3",
    "d) SELECT COUNT(*) FROM employes WHERE departement_id >= 3",
  ],
  correct: 0,
},
{
  question: "426) Quelle requête retourne le nombre d'employés dans chaque département ?",
  answers: [
    "a) SELECT departement_id, COUNT(*) FROM employes GROUP BY departement_id",
    "b) SELECT departement_id, COUNT(*) FROM employes ORDER BY departement_id",
    "c) SELECT COUNT(departement_id) FROM employes",
    "d) SELECT GROUP(departement_id), COUNT(*) FROM employes",
  ],
  correct: 0,
},
{
  question: "427) Quelle requête retourne les départements dont le salaire moyen est supérieur à 5000 ?",
  answers: [
    "a) SELECT departement_id FROM employes GROUP BY departement_id HAVING AVG(salaire) > 5000",
    "b) SELECT departement_id FROM employes WHERE AVG(salaire) > 5000",
    "c) SELECT departement_id FROM employes WHERE salaire > AVG(5000)",
    "d) SELECT departement_id FROM employes HAVING salaire > 5000",
  ],
  correct: 0,
},
{
  question: "428) Quel est le résultat d'un INNER JOIN entre deux tables lorsqu'une ligne n'a aucune correspondance ?",
  answers: [
    "a) Elle est conservée avec NULL",
    "b) Elle est ignorée du résultat",
    "c) Elle est remplacée par zéro",
    "d) Elle est dupliquée",
  ],
  correct: 1,
},
{
  question: "429) Quel JOIN permet de conserver toutes les lignes de la table gauche ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) RIGHT JOIN",
    "d) CROSS JOIN",
  ],
  correct: 1,
},
{
  question: "430) Soit A contenant id 1,2,3 et B contenant id 2,3,4. Combien de lignes correspondantes produit un INNER JOIN sur id ?",
  answers: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) 4",
  ],
  correct: 1,
},
{
  question: "431) Avec A = 1,2,3 et B = 2,3,4, combien de clés distinctes sont conservées par un LEFT JOIN de A vers B ?",
  answers: [
    "a) 2",
    "b) 3",
    "c) 4",
    "d) 1",
  ],
  correct: 1,
},
{
  question: "432) Avec A = 1,2,3 et B = 2,3,4, quelle clé de A n'a pas de correspondance dans B ?",
  answers: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) 4",
  ],
  correct: 0,
},
{
  question: "433) Avec A = 1,2,3 et B = 2,3,4, quelle clé de B n'a pas de correspondance dans A ?",
  answers: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) 4",
  ],
  correct: 3,
},
{
  question: "434) Quelle requête permet de trouver les lignes de A qui n'existent pas dans B avec un LEFT JOIN ?",
  answers: [
    "a) SELECT A.* FROM A LEFT JOIN B ON A.id = B.id WHERE B.id IS NULL",
    "b) SELECT A.* FROM A INNER JOIN B ON A.id = B.id",
    "c) SELECT A.* FROM A WHERE B.id = NULL",
    "d) SELECT A.* FROM A RIGHT JOIN B WHERE B.id IS NULL",
  ],
  correct: 0,
},
{
  question: "435) Quel mot-clé permet de tester l'absence de résultat d'une sous-requête ?",
  answers: [
    "a) NOT EXISTS",
    "b) NO RESULT",
    "c) NOT FOUND",
    "d) EMPTY",
  ],
  correct: 0,
},
{
  question: "436) Quelle requête retourne les produits dont le prix est supérieur à tous les prix de la catégorie 1 ?",
  answers: [
    "a) WHERE prix > ALL (SELECT prix FROM produits WHERE categorie_id = 1)",
    "b) WHERE prix > ANY (SELECT prix FROM produits WHERE categorie_id = 1)",
    "c) WHERE prix IN ALL (SELECT prix FROM produits WHERE categorie_id = 1)",
    "d) WHERE prix EXISTS (SELECT prix FROM produits WHERE categorie_id = 1)",
  ],
  correct: 0,
},
{
  question: "437) Quelle condition signifie « supérieur à au moins une valeur de la sous-requête » ?",
  answers: [
    "a) > ALL",
    "b) > ANY",
    "c) > EXISTS",
    "d) > IN",
  ],
  correct: 1,
},
{
  question: "438) Quelle condition signifie « égal à l'une des valeurs retournées » ?",
  answers: [
    "a) IN",
    "b) ALL",
    "c) EXISTS",
    "d) ANY uniquement",
  ],
  correct: 0,
},
{
  question: "439) Quelle expression permet de vérifier si une sous-requête retourne au moins une ligne ?",
  answers: [
    "a) EXISTS",
    "b) IN",
    "c) FOUND",
    "d) PRESENT",
  ],
  correct: 0,
},
{
  question: "440) Quelle requête retourne les clients ayant au moins une commande ?",
  answers: [
    "a) SELECT * FROM clients c WHERE EXISTS (SELECT 1 FROM commandes o WHERE o.client_id = c.id)",
    "b) SELECT * FROM clients WHERE commandes EXISTS",
    "c) SELECT * FROM clients WHERE EXISTS commandes.client_id",
    "d) SELECT * FROM clients IF EXISTS commandes",
  ],
  correct: 0,
},
{
  question: "441) Quelle requête retourne les clients n'ayant aucune commande ?",
  answers: [
    "a) SELECT * FROM clients c WHERE NOT EXISTS (SELECT 1 FROM commandes o WHERE o.client_id = c.id)",
    "b) SELECT * FROM clients c WHERE EXISTS NOT commandes",
    "c) SELECT * FROM clients WHERE commandes IS NULL",
    "d) SELECT * FROM clients WHERE NOT COMMANDES",
  ],
  correct: 0,
},
{
  question: "442) Quelle expression permet de tester une valeur NULL ?",
  answers: [
    "a) = NULL",
    "b) IS NULL",
    "c) == NULL",
    "d) NULL =",
  ],
  correct: 1,
},
{
  question: "443) Quelle expression permet de tester une valeur non NULL ?",
  answers: [
    "a) != NULL",
    "b) IS NOT NULL",
    "c) <> NULL",
    "d) NOT NULL =",
  ],
  correct: 1,
},
{
  question: "444) Quelle requête sélectionne les employés ayant un email renseigné ?",
  answers: [
    "a) SELECT * FROM employes WHERE email IS NOT NULL",
    "b) SELECT * FROM employes WHERE email != NULL",
    "c) SELECT * FROM employes WHERE email <> NULL",
    "d) SELECT * FROM employes WHERE email NOT NULL =",
  ],
  correct: 0,
},
{
  question: "445) Quelle fonction permet de remplacer NULL par une valeur de remplacement ?",
  answers: [
    "a) COALESCE",
    "b) REPLACE",
    "c) NULLIF",
    "d) DEFAULTVALUE",
  ],
  correct: 0,
},
{
  question: "446) Que retourne COALESCE(NULL, NULL, 'Maroc', 'France') ?",
  answers: [
    "a) NULL",
    "b) 'France'",
    "c) 'Maroc'",
    "d) Les deux valeurs",
  ],
  correct: 2,
},
{
  question: "447) Quel est le rôle de NULLIF(a,b) ?",
  answers: [
    "a) Retourner NULL si a et b sont égaux, sinon retourner a",
    "b) Retourner toujours b",
    "c) Remplacer NULL par a",
    "d) Tester si a est NULL uniquement",
  ],
  correct: 0,
},
{
  question: "448) Quelle expression CASE permet de retourner 'Adulte' si age >= 18 ?",
  answers: [
    "a) CASE WHEN age >= 18 THEN 'Adulte' END",
    "b) CASE age >= 18 RETURN 'Adulte'",
    "c) IF CASE age >= 18 'Adulte'",
    "d) CASE IF age >= 18 THEN 'Adulte'",
  ],
  correct: 0,
},
{
  question: "449) Quel mot-clé termine généralement une expression CASE ?",
  answers: [
    "a) END",
    "b) STOP",
    "c) FINISH",
    "d) CLOSE",
  ],
  correct: 0,
},
{
  question: "450) Quel mot-clé permet de définir le résultat par défaut dans CASE lorsque les conditions WHEN ne sont pas satisfaites ?",
  answers: [
    "a) DEFAULT",
    "b) ELSE",
    "c) OTHERWISE",
    "d) FALLBACK",
  ],
  correct: 1,
},
{
  question: "451) Quelle clause permet de limiter le nombre de lignes retournées par une requête en SQL standard moderne ?",
  answers: [
    "a) LIMIT",
    "b) TOP",
    "c) FETCH FIRST",
    "d) MAX ROWS",
  ],
  correct: 2,
},
{
  question: "452) Que fait la fonction COALESCE() ?",
  answers: [
    "a) Remplace une valeur NULL par une autre valeur disponible",
    "b) Supprime les valeurs NULL",
    "c) Convertit une chaîne en nombre",
    "d) Trie les valeurs",
  ],
  correct: 0,
},
{
  question: "453) Que retourne COALESCE(NULL, NULL, 'SQL', 'DB') ?",
  answers: [
    "a) NULL",
    "b) SQL",
    "c) DB",
    "d) Une erreur",
  ],
  correct: 1,
},
{
  question: "454) Quelle fonction permet généralement de compter les lignes d'une table ?",
  answers: [
    "a) SUM(*)",
    "b) COUNT(*)",
    "c) TOTAL(*)",
    "d) NUMBER(*)",
  ],
  correct: 1,
},
{
  question: "455) Quelle différence existe entre COUNT(*) et COUNT(colonne) ?",
  answers: [
    "a) COUNT(*) compte toutes les lignes, COUNT(colonne) ignore les NULL",
    "b) COUNT(*) ignore les NULL",
    "c) COUNT(colonne) compte uniquement les doublons",
    "d) Il n'existe aucune différence",
  ],
  correct: 0,
},
{
  question: "456) Soit une table T contenant 5 lignes, dont 2 avec nom = NULL. Que retourne COUNT(nom) ?",
  answers: [
    "a) 2",
    "b) 3",
    "c) 5",
    "d) NULL",
  ],
  correct: 1,
},
{
  question: "457) Quelle fonction permet de calculer la moyenne d'une colonne numérique ?",
  answers: [
    "a) AVG()",
    "b) MEAN()",
    "c) AVERAGE()",
    "d) MID()",
  ],
  correct: 0,
},
{
  question: "458) Que fait SUM(salaire) ?",
  answers: [
    "a) Calcule le nombre de salaires",
    "b) Calcule la somme des valeurs non NULL",
    "c) Calcule la moyenne",
    "d) Retourne le salaire maximum",
  ],
  correct: 1,
},
{
  question: "459) Quelle fonction retourne la plus grande valeur ?",
  answers: [
    "a) HIGH()",
    "b) TOP()",
    "c) MAX()",
    "d) BIG()",
  ],
  correct: 2,
},
{
  question: "460) Quelle fonction retourne la plus petite valeur ?",
  answers: [
    "a) LOW()",
    "b) MIN()",
    "c) SMALL()",
    "d) LEAST_VALUE()",
  ],
  correct: 1,
},
{
  question: "461) Quelle clause est utilisée pour filtrer les groupes après GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) FILTER",
    "c) HAVING",
    "d) GROUP FILTER",
  ],
  correct: 2,
},
{
  question: "462) Dans l'ordre logique général d'une requête SELECT, quelle clause est évaluée avant GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) ORDER BY",
    "c) HAVING",
    "d) LIMIT",
  ],
  correct: 0,
},
{
  question: "463) Quelle requête permet d'obtenir les départements ayant plus de 5 employés ?",
  answers: [
    "a) SELECT departement FROM employe WHERE COUNT(*) > 5 GROUP BY departement;",
    "b) SELECT departement FROM employe GROUP BY departement HAVING COUNT(*) > 5;",
    "c) SELECT departement FROM employe HAVING COUNT(*) > 5;",
    "d) SELECT departement FROM employe GROUP BY COUNT(*) > 5;",
  ],
  correct: 1,
},
{
  question: "464) Une requête contient GROUP BY departement. Quelle règle générale s'applique aux colonnes du SELECT ?",
  answers: [
    "a) Toutes doivent être des chaînes",
    "b) Les colonnes non agrégées doivent être compatibles avec le GROUP BY",
    "c) Toutes doivent être numériques",
    "d) Aucune règle ne s'applique",
  ],
  correct: 1,
},
{
  question: "465) Quelle clause permet de trier les résultats dans l'ordre décroissant ?",
  answers: [
    "a) ORDER DESC",
    "b) SORT DESC",
    "c) ORDER BY ... DESC",
    "d) GROUP BY ... DESC",
  ],
  correct: 2,
},
{
  question: "466) Dans ORDER BY salaire DESC, que signifie DESC ?",
  answers: [
    "a) Description",
    "b) Décroissant",
    "c) Découpage",
    "d) Désactivation",
  ],
  correct: 1,
},
{
  question: "467) Dans ORDER BY nom ASC, que signifie ASC ?",
  answers: [
    "a) Ascendant",
    "b) ASCII",
    "c) Association",
    "d) Agrégation",
  ],
  correct: 0,
},
{
  question: "468) Peut-on trier une requête selon plusieurs colonnes ?",
  answers: [
    "a) Non",
    "b) Oui, avec plusieurs expressions dans ORDER BY",
    "c) Seulement avec GROUP BY",
    "d) Seulement avec JOIN",
  ],
  correct: 1,
},
{
  question: "469) Que signifie SELECT DISTINCT ville FROM client ?",
  answers: [
    "a) Sélectionner uniquement les villes NULL",
    "b) Sélectionner les villes sans répétition",
    "c) Trier les villes",
    "d) Supprimer les doublons de la table",
  ],
  correct: 1,
},
{
  question: "470) Quelle instruction supprime une table et sa définition ?",
  answers: [
    "a) DELETE TABLE",
    "b) REMOVE TABLE",
    "c) DROP TABLE",
    "d) CLEAR TABLE",
  ],
  correct: 2,
},
{
  question: "471) Quelle instruction supprime les lignes répondant à une condition ?",
  answers: [
    "a) DELETE FROM",
    "b) DROP FROM",
    "c) REMOVE WHERE",
    "d) CLEAR FROM",
  ],
  correct: 0,
},
{
  question: "472) Que se passe-t-il avec DELETE FROM client; sans clause WHERE ?",
  answers: [
    "a) Une seule ligne est supprimée",
    "b) Toutes les lignes sont supprimées",
    "c) La table est supprimée",
    "d) La requête est toujours syntaxiquement invalide",
  ],
  correct: 1,
},
{
  question: "473) Quelle instruction modifie les données existantes ?",
  answers: [
    "a) CHANGE",
    "b) MODIFY TABLE",
    "c) UPDATE",
    "d) ALTER DATA",
  ],
  correct: 2,
},
{
  question: "474) Quelle clause indique les nouvelles valeurs dans UPDATE ?",
  answers: [
    "a) VALUES",
    "b) SET",
    "c) CHANGE",
    "d) ASSIGN",
  ],
  correct: 1,
},
{
  question: "475) Que risque-t-il de se produire avec UPDATE employe SET salaire = 5000; ?",
  answers: [
    "a) Seul le premier employé est modifié",
    "b) Aucun employé n'est modifié",
    "c) Tous les employés sont modifiés",
    "d) La table est supprimée",
  ],
  correct: 2,
},
{
  question: "476) Quelle instruction ajoute de nouvelles lignes dans une table ?",
  answers: [
    "a) ADD ROW",
    "b) INSERT INTO",
    "c) APPEND TABLE",
    "d) CREATE ROW",
  ],
  correct: 1,
},
{
  question: "477) Quelle forme est correcte pour insérer une ligne ?",
  answers: [
    "a) INSERT employe VALUES (1, 'Ali');",
    "b) INSERT INTO employe VALUES (1, 'Ali');",
    "c) ADD INTO employe VALUES (1, 'Ali');",
    "d) CREATE INTO employe (1, 'Ali');",
  ],
  correct: 1,
},
{
  question: "478) Quelle commande permet de modifier la structure d'une table existante ?",
  answers: [
    "a) ALTER TABLE",
    "b) UPDATE TABLE",
    "c) CHANGE TABLE",
    "d) MODIFY DATABASE",
  ],
  correct: 0,
},
{
  question: "479) Quelle instruction permet généralement d'ajouter une colonne à une table ?",
  answers: [
    "a) ALTER TABLE ... ADD COLUMN",
    "b) UPDATE TABLE ... ADD",
    "c) INSERT COLUMN",
    "d) CREATE COLUMN",
  ],
  correct: 0,
},
{
  question: "480) Quelle contrainte garantit l'unicité des valeurs d'une colonne ou d'un ensemble de colonnes ?",
  answers: [
    "a) CHECK",
    "b) UNIQUE",
    "c) DEFAULT",
    "d) NULL",
  ],
  correct: 1,
},
{
  question: "481) Quelle contrainte empêche normalement une colonne d'accepter NULL ?",
  answers: [
    "a) NOT NULL",
    "b) NO NULL",
    "c) REQUIRED",
    "d) NONEMPTY",
  ],
  correct: 0,
},
{
  question: "482) Quel est le rôle principal d'une clé primaire ?",
  answers: [
    "a) Identifier de manière unique chaque ligne",
    "b) Trier automatiquement les lignes",
    "c) Chiffrer la table",
    "d) Créer automatiquement une vue",
  ],
  correct: 0,
},
{
  question: "483) Une table peut-elle avoir plusieurs clés primaires distinctes ?",
  answers: [
    "a) Oui, autant qu'on veut",
    "b) Oui, mais seulement avec MySQL",
    "c) Non, elle a une seule contrainte de clé primaire, qui peut être composée de plusieurs colonnes",
    "d) Non, une clé primaire doit toujours avoir une seule colonne",
  ],
  correct: 2,
},
{
  question: "484) Qu'est-ce qu'une clé primaire composée ?",
  answers: [
    "a) Une clé utilisant plusieurs tables",
    "b) Une clé constituée de plusieurs colonnes",
    "c) Une clé contenant uniquement des chaînes",
    "d) Une clé créée automatiquement par SQL",
  ],
  correct: 1,
},
{
  question: "485) Quel est le rôle d'une clé étrangère ?",
  answers: [
    "a) Garantir une relation entre des lignes de tables",
    "b) Remplacer toutes les clés primaires",
    "c) Accélérer obligatoirement toutes les requêtes",
    "d) Chiffrer les données",
  ],
  correct: 0,
},
{
  question: "486) Une clé étrangère référence généralement :",
  answers: [
    "a) Une colonne quelconque sans contrainte",
    "b) Une clé primaire ou une contrainte UNIQUE compatible",
    "c) Un index uniquement",
    "d) Une vue uniquement",
  ],
  correct: 1,
},
{
  question: "487) Quelle contrainte permet de vérifier qu'une valeur respecte une condition ?",
  answers: [
    "a) CHECK",
    "b) VERIFY",
    "c) VALIDATE",
    "d) RULE",
  ],
  correct: 0,
},
{
  question: "488) Que signifie DEFAULT 0 dans une définition de colonne ?",
  answers: [
    "a) La colonne ne peut contenir que 0",
    "b) 0 est utilisé comme valeur par défaut lorsqu'aucune valeur n'est fournie",
    "c) Toutes les valeurs NULL deviennent obligatoirement 0 après insertion",
    "d) La colonne est une clé primaire",
  ],
  correct: 1,
},
{
  question: "489) Quel objet SQL fournit une représentation virtuelle basée sur une requête SELECT ?",
  answers: [
    "a) INDEX",
    "b) VIEW",
    "c) TRIGGER",
    "d) SEQUENCE",
  ],
  correct: 1,
},
{
  question: "490) Quelle instruction crée une vue ?",
  answers: [
    "a) CREATE VIEW",
    "b) MAKE VIEW",
    "c) NEW VIEW",
    "d) BUILD VIEW",
  ],
  correct: 0,
},
{
  question: "491) Une vue stocke généralement :",
  answers: [
    "a) Une copie physique obligatoire de toutes les données",
    "b) Une définition de requête",
    "c) Un fichier texte",
    "d) Un index primaire",
  ],
  correct: 1,
},
{
  question: "492) Quel objet est principalement utilisé pour accélérer certaines recherches dans une table ?",
  answers: [
    "a) VIEW",
    "b) INDEX",
    "c) TRIGGER",
    "d) PROCEDURE",
  ],
  correct: 1,
},
{
  question: "493) Quel est l'inconvénient possible d'un trop grand nombre d'index ?",
  answers: [
    "a) Les SELECT deviennent toujours impossibles",
    "b) Les opérations INSERT, UPDATE et DELETE peuvent coûter davantage",
    "c) Les clés primaires disparaissent",
    "d) Les tables deviennent automatiquement NULL",
  ],
  correct: 1,
},
{
  question: "494) Quelle instruction crée généralement un index ?",
  answers: [
    "a) CREATE INDEX",
    "b) ADD INDEX TABLE",
    "c) NEW INDEX",
    "d) MAKE INDEX",
  ],
  correct: 0,
},
{
  question: "495) Quelle commande permet d'accorder des privilèges à un utilisateur ?",
  answers: [
    "a) ALLOW",
    "b) GRANT",
    "c) PERMIT",
    "d) AUTHORIZE",
  ],
  correct: 1,
},
{
  question: "496) Quelle commande permet de retirer des privilèges accordés ?",
  answers: [
    "a) REMOVE",
    "b) DENY",
    "c) REVOKE",
    "d) CANCEL",
  ],
  correct: 2,
},
{
  question: "497) GRANT SELECT ON clients TO user1 signifie que :",
  answers: [
    "a) user1 peut supprimer la table",
    "b) user1 reçoit le privilège de lecture sur clients",
    "c) user1 devient propriétaire du serveur",
    "d) user1 peut modifier toutes les tables",
  ],
  correct: 1,
},
{
  question: "498) Quel mécanisme SQL permet de regrouper plusieurs opérations dans une unité logique de travail ?",
  answers: [
    "a) Transaction",
    "b) Vue",
    "c) Index",
    "d) Alias",
  ],
  correct: 0,
},
{
  question: "499) Quelle commande valide définitivement une transaction dans les SGBD qui prennent en charge ce mécanisme ?",
  answers: [
    "a) SAVE",
    "b) COMMIT",
    "c) APPLY",
    "d) CONFIRM",
  ],
  correct: 1,
},
{
  question: "500) Quelle commande annule les modifications non validées d'une transaction ?",
  answers: [
    "a) CANCEL",
    "b) UNDO",
    "c) ROLLBACK",
    "d) RESET",
  ],
  correct: 2,
},
{
  question: "501) Quelle commande permet de créer une nouvelle base de données ?",
  answers: [
    "a) NEW DATABASE",
    "b) CREATE DATABASE",
    "c) MAKE DATABASE",
    "d) ADD DATABASE",
  ],
  correct: 1,
},
{
  question: "502) Quelle commande permet de supprimer une base de données ?",
  answers: [
    "a) DELETE DATABASE",
    "b) REMOVE DATABASE",
    "c) DROP DATABASE",
    "d) CLEAR DATABASE",
  ],
  correct: 2,
},
{
  question: "503) Quelle commande permet de supprimer une colonne d'une table ?",
  answers: [
    "a) DELETE COLUMN",
    "b) ALTER TABLE ... DROP COLUMN",
    "c) REMOVE COLUMN",
    "d) DROP TABLE COLUMN",
  ],
  correct: 1,
},
{
  question: "504) Quelle instruction permet de renommer une table selon la syntaxe SQL de nombreux SGBD ?",
  answers: [
    "a) RENAME TABLE",
    "b) CHANGE TABLE NAME",
    "c) ALTER TABLE NAME ONLY",
    "d) MODIFY TABLE",
  ],
  correct: 0,
},
{
  question: "505) Quelle commande permet de vider rapidement une table sans supprimer sa structure ?",
  answers: [
    "a) DROP",
    "b) TRUNCATE",
    "c) REMOVE",
    "d) CLEAR DATABASE",
  ],
  correct: 1,
},
{
  question: "506) Quelle est la différence principale entre DROP TABLE et TRUNCATE TABLE ?",
  answers: [
    "a) DROP supprime la structure, TRUNCATE conserve la structure",
    "b) TRUNCATE supprime la structure, DROP conserve la structure",
    "c) Les deux suppriment toujours la structure",
    "d) Les deux ne suppriment aucune donnée",
  ],
  correct: 0,
},
{
  question: "507) Quelle commande est utilisée pour modifier la structure d'une table ?",
  answers: [
    "a) ALTER TABLE",
    "b) UPDATE TABLE",
    "c) MODIFY DATA",
    "d) CHANGE DATA",
  ],
  correct: 0,
},
{
  question: "508) Quel type de commande est principalement CREATE TABLE ?",
  answers: [
    "a) DML",
    "b) DDL",
    "c) DCL",
    "d) TCL",
  ],
  correct: 1,
},
{
  question: "509) INSERT, UPDATE et DELETE appartiennent généralement à quelle catégorie ?",
  answers: [
    "a) DML",
    "b) DDL",
    "c) DCL",
    "d) TCL",
  ],
  correct: 0,
},
{
  question: "510) GRANT et REVOKE appartiennent généralement à quelle catégorie ?",
  answers: [
    "a) DML",
    "b) DDL",
    "c) DCL",
    "d) TCL",
  ],
  correct: 2,
},
{
  question: "511) COMMIT et ROLLBACK sont principalement associés à :",
  answers: [
    "a) DDL",
    "b) DML",
    "c) DCL",
    "d) TCL",
  ],
  correct: 3,
},
{
  question: "512) Quelle instruction permet de définir une nouvelle table ?",
  answers: [
    "a) CREATE TABLE",
    "b) NEW TABLE",
    "c) DEFINE TABLE",
    "d) BUILD TABLE",
  ],
  correct: 0,
},
{
  question: "513) Quelle syntaxe permet de sélectionner toutes les colonnes d'une table ?",
  answers: [
    "a) SELECT ALL FROM table;",
    "b) SELECT * FROM table;",
    "c) SELECT COLUMNS FROM table;",
    "d) GET * table;",
  ],
  correct: 1,
},
{
  question: "514) Dans SELECT nom, salaire FROM employe, quelles colonnes sont retournées ?",
  answers: [
    "a) Toutes les colonnes",
    "b) Seulement nom et salaire",
    "c) Seulement salaire",
    "d) Aucune",
  ],
  correct: 1,
},
{
  question: "515) Quelle clause permet de sélectionner uniquement les lignes correspondant à une condition ?",
  answers: [
    "a) WHERE",
    "b) WHEN",
    "c) FILTER BY",
    "d) CONDITION",
  ],
  correct: 0,
},
{
  question: "516) Quelle requête sélectionne les employés dont le salaire est supérieur à 5000 ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire > 5000;",
    "b) SELECT * FROM employe IF salaire > 5000;",
    "c) SELECT * FROM employe HAVING salaire > 5000;",
    "d) SELECT * FROM employe CHECK salaire > 5000;",
  ],
  correct: 0,
},
{
  question: "517) Quel opérateur permet de tester l'égalité en SQL ?",
  answers: [
    "a) ==",
    "b) =",
    "c) ===",
    "d) :=",
  ],
  correct: 1,
},
{
  question: "518) Quel opérateur signifie « différent de » en SQL standard ?",
  answers: [
    "a) !=",
    "b) <>",
    "c) Les deux peuvent être supportés selon le SGBD",
    "d) a et b selon les SGBD",
  ],
  correct: 3,
},
{
  question: "519) Quelle expression sélectionne les salaires compris entre 2000 et 4000 inclus ?",
  answers: [
    "a) salaire BETWEEN 2000 AND 4000",
    "b) salaire RANGE 2000 TO 4000",
    "c) salaire IN 2000 AND 4000",
    "d) salaire FROM 2000 TO 4000",
  ],
  correct: 0,
},
{
  question: "520) BETWEEN inclut-il généralement les deux bornes ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement la première",
    "d) Seulement la seconde",
  ],
  correct: 0,
},
{
  question: "521) Quelle condition sélectionne les employés dont la ville est Paris ou Rabat ?",
  answers: [
    "a) ville = 'Paris' AND 'Rabat'",
    "b) ville IN ('Paris', 'Rabat')",
    "c) ville BETWEEN 'Paris' AND 'Rabat'",
    "d) ville LIKE 'Paris' OR 'Rabat'",
  ],
  correct: 1,
},
{
  question: "522) Quel opérateur logique exige que deux conditions soient vraies ?",
  answers: [
    "a) OR",
    "b) AND",
    "c) NOT",
    "d) XOR",
  ],
  correct: 1,
},
{
  question: "523) Quel opérateur logique exige qu'au moins une des conditions soit vraie ?",
  answers: [
    "a) AND",
    "b) OR",
    "c) NOT",
    "d) ONLY",
  ],
  correct: 1,
},
{
  question: "524) Quelle expression inverse le résultat logique d'une condition ?",
  answers: [
    "a) REVERSE",
    "b) NOT",
    "c) INVERT",
    "d) NEGATE",
  ],
  correct: 1,
},
{
  question: "525) Quelle requête sélectionne les noms commençant par « A » ?",
  answers: [
    "a) WHERE nom LIKE 'A%'",
    "b) WHERE nom LIKE '%A'",
    "c) WHERE nom = 'A%'",
    "d) WHERE nom START 'A'",
  ],
  correct: 0,
},
{
  question: "526) Dans LIKE 'A%', que représente % ?",
  answers: [
    "a) Un seul caractère",
    "b) Zéro ou plusieurs caractères",
    "c) Un chiffre obligatoire",
    "d) Un espace",
  ],
  correct: 1,
},
{
  question: "527) Dans LIKE '_A%', que représente _ ?",
  answers: [
    "a) Zéro caractère",
    "b) Un caractère",
    "c) Plusieurs caractères",
    "d) Un chiffre uniquement",
  ],
  correct: 1,
},
{
  question: "528) Quelle condition recherche les noms se terminant par « e » ?",
  answers: [
    "a) nom LIKE 'e%'",
    "b) nom LIKE '%e'",
    "c) nom LIKE '_e_'",
    "d) nom = '%e'",
  ],
  correct: 1,
},
{
  question: "529) Quelle condition recherche les noms contenant « mar » ?",
  answers: [
    "a) nom LIKE 'mar%'",
    "b) nom LIKE '%mar%'",
    "c) nom LIKE '%mar'",
    "d) nom = '%mar%'",
  ],
  correct: 1,
},
{
  question: "530) Comment tester correctement une valeur NULL ?",
  answers: [
    "a) colonne = NULL",
    "b) colonne == NULL",
    "c) colonne IS NULL",
    "d) colonne EQUAL NULL",
  ],
  correct: 2,
},
{
  question: "531) Comment sélectionner les lignes dont une colonne n'est pas NULL ?",
  answers: [
    "a) colonne <> NULL",
    "b) colonne IS NOT NULL",
    "c) colonne != NULL",
    "d) NOT NULL colonne",
  ],
  correct: 1,
},
{
  question: "532) Quelle est la particularité de NULL en SQL ?",
  answers: [
    "a) Il représente généralement une absence ou une valeur inconnue",
    "b) Il est toujours égal à 0",
    "c) Il est toujours égal à une chaîne vide",
    "d) Il représente toujours FALSE",
  ],
  correct: 0,
},
{
  question: "533) Le résultat de NULL = NULL est généralement :",
  answers: [
    "a) TRUE",
    "b) FALSE",
    "c) UNKNOWN",
    "d) 0",
  ],
  correct: 2,
},
{
  question: "534) SQL utilise généralement quelle logique pour les expressions impliquant NULL ?",
  answers: [
    "a) Logique binaire",
    "b) Logique ternaire",
    "c) Logique hexadécimale",
    "d) Logique uniquement numérique",
  ],
  correct: 1,
},
{
  question: "535) Quelle clause permet de renommer une colonne dans le résultat d'une requête ?",
  answers: [
    "a) AS",
    "b) RENAME",
    "c) LABEL",
    "d) NAME",
  ],
  correct: 0,
},
{
  question: "536) Dans SELECT salaire * 12 AS annuel FROM employe, que représente annuel ?",
  answers: [
    "a) Une nouvelle colonne permanente",
    "b) Un alias du résultat de l'expression",
    "c) Une nouvelle table",
    "d) Une contrainte",
  ],
  correct: 1,
},
{
  question: "537) Quelle requête retourne les employés avec un salaire annuel supérieur à 60000 ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire * 12 > 60000;",
    "b) SELECT * FROM employe WHERE salaire + 12 > 60000;",
    "c) SELECT * FROM employe HAVING salaire * 12 > 60000;",
    "d) SELECT * FROM employe CHECK salaire * 12 > 60000;",
  ],
  correct: 0,
},
{
  question: "538) Quelle clause permet de limiter les résultats à des groupes répondant à une condition agrégée ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) ORDER BY",
    "d) DISTINCT",
  ],
  correct: 1,
},
{
  question: "539) Quelle requête compte les employés par département ?",
  answers: [
    "a) SELECT departement, COUNT(*) FROM employe GROUP BY departement;",
    "b) SELECT departement, COUNT(*) FROM employe;",
    "c) SELECT COUNT(departement) GROUP employe;",
    "d) SELECT departement FROM employe COUNT(*);",
  ],
  correct: 0,
},
{
  question: "540) Que produit GROUP BY departement ?",
  answers: [
    "a) Il regroupe les lignes ayant la même valeur de département",
    "b) Il trie toujours les départements",
    "c) Il supprime définitivement les doublons",
    "d) Il crée une nouvelle table",
  ],
  correct: 0,
},
{
  question: "541) Quelle requête retourne le salaire moyen de tous les employés ?",
  answers: [
    "a) SELECT MEAN(salaire) FROM employe;",
    "b) SELECT AVG(salaire) FROM employe;",
    "c) SELECT AVERAGE(salaire) FROM employe;",
    "d) SELECT MID(salaire) FROM employe;",
  ],
  correct: 1,
},
{
  question: "542) Quelle fonction agrégée retourne le nombre de valeurs non NULL d'une colonne ?",
  answers: [
    "a) COUNT(colonne)",
    "b) SUM(colonne)",
    "c) NUMBER(colonne)",
    "d) TOTAL(colonne)",
  ],
  correct: 0,
},
{
  question: "543) Quelle fonction permet de compter les valeurs distinctes d'une colonne ?",
  answers: [
    "a) COUNT(DISTINCT colonne)",
    "b) DISTINCT(COUNT(colonne))",
    "c) UNIQUE(COUNT(colonne))",
    "d) COUNT(UNIQUE ROWS)",
  ],
  correct: 0,
},
{
  question: "544) Quelle requête retourne le nombre de villes différentes dans client ?",
  answers: [
    "a) SELECT COUNT(ville) FROM client;",
    "b) SELECT COUNT(DISTINCT ville) FROM client;",
    "c) SELECT DISTINCT COUNT(ville) FROM client;",
    "d) SELECT UNIQUE(ville) FROM client;",
  ],
  correct: 1,
},
{
  question: "545) Quelle fonction retourne la valeur maximale d'une colonne numérique ?",
  answers: [
    "a) MAX()",
    "b) TOP()",
    "c) HIGHEST()",
    "d) UPPER()",
  ],
  correct: 0,
},
{
  question: "546) Quelle requête retourne le salaire minimum ?",
  answers: [
    "a) SELECT MIN(salaire) FROM employe;",
    "b) SELECT LOW(salaire) FROM employe;",
    "c) SELECT SMALL(salaire) FROM employe;",
    "d) SELECT BOTTOM(salaire) FROM employe;",
  ],
  correct: 0,
},
{
  question: "547) Quelle clause est généralement placée après GROUP BY pour filtrer les groupes ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) FILTER",
    "d) CHECK",
  ],
  correct: 1,
},
{
  question: "548) Quelle requête retourne les départements ayant un salaire moyen supérieur à 5000 ?",
  answers: [
    "a) SELECT departement FROM employe GROUP BY departement HAVING AVG(salaire) > 5000;",
    "b) SELECT departement FROM employe WHERE AVG(salaire) > 5000 GROUP BY departement;",
    "c) SELECT departement FROM employe HAVING salaire > 5000;",
    "d) SELECT departement FROM employe GROUP BY AVG(salaire) > 5000;",
  ],
  correct: 0,
},
{
  question: "549) Quelle clause permet de combiner les résultats de deux requêtes en supprimant les doublons ?",
  answers: [
    "a) UNION",
    "b) JOIN",
    "c) MERGE",
    "d) COMBINE",
  ],
  correct: 0,
},
{
  question: "550) Quelle opération combine deux ensembles de résultats en conservant les doublons ?",
  answers: [
    "a) UNION",
    "b) UNION ALL",
    "c) JOIN ALL",
    "d) MERGE ALL",
  ],
  correct: 1,
},
{
  question: "551) Pour utiliser UNION entre deux requêtes, quelle condition générale doit être respectée ?",
  answers: [
    "a) Elles doivent retourner le même nombre de colonnes compatibles",
    "b) Elles doivent utiliser exactement les mêmes tables",
    "c) Elles doivent avoir les mêmes noms de colonnes",
    "d) Elles doivent avoir le même nombre de lignes",
  ],
  correct: 0,
},
{
  question: "552) Quelle est la différence principale entre UNION et UNION ALL ?",
  answers: [
    "a) UNION conserve les doublons, UNION ALL les supprime",
    "b) UNION supprime les doublons, UNION ALL les conserve",
    "c) UNION trie les résultats, UNION ALL ne les trie jamais",
    "d) Il n'y a aucune différence",
  ],
  correct: 1,
},
{
  question: "553) Quelle opération retourne les lignes communes à deux ensembles de résultats ?",
  answers: [
    "a) UNION",
    "b) INTERSECT",
    "c) EXCEPT",
    "d) JOIN",
  ],
  correct: 1,
},
{
  question: "554) Quelle opération retourne les lignes présentes dans le premier résultat mais absentes du second ?",
  answers: [
    "a) UNION",
    "b) INTERSECT",
    "c) EXCEPT",
    "d) CROSS JOIN",
  ],
  correct: 2,
},
{
  question: "555) Quelle clause permet de combiner des lignes provenant de plusieurs tables selon une condition de correspondance ?",
  answers: [
    "a) JOIN",
    "b) GROUP",
    "c) UNION",
    "d) MERGE",
  ],
  correct: 0,
},
{
  question: "556) Quel type de JOIN retourne uniquement les lignes ayant une correspondance dans les deux tables ?",
  answers: [
    "a) LEFT JOIN",
    "b) RIGHT JOIN",
    "c) INNER JOIN",
    "d) FULL JOIN",
  ],
  correct: 2,
},
{
  question: "557) Quelle requête réalise une jointure interne entre client et commande sur id_client ?",
  answers: [
    "a) SELECT * FROM client INNER JOIN commande ON client.id = commande.id_client;",
    "b) SELECT * FROM client JOIN commande WHERE client.id = commande.id_client;",
    "c) SELECT * FROM client UNION commande ON client.id = commande.id_client;",
    "d) SELECT * FROM client CONNECT commande USING id_client;",
  ],
  correct: 0,
},
{
  question: "558) Quel est le rôle de ON dans une jointure ?",
  answers: [
    "a) Définir la condition de correspondance entre les tables",
    "b) Trier les résultats",
    "c) Créer une nouvelle colonne",
    "d) Filtrer uniquement les NULL",
  ],
  correct: 0,
},
{
  question: "559) Quel type de JOIN conserve toutes les lignes de la table située à gauche ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) RIGHT JOIN",
    "d) CROSS JOIN",
  ],
  correct: 1,
},
{
  question: "560) Dans un LEFT JOIN, que contient généralement la partie droite lorsqu'aucune correspondance n'existe ?",
  answers: [
    "a) Des zéros",
    "b) Des chaînes vides",
    "c) Des NULL",
    "d) Des valeurs aléatoires",
  ],
  correct: 2,
},
{
  question: "561) Quel type de JOIN conserve toutes les lignes de la table située à droite ?",
  answers: [
    "a) LEFT JOIN",
    "b) RIGHT JOIN",
    "c) INNER JOIN",
    "d) CROSS JOIN",
  ],
  correct: 1,
},
{
  question: "562) Quel type de JOIN peut conserver les lignes des deux tables, même sans correspondance ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN uniquement",
    "c) FULL OUTER JOIN",
    "d) CROSS JOIN",
  ],
  correct: 2,
},
{
  question: "563) Que produit un CROSS JOIN entre une table de 3 lignes et une table de 4 lignes ?",
  answers: [
    "a) 7 lignes",
    "b) 12 lignes",
    "c) 4 lignes",
    "d) 3 lignes",
  ],
  correct: 1,
},
{
  question: "564) Un CROSS JOIN produit :",
  answers: [
    "a) Le produit cartésien des deux tables",
    "b) Seulement les lignes identiques",
    "c) Seulement les lignes NULL",
    "d) Une union sans doublons",
  ],
  correct: 0,
},
{
  question: "565) Quel mot-clé permet de donner un alias à une table ?",
  answers: [
    "a) AS",
    "b) ALIAS TABLE",
    "c) NAME",
    "d) RENAME",
  ],
  correct: 0,
},
{
  question: "566) Pourquoi utilise-t-on souvent des alias dans les jointures ?",
  answers: [
    "a) Pour raccourcir les noms et distinguer les tables",
    "b) Pour supprimer les doublons",
    "c) Pour créer automatiquement des index",
    "d) Pour modifier les données",
  ],
  correct: 0,
},
{
  question: "567) Dans SELECT c.nom FROM client c, que représente c ?",
  answers: [
    "a) Une colonne",
    "b) Un alias de la table client",
    "c) Une base de données",
    "d) Une contrainte",
  ],
  correct: 1,
},
{
  question: "568) Une relation 1:N signifie généralement :",
  answers: [
    "a) Une ligne de la première table peut être associée à plusieurs lignes de la seconde",
    "b) Une ligne de chaque table doit être unique",
    "c) Plusieurs bases partagent une table",
    "d) Une table ne contient aucune clé",
  ],
  correct: 0,
},
{
  question: "569) Dans une relation 1:N, où trouve-t-on généralement la clé étrangère ?",
  answers: [
    "a) Dans la table du côté N",
    "b) Dans la table du côté 1 uniquement",
    "c) Dans une troisième base obligatoire",
    "d) Elle n'est pas nécessaire",
  ],
  correct: 0,
},
{
  question: "570) Une relation N:N est généralement représentée en base relationnelle par :",
  answers: [
    "a) Une seule colonne",
    "b) Une table associative",
    "c) Une vue uniquement",
    "d) Un index unique uniquement",
  ],
  correct: 1,
},
{
  question: "571) Une table associative pour une relation N:N contient généralement :",
  answers: [
    "a) Les clés étrangères des deux entités",
    "b) Uniquement des colonnes texte",
    "c) Uniquement une clé primaire indépendante",
    "d) Aucun identifiant",
  ],
  correct: 0,
},
{
  question: "572) Quel JOIN est adapté pour afficher tous les clients, y compris ceux sans commande ?",
  answers: [
    "a) INNER JOIN",
    "b) LEFT JOIN",
    "c) CROSS JOIN",
    "d) INTERSECT",
  ],
  correct: 1,
},
{
  question: "573) Quelle condition permet de trouver les clients sans commande après un LEFT JOIN ?",
  answers: [
    "a) commande.id IS NULL",
    "b) commande.id = 0",
    "c) commande.id = NULL",
    "d) commande.id <> NULL",
  ],
  correct: 0,
},
{
  question: "574) Quelle requête trouve les clients sans commande ?",
  answers: [
    "a) SELECT c.* FROM client c LEFT JOIN commande o ON c.id = o.client_id WHERE o.id IS NULL;",
    "b) SELECT c.* FROM client c INNER JOIN commande o ON c.id = o.client_id WHERE o.id IS NULL;",
    "c) SELECT c.* FROM client c WHERE o.id = NULL;",
    "d) SELECT c.* FROM client c CROSS JOIN commande o WHERE o.id IS NULL;",
  ],
  correct: 0,
},
{
  question: "575) Quel opérateur permet de tester si une sous-requête retourne au moins une ligne ?",
  answers: [
    "a) EXISTS",
    "b) FOUND",
    "c) HAS",
    "d) PRESENT",
  ],
  correct: 0,
},
{
  question: "576) Que vérifie EXISTS (subquery) ?",
  answers: [
    "a) Si la sous-requête retourne au moins une ligne",
    "b) Si toutes les valeurs sont identiques",
    "c) Si la sous-requête retourne uniquement NULL",
    "d) Si une table existe physiquement sur le disque",
  ],
  correct: 0,
},
{
  question: "577) Quelle condition peut être utilisée pour trouver les clients ayant au moins une commande ?",
  answers: [
    "a) EXISTS",
    "b) IS EMPTY",
    "c) HAS ROW",
    "d) PRESENT",
  ],
  correct: 0,
},
{
  question: "578) Quelle est la caractéristique d'une sous-requête corrélée ?",
  answers: [
    "a) Elle fait référence à une colonne de la requête externe",
    "b) Elle ne peut contenir aucune condition",
    "c) Elle retourne toujours une seule ligne",
    "d) Elle doit toujours utiliser UNION",
  ],
  correct: 0,
},
{
  question: "579) Quelle sous-requête peut être utilisée avec IN ?",
  answers: [
    "a) Une sous-requête retournant un ensemble de valeurs compatibles",
    "b) Uniquement une sous-requête retournant une table entière",
    "c) Uniquement une sous-requête sans SELECT",
    "d) Aucune",
  ],
  correct: 0,
},
{
  question: "580) Que signifie WHERE id IN (1, 3, 5) ?",
  answers: [
    "a) id doit être différent de 1, 3 et 5",
    "b) id doit être égal à l'une des valeurs 1, 3 ou 5",
    "c) id doit être supérieur à 5",
    "d) id doit être NULL",
  ],
  correct: 1,
},
{
  question: "581) Quel opérateur permet de vérifier qu'une valeur appartient à un ensemble ?",
  answers: [
    "a) IN",
    "b) BELONG",
    "c) MEMBER",
    "d) INCLUDE",
  ],
  correct: 0,
},
{
  question: "582) Que signifie NOT IN ?",
  answers: [
    "a) La valeur appartient obligatoirement à l'ensemble",
    "b) La valeur n'appartient pas à l'ensemble",
    "c) La valeur est NULL",
    "d) La valeur est toujours différente de NULL",
  ],
  correct: 1,
},
{
  question: "583) Quelle difficulté particulière peut poser NOT IN lorsqu'une sous-requête contient NULL ?",
  answers: [
    "a) Il peut produire des résultats inattendus à cause de la logique à trois valeurs",
    "b) Il transforme toujours NULL en 0",
    "c) Il supprime automatiquement la table",
    "d) Il devient automatiquement un JOIN",
  ],
  correct: 0,
},
{
  question: "584) Quel opérateur permet de comparer une valeur à toutes les valeurs retournées par une sous-requête ?",
  answers: [
    "a) ALL",
    "b) EVERYROW",
    "c) EACH",
    "d) TOTAL",
  ],
  correct: 0,
},
{
  question: "585) Quel opérateur permet de comparer une valeur à au moins une valeur d'une sous-requête ?",
  answers: [
    "a) SOME/ANY",
    "b) EVERY",
    "c) ALLONLY",
    "d) ONE",
  ],
  correct: 0,
},
{
  question: "586) Que signifie salaire > ALL (sous-requête) ?",
  answers: [
    "a) Le salaire est supérieur à toutes les valeurs retournées",
    "b) Le salaire est supérieur à au moins une valeur",
    "c) Le salaire est égal à toutes les valeurs",
    "d) Le salaire est NULL",
  ],
  correct: 0,
},
{
  question: "587) Que signifie salaire > ANY (sous-requête) ?",
  answers: [
    "a) Le salaire est supérieur à au moins une valeur comparable retournée",
    "b) Le salaire est supérieur à toutes les valeurs",
    "c) Le salaire est égal à toutes les valeurs",
    "d) Le salaire doit être NULL",
  ],
  correct: 0,
},
{
  question: "588) Quelle fonction conditionnelle permet de retourner une valeur différente selon plusieurs conditions ?",
  answers: [
    "a) CASE",
    "b) SWITCH SQL",
    "c) IF CASE ONLY",
    "d) CONDITION",
  ],
  correct: 0,
},
{
  question: "589) Quelle syntaxe commence une expression CASE recherchée ?",
  answers: [
    "a) CASE WHEN condition THEN résultat",
    "b) CASE IF condition RESULT",
    "c) SWITCH WHEN condition THEN",
    "d) IF CASE condition",
  ],
  correct: 0,
},
{
  question: "590) Dans une expression CASE, quel mot-clé indique le résultat lorsqu'une condition est vraie ?",
  answers: [
    "a) RETURN",
    "b) THEN",
    "c) RESULT",
    "d) VALUE",
  ],
  correct: 1,
},
{
  question: "591) Quel mot-clé permet de définir le résultat par défaut d'un CASE ?",
  answers: [
    "a) DEFAULT",
    "b) ELSE",
    "c) OTHERWISE ONLY",
    "d) FALLBACK",
  ],
  correct: 1,
},
{
  question: "592) Quel mot-clé termine une expression CASE ?",
  answers: [
    "a) END",
    "b) CLOSE",
    "c) STOP",
    "d) FINISH",
  ],
  correct: 0,
},
{
  question: "593) Quelle expression est correcte ?",
  answers: [
    "a) CASE WHEN salaire > 5000 THEN 'Élevé' ELSE 'Normal' END",
    "b) CASE IF salaire > 5000 RETURN 'Élevé'",
    "c) CASE salaire > 5000 THEN 'Élevé' ENDIF",
    "d) SWITCH WHEN salaire > 5000 THEN 'Élevé'",
  ],
  correct: 0,
},
{
  question: "594) Quel résultat produit CASE WHEN note >= 10 THEN 'Admis' ELSE 'Ajourné' END pour note = 14 ?",
  answers: [
    "a) Ajourné",
    "b) Admis",
    "c) NULL",
    "d) 14",
  ],
  correct: 1,
},
{
  question: "595) Quel opérateur permet de concaténer des chaînes en SQL standard ?",
  answers: [
    "a) ||",
    "b) + uniquement",
    "c) &",
    "d) CONCATENATE uniquement",
  ],
  correct: 0,
},
{
  question: "596) Quelle fonction est couramment utilisée pour concaténer des chaînes dans de nombreux SGBD ?",
  answers: [
    "a) CONCAT()",
    "b) JOINSTR()",
    "c) MERGE_TEXT()",
    "d) APPEND_STRING()",
  ],
  correct: 0,
},
{
  question: "597) Quelle fonction permet généralement de convertir une chaîne en majuscules ?",
  answers: [
    "a) UPPER()",
    "b) CAPITAL()",
    "c) MAJ()",
    "d) TOUPPER()",
  ],
  correct: 0,
},
{
  question: "598) Quelle fonction permet généralement de convertir une chaîne en minuscules ?",
  answers: [
    "a) LOWER()",
    "b) SMALLER()",
    "c) MINUS()",
    "d) TOLOWER()",
  ],
  correct: 0,
},
{
  question: "599) Quelle fonction retourne généralement la longueur d'une chaîne ?",
  answers: [
    "a) LENGTH()",
    "b) SIZEOF()",
    "c) STRING_SIZE()",
    "d) COUNTCHAR()",
  ],
  correct: 0,
},
{
  question: "600) Quelle fonction permet généralement de supprimer les espaces au début et à la fin d'une chaîne ?",
  answers: [
    "a) CLEAN()",
    "b) TRIM()",
    "c) STRIPSPACE()",
    "d) REMOVE_SPACE()",
  ],
  correct: 1,
},
{
  question: "601) Quelle fonction SQL permet généralement d'arrondir un nombre ?",
  answers: [
    "a) ROUND()",
    "b) FORMAT_NUMBER()",
    "c) APPROX()",
    "d) INTEGER()",
  ],
  correct: 0,
},
{
  question: "602) Quelle fonction retourne généralement la valeur absolue d'un nombre ?",
  answers: [
    "a) ABS()",
    "b) POSITIVE()",
    "c) MOD()",
    "d) SIGNED()",
  ],
  correct: 0,
},
{
  question: "603) Quelle fonction permet généralement de calculer le reste d'une division ?",
  answers: [
    "a) REMAINDER() uniquement",
    "b) MOD()",
    "c) REST()",
    "d) DIVIDE()",
  ],
  correct: 1,
},
{
  question: "604) Quelle fonction retourne généralement le signe d'un nombre ?",
  answers: [
    "a) SIGN()",
    "b) NUMBER_SIGN()",
    "c) POSNEG()",
    "d) SYMBOL()",
  ],
  correct: 0,
},
{
  question: "605) Que retourne généralement MOD(10, 3) ?",
  answers: [
    "a) 1",
    "b) 3",
    "c) 0",
    "d) 10",
  ],
  correct: 0,
},
{
  question: "606) Quelle fonction permet généralement d'obtenir la partie entière inférieure d'un nombre ?",
  answers: [
    "a) FLOOR()",
    "b) DOWN()",
    "c) INTEGER_ONLY()",
    "d) TRUNCATE_NUMBER()",
  ],
  correct: 0,
},
{
  question: "607) Quelle fonction permet généralement d'obtenir l'entier supérieur ou égal à un nombre ?",
  answers: [
    "a) CEILING()",
    "b) UPONLY()",
    "c) HIGHER()",
    "d) ROUNDUPONLY()",
  ],
  correct: 0,
},
{
  question: "608) Que fait CAST() en SQL ?",
  answers: [
    "a) Convertit une valeur vers un type de données donné",
    "b) Supprime une table",
    "c) Trie une colonne",
    "d) Crée un index",
  ],
  correct: 0,
},
{
  question: "609) Quelle syntaxe représente une conversion avec CAST ?",
  answers: [
    "a) CAST(expression AS type)",
    "b) CAST(expression TO type)",
    "c) CONVERT(expression USING type)",
    "d) TYPE(expression AS type)",
  ],
  correct: 0,
},
{
  question: "610) Quelle fonction est utilisée dans de nombreux SGBD pour convertir des valeurs entre différents types ?",
  answers: [
    "a) CONVERT()",
    "b) TRANSFORM()",
    "c) CHANGE_TYPE()",
    "d) TYPECAST()",
  ],
  correct: 0,
},
{
  question: "611) Quelle fonction permet généralement de récupérer la date actuelle ?",
  answers: [
    "a) CURRENT_DATE",
    "b) TODAY_ONLY()",
    "c) DATE_NOW_ONLY()",
    "d) GET_DATE_NOW() uniquement",
  ],
  correct: 0,
},
{
  question: "612) Quelle expression SQL standard permet d'obtenir la date et l'heure courantes ?",
  answers: [
    "a) CURRENT_TIMESTAMP",
    "b) NOW_DATE_ONLY",
    "c) SYSTEM_CLOCK_DATE",
    "d) CURRENT_CLOCK_ONLY",
  ],
  correct: 0,
},
{
  question: "613) Quel type de données est destiné à représenter une date sans heure ?",
  answers: [
    "a) DATE",
    "b) TIME",
    "c) YEARONLY",
    "d) DAY",
  ],
  correct: 0,
},
{
  question: "614) Quel type de données représente généralement une heure sans date ?",
  answers: [
    "a) DATE",
    "b) TIME",
    "c) CLOCK",
    "d) HOUR",
  ],
  correct: 1,
},
{
  question: "615) Quel type de données représente généralement une date et une heure ?",
  answers: [
    "a) TIMESTAMP",
    "b) DATETIME_ONLY",
    "c) DATEHOUR",
    "d) CALENDAR",
  ],
  correct: 0,
},
{
  question: "616) Quelle fonction permet généralement d'extraire une partie d'une date ?",
  answers: [
    "a) EXTRACT()",
    "b) PART()",
    "c) DATE_PART_ONLY()",
    "d) GETDATEPART()",
  ],
  correct: 0,
},
{
  question: "617) Quelle expression peut extraire l'année d'une date en SQL standard ?",
  answers: [
    "a) EXTRACT(YEAR FROM date_colonne)",
    "b) YEAR FROM date_colonne",
    "c) GET YEAR date_colonne",
    "d) DATE.YEAR(date_colonne)",
  ],
  correct: 0,
},
{
  question: "618) Quel est le rôle de CURRENT_DATE ?",
  answers: [
    "a) Retourner la date courante",
    "b) Modifier la date du serveur",
    "c) Supprimer les dates",
    "d) Créer une colonne DATE",
  ],
  correct: 0,
},
{
  question: "619) Quel type de données est approprié pour stocker un nombre entier ?",
  answers: [
    "a) INTEGER",
    "b) TEXT",
    "c) DATE",
    "d) BOOLEAN uniquement",
  ],
  correct: 0,
},
{
  question: "620) Quel type est généralement adapté à un nombre décimal nécessitant une précision exacte ?",
  answers: [
    "a) DECIMAL",
    "b) FLOAT uniquement",
    "c) TEXT",
    "d) CHAR",
  ],
  correct: 0,
},
{
  question: "621) Pour stocker des montants financiers, quel type est généralement préférable ?",
  answers: [
    "a) DECIMAL/NUMERIC",
    "b) FLOAT uniquement",
    "c) VARCHAR uniquement",
    "d) BOOLEAN",
  ],
  correct: 0,
},
{
  question: "622) Quelle différence générale existe entre CHAR et VARCHAR ?",
  answers: [
    "a) CHAR est de longueur fixe, VARCHAR de longueur variable",
    "b) CHAR est numérique, VARCHAR est une date",
    "c) VARCHAR est toujours plus rapide",
    "d) Il n'existe aucune différence",
  ],
  correct: 0,
},
{
  question: "623) Quel type est généralement utilisé pour stocker du texte de longueur variable ?",
  answers: [
    "a) VARCHAR",
    "b) INTEGER",
    "c) DATE",
    "d) DECIMAL",
  ],
  correct: 0,
},
{
  question: "624) Quel type est destiné à stocker une valeur logique dans les SGBD qui prennent en charge BOOLEAN ?",
  answers: [
    "a) BOOLEAN",
    "b) LOGICAL",
    "c) BITSTRING",
    "d) BOOLVALUE",
  ],
  correct: 0,
},
{
  question: "625) Quelle contrainte garantit qu'une valeur respecte une condition définie par le concepteur ?",
  answers: [
    "a) CHECK",
    "b) TEST",
    "c) VALIDATE",
    "d) CONDITION",
  ],
  correct: 0,
},
{
  question: "626) Quelle définition garantit que l'âge ne peut pas être négatif ?",
  answers: [
    "a) age INTEGER CHECK (age >= 0)",
    "b) age INTEGER VALIDATE age >= 0",
    "c) age INTEGER WHERE age >= 0",
    "d) age INTEGER IF age >= 0",
  ],
  correct: 0,
},
{
  question: "627) Une contrainte UNIQUE autorise-t-elle plusieurs NULL ?",
  answers: [
    "a) Cela dépend du SGBD et de son implémentation",
    "b) Jamais",
    "c) Toujours exactement deux",
    "d) Toujours exactement un",
  ],
  correct: 0,
},
{
  question: "628) Une clé primaire peut-elle contenir NULL ?",
  answers: [
    "a) Oui, toujours",
    "b) Non",
    "c) Seulement si elle est composée",
    "d) Seulement dans une vue",
  ],
  correct: 1,
},
{
  question: "629) Une clé primaire doit généralement être :",
  answers: [
    "a) Unique et non NULL",
    "b) Toujours une chaîne",
    "c) Toujours un entier",
    "d) Obligatoirement auto-incrémentée",
  ],
  correct: 0,
},
{
  question: "630) Une clé étrangère peut-elle contenir NULL ?",
  answers: [
    "a) Oui, si la colonne n'est pas définie NOT NULL",
    "b) Jamais",
    "c) Seulement dans MySQL",
    "d) Seulement si elle est primaire",
  ],
  correct: 0,
},
{
  question: "631) Quel est le rôle de l'intégrité référentielle ?",
  answers: [
    "a) Maintenir la cohérence entre les clés étrangères et les lignes référencées",
    "b) Trier les données",
    "c) Accélérer tous les SELECT",
    "d) Chiffrer les colonnes",
  ],
  correct: 0,
},
{
  question: "632) Que peut provoquer la suppression d'une ligne référencée par une clé étrangère ?",
  answers: [
    "a) Elle peut être refusée ou déclencher une action définie comme CASCADE selon la contrainte",
    "b) Elle est toujours autorisée",
    "c) La base est toujours supprimée",
    "d) La clé primaire devient automatiquement NULL",
  ],
  correct: 0,
},
{
  question: "633) Que signifie ON DELETE CASCADE dans une clé étrangère ?",
  answers: [
    "a) La suppression de la ligne parent peut entraîner la suppression des lignes enfants correspondantes",
    "b) La suppression est toujours interdite",
    "c) Les données sont archivées automatiquement",
    "d) Les clés sont transformées en index",
  ],
  correct: 0,
},
{
  question: "634) Que signifie ON UPDATE CASCADE ?",
  answers: [
    "a) Une modification de la clé référencée peut être propagée aux clés étrangères correspondantes",
    "b) La table est supprimée",
    "c) Toutes les lignes sont mises à jour sans condition",
    "d) Les index sont supprimés",
  ],
  correct: 0,
},
{
  question: "635) Quel niveau de normalisation exige que chaque attribut contienne une valeur atomique ?",
  answers: [
    "a) Première forme normale (1NF)",
    "b) Deuxième forme normale (2NF)",
    "c) Troisième forme normale (3NF)",
    "d) Cinquième forme normale (5NF)",
  ],
  correct: 0,
},
{
  question: "636) Une table est en 2NF si elle est en 1NF et que :",
  answers: [
    "a) Elle ne possède aucune clé",
    "b) Les attributs non clés dépendent entièrement de toute clé candidate",
    "c) Toutes les colonnes sont numériques",
    "d) Elle ne contient aucune clé étrangère",
  ],
  correct: 1,
},
{
  question: "637) Une table en 3NF doit notamment éviter :",
  answers: [
    "a) Les dépendances transitives problématiques des attributs non clés",
    "b) Toutes les clés étrangères",
    "c) Toutes les valeurs NULL",
    "d) Toutes les relations 1:N",
  ],
  correct: 0,
},
{
  question: "638) Quel est l'objectif principal de la normalisation ?",
  answers: [
    "a) Réduire les redondances et les anomalies de mise à jour",
    "b) Augmenter volontairement les doublons",
    "c) Supprimer toutes les relations",
    "d) Remplacer SQL par NoSQL",
  ],
  correct: 0,
},
{
  question: "639) Une anomalie d'insertion correspond notamment à :",
  answers: [
    "a) Une difficulté à insérer une information sans avoir à fournir une autre information non pertinente",
    "b) Une erreur de syntaxe SELECT",
    "c) Une duplication automatique des bases",
    "d) Un problème d'index uniquement",
  ],
  correct: 0,
},
{
  question: "640) Une anomalie de suppression peut entraîner :",
  answers: [
    "a) La perte involontaire d'une information encore utile",
    "b) La création automatique d'une table",
    "c) La conversion des données en NULL uniquement",
    "d) L'augmentation automatique du nombre de colonnes",
  ],
  correct: 0,
},
{
  question: "641) Une anomalie de mise à jour est souvent causée par :",
  answers: [
    "a) La répétition d'une même information à plusieurs endroits",
    "b) L'utilisation de SELECT",
    "c) L'absence de ORDER BY",
    "d) L'utilisation de VARCHAR",
  ],
  correct: 0,
},
{
  question: "642) Quelle forme normale est généralement plus stricte que la 3NF ?",
  answers: [
    "a) 2NF",
    "b) 1NF",
    "c) BCNF",
    "d) 0NF",
  ],
  correct: 2,
},
{
  question: "643) Que signifie BCNF ?",
  answers: [
    "a) Boyce-Codd Normal Form",
    "b) Basic Column Normal Form",
    "c) Binary Code Normal Form",
    "d) Base Constraint Normal Form",
  ],
  correct: 0,
},
{
  question: "644) Quelle commande permet de créer un point de sauvegarde dans une transaction ?",
  answers: [
    "a) SAVEPOINT",
    "b) CHECKPOINT SQL",
    "c) MARKPOINT",
    "d) TRANSACTION POINT",
  ],
  correct: 0,
},
{
  question: "645) Quelle commande permet d'annuler une transaction jusqu'à un SAVEPOINT ?",
  answers: [
    "a) ROLLBACK TO SAVEPOINT",
    "b) CANCEL TO SAVEPOINT",
    "c) UNDO POINT",
    "d) RESET TRANSACTION POINT",
  ],
  correct: 0,
},
{
  question: "646) Quelle propriété ACID garantit qu'une transaction est exécutée entièrement ou pas du tout ?",
  answers: [
    "a) Atomicité",
    "b) Cohérence",
    "c) Isolation",
    "d) Durabilité",
  ],
  correct: 0,
},
{
  question: "647) Quelle propriété ACID garantit que les données restent cohérentes après une transaction valide ?",
  answers: [
    "a) Atomicité",
    "b) Cohérence",
    "c) Isolation",
    "d) Durabilité",
  ],
  correct: 1,
},
{
  question: "648) Quelle propriété ACID concerne l'indépendance des transactions concurrentes ?",
  answers: [
    "a) Atomicité",
    "b) Cohérence",
    "c) Isolation",
    "d) Durabilité",
  ],
  correct: 2,
},
{
  question: "649) Quelle propriété ACID garantit que les modifications validées survivent normalement à une panne ?",
  answers: [
    "a) Atomicité",
    "b) Cohérence",
    "c) Isolation",
    "d) Durabilité",
  ],
  correct: 3,
},
{
  question: "650) Quel problème de concurrence correspond à la lecture de données modifiées par une transaction non encore validée ?",
  answers: [
    "a) Dirty read",
    "b) Phantom read uniquement",
    "c) Lost update uniquement",
    "d) Deadlock",
  ],
  correct: 0,
},
{
  question: "651) Quel problème de concurrence se produit lorsqu'une transaction relit une ligne et obtient une valeur différente après la modification validée par une autre transaction ?",
  answers: [
    "a) Dirty read",
    "b) Non-repeatable read",
    "c) Phantom read",
    "d) Deadlock",
  ],
  correct: 1,
},
{
  question: "652) Quel problème de concurrence correspond à l'apparition de nouvelles lignes correspondant à une même condition lors d'une nouvelle lecture ?",
  answers: [
    "a) Dirty read",
    "b) Lost update",
    "c) Phantom read",
    "d) Syntax error",
  ],
  correct: 2,
},
{
  question: "653) Qu'est-ce qu'un deadlock ?",
  answers: [
    "a) Deux transactions ou plus se bloquent mutuellement en attendant des ressources",
    "b) Une table sans clé primaire",
    "c) Une requête sans WHERE",
    "d) Une valeur NULL",
  ],
  correct: 0,
},
{
  question: "654) Quel niveau d'isolation empêche généralement les dirty reads ?",
  answers: [
    "a) READ UNCOMMITTED",
    "b) READ COMMITTED",
    "c) Aucun niveau",
    "d) BASIC READ",
  ],
  correct: 1,
},
{
  question: "655) Quel niveau d'isolation est généralement le plus faible parmi les niveaux SQL classiques ?",
  answers: [
    "a) SERIALIZABLE",
    "b) REPEATABLE READ",
    "c) READ UNCOMMITTED",
    "d) SNAPSHOT",
  ],
  correct: 2,
},
{
  question: "656) Quel niveau d'isolation vise à fournir le comportement le plus proche d'une exécution séquentielle des transactions ?",
  answers: [
    "a) READ UNCOMMITTED",
    "b) READ COMMITTED",
    "c) REPEATABLE READ",
    "d) SERIALIZABLE",
  ],
  correct: 3,
},
{
  question: "657) Quel est généralement le compromis d'un niveau d'isolation plus élevé ?",
  answers: [
    "a) Il peut réduire la concurrence et augmenter les coûts de verrouillage",
    "b) Il supprime toutes les données",
    "c) Il interdit SELECT",
    "d) Il supprime les clés étrangères",
  ],
  correct: 0,
},
{
  question: "658) Quel mécanisme est souvent utilisé par les SGBD pour contrôler les accès concurrents aux données ?",
  answers: [
    "a) Verrouillage",
    "b) Compression uniquement",
    "c) Tri alphabétique",
    "d) Alias",
  ],
  correct: 0,
},
{
  question: "659) Quel est le rôle d'un verrou exclusif dans une transaction ?",
  answers: [
    "a) Permettre simultanément toutes les écritures",
    "b) Protéger une ressource contre certaines opérations concurrentes incompatibles",
    "c) Supprimer les doublons",
    "d) Créer une vue",
  ],
  correct: 1,
},
{
  question: "660) Quelle commande permet de démarrer explicitement une transaction dans de nombreux SGBD ?",
  answers: [
    "a) START TRANSACTION",
    "b) BEGIN TRANSACTION",
    "c) Les deux peuvent être utilisées selon le SGBD",
    "d) Les réponses a et b sont correctes",
  ],
  correct: 3,
},
{
  question: "661) Quelle instruction permet de rendre permanentes les modifications d'une transaction ?",
  answers: [
    "a) COMMIT",
    "b) SAVE",
    "c) APPLY ALL",
    "d) ACCEPT",
  ],
  correct: 0,
},
{
  question: "662) Après un ROLLBACK complet, que deviennent normalement les modifications non validées ?",
  answers: [
    "a) Elles sont annulées",
    "b) Elles deviennent automatiquement permanentes",
    "c) Elles sont copiées dans une autre table",
    "d) Elles sont transformées en NULL",
  ],
  correct: 0,
},
{
  question: "663) Quelle instruction permet de supprimer un index existant dans de nombreux SGBD ?",
  answers: [
    "a) DELETE INDEX",
    "b) DROP INDEX",
    "c) REMOVE INDEX TABLE",
    "d) CLEAR INDEX",
  ],
  correct: 1,
},
{
  question: "664) Quel index est généralement créé implicitement ou explicitement pour une clé primaire ?",
  answers: [
    "a) Un index permettant d'assurer/rechercher l'unicité de la clé selon le SGBD",
    "b) Un index uniquement textuel",
    "c) Un index temporaire obligatoire",
    "d) Aucun mécanisme d'indexation n'est possible",
  ],
  correct: 0,
},
{
  question: "665) Un index sur une colonne utilisée fréquemment dans WHERE peut :",
  answers: [
    "a) Accélérer certaines recherches",
    "b) Toujours ralentir les SELECT",
    "c) Supprimer les données",
    "d) Remplacer une clé étrangère",
  ],
  correct: 0,
},
{
  question: "666) Pourquoi un index peut-il ralentir INSERT ?",
  answers: [
    "a) L'index doit également être maintenu lors de l'insertion",
    "b) INSERT devient une requête SELECT",
    "c) L'index supprime automatiquement la ligne",
    "d) Les index interdisent INSERT",
  ],
  correct: 0,
},
{
  question: "667) Qu'est-ce qu'un index composite ?",
  answers: [
    "a) Un index portant sur plusieurs colonnes",
    "b) Un index sur plusieurs bases obligatoirement",
    "c) Un index composé uniquement de NULL",
    "d) Un index créé uniquement sur les vues",
  ],
  correct: 0,
},
{
  question: "668) Pour un index composite sur (nom, ville), quelle colonne est généralement la plus importante pour les recherches suivant le préfixe de l'index ?",
  answers: [
    "a) nom",
    "b) ville uniquement",
    "c) Les deux sont toujours indépendantes",
    "d) Aucune",
  ],
  correct: 0,
},
{
  question: "669) Quel outil permet généralement d'analyser le plan d'exécution d'une requête ?",
  answers: [
    "a) EXPLAIN",
    "b) ANALYZE SQL ONLY",
    "c) PLAN QUERY",
    "d) SHOW EXECUTION ONLY",
  ],
  correct: 0,
},
{
  question: "670) Quel est l'objectif principal d'un plan d'exécution ?",
  answers: [
    "a) Montrer comment le SGBD prévoit d'exécuter la requête",
    "b) Modifier automatiquement toutes les tables",
    "c) Créer les utilisateurs",
    "d) Sauvegarder la base",
  ],
  correct: 0,
},
{
  question: "671) Lorsqu'une requête utilise SELECT *, quel problème potentiel peut apparaître ?",
  answers: [
    "a) Elle peut récupérer des colonnes inutiles et augmenter les données transférées",
    "b) Elle devient toujours invalide",
    "c) Elle ne peut jamais utiliser d'index",
    "d) Elle supprime les colonnes",
  ],
  correct: 0,
},
{
  question: "672) Pourquoi éviter SELECT * dans une application lorsque seules quelques colonnes sont nécessaires ?",
  answers: [
    "a) Pour limiter les données récupérées et rendre la requête plus explicite",
    "b) Parce que SELECT * est toujours syntaxiquement incorrect",
    "c) Parce que * signifie DELETE",
    "d) Parce que SELECT ne peut lire qu'une colonne",
  ],
  correct: 0,
},
{
  question: "673) Quelle pratique peut améliorer la sécurité contre l'injection SQL ?",
  answers: [
    "a) Utiliser des requêtes préparées avec paramètres",
    "b) Concaténer toutes les entrées utilisateur",
    "c) Supprimer les espaces des entrées",
    "d) Utiliser SELECT *",
  ],
  correct: 0,
},
{
  question: "674) Qu'est-ce qu'une injection SQL ?",
  answers: [
    "a) Une attaque exploitant une construction non sécurisée de requêtes SQL",
    "b) Une méthode de sauvegarde",
    "c) Une technique d'indexation",
    "d) Une forme de normalisation",
  ],
  correct: 0,
},
{
  question: "675) Quelle méthode est déconseillée pour construire une requête avec une entrée utilisateur ?",
  answers: [
    "a) Concaténation directe non contrôlée de chaînes",
    "b) Paramètres liés",
    "c) Requêtes préparées",
    "d) Validation adaptée des entrées",
  ],
  correct: 0,
},
{
  question: "676) Quel principe de sécurité consiste à donner uniquement les droits nécessaires à un utilisateur ?",
  answers: [
    "a) Principe du moindre privilège",
    "b) Principe du maximum d'accès",
    "c) Principe de duplication",
    "d) Principe de surcharge",
  ],
  correct: 0,
},
{
  question: "677) Quel privilège permet généralement de lire les données d'une table ?",
  answers: [
    "a) SELECT",
    "b) READ TABLE",
    "c) VIEW DATA",
    "d) FETCH",
  ],
  correct: 0,
},
{
  question: "678) Quel privilège permet généralement d'ajouter des lignes ?",
  answers: [
    "a) INSERT",
    "b) ADD",
    "c) APPEND",
    "d) CREATE ROW",
  ],
  correct: 0,
},
{
  question: "679) Quel privilège permet généralement de modifier les lignes existantes ?",
  answers: [
    "a) MODIFY",
    "b) UPDATE",
    "c) CHANGE",
    "d) EDIT",
  ],
  correct: 1,
},
{
  question: "680) Quel privilège permet généralement de supprimer des lignes ?",
  answers: [
    "a) REMOVE",
    "b) DELETE",
    "c) DROP ROW",
    "d) ERASE",
  ],
  correct: 1,
},
{
  question: "681) Quelle différence existe entre DELETE et DROP TABLE ?",
  answers: [
    "a) DELETE supprime des lignes, DROP TABLE supprime la table elle-même",
    "b) DELETE supprime la table, DROP supprime les lignes",
    "c) Les deux sont identiques",
    "d) Aucun ne modifie les données",
  ],
  correct: 0,
},
{
  question: "682) Quelle commande est généralement utilisée pour supprimer tous les privilèges précédemment accordés par un GRANT spécifique ?",
  answers: [
    "a) REVOKE",
    "b) REMOVE GRANT",
    "c) DELETE PRIVILEGES",
    "d) CLEAR RIGHTS",
  ],
  correct: 0,
},
{
  question: "683) Que permet une vue de sécurité bien conçue ?",
  answers: [
    "a) Exposer uniquement certaines colonnes ou lignes aux utilisateurs autorisés",
    "b) Supprimer toutes les contraintes",
    "c) Remplacer le système d'authentification",
    "d) Accélérer obligatoirement toutes les requêtes",
  ],
  correct: 0,
},
{
  question: "684) Qu'est-ce qu'une vue matérialisée ?",
  answers: [
    "a) Une vue dont le résultat est généralement stocké physiquement et rafraîchi selon une stratégie",
    "b) Une vue qui ne peut jamais être interrogée",
    "c) Une table temporaire obligatoire",
    "d) Un index unique",
  ],
  correct: 0,
},
{
  question: "685) Quel est l'avantage potentiel d'une vue matérialisée ?",
  answers: [
    "a) Accélérer certaines requêtes coûteuses en réutilisant un résultat stocké",
    "b) Supprimer le besoin de transactions",
    "c) Garantir l'absence de doublons",
    "d) Remplacer toutes les clés primaires",
  ],
  correct: 0,
},
{
  question: "686) Quel est un inconvénient d'une vue matérialisée ?",
  answers: [
    "a) Son contenu peut nécessiter un rafraîchissement pour rester à jour",
    "b) Elle ne peut contenir aucune donnée",
    "c) Elle interdit SELECT",
    "d) Elle supprime automatiquement les tables sources",
  ],
  correct: 0,
},
{
  question: "687) Qu'est-ce qu'une procédure stockée ?",
  answers: [
    "a) Un ensemble de logique SQL enregistré et exécutable côté serveur selon les capacités du SGBD",
    "b) Un simple index",
    "c) Une contrainte",
    "d) Une colonne calculée uniquement",
  ],
  correct: 0,
},
{
  question: "688) Quel est l'intérêt potentiel d'une procédure stockée ?",
  answers: [
    "a) Centraliser certaines opérations côté serveur",
    "b) Supprimer toutes les transactions",
    "c) Remplacer obligatoirement toutes les requêtes SELECT",
    "d) Transformer SQL en HTML",
  ],
  correct: 0,
},
{
  question: "689) Qu'est-ce qu'une fonction stockée ?",
  answers: [
    "a) Un objet pouvant effectuer une logique et retourner une valeur selon le SGBD",
    "b) Une table temporaire",
    "c) Un index",
    "d) Une clé étrangère",
  ],
  correct: 0,
},
{
  question: "690) Quelle différence générale existe entre une procédure et une fonction stockée ?",
  answers: [
    "a) Une fonction est conçue pour retourner une valeur, tandis qu'une procédure peut principalement exécuter des opérations",
    "b) Une procédure ne peut jamais modifier les données",
    "c) Une fonction est toujours une table",
    "d) Il n'existe aucune différence dans aucun SGBD",
  ],
  correct: 0,
},
{
  question: "691) Qu'est-ce qu'un trigger (déclencheur) ?",
  answers: [
    "a) Une logique exécutée automatiquement en réponse à certains événements sur des objets de base de données",
    "b) Un index",
    "c) Une clé primaire",
    "d) Une requête SELECT obligatoire",
  ],
  correct: 0,
},
{
  question: "692) Un trigger peut généralement être associé à :",
  answers: [
    "a) Des événements comme INSERT, UPDATE ou DELETE selon le SGBD",
    "b) Uniquement SELECT",
    "c) Uniquement CREATE DATABASE",
    "d) Uniquement DROP DATABASE",
  ],
  correct: 0,
},
{
  question: "693) Quel risque peut être associé à une utilisation excessive des triggers ?",
  answers: [
    "a) Rendre la logique métier plus difficile à comprendre et à diagnostiquer",
    "b) Empêcher définitivement toute insertion",
    "c) Supprimer automatiquement toutes les vues",
    "d) Transformer les tables en fichiers texte",
  ],
  correct: 0,
},
{
  question: "694) Qu'est-ce qu'une séquence dans un SGBD qui la prend en charge ?",
  answers: [
    "a) Un objet générant des valeurs numériques selon une configuration",
    "b) Une vue filtrée",
    "c) Un type de JOIN",
    "d) Une contrainte CHECK",
  ],
  correct: 0,
},
{
  question: "695) Quelle utilisation est fréquente d'une séquence ?",
  answers: [
    "a) Générer des identifiants numériques",
    "b) Stocker des images",
    "c) Filtrer des lignes",
    "d) Trier une table",
  ],
  correct: 0,
},
{
  question: "696) Qu'est-ce qu'une colonne auto-incrémentée ?",
  answers: [
    "a) Une colonne dont la valeur peut être générée automatiquement lors des insertions selon le SGBD",
    "b) Une colonne qui contient toujours du texte",
    "c) Une colonne qui s'incrémente à chaque SELECT",
    "d) Une colonne automatiquement indexée dans tous les SGBD",
  ],
  correct: 0,
},
{
  question: "697) Une clé primaire auto-générée garantit-elle toujours l'absence de trous dans les numéros ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement avec les transactions",
    "d) Seulement avec DELETE",
  ],
  correct: 1,
},
{
  question: "698) Pourquoi peut-il exister des trous dans une séquence d'identifiants ?",
  answers: [
    "a) Des valeurs peuvent être consommées par des transactions annulées ou des mécanismes de cache",
    "b) SQL interdit les nombres consécutifs",
    "c) SELECT crée toujours des trous",
    "d) ORDER BY supprime des valeurs",
  ],
  correct: 0,
},
{
  question: "699) Quelle commande permet généralement de consulter la structure d'une table selon le SGBD ?",
  answers: [
    "a) DESCRIBE / DESC dans certains SGBD",
    "b) SHOW STRUCTURE dans tous les SGBD",
    "c) TABLE INFO dans tous les SGBD",
    "d) STRUCTURE TABLE obligatoirement",
  ],
  correct: 0,
},
{
  question: "700) Pourquoi faut-il connaître le SGBD utilisé avant d'écrire certaines requêtes SQL avancées ?",
  answers: [
    "a) Certaines syntaxes, fonctions et fonctionnalités diffèrent entre SGBD",
    "b) SQL n'existe pas dans les SGBD",
    "c) Toutes les bases utilisent exactement la même syntaxe",
    "d) Les SGBD ne supportent jamais les mêmes types",
  ],
  correct: 0,
},
{
  question: "701) Quelle clause permet de donner un nom temporaire à une colonne calculée dans le résultat ?",
  answers: [
    "a) AS",
    "b) NAME",
    "c) LABEL",
    "d) RENAME COLUMN",
  ],
  correct: 0,
},
{
  question: "702) Quelle requête sélectionne les employés dont le salaire est supérieur à 3000 et qui travaillent à Rabat ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire > 3000 AND ville = 'Rabat';",
    "b) SELECT * FROM employe WHERE salaire > 3000 OR ville = 'Rabat';",
    "c) SELECT * FROM employe HAVING salaire > 3000 AND ville = 'Rabat';",
    "d) SELECT * FROM employe CHECK salaire > 3000 AND ville = 'Rabat';",
  ],
  correct: 0,
},
{
  question: "703) Quelle requête sélectionne les employés ayant un salaire inférieur à 2000 ou supérieur à 6000 ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire < 2000 AND salaire > 6000;",
    "b) SELECT * FROM employe WHERE salaire < 2000 OR salaire > 6000;",
    "c) SELECT * FROM employe WHERE salaire BETWEEN 2000 AND 6000;",
    "d) SELECT * FROM employe HAVING salaire < 2000 OR salaire > 6000;",
  ],
  correct: 1,
},
{
  question: "704) Quelle condition est équivalente à salaire BETWEEN 3000 AND 5000 ?",
  answers: [
    "a) salaire >= 3000 AND salaire <= 5000",
    "b) salaire > 3000 AND salaire < 5000",
    "c) salaire < 3000 OR salaire > 5000",
    "d) salaire = 3000 OR 5000",
  ],
  correct: 0,
},
{
  question: "705) Quelle condition est équivalente à ville IN ('Rabat', 'Fès') ?",
  answers: [
    "a) ville = 'Rabat' AND ville = 'Fès'",
    "b) ville = 'Rabat' OR ville = 'Fès'",
    "c) ville <> 'Rabat' OR ville <> 'Fès'",
    "d) ville BETWEEN 'Rabat' AND 'Fès'",
  ],
  correct: 1,
},
{
  question: "706) Quelle requête sélectionne les employés dont le nom contient exactement 5 caractères ?",
  answers: [
    "a) WHERE nom LIKE '_____'",
    "b) WHERE nom LIKE '%'",
    "c) WHERE nom LIKE '____'",
    "d) WHERE nom = '_____'",
  ],
  correct: 0,
},
{
  question: "707) Dans LIKE '_____', combien de caractères sont représentés par les underscores ?",
  answers: [
    "a) 1",
    "b) 4",
    "c) 5",
    "d) Plusieurs caractères quelconques",
  ],
  correct: 2,
},
{
  question: "708) Quelle requête sélectionne les noms contenant la lettre « a » à n'importe quelle position ?",
  answers: [
    "a) WHERE nom LIKE 'a%'",
    "b) WHERE nom LIKE '%a%'",
    "c) WHERE nom LIKE '%a'",
    "d) WHERE nom = '%a%'",
  ],
  correct: 1,
},
{
  question: "709) Quelle clause permet de supprimer les doublons du résultat ?",
  answers: [
    "a) UNIQUE",
    "b) DISTINCT",
    "c) REMOVE DUPLICATES",
    "d) ONLY",
  ],
  correct: 1,
},
{
  question: "710) Dans SELECT DISTINCT ville, pays FROM client, l'unicité porte sur :",
  answers: [
    "a) ville uniquement",
    "b) pays uniquement",
    "c) La combinaison ville et pays",
    "d) Chaque colonne indépendamment",
  ],
  correct: 2,
},
{
  question: "711) Quelle clause permet de limiter les lignes avant un regroupement ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) ORDER BY",
    "d) DISTINCT",
  ],
  correct: 0,
},
{
  question: "712) Quelle clause est utilisée pour trier le résultat final ?",
  answers: [
    "a) SORT BY",
    "b) ORDER BY",
    "c) GROUP BY",
    "d) ARRANGE",
  ],
  correct: 1,
},
{
  question: "713) Quelle requête trie les employés par salaire décroissant puis par nom croissant ?",
  answers: [
    "a) ORDER BY salaire DESC, nom ASC",
    "b) ORDER BY salaire, nom DESC",
    "c) SORT salaire DESC AND nom ASC",
    "d) GROUP BY salaire DESC, nom ASC",
  ],
  correct: 0,
},
{
  question: "714) Si ORDER BY ne précise ni ASC ni DESC, quel ordre est généralement utilisé ?",
  answers: [
    "a) DESC",
    "b) ASC",
    "c) Aléatoire obligatoire",
    "d) L'ordre physique garanti de la table",
  ],
  correct: 1,
},
{
  question: "715) Quelle affirmation sur l'ordre des lignes sans ORDER BY est correcte ?",
  answers: [
    "a) L'ordre est garanti par SQL",
    "b) Les lignes sont toujours triées par clé primaire",
    "c) Aucun ordre particulier n'est garanti",
    "d) Les lignes sont toujours triées alphabétiquement",
  ],
  correct: 2,
},
{
  question: "716) Quelle fonction agrégée peut être utilisée pour calculer le total d'une colonne numérique ?",
  answers: [
    "a) SUM()",
    "b) TOTALROWS()",
    "c) ADDALL()",
    "d) PLUS()",
  ],
  correct: 0,
},
{
  question: "717) Quelle fonction agrégée calcule une moyenne ?",
  answers: [
    "a) AVG()",
    "b) MEAN()",
    "c) MID()",
    "d) AVERAGEVALUE()",
  ],
  correct: 0,
},
{
  question: "718) Quelle fonction agrégée retourne le nombre de lignes, y compris celles contenant des NULL dans certaines colonnes ?",
  answers: [
    "a) COUNT(*)",
    "b) COUNT(NULL)",
    "c) SUM(*)",
    "d) ROWCOUNT()",
  ],
  correct: 0,
},
{
  question: "719) Que fait COUNT(DISTINCT ville) ?",
  answers: [
    "a) Compte toutes les lignes",
    "b) Compte les valeurs distinctes de ville, en ignorant les NULL",
    "c) Compte uniquement les doublons",
    "d) Compte les colonnes",
  ],
  correct: 1,
},
{
  question: "720) Que fait AVG(salaire) lorsqu'une partie des salaires est NULL ?",
  answers: [
    "a) Les NULL sont généralement ignorés",
    "b) Les NULL sont considérés comme 0 obligatoirement",
    "c) Toute la moyenne devient NULL",
    "d) Une erreur est toujours générée",
  ],
  correct: 0,
},
{
  question: "721) Que fait SUM(colonne) si toutes les valeurs pertinentes sont NULL ?",
  answers: [
    "a) Retourne généralement NULL",
    "b) Retourne toujours 0",
    "c) Retourne 1",
    "d) Génère toujours une erreur",
  ],
  correct: 0,
},
{
  question: "722) Quelle fonction permet de remplacer NULL par une valeur de secours ?",
  answers: [
    "a) COALESCE()",
    "b) REPLACE_NULL()",
    "c) NULLFIX()",
    "d) NVALUE()",
  ],
  correct: 0,
},
{
  question: "723) Que retourne COALESCE(NULL, 10, 20) ?",
  answers: [
    "a) NULL",
    "b) 10",
    "c) 20",
    "d) 0",
  ],
  correct: 1,
},
{
  question: "724) Que retourne COALESCE(5, 10, 20) ?",
  answers: [
    "a) 5",
    "b) 10",
    "c) 20",
    "d) NULL",
  ],
  correct: 0,
},
{
  question: "725) Quelle fonction est souvent utilisée dans Oracle pour remplacer NULL par une autre valeur ?",
  answers: [
    "a) NVL()",
    "b) NULLIF()",
    "c) IFNULLONLY()",
    "d) REPLACE()",
  ],
  correct: 0,
},
{
  question: "726) Quelle fonction renvoie NULL si deux expressions sont égales ?",
  answers: [
    "a) NULLIF()",
    "b) EQUALNULL()",
    "c) COALESCE()",
    "d) SAMEORNULL()",
  ],
  correct: 0,
},
{
  question: "727) Que retourne NULLIF(10, 10) ?",
  answers: [
    "a) 10",
    "b) NULL",
    "c) 0",
    "d) FALSE",
  ],
  correct: 1,
},
{
  question: "728) Que retourne NULLIF(10, 5) ?",
  answers: [
    "a) NULL",
    "b) 5",
    "c) 10",
    "d) 0",
  ],
  correct: 2,
},
{
  question: "729) Quelle requête permet de rechercher les employés dont la date d'embauche est postérieure au 1er janvier 2025 ?",
  answers: [
    "a) WHERE date_embauche > '2025-01-01'",
    "b) WHERE date_embauche AFTER '2025-01-01'",
    "c) WHERE date_embauche IN '2025-01-01'",
    "d) WHERE date_embauche NEWER '2025-01-01'",
  ],
  correct: 0,
},
{
  question: "730) Quelle condition permet de sélectionner une date comprise entre deux dates incluses ?",
  answers: [
    "a) date BETWEEN date1 AND date2",
    "b) date RANGE date1 TO date2",
    "c) date FROM date1 TO date2",
    "d) date IN date1 AND date2",
  ],
  correct: 0,
},
{
  question: "731) Quelle opération permet de joindre une table à elle-même ?",
  answers: [
    "a) SELF JOIN",
    "b) AUTO JOIN uniquement",
    "c) INTERNAL JOIN",
    "d) SAME JOIN",
  ],
  correct: 0,
},
{
  question: "732) Dans une table employe(id, nom, manager_id), quel JOIN permet d'afficher l'employé et son manager ?",
  answers: [
    "a) Une auto-jointure avec deux alias de la table employe",
    "b) Un UNION obligatoire",
    "c) Un CROSS JOIN obligatoire",
    "d) Un INTERSECT",
  ],
  correct: 0,
},
{
  question: "733) Quelle syntaxe représente correctement une auto-jointure ?",
  answers: [
    "a) SELECT e.nom, m.nom FROM employe e JOIN employe m ON e.manager_id = m.id;",
    "b) SELECT e.nom, m.nom FROM employe JOIN manager ON e.id = m.id;",
    "c) SELECT * FROM employe SELF manager;",
    "d) SELECT * FROM employe UNION employe;",
  ],
  correct: 0,
},
{
  question: "734) Qu'est-ce qu'une jointure naturelle (NATURAL JOIN) ?",
  answers: [
    "a) Une jointure utilisant automatiquement les colonnes de même nom selon les règles du SGBD",
    "b) Une jointure sans condition qui retourne toujours un produit cartésien",
    "c) Une jointure uniquement entre clés primaires",
    "d) Une jointure réservée aux dates",
  ],
  correct: 0,
},
{
  question: "735) Pourquoi NATURAL JOIN peut-il être risqué dans une application ?",
  answers: [
    "a) Une modification des colonnes portant les mêmes noms peut modifier les correspondances utilisées",
    "b) Il interdit toutes les jointures",
    "c) Il supprime automatiquement les doublons de la table",
    "d) Il transforme les clés étrangères en NULL",
  ],
  correct: 0,
},
{
  question: "736) Quelle jointure permet de joindre des tables même lorsque les colonnes comparées portent des noms différents ?",
  answers: [
    "a) JOIN ... ON",
    "b) NATURAL JOIN uniquement",
    "c) UNION",
    "d) INTERSECT",
  ],
  correct: 0,
},
{
  question: "737) Quelle syntaxe est adaptée lorsque les colonnes de jointure portent le même nom ?",
  answers: [
    "a) JOIN ... USING (colonne)",
    "b) JOIN ... SAME (colonne)",
    "c) JOIN ... MATCH (colonne)",
    "d) JOIN ... COMMON (colonne)",
  ],
  correct: 0,
},
{
  question: "738) Quel est l'effet d'un LEFT JOIN suivi de WHERE table_droite.colonne = 'X' ?",
  answers: [
    "a) Les lignes sans correspondance peuvent être éliminées, ce qui peut se rapprocher d'un INNER JOIN",
    "b) Toutes les lignes de gauche sont toujours conservées",
    "c) Le JOIN devient automatiquement un CROSS JOIN",
    "d) La table droite est supprimée",
  ],
  correct: 0,
},
{
  question: "739) Pour conserver les lignes sans correspondance dans un LEFT JOIN tout en filtrant les lignes correspondantes de droite, où peut-on placer la condition de filtrage ?",
  answers: [
    "a) Dans la clause ON",
    "b) Obligatoirement dans GROUP BY",
    "c) Uniquement dans SELECT",
    "d) Dans CREATE TABLE",
  ],
  correct: 0,
},
{
  question: "740) Quelle requête conserve tous les clients et ne joint que leurs commandes dont le montant dépasse 1000 ?",
  answers: [
    "a) SELECT * FROM client c LEFT JOIN commande o ON c.id = o.client_id AND o.montant > 1000;",
    "b) SELECT * FROM client c INNER JOIN commande o ON c.id = o.client_id WHERE o.montant > 1000;",
    "c) SELECT * FROM client c LEFT JOIN commande o WHERE o.montant > 1000;",
    "d) SELECT * FROM client c WHERE o.montant > 1000;",
  ],
  correct: 0,
},
{
  question: "741) Quel type de sous-requête retourne une seule valeur scalaire ?",
  answers: [
    "a) Sous-requête scalaire",
    "b) Sous-requête cartésienne",
    "c) Sous-requête matricielle",
    "d) Sous-requête relationnelle uniquement",
  ],
  correct: 0,
},
{
  question: "742) Une sous-requête utilisée avec = doit généralement retourner :",
  answers: [
    "a) Une seule valeur",
    "b) Plusieurs colonnes obligatoirement",
    "c) Une table entière",
    "d) Uniquement des NULL",
  ],
  correct: 0,
},
{
  question: "743) Que se passe-t-il si une sous-requête scalaire utilisée avec = retourne plusieurs lignes ?",
  answers: [
    "a) Le SGBD génère généralement une erreur",
    "b) La première ligne est toujours choisie",
    "c) La dernière ligne est toujours choisie",
    "d) Toutes les lignes sont additionnées",
  ],
  correct: 0,
},
{
  question: "744) Quelle opération peut remplacer une sous-requête scalaire dans certains cas ?",
  answers: [
    "a) Une jointure appropriée",
    "b) Un DROP TABLE",
    "c) Un TRUNCATE",
    "d) Un GRANT",
  ],
  correct: 0,
},
{
  question: "745) Quelle clause peut contenir une sous-requête en SQL ?",
  answers: [
    "a) WHERE",
    "b) FROM",
    "c) SELECT",
    "d) Toutes les réponses",
  ],
  correct: 3,
},
{
  question: "746) Une sous-requête placée dans FROM est souvent appelée :",
  answers: [
    "a) Table dérivée",
    "b) Clé dérivée",
    "c) Vue primaire",
    "d) Index dérivé",
  ],
  correct: 0,
},
{
  question: "747) Dans de nombreux SGBD, une sous-requête placée dans FROM doit-elle avoir un alias ?",
  answers: [
    "a) Oui, généralement",
    "b) Jamais",
    "c) Seulement si elle contient WHERE",
    "d) Seulement si elle contient NULL",
  ],
  correct: 0,
},
{
  question: "748) Quelle requête peut calculer la moyenne des totaux d'une sous-requête regroupant les commandes par client ?",
  answers: [
    "a) SELECT AVG(total) FROM (SELECT client_id, SUM(montant) AS total FROM commande GROUP BY client_id) x;",
    "b) SELECT AVG(SUM(montant)) FROM commande;",
    "c) SELECT SUM(AVG(montant)) FROM commande;",
    "d) SELECT TOTAL AVG FROM commande;",
  ],
  correct: 0,
},
{
  question: "749) Quel est l'avantage principal d'une sous-requête dans FROM dans ce type de problème ?",
  answers: [
    "a) Elle permet de traiter le résultat intermédiaire comme une table",
    "b) Elle supprime les données originales",
    "c) Elle crée toujours une table permanente",
    "d) Elle désactive les agrégations",
  ],
  correct: 0,
},
{
  question: "750) Quelle clause est généralement exécutée logiquement en dernier dans une requête SELECT parmi celles-ci ?",
  answers: [
    "a) WHERE",
    "b) GROUP BY",
    "c) HAVING",
    "d) ORDER BY",
  ],
  correct: 3,
},
{
  question: "751) Quelle clause permet de filtrer les lignes avant l'agrégation ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) ORDER BY",
    "d) GROUP BY",
  ],
  correct: 0,
},
{
  question: "752) Quelle clause filtre le résultat des fonctions d'agrégation après GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) HAVING",
    "c) FILTER BY",
    "d) CHECK",
  ],
  correct: 1,
},
{
  question: "753) Pourquoi ne peut-on généralement pas utiliser directement COUNT(*) dans WHERE ?",
  answers: [
    "a) WHERE filtre les lignes avant l'agrégation",
    "b) COUNT(*) n'est pas une fonction SQL",
    "c) WHERE ne peut contenir aucune expression",
    "d) COUNT(*) fonctionne uniquement avec ORDER BY",
  ],
  correct: 0,
},
{
  question: "754) Quelle requête est correcte pour obtenir les départements comptant au moins 10 employés ?",
  answers: [
    "a) SELECT departement FROM employe WHERE COUNT(*) >= 10 GROUP BY departement;",
    "b) SELECT departement FROM employe GROUP BY departement HAVING COUNT(*) >= 10;",
    "c) SELECT departement FROM employe HAVING COUNT(*) >= 10;",
    "d) SELECT departement, COUNT(*) FROM employe WHERE COUNT(*) >= 10;",
  ],
  correct: 1,
},
{
  question: "755) Quelle clause permet de regrouper les lignes selon une ou plusieurs colonnes ?",
  answers: [
    "a) GROUP BY",
    "b) ORDER BY",
    "c) COLLECT BY",
    "d) PARTITION BY uniquement",
  ],
  correct: 0,
},
{
  question: "756) Quelle requête retourne le nombre d'employés par ville ?",
  answers: [
    "a) SELECT ville, COUNT(*) FROM employe GROUP BY ville;",
    "b) SELECT ville FROM employe COUNT(*);",
    "c) SELECT COUNT(ville) FROM employe ORDER BY ville;",
    "d) SELECT ville, SUM(*) FROM employe;",
  ],
  correct: 0,
},
{
  question: "757) Que se passe-t-il si une requête contient SELECT ville, COUNT(*) FROM employe sans GROUP BY ville, dans un SGBD respectant les règles SQL strictes ?",
  answers: [
    "a) Elle retourne une ligne par ville",
    "b) Elle est généralement invalide car ville n'est ni agrégée ni regroupée",
    "c) Elle retourne toujours la première ville",
    "d) Elle supprime les villes",
  ],
  correct: 1,
},
{
  question: "758) Quelle fonction agrégée permet de calculer la somme des commandes ?",
  answers: [
    "a) SUM(montant)",
    "b) ADD(montant)",
    "c) TOTALIZE(montant)",
    "d) PLUS(montant)",
  ],
  correct: 0,
},
{
  question: "759) Quelle requête retourne le montant total des commandes ?",
  answers: [
    "a) SELECT SUM(montant) FROM commande;",
    "b) SELECT TOTAL(montant) FROM commande;",
    "c) SELECT ADD ALL montant FROM commande;",
    "d) SELECT COUNT(montant) FROM commande;",
  ],
  correct: 0,
},
{
  question: "760) Quelle fonction permet de connaître le nombre de valeurs distinctes d'une colonne ?",
  answers: [
    "a) COUNT(DISTINCT colonne)",
    "b) DISTINCT(COUNT(*))",
    "c) UNIQUECOUNT(*)",
    "d) COUNT(UNIQUE ROW)",
  ],
  correct: 0,
},
{
  question: "761) Quelle requête retourne le salaire maximum par département ?",
  answers: [
    "a) SELECT departement, MAX(salaire) FROM employe GROUP BY departement;",
    "b) SELECT departement, MAX(salaire) FROM employe;",
    "c) SELECT MAX(departement, salaire) FROM employe;",
    "d) SELECT departement FROM employe HAVING MAX(salaire);",
  ],
  correct: 0,
},
{
  question: "762) Quelle requête retourne les départements dont le salaire maximum dépasse 10000 ?",
  answers: [
    "a) SELECT departement FROM employe GROUP BY departement HAVING MAX(salaire) > 10000;",
    "b) SELECT departement FROM employe WHERE MAX(salaire) > 10000 GROUP BY departement;",
    "c) SELECT departement FROM employe WHERE salaire > MAX(10000);",
    "d) SELECT departement FROM employe HAVING salaire > 10000;",
  ],
  correct: 0,
},
{
  question: "763) Quelle est la fonction SQL standard permettant de retourner la première valeur non NULL d'une liste ?",
  answers: [
    "a) COALESCE",
    "b) FIRST_VALUE_ONLY",
    "c) FIRST_NOT_NULL",
    "d) NVALUE",
  ],
  correct: 0,
},
{
  question: "764) Quelle expression permet de remplacer NULL par 0 ?",
  answers: [
    "a) COALESCE(colonne, 0)",
    "b) NULL = 0",
    "c) REPLACE NULL WITH 0",
    "d) colonne IS 0",
  ],
  correct: 0,
},
{
  question: "765) Quelle expression permet de tester si une valeur n'est pas NULL ?",
  answers: [
    "a) colonne <> NULL",
    "b) colonne IS NOT NULL",
    "c) colonne != NULL",
    "d) colonne NOT NULL = TRUE",
  ],
  correct: 1,
},
{
  question: "766) Quel résultat logique produit une comparaison avec NULL comme salaire > 5000 lorsque salaire est NULL ?",
  answers: [
    "a) TRUE",
    "b) FALSE",
    "c) UNKNOWN",
    "d) 5000",
  ],
  correct: 2,
},
{
  question: "767) Dans une clause WHERE, une condition évaluée à UNKNOWN est généralement :",
  answers: [
    "a) Conservée comme TRUE",
    "b) Écartée car seules les lignes évaluées à TRUE passent le filtre",
    "c) Convertie en 0 dans tous les SGBD",
    "d) Transformée en NULL dans la table",
  ],
  correct: 1,
},
{
  question: "768) Quelle expression est correcte pour vérifier qu'un nom n'est pas égal à 'Ali' ?",
  answers: [
    "a) nom <> 'Ali'",
    "b) nom IS NOT 'Ali'",
    "c) nom NOT = 'Ali'",
    "d) nom DIFFERENT 'Ali'",
  ],
  correct: 0,
},
{
  question: "769) Quelle commande permet de créer une contrainte de clé primaire lors de la création d'une table ?",
  answers: [
    "a) PRIMARY KEY",
    "b) MAIN KEY",
    "c) UNIQUE PRIMARY",
    "d) ID KEY",
  ],
  correct: 0,
},
{
  question: "770) Quelle syntaxe définit une clé primaire composée de deux colonnes ?",
  answers: [
    "a) PRIMARY KEY (col1, col2)",
    "b) PRIMARY KEY col1 AND col2",
    "c) COMPOSITE KEY (col1, col2)",
    "d) PRIMARY (col1 + col2)",
  ],
  correct: 0,
},
{
  question: "771) Une contrainte FOREIGN KEY sert principalement à :",
  answers: [
    "a) Maintenir l'intégrité référentielle",
    "b) Trier les données",
    "c) Calculer une moyenne",
    "d) Créer automatiquement une vue",
  ],
  correct: 0,
},
{
  question: "772) Quelle définition est correcte pour une clé étrangère ?",
  answers: [
    "a) FOREIGN KEY (client_id) REFERENCES client(id)",
    "b) FOREIGN client_id REFERENCES KEY client(id)",
    "c) REFERENCES FOREIGN client_id TO client(id)",
    "d) KEY FOREIGN client_id = client(id)",
  ],
  correct: 0,
},
{
  question: "773) Que garantit principalement une contrainte NOT NULL ?",
  answers: [
    "a) La colonne ne peut pas contenir de NULL",
    "b) La colonne contient uniquement des zéros",
    "c) Les valeurs sont toutes différentes",
    "d) La colonne devient une clé primaire",
  ],
  correct: 0,
},
{
  question: "774) Quelle contrainte impose une valeur par défaut lorsqu'aucune valeur n'est fournie ?",
  answers: [
    "a) DEFAULT",
    "b) FALLBACK",
    "c) INITIAL",
    "d) AUTO VALUE",
  ],
  correct: 0,
},
{
  question: "775) Quelle contrainte impose l'unicité des valeurs ?",
  answers: [
    "a) UNIQUE",
    "b) DISTINCT",
    "c) DIFFERENT",
    "d) SINGLE",
  ],
  correct: 0,
},
{
  question: "776) Quelle différence existe entre DISTINCT et UNIQUE ?",
  answers: [
    "a) DISTINCT élimine les doublons dans un résultat, UNIQUE est une contrainte d'intégrité",
    "b) DISTINCT crée un index, UNIQUE trie les données",
    "c) Ils ont exactement le même rôle",
    "d) UNIQUE est uniquement utilisé dans SELECT",
  ],
  correct: 0,
},
{
  question: "777) Quelle commande permet de supprimer une contrainte dans de nombreux SGBD ?",
  answers: [
    "a) ALTER TABLE ... DROP CONSTRAINT",
    "b) DELETE CONSTRAINT",
    "c) REMOVE CONSTRAINT TABLE",
    "d) DROP TABLE CONSTRAINT uniquement",
  ],
  correct: 0,
},
{
  question: "778) Une contrainte CHECK peut-elle utiliser une condition logique ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement dans SELECT",
    "d) Seulement avec une clé primaire",
  ],
  correct: 0,
},
{
  question: "779) Quelle définition est correcte pour imposer un salaire positif ?",
  answers: [
    "a) salaire DECIMAL CHECK (salaire >= 0)",
    "b) salaire DECIMAL WHERE salaire >= 0",
    "c) salaire DECIMAL IF salaire >= 0",
    "d) salaire DECIMAL VALIDATE salaire",
  ],
  correct: 0,
},
{
  question: "780) Quelle opération permet de modifier la définition d'une colonne ?",
  answers: [
    "a) ALTER TABLE",
    "b) UPDATE COLUMN DATA",
    "c) MODIFY ROW",
    "d) CHANGE DATABASE",
  ],
  correct: 0,
},
{
  question: "781) Quelle instruction ajoute une nouvelle colonne nommée email ?",
  answers: [
    "a) ALTER TABLE client ADD COLUMN email VARCHAR(255);",
    "b) UPDATE TABLE client ADD email;",
    "c) INSERT COLUMN email INTO client;",
    "d) CREATE COLUMN email IN client;",
  ],
  correct: 0,
},
{
  question: "782) Quelle instruction supprime une colonne email ?",
  answers: [
    "a) ALTER TABLE client DROP COLUMN email;",
    "b) DELETE COLUMN email FROM client;",
    "c) REMOVE email FROM client;",
    "d) DROP email COLUMN client;",
  ],
  correct: 0,
},
{
  question: "783) Quelle opération permet de renommer une colonne selon les capacités du SGBD ?",
  answers: [
    "a) ALTER TABLE",
    "b) UPDATE DATA",
    "c) RENAME DATABASE",
    "d) CHANGE VALUE",
  ],
  correct: 0,
},
{
  question: "784) Quelle commande permet de créer une table à partir du résultat d'un SELECT dans les SGBD qui la supportent ?",
  answers: [
    "a) CREATE TABLE ... AS SELECT",
    "b) CREATE SELECT TABLE",
    "c) TABLE FROM SELECT",
    "d) SELECT INTO TABLE CREATE",
  ],
  correct: 0,
},
{
  question: "785) Quelle instruction peut créer une table contenant le résultat d'une requête ?",
  answers: [
    "a) CREATE TABLE nouvelle AS SELECT ...",
    "b) CREATE RESULT TABLE AS ... uniquement",
    "c) MAKE TABLE FROM QUERY",
    "d) INSERT TABLE AS SELECT",
  ],
  correct: 0,
},
{
  question: "786) Quelle opération ajoute les résultats d'un SELECT dans une table existante ?",
  answers: [
    "a) INSERT INTO ... SELECT",
    "b) ADD SELECT INTO",
    "c) UPDATE WITH SELECT ONLY",
    "d) APPEND QUERY",
  ],
  correct: 0,
},
{
  question: "787) Quelle syntaxe permet d'insérer dans une table le résultat d'une autre requête ?",
  answers: [
    "a) INSERT INTO archive SELECT * FROM client;",
    "b) INSERT SELECT INTO archive FROM client;",
    "c) ADD INTO archive QUERY client;",
    "d) COPY SELECT archive FROM client;",
  ],
  correct: 0,
},
{
  question: "788) Quelle instruction permet de copier certaines colonnes dans une autre table ?",
  answers: [
    "a) INSERT INTO destination (a, b) SELECT x, y FROM source;",
    "b) COPY COLUMN source TO destination;",
    "c) MOVE SELECT source TO destination;",
    "d) ADD COLUMNS FROM source;",
  ],
  correct: 0,
},
{
  question: "789) Quelle opération est généralement plus appropriée pour supprimer certaines lignes selon une condition ?",
  answers: [
    "a) DELETE ... WHERE",
    "b) DROP TABLE",
    "c) TRUNCATE TABLE",
    "d) ALTER TABLE",
  ],
  correct: 0,
},
{
  question: "790) Quelle commande supprime toutes les lignes d'une table sans utiliser de condition ?",
  answers: [
    "a) DELETE FROM table;",
    "b) DROP COLUMN table;",
    "c) REMOVE DATABASE;",
    "d) ALTER TABLE;",
  ],
  correct: 0,
},
{
  question: "791) Quelle instruction supprime la table elle-même ?",
  answers: [
    "a) DELETE TABLE",
    "b) DROP TABLE",
    "c) TRUNCATE TABLE",
    "d) CLEAR TABLE",
  ],
  correct: 1,
},
{
  question: "792) Quelle commande conserve normalement la structure de la table tout en supprimant toutes ses lignes ?",
  answers: [
    "a) DROP",
    "b) TRUNCATE",
    "c) REMOVE",
    "d) DESTROY",
  ],
  correct: 1,
},
{
  question: "793) Quelle affirmation concernant TRUNCATE et les transactions est correcte ?",
  answers: [
    "a) Son comportement transactionnel peut dépendre du SGBD",
    "b) TRUNCATE est toujours identique à DELETE dans tous les SGBD",
    "c) TRUNCATE ne peut jamais supprimer de lignes",
    "d) TRUNCATE supprime toujours la structure",
  ],
  correct: 0,
},
{
  question: "794) Quelle instruction permet de récupérer certaines lignes après une suppression non validée, lorsque le SGBD et le contexte transactionnel le permettent ?",
  answers: [
    "a) ROLLBACK",
    "b) RESTORE ROW",
    "c) UNDELETE",
    "d) REPAIR",
  ],
  correct: 0,
},
{
  question: "795) Quelle commande permet de valider une transaction ?",
  answers: [
    "a) COMMIT",
    "b) APPLY",
    "c) SAVE",
    "d) CONFIRM",
  ],
  correct: 0,
},
{
  question: "796) Quel est le rôle d'un SAVEPOINT ?",
  answers: [
    "a) Définir un point auquel on peut revenir dans une transaction",
    "b) Sauvegarder toute la base sur disque",
    "c) Créer une copie permanente de la table",
    "d) Créer un index",
  ],
  correct: 0,
},
{
  question: "797) Quel ordre est logique pour annuler jusqu'à un point de sauvegarde nommé sp1 ?",
  answers: [
    "a) ROLLBACK TO SAVEPOINT sp1",
    "b) ROLLBACK sp1 TABLE",
    "c) UNDO TO sp1 ONLY",
    "d) CANCEL SAVEPOINT sp1",
  ],
  correct: 0,
},
{
  question: "798) Après un COMMIT, les modifications de la transaction sont généralement :",
  answers: [
    "a) Validées",
    "b) Automatiquement annulées",
    "c) Converties en NULL",
    "d) Transformées en sauvegarde temporaire",
  ],
  correct: 0,
},
{
  question: "799) Quel terme désigne le mode dans lequel chaque instruction peut être validée automatiquement selon le SGBD ?",
  answers: [
    "a) Autocommit",
    "b) Autoquery",
    "c) Autosave SQL",
    "d) AutoDDL",
  ],
  correct: 0,
},
{
  question: "800) Pourquoi faut-il être prudent avec UPDATE ou DELETE sans WHERE ?",
  answers: [
    "a) Parce que toutes les lignes peuvent être concernées",
    "b) Parce que la table devient automatiquement une vue",
    "c) Parce que SQL interdit WHERE",
    "d) Parce que les clés primaires sont supprimées",
  ],
  correct: 0,
},
{
  question: "801) Quelle clause permet de limiter le nombre de lignes retournées dans SQL standard ?",
  answers: [
    "a) FETCH FIRST",
    "b) LIMIT ROWS ONLY",
    "c) MAX ROWS",
    "d) TOP ROWS",
  ],
  correct: 0,
},
{
  question: "802) Quelle syntaxe est conforme au SQL standard moderne pour retourner les 10 premières lignes ?",
  answers: [
    "a) FETCH FIRST 10 ROWS ONLY",
    "b) LIMIT 10 ROWS",
    "c) TOP 10 ROWS",
    "d) FIRST 10 ONLY",
  ],
  correct: 0,
},
{
  question: "803) Quelle syntaxe est couramment utilisée par MySQL et PostgreSQL pour limiter le nombre de résultats ?",
  answers: [
    "a) LIMIT",
    "b) FETCH ONLY",
    "c) TOP",
    "d) FIRST",
  ],
  correct: 0,
},
{
  question: "804) Quelle syntaxe est couramment utilisée par SQL Server pour limiter les résultats ?",
  answers: [
    "a) LIMIT",
    "b) TOP",
    "c) FIRST",
    "d) FETCH ONLY",
  ],
  correct: 1,
},
{
  question: "805) Pourquoi faut-il généralement utiliser ORDER BY avec une limitation des résultats si l'on veut obtenir les « premiers » enregistrements selon un critère précis ?",
  answers: [
    "a) Sans ORDER BY, l'ordre des lignes n'est pas garanti",
    "b) ORDER BY crée obligatoirement une clé primaire",
    "c) LIMIT ne fonctionne qu'avec ORDER BY",
    "d) SELECT ne retourne aucune ligne sans ORDER BY",
  ],
  correct: 0,
},
{
  question: "806) Quelle requête retourne les 5 employés ayant les salaires les plus élevés dans PostgreSQL/MySQL ?",
  answers: [
    "a) SELECT * FROM employe ORDER BY salaire DESC LIMIT 5;",
    "b) SELECT * FROM employe LIMIT 5 ORDER salaire DESC;",
    "c) SELECT TOP 5 * FROM employe ORDER BY salaire ASC;",
    "d) SELECT * FROM employe GROUP BY salaire DESC LIMIT 5;",
  ],
  correct: 0,
},
{
  question: "807) Quelle clause permet de trier les résultats selon plusieurs critères ?",
  answers: [
    "a) ORDER BY",
    "b) MULTI SORT",
    "c) SORT GROUP",
    "d) ORDER GROUP",
  ],
  correct: 0,
},
{
  question: "808) Dans ORDER BY nom ASC, salaire DESC, quel critère est prioritaire ?",
  answers: [
    "a) salaire",
    "b) nom",
    "c) Les deux simultanément",
    "d) Aucun",
  ],
  correct: 1,
},
{
  question: "809) Si deux lignes ont le même nom dans ORDER BY nom ASC, que peut utiliser le SGBD ensuite pour les départager si aucun autre critère n'est spécifié ?",
  answers: [
    "a) Aucun ordre supplémentaire n'est garanti",
    "b) Toujours l'identifiant croissant",
    "c) Toujours la date",
    "d) Toujours l'ordre alphabétique d'une autre colonne",
  ],
  correct: 0,
},
{
  question: "810) Quelle clause permet de classer les résultats selon une expression calculée ?",
  answers: [
    "a) ORDER BY",
    "b) CALCULATE BY",
    "c) COMPUTE ORDER",
    "d) SORT EXPRESSION ONLY",
  ],
  correct: 0,
},
{
  question: "811) Quelle requête retourne les employés ayant un salaire supérieur à la moyenne ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire > (SELECT AVG(salaire) FROM employe);",
    "b) SELECT * FROM employe WHERE salaire > AVG(salaire);",
    "c) SELECT * FROM employe HAVING salaire > AVG(salaire);",
    "d) SELECT * FROM employe WHERE salaire > MEAN(employe);",
  ],
  correct: 0,
},
{
  question: "812) Quel type de sous-requête est utilisé dans SELECT * FROM employe WHERE salaire > (SELECT AVG(salaire) FROM employe) ?",
  answers: [
    "a) Sous-requête scalaire",
    "b) Sous-requête de type JOIN",
    "c) Sous-requête récursive obligatoire",
    "d) Sous-requête cartésienne",
  ],
  correct: 0,
},
{
  question: "813) Quelle requête trouve les employés ayant le salaire maximum ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire = (SELECT MAX(salaire) FROM employe);",
    "b) SELECT * FROM employe WHERE salaire = MAX(salaire);",
    "c) SELECT * FROM employe HAVING salaire = MAX(salaire);",
    "d) SELECT * FROM employe WHERE MAX(salaire);",
  ],
  correct: 0,
},
{
  question: "814) Quel avantage présente la requête avec MAX(salaire) pour trouver le salaire le plus élevé ?",
  answers: [
    "a) Elle fonctionne même si plusieurs employés partagent le salaire maximal",
    "b) Elle retourne toujours un seul employé",
    "c) Elle supprime les salaires identiques",
    "d) Elle modifie la table",
  ],
  correct: 0,
},
{
  question: "815) Quelle requête retourne les employés ayant le salaire minimum ?",
  answers: [
    "a) SELECT * FROM employe WHERE salaire = (SELECT MIN(salaire) FROM employe);",
    "b) SELECT * FROM employe WHERE salaire = MIN(salaire);",
    "c) SELECT MIN(*) FROM employe WHERE salaire;",
    "d) SELECT * FROM employe HAVING MIN(salaire);",
  ],
  correct: 0,
},
{
  question: "816) Quelle requête permet de trouver les produits dont le prix est supérieur au prix de tous les produits de la catégorie 1 ?",
  answers: [
    "a) SELECT * FROM produit WHERE prix > ALL (SELECT prix FROM produit WHERE categorie_id = 1);",
    "b) SELECT * FROM produit WHERE prix > ANY (SELECT prix FROM produit WHERE categorie_id = 1);",
    "c) SELECT * FROM produit WHERE prix = ALL (SELECT prix FROM produit WHERE categorie_id = 1);",
    "d) SELECT * FROM produit WHERE prix IN ALL (SELECT prix FROM produit WHERE categorie_id = 1);",
  ],
  correct: 0,
},
{
  question: "817) Quelle condition permet de sélectionner les produits plus chers qu'au moins un produit de la catégorie 1 ?",
  answers: [
    "a) prix > ALL (...)",
    "b) prix > ANY (...)",
    "c) prix = ALL (...)",
    "d) prix IN (...)",
  ],
  correct: 1,
},
{
  question: "818) Quel opérateur est particulièrement adapté pour tester l'existence de lignes liées ?",
  answers: [
    "a) EXISTS",
    "b) MATCH",
    "c) FOUND",
    "d) HAS",
  ],
  correct: 0,
},
{
  question: "819) Quelle requête trouve les clients ayant au moins une commande ?",
  answers: [
    "a) SELECT * FROM client c WHERE EXISTS (SELECT 1 FROM commande o WHERE o.client_id = c.id);",
    "b) SELECT * FROM client c WHERE EXISTS client.commande;",
    "c) SELECT * FROM client c WHERE HAS commande;",
    "d) SELECT * FROM client c WHERE COUNT(commande) > 0;",
  ],
  correct: 0,
},
{
  question: "820) Dans SELECT 1 FROM commande WHERE client_id = c.id, pourquoi utilise-t-on souvent SELECT 1 avec EXISTS ?",
  answers: [
    "a) EXISTS vérifie surtout l'existence d'une ligne, pas la valeur sélectionnée",
    "b) 1 signifie toujours la première ligne",
    "c) 1 force un tri",
    "d) 1 transforme la requête en JOIN",
  ],
  correct: 0,
},
{
  question: "821) Quel opérateur permet de vérifier l'absence de lignes correspondantes ?",
  answers: [
    "a) NOT EXISTS",
    "b) NO EXISTS",
    "c) ABSENT",
    "d) NOT FOUND",
  ],
  correct: 0,
},
{
  question: "822) Quelle requête trouve les clients n'ayant aucune commande ?",
  answers: [
    "a) SELECT * FROM client c WHERE NOT EXISTS (SELECT 1 FROM commande o WHERE o.client_id = c.id);",
    "b) SELECT * FROM client c WHERE EXISTS NOT commande;",
    "c) SELECT * FROM client c WHERE COUNT(commande) = 0;",
    "d) SELECT * FROM client c WHERE commande IS NULL;",
  ],
  correct: 0,
},
{
  question: "823) Quel avantage de NOT EXISTS par rapport à NOT IN peut être important lorsqu'il y a des NULL ?",
  answers: [
    "a) NOT EXISTS évite certains problèmes de logique liés aux NULL dans la sous-requête",
    "b) NOT EXISTS supprime les NULL",
    "c) NOT EXISTS transforme NULL en 0",
    "d) Il n'existe aucune différence possible",
  ],
  correct: 0,
},
{
  question: "824) Quel opérateur permet de comparer une colonne à une liste de valeurs ?",
  answers: [
    "a) IN",
    "b) LIST",
    "c) MATCHES",
    "d) AMONG",
  ],
  correct: 0,
},
{
  question: "825) Quelle requête sélectionne les clients dont l'identifiant est 10, 20 ou 30 ?",
  answers: [
    "a) SELECT * FROM client WHERE id IN (10, 20, 30);",
    "b) SELECT * FROM client WHERE id = (10, 20, 30);",
    "c) SELECT * FROM client WHERE id LIST (10, 20, 30);",
    "d) SELECT * FROM client WHERE id BETWEEN 10 AND 30;",
  ],
  correct: 0,
},
{
  question: "826) Quelle condition est généralement équivalente à id IN (1, 2, 3) ?",
  answers: [
    "a) id = 1 OR id = 2 OR id = 3",
    "b) id = 1 AND id = 2 AND id = 3",
    "c) id BETWEEN 1 AND 3 uniquement",
    "d) id <> 1 OR id <> 2 OR id <> 3",
  ],
  correct: 0,
},
{
  question: "827) Quelle instruction permet de supprimer les doublons d'une combinaison de colonnes dans un résultat ?",
  answers: [
    "a) SELECT DISTINCT col1, col2",
    "b) SELECT UNIQUE ROW col1, col2",
    "c) SELECT REMOVE DUPLICATES col1, col2",
    "d) SELECT GROUP DISTINCT col1, col2",
  ],
  correct: 0,
},
{
  question: "828) Quelle fonction permet de convertir une chaîne en entier avec CAST ?",
  answers: [
    "a) CAST(texte AS INTEGER)",
    "b) CAST(texte TO INTEGER)",
    "c) CONVERT INTEGER FROM texte ONLY",
    "d) INTEGER(texte AS CAST)",
  ],
  correct: 0,
},
{
  question: "829) Que se passe-t-il généralement si CAST('abc' AS INTEGER) ne peut pas convertir la chaîne ?",
  answers: [
    "a) Le comportement dépend du SGBD, mais une erreur de conversion est fréquente",
    "b) Le résultat est toujours 0",
    "c) Le résultat est toujours NULL",
    "d) La chaîne devient automatiquement 123",
  ],
  correct: 0,
},
{
  question: "830) Quelle fonction permet généralement de convertir une chaîne en majuscules ?",
  answers: [
    "a) UPPER()",
    "b) UCASE_ONLY()",
    "c) CAPITALIZE SQL",
    "d) TO_CAPS()",
  ],
  correct: 0,
},
{
  question: "831) Quelle fonction permet généralement de convertir une chaîne en minuscules ?",
  answers: [
    "a) LOWER()",
    "b) SMALL()",
    "c) TO_SMALL()",
    "d) MINUSCASE()",
  ],
  correct: 0,
},
{
  question: "832) Quelle fonction permet généralement d'extraire une partie d'une chaîne ?",
  answers: [
    "a) SUBSTRING()",
    "b) CUTSTRING()",
    "c) EXTRACT_TEXT_ONLY()",
    "d) PARTSTRING()",
  ],
  correct: 0,
},
{
  question: "833) Quelle fonction permet généralement de supprimer les espaces au début et à la fin d'une chaîne ?",
  answers: [
    "a) TRIM()",
    "b) CLEANSPACE()",
    "c) STRIP() uniquement",
    "d) REMOVE()",
  ],
  correct: 0,
},
{
  question: "834) Quelle fonction permet généralement de rechercher la position d'une sous-chaîne ?",
  answers: [
    "a) POSITION()",
    "b) LOCATE()",
    "c) INSTR()",
    "d) Selon le SGBD, plusieurs fonctions comme POSITION, LOCATE ou INSTR peuvent être disponibles",
  ],
  correct: 3,
},
{
  question: "835) Quelle fonction permet de concaténer plusieurs chaînes dans de nombreux SGBD ?",
  answers: [
    "a) CONCAT()",
    "b) MERGE_TEXT()",
    "c) APPEND_STRING()",
    "d) JOIN_TEXT()",
  ],
  correct: 0,
},
{
  question: "836) Quelle expression SQL standard utilise généralement || pour concaténer deux chaînes ?",
  answers: [
    "a) 'Bonjour' || 'Monde'",
    "b) 'Bonjour' && 'Monde'",
    "c) 'Bonjour' +++ 'Monde'",
    "d) 'Bonjour' :: 'Monde'",
  ],
  correct: 0,
},
{
  question: "837) Quel point doit-on vérifier concernant la concaténation de chaînes ?",
  answers: [
    "a) La syntaxe et le comportement peuvent varier selon le SGBD",
    "b) || est interdit dans tous les SGBD",
    "c) CONCAT() n'existe dans aucun SGBD",
    "d) La concaténation modifie toujours les données",
  ],
  correct: 0,
},
{
  question: "838) Quelle fonction retourne généralement la longueur d'une chaîne en SQL ?",
  answers: [
    "a) LENGTH()",
    "b) STRINGCOUNT()",
    "c) SIZE() uniquement",
    "d) CHARCOUNT() uniquement",
  ],
  correct: 0,
},
{
  question: "839) Quelle fonction permet généralement d'arrondir un nombre à un nombre donné de décimales ?",
  answers: [
    "a) ROUND()",
    "b) APPROXIMATE()",
    "c) DECIMALIZE()",
    "d) FORMATROUNDONLY()",
  ],
  correct: 0,
},
{
  question: "840) Que retourne généralement ROUND(12.56, 1) ?",
  answers: [
    "a) 12.5",
    "b) 12.6",
    "c) 13",
    "d) 12.56",
  ],
  correct: 1,
},
{
  question: "841) Quelle fonction permet généralement d'obtenir l'entier inférieur ou égal à un nombre ?",
  answers: [
    "a) FLOOR()",
    "b) LOWERINT()",
    "c) DOWNINT()",
    "d) MININT()",
  ],
  correct: 0,
},
{
  question: "842) Quelle fonction permet généralement d'obtenir l'entier supérieur ou égal à un nombre ?",
  answers: [
    "a) CEILING()",
    "b) UPPERINT()",
    "c) HIGHINT()",
    "d) MAXINT()",
  ],
  correct: 0,
},
{
  question: "843) Que retourne généralement ABS(-15) ?",
  answers: [
    "a) -15",
    "b) 0",
    "c) 15",
    "d) NULL",
  ],
  correct: 2,
},
{
  question: "844) Quelle fonction permet généralement d'obtenir le reste d'une division entière ?",
  answers: [
    "a) MOD()",
    "b) REST()",
    "c) REMAIN()",
    "d) DIVREM()",
  ],
  correct: 0,
},
{
  question: "845) Que retourne généralement MOD(17, 5) ?",
  answers: [
    "a) 2",
    "b) 3",
    "c) 5",
    "d) 0",
  ],
  correct: 0,
},
{
  question: "846) Quelle expression permet de récupérer l'année d'une date en SQL standard ?",
  answers: [
    "a) EXTRACT(YEAR FROM date_colonne)",
    "b) GET YEAR date_colonne",
    "c) YEAR(date_colonne) dans tous les SGBD",
    "d) DATE.YEAR(date_colonne)",
  ],
  correct: 0,
},
{
  question: "847) Quelle expression permet d'extraire le mois d'une date avec EXTRACT ?",
  answers: [
    "a) EXTRACT(MONTH FROM date_colonne)",
    "b) EXTRACT(date_colonne MONTH)",
    "c) MONTH FROM date_colonne ONLY",
    "d) GET MONTH date_colonne",
  ],
  correct: 0,
},
{
  question: "848) Quel type SQL est destiné à stocker une date ?",
  answers: [
    "a) DATE",
    "b) CALENDAR",
    "c) DAYDATE",
    "d) YEAR",
  ],
  correct: 0,
},
{
  question: "849) Quel type SQL est destiné à stocker une heure ?",
  answers: [
    "a) TIME",
    "b) CLOCK",
    "c) HOUR",
    "d) TIMETYPE",
  ],
  correct: 0,
},
{
  question: "850) Quel type SQL représente généralement une date et une heure ?",
  answers: [
    "a) TIMESTAMP",
    "b) DATETIMEONLY",
    "c) DATE_TIME_TYPE",
    "d) CALENDAR_TIME",
  ],
  correct: 0,
},
{
  question: "851) Quelle commande permet de créer une vue ?",
  answers: [
    "a) CREATE VIEW",
    "b) MAKE VIEW",
    "c) NEW VIEW",
    "d) BUILD VIEW",
  ],
  correct: 0,
},
{
  question: "852) Quelle commande permet généralement de supprimer une vue ?",
  answers: [
    "a) DELETE VIEW",
    "b) DROP VIEW",
    "c) REMOVE VIEW",
    "d) CLEAR VIEW",
  ],
  correct: 1,
},
{
  question: "853) Une vue SQL est principalement :",
  answers: [
    "a) Une requête enregistrée présentée comme une table virtuelle",
    "b) Un index physique",
    "c) Une copie obligatoire des données",
    "d) Une clé étrangère",
  ],
  correct: 0,
},
{
  question: "854) Une vue simple peut-elle généralement être utilisée dans un SELECT ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement avec DELETE",
    "d) Seulement avec INSERT",
  ],
  correct: 0,
},
{
  question: "855) Une vue peut-elle être basée sur plusieurs tables ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement si les tables ont la même structure",
    "d) Seulement avec Oracle",
  ],
  correct: 0,
},
{
  question: "856) Quelle instruction crée une vue affichant uniquement les employés actifs ?",
  answers: [
    "a) CREATE VIEW employes_actifs AS SELECT * FROM employe WHERE actif = 1;",
    "b) CREATE employes_actifs VIEW FROM employe WHERE actif = 1;",
    "c) MAKE VIEW employes_actifs WHERE actif = 1;",
    "d) VIEW CREATE employes_actifs SELECT actif = 1;",
  ],
  correct: 0,
},
{
  question: "857) Quel avantage peut présenter une vue ?",
  answers: [
    "a) Simplifier certaines requêtes complexes et contrôler l'accès aux données",
    "b) Remplacer obligatoirement les clés primaires",
    "c) Supprimer les tables sources",
    "d) Garantir automatiquement de meilleures performances",
  ],
  correct: 0,
},
{
  question: "858) Une vue garantit-elle toujours une amélioration des performances ?",
  answers: [
    "a) Oui",
    "b) Non",
    "c) Seulement avec SELECT *",
    "d) Seulement avec JOIN",
  ],
  correct: 1,
},
{
  question: "859) Qu'est-ce qu'une vue matérialisée ?",
  answers: [
    "a) Un résultat de requête stocké physiquement et rafraîchi selon le mécanisme du SGBD",
    "b) Une vue sans SELECT",
    "c) Une table contenant uniquement des clés",
    "d) Un index temporaire",
  ],
  correct: 0,
},
{
  question: "860) Quel problème doit-on considérer avec une vue matérialisée ?",
  answers: [
    "a) La fraîcheur des données et le coût du rafraîchissement",
    "b) L'impossibilité de la lire",
    "c) L'absence totale de stockage",
    "d) La suppression automatique des tables sources",
  ],
  correct: 0,
},
{
  question: "861) Quel objet est conçu principalement pour accélérer certaines recherches ?",
  answers: [
    "a) INDEX",
    "b) VIEW",
    "c) TRIGGER",
    "d) PROCEDURE",
  ],
  correct: 0,
},
{
  question: "862) Un index est généralement construit sur :",
  answers: [
    "a) Une ou plusieurs colonnes",
    "b) Uniquement toute la base",
    "c) Uniquement les utilisateurs",
    "d) Uniquement les vues",
  ],
  correct: 0,
},
{
  question: "863) Quel type d'index porte sur plusieurs colonnes ?",
  answers: [
    "a) Index composite",
    "b) Index multiple-table",
    "c) Index relationnel",
    "d) Index parallèle obligatoire",
  ],
  correct: 0,
},
{
  question: "864) Quelle instruction crée généralement un index nommé idx_client_nom ?",
  answers: [
    "a) CREATE INDEX idx_client_nom ON client(nom);",
    "b) MAKE INDEX idx_client_nom FROM client(nom);",
    "c) ADD INDEX idx_client_nom TO client(nom);",
    "d) CREATE KEY idx_client_nom IN client(nom);",
  ],
  correct: 0,
},
{
  question: "865) Quel est l'inconvénient potentiel d'un index supplémentaire ?",
  answers: [
    "a) Il consomme de l'espace et peut augmenter le coût des écritures",
    "b) Il supprime automatiquement les doublons",
    "c) Il interdit les SELECT",
    "d) Il transforme la colonne en clé primaire",
  ],
  correct: 0,
},
{
  question: "866) Pourquoi un index sur une colonne fréquemment utilisée dans WHERE peut-il être utile ?",
  answers: [
    "a) Il peut permettre au SGBD de trouver plus rapidement certaines lignes",
    "b) Il modifie les valeurs de la colonne",
    "c) Il supprime les lignes non recherchées",
    "d) Il remplace toujours le WHERE",
  ],
  correct: 0,
},
{
  question: "867) Quel outil est couramment utilisé pour examiner le plan d'exécution d'une requête ?",
  answers: [
    "a) EXPLAIN",
    "b) DESCRIBE QUERY ONLY",
    "c) SHOW PLAN SQL",
    "d) EXECUTION VIEW",
  ],
  correct: 0,
},
{
  question: "868) Quel est l'objectif de l'optimiseur de requêtes ?",
  answers: [
    "a) Choisir un plan d'exécution estimé efficace",
    "b) Modifier automatiquement la structure logique de la base",
    "c) Supprimer les index inutiles dans tous les cas",
    "d) Créer des utilisateurs",
  ],
  correct: 0,
},
{
  question: "869) Quelle information peut apparaître dans un plan d'exécution ?",
  answers: [
    "a) Le type d'accès aux tables et les opérations de jointure",
    "b) Le mot de passe de l'utilisateur",
    "c) Le contenu complet des tables",
    "d) Les fichiers personnels du serveur",
  ],
  correct: 0,
},
{
  question: "870) Pourquoi les statistiques des tables sont-elles importantes pour l'optimiseur ?",
  answers: [
    "a) Elles aident à estimer les coûts et le nombre de lignes",
    "b) Elles remplacent les clés primaires",
    "c) Elles chiffrent les données",
    "d) Elles empêchent les JOIN",
  ],
  correct: 0,
},
{
  question: "871) Quel problème peut survenir avec une requête qui utilise LIKE '%abc%' sur une grande table ?",
  answers: [
    "a) Un index B-tree classique peut être moins exploitable selon le SGBD et la collation",
    "b) LIKE devient toujours une erreur",
    "c) La table est automatiquement supprimée",
    "d) Le résultat est toujours vide",
  ],
  correct: 0,
},
{
  question: "872) Quelle condition est généralement plus favorable à un index B-tree qu'un LIKE commençant par % ?",
  answers: [
    "a) nom LIKE 'Ali%'",
    "b) nom LIKE '%Ali'",
    "c) nom LIKE '%Ali%'",
    "d) nom LIKE '%'",
  ],
  correct: 0,
},
{
  question: "873) Quelle technique permet d'éviter de construire directement une requête SQL à partir d'une entrée utilisateur ?",
  answers: [
    "a) Requête préparée",
    "b) Concaténation de chaînes",
    "c) Remplacement manuel des apostrophes uniquement",
    "d) SELECT *",
  ],
  correct: 0,
},
{
  question: "874) Quel est le principal risque de la concaténation non sécurisée d'une entrée utilisateur dans une requête SQL ?",
  answers: [
    "a) Injection SQL",
    "b) Normalisation automatique",
    "c) Création d'un index",
    "d) Compression des données",
  ],
  correct: 0,
},
{
  question: "875) Quelle pratique est recommandée pour les valeurs fournies par un utilisateur dans une requête SQL ?",
  answers: [
    "a) Utiliser des paramètres liés",
    "b) Ajouter directement les valeurs dans la chaîne SQL",
    "c) Désactiver les contraintes",
    "d) Donner les droits administrateur",
  ],
  correct: 0,
},
{
  question: "876) Quel principe de sécurité consiste à accorder uniquement les permissions nécessaires ?",
  answers: [
    "a) Moindre privilège",
    "b) Maximum privilège",
    "c) Accès universel",
    "d) Héritage total",
  ],
  correct: 0,
},
{
  question: "877) Quel privilège permet généralement de consulter une table ?",
  answers: [
    "a) SELECT",
    "b) READ",
    "c) VIEW",
    "d) FETCH",
  ],
  correct: 0,
},
{
  question: "878) Quel privilège permet généralement d'ajouter des lignes ?",
  answers: [
    "a) INSERT",
    "b) ADD",
    "c) APPEND",
    "d) CREATE ROW",
  ],
  correct: 0,
},
{
  question: "879) Quel privilège permet généralement de modifier les données existantes ?",
  answers: [
    "a) UPDATE",
    "b) MODIFY",
    "c) CHANGE",
    "d) EDIT",
  ],
  correct: 0,
},
{
  question: "880) Quel privilège permet généralement de supprimer des lignes ?",
  answers: [
    "a) DELETE",
    "b) REMOVE",
    "c) ERASE",
    "d) DROP ROW",
  ],
  correct: 0,
},
{
  question: "881) Quelle commande accorde un privilège ?",
  answers: [
    "a) GRANT",
    "b) GIVE",
    "c) ALLOW SQL",
    "d) PERMIT USER",
  ],
  correct: 0,
},
{
  question: "882) Quelle commande retire un privilège ?",
  answers: [
    "a) REVOKE",
    "b) REMOVE GRANT",
    "c) DENY SQL",
    "d) DELETE PRIVILEGE",
  ],
  correct: 0,
},
{
  question: "883) Que signifie GRANT SELECT ON client TO user1 ?",
  answers: [
    "a) user1 reçoit le privilège SELECT sur client",
    "b) user1 reçoit le privilège DELETE",
    "c) user1 devient administrateur",
    "d) user1 supprime la table client",
  ],
  correct: 0,
},
{
  question: "884) Quel mot-clé peut être utilisé avec GRANT pour permettre la transmission d'un privilège à d'autres utilisateurs, selon le SGBD ?",
  answers: [
    "a) WITH GRANT OPTION",
    "b) WITH SHARE",
    "c) ALLOW GRANT",
    "d) GRANT ALL USERS",
  ],
  correct: 0,
},
{
  question: "885) Pourquoi donner GRANT ALL à un utilisateur applicatif peut-il être risqué ?",
  answers: [
    "a) Il peut recevoir des droits inutiles ou excessifs",
    "b) Il ne pourra plus faire SELECT",
    "c) Cela supprime automatiquement les tables",
    "d) Cela désactive les transactions",
  ],
  correct: 0,
},
{
  question: "886) Quel est le rôle d'un rôle dans un SGBD ?",
  answers: [
    "a) Regrouper des privilèges pouvant être attribués à des utilisateurs",
    "b) Stocker les lignes d'une table",
    "c) Remplacer une clé primaire",
    "d) Trier les données",
  ],
  correct: 0,
},
{
  question: "887) Quel avantage présente l'utilisation de rôles ?",
  answers: [
    "a) Simplifier la gestion des permissions",
    "b) Supprimer toutes les contraintes",
    "c) Éviter toutes les transactions",
    "d) Remplacer SQL",
  ],
  correct: 0,
},
{
  question: "888) Qu'est-ce qu'une transaction SQL ?",
  answers: [
    "a) Un ensemble d'opérations traité comme une unité logique",
    "b) Une simple colonne",
    "c) Une vue",
    "d) Un index",
  ],
  correct: 0,
},
{
  question: "889) Quelle propriété ACID signifie « Atomicité » ?",
  answers: [
    "a) Toutes les opérations de la transaction sont validées ou aucune ne l'est",
    "b) Les transactions sont toujours exécutées une par une",
    "c) Les données sont toujours sauvegardées sur disque",
    "d) Les données sont toujours triées",
  ],
  correct: 0,
},
{
  question: "890) Quelle propriété ACID garantit l'isolation entre transactions concurrentes ?",
  answers: [
    "a) Isolation",
    "b) Atomicité",
    "c) Cohérence",
    "d) Durabilité",
  ],
  correct: 0,
},
{
  question: "891) Quelle propriété ACID garantit la persistance des modifications validées ?",
  answers: [
    "a) Durabilité",
    "b) Isolation",
    "c) Atomicité",
    "d) Cohérence",
  ],
  correct: 0,
},
{
  question: "892) Quel ordre d'opérations est cohérent pour une transaction ?",
  answers: [
    "a) Début → modifications → COMMIT",
    "b) COMMIT → début → modifications",
    "c) DROP → COMMIT → SELECT",
    "d) ROLLBACK → INSERT → DROP",
  ],
  correct: 0,
},
{
  question: "893) Que fait ROLLBACK ?",
  answers: [
    "a) Annule les modifications de la transaction selon le contexte",
    "b) Valide les modifications",
    "c) Crée une vue",
    "d) Crée un index",
  ],
  correct: 0,
},
{
  question: "894) Que fait COMMIT ?",
  answers: [
    "a) Valide la transaction",
    "b) Annule la transaction",
    "c) Supprime la table",
    "d) Crée une contrainte",
  ],
  correct: 0,
},
{
  question: "895) Quelle commande crée un point de sauvegarde dans une transaction ?",
  answers: [
    "a) SAVEPOINT",
    "b) CHECKPOINT TRANSACTION",
    "c) MARK TRANSACTION",
    "d) POINT SAVE",
  ],
  correct: 0,
},
{
  question: "896) Quel problème correspond à une lecture d'une donnée non validée par une autre transaction ?",
  answers: [
    "a) Dirty read",
    "b) Phantom read",
    "c) Non-repeatable read",
    "d) Deadlock",
  ],
  correct: 0,
},
{
  question: "897) Quel problème correspond à la lecture répétée d'une même ligne donnant des valeurs différentes ?",
  answers: [
    "a) Dirty read",
    "b) Non-repeatable read",
    "c) Phantom read",
    "d) Deadlock",
  ],
  correct: 1,
},
{
  question: "898) Quel problème correspond à l'apparition de nouvelles lignes correspondant à une condition lors d'une seconde lecture ?",
  answers: [
    "a) Dirty read",
    "b) Non-repeatable read",
    "c) Phantom read",
    "d) Lost connection",
  ],
  correct: 2,
},
{
  question: "899) Qu'est-ce qu'un deadlock ?",
  answers: [
    "a) Des transactions se bloquent mutuellement en attendant des ressources",
    "b) Une table sans données",
    "c) Une requête SELECT vide",
    "d) Une clé primaire dupliquée",
  ],
  correct: 0,
},
{
  question: "900) Quel niveau d'isolation offre généralement le niveau de protection le plus élevé parmi les quatre niveaux SQL classiques ?",
  answers: [
    "a) READ UNCOMMITTED",
    "b) READ COMMITTED",
    "c) REPEATABLE READ",
    "d) SERIALIZABLE",
  ],
  correct: 3,
},
{
  question: "901) Une CTE en SQL est généralement définie avec :",
  answers: [
    "a) WITH",
    "b) CTE",
    "c) TEMP",
    "d) DEFINE"
  ],
  correct: 0,
},
{
  question: "902) Quelle clause permet de définir une CTE ?",
  answers: [
    "a) USING",
    "b) WITH",
    "c) DEFINE",
    "d) CREATE"
  ],
  correct: 1,
},
{
  question: "903) Dans une requête utilisant une CTE, la CTE est normalement utilisée :",
  answers: [
    "a) Comme une table logique temporaire dans la requête",
    "b) Comme une nouvelle base de données",
    "c) Comme un index permanent",
    "d) Comme une contrainte"
  ],
  correct: 0,
},
{
  question: "904) Quelle syntaxe est correcte pour une CTE simple ?",
  answers: [
    "a) WITH clients AS (SELECT * FROM Client) SELECT * FROM clients;",
    "b) CTE clients = SELECT * FROM Client;",
    "c) CREATE CTE clients AS SELECT * FROM Client;",
    "d) SELECT WITH clients FROM Client;"
  ],
  correct: 0,
},
{
  question: "905) Une CTE récursive est particulièrement utile pour :",
  answers: [
    "a) Les structures hiérarchiques",
    "b) Créer des index",
    "c) Modifier le type d'une colonne",
    "d) Accorder des privilèges"
  ],
  correct: 0,
},
{
  question: "906) Une fonction de fenêtre utilise généralement la clause :",
  answers: [
    "a) OVER",
    "b) WINDOWED",
    "c) GROUP",
    "d) FRAMEBY"
  ],
  correct: 0,
},
{
  question: "907) Quelle fonction permet d'attribuer un numéro séquentiel aux lignes ?",
  answers: [
    "a) RANK()",
    "b) ROW_NUMBER()",
    "c) NUMBER_ROW()",
    "d) SEQUENCE_ROW()"
  ],
  correct: 1,
},
{
  question: "908) Quelle fonction attribue le même rang aux valeurs ex æquo sans laisser de rang intermédiaire ?",
  answers: [
    "a) ROW_NUMBER()",
    "b) RANK()",
    "c) DENSE_RANK()",
    "d) COUNT_RANK()"
  ],
  correct: 2,
},
{
  question: "909) Avec RANK(), si deux lignes ont le rang 1, la ligne suivante reçoit généralement le rang :",
  answers: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) 4"
  ],
  correct: 2,
},
{
  question: "910) Avec DENSE_RANK(), si deux lignes ont le rang 1, la ligne suivante reçoit généralement le rang :",
  answers: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) 4"
  ],
  correct: 1,
},
{
  question: "911) La clause PARTITION BY dans une fonction de fenêtre sert principalement à :",
  answers: [
    "a) Diviser les lignes en groupes indépendants pour le calcul",
    "b) Supprimer les doublons",
    "c) Créer une partition physique de disque",
    "d) Trier définitivement la table"
  ],
  correct: 0,
},
{
  question: "912) Quelle requête permet de numéroter les employés par salaire décroissant ?",
  answers: [
    "a) SELECT ROW_NUMBER() OVER (ORDER BY salaire DESC) FROM Employe;",
    "b) SELECT NUMBER() BY salaire DESC FROM Employe;",
    "c) SELECT ROW() GROUP BY salaire FROM Employe;",
    "d) SELECT ROWNUM OVER salaire FROM Employe;"
  ],
  correct: 0,
},
{
  question: "913) Une fonction de fenêtre diffère de GROUP BY notamment parce qu'elle :",
  answers: [
    "a) Peut calculer sur plusieurs lignes sans réduire nécessairement le nombre de lignes retournées",
    "b) Supprime toujours toutes les lignes originales",
    "c) Ne peut jamais utiliser ORDER BY",
    "d) Ne peut utiliser aucune fonction d'agrégation"
  ],
  correct: 0,
},
{
  question: "914) Quelle fonction de fenêtre permet d'accéder à la valeur de la ligne précédente ?",
  answers: [
    "a) PREVIOUS()",
    "b) LAG()",
    "c) BEFORE()",
    "d) PRIOR_VALUE()"
  ],
  correct: 1,
},
{
  question: "915) Quelle fonction permet d'accéder à la valeur de la ligne suivante ?",
  answers: [
    "a) NEXT()",
    "b) LEAD()",
    "c) FOLLOW()",
    "d) AFTER()"
  ],
  correct: 1,
},
{
  question: "916) Que permet principalement LAG() ?",
  answers: [
    "a) Comparer une ligne avec une ligne précédente",
    "b) Supprimer la ligne précédente",
    "c) Trier une table",
    "d) Modifier la ligne précédente"
  ],
  correct: 0,
},
{
  question: "917) Quelle expression est correcte ?",
  answers: [
    "a) LAG(salaire) OVER (ORDER BY id)",
    "b) LAG OVER salaire ORDER id",
    "c) PREVIOUS(salaire) GROUP BY id",
    "d) LAG(salaire ORDER id)"
  ],
  correct: 0,
},
{
  question: "918) Quelle fonction permet de remplacer NULL par une valeur alternative dans de nombreux SGBD ?",
  answers: [
    "a) COALESCE()",
    "b) REPLACE_NULL()",
    "c) NULL_REPLACE()",
    "d) ALTERNATE()"
  ],
  correct: 0,
},
{
  question: "919) COALESCE(a, b, c) retourne :",
  answers: [
    "a) Toujours c",
    "b) La première valeur non NULL",
    "c) La dernière valeur non NULL",
    "d) Toutes les valeurs non NULL"
  ],
  correct: 1,
},
{
  question: "920) Quelle fonction retourne NULL lorsque ses deux arguments sont égaux ?",
  answers: [
    "a) COALESCE()",
    "b) NULLIF()",
    "c) EQUALNULL()",
    "d) IFNULLONLY()"
  ],
  correct: 1,
},
{
  question: "921) Quel est le résultat de NULLIF(10, 10) ?",
  answers: [
    "a) 10",
    "b) 0",
    "c) NULL",
    "d) FALSE"
  ],
  correct: 2,
},
{
  question: "922) Quel est le résultat de NULLIF(10, 5) ?",
  answers: [
    "a) NULL",
    "b) 10",
    "c) 5",
    "d) 0"
  ],
  correct: 1,
},
{
  question: "923) Quelle requête permet d'éviter une division par zéro avec NULLIF ?",
  answers: [
    "a) SELECT montant / NULLIF(total, 0) FROM Vente;",
    "b) SELECT montant / ZEROIF(total) FROM Vente;",
    "c) SELECT montant / IFZERO(total) FROM Vente;",
    "d) SELECT montant DIVIDE NULL(total, 0) FROM Vente;"
  ],
  correct: 0,
},
{
  question: "924) Dans une comparaison SQL, NULL = NULL produit généralement :",
  answers: [
    "a) TRUE",
    "b) FALSE",
    "c) UNKNOWN",
    "d) 0"
  ],
  correct: 2,
},
{
  question: "925) Pour tester si une colonne est NULL, on utilise :",
  answers: [
    "a) = NULL",
    "b) IS NULL",
    "c) == NULL",
    "d) NULL ="
  ],
  correct: 1,
},
{
  question: "926) Quelle requête est correcte pour sélectionner les clients sans téléphone ?",
  answers: [
    "a) SELECT * FROM Client WHERE telephone = NULL;",
    "b) SELECT * FROM Client WHERE telephone IS NULL;",
    "c) SELECT * FROM Client WHERE telephone == NULL;",
    "d) SELECT * FROM Client WHERE telephone NULL;"
  ],
  correct: 1,
},
{
  question: "927) Quel problème peut survenir avec NOT IN si la sous-requête retourne NULL ?",
  answers: [
    "a) Le résultat peut être affecté par UNKNOWN et ne retourner aucune ligne attendue",
    "b) La table est automatiquement supprimée",
    "c) La requête devient automatiquement un JOIN",
    "d) NULL est automatiquement converti en zéro"
  ],
  correct: 0,
},
{
  question: "928) Quelle construction est souvent préférable à NOT IN lorsqu'une sous-requête peut contenir NULL ?",
  answers: [
    "a) EXISTS / NOT EXISTS selon le besoin",
    "b) DROP",
    "c) TRUNCATE",
    "d) UNION uniquement"
  ],
  correct: 0,
},
{
  question: "929) Une sous-requête corrélée :",
  answers: [
    "a) Référence une colonne de la requête externe",
    "b) Ne peut jamais utiliser WHERE",
    "c) Est toujours exécutée une seule fois indépendamment",
    "d) Doit obligatoirement créer une table"
  ],
  correct: 0,
},
{
  question: "930) Quelle requête utilise une sous-requête corrélée ?",
  answers: [
    "a) SELECT e.nom FROM Employe e WHERE salaire > (SELECT AVG(salaire) FROM Employe);",
    "b) SELECT e.nom FROM Employe e WHERE EXISTS (SELECT 1 FROM Departement d WHERE d.id = e.dept_id);",
    "c) SELECT * FROM Employe;",
    "d) SELECT AVG(salaire) FROM Employe;"
  ],
  correct: 1,
},
{
  question: "931) EXISTS vérifie principalement :",
  answers: [
    "a) L'existence d'au moins une ligne dans le résultat de la sous-requête",
    "b) Que toutes les lignes sont identiques",
    "c) Que la sous-requête retourne exactement une ligne",
    "d) Que la table possède une clé primaire"
  ],
  correct: 0,
},
{
  question: "932) Dans une condition EXISTS, la valeur SELECT de la sous-requête est généralement :",
  answers: [
    "a) Sans importance pour le test d'existence",
    "b) Toujours obligatoire à être une clé primaire",
    "c) Obligatoirement une fonction d'agrégation",
    "d) Obligatoirement une chaîne"
  ],
  correct: 0,
},
{
  question: "933) Quelle écriture est courante avec EXISTS ?",
  answers: [
    "a) EXISTS (SELECT 1 FROM Commande c WHERE c.client_id = cl.id)",
    "b) EXISTS SELECT 1 FROM Commande",
    "c) EXISTING (Commande)",
    "d) IF EXISTS FROM Commande"
  ],
  correct: 0,
},
{
  question: "934) Une agrégation conditionnelle peut être réalisée avec :",
  answers: [
    "a) SUM(CASE WHEN ... THEN ... ELSE ... END)",
    "b) SUM(IF GROUP ...)",
    "c) GROUPSUM WHERE",
    "d) CONDITIONAL_SUM_ONLY"
  ],
  correct: 0,
},
{
  question: "935) Quelle requête compte les employés ayant un salaire supérieur à 5000 ?",
  answers: [
    "a) SELECT SUM(CASE WHEN salaire > 5000 THEN 1 ELSE 0 END) FROM Employe;",
    "b) SELECT COUNT WHEN salaire > 5000 FROM Employe;",
    "c) SELECT COUNT(salaire > 5000) ONLY FROM Employe;",
    "d) SELECT SUM WHERE salaire > 5000 FROM Employe;"
  ],
  correct: 0,
},
{
  question: "936) La clause CASE en SQL permet notamment de :",
  answers: [
    "a) Implémenter une logique conditionnelle",
    "b) Créer une base de données",
    "c) Créer obligatoirement un index",
    "d) Démarrer une transaction"
  ],
  correct: 0,
},
{
  question: "937) Quelle syntaxe CASE est correcte ?",
  answers: [
    "a) CASE WHEN salaire >= 5000 THEN 'Élevé' ELSE 'Normal' END",
    "b) CASE IF salaire >= 5000 RETURN 'Élevé'",
    "c) WHEN CASE salaire >= 5000 THEN 'Élevé'",
    "d) CASE WHERE salaire >= 5000 SELECT 'Élevé'"
  ],
  correct: 0,
},
{
  question: "938) Dans un LEFT JOIN, les lignes de la table de gauche sans correspondance :",
  answers: [
    "a) Sont conservées",
    "b) Sont toujours supprimées",
    "c) Sont transformées en lignes de la table droite",
    "d) Provoquent une erreur"
  ],
  correct: 0,
},
{
  question: "939) Après un LEFT JOIN, les colonnes de la table droite sans correspondance valent généralement :",
  answers: [
    "a) 0",
    "b) Une chaîne vide",
    "c) NULL",
    "d) FALSE"
  ],
  correct: 2,
},
{
  question: "940) Pourquoi une condition sur la table droite dans WHERE peut-elle transformer un LEFT JOIN en comportement similaire à INNER JOIN ?",
  answers: [
    "a) Parce que WHERE peut éliminer les lignes contenant NULL côté droit",
    "b) Parce que LEFT JOIN devient automatiquement DELETE",
    "c) Parce que WHERE supprime la table droite",
    "d) Parce que JOIN ignore toujours NULL"
  ],
  correct: 0,
},
{
  question: "941) Pour conserver les lignes sans correspondance d'un LEFT JOIN tout en filtrant la table droite, il est souvent pertinent de placer la condition dans :",
  answers: [
    "a) ON",
    "b) SELECT",
    "c) GROUP BY",
    "d) ORDER BY"
  ],
  correct: 0,
},
{
  question: "942) Un INNER JOIN retourne principalement :",
  answers: [
    "a) Les lignes ayant une correspondance selon la condition de jointure",
    "b) Toutes les lignes de gauche uniquement",
    "c) Toutes les lignes des deux tables sans condition",
    "d) Les lignes sans correspondance uniquement"
  ],
  correct: 0,
},
{
  question: "943) Un CROSS JOIN produit :",
  answers: [
    "a) Le produit cartésien des deux tables",
    "b) Seulement les lignes correspondantes",
    "c) Seulement les lignes NULL",
    "d) Une agrégation automatique"
  ],
  correct: 0,
},
{
  question: "944) Si une table contient 4 lignes et une autre 3 lignes, un CROSS JOIN peut produire :",
  answers: [
    "a) 7 lignes",
    "b) 12 lignes",
    "c) 4 lignes",
    "d) 3 lignes"
  ],
  correct: 1,
},
{
  question: "945) Un index composite sur (nom, prenom) est particulièrement utile pour des recherches commençant par :",
  answers: [
    "a) nom",
    "b) prenom uniquement",
    "c) une colonne totalement différente",
    "d) aucune colonne"
  ],
  correct: 0,
},
{
  question: "946) Dans un index composite (A, B), une requête filtrant principalement sur B seul :",
  answers: [
    "a) Peut ne pas exploiter efficacement l'index selon le SGBD et le plan d'exécution",
    "b) Utilise toujours parfaitement l'index",
    "c) Supprime automatiquement l'index",
    "d) Rend obligatoirement la requête syntaxiquement invalide"
  ],
  correct: 0,
},
{
  question: "947) Un index peut améliorer les SELECT mais peut aussi :",
  answers: [
    "a) Augmenter le coût de certaines opérations INSERT/UPDATE/DELETE",
    "b) Supprimer les contraintes",
    "c) Empêcher toute lecture",
    "d) Remplacer toutes les jointures"
  ],
  correct: 0,
},
{
  question: "948) EXPLAIN est principalement utilisé pour :",
  answers: [
    "a) Examiner le plan d'exécution d'une requête",
    "b) Créer une base de données",
    "c) Chiffrer les données",
    "d) Modifier automatiquement toutes les tables"
  ],
  correct: 0,
},
{
  question: "949) Pour améliorer une requête lente, quelle approche est généralement pertinente ?",
  answers: [
    "a) Examiner le plan d'exécution et les index",
    "b) Ajouter systématiquement tous les index possibles",
    "c) Supprimer systématiquement toutes les contraintes",
    "d) Remplacer SELECT par DELETE"
  ],
  correct: 0,
},
{
  question: "950) Le principe du moindre privilège en sécurité SQL consiste à :",
  answers: [
    "a) Donner à chaque utilisateur uniquement les droits nécessaires",
    "b) Donner tous les droits à tous les utilisateurs",
    "c) Interdire toute lecture des données",
    "d) Donner uniquement le privilège DELETE"
  ],
  correct: 0,
},
{
  question: "951) Quelle commande permet de supprimer une vue ?",
  answers: [
    "a) DELETE VIEW",
    "b) DROP VIEW",
    "c) REMOVE VIEW",
    "d) DELETE TABLE VIEW"
  ],
  correct: 1,
},
{
  question: "952) Une vue SQL est principalement :",
  answers: [
    "a) Une table virtuelle basée sur une requête",
    "b) Un index physique",
    "c) Une clé primaire",
    "d) Une procédure stockée obligatoire"
  ],
  correct: 0,
},
{
  question: "953) Quelle commande permet de créer une vue ?",
  answers: [
    "a) CREATE VIEW",
    "b) MAKE VIEW",
    "c) NEW VIEW",
    "d) BUILD VIEW"
  ],
  correct: 0,
},
{
  question: "954) Une vue peut servir notamment à :",
  answers: [
    "a) Simplifier des requêtes et contrôler l'accès aux données",
    "b) Remplacer systématiquement les clés primaires",
    "c) Supprimer toutes les contraintes",
    "d) Désactiver les transactions"
  ],
  correct: 0,
},
{
  question: "955) Quelle instruction permet d'accorder un privilège à un utilisateur ?",
  answers: [
    "a) GRANT",
    "b) ALLOW",
    "c) PERMIT",
    "d) GIVE"
  ],
  correct: 0,
},
{
  question: "956) Quelle instruction permet de retirer un privilège ?",
  answers: [
    "a) REMOVE",
    "b) DELETE",
    "c) REVOKE",
    "d) DENYALL"
  ],
  correct: 2,
},
{
  question: "957) Quelle instruction est correcte pour accorder SELECT sur une table ?",
  answers: [
    "a) GRANT SELECT ON Client TO user1;",
    "b) GIVE SELECT Client TO user1;",
    "c) ALLOW SELECT Client FOR user1;",
    "d) PERMIT Client SELECT user1;"
  ],
  correct: 0,
},
{
  question: "958) Le rôle d'un SGBD dans la gestion des transactions est notamment de garantir :",
  answers: [
    "a) La cohérence et l'intégrité des opérations",
    "b) La suppression automatique des tables",
    "c) L'absence totale de verrous",
    "d) L'absence de concurrence"
  ],
  correct: 0,
},
{
  question: "959) Quelle commande valide définitivement une transaction ?",
  answers: [
    "a) SAVE",
    "b) COMMIT",
    "c) APPLY",
    "d) CONFIRM"
  ],
  correct: 1,
},
{
  question: "960) Quelle commande annule les modifications non validées d'une transaction ?",
  answers: [
    "a) CANCEL",
    "b) UNDO",
    "c) ROLLBACK",
    "d) REVERSE"
  ],
  correct: 2,
},
{
  question: "961) SAVEPOINT permet principalement de :",
  answers: [
    "a) Définir un point intermédiaire auquel on peut revenir dans une transaction",
    "b) Sauvegarder définitivement toute la base",
    "c) Créer une copie physique de la table",
    "d) Créer un index"
  ],
  correct: 0,
},
{
  question: "962) Quelle instruction permet de revenir à un point de sauvegarde nommé SP1 ?",
  answers: [
    "a) ROLLBACK TO SP1",
    "b) RETURN SP1",
    "c) BACK TO SP1",
    "d) UNDO SP1"
  ],
  correct: 0,
},
{
  question: "963) Dans ACID, la lettre A signifie :",
  answers: [
    "a) Atomicité",
    "b) Autorisation",
    "c) Accessibilité",
    "d) Automatisation"
  ],
  correct: 0,
},
{
  question: "964) Dans ACID, la lettre C signifie :",
  answers: [
    "a) Connexion",
    "b) Cohérence",
    "c) Compression",
    "d) Contrôle"
  ],
  correct: 1,
},
{
  question: "965) Dans ACID, la lettre I signifie :",
  answers: [
    "a) Intégrité",
    "b) Isolation",
    "c) Indexation",
    "d) Identification"
  ],
  correct: 1,
},
{
  question: "966) Dans ACID, la lettre D signifie :",
  answers: [
    "a) Distribution",
    "b) Dépendance",
    "c) Durabilité",
    "d) Déduplication"
  ],
  correct: 2,
},
{
  question: "967) Une lecture sale (dirty read) correspond à la lecture :",
  answers: [
    "a) De données modifiées par une transaction mais pas encore validées",
    "b) De données supprimées depuis plusieurs années",
    "c) D'une table sans index",
    "d) D'une valeur NULL"
  ],
  correct: 0,
},
{
  question: "968) Une lecture non répétable se produit lorsqu'une même requête dans une transaction :",
  answers: [
    "a) Retourne des valeurs différentes à cause d'une modification validée par une autre transaction",
    "b) Retourne toujours exactement le même résultat",
    "c) Ne retourne aucune ligne à cause d'un index",
    "d) Produit systématiquement une erreur de syntaxe"
  ],
  correct: 0,
},
{
  question: "969) Une lecture fantôme (phantom read) concerne principalement :",
  answers: [
    "a) L'apparition ou la disparition de lignes correspondant à une condition lors de lectures répétées",
    "b) Une valeur NULL dans une colonne",
    "c) Une clé primaire dupliquée",
    "d) Une erreur de conversion"
  ],
  correct: 0,
},
{
  question: "970) Parmi les niveaux d'isolation SQL courants, lequel permet le moins d'isolation ?",
  answers: [
    "a) SERIALIZABLE",
    "b) REPEATABLE READ",
    "c) READ COMMITTED",
    "d) READ UNCOMMITTED"
  ],
  correct: 3,
},
{
  question: "971) Quel niveau d'isolation est généralement considéré comme le plus strict ?",
  answers: [
    "a) READ UNCOMMITTED",
    "b) READ COMMITTED",
    "c) REPEATABLE READ",
    "d) SERIALIZABLE"
  ],
  correct: 3,
},
{
  question: "972) Un deadlock se produit lorsque :",
  answers: [
    "a) Deux transactions ou plus s'attendent mutuellement sur des ressources verrouillées",
    "b) Une table contient une clé primaire",
    "c) Une requête utilise GROUP BY",
    "d) Une base contient plusieurs utilisateurs"
  ],
  correct: 0,
},
{
  question: "973) Pour limiter le risque de deadlock, on peut notamment :",
  answers: [
    "a) Accéder aux ressources dans un ordre cohérent",
    "b) Ajouter des colonnes NULL",
    "c) Supprimer toutes les clés primaires",
    "d) Utiliser uniquement SELECT *"
  ],
  correct: 0,
},
{
  question: "974) Une contrainte UNIQUE sert principalement à :",
  answers: [
    "a) Empêcher les doublons dans une colonne ou un ensemble de colonnes",
    "b) Empêcher toutes les valeurs NULL dans tous les cas",
    "c) Créer une transaction",
    "d) Supprimer les lignes identiques"
  ],
  correct: 0,
},
{
  question: "975) Une contrainte CHECK permet principalement de :",
  answers: [
    "a) Imposer une condition sur les valeurs d'une colonne ou d'une ligne",
    "b) Créer automatiquement une clé étrangère",
    "c) Accélérer toutes les requêtes",
    "d) Créer un utilisateur"
  ],
  correct: 0,
},
{
  question: "976) Quelle définition interdit généralement les salaires négatifs ?",
  answers: [
    "a) salaire DECIMAL CHECK (salaire >= 0)",
    "b) salaire DECIMAL UNIQUE (-1)",
    "c) salaire DECIMAL FOREIGN KEY",
    "d) salaire DECIMAL DEFAULT NEGATIVE"
  ],
  correct: 0,
},
{
  question: "977) Une contrainte NOT NULL signifie que :",
  answers: [
    "a) La colonne ne peut pas contenir NULL",
    "b) La colonne ne peut pas contenir zéro",
    "c) La colonne doit être unique",
    "d) La colonne doit être une clé primaire"
  ],
  correct: 0,
},
{
  question: "978) Une clé étrangère sert principalement à :",
  answers: [
    "a) Maintenir une relation et l'intégrité référentielle entre tables",
    "b) Trier automatiquement les données",
    "c) Chiffrer une colonne",
    "d) Remplacer tous les index"
  ],
  correct: 0,
},
{
  question: "979) Une violation de clé étrangère peut notamment se produire lorsqu'on :",
  answers: [
    "a) Insère une valeur qui ne correspond à aucune clé référencée",
    "b) Utilise ORDER BY",
    "c) Utilise COUNT()",
    "d) Crée un alias"
  ],
  correct: 0,
},
{
  question: "980) La normalisation d'une base de données vise notamment à :",
  answers: [
    "a) Réduire les redondances et anomalies de données",
    "b) Augmenter volontairement tous les doublons",
    "c) Supprimer toutes les relations",
    "d) Éviter l'utilisation des clés"
  ],
  correct: 0,
},
{
  question: "981) Une table est généralement en première forme normale (1NF) lorsque :",
  answers: [
    "a) Les valeurs des attributs sont atomiques et les groupes répétitifs sont éliminés",
    "b) Toutes les tables possèdent exactement deux colonnes",
    "c) Toutes les colonnes sont numériques",
    "d) Elle ne possède aucune clé"
  ],
  correct: 0,
},
{
  question: "982) La deuxième forme normale (2NF) concerne notamment l'élimination :",
  answers: [
    "a) Des dépendances partielles par rapport à une clé composite",
    "b) De toutes les clés étrangères",
    "c) De toutes les valeurs NULL",
    "d) De tous les index"
  ],
  correct: 0,
},
{
  question: "983) La troisième forme normale (3NF) vise notamment à éliminer :",
  answers: [
    "a) Les dépendances transitives inappropriées",
    "b) Toutes les clés primaires",
    "c) Toutes les relations 1-N",
    "d) Toutes les contraintes CHECK"
  ],
  correct: 0,
},
{
  question: "984) Quelle opération combine les résultats de deux SELECT en supprimant généralement les doublons ?",
  answers: [
    "a) UNION",
    "b) JOIN",
    "c) MERGE",
    "d) COMBINE"
  ],
  correct: 0,
},
{
  question: "985) Quelle différence principale existe entre UNION et UNION ALL ?",
  answers: [
    "a) UNION élimine généralement les doublons, UNION ALL les conserve",
    "b) UNION conserve toujours les doublons, UNION ALL les supprime",
    "c) UNION fonctionne uniquement avec trois tables",
    "d) UNION ALL ne peut pas être utilisé avec SELECT"
  ],
  correct: 0,
},
{
  question: "986) Pour utiliser UNION entre deux requêtes SELECT, les résultats doivent notamment avoir :",
  answers: [
    "a) Un nombre compatible de colonnes et des types compatibles",
    "b) Exactement les mêmes noms de tables",
    "c) Exactement les mêmes noms de colonnes obligatoirement",
    "d) Une clé primaire identique"
  ],
  correct: 0,
},
{
  question: "987) INTERSECT permet généralement de retourner :",
  answers: [
    "a) Les lignes communes aux deux résultats",
    "b) Toutes les lignes du premier résultat uniquement",
    "c) Les lignes uniquement présentes dans le premier résultat",
    "d) Le produit cartésien"
  ],
  correct: 0,
},
{
  question: "988) EXCEPT permet généralement de retourner :",
  answers: [
    "a) Les lignes du premier résultat qui ne sont pas dans le second",
    "b) Les lignes communes aux deux résultats",
    "c) Toutes les lignes des deux résultats avec doublons",
    "d) Les colonnes communes"
  ],
  correct: 0,
},
{
  question: "989) Quelle fonction permet de compter toutes les lignes, y compris celles contenant NULL dans certaines colonnes ?",
  answers: [
    "a) COUNT(*)",
    "b) COUNT(NULL)",
    "c) COUNT_EMPTY()",
    "d) TOTAL_ROWS_ONLY()"
  ],
  correct: 0,
},
{
  question: "990) Quelle différence existe entre COUNT(*) et COUNT(colonne) ?",
  answers: [
    "a) COUNT(colonne) ne compte généralement pas les NULL de cette colonne, alors que COUNT(*) compte les lignes",
    "b) COUNT(*) ignore toutes les lignes",
    "c) COUNT(colonne) compte toujours les NULL",
    "d) Il n'existe aucune différence"
  ],
  correct: 0,
},
{
  question: "991) Quelle fonction retourne la plus grande valeur d'un ensemble ?",
  answers: [
    "a) HIGH()",
    "b) MAX()",
    "c) TOP()",
    "d) LARGEST()"
  ],
  correct: 1,
},
{
  question: "992) Quelle fonction retourne la plus petite valeur d'un ensemble ?",
  answers: [
    "a) MIN()",
    "b) LOW()",
    "c) SMALLEST()",
    "d) BOTTOM()"
  ],
  correct: 0,
},
{
  question: "993) Quelle fonction calcule la moyenne arithmétique ?",
  answers: [
    "a) MEAN()",
    "b) AVG()",
    "c) AVERAGE_VALUE()",
    "d) MID()"
  ],
  correct: 1,
},
{
  question: "994) Quelle clause filtre les groupes après une agrégation ?",
  answers: [
    "a) WHERE",
    "b) FILTER",
    "c) HAVING",
    "d) GROUPFILTER"
  ],
  correct: 2,
},
{
  question: "995) Quelle clause filtre normalement les lignes avant GROUP BY ?",
  answers: [
    "a) HAVING",
    "b) WHERE",
    "c) AFTER GROUP",
    "d) FILTER GROUP"
  ],
  correct: 1,
},
{
  question: "996) Dans l'ordre logique d'exécution d'une requête SQL, quelle opération intervient généralement avant GROUP BY ?",
  answers: [
    "a) WHERE",
    "b) SELECT",
    "c) ORDER BY",
    "d) LIMIT"
  ],
  correct: 0,
},
{
  question: "997) Quel est l'objectif principal d'une requête préparée dans une application ?",
  answers: [
    "a) Séparer la structure SQL des valeurs fournies et réduire notamment le risque d'injection SQL",
    "b) Supprimer automatiquement les index",
    "c) Remplacer les transactions",
    "d) Créer automatiquement une base de données"
  ],
  correct: 0,
},
{
  question: "998) Une injection SQL consiste notamment à :",
  answers: [
    "a) Faire interpréter une entrée utilisateur comme une partie non prévue de la requête SQL",
    "b) Ajouter un index à une table",
    "c) Normaliser une base",
    "d) Créer une vue"
  ],
  correct: 0,
},
{
  question: "999) Quelle pratique réduit fortement le risque d'injection SQL ?",
  answers: [
    "a) Construire les requêtes par concaténation de toutes les entrées utilisateur",
    "b) Utiliser des requêtes préparées avec paramètres",
    "c) Donner les droits administrateur à tous les utilisateurs",
    "d) Désactiver toutes les contraintes"
  ],
  correct: 1,
},
{
  question: "1000) Quelle affirmation résume correctement le rôle du SQL ?",
  answers: [
    "a) SQL sert uniquement à créer des pages web",
    "b) SQL est un langage utilisé pour interroger et manipuler des données dans des bases relationnelles",
    "c) SQL est uniquement un langage de programmation système",
    "d) SQL sert uniquement à configurer les réseaux"
  ],
  correct: 1,
},
];

let index = 0;
let score = 0;

function loadQuestion() {
  const q = questions[index];
  const questionEl = document.getElementById("question");
  const answersDiv = document.getElementById("answers");
  questionEl.innerText = q.question;
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const li = document.createElement("li");
    li.innerText = answer;
    li.style.cursor = "pointer";
    li.style.padding = "8px 12px";
    li.style.borderRadius = "5px";
    li.style.marginBottom = "8px";
    li.style.background = "#f0f0f0";
    li.style.transition = "background 0.3s";

    li.addEventListener("click", () => {
      // feedback بصري مباشر
      if (i === q.correct) {
        li.style.background = "#dcfce7"; // أخضر
        score += 1;
      } else {
        li.style.background = "#fee2e2"; // أحمر
        score -= 1;
      }

      document.getElementById("result").innerText = `Score actuel: ${score}`;
    });

    answersDiv.appendChild(li);
  });
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById(
      "result"
    ).innerText = `Quiz terminé ! Score final: ${score}`;
  }
}

window.onload = loadQuestion;
