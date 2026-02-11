const questions = [
  {
    question: "1) Un logiciel open-source est :",
    answers: [
      "Logiciel dont on peut obtenir le code source",
      "Logiciel gratuit",
      "Logiciel propriétaire",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "2) Qu'est-ce qu'un DNS?",
    answers: [
      "Domain Name System",
      "Domain Name Space",
      "Digital Name System",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "3) En informatique, le SSO est :",
    answers: [
      "Un service d'identification",
      "Un service d'autorisation",
      "Un service d'authentification",
      "Un service de confidentialité",
    ],
    correct: 2,
  },
  {
    question: "4) Qu'est-ce que la B2B ?",
    answers: [
      "Une pratique Internet adoptée par des associations",
      "Une pratique commerciale Internet s'adressant aux particuliers",
      "Une pratique commerciale Internet s'adressant aux entreprises",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "5) La GED est :",
    answers: [
      "Un système informatisé d'acquisition de documents",
      "Un système informatisé de gestion financière",
      "Un système d'archivage de documents",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "6) En gestion de projet on appelle le maîtrise d'ouvrage",
    answers: [
      "Le client",
      "Le prestataire",
      "La société chargée de l'accompagnement",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "7) Quelle norme est relative au gestion de projet?",
    answers: ["ISO21500", "ISO 9001", "ISO 14000", "ISO 27001"],
    correct: 0,
  },
  {
    question: "8) Quel est le principe fondamental de la méthodologie Agile?",
    answers: [
      "Livrer rapidement des versions complètes du logiciel",
      "Suivre un plan rigide du début à la fin du projet",
      "Minimiser la documentation sur les fonctionnalités principales",
      "Ignorer les retours des utilisateurs",
    ],
    correct: 0,
  },
  {
    question:
      "9) Dans une stratégie de veille stratégique (Business Intelligence), lequel de ces éléments est indispensable",
    answers: [
      "Entrepôt de données",
      "Intelligence artificielle",
      "Systèmes de gestion de la qualité",
      "Gestion de la relation client (CRM)",
    ],
    correct: 0,
  },
  {
    question:
      "10) Quelle est la différence entre un langage procédural et un langage orienté objet?",
    answers: [
      "Le langage procédural est plus simple à apprendre que le langage orienté objet",
      "Le langage procédural est plus performant que le langage orienté objet",
      "Le langage procédural est plus modulaire que le langage orienté objet",
      "Le langage orienté objet est plus modulaire que le langage procédural",
    ],
    correct: 3,
  },

  {
    question: "11) Quelle est la différence entre une exception et une erreur?",
    answers: [
      "Une exception est une erreur détectée par le programme",
      "Une erreur est une exception non détectée par le programme",
      "Une exception est une erreur qui peut être traitée par le programme",
      "Une erreur est une exception qui ne peut pas être traitée par le programme",
    ],
    correct: 2,
  },
  {
    question: "12) Le PERT est:",
    answers: [
      "Un langage de programmation",
      "Un protocole internet",
      "Un outil de planification",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "13) Qu'est-ce qu'un modèle MVC?",
    answers: [
      "Un langage de programmation",
      "Un design pattern architectural",
      "Un système de gestion de base de données",
      "Une méthode de cryptage",
    ],
    correct: 1,
  },
  {
    question: "14) Qu'est-ce qu'un contrôleur dans MVC?",
    answers: [
      "Code qui rend l'interface utilisateur",
      "Code qui stocke les données",
      "Code qui contrôle les interactions entre le modèle et la vue",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "15) Qu'est-ce qu'un émulateur?",
    answers: [
      "Un outil pour tester la vitesse réseau",
      "Un environnement virtuel simulant un appareil mobile",
      "Un outil de compression",
      "Un outil pour déboguer des applications web",
    ],
    correct: 1,
  },
  {
    question: "16) Étape principale d'analyse dans Merise?",
    answers: [
      "Modélisation des flux",
      "Modélisation des données",
      "Modélisation des traitements",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "17) Diagramme UML pour modéliser les interactions entre objets?",
    answers: [
      "Diagramme de classe",
      "Diagramme de séquence",
      "Diagramme de cas d'utilisation",
      "Diagramme d'état",
    ],
    correct: 1,
  },
  {
    question: "18) Qu'est-ce que le responsive design?",
    answers: [
      "Design qui réagit aux émotions",
      "Design adaptable aux écrans",
      "Design basé sur commentaires",
      "Design temps réel serveur",
    ],
    correct: 1,
  },
  {
    question: "19) Concept clé de la POO?",
    answers: [
      "Encapsulation, Héritage, Polymorphisme",
      "Réflexion, Généricité, Exception",
      "Itération, Récursion, Abstraction",
      "Conditions, Boucles, Fonctions",
    ],
    correct: 0,
  },
  {
    question: "20) Diagramme représentant les liens entre instances?",
    answers: [
      "Cas d'utilisation",
      "Collaboration",
      "Objets",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "21) Diagramme présentant les instances de classes?",
    answers: ["Séquence", "Objet", "Classe", "Composants"],
    correct: 1,
  },
  {
    question: "22) Rôle d'un Framework?",
    answers: [
      "Fournir une structure de base",
      "Automatiser tâches répétitives",
      "Fournir une API",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "23) Rôle d'une Autorité de Certification?",
    answers: [
      "Gérer IP",
      "Émettre et signer certificats SSL",
      "Fournir IP publiques",
      "Gérer bases de données",
    ],
    correct: 1,
  },
  {
    question: "24) Différence REST vs SOAP?",
    answers: [
      "REST utilise HTTP, SOAP utilise protocole SOAP",
      "REST plus simple",
      "REST plus performant",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "25) Différence variable locale/globale?",
    answers: [
      "Locale accessible dans sa fonction, globale partout",
      "Locale mot-clé local",
      "Locale var, globale const",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "26) Quelle affirmation est fausse?",
    answers: [
      "Langage compilé traduit une fois",
      "Langage interprété traduit au fur et à mesure",
      "Langage machine hexadécimal 0 à F",
      "Toutes les réponses sont fausses",
    ],
    correct: [0,1],
  },
  {
    question: "27) HTML est un langage :",
    answers: ["Encodé", "Crypté", "Balisé", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "28) Différence GET/POST?",
    answers: [
      "GET données sensibles",
      "GET plus sécurisé",
      "GET récupérer, POST envoyer",
      "GET limitation taille",
    ],
    correct: 2,
  },
  {
    question: "29) Principe internet information avant demande?",
    answers: [
      "Push",
      "Net Casting",
      "Reporting",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "30) Variable contenant adresse d'une autre variable?",
    answers: [
      "Variant",
      "Référence",
      "Pointeur",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },

  {
    question: "31) Structure pour éléments uniques sans ordre?",
    answers: ["Array", "List", "Stack", "Set"],
    correct: 3,
  },
  {
    question: "32) Script externe myscript.js?",
    answers: [
      '<script href="myscript.js">',
      '<script name="myscript.js">',
      '<script sre="myscript.js">',
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "33) Commentaire CSS?",
    answers: [
      "* commentaire *",
      "// commentaire //",
      "< commentaire >",
      "/* commentaire */",
    ],
    correct: 3,
  },
  {
    question: "34) Événement quand navigateur demande ressource HTTP?",
    answers: [
      "request",
      "response",
      "error",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "35) console.log(numbers.length)?",
    answers: ['["One","Two","Three"]', "3", '"Three"', "Error"],
    correct: 1,
  },
  {
    question: "36) Rôle README.md?",
    answers: [
      "Stocker dépendances",
      "Instructions projet",
      "Code principal",
      "Enregistrer erreurs",
    ],
    correct: 1,
  },
  {
    question: "37) Bootstrap est :",
    answers: ["Langage", "Framework CSS", "Base données", "Contrôle version"],
    correct: 1,
  },
  {
    question: "38) Différence margin/padding?",
    answers: [
      "Margin intérieur",
      "Margin extérieur",
      "Interchangeable",
      "Même propriété",
    ],
    correct: 1,
  },
  {
    question: '39) <meta charset="UTF-8"> sert à?',
    answers: ["Couleur fond", "Spécifier jeu caractères", "SEO", "Zone texte"],
    correct: 1,
  },
  {
    question: "40) Gestion erreurs C#?",
    answers: ["try/except", "handle/raise", "try/catch", "handle/catch"],
    correct: 2,
  },

  {
    question: "41) Code C# boucle décrite affiche?",
    answers: [
      "10 8 6 4 2 0",
      "10 8 6 4 2 0 -4 -8",
      "10 8 6 4 2 0 -2 -4 -6",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "42) Énoncé faux web service?",
    answers: [
      "Invoqué dynamiquement",
      "Encapsulé XML",
      "Déployé toute plateforme",
      "Implémenté dans langage précis",
    ],
    correct: 3,
  },
  {
    question: "43) Extension fichier Java compilé?",
    answers: ["Java", "class", "exe", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "44) Tout XML doit avoir:",
    answers: [
      "Balise fermeture",
      "Élément racine",
      "Instance objets",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "45) Attribut obligatoire <img>?",
    answers: ["src", "href", "id", "Toutes les réponses sont fausses"],
    correct: 0,
  },
  {
    question: "46) Page aspx rendue en?",
    answers: ["XML", "HTML", "WML", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "47) Langages scripts ASP.NET?",
    answers: ["VB", "C-sharp", "PHP", "Toutes les réponses sont fausses"],
    correct: [0,1],
  },
  {
    question: "48) Node.js est :",
    answers: [
      "Navigateur",
      "Framework JS",
      "Moteur BD",
      "Environnement exécution JS serveur",
    ],
    correct: 3,
  },
  {
    question: "49) SGBDR signifie?",
    answers: [
      "Système Gestion Bases Résolution",
      "Système Gestion Bases Réparties",
      "Système Gestion Base Données Relationnelle",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "50) Type champ email?",
    answers: ["Text", "Oui/Non", "Number", "Toutes les réponses sont fausses"],
    correct: 0,
  },

  {
    question: "51) ODBC signifie?",
    answers: [
      "Open Database Control",
      "Open Database Connectivity",
      "Open Dynamic Base Connectivity",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "52) Trier SELECT ordre croissant?",
    answers: ["ORDER BY ASC", "ORDER BY DESC", "SORT DESC", "SORT ASC"],
    correct: 0,
  },
  {
    question: "53) Exclure doublons SELECT?",
    answers: ["UNIQUE", "DISTINCT", "DIFFERENT", "NO DUPLICATES"],
    correct: 1,
  },
  {
    question: "54) Clause après GROUP BY?",
    answers: ["FILTER", "WHERE", "LIMIT", "HAVING"],
    correct: 3,
  },
  {
    question: "55) Trigger est :",
    answers: [
      "Easter Egg",
      "Action automatique suite événement BD",
      "Optimisation vitesse",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "56) Moyenne colonne SQL?",
    answers: ["COUNT", "AVG", "SUM", "MAX"],
    correct: 1,
  },
  {
    question: "57) Jointure avec lignes null non appariées?",
    answers: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correct: 3,
  },
  {
    question: "58) Valider transaction SQL Server?",
    answers: ["COMMIT", "ROLLBACK", "SAVEPOINT", "BEGIN TRANSACTION"],
    correct: 0,
  },
  {
    question: "59) Supprimer table SQL Server?",
    answers: [
      "DROP TABLE ma table",
      "DROP DATABASE ma table",
      "DROP ma table",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "60) Protocole transmission paquets Internet?",
    answers: ["IPX/SPX", "TCP/IP", "HTTP", "Toutes les réponses sont fausses"],
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
