const questions = [
  {
    question:
      "1) Pour améliorer le référencement d'un site, on peut utiliser :",
    answers: [
      "Un titre décrit dans l'en-tête de la page web entre les balises <Title> et </Title>",
      "Un contenu « transparent » qui comporte un maximum de texte, indexable par les moteurs",
      "Utiliser des balises META",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "2) Ajax permet de :",
    answers: [
      "Sécuriser la page web",
      "Actualiser la page web sans rechargement total",
      "Appliquer du style à la page web",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "3) Quelle mesure de sécurité est essentielle pour se protéger contre les injections SQL dans une application .NET Core ?",
    answers: [
      "Désactiver les fonctionnalités SQL avancées",
      "Utiliser des requêtes paramétrées ou un ORM comme Entity Framework avec des paramètres",
      "Encoder les entrées utilisateur avec HTML encoding",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question: "4) PERT et GANTT sont des :",
    answers: [
      "Langages de programmation",
      "Outils de planification",
      "Protocoles internet",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question: "5) Qu'est-ce qu'une fonction récursive ?",
    answers: [
      "Une fonction qui s'appelle elle-même",
      "Une fonction sans nom",
      "Une fonction qui ne retourne rien",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "6) Quel diagramme UML permet de représenter la structure statique d'un système ?",
    answers: [
      "Diagramme de séquence",
      "Diagramme de cas d'utilisation",
      "Diagramme de classes",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "7) Quel diagramme UML montre les interactions entre objets dans le temps ?",
    answers: [
      "Diagramme de classes",
      "Diagramme de séquence",
      "Diagramme de composants",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "8) Dans un diagramme de cas d'utilisation, que représente un acteur ?",
    answers: [
      "Une classe",
      "Un objet interne au système",
      "Un utilisateur ou système externe",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "9) Quel symbole représente un cas d'utilisation ?",
    answers: [
      "Un rectangle",
      "Une flèche",
      "Un ovale",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "10) Quel type de relation UML représente un héritage ?",
    answers: [
      "Agrégation",
      "Composition",
      "Généralisation",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "11) Quelle clause est utilisée avec GROUP BY pour filtrer les groupes ?",
    answers: [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question: "12) En Java, quelle est la classe mère de toutes les classes ?",
    answers: ["Class", "Object", "Root", "Toutes les réponses sont fausses"],
    correct: 1,
  },

  {
    question: "13) Quel est le résultat de typeof [] en JavaScript ?",
    answers: ["array", "object", "list", "Toutes les réponses sont fausses"],
    correct: 1,
  },

  {
    question: "14) Quelle est la particularité d'un trigger ?",
    answers: [
      "Il est exécuté manuellement",
      "Il est exécuté automatiquement lors d'un événement",
      "Il remplace une procédure stockée",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "15) Que représentent les tables inserted et deleted dans un trigger ?",
    answers: [
      "Des tables physiques",
      "Des vues système",
      "Des tables temporaires logiques",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "16) Sur quels événements un trigger peut-il être déclenché ?",
    answers: [
      "SELECT",
      "INSERT, UPDATE, DELETE",
      "CREATE",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question: "17) Qu'est-ce qu'un compilateur ?",
    answers: [
      "Un traducteur de code vers le langage machine",
      "Un outil de dessin",
      "Un serveur",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question: "18) Quel design pattern assure une instance unique ?",
    answers: [
      "Singleton",
      "Factory",
      "Observer",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "19) Quelle instruction permet d'exécuter une procédure stockée ?",
    answers: ["RUN", "CALL", "EXEC", "Toutes les réponses sont fausses"],
    correct: 2,
  },

  {
    question:
      "20) En PHP, comment accède-t-on à une variable passée en paramètre d'URL ?",
    answers: ["$_GET", "$_POST", "SURL", "Toutes les réponses sont fausses"],
    correct: 0,
  },

  {
    question:
      "21) Quelle balise HTML est utilisée pour une liste non ordonnée ?",
    answers: ["<ul>", "<ol>", "<li>", "Toutes les réponses sont fausses"],
    correct: 0,
  },

  {
    question: "22) Qu'est-ce que MVC dans ASP.NET ?",
    answers: [
      "Most Valuable Component",
      "Multiple View Controller",
      "Model-View-Controller",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "23) Dans ASP.NET MVC, quel composant est responsable de la logique métier ?",
    answers: [
      "Le Controller",
      "La View",
      "Le Model",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "24) Que signifie l'acronyme DOM ?",
    answers: [
      "Document Object Model",
      "Data Object Management",
      "Digital Output Module",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "25) Quelle est la différence entre une interface et une classe abstraite en JAVA ?",
    answers: [
      "Une interface peut avoir des méthodes implémentées, une classe abstraite ne peut pas.",
      "Une classe abstraite ne peut pas avoir de constructeur, une interface peut",
      "Une classe abstraite peut avoir des méthodes implémentées, une interface ne peut avoir que des méthodes abstraites",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "26) En Python, quelle fonction permet d'obtenir la longueur d'une chaîne ?",
    answers: [
      "len()",
      "length()",
      "count()",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "27) Quelle est la syntaxe correcte pour déclarer une variable dans C# ?",
    answers: [
      "var x: 10;",
      "int x = 10;",
      "x = int 10;",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "28) Quel mot-clé permet de restreindre l'accès à un attribut à la classe uniquement (ex. Java, PHP) ?",
    answers: [
      "static",
      "protected",
      "private",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "29) Quelle est la bonne syntaxe d'une condition if en C# ?",
    answers: [
      "if x>5 then",
      "if (x>5) {}",
      "if x>5 {}",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "30) Quel langage est principalement utilisé pour le développement iOS natif ?",
    answers: ["Kotlin", "Swift", "Ruby", "Toutes les réponses sont fausses"],
    correct: 1,
  },

  {
    question:
      "31) Quelle requête sélectionne les clients dont le nom contient 'samir' ?",
    answers: [
      "SELECT * FROM clients WHERE nom LIKE '%samir%'",
      "SELECT * FROM clients WHERE nom CONTAINS 'samir'",
      "SELECT * FROM clients WHERE nom HAS 'samir'",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "32) Quelle requête met à jour le prix de tous les produits d'une catégorie ?",
    answers: [
      "MODIFY produits SET prix = 50 WHERE categorie = 'électronique'",
      "UPDATE produits SET prix = 50 WHERE categorie = 'électronique'",
      "CHANGE produits SET prix = 50 WHERE categorie = 'électronique'",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question: "33) Quelle commande crée un nouvel index sur une colonne ?",
    answers: [
      "ADD INDEX idx_nom ON clients(nom)",
      "CREATE INDEX idx_nom ON clients(nom)",
      "MAKE INDEX idx_nom ON clients(nom)",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "34) Quel type de contrainte garantit que les valeurs d'une colonne sont uniques et non NULL ?",
    answers: [
      "FOREIGN KEY",
      "CHECK",
      "PRIMARY KEY",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "35) Quelle sous-requête est syntaxiquement correcte ?",
    answers: [
      "SELECT nom FROM clients WHERE ville = (SELECT ville FROM villes WHERE pays = 'Maroc')",
      "SELECT nom FROM clients WHERE ville = SELECT ville FROM villes WHERE pays = 'Maroc'",
      "SELECT nom FROM clients HAVING ville = (SELECT ville FROM villes WHERE pays = 'Maroc')",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "36) Quelle technologie côté serveur permet d'exécuter du code JavaScript sur le serveur ?",
    answers: ["NodeJS", "Python", "PHP", "Toutes les réponses sont fausses"],
    correct: 0,
  },

  {
    question:
      "37) Quelle fonction JavaScript est utilisée pour convertir une chaîne en nombre entier ?",
    answers: [
      "Number()",
      "toInteger()",
      "parseInt()",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "38) Quelle méthode JavaScript permet de sélectionner un élément par son identifiant ?",
    answers: [
      "document.querySelector()",
      "document.getElementById()",
      "document.getElementByClass()",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "39) Quelle méthode HTTP est utilisée pour envoyer des données à un serveur (comme un formulaire) ?",
    answers: ["GET", "PUT", "SEND", "Toutes les réponses sont fausses"],
    correct: 0,
  },

  {
    question: "40) Quelle visibilité UML est représentée par le symbole '+' ?",
    answers: [
      "Privée",
      "Protégée",
      "Publique",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "41) Quel est le rôle d'un constructeur ?",
    answers: [
      "Initialiser un objet",
      "Afficher des données",
      "Compiler la classe",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "42) Quel diagramme modélise le cycle de vie d'un objet et ses changements d'état ?",
    answers: [
      "Diagramme de séquence",
      "Diagramme d'état-transition",
      "Diagramme de communication",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "43) Quel fichier de configuration principal contient les paramètres d'un site Apache ?",
    answers: [
      "apache.cfg",
      "httpd.conf",
      "server.config",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question: "44) Qu'est-ce que le caching côté serveur peut améliorer ?",
    answers: [
      "La sécurité du site",
      "Les performances en réduisant les requêtes répétées",
      "Le design du site",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "45) Quelle structure de données suit le principe LIFO (Last In, First Out)?",
    answers: [
      "File (Queue)",
      "Pile (Stack)",
      "Liste chaînée",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "46) Quelle technique explore systématiquement toutes les solutions possibles à un problème ?",
    answers: [
      "Force brute (Brute Force)",
      "Diviser pour régner",
      "Programmation dynamique",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question: "47) Quelle méthode est le point d'entrée d'un programme Java ?",
    answers: [
      "start()",
      "init()",
      "main()",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "48) Quel type de variable est partagé entre toutes les instances d'une classe ?",
    answers: [
      "Instance variable",
      "Local variable",
      "Static variable",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "49) Quelle interface doit implémenter une classe pour être utilisable dans une boucle for-each ?",
    answers: [
      "Comparable",
      "Iterator",
      "Iterable",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "50) Qu'est-ce qu'Entity Framework ?",
    answers: [
      "Un framework de mapping relationnel-objet (ORM)",
      "Un framework de test unitaire",
      "Un framework de sécurité",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "51) Quelle interface permet d'implémenter le repository pattern avec Entity Framework ?",
    answers: [
      "IRepository",
      "IDbSet",
      "IQueryable",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question: "52) Quel outil permet de déboguer le code dans un IDE ?",
    answers: [
      "Compilateur",
      "Débogueur",
      "Profiler",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "53) Quel est le résultat de ce code JavaScript ? console.log(1+'2'+3);",
    answers: ["'123'", "6", "'15'", "Toutes les réponses sont fausses"],
    correct: 0,
  },

  {
    question:
      "54) Quel est le résultat de ce code Java ? int[] arr = {1,2,3}; System.out.println(arr[3]);",
    answers: [
      "3",
      "0",
      "Une erreur d'exécution",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question:
      "55) Quel est le résultat de ce code C ? int i=0; while(i<5){ if(i=3) break; printf('%d',i); i++; }",
    answers: ["012", "0123", "01234", "Toutes les réponses sont fausses"],
    correct: 3,
  },

  {
    question:
      "56) Quelle méthode de gestion de projet utilise un cycle de développement itératif et incrémental ?",
    answers: [
      "Cascade (Waterfall)",
      "Agile",
      "PRINCE2",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "57) Quel rôle est responsable de la gestion quotidienne d'une équipe Agile ?",
    answers: [
      "Product Owner",
      "Scrum Master",
      "Chef de projet",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "58) Quel document décrit comment le projet sera exécuté, surveillé et contrôlé ?",
    answers: [
      "Plan de management de projet",
      "Charte de projet",
      "Cahier des charges",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },

  {
    question:
      "59) Quelle plateforme web populaire utilise Git pour l'hébergement de code ?",
    answers: [
      "GitLab",
      "GitHub",
      "Bitbucket",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },

  {
    question:
      "60) Quelle commande Git enregistre les modifications dans l'historique ?",
    answers: [
      "git save",
      "git commit",
      "git push",
      "Toutes les réponses sont fausses",
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
    document.getElementById("result").innerText =
      `Quiz terminé ! Score final: ${score}`;
  }
}

window.onload = loadQuestion;
