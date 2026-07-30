const questions = [
  {
    question: "Q1. Qu'est-ce que HTML ?",
    answers: [
      "A. HyperText Markup Language",
      "B. High-Level Text Machine Language",
      "C. HyperTransfer Markup Language",
      "D. Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Q2. Quelle est le schéma HTML correct ?",
    answers: [
      "A. <html><body><head></head></body></html>",
      "B. <html><head></head><body></body></html>",
      "C. <html><head></head><body></html></body>",
      "D. <html><head></html></head><body></html></body>",
    ],
    correct: 1,
  },
  {
    question:
      "Q3. Quel est le rôle principal d'XML (eXtensible Markup Language) ?",
    answers: [
      "A. Stocker des données structurées",
      "B. Gérer les styles de page web",
      "C. Contrôler les comportements côté client",
      "D. Créer des animations graphiques",
    ],
    correct: 0,
  },
  {
    question: "Q4. Quelles sont les différences entre Java et JavaScript ?",
    answers: [
      "A. Java est utilisé côté serveur, JavaScript côté client.",
      "B. Java est un langage compilé, JavaScript est interprété.",
      "C. Java est orienté objet, JavaScript est basé sur des prototypes.",
      "D. Toutes les réponses ci-dessus.",
    ],
    correct: 3,
  },
  {
    question:
      "Q5. Choisir la fonction en Python qui permet d'inverser une chaîne de caractères.",
    answers: [
      "A. reverse_string(s): return s[::-1]",
      "B. inverse(s): return s.reverse()",
      "C. flip_string(s): return s.flip()",
      "D. backwards(s): return s.back()",
    ],
    correct: 0,
  },
  {
    question:
      "Q6. Quelle est la structure de données adaptée pour stocker des éléments uniques, sans ordre spécifique, en Python ?",
    answers: ["A. Liste", "B. Tuple", "C. Dictionnaire", "D. Ensemble"],
    correct: 3,
  },
  {
    question:
      "Q7. Comment accéder au deuxième élément d'une liste « ma_liste » en Python ?",
    answers: [
      "A. ma_liste[2]",
      "B. ma_liste[1]",
      "C. ma_liste(2)",
      "D. ma_liste(second)",
    ],
    correct: 1,
  },
  {
    question: "Q8. Qu'est-ce que le Cloud Computing ?",
    answers: [
      "A. Une méthode de stockage local des données.",
      "B. Un modèle d'accès aux données via Internet.",
      "C. Un logiciel de traitement de texte.",
      "D. Un protocole de communication sans fil.",
    ],
    correct: 1,
  },
  {
    question:
      "Q9. Quelles sont les mesures courantes pour assurer la sécurité d'une base de données ? (Une ou plusieurs réponses correctes)",
    answers: [
      "A. Chiffrement des données",
      "B. Utilisation de mots de passe forts et de l'authentification multi-facteurs",
      "C. Gestion des autorisations d'accès",
      "D. Mises à jour régulières du logiciel de base de données",
      "E. Surveillance des journaux d'activité",
      "F. Utilisation d'un pare-feu physique autour du serveur de base de données",
      "G. Partage ouvert de tous les fichiers de configuration",
    ],
    correct: [0, 1, 2, 3, 4],
  },
  {
    question:
      "Q10. Écrivez une requête SQL pour récupérer tous les utilisateurs d'une table « utilisateurs » dont l'âge est supérieur à 60 ans.",
    answers: [
      "A. SELECT * FROM utilisateurs WHERE age > 60;",
      "B. GET * FROM utilisateurs WHERE age > 60;",
      "C. SELECT * FROM utilisateurs HAVING age > 60;",
      "D. FILTER * FROM utilisateurs WHERE age > 60.",
    ],
    correct: 0,
  },
  {
    question:
      "Q11. Quelle fonction Excel renvoie la somme des cellules qui répondent à une condition spécifique ?",
    answers: ["A. SOMME.SI", "B. NB.SI", "C. SOMME.SI.ENS", "D. NB.SI.ENS"],
    correct: 0,
  },
  {
    question: "Q12. Quelle est la différence entre HTTP et HTTPS ?",
    answers: [
      "A. HTTP est sécurisé, HTTPS ne l'est pas.",
      "B. HTTPS utilise SSL/TLS pour chiffrer les données.",
      "C. HTTP utilise le port 80, HTTPS utilise le port 442.",
      "D. Toutes les réponses ci-dessus.",
    ],
    correct: 1,
  },
  {
    question: "Q13. Nom du protocole sécurisé utilisé sur Internet.",
    answers: ["A. HTTP", "B. HTTPS", "C. SHTP", "D. SMTP"],
    correct: 1,
  },
  {
    question:
      "Q14. Quel protocole fournit un service de messagerie entre différents hôtes ?",
    answers: ["A. FTP", "B. TELNET", "C. SMTP", "D. SNMP"],
    correct: 2,
  },
  {
    question:
      "Q15. Quelle commande est utilisée pour connecter un lecteur réseau dans un environnement Windows ?",
    answers: [
      "A. connect v: \\\\alpha\\share.",
      "B. network use v: \\\\alpha\\share.",
      "C. map drive v: \\\\alpha\\share.",
      "D. net use v: \\\\alpha\\share.",
    ],
    correct: 3,
  },
  {
    question:
      "Q16. Un utilisateur vous signale un problème avec un site Web qui ne se charge pas correctement. Quelles sont les actions pour diagnostiquer le problème ?",
    answers: [
      "A. Vérifier la connexion Internet de l'utilisateur.",
      "B. Examiner les journaux d'erreurs du serveur.",
      "C. Tester le site sur différents navigateurs.",
      "D. Toutes les réponses ci-dessus.",
    ],
    correct: 3,
  },
  {
    question: "Q17. Dans une architecture client/serveur :",
    answers: [
      "A. Il est possible de supprimer ou rajouter des clients sans perturber le fonctionnement du réseau et sans modifications majeures.",
      "B. Il peut gérer des ressources communes à tous les utilisateurs, comme par exemple une base de données centralisée, afin d'éviter les problèmes de redondances.",
      "C. Les « clients » peuvent fonctionner entre eux de manière autonome.",
      "D. Les clients peuvent fonctionner normalement même si le serveur est endommagé.",
    ],
    correct: 1,
  },
  {
    question:
      "Q18. Quelle est la définition correcte de l'architecture 3-tiers ?",
    answers: [
      "A. Une architecture où les applications sont divisées en trois parties distinctes : interface utilisateur, logique métier, et gestion des données.",
      "B. Une architecture qui consiste en trois serveurs distincts : serveur web, serveur d'application, et serveur de base de données.",
      "C. Une architecture qui utilise trois types de langages de programmation différents pour développer une application.",
      "D. Une architecture où les données sont stockées dans trois emplacements physiques distincts pour garantir la redondance et la disponibilité.",
    ],
    correct: 0,
  },
  {
    question:
      "Q19. Quelles mesures sont nécessaires pour mettre en place une politique de mots de passe forts ? (Une ou plusieurs réponses correctes)",
    answers: [
      "A. Exiger une longueur minimale du mot de passe.",
      "B. Utilisation de caractères spéciaux.",
      "C. Expiration régulière des mots de passe.",
      "D. Utilisation de phrases plutôt que de simples mots.",
      "E. Utilisation du nom d'utilisateur comme partie du mot de passe.",
      "F. Interdiction de réutilisation fréquente des anciens mots de passe.",
    ],
    correct: [0, 1, 2, 3, 5],
  },
  {
    question: "Q20. Qu'est-ce qu'un ERP ?",
    answers: [
      "A. Un Progiciel de Gestion Intégré.",
      "B. Un Réacteur Pressurié Européen.",
      "C. Une méthode de réduction des processus en entreprises (Entreprise Reduction Process).",
      "D. Un Environnement Robuste de Programmation.",
    ],
    correct: 0,
  },

  {
    question:
      "Q21. Qu'affiche cette partie de l'algorithme à l'écran ?\n\nPour i ← 1 jusqu'à 10 faire\n    Ecrire(\"Bonjour\", i)\n    Si i = 2 alors\n        i ← i + 8\n    FinSi\nFinPour\n\ni ← i + 2\nEcrire(\"La valeur de i est : \", i)",
    answers: [
      "A. Bonjour 1\nBonjour 2\nBonjour 3\n...\nBonjour 10\nLa valeur de i est : 12",
      "B. Bonjour 1\nBonjour 2\nLa valeur de i est : 13",
      "C. Bonjour 1\nBonjour 10\nLa valeur de i est : 12",
      "D. Bonjour 1\nBonjour 2\nBonjour 10\nLa valeur de i est : 13",
    ],
    correct: 1,
  },
  {
    question:
      "Q22. Quelle est la différence entre la boucle « TantQue... Fin TantQue » et la boucle « Faire... TantQue » ?",
    answers: [
      "A. TantQue... Fin TantQue teste la condition avant l'exécution de la boucle. Si la condition est fausse dès le début, la boucle ne s'exécute jamais. Faire... TantQue teste la condition après l'exécution de la boucle, les instructions sont donc exécutées au moins une fois.",
      "B. TantQue... Fin TantQue et Faire... TantQue testent toutes les deux la condition avant l'exécution de la boucle.",
      "C. Faire... TantQue teste la condition avant l'exécution de la boucle, tandis que TantQue... Fin TantQue la teste après l'exécution.",
      "D. Les deux boucles exécutent toujours les instructions au moins une fois, quelle que soit la condition.",
    ],
    correct: 0,
  },
  {
    question:
      "Q23. Qu'affiche l'algorithme suivant ?\n\nVariables i, j : entiers\nDébut\n    Pour i ← 1 jusqu'à 5 faire\n        Pour j ← 1 jusqu'à i faire\n            Ecrire(\"*\")\n        Fin Pour\n        Ecrire(\"/n\")\n    Fin Pour\nFin",
    answers: [
      "A.\n*\n**\n***\n****\n*****",
      "B.\n*****\n****\n***\n**\n*",
      "C.\n*\n*\n*\n*\n*",
      "D.\n***************",
    ],
    correct: 0,
  },
  {
    question:
      "Q24. Quel est le résultat du programme Python suivant ?\n\nfor i in range(3):\n    for j in range(3):\n        print(i * j, end='')\n    print()",
    answers: [
      "A.\n000\n012\n024",
      "B.\n012\n123\n234",
      "C.\n000\n111\n222",
      "D.\n024\n246\n468",
    ],
    correct: 0,
  },
  {
    question:
      'Q25. Quel est le résultat du programme Python suivant ?\n\ndef fonction(tableau):\n    if len(tableau) >= 2:\n        tableau[0], tableau[-1] = tableau[-1], tableau[0]\n\narr = [1, 2, 3, 4, 5]\n\nfonction(arr)\nprint(f"Tableau après permutation: {arr}")',
    answers: [
      "A. Tableau après permutation: [1, 2, 3, 4, 5]",
      "B. Tableau après permutation: [2, 1, 3, 4, 5]",
      "C. Tableau après permutation: [5, 2, 3, 4, 1]",
      "D. Tableau après permutation: [5, 4, 3, 2, 1]",
    ],
    correct: 2,
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
