const questions = [
{
  question: "Q1. Que signifie JVM ?",
  answers: [
    "A. Java Variable Method",
    "B. Java Virtual Machine",
    "C. Java Visual Model",
    "D. Java Verified Machine",
  ],
  correct: 1,
},
{
  question: "Q2. Quel composant permet de compiler un programme Java ?",
  answers: [
    "A. javac",
    "B. java",
    "C. JVM",
    "D. JRE",
  ],
  correct: 0,
},
{
  question: "Q3. Quelle est l'extension d'un fichier source Java ?",
  answers: [".class", ".java", ".exe", ".jar"],
  correct: 1,
},
{
  question: "Q4. Quelle est l'extension habituelle d'un fichier contenant du bytecode Java ?",
  answers: [".java", ".txt", ".class", ".cpp"],
  correct: 2,
},
{
  question: "Q5. Quel est le point d'entrée classique d'un programme Java ?",
  answers: [
    "A. start()",
    "B. run()",
    "C. public static void main(String[] args)",
    "D. init()",
  ],
  correct: 2,
},
{
  question: "Q6. Java est principalement un langage :",
  answers: [
    "A. De programmation orientée objet",
    "B. De balisage",
    "C. De requêtes SQL",
    "D. De description graphique uniquement",
  ],
  correct: 0,
},
{
  question: "Q7. Quelle instruction affiche un texte avec retour à la ligne ?",
  answers: [
    "A. System.read()",
    "B. System.out.println()",
    "C. System.input()",
    "D. Console.get()",
  ],
  correct: 1,
},
{
  question: "Q8. Quel symbole termine généralement une instruction Java ?",
  answers: ["A. :", "B. ,", "C. ;", "D. ."],
  correct: 2,
},
{
  question: "Q9. Quel mot-clé permet de déclarer une classe ?",
  answers: ["A. object", "B. class", "C. define", "D. structure"],
  correct: 1,
},
{
  question: "Q10. Java est-il sensible à la casse ?",
  answers: [
    "A. Non, jamais",
    "B. Seulement pour les classes",
    "C. Oui",
    "D. Seulement pour les chaînes",
  ],
  correct: 2,
},
{
  question: "Q11. Quel type représente un entier de 32 bits en Java ?",
  answers: ["A. byte", "B. short", "C. int", "D. long"],
  correct: 2,
},
{
  question: "Q12. Quel type représente un caractère Java ?",
  answers: ["A. char", "B. String", "C. character", "D. text"],
  correct: 0,
},
{
  question: "Q13. Quel type représente une valeur vraie ou fausse ?",
  answers: ["A. int", "B. boolean", "C. char", "D. float"],
  correct: 1,
},
{
  question: "Q14. Quelle est la taille d'un int en Java ?",
  answers: [
    "A. 8 bits",
    "B. 16 bits",
    "C. 32 bits",
    "D. 64 bits",
  ],
  correct: 2,
},
{
  question: "Q15. Quelle est la taille d'un long en Java ?",
  answers: [
    "A. 8 bits",
    "B. 16 bits",
    "C. 32 bits",
    "D. 64 bits",
  ],
  correct: 3,
},
{
  question: "Q16. Quel opérateur teste l'égalité de deux valeurs primitives ?",
  answers: ["A. =", "B. ==", "C. !=", "D. ==="],
  correct: 1,
},
{
  question: "Q17. Quel est le résultat de 10 / 3 avec deux variables de type int ?",
  answers: ["A. 3", "B. 3.33", "C. 4", "D. 1"],
  correct: 0,
},
{
  question: "Q18. Quel opérateur calcule le reste d'une division ?",
  answers: ["A. /", "B. *", "C. %", "D. //"],
  correct: 2,
},
{
  question: "Q19. Quelle est la valeur de x après int x = 5; x += 3; ?",
  answers: ["A. 2", "B. 5", "C. 8", "D. 15"],
  correct: 2,
},
{
  question: "Q20. Quelle conversion nécessite généralement un cast explicite ?",
  answers: [
    "A. int vers long",
    "B. byte vers int",
    "C. double vers int",
    "D. float vers double",
  ],
  correct: 2,
},
{
  question: "Q21. Quel mot-clé permet de tester une condition ?",
  answers: ["A. if", "B. repeat", "C. select", "D. when"],
  correct: 0,
},
{
  question: "Q22. Quel mot-clé représente le cas alternatif d'un if ?",
  answers: ["A. otherwise", "B. else", "C. case", "D. default"],
  correct: 1,
},
{
  question: "Q23. Quelle boucle s'exécute au moins une fois ?",
  answers: [
    "A. for",
    "B. while",
    "C. do...while",
    "D. Aucune",
  ],
  correct: 2,
},
{
  question: "Q24. Quel mot-clé permet de quitter immédiatement une boucle ?",
  answers: ["A. skip", "B. stop", "C. continue", "D. break"],
  correct: 3,
},
{
  question: "Q25. Quel mot-clé passe à l'itération suivante d'une boucle ?",
  answers: ["A. break", "B. continue", "C. exit", "D. return"],
  correct: 1,
},
{
  question: "Q26. Quel est le résultat de for(int i=0; i<3; i++) System.out.print(i); ?",
  answers: ["A. 123", "B. 012", "C. 0123", "D. 321"],
  correct: 1,
},
{
  question: "Q27. Quel opérateur logique signifie ET ?",
  answers: ["A. ||", "B. !", "C. &&", "D. &lt;"],
  correct: 2,
},
{
  question: "Q28. Quel opérateur logique signifie OU ?",
  answers: ["A. &&", "B. ||", "C. !", "D. =="],
  correct: 1,
},
{
  question: "Q29. Quelle structure permet de sélectionner un cas parmi plusieurs ?",
  answers: ["A. switch", "B. import", "C. package", "D. extends"],
  correct: 0,
},
{
  question: "Q30. Quel est le résultat de int x=4; if(x>2) x=7; ?",
  answers: ["A. 2", "B. 4", "C. 7", "D. Erreur"],
  correct: 2,
},
{
  question: "Q31. Quel est l'indice du premier élément d'un tableau Java ?",
  answers: ["A. 1", "B. -1", "C. 0", "D. Cela dépend"],
  correct: 2,
},
{
  question: "Q32. Comment obtenir la taille d'un tableau nommé tab ?",
  answers: [
    "A. tab.size()",
    "B. tab.length",
    "C. tab.length()",
    "D. size(tab)",
  ],
  correct: 1,
},
{
  question: "Q33. Comment accéder au troisième élément d'un tableau tab ?",
  answers: ["A. tab[3]", "B. tab[2]", "C. tab(3)", "D. tab{2}"],
  correct: 1,
},
{
  question: "Q34. Que se passe-t-il si on accède à un indice invalide d'un tableau ?",
  answers: [
    "A. Le tableau s'agrandit",
    "B. La valeur devient null",
    "C. Une ArrayIndexOutOfBoundsException est levée",
    "D. Le programme corrige l'indice",
  ],
  correct: 2,
},
{
  question: "Q35. Quelle propriété indique le nombre d'éléments d'un tableau tab ?",
  answers: ["A. tab.count", "B. tab.length", "C. tab.size()", "D. tab.capacity()"],
  correct: 1,
},
{
  question: "Q36. Quel type représente une chaîne de caractères en Java ?",
  answers: ["A. char", "B. String", "C. text", "D. CharacterArray"],
  correct: 1,
},
{
  question: "Q37. Quelle méthode renvoie la longueur d'une chaîne s ?",
  answers: ["A. s.length", "B. s.size()", "C. s.length()", "D. length(s)"],
  correct: 2,
},
{
  question: "Q38. Quelle méthode compare le contenu de deux chaînes s1 et s2 ?",
  answers: ["A. s1 == s2", "B. s1.equals(s2)", "C. s1 = s2", "D. s1.compare(s2)"],
  correct: 1,
},
{
  question: "Q39. Quel est le résultat de \"Java\".charAt(0) ?",
  answers: ["A. J", "B. a", "C. v", "D. Erreur"],
  correct: 0,
},
{
  question: "Q40. Les objets String en Java sont :",
  answers: [
    "A. Toujours modifiables",
    "B. Immuables",
    "C. Des types primitifs",
    "D. Des tableaux d'entiers",
  ],
  correct: 1,
},
{
  question: "Q41. Qu'est-ce qu'une classe en Java ?",
  answers: [
    "A. Un modèle décrivant des objets",
    "B. Une variable locale",
    "C. Une boucle",
    "D. Une exception uniquement",
  ],
  correct: 0,
},
{
  question: "Q42. Qu'est-ce qu'un objet ?",
  answers: [
    "A. Une instruction conditionnelle",
    "B. Une instance d'une classe",
    "C. Un package",
    "D. Une méthode statique uniquement",
  ],
  correct: 1,
},
{
  question: "Q43. Quel mot-clé crée un nouvel objet ?",
  answers: ["A. create", "B. class", "C. new", "D. instance"],
  correct: 2,
},
{
  question: "Q44. Comment désigne-t-on une fonction définie dans une classe ?",
  answers: ["A. Méthode", "B. Package", "C. Tableau", "D. Interface graphique"],
  correct: 0,
},
{
  question: "Q45. Quel mot-clé permet l'héritage d'une classe ?",
  answers: ["A. implements", "B. extends", "C. inherits", "D. super"],
  correct: 1,
},
{
  question: "Q46. Quel mot-clé permet à une classe d'implémenter une interface ?",
  answers: ["A. extends", "B. inherits", "C. implements", "D. interfaceOf"],
  correct: 2,
},
{
  question: "Q47. Quel mot-clé fait référence à l'objet courant ?",
  answers: ["A. super", "B. this", "C. self", "D. current"],
  correct: 1,
},
{
  question: "Q48. Quel mot-clé appelle le constructeur de la classe mère ?",
  answers: ["A. this", "B. parent", "C. base", "D. super"],
  correct: 3,
},
{
  question: "Q49. Quel est le rôle d'un constructeur ?",
  answers: [
    "A. Initialiser un objet",
    "B. Détruire automatiquement un objet",
    "C. Importer un package",
    "D. Déclarer une interface",
  ],
  correct: 0,
},
{
  question: "Q50. Un constructeur Java possède généralement :",
  answers: [
    "A. Un type de retour obligatoire",
    "B. Le même nom que la classe",
    "C. Le nom main",
    "D. Le mot-clé constructor obligatoire",
  ],
  correct: 1,
},
{
  question: "Q51. Quel modificateur limite l'accès au membre à sa classe ?",
  answers: ["A. public", "B. protected", "C. private", "D. static"],
  correct: 2,
},
{
  question: "Q52. Quel modificateur rend un membre accessible depuis partout, sous réserve des règles de classe et de module ?",
  answers: ["A. private", "B. public", "C. final", "D. abstract"],
  correct: 1,
},
{
  question: "Q53. Quel concept consiste à cacher les détails internes d'un objet ?",
  answers: ["A. Encapsulation", "B. Compilation", "C. Itération", "D. Récursion"],
  correct: 0,
},
{
  question: "Q54. Le polymorphisme permet notamment :",
  answers: [
    "A. D'utiliser une référence de type parent pour un objet enfant",
    "B. D'interdire l'héritage",
    "C. De supprimer toutes les méthodes",
    "D. De remplacer les types par des commentaires",
  ],
  correct: 0,
},
{
  question: "Q55. Quelle annotation signale couramment la redéfinition d'une méthode ?",
  answers: ["A. @InheritedMethod", "B. @Override", "C. @Replace", "D. @Redefine"],
  correct: 1,
},
{
  question: "Q56. Une classe déclarée abstract :",
  answers: [
    "A. Peut toujours être instanciée directement",
    "B. Ne peut pas être déclarée",
    "C. Ne peut pas être instanciée directement",
    "D. Ne peut contenir aucune méthode concrète",
  ],
  correct: 2,
},
{
  question: "Q57. Une interface Java sert notamment à :",
  answers: [
    "A. Définir un contrat de comportement",
    "B. Stocker uniquement des variables locales",
    "C. Remplacer le compilateur",
    "D. Créer des boucles",
  ],
  correct: 0,
},
{
  question: "Q58. Une classe Java peut implémenter :",
  answers: [
    "A. Une seule interface au maximum",
    "B. Plusieurs interfaces",
    "C. Aucune interface dans tous les cas",
    "D. Uniquement des interfaces privées",
  ],
  correct: 1,
},
{
  question: "Q59. Le mot-clé final appliqué à une variable signifie généralement :",
  answers: [
    "A. Qu'elle est automatiquement publique",
    "B. Qu'elle ne peut plus recevoir une nouvelle affectation",
    "C. Qu'elle devient une méthode",
    "D. Qu'elle est supprimée",
  ],
  correct: 1,
},
{
  question: "Q60. La surcharge de méthodes (overloading) consiste à :",
  answers: [
    "A. Définir plusieurs méthodes de même nom avec des paramètres différents",
    "B. Supprimer une méthode héritée",
    "C. Changer uniquement le type de retour",
    "D. Déclarer toutes les méthodes private",
  ],
  correct: 0,
},
{
  question: "Q61. Quel bloc contient le code susceptible de lever une exception ?",
  answers: ["A. catch", "B. finally", "C. try", "D. throw"],
  correct: 2,
},
{
  question: "Q62. Quel bloc permet d'intercepter une exception ?",
  answers: ["A. catch", "B. import", "C. package", "D. extends"],
  correct: 0,
},
{
  question: "Q63. Quel bloc est généralement destiné au nettoyage après try/catch ?",
  answers: ["A. throws", "B. finally", "C. static", "D. super"],
  correct: 1,
},
{
  question: "Q64. Quel mot-clé permet de déclencher explicitement une exception ?",
  answers: ["A. throws", "B. catch", "C. try", "D. throw"],
  correct: 3,
},
{
  question: "Q65. Quel mot-clé déclare les exceptions qu'une méthode peut propager ?",
  answers: ["A. throw", "B. throws", "C. exception", "D. finally"],
  correct: 1,
},
{
  question: "Q66. Quelle exception est généralement levée lors d'une division entière par zéro ?",
  answers: [
    "A. NullPointerException",
    "B. IOException",
    "C. ArithmeticException",
    "D. ClassNotFoundException",
  ],
  correct: 2,
},
{
  question: "Q67. Que signifie NullPointerException ?",
  answers: [
    "A. Une référence null est utilisée de manière invalide",
    "B. Un tableau est toujours plein",
    "C. Une classe est abstraite",
    "D. Une boucle ne termine pas",
  ],
  correct: 0,
},
{
  question: "Q68. Quelle catégorie d'exceptions doit généralement être traitée ou déclarée ?",
  answers: [
    "A. Toutes les erreurs de syntaxe",
    "B. Les exceptions checked",
    "C. Aucune exception",
    "D. Uniquement les exceptions personnalisées",
  ],
  correct: 1,
},
{
  question: "Q69. Quelle est la classe mère des exceptions et erreurs Java ?",
  answers: ["A. Object", "B. Exception", "C. Throwable", "D. Runtime"],
  correct: 2,
},
{
  question: "Q70. Quelle exception peut survenir lors de l'accès à un élément inexistant d'une liste ?",
  answers: [
    "A. IndexOutOfBoundsException",
    "B. IOException",
    "C. SQLException",
    "D. NumberFormatException",
  ],
  correct: 0,
},
{
  question: "Q71. À quoi sert principalement une ArrayList ?",
  answers: [
    "A. À gérer une liste dynamique d'éléments",
    "B. À compiler du code",
    "C. À créer une interface",
    "D. À lancer la JVM",
  ],
  correct: 0,
},
{
  question: "Q72. Quelle interface représente une collection de couples clé-valeur ?",
  answers: ["A. List", "B. Set", "C. Map", "D. Queue"],
  correct: 2,
},
{
  question: "Q73. Quelle collection interdit les doublons selon son mécanisme d'égalité ?",
  answers: ["A. List", "B. Set", "C. ArrayList", "D. LinkedList"],
  correct: 1,
},
{
  question: "Q74. Quelle collection conserve généralement l'ordre d'insertion et accepte les doublons ?",
  answers: ["A. List", "B. Set", "C. Map", "D. HashSet"],
  correct: 0,
},
{
  question: "Q75. Quelle implémentation utilise une table de hachage pour stocker des couples clé-valeur ?",
  answers: ["A. ArrayList", "B. HashMap", "C. LinkedList", "D. TreeSet"],
  correct: 1,
},
{
  question: "Q76. Quelle méthode ajoute un élément à une ArrayList ?",
  answers: ["A. insertItem()", "B. put()", "C. add()", "D. appendElement()"],
  correct: 2,
},
{
  question: "Q77. Quelle méthode renvoie le nombre d'éléments d'une ArrayList liste ?",
  answers: ["A. liste.length", "B. liste.size()", "C. liste.count", "D. liste.length()"],
  correct: 1,
},
{
  question: "Q78. Quel type de données peut être utilisé comme paramètre générique d'une collection ?",
  answers: [
    "A. Uniquement int primitif",
    "B. Uniquement double primitif",
    "C. Un type référence, par exemple String",
    "D. Uniquement boolean primitif",
  ],
  correct: 2,
},
{
  question: "Q79. Quel type enveloppe permet de représenter un int dans une collection générique ?",
  answers: ["A. Int", "B. Integer", "C. NumberInt", "D. PrimitiveInt"],
  correct: 1,
},
{
  question: "Q80. Quel est le rôle d'un Iterator ?",
  answers: [
    "A. Parcourir les éléments d'une collection",
    "B. Compiler une classe",
    "C. Créer une JVM",
    "D. Convertir Java en SQL",
  ],
  correct: 0,
},
{
  question: "Q81. Quel mot-clé permet d'importer une classe ou un package ?",
  answers: ["A. include", "B. using", "C. import", "D. require"],
  correct: 2,
},
{
  question: "Q82. Quel mot-clé déclare le package d'une classe ?",
  answers: ["A. namespace", "B. package", "C. moduleOf", "D. include"],
  correct: 1,
},
{
  question: "Q83. Que signifie JDK ?",
  answers: [
    "A. Java Development Kit",
    "B. Java Data Kernel",
    "C. Java Deployment Key",
    "D. Java Design Knowledge",
  ],
  correct: 0,
},
{
  question: "Q84. Quel composant exécute le bytecode Java ?",
  answers: ["A. Javadoc", "B. JVM", "C. javac", "D. JAR"],
  correct: 1,
},
{
  question: "Q85. Quel outil sert à générer la documentation à partir de commentaires Java ?",
  answers: ["A. javac", "B. java", "C. javadoc", "D. jar"],
  correct: 2,
},
{
  question: "Q86. Quel outil permet généralement de regrouper des classes et ressources dans une archive Java ?",
  answers: ["A. jar", "B. javac", "C. javadoc", "D. jdb seulement"],
  correct: 0,
},
{
  question: "Q87. Quelle instruction lit couramment une saisie clavier avec Scanner ?",
  answers: [
    "A. Scanner.readLine() sans objet",
    "B. System.in.readText()",
    "C. new Scanner(System.in)",
    "D. Console.inputScanner()",
  ],
  correct: 2,
},
{
  question: "Q88. Quel mot-clé déclare un membre appartenant à la classe plutôt qu'à chaque instance ?",
  answers: ["A. final", "B. static", "C. public", "D. transient"],
  correct: 1,
},
{
  question: "Q89. Quelle méthode compare généralement le contenu de deux objets String ?",
  answers: ["A. equals()", "B. same()", "C. compareIdentity()", "D. isEqualTo()"],
  correct: 0,
},
{
  question: "Q90. Que représente null en Java ?",
  answers: [
    "A. L'entier zéro",
    "B. Une chaîne vide",
    "C. L'absence de référence vers un objet",
    "D. La valeur false",
  ],
  correct: 2,
},
{
  question: "Q91. Quel est le résultat de int x=5; System.out.println(x++); ?",
  answers: ["A. 4", "B. 5", "C. 6", "D. Erreur de compilation"],
  correct: 1,
},
{
  question: "Q92. Quel est le résultat de int x=5; System.out.println(++x); ?",
  answers: ["A. 4", "B. 5", "C. 6", "D. Erreur de compilation"],
  correct: 2,
},
{
  question: "Q93. Que produit System.out.println(5 == 5); ?",
  answers: ["A. 5", "B. true", "C. false", "D. Erreur"],
  correct: 1,
},
{
  question: "Q94. Quel est le résultat de System.out.println(10 % 4); ?",
  answers: ["A. 2", "B. 2.5", "C. 4", "D. 0"],
  correct: 0,
},
{
  question: "Q95. Que produit int[] t = {2,4,6}; System.out.println(t[1]); ?",
  answers: ["A. 2", "B. 4", "C. 6", "D. Erreur"],
  correct: 1,
},
{
  question: "Q96. Que produit String s = \"Java\"; System.out.println(s.length()); ?",
  answers: ["A. 3", "B. 4", "C. 5", "D. Erreur"],
  correct: 1,
},
{
  question: "Q97. Quel est le résultat de System.out.println(\"Java\" + 8); ?",
  answers: ["A. Java8", "B. 8Java", "C. Erreur", "D. 8"],
  correct: 0,
},
{
  question: "Q98. Que se passe-t-il si une variable locale primitive est utilisée sans initialisation ?",
  answers: [
    "A. Elle vaut toujours zéro",
    "B. Elle vaut null",
    "C. Le compilateur signale une erreur si elle n'est pas initialisée avant lecture",
    "D. Elle vaut false dans tous les cas",
  ],
  correct: 2,
},
{
  question: "Q99. Que se passe-t-il si une classe tente d'étendre directement deux classes Java ?",
  answers: [
    "A. C'est toujours autorisé",
    "B. C'est interdit en Java",
    "C. C'est possible avec implements",
    "D. Cela dépend uniquement du constructeur",
  ],
  correct: 1,
},
{
  question: "Q100. Quel composant peut compiler du bytecode fréquemment exécuté en code machine pendant l'exécution ?",
  answers: ["A. JRE", "B. Javadoc", "C. JIT", "D. Scanner"],
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
