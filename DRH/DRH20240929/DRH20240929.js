const questions = [
  {
    question:
      "1) La date de la mise en œuvre de la nouvelle loi de l'organisation judiciaire :",
    answers: [
      "Janvier 2021",
      "Javier 2022",
      "Janvier 2023",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "2) L'administration central du Ministère de la Justice est dotée de :",
    answers: [
      "Cinq Directions Centrales",
      "Neuf Directions Centrales",
      "Huit Directions Centrales",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "3) Selon le décret 2.23.665 relatif à la nouvelle carte judiciaire du royaume, les tribunaux de commerce sont au nombre de:",
    answers: [
      "Sept tribunaux",
      "Huit tribunaux",
      "Neuf tribunaux",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "4) Le Premier Président de la Cour de Cassation est:",
    answers: [
      "Le Président du Ministère Public",
      "Le Ministre de la Justice",
      "Le Président du Conseil Supérieur du Pouvoir Judiciaire",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "5) Qu'est-ce que la B2B ?",
    answers: [
      "Une pratique commerciale Internet s'adressant aux particuliers",
      "Une connexion directe entre deux ordinateurs",
      "Une pratique commerciale Internet s'adressant aux entreprises",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "6) IIS signifie ...............?",
    answers: [
      "Information Intranet Services",
      "Internet Information Système",
      "Intranet Information Server",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "7) Qu'est-ce que le SMTP?",
    answers: [
      "Un protocole de transmission de courrier électronique",
      "Un protocole de réception de courrier électronique sécurisé",
      "Un protocole réseau pour internet",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "8) La GED est:",
    answers: [
      "Un système informatisé d'acquisition de documents",
      "Un système informatisé de gestion financière",
      "Un système d'archivage de documents",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "9) Quel énoncé est faux à propos de Web Service?",
    answers: [
      "Il est invoqué dynamiquement par d'autres services",
      "Il est encapsulé dans une couche de standards dérivés du langage XML",
      "Un Web Service est un composant complexe implémenté dans un langage précis",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "10) Quel est le numéro de port tep par défaut de https?",
    answers: ["80", "1024", "227", "Toutes les réponses sont fausses"],
    correct: 3,
  },
  {
    question: "11) Les fichiers Vues (view) dans Laravel se termine par:",
    answers: ["blade.php", "blade", "view", "Toutes les réponses fausses"],
    correct: 0,
  },
  {
    question: "12) Qu'est-ce qu'un trigger (un déclencheur)?",
    answers: [
      "Un Easter Egg permettant de démarrer un jeu accessible via la connexion à la base de données",
      "Ce concept n'existe pas en SQL.",
      "Une technique pour optimiser la vitesse d'accès aux données.",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "13) Dans la méthode Merise le concept de synchronisation est relatif au?",
    answers: [
      "Diagramme de flux",
      "MCT",
      "MLD",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "14) Qu'est-ce qui représente un attribut dans une base de données relationnelle ?",
    answers: ["Colonne", "Ligne", "Objet", "Toutes les réponses sont fausses"],
    correct: 0,
  },
  {
    question: "15) Un logiciel open-source est:",
    answers: [
      "Logiciel gratuit",
      "Logiciel propriétaire",
      "Logiciel dont on peut obtenir le code source",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "16) Quel est le nombre de colonnes par défaut dans le système de grille de Bootstrap?",
    answers: ["6", "8", "12", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question:
      "17) Quelle propriété permet d'activer la numérotation automatique d'un champ?",
    answers: [
      "AUTO_NUM",
      "AUTO_INCREMENT",
      "INCREMENT",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "18) Lequel des outils suivant n'est pas un IDE:",
    answers: [
      "Eclipse",
      "Apache",
      "Visual studio",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "19) Comment valider une transaction (SQL)?",
    answers: [
      "SAVE TRANSACTION",
      "END TRANSACTION",
      "COMMIT",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "20) Quel est le type de jointure SQL, valide ?",
    answers: [
      "JOINER",
      "INNER JOIN",
      "LEFT RIGHT JOIN",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "21) Lequel des diagrammes suivant ne fait pas partie des diagrammes UML (Unified Modeling Language)?",
    answers: [
      "Diagramme de classe",
      "Diagramme de Gantt",
      "Diagramme de séquence",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "22) En orienté objet, le terme «design patterns» se traduit par des :",
    answers: [
      "Entités graphiques",
      "Patrons de conception",
      "Dessins de caractères",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "23) AJAX peut servir à:",
    answers: [
      "Exécuter des contrôles ActiveX",
      "Interroger un serveur web via requêtes XML ou JSON",
      "Exécuter JavaScript sur un serveur",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "24) Quel résultat affiche le code suivant? <?php $var = 'false'; If ($var) (echo 'true';) Else (echo 'false') ?>",
    answers: ["True", "False", "Error", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question:
      "25) Dans Java, une classe peut hériter de plusieurs classes mères en même temps:",
    answers: [
      "Qui",
      "Qui depuis la version 5.0",
      "Non",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "26) Comment fusionner les cellules horizontales d'un tableau ?",
    answers: [
      "En supprimant la balise <tr>",
      "Avec la balise <colspan>",
      "Avec la balise <hr>",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      '27) Quelle directive du php.ini peut empêcher la création de "sessions" avec session_start()?',
    answers: [
      'Session="0"',
      'Session_PHP="0"',
      'session.auto_start="0"',
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "28) La balise HTML qui spécifie un style CSS intégré dans un élément est appelée ?",
    answers: ["Design", "Style", "Modify", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question:
      "29) En CSS, si vous voulez ajouter une marge entre la bordure d'une DIV et son texte intérieur, on utilise la propriété:",
    answers: [
      "Spacing",
      "Padding",
      "Margin",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "30) PERT et GANTT sont:",
    answers: [
      "Des langages",
      "Des outils de planification",
      "Des protocoles internet",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "31) Quelle est la principale différence entre une classe abstraite et une interface en Java?",
    answers: [
      "Une interface peut avoir des méthodes implémentées, une classe abstraite ne peut pas.",
      "Une classe abstraite peut avoir des méthodes implémentées, une interface ne peut avoir que des méthodes abstraites.",
      "Une classe abstraite ne peut pas avoir de constructeur, une interface peut",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "32) Quelle est la syntaxe correcte pour créer une nouvelle classe en C#?",
    answers: [
      "New class myclass []",
      "Class MyClass[]",
      "MyClass class []",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "33) Quel est le but principal d'un ORM en développement logiciel ?",
    answers: [
      "Optimiser le code JavaScript",
      "Mapper les objets en base de données relationnelle",
      "Sécuriser les applications web",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "34) Angular Js est basé sur .................?",
    answers: [
      "Architecture MVC",
      "Architecture MVVM",
      "Pattern Observer",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "35) En java une classe qui implémente une interface doit:",
    answers: [
      "Implémenter le constructeur de l'interface",
      "Implémenter les méthodes utiles de l'interface",
      "Implémenter toutes les méthodes définies dans cette interface",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      '36) Pour afficher que les classes de 30 élèves dans l\'instruction suivante en SQL: "Select lib classe, count(*) from v classe eleve group by lib_classe"',
    answers: [
      "Ajouter la clause having count (*)>30 après de group by",
      "Ajouter la clause where count (*)>30 après de group by",
      "Ajouter la clause count (*)>30 après le where",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "37) Pour améliorer le référencement d'un site, on peut utiliser:",
    answers: [
      "Un titre décrit dans l'en tête de la page web entre les balises<Title> et </Title>",
      "Un contenu transparent » qui comporte un maximum de texte, indexable par les moteurs",
      "Indiquer en début de page HTML (body) le nom des principaux moteurs de recherche",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "38) Quelle commande est utilisée pour supprimer une table existante ?",
    answers: [
      "DROP TABLE",
      "DELETE",
      "Les deux: 'DROP TABLE' et 'DELETE'",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "39) Quels sont les résultats des requêtes suivantes si 'ville' est une colonne déclarie INTEGER? SELECT FROM table villes WHERE ville = '8' SELECT FROM table villes WHERE ville = 8",
    answers: [
      "Les deux sont identiques",
      "La première requête génère une erreur",
      "La deuxième requête génère une erreur",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "40) Quelle est la syntaxe correcte pour faire référence à un script externe appelé - myscript.js",
    answers: [
      '<script href="myscript.js">',
      '<script name="myscript.js">',
      '<script src="myscript.js">',
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "41) Comment écrire une condition IF pour vérifier si «var» n'est PAS égal à 2 en JavaScript?",
    answers: [
      "if var <> 2",
      "if (var != 2)",
      "if (var <> 2)",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "42) Quelle est la syntaxe correcte pour vérifier la valeur de en JavaScript?",
    answers: [
      'if (c == "XYZ") then {} else {}',
      'if (c = "XYZ") then {} else {}',
      'if (c == "XYZ") {} else {}',
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "43) Quelle méthode renvoie les caractères d'une chaîne comprise entre l'indice de départ et un certain nombre de caractères en JavaScript?",
    answers: [
      "substr()",
      "getSubstring()",
      "slice()",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: '44) Si str = "VWXYZ", que retourne <<str.charAt(3)?>',
    answers: ["X", "Y", "Z", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "45) Qu'est-ce qu'un View dans MVC?",
    answers: [
      "View est responsable d'agir et de traiter les données.",
      "View représente une vue de base de données.",
      "View est responsable de l'affichage des données à l'utilisateur.",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "46) Quelle directive initialise une application AngularJS?",
    answers: ["ng-init", "ng-app", "ngSre", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "47) Lequel des éléments suivants est un concept POO en Java?",
    answers: [
      "Héritage",
      "Polymorphisme",
      "Encapsulation",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1, 2],
  },
  {
    question: "48) XML:",
    answers: [
      "Est un format de description de données",
      "Ne permet pas de séparer le contenu de la présentation",
      "N'est pas portable d'une plateforme à une autre",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      '49) Qu\'est ce que va afficher le code Cif suivant? int i= 10; for(::) { Console.Write( i + " "); if (i >= -5) 1 -= 2; else break: }',
    answers: [
      "1086420",
      "1086420-4-8",
      "1086420-2-4-6",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "50) Quel est le tag à utiliser pour placer une image?",
    answers: [
      '<image src="" alt="">',
      '<img source="" alt="">',
      '<img src="" alt="">',
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "51) Quel diagramme permet d'illustrer un cas réel en représentant les liens entre les instances",
    answers: [
      "Diagramme de cas d'utilisation",
      "Diagramme de collaboration",
      "Diagramme d'objets",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "52) Dans une base de données relationnelle, on souhaite connaître tous les enregistrements de la table COMMANDE pour laquelle il n'y a aucun client:",
    answers: [
      "Select from COMMANDE where all client is null",
      "Select from COMMANDE where num client is null",
      "Select from CLIENT where num_com NOT IN (select num nom from CLIENT)",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "53) Quel diagramme permet de représenter les détails d'un cas d'utilisation?",
    answers: [
      "Diagramme de cas d'utilisation",
      "Diagramme de séquence",
      "Diagramme d'objets",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "54) Lequel des serveurs web suivant traitent les demandes Client entrantes sur la base des évènements ?",
    answers: ["Apache", "IIS", "NGINX", "Toutes les réponses sont faussesa"],
    correct: 2,
  },
  {
    question:
      "55) Lequel des outils suivants n'est pas un outil de gestion des versions ?",
    answers: [
      "Bitbucket",
      "Microsoft Azure Backup",
      "Jira",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "56) Quelle est la commande utilisée pour installer un projet laravel?",
    answers: [
      "Composer create-project laravel/laravel monprojet",
      "Composer new-project laravel/laravel monprojet",
      "Composer create new laravel/laravel monprojet",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "57) Laquelle(s) des méthodes suivante est utilisé dans le Framework symfony?",
    answers: [
      "Auth::logout()",
      "Auth::check()",
      "AUtherther()",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "58) Dans symfony quel est le rôle du composant Finder ?",
    answers: [
      "Offre des classes courantes pour la recherche de fichiers et de dossiers dans un chemin  d'accès donné",
      "Fournit de nombreuses méthodes pour définir les critères de recherche",
      "Recherche les fichiers et répertoires en fonction de différents critères",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "59) Quel énoncé est faux concernant la différence entre MERISE et UML?",
    answers: [
      "Merise est une méthode d'analyse, de conception et de gestion de projet intégrée",
      "UML est un langage permettant d'utiliser toute  méthode orientée objet",
      "Merise est beaucoup plus vaste et s'intéresse aux techniques de modélisation des données autant que des traitements dans le paradigme objet",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "60) Quel design pattern fournit une interface unifiée facile à utiliser pour un ensemble d'interfaces dans un sous système ?",
    answers: [
      "Prototype",
      "Iterator",
      "Observer",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
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
      // نحولو correct إلى array إلا ماكانش array
      const correctAnswers = Array.isArray(q.correct) ? q.correct : [q.correct];

      if (correctAnswers.includes(i)) {
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
