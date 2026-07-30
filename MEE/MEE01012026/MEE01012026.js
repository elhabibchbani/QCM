const questions = [
  {
    question: "Q1. Quel est le rôle principal d'un algorithme ?",
    answers: [
      "A. Écrire du code",
      "B. Décrire une solution étape par étape",
      "C. Compiler un programme",
      "D. Tester une application",
    ],
    correct: 1,
  },
  {
    question:
      "Q2. Quel langage est principalement utilisé pour la programmation orientée objet ?",
    answers: ["A. SQL", "B. HTML", "C. Java", "D. CSS", "E. Oracle"],
    correct: 2,
  },
  {
    question: "Q3. A quoi sert un diagramme UML ?",
    answers: [
      "A. Tester le logiciel",
      "B. Documenter et concevoir le logiciel",
      "C. Compiler le code",
      "D. Gérer la base de données",
    ],
    correct: 1,
  },
  {
    question:
      "Q4. Quel principe POO signifie « une classe peut prendre plusieurs formes » ?",
    answers: [
      "A. Encapsulation",
      "B. Héritage",
      "C. Polymorphisme",
      "D. Abstraction",
    ],
    correct: 2,
  },
  {
    question: "Q5. Quelle structure permet de répéter un traitement ?",
    answers: ["A. Condition", "B. Fonction", "C. Boucle", "D. Variable"],
    correct: 2,
  },
  {
    question: "Q6. Quel diagramme UML montre les classes et leurs relations ?",
    answers: [
      "A. Diagramme de séquence",
      "B. Diagramme de cas d'utilisation",
      "C. Diagramme de classes",
      "D. Diagramme d'activité",
    ],
    correct: 2,
  },
  {
    question: "Q7. Quel est le rôle d'un test unitaire ?",
    answers: [
      "A. Tester l'interface",
      "B. Tester une fonction ou méthode",
      "C. Tester la base de données",
      "D. Tester le réseau",
    ],
    correct: 1,
  },
  {
    question:
      "Q8. Quel mot-clé permet de prendre une décision en programmation ?",
    answers: ["A. For", "B. While", "C. If", "D. return", "E. loop"],
    correct: 2,
  },
  {
    question: "Q9. Quel modèle de développement est séquentiel ?",
    answers: ["A. Agile", "B. Scrum", "C. Cycle en V", "D. DevOps"],
    correct: 2,
  },
  {
    question:
      "Q10. Quel est l'objectif principal de la conception logicielle ?",
    answers: [
      "A. Écrire le code",
      "B. Exécuter le programme",
      "C. Structurer la solution avant le codage",
      "D. Déployer l'application",
    ],
    correct: 2,
  },
  {
    question:
      "Q11. En SQL, quelle est la différence principale entre WHERE et HAVING ?",
    answers: [
      "A. WHERE filtre après agrégation",
      "B. HAVING filtre avant agrégation",
      "C. WHERE filtre avant agrégation",
      "D. Aucune différence",
    ],
    correct: 2,
  },
  {
    question: "Q12. Quelle forme normale élimine les dépendances transitives ?",
    answers: ["A. 1FN", "B. 2FN", "C. 3FN", "D. BCNF"],
    correct: 2,
  },
  {
    question:
      "Q13. En .NET, quelle est la différence entre IEnumerable et IList ?",
    answers: [
      "A. IList est immuable",
      "B. IEnumerable ne permet pas l'indexation",
      "C. IEnumerable est plus rapide",
      "D. IList est asynchrone",
    ],
    correct: 1,
  },
  {
    question:
      "Q14. En C#, quel mot-clé permet de définir une méthode virtuelle ?",
    answers: ["A. abstract", "B. override", "C. virtual", "D. sealed"],
    correct: 2,
  },
  {
    question:
      "Q15. En Java, quelle est la différence entre HashMap et TreeMap ?",
    answers: [
      "A. HashMap est synchronisé",
      "B. TreeMap est ordonné",
      "C. HashMap interdit les doublons",
      "D. TreeMap utilise FIFO",
    ],
    correct: 1,
  },
  {
    question: "Q16. Quel mot-clé Java empêche l'héritage d'une classe ?",
    answers: ["A. static", "B. abstract", "C. final", "D. private"],
    correct: 2,
  },
  {
    question: "Q17. En développement web, quel est le rôle principal de CSS ?",
    answers: [
      "A. Gérer la logique",
      "B. Structurer le contenu",
      "C. Styliser l'interface",
      "D. Gérer la base de données",
    ],
    correct: 2,
  },
  {
    question: "Q18. Quelle méthode HTTP est idempotente ?",
    answers: ["A. POST", "B. PUT", "C. PATCH", "D. CONNECT"],
    correct: 1,
  },
  {
    question:
      "Q19. En .NET, quelle interface permet l'injection de dépendances ?",
    answers: [
      "A. IConfiguration",
      "B. IServiceCollection",
      "C. ILogger",
      "D. IHost",
    ],
    correct: 1,
  },
  {
    question:
      "Q20. En Java, quelle interface permet d'implémenter un tri personnalisé ?",
    answers: [
      "A. Comparator",
      "B. Comparable",
      "C. Iterable",
      "D. Serializable",
    ],
    correct: 0,
  },
  {
    question: "Q21. En développement web, quelle balise HTML5 est sémantique ?",
    answers: ["A. <div>", "B. <span>", "C. <article>", "D. <font>"],
    correct: 2,
  },
  {
    question:
      "Q22. En SQL, quel index améliore les recherches avec LIKE 'abc%' ?",
    answers: [
      "A. Index cluster",
      "B. Index full-text",
      "C. Index B-tree",
      "D. Index bitmap",
    ],
    correct: 2,
  },
  {
    question: "Q23. En .NET, quelle classe permet la gestion des logs ?",
    answers: [
      "A. ILogger",
      "B. IHosting",
      "C. IConfiguration",
      "D. IApplication",
    ],
    correct: 0,
  },
  {
    question: "Q24. En Java, quelle API permet la programmation asynchrone ?",
    answers: [
      "A. Stream",
      "B. CompletableFuture",
      "C. Optional",
      "D. Reflection",
    ],
    correct: 1,
  },
  {
    question:
      "Q25. En développement web, quelle propriété CSS permet le responsive design ?",
    answers: ["A. position", "B. display", "C. media queries", "D. float"],
    correct: 2,
  },
  {
    question: "Q26. En SQL, quelle clause permet de combiner deux requêtes ?",
    answers: ["A. JOIN", "B. UNION", "C. GROUP BY", "D. MERGE", "E. ORDRE BY"],
    correct: 1,
  },
  {
    question: "Q27. En .NET, quel type est immuable ?",
    answers: [
      "A. String",
      "B. List",
      "C. Array",
      "D. Dictionary",
      "E. Integer",
    ],
    correct: 0,
  },
  {
    question: "Q28. En Java, quelle exception est non contrôlée ?",
    answers: [
      "A. IOException",
      "B. SQLException",
      "C. RuntimeException",
      "D. FileNotFoundException",
    ],
    correct: 2,
  },
  {
    question:
      "Q29. En développement web, quel langage est exécuté côté serveur ?",
    answers: ["A. HTML", "B. CSS", "C. JavaScript (Node.js)", "D. XML"],
    correct: 2,
  },
  {
    question:
      "Q30. Quelle condition permet de vérifier si un nombre est pair ?",
    answers: [
      "A. Nombre mod 2 = 1",
      "B. Nombre/2=0",
      "C. Nombre mod 2 = 0",
      "D. Nombre = pair",
    ],
    correct: 2,
  },
  {
    question: "Q31. Afficher tous les barrages enregistrés :",
    answers: [
      "A. SELECT * FROM Barrage;",
      "B. SELECT Barrage FROM *;",
      "C. SHOW Barrage;",
      "D. SELECT ALL Barrage;",
    ],
    correct: 0,
  },
  {
    question:
      "Q32. Afficher le nom et la capacité maximale de chaque barrage :",
    answers: [
      "A. SELECT nom, capacite_max FROM Barrage;",
      "B. SELECT * FROM capacite_max;",
      "C. SELECT capacite_max FROM nom;",
      "D. SELECT Barrage.nom;",
    ],
    correct: 0,
  },
  {
    question: "Q33. Afficher les mesures dont le niveau d'eau dépasse 70 m :",
    answers: [
      "A. SELECT * FROM Mesure WHERE niveau_eau > 70;",
      "B. SELECT * FROM Mesure WHEN niveau_eau > 70;",
      "C. SELECT niveau_eau FROM 70;",
      "D. SELECT * Mesure > 70;",
    ],
    correct: 0,
  },
  {
    question: "Q34. Insérer un nouveau barrage :",
    answers: [
      "A. INSERT Barrage VALUES (1,'Al Wahda', 3700);",
      "B. INSERT INTO Barrage VALUES (1, 'Al Wahda', 3700);",
      "C. ADD INTO Barrage VALUES (...);",
      "D. INSERT Barrage INTO (...);",
    ],
    correct: 1,
  },
  {
    question: "Q35. Mettre à jour la capacité d'un barrage :",
    answers: [
      "A. UPDATE Barrage SET capacite_max = 4000;",
      "B. UPDATE Barrage capacite_max = 4000;",
      "C. UPDATE Barrage SET capacite_max = 4000 WHERE id_barrage = 1;",
      "D. MODIFY Barrage SET capacite_max = 4000;",
    ],
    correct: 2,
  },
  {
    question: "Q36. Supprimer toutes les alertes d'un barrage :",
    answers: [
      "A. DELETE * FROM Alerte WHERE id_barrage = 1;",
      "B. DELETE FROM Alerte WHERE id_barrage = 1;",
      "C. REMOVE FROM Alerte WHERE id_barrage = 1;",
      "D. DROP Alerte WHERE id_barrage = 1;",
    ],
    correct: 1,
  },
  {
    question: "Q37. Afficher le nom du barrage et ses niveaux mesurés :",
    answers: [
      "A. SELECT nom, niveau_eau FROM Barrage, Mesure;",
      "B. SELECT nom, niveau_eau FROM Barrage JOIN Mesure ON Barrage.id_barrage = Mesure.id_barrage;",
      "C. SELECT nom FROM Barrage JOIN Mesure;",
      "D. SELECT FROM Barrage WHERE Mesure;",
    ],
    correct: 1,
  },
  {
    question: "Q38. Afficher les alertes avec le nom du barrage :",
    answers: [
      "A. SELECT * FROM Alerte JOIN Barrage ON Alerte.id_barrage = Barrage.id_barrage;",
      "B. SELECT Alerte FROM Barrage;",
      "C. SELECT nom FROM Alerte;",
      "D. JOIN Alerte Barrage;",
    ],
    correct: 0,
  },
  {
    question: "Q39. Calculer le niveau d'eau moyen :",
    answers: [
      "A. SELECT SUM(niveau_eau) FROM Mesure;",
      "B. SELECT AVG(niveau_eau) FROM Mesure;",
      "C. SELECT COUNT(niveau_eau) FROM Mesure;",
      "D. SELECT MAX(niveau_eau) FROM Mesure;",
    ],
    correct: 1,
  },
  {
    question: "Q40. Compter le nombre de mesures par barrage :",
    answers: [
      "A. SELECT COUNT(*) FROM Mesure;",
      "B. SELECT id_barrage, COUNT(*) FROM Mesure GROUP BY id_barrage;",
      "C. SELECT GROUP Mesure;",
      "D. SELECT COUNT(id_barrage) WHERE Mesure;",
    ],
    correct: 1,
  },
  {
    question: "Q41. Ce code illustre principalement :",
    answers: [
      "A. Programmation procédurale",
      "B. Programmation orientée objet",
      "C. Programmation événementielle",
      "D. Programmation fonctionnelle",
    ],
    correct: 1,
  },
  {
    question: "Q42. La méthode __init__ sert à :",
    answers: [
      "A. Supprimer l'objet",
      "B. Initialiser les attributs de l'objet",
      "C. Calculer la surface",
      "D. Afficher les résultats",
    ],
    correct: 1,
  },
  {
    question: "Q43. Quels sont les attributs de la classe Route ?",
    answers: [
      "A. longueur et largeur",
      "B. surface et type",
      "C. calculer_surface et init",
      "D. r1 et surface",
    ],
    correct: 0,
  },
  {
    question:
      "Q44. Quelle instruction appelle correctement la méthode calculer_surface ?",
    answers: [
      "A. calculer_surface()",
      "B. Route.calculer_surface()",
      "C. r1.calculer_surface()",
      "D. self.calculer_surface",
    ],
    correct: 2,
  },
  {
    question: "Q45. Quelle valeur sera affichée à l'exécution du programme ?",
    answers: ["A. 14000", "B. 2007", "C. 140000", "D. Erreur"],
    correct: 3,
  },
  {
    question: "Q46. Le mot-clé self représente :",
    answers: [
      "A. La classe",
      "B. Une variable globale",
      "C. L'objet courant",
      "D. Une fonction",
    ],
    correct: 2,
  },
  {
    question: "Q47. Quelle ligne permet de créer un objet de la classe Route ?",
    answers: [
      "A. Router1(2000, 7)",
      "B. new Route(2000, 7)",
      "C. r1 = Route(2000, 7)",
      "D. Route(2000, 7) = r1",
    ],
    correct: 2,
  },
  {
    question: "Q48. La méthode calculer_surface() retourne :",
    answers: [
      "A. Une chaîne de caractères",
      "B. Un nombre entier",
      "C. Un booléen",
      "D. Rien",
    ],
    correct: 1,
  },
  {
    question:
      'Q49. Que va afficher ce programme ?\n\nniveau = 68\nseuil = 70\nif niveau >= seuil:\n\tprint("Alerte crue")\nelse:\n\tprint("Niveau normal")',
    answers: ["A. Alerte crue", "B. Niveau normal", "C. 68", "D. Erreur"],
    correct: 1,
  },
  {
    question:
      'Q50. Quel est le rôle principal de ce code ?\n\nmesures = [65, 67, 69, 72]\nfor m in mesures:\n\tif m > 70:\n\t\tprint("Attention barrage")',
    answers: [
      "A. Afficher toutes les mesures",
      "B. Calculer la moyenne",
      "C. Détecter un dépassement du seuil",
      "D. Supprimer les valeurs",
    ],
    correct: 2,
  },
  {
    question:
      "Q51. Que contient la variable total à la fin ?\n\nmesures = [60, 62, 64]\ntotal = 0\nfor m in mesures:\n\ttotal = total + m",
    answers: ["A. 64", "B. 60", "C. 186", "D. 0"],
    correct: 2,
  },
  {
    question:
      'Q52. Quel sera le résultat ?\n\nniveau = 75\n\nwhile niveau > 70:\n\tprint("Vidange en cours")\n\tniveau -= 5',
    answers: [
      "A. Affiche une seule fois",
      "B. Boucle infinie",
      "C. Affiche 2 fois",
      "D. Erreur",
    ],
    correct: 0,
  },
  {
    question:
      'Q53. Que va afficher ce programme Java ?\n\nint niveau = 80;\nint seuil = 70;\n\nif (niveau > seuil) {\n\tSystem.out.println("Alerte barrage");\n} else {\n\tSystem.out.println("Niveau stable");\n}',
    answers: [
      "A. Niveau stable",
      "B. Rien",
      "C. Alerte barrage",
      "D. Erreur de compilation",
    ],
    correct: 2,
  },
  {
    question:
      "Q54. Que fait ce constructeur ?\n\nclass Barrage {\n\tdouble niveauEau;\n\tBarrage(double n) {\n\t\tniveauEau = n;\n\t}\n}",
    answers: [
      "A. Supprime l'objet",
      "B. Initialise le niveau d'eau",
      "C. Affiche une alerte",
      "D. Calcule une moyenne",
    ],
    correct: 1,
  },
  {
    question:
      "Q55. Quelle est la valeur de somme à la fin ?\n\nint[] niveaux = {60, 65, 70};\nint somme = 0;\nfor (int n : niveaux) {\n\tsomme += n;\n}",
    answers: ["A. 70", "B. 125", "C. 195", "D. 0"],
    correct: 2,
  },
  {
    question:
      'Q56. Combien de fois s\'affiche le message ?\n\nint niveau = 75;\n\nwhile (niveau > 65) {\n\tSystem.out.println("Contrôle barrage");\n\tniveau -= 5;\n}',
    answers: ["A. 1 fois", "B. 2 fois", "C. 3 fois", "D. Infini"],
    correct: 1,
  },
  {
    question:
      "Q57. Dans un système du MEE, ce code sert à :\n\nif niveau > seuil_critique:\n\talerte = True",
    answers: [
      "A. Créer une interface",
      "B. Activer une décision de sécurité",
      "C. Supprimer des données",
      "D. Fermer le programme",
    ],
    correct: 1,
  },
  {
    question:
      "Q58. Quel est l'intérêt de ce code Java ?\n\nif (niveauEau >= capaciteMax) {\n\touvrirVannes();\n}",
    answers: [
      "A. Afficher une image",
      "B. Déclencher une action de sécurité",
      "C. Calculer la capacité",
      "D. Créer un fichier",
    ],
    correct: 1,
  },
  {
    question:
      "Q59. Quel outil est utilisé pour créer rapidement une application React ?",
    answers: [
      "A. npm init react",
      "B. create-react-app",
      "C. react-start",
      "D. node-react",
    ],
    correct: 1,
  },
  {
    question: "Q60. Comment passer une prop à un composant ?",
    answers: [
      'A. <Comp prop="valeur" />',
      "B. <Comp(prop)>",
      "C. Comp.prop = valeur",
      "D. useProp()",
    ],
    correct: 0,
  },
  {
    question: "Q61. Quel Hook est utilisé pour gérer l'état ?",
    answers: ["A. useEffect", "B. useRef", "C. useState", "D. useContext"],
    correct: 2,
  },
  {
    question: "Q62. Que fait useState ?",
    answers: [
      "A. Initialise une variable globale",
      "B. Crée une variable réactive",
      "C. Charge une page",
      "D. Gère le CSS",
    ],
    correct: 1,
  },
  {
    question: "Q63. useEffect est utilisé pour :",
    answers: [
      "A. Créer des composants",
      "B. Gérer les effets de bord",
      "C. Styliser les pages",
      "D. Créer des routes",
    ],
    correct: 1,
  },
  {
    question: "Q64. La commande pour construire l'application :",
    answers: [
      "A. npm start",
      "B. npm run dev",
      "C. npm build",
      "D. npm run build",
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
    document.getElementById("result").innerText =
      `Quiz terminé ! Score final: ${score}`;
  }
}

window.onload = loadQuestion;
