const questions = [
{
  question: "1) Que signifie Java ?",
  answers: [
    "Un système d'exploitation",
    "Un langage de programmation",
    "Un système de gestion de base de données",
    "Un navigateur web",
  ],
  correct: 1,
},

{
  question: "2) Quel composant permet de compiler un programme Java ?",
  answers: [
    "JVM",
    "JRE",
    "JDK",
    "JAR",
  ],
  correct: 2,
},

{
  question: "3) Que signifie JVM ?",
  answers: [
    "Java Variable Machine",
    "Java Virtual Machine",
    "Java Visual Machine",
    "Java Version Manager",
  ],
  correct: 1,
},

{
  question: "4) Que signifie JDK ?",
  answers: [
    "Java Development Kit",
    "Java Deployment Kit",
    "Java Data Kit",
    "Java Development Kernel",
  ],
  correct: 0,
},

{
  question: "5) Que signifie JRE ?",
  answers: [
    "Java Runtime Environment",
    "Java Remote Environment",
    "Java Runtime Extension",
    "Java Resource Environment",
  ],
  correct: 0,
},

{
  question: "6) Quelle extension possède généralement un fichier source Java ?",
  answers: [
    ".class",
    ".java",
    ".jar",
    ".javac",
  ],
  correct: 1,
},

{
  question: "7) Quelle extension possède généralement un fichier compilé Java ?",
  answers: [
    ".java",
    ".exe",
    ".class",
    ".obj",
  ],
  correct: 2,
},

{
  question: "8) Quelle commande permet de compiler un fichier Java ?",
  answers: [
    "java",
    "javac",
    "compile",
    "javadoc",
  ],
  correct: 1,
},

{
  question: "9) Quelle commande permet généralement d'exécuter une classe Java compilée ?",
  answers: [
    "javac",
    "java",
    "runjava",
    "execute",
  ],
  correct: 1,
},

{
  question: "10) Quel est le point d'entrée classique d'une application Java ?",
  answers: [
    "start()",
    "run()",
    "main()",
    "execute()",
  ],
  correct: 2,
},

{
  question: "11) Quelle signature correspond à la méthode main classique en Java ?",
  answers: [
    "public static void main(String[] args)",
    "public void main(String args)",
    "static public int main(String[] args)",
    "private static void main(String[] args)",
  ],
  correct: 0,
},

{
  question: "12) Quel mot-clé permet de déclarer une classe en Java ?",
  answers: [
    "object",
    "class",
    "struct",
    "define",
  ],
  correct: 1,
},

{
  question: "13) Quel mot-clé permet de créer un objet en Java ?",
  answers: [
    "create",
    "object",
    "new",
    "instance",
  ],
  correct: 2,
},

{
  question: "14) Quel type permet de stocker une valeur entière ?",
  answers: [
    "boolean",
    "int",
    "char",
    "String",
  ],
  correct: 1,
},

{
  question: "15) Quel type permet de stocker une valeur vraie ou fausse ?",
  answers: [
    "bool",
    "boolean",
    "logical",
    "bit",
  ],
  correct: 1,
},

{
  question: "16) Quel type Java permet de stocker un caractère Unicode ?",
  answers: [
    "char",
    "String",
    "character",
    "text",
  ],
  correct: 0,
},

{
  question: "17) Quelle valeur peut prendre une variable de type boolean ?",
  answers: [
    "0 ou 1 uniquement",
    "true ou false",
    "yes ou no",
    "on ou off",
  ],
  correct: 1,
},

{
  question: "18) Quelle est la taille d'un int en Java ?",
  answers: [
    "8 bits",
    "16 bits",
    "32 bits",
    "64 bits",
  ],
  correct: 2,
},

{
  question: "19) Quelle est la taille d'un long en Java ?",
  answers: [
    "16 bits",
    "32 bits",
    "64 bits",
    "128 bits",
  ],
  correct: 2,
},

{
  question: "20) Quelle est la taille d'un short en Java ?",
  answers: [
    "8 bits",
    "16 bits",
    "32 bits",
    "64 bits",
  ],
  correct: 1,
},

{
  question: "21) Quelle est la taille d'un byte en Java ?",
  answers: [
    "4 bits",
    "8 bits",
    "16 bits",
    "32 bits",
  ],
  correct: 1,
},

{
  question: "22) Quelle est la taille d'un char en Java ?",
  answers: [
    "8 bits",
    "16 bits",
    "32 bits",
    "64 bits",
  ],
  correct: 1,
},

{
  question: "23) Quel type est utilisé pour les nombres à virgule simple précision ?",
  answers: [
    "double",
    "float",
    "decimal",
    "real",
  ],
  correct: 1,
},

{
  question: "24) Quel type est utilisé pour les nombres à virgule double précision ?",
  answers: [
    "float",
    "double",
    "decimal",
    "real",
  ],
  correct: 1,
},

{
  question: "25) Quelle valeur par défaut possède une variable d'instance de type int ?",
  answers: [
    "null",
    "1",
    "0",
    "-1",
  ],
  correct: 2,
},

{
  question: "26) Quelle valeur par défaut possède une variable d'instance de type boolean ?",
  answers: [
    "true",
    "false",
    "0",
    "null",
  ],
  correct: 1,
},

{
  question: "27) Quelle valeur par défaut possède une variable d'instance de type référence ?",
  answers: [
    "0",
    "false",
    "null",
    "undefined",
  ],
  correct: 2,
},

{
  question: "28) Quelle instruction permet de déclarer une variable entière ?",
  answers: [
    "integer x;",
    "int x;",
    "number x;",
    "integer: x;",
  ],
  correct: 1,
},

{
  question: "29) Quelle instruction est correcte pour initialiser une variable entière ?",
  answers: [
    "int x = 10;",
    "int x := 10;",
    "integer x = 10;",
    "x int = 10;",
  ],
  correct: 0,
},

{
  question: "30) Quel opérateur est utilisé pour l'addition ?",
  answers: [
    "+",
    "-",
    "*",
    "/",
  ],
  correct: 0,
},

{
  question: "31) Quel opérateur permet d'obtenir le reste d'une division entière ?",
  answers: [
    "/",
    "//",
    "%",
    "mod",
  ],
  correct: 2,
},

{
  question: "32) Quel est le résultat de 10 % 3 en Java ?",
  answers: [
    "1",
    "2",
    "3",
    "0",
  ],
  correct: 0,
},

{
  question: "33) Quel opérateur représente l'égalité dans une condition Java ?",
  answers: [
    "=",
    "==",
    "===",
    "!=",
  ],
  correct: 1,
},

{
  question: "34) Quel opérateur signifie « différent de » ?",
  answers: [
    "<>",
    "!=",
    "!==",
    "not=",
  ],
  correct: 1,
},

{
  question: "35) Quel opérateur représente un ET logique ?",
  answers: [
    "||",
    "&&",
    "&|",
    "AND",
  ],
  correct: 1,
},

{
  question: "36) Quel opérateur représente un OU logique ?",
  answers: [
    "&&",
    "||",
    "OR",
    "|&",
  ],
  correct: 1,
},

{
  question: "37) Quel opérateur représente la négation logique ?",
  answers: [
    "~",
    "!",
    "not",
    "!=",
  ],
  correct: 1,
},

{
  question: "38) Quel est le résultat de l'expression 5 > 3 ?",
  answers: [
    "true",
    "false",
    "5",
    "3",
  ],
  correct: 0,
},

{
  question: "39) Quel est le résultat de l'expression 5 == 5 ?",
  answers: [
    "true",
    "false",
    "1",
    "null",
  ],
  correct: 0,
},

{
  question: "40) Quelle instruction permet d'effectuer un test conditionnel ?",
  answers: [
    "if",
    "when",
    "check",
    "condition",
  ],
  correct: 0,
},

{
  question: "41) Quelle syntaxe est correcte pour une condition if ?",
  answers: [
    "if x > 5 { }",
    "if (x > 5) { }",
    "if x > 5 then { }",
    "if [x > 5] { }",
  ],
  correct: 1,
},

{
  question: "42) Quel mot-clé permet d'exécuter un bloc lorsque la condition if est fausse ?",
  answers: [
    "otherwise",
    "else",
    "otherwise if",
    "default",
  ],
  correct: 1,
},

{
  question: "43) Quel mot-clé permet de tester une nouvelle condition après un if ?",
  answers: [
    "elseif",
    "elif",
    "else if",
    "nextif",
  ],
  correct: 2,
},

{
  question: "44) Quelle structure permet de sélectionner une branche parmi plusieurs valeurs ?",
  answers: [
    "switch",
    "select",
    "choose",
    "caseif",
  ],
  correct: 0,
},

{
  question: "45) Quel mot-clé est utilisé dans une structure switch pour définir un cas ?",
  answers: [
    "option",
    "case",
    "when",
    "choice",
  ],
  correct: 1,
},

{
  question: "46) Quel mot-clé permet de définir le cas par défaut dans switch ?",
  answers: [
    "else",
    "default",
    "otherwise",
    "standard",
  ],
  correct: 1,
},

{
  question: "47) Quel mot-clé permet de sortir d'un switch ou d'une boucle ?",
  answers: [
    "exit",
    "stop",
    "break",
    "return",
  ],
  correct: 2,
},

{
  question: "48) Quel mot-clé permet de passer directement à l'itération suivante d'une boucle ?",
  answers: [
    "skip",
    "continue",
    "next",
    "pass",
  ],
  correct: 1,
},

{
  question: "49) Quelle boucle est particulièrement adaptée lorsqu'on connaît le nombre d'itérations ?",
  answers: [
    "for",
    "while",
    "do-while",
    "repeat",
  ],
  correct: 0,
},

{
  question: "50) Quelle boucle exécute son bloc au moins une fois ?",
  answers: [
    "for",
    "while",
    "do-while",
    "foreach",
  ],
  correct: 2,
},

{
  question: "51) Quelle syntaxe est correcte pour une boucle for ?",
  answers: [
    "for (int i = 0; i < 10; i++) { }",
    "for int i = 0 to 10 { }",
    "for (i in 10) { }",
    "for [int i = 0; i < 10] { }",
  ],
  correct: 0,
},

{
  question: "52) Quelle boucle est principalement utilisée lorsque le nombre d'itérations n'est pas connu à l'avance ?",
  answers: [
    "while",
    "for",
    "switch",
    "case",
  ],
  correct: 0,
},

{
  question: "53) Quelle syntaxe permet de créer un tableau d'entiers de taille 5 ?",
  answers: [
    "int array = new int(5);",
    "int[] array = new int[5];",
    "array<int> = 5;",
    "int array[] = int[5];",
  ],
  correct: 1,
},

{
  question: "54) Quel est l'indice du premier élément d'un tableau Java ?",
  answers: [
    "0",
    "1",
    "-1",
    "Cela dépend du tableau",
  ],
  correct: 0,
},

{
  question: "55) Si un tableau contient 10 éléments, quel est l'indice du dernier élément ?",
  answers: [
    "10",
    "9",
    "11",
    "8",
  ],
  correct: 1,
},

{
  question: "56) Quelle propriété permet d'obtenir la taille d'un tableau ?",
  answers: [
    "size()",
    "length()",
    "length",
    "count",
  ],
  correct: 2,
},

{
  question: "57) Que se passe-t-il lorsqu'on accède à un indice inexistant d'un tableau ?",
  answers: [
    "Java retourne null",
    "Java retourne 0",
    "Une ArrayIndexOutOfBoundsException est levée",
    "Le programme ignore l'accès",
  ],
  correct: 2,
},

{
  question: "58) Quelle classe représente les chaînes de caractères en Java ?",
  answers: [
    "String",
    "Text",
    "CharArray",
    "StringBuilderOnly",
  ],
  correct: 0,
},

{
  question: "59) Les objets String en Java sont :",
  answers: [
    "Modifiables",
    "Immuables",
    "Toujours numériques",
    "Toujours statiques",
  ],
  correct: 1,
},

{
  question: "60) Quelle méthode permet de connaître la longueur d'une String ?",
  answers: [
    "size()",
    "length()",
    "count()",
    "getSize()",
  ],
  correct: 1,
},

{
  question: "61) Quelle méthode permet de comparer le contenu de deux String ?",
  answers: [
    "==",
    "equals()",
    "compare()",
    "same()",
  ],
  correct: 1,
},

{
  question: "62) Quelle méthode permet de convertir une String en minuscules ?",
  answers: [
    "lower()",
    "toLowerCase()",
    "lowerCase()",
    "makeLower()",
  ],
  correct: 1,
},

{
  question: "63) Quelle méthode permet de convertir une String en majuscules ?",
  answers: [
    "upper()",
    "toUpperCase()",
    "upperCase()",
    "makeUpper()",
  ],
  correct: 1,
},

{
  question: "64) Quelle méthode permet de supprimer les espaces au début et à la fin d'une String ?",
  answers: [
    "stripSpaces()",
    "trim()",
    "removeSpaces()",
    "clean()",
  ],
  correct: 1,
},

{
  question: "65) Quelle méthode permet de récupérer un caractère à une position donnée dans une String ?",
  answers: [
    "charAt()",
    "getChar()",
    "characterAt()",
    "char()",
  ],
  correct: 0,
},

{
  question: "66) Quelle méthode permet de vérifier si une String contient une séquence donnée ?",
  answers: [
    "contains()",
    "has()",
    "exists()",
    "includesText()",
  ],
  correct: 0,
},

{
  question: "67) Quelle classe est adaptée pour construire une chaîne modifiable efficacement ?",
  answers: [
    "StringBuilder",
    "StringConstant",
    "MutableStringOnly",
    "TextBuilder",
  ],
  correct: 0,
},

{
  question: "68) Quel mot-clé permet de déclarer une constante en Java ?",
  answers: [
    "constant",
    "final",
    "const",
    "static",
  ],
  correct: 1,
},

{
  question: "69) Que signifie le mot-clé static pour un membre d'une classe ?",
  answers: [
    "Le membre appartient à la classe plutôt qu'à chaque instance",
    "Le membre ne peut jamais être utilisé",
    "Le membre est toujours privé",
    "Le membre est automatiquement final",
  ],
  correct: 0,
},

{
  question: "70) Quel modificateur rend un membre accessible uniquement dans sa classe ?",
  answers: [
    "public",
    "protected",
    "private",
    "internal",
  ],
  correct: 2,
},

{
  question: "71) Quel modificateur permet l'accès depuis toutes les classes accessibles ?",
  answers: [
    "private",
    "protected",
    "public",
    "package",
  ],
  correct: 2,
},

{
  question: "72) Quel modificateur permet notamment l'accès aux classes du même package et aux sous-classes ?",
  answers: [
    "private",
    "protected",
    "public",
    "static",
  ],
  correct: 1,
},

{
  question: "73) Quel principe consiste à regrouper les données et les méthodes dans une classe tout en contrôlant leur accès ?",
  answers: [
    "Encapsulation",
    "Compilation",
    "Héritage",
    "Sérialisation",
  ],
  correct: 0,
},

{
  question: "74) Quel mécanisme permet à une classe d'hériter d'une autre classe ?",
  answers: [
    "implements",
    "extends",
    "inherits",
    "super",
  ],
  correct: 1,
},

{
  question: "75) Quel mot-clé permet à une classe d'implémenter une interface ?",
  answers: [
    "extends",
    "implements",
    "interface",
    "inherits",
  ],
  correct: 1,
},

{
  question: "76) Une classe Java peut-elle hériter directement de plusieurs classes ?",
  answers: [
    "Oui, sans limitation",
    "Oui, avec le mot-clé implements",
    "Non",
    "Oui, uniquement avec plusieurs extends",
  ],
  correct: 2,
},

{
  question: "77) Une classe Java peut-elle implémenter plusieurs interfaces ?",
  answers: [
    "Non",
    "Oui",
    "Seulement deux",
    "Seulement si elles sont abstraites",
  ],
  correct: 1,
},

{
  question: "78) Quel mot-clé permet d'empêcher une classe d'être héritée ?",
  answers: [
    "static",
    "final",
    "private",
    "sealedOnly",
  ],
  correct: 1,
},

{
  question: "79) Quel mot-clé permet d'appeler le constructeur de la classe mère ?",
  answers: [
    "parent",
    "base",
    "super",
    "this",
  ],
  correct: 2,
},

{
  question: "80) Quel mot-clé permet de référencer l'objet courant ?",
  answers: [
    "self",
    "current",
    "this",
    "object",
  ],
  correct: 2,
},

{
  question: "81) Comment s'appelle une méthode ayant le même nom que sa classe et sans type de retour ?",
  answers: [
    "Une fonction",
    "Un constructeur",
    "Un destructeur",
    "Une interface",
  ],
  correct: 1,
},

{
  question: "82) Quand un constructeur est-il généralement appelé ?",
  answers: [
    "Lors de la destruction de l'objet",
    "Lors de la création de l'objet",
    "Lors de la compilation uniquement",
    "Lors de l'importation du package",
  ],
  correct: 1,
},

{
  question: "83) Peut-on surcharger un constructeur en Java ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement dans une classe abstraite",
    "Uniquement dans une interface",
  ],
  correct: 0,
},

{
  question: "84) Le polymorphisme permet notamment :",
  answers: [
    "À une même interface de représenter différentes implémentations",
    "De supprimer toutes les classes",
    "De convertir automatiquement tout objet en String",
    "D'empêcher l'héritage",
  ],
  correct: 0,
},

{
  question: "85) Que signifie la surcharge de méthodes (overloading) ?",
  answers: [
    "Redéfinir une méthode héritée avec exactement la même signature",
    "Définir plusieurs méthodes portant le même nom avec des paramètres différents",
    "Supprimer une méthode",
    "Rendre une méthode privée",
  ],
  correct: 1,
},

{
  question: "86) Que signifie la redéfinition de méthode (overriding) ?",
  answers: [
    "Une sous-classe fournit sa propre implémentation d'une méthode héritée",
    "Une classe possède deux constructeurs",
    "Une méthode est rendue statique",
    "Une méthode est supprimée",
  ],
  correct: 0,
},

{
  question: "87) Quel mot-clé permet d'indiquer qu'une méthode est redéfinie ?",
  answers: [
    "@Override",
    "@Overload",
    "@Inherited",
    "@Redefine",
  ],
  correct: 0,
},

{
  question: "88) Une classe abstraite peut-elle être instanciée directement avec new ?",
  answers: [
    "Oui",
    "Non",
    "Oui, uniquement si elle possède un constructeur",
    "Oui, uniquement depuis main()",
  ],
  correct: 1,
},

{
  question: "89) Quel mot-clé permet de déclarer une classe abstraite ?",
  answers: [
    "abstract",
    "virtual",
    "interface",
    "base",
  ],
  correct: 0,
},

{
  question: "90) Quel mot-clé permet de déclarer une méthode abstraite ?",
  answers: [
    "virtual",
    "abstract",
    "empty",
    "interface",
  ],
  correct: 1,
},

{
  question: "91) Quel mot-clé permet de gérer une exception dans un bloc de code ?",
  answers: [
    "try",
    "check",
    "error",
    "catchOnly",
  ],
  correct: 0,
},

{
  question: "92) Quel bloc permet de capturer une exception ?",
  answers: [
    "try",
    "catch",
    "throw",
    "error",
  ],
  correct: 1,
},

{
  question: "93) Quel bloc est généralement exécuté qu'une exception soit levée ou non ?",
  answers: [
    "catch",
    "finally",
    "throw",
    "error",
  ],
  correct: 1,
},

{
  question: "94) Quel mot-clé permet de lever explicitement une exception ?",
  answers: [
    "throws",
    "throw",
    "raise",
    "exception",
  ],
  correct: 1,
},

{
  question: "95) Quel mot-clé permet de déclarer qu'une méthode peut propager certaines exceptions ?",
  answers: [
    "throw",
    "throws",
    "exception",
    "catch",
  ],
  correct: 1,
},

{
  question: "96) Quelle classe est la superclasse de la plupart des exceptions et erreurs Java ?",
  answers: [
    "Exception",
    "Throwable",
    "Error",
    "Object",
  ],
  correct: 1,
},

{
  question: "97) Quelle classe est la classe racine de toutes les classes Java ?",
  answers: [
    "Main",
    "Class",
    "Object",
    "Root",
  ],
  correct: 2,
},

{
  question: "98) Quel package contient notamment ArrayList, HashMap et HashSet ?",
  answers: [
    "java.io",
    "java.util",
    "java.lang",
    "java.net",
  ],
  correct: 1,
},

{
  question: "99) Quelle collection permet de stocker des éléments dans une séquence et accepte les doublons ?",
  answers: [
    "HashSet",
    "ArrayList",
    "TreeSet",
    "Map",
  ],
  correct: 1,
},

{
  question: "100) Quelle collection stocke des associations clé-valeur ?",
  answers: [
    "List",
    "Set",
    "Map",
    "Queue",
  ],
  correct: 2,
},
{
  question: "101) Quelle est la sortie de ce code : int x = 5; System.out.println(x++); ?",
  answers: [
    "4",
    "5",
    "6",
    "Erreur",
  ],
  correct: 1,
},

{
  question: "102) Quelle est la sortie de ce code : int x = 5; System.out.println(++x); ?",
  answers: [
    "4",
    "5",
    "6",
    "Erreur",
  ],
  correct: 2,
},

{
  question: "103) Quel opérateur permet de décrémenter une variable de 1 ?",
  answers: [
    "++",
    "--",
    "-=",
    "+=",
  ],
  correct: 1,
},

{
  question: "104) Que produit l'expression x += 5 ?",
  answers: [
    "x = x + 5",
    "x = x - 5",
    "x = 5",
    "x = x * 5",
  ],
  correct: 0,
},

{
  question: "105) Que produit l'expression x *= 3 ?",
  answers: [
    "x = x + 3",
    "x = x - 3",
    "x = x * 3",
    "x = 3",
  ],
  correct: 2,
},

{
  question: "106) Quel opérateur est utilisé pour effectuer une division entière entre deux int ?",
  answers: [
    "/",
    "//",
    "%",
    "div",
  ],
  correct: 0,
},

{
  question: "107) Quel est le résultat de 7 / 2 lorsque les deux opérandes sont de type int ?",
  answers: [
    "3",
    "3.5",
    "4",
    "2",
  ],
  correct: 0,
},

{
  question: "108) Quel est le résultat de 7 % 2 ?",
  answers: [
    "0",
    "1",
    "2",
    "3",
  ],
  correct: 1,
},

{
  question: "109) Quel type de conversion est effectuée automatiquement d'un int vers un long ?",
  answers: [
    "Narrowing",
    "Widening",
    "Casting explicite",
    "Parsing",
  ],
  correct: 1,
},

{
  question: "110) Quel type de conversion nécessite généralement un cast explicite ?",
  answers: [
    "int vers long",
    "byte vers int",
    "double vers int",
    "char vers int",
  ],
  correct: 2,
},

{
  question: "111) Quelle syntaxe permet de convertir explicitement un double en int ?",
  answers: [
    "int x = int(value);",
    "int x = (int) value;",
    "int x = cast(value);",
    "int x = value.int();",
  ],
  correct: 1,
},

{
  question: "112) Quelle classe wrapper correspond au type primitif int ?",
  answers: [
    "Int",
    "Integer",
    "NumberInt",
    "IntWrapper",
  ],
  correct: 1,
},

{
  question: "113) Quelle classe wrapper correspond au type primitif boolean ?",
  answers: [
    "Bool",
    "Boolean",
    "BooleanValue",
    "Logical",
  ],
  correct: 1,
},

{
  question: "114) Quelle classe wrapper correspond au type primitif double ?",
  answers: [
    "Double",
    "DoubleValue",
    "Decimal",
    "Real",
  ],
  correct: 0,
},

{
  question: "115) Quel mécanisme permet de convertir automatiquement un int en Integer ?",
  answers: [
    "Autoboxing",
    "Unboxing",
    "Casting",
    "Parsing",
  ],
  correct: 0,
},

{
  question: "116) Quel mécanisme permet de convertir automatiquement un Integer en int ?",
  answers: [
    "Autoboxing",
    "Unboxing",
    "Wrapping",
    "Casting",
  ],
  correct: 1,
},

{
  question: "117) Quelle méthode permet de convertir une String en int ?",
  answers: [
    "Integer.toInt()",
    "Integer.parseInt()",
    "String.toInteger()",
    "Integer.convert()",
  ],
  correct: 1,
},

{
  question: "118) Quelle méthode permet de convertir un int en String ?",
  answers: [
    "Integer.toString()",
    "String.parseInt()",
    "int.toStringOnly()",
    "String.fromIntOnly()",
  ],
  correct: 0,
},

{
  question: "119) Quelle est la valeur de Integer.parseInt(\"25\") ?",
  answers: [
    "La String \"25\"",
    "Le nombre entier 25",
    "Le nombre 2.5",
    "Une erreur de compilation",
  ],
  correct: 1,
},

{
  question: "120) Que se passe-t-il avec Integer.parseInt(\"abc\") ?",
  answers: [
    "Retourne 0",
    "Retourne null",
    "Lève une NumberFormatException",
    "Retourne NaN",
  ],
  correct: 2,
},

{
  question: "121) Quelle méthode permet de comparer deux chaînes sans tenir compte de la casse ?",
  answers: [
    "equals()",
    "equalsIgnoreCase()",
    "compareIgnoreCaseOnly()",
    "sameIgnoreCase()",
  ],
  correct: 1,
},

{
  question: "122) Quelle méthode permet de rechercher la position d'un caractère dans une String ?",
  answers: [
    "indexOf()",
    "position()",
    "find()",
    "searchIndex()",
  ],
  correct: 0,
},

{
  question: "123) Quelle est la valeur retournée par indexOf() si l'élément recherché n'existe pas ?",
  answers: [
    "0",
    "null",
    "-1",
    "false",
  ],
  correct: 2,
},

{
  question: "124) Quelle méthode permet d'extraire une partie d'une String ?",
  answers: [
    "slice()",
    "substring()",
    "extract()",
    "part()",
  ],
  correct: 1,
},

{
  question: "125) Que retourne \"Java\".substring(1, 3) ?",
  answers: [
    "Ja",
    "av",
    "ava",
    "Java",
  ],
  correct: 1,
},

{
  question: "126) Quelle méthode permet de remplacer une séquence de caractères dans une String ?",
  answers: [
    "replace()",
    "change()",
    "swap()",
    "modify()",
  ],
  correct: 0,
},

{
  question: "127) Quelle méthode permet de diviser une String selon un séparateur ?",
  answers: [
    "divide()",
    "split()",
    "separate()",
    "explode()",
  ],
  correct: 1,
},

{
  question: "128) Quelle méthode permet de vérifier si une String commence par une valeur donnée ?",
  answers: [
    "startsWith()",
    "beginWith()",
    "start()",
    "firstWith()",
  ],
  correct: 0,
},

{
  question: "129) Quelle méthode permet de vérifier si une String se termine par une valeur donnée ?",
  answers: [
    "endsWith()",
    "finishWith()",
    "end()",
    "lastWith()",
  ],
  correct: 0,
},

{
  question: "130) Quelle classe est généralement préférable à StringBuffer lorsqu'on travaille dans un contexte non multithreadé ?",
  answers: [
    "StringBuilder",
    "StringArray",
    "TextBuilder",
    "CharBuilder",
  ],
  correct: 0,
},

{
  question: "131) Quelle classe est synchronisée parmi StringBuilder et StringBuffer ?",
  answers: [
    "StringBuilder",
    "StringBuffer",
    "Les deux",
    "Aucune",
  ],
  correct: 1,
},

{
  question: "132) Que signifie qu'une String est immuable ?",
  answers: [
    "Elle ne peut pas être créée",
    "Son contenu ne peut pas être modifié après sa création",
    "Elle ne peut pas être comparée",
    "Elle ne peut contenir que des caractères ASCII",
  ],
  correct: 1,
},

{
  question: "133) Où sont généralement stockés les objets créés avec new ?",
  answers: [
    "Dans la stack uniquement",
    "Dans le heap",
    "Dans le registre CPU",
    "Dans le BIOS",
  ],
  correct: 1,
},

{
  question: "134) Quelle zone mémoire contient généralement les variables locales d'une méthode ?",
  answers: [
    "Heap",
    "Stack",
    "Method Area uniquement",
    "Cache disque",
  ],
  correct: 1,
},

{
  question: "135) Quel mécanisme Java libère automatiquement la mémoire des objets devenus inaccessibles ?",
  answers: [
    "Destructor",
    "Garbage Collector",
    "Memory Cleaner manuel",
    "Free()",
  ],
  correct: 1,
},

{
  question: "136) Quelle méthode est historiquement associée à la demande de nettoyage par le garbage collector ?",
  answers: [
    "System.gc()",
    "System.clean()",
    "Memory.gcNow()",
    "Runtime.clean()",
  ],
  correct: 0,
},

{
  question: "137) Le garbage collector garantit-il que System.gc() libérera immédiatement toute la mémoire ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement sous Windows",
    "Uniquement avec JDK",
  ],
  correct: 1,
},

{
  question: "138) Quel mot-clé permet de créer une sous-classe ?",
  answers: [
    "inherits",
    "extends",
    "implements",
    "super",
  ],
  correct: 1,
},

{
  question: "139) Quel mot-clé permet d'appeler un constructeur de la classe mère ?",
  answers: [
    "this",
    "parent",
    "super",
    "base",
  ],
  correct: 2,
},

{
  question: "140) Quel mot-clé permet d'appeler un autre constructeur de la même classe ?",
  answers: [
    "super",
    "this",
    "self",
    "constructor",
  ],
  correct: 1,
},

{
  question: "141) Où doit se trouver l'appel à super() ou this() dans un constructeur ?",
  answers: [
    "À la dernière ligne",
    "N'importe où",
    "Comme première instruction",
    "Dans un bloc finally",
  ],
  correct: 2,
},

{
  question: "142) Une classe qui ne déclare aucun constructeur possède-t-elle automatiquement un constructeur par défaut ?",
  answers: [
    "Oui",
    "Non",
    "Seulement si elle est abstraite",
    "Seulement si elle est final",
  ],
  correct: 0,
},

{
  question: "143) Si une classe déclare elle-même un constructeur, Java fournit-il automatiquement un constructeur sans argument ?",
  answers: [
    "Oui, toujours",
    "Non",
    "Uniquement avec public",
    "Uniquement avec private",
  ],
  correct: 1,
},

{
  question: "144) Peut-on avoir plusieurs méthodes portant le même nom dans une classe ?",
  answers: [
    "Oui, grâce à la surcharge",
    "Non, jamais",
    "Seulement si elles sont static",
    "Seulement si elles sont private",
  ],
  correct: 0,
},

{
  question: "145) Deux méthodes surchargées doivent-elles obligatoirement avoir des paramètres différents ?",
  answers: [
    "Oui",
    "Non",
    "Seulement pour les méthodes static",
    "Seulement pour les méthodes public",
  ],
  correct: 0,
},

{
  question: "146) Le type de retour seul peut-il différencier deux méthodes surchargées ?",
  answers: [
    "Oui",
    "Non",
    "Seulement avec void",
    "Seulement avec int",
  ],
  correct: 1,
},

{
  question: "147) Une méthode redéfinie peut-elle avoir un accès plus restrictif que la méthode de la classe mère ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement si elle est static",
    "Uniquement si elle est final",
  ],
  correct: 1,
},

{
  question: "148) Une méthode final peut-elle être redéfinie par une sous-classe ?",
  answers: [
    "Oui",
    "Non",
    "Seulement si elle est public",
    "Seulement si elle est protected",
  ],
  correct: 1,
},

{
  question: "149) Une méthode static est-elle liée à une instance particulière ?",
  answers: [
    "Oui",
    "Non, elle appartient à la classe",
    "Uniquement dans une classe abstraite",
    "Uniquement dans une interface",
  ],
  correct: 1,
},

{
  question: "150) Une méthode static peut-elle accéder directement à une variable d'instance non statique ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement avec private",
    "Uniquement avec protected",
  ],
  correct: 1,
},

{
  question: "151) Une classe peut-elle contenir une variable static et une variable d'instance portant le même nom ?",
  answers: [
    "Oui",
    "Non",
    "Seulement avec final",
    "Seulement avec private",
  ],
  correct: 0,
},

{
  question: "152) Quel mot-clé empêche une variable de recevoir une nouvelle valeur après son initialisation ?",
  answers: [
    "constant",
    "final",
    "static",
    "immutable",
  ],
  correct: 1,
},

{
  question: "153) Une variable final doit-elle obligatoirement être initialisée lors de sa déclaration ?",
  answers: [
    "Oui, toujours",
    "Non, elle peut être initialisée plus tard une seule fois",
    "Non, elle peut être modifiée plusieurs fois",
    "Uniquement si elle est static",
  ],
  correct: 1,
},

{
  question: "154) Une classe final peut-elle être étendue ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement par une classe abstraite",
    "Uniquement par une interface",
  ],
  correct: 1,
},

{
  question: "155) Une méthode abstract peut-elle être private ?",
  answers: [
    "Oui",
    "Non",
    "Seulement dans une classe finale",
    "Seulement dans une interface",
  ],
  correct: 1,
},

{
  question: "156) Une classe abstraite peut-elle avoir un constructeur ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement un constructeur private",
    "Uniquement un constructeur static",
  ],
  correct: 0,
},

{
  question: "157) Une classe abstraite peut-elle contenir des méthodes concrètes ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement des méthodes static",
    "Uniquement des méthodes final",
  ],
  correct: 0,
},

{
  question: "158) Une interface peut-elle être implémentée par plusieurs classes ?",
  answers: [
    "Oui",
    "Non",
    "Seulement deux classes",
    "Seulement les classes abstraites",
  ],
  correct: 0,
},

{
  question: "159) Une classe peut-elle implémenter plusieurs interfaces ?",
  answers: [
    "Oui",
    "Non",
    "Seulement deux",
    "Seulement si elles ont le même nom",
  ],
  correct: 0,
},

{
  question: "160) Une interface peut-elle étendre plusieurs interfaces ?",
  answers: [
    "Oui",
    "Non",
    "Seulement une",
    "Seulement deux",
  ],
  correct: 0,
},

{
  question: "161) Quel mot-clé est utilisé lorsqu'une interface étend une autre interface ?",
  answers: [
    "implements",
    "extends",
    "inherits",
    "interface",
  ],
  correct: 1,
},

{
  question: "162) Une classe Java peut-elle étendre une classe et implémenter plusieurs interfaces ?",
  answers: [
    "Oui",
    "Non",
    "Seulement si la classe est abstract",
    "Seulement si les interfaces sont final",
  ],
  correct: 0,
},

{
  question: "163) Quel est le rôle principal d'une interface ?",
  answers: [
    "Définir un contrat que les classes peuvent implémenter",
    "Créer obligatoirement des objets",
    "Remplacer la JVM",
    "Stocker uniquement des variables",
  ],
  correct: 0,
},

{
  question: "164) Quel mot-clé permet de vérifier le type d'un objet à l'exécution ?",
  answers: [
    "typeof",
    "instanceof",
    "is",
    "typeOf",
  ],
  correct: 1,
},

{
  question: "165) Que retourne l'expression obj instanceof MyClass ?",
  answers: [
    "Un int",
    "Un String",
    "Un boolean",
    "Un objet",
  ],
  correct: 2,
},

{
  question: "166) Peut-on utiliser instanceof avec null ?",
  answers: [
    "Oui, et le résultat est true",
    "Oui, et le résultat est false",
    "Non, cela provoque toujours une exception",
    "Seulement avec Object",
  ],
  correct: 1,
},

{
  question: "167) Quel est le résultat de null instanceof String ?",
  answers: [
    "true",
    "false",
    "null",
    "Erreur de compilation",
  ],
  correct: 1,
},

{
  question: "168) Quelle classe est souvent utilisée pour stocker une liste dynamique ?",
  answers: [
    "ArrayList",
    "Array",
    "DynamicArrayOnly",
    "ListArray",
  ],
  correct: 0,
},

{
  question: "169) Quelle interface est implémentée par ArrayList ?",
  answers: [
    "Set",
    "List",
    "Map",
    "QueueOnly",
  ],
  correct: 1,
},

{
  question: "170) ArrayList accepte-t-elle les doublons ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement les String",
    "Uniquement les Integer",
  ],
  correct: 0,
},

{
  question: "171) Quelle collection ne permet normalement pas les doublons ?",
  answers: [
    "List",
    "Set",
    "ArrayList",
    "LinkedList",
  ],
  correct: 1,
},

{
  question: "172) Quelle implémentation de Set est particulièrement connue pour utiliser une table de hachage ?",
  answers: [
    "HashSet",
    "TreeSet",
    "ArraySet",
    "LinkedArraySet",
  ],
  correct: 0,
},

{
  question: "173) Quelle collection conserve les éléments selon leur ordre naturel de tri ?",
  answers: [
    "HashSet",
    "TreeSet",
    "ArrayList",
    "HashMap",
  ],
  correct: 1,
},

{
  question: "174) Quelle classe permet de stocker des associations clé-valeur ?",
  answers: [
    "ArrayList",
    "HashMap",
    "HashSet",
    "TreeSet",
  ],
  correct: 1,
},

{
  question: "175) Une HashMap autorise-t-elle une clé null ?",
  answers: [
    "Oui, généralement une clé null",
    "Non, jamais",
    "Uniquement deux clés null",
    "Uniquement avec TreeMap",
  ],
  correct: 0,
},

{
  question: "176) Une HashMap autorise-t-elle plusieurs valeurs null ?",
  answers: [
    "Oui",
    "Non",
    "Une seule",
    "Seulement avec Integer",
  ],
  correct: 0,
},

{
  question: "177) Que se passe-t-il lorsqu'on ajoute une valeur avec une clé déjà présente dans une HashMap ?",
  answers: [
    "Une exception est toujours levée",
    "La nouvelle valeur remplace généralement l'ancienne",
    "La clé est supprimée",
    "La Map devient immutable",
  ],
  correct: 1,
},

{
  question: "178) Quelle méthode permet de récupérer une valeur associée à une clé dans une Map ?",
  answers: [
    "find()",
    "get()",
    "valueOf()",
    "search()",
  ],
  correct: 1,
},

{
  question: "179) Quelle méthode permet de vérifier si une clé existe dans une Map ?",
  answers: [
    "containsKey()",
    "hasKey()",
    "existsKey()",
    "keyExists()",
  ],
  correct: 0,
},

{
  question: "180) Quelle méthode permet de vérifier si une valeur existe dans une Map ?",
  answers: [
    "containsValue()",
    "hasValue()",
    "existsValue()",
    "valueExists()",
  ],
  correct: 0,
},

{
  question: "181) Quelle méthode retourne le nombre d'éléments d'une Collection ?",
  answers: [
    "length()",
    "size()",
    "count()",
    "capacity()",
  ],
  correct: 1,
},

{
  question: "182) Quelle méthode permet de supprimer un élément d'une Collection ?",
  answers: [
    "delete()",
    "remove()",
    "erase()",
    "clearOne()",
  ],
  correct: 1,
},

{
  question: "183) Quelle méthode permet de supprimer tous les éléments d'une Collection ?",
  answers: [
    "deleteAll()",
    "removeAllElements()",
    "clear()",
    "empty()",
  ],
  correct: 2,
},

{
  question: "184) Quelle interface représente une collection parcourable dans un ordre séquentiel ?",
  answers: [
    "List",
    "Map",
    "SetOnly",
    "Dictionary",
  ],
  correct: 0,
},

{
  question: "185) Quel objet permet de parcourir une collection avec hasNext() et next() ?",
  answers: [
    "Iterator",
    "Scanner",
    "CollectionReader",
    "CursorOnly",
  ],
  correct: 0,
},

{
  question: "186) Quelle méthode d'un Iterator indique s'il reste un élément ?",
  answers: [
    "hasNext()",
    "nextAvailable()",
    "exists()",
    "hasElement()",
  ],
  correct: 0,
},

{
  question: "187) Quelle méthode d'un Iterator retourne l'élément suivant ?",
  answers: [
    "next()",
    "getNext()",
    "forward()",
    "read()",
  ],
  correct: 0,
},

{
  question: "188) Quelle classe permet de lire facilement une entrée clavier ?",
  answers: [
    "Scanner",
    "KeyboardReader",
    "ConsoleReaderOnly",
    "InputScannerOnly",
  ],
  correct: 0,
},

{
  question: "189) Dans quel package se trouve Scanner ?",
  answers: [
    "java.io",
    "java.util",
    "java.lang",
    "java.input",
  ],
  correct: 1,
},

{
  question: "190) Quelle méthode de Scanner permet de lire un entier ?",
  answers: [
    "readInt()",
    "nextInteger()",
    "nextInt()",
    "getInt()",
  ],
  correct: 2,
},

{
  question: "191) Quelle méthode de Scanner permet de lire une ligne complète ?",
  answers: [
    "nextLine()",
    "readLine()",
    "getLine()",
    "readText()",
  ],
  correct: 0,
},

{
  question: "192) Quel mot-clé permet d'importer une classe ou un package ?",
  answers: [
    "include",
    "import",
    "using",
    "require",
  ],
  correct: 1,
},

{
  question: "193) Quel package est automatiquement importé dans toutes les classes Java ?",
  answers: [
    "java.util",
    "java.io",
    "java.lang",
    "java.net",
  ],
  correct: 2,
},

{
  question: "194) Quelle classe appartient à java.lang ?",
  answers: [
    "String",
    "Scanner",
    "ArrayList",
    "File",
  ],
  correct: 0,
},

{
  question: "195) Quelle classe représente la racine de la hiérarchie des exceptions et erreurs ?",
  answers: [
    "Object",
    "Throwable",
    "ExceptionOnly",
    "ErrorOnly",
  ],
  correct: 1,
},

{
  question: "196) Quelle classe représente généralement les exceptions contrôlées et non contrôlées ?",
  answers: [
    "Throwable",
    "Object",
    "String",
    "Runtime",
  ],
  correct: 0,
},

{
  question: "197) Quelle classe est la superclasse des exceptions de type runtime ?",
  answers: [
    "RuntimeException",
    "IOException",
    "Error",
    "ThrowableOnly",
  ],
  correct: 0,
},

{
  question: "198) Une NullPointerException est généralement :",
  answers: [
    "Une checked exception",
    "Une unchecked exception",
    "Une erreur de compilation obligatoire",
    "Une erreur matérielle",
  ],
  correct: 1,
},

{
  question: "199) Une IOException est généralement :",
  answers: [
    "Une checked exception",
    "Une unchecked exception",
    "Une erreur de syntaxe",
    "Une erreur de JVM",
  ],
  correct: 0,
},

{
  question: "200) Quel mot-clé permet de capturer une exception après un bloc try ?",
  answers: [
    "catch",
    "except",
    "handle",
    "error",
  ],
  correct: 0,
},
{
  question: "201) Quelle exception est levée lorsqu'on tente d'accéder à une méthode sur une référence null ?",
  answers: [
    "IOException",
    "NullPointerException",
    "IndexOutOfBoundsException",
    "ArithmeticException",
  ],
  correct: 1,
},

{
  question: "202) Quelle exception est levée lors d'une division entière par zéro ?",
  answers: [
    "ArithmeticException",
    "DivideException",
    "ZeroException",
    "NumberFormatException",
  ],
  correct: 0,
},

{
  question: "203) Quelle exception est généralement levée lorsqu'une conversion de String vers un nombre échoue ?",
  answers: [
    "IOException",
    "NumberFormatException",
    "ParseException",
    "ConversionException",
  ],
  correct: 1,
},

{
  question: "204) Quelle exception est levée lorsqu'un indice invalide est utilisé avec une ArrayList ?",
  answers: [
    "ArrayIndexOutOfBoundsException",
    "IndexOutOfBoundsException",
    "InvalidIndexException",
    "ListIndexException",
  ],
  correct: 1,
},

{
  question: "205) Quelle exception est typiquement levée lorsqu'un indice invalide est utilisé avec un tableau ?",
  answers: [
    "IndexException",
    "ArrayIndexOutOfBoundsException",
    "ListIndexException",
    "ArrayException",
  ],
  correct: 1,
},

{
  question: "206) Quel type d'exception doit généralement être déclaré ou capturé par le compilateur ?",
  answers: [
    "Checked exception",
    "Unchecked exception",
    "Runtime exception uniquement",
    "Error",
  ],
  correct: 0,
},

{
  question: "207) Quelle classe représente la catégorie des exceptions non contrôlées liées à l'exécution ?",
  answers: [
    "RuntimeException",
    "CheckedException",
    "CompileException",
    "ExecutionExceptionOnly",
  ],
  correct: 0,
},

{
  question: "208) Que se passe-t-il si une exception n'est jamais capturée et remonte jusqu'à la JVM ?",
  answers: [
    "Elle est ignorée",
    "La JVM affiche généralement une trace d'erreur et le thread concerné se termine",
    "Elle est automatiquement enregistrée dans la base de données",
    "Le programme recommence automatiquement",
  ],
  correct: 1,
},

{
  question: "209) Peut-on avoir plusieurs blocs catch après un seul bloc try ?",
  answers: [
    "Oui",
    "Non",
    "Seulement deux",
    "Seulement avec IOException",
  ],
  correct: 0,
},

{
  question: "210) Dans plusieurs blocs catch, quelle règle importante doit être respectée ?",
  answers: [
    "Les exceptions les plus générales doivent être placées avant les spécifiques",
    "Les exceptions spécifiques doivent généralement être placées avant les générales",
    "L'ordre n'a aucune importance",
    "Il faut toujours mettre Exception en premier",
  ],
  correct: 1,
},

{
  question: "211) Peut-on avoir un bloc try sans catch ?",
  answers: [
    "Oui, s'il est suivi d'un bloc finally",
    "Non, jamais",
    "Seulement avec IOException",
    "Seulement dans main()",
  ],
  correct: 0,
},

{
  question: "212) Peut-on avoir un bloc try avec plusieurs catch et un finally ?",
  answers: [
    "Oui",
    "Non",
    "Seulement en Java 8",
    "Seulement avec RuntimeException",
  ],
  correct: 0,
},

{
  question: "213) Quelle instruction permet de relancer une exception reçue ?",
  answers: [
    "throw",
    "throws",
    "retry",
    "raise",
  ],
  correct: 0,
},

{
  question: "214) Que signifie « throws IOException » dans la déclaration d'une méthode ?",
  answers: [
    "La méthode capture automatiquement IOException",
    "La méthode indique qu'elle peut propager IOException",
    "La méthode interdit IOException",
    "La méthode crée automatiquement IOException",
  ],
  correct: 1,
},

{
  question: "215) Quel est le rôle principal du bloc finally ?",
  answers: [
    "Déclarer une exception",
    "Exécuter du code de nettoyage",
    "Créer une nouvelle classe",
    "Arrêter la JVM",
  ],
  correct: 1,
},

{
  question: "216) Le bloc finally est-il normalement exécuté lorsqu'un return est exécuté dans le try ?",
  answers: [
    "Oui",
    "Non",
    "Seulement avec Java 8",
    "Seulement avec une exception",
  ],
  correct: 0,
},

{
  question: "217) Quel mécanisme permet de fermer automatiquement certaines ressources après utilisation ?",
  answers: [
    "try-with-resources",
    "auto-close",
    "resource-finally",
    "close-all",
  ],
  correct: 0,
},

{
  question: "218) Quelle interface doit généralement implémenter une ressource utilisée avec try-with-resources ?",
  answers: [
    "AutoCloseable",
    "ClosableOnly",
    "CloseableResource",
    "Resource",
  ],
  correct: 0,
},

{
  question: "219) Quelle interface est liée à la fermeture des flux et ressources d'entrée/sortie ?",
  answers: [
    "Closeable",
    "ReadableOnly",
    "ClosableResource",
    "Shutdownable",
  ],
  correct: 0,
},

{
  question: "220) Quel package contient les principales classes d'entrée/sortie classiques de Java ?",
  answers: [
    "java.io",
    "java.input",
    "java.system",
    "java.stream",
  ],
  correct: 0,
},

{
  question: "221) Quelle classe représente un fichier ou un chemin de fichier dans l'API java.io classique ?",
  answers: [
    "File",
    "PathFile",
    "Document",
    "FileObject",
  ],
  correct: 0,
},

{
  question: "222) Quelle classe permet de lire des caractères depuis un fichier ?",
  answers: [
    "FileReader",
    "FileInput",
    "CharacterReader",
    "TextInput",
  ],
  correct: 0,
},

{
  question: "223) Quelle classe permet d'écrire des caractères dans un fichier ?",
  answers: [
    "FileWriter",
    "FileOutput",
    "CharacterWriter",
    "TextWriter",
  ],
  correct: 0,
},

{
  question: "224) Quelle classe permet de lire des données binaires depuis un fichier ?",
  answers: [
    "FileInputStream",
    "FileReader",
    "BinaryReader",
    "InputBinary",
  ],
  correct: 0,
},

{
  question: "225) Quelle classe permet d'écrire des données binaires dans un fichier ?",
  answers: [
    "FileOutputStream",
    "FileWriter",
    "BinaryWriter",
    "OutputBinary",
  ],
  correct: 0,
},

{
  question: "226) Quelle classe permet de lire efficacement un fichier ligne par ligne ?",
  answers: [
    "BufferedReader",
    "LineReader",
    "FileLineReader",
    "TextReader",
  ],
  correct: 0,
},

{
  question: "227) Quelle méthode de BufferedReader permet de lire une ligne ?",
  answers: [
    "nextLine()",
    "readLine()",
    "getLine()",
    "readNext()",
  ],
  correct: 1,
},

{
  question: "228) Que retourne readLine() lorsqu'il n'y a plus de ligne à lire ?",
  answers: [
    "0",
    "false",
    "null",
    "-1",
  ],
  correct: 2,
},

{
  question: "229) Quel package contient l'API moderne java.nio.file ?",
  answers: [
    "java.nio.file",
    "java.file",
    "java.io.file",
    "java.path",
  ],
  correct: 0,
},

{
  question: "230) Quelle classe représente un chemin dans l'API NIO.2 ?",
  answers: [
    "Path",
    "FilePathOnly",
    "Route",
    "Location",
  ],
  correct: 0,
},

{
  question: "231) Quelle classe permet de manipuler les fichiers et répertoires avec NIO.2 ?",
  answers: [
    "Files",
    "FileManager",
    "PathManager",
    "Directory",
  ],
  correct: 0,
},

{
  question: "232) Quelle méthode permet de vérifier l'existence d'un fichier avec java.nio.file.Files ?",
  answers: [
    "exists()",
    "fileExists()",
    "isThere()",
    "checkExists()",
  ],
  correct: 0,
},

{
  question: "233) Quelle méthode permet de créer un nouveau fichier vide avec Files ?",
  answers: [
    "createFile()",
    "newFile()",
    "makeFile()",
    "createEmpty()",
  ],
  correct: 0,
},

{
  question: "234) Quelle méthode permet de supprimer un fichier ou un répertoire avec Files ?",
  answers: [
    "delete()",
    "remove()",
    "erase()",
    "destroy()",
  ],
  correct: 0,
},

{
  question: "235) Quelle méthode permet de copier un fichier avec Files ?",
  answers: [
    "copy()",
    "duplicate()",
    "cloneFile()",
    "copyFileOnly()",
  ],
  correct: 0,
},

{
  question: "236) Quelle méthode permet de déplacer ou renommer un fichier avec Files ?",
  answers: [
    "move()",
    "rename()",
    "transfer()",
    "shift()",
  ],
  correct: 0,
},

{
  question: "237) Quelle classe permet de représenter un ensemble de paires clé-valeur triées selon les clés ?",
  answers: [
    "TreeMap",
    "HashMap",
    "ArrayMap",
    "SortedHashMap",
  ],
  correct: 0,
},

{
  question: "238) Quelle classe conserve l'ordre d'insertion des éléments d'une Map ?",
  answers: [
    "HashMap",
    "LinkedHashMap",
    "TreeMap",
    "OrderedMapOnly",
  ],
  correct: 1,
},

{
  question: "239) Quelle implémentation de Map est généralement basée sur une table de hachage ?",
  answers: [
    "HashMap",
    "TreeMap",
    "ArrayMap",
    "LinkedTreeMap",
  ],
  correct: 0,
},

{
  question: "240) Quelle collection est adaptée lorsqu'on souhaite empêcher les doublons et conserver l'ordre d'insertion ?",
  answers: [
    "HashSet",
    "LinkedHashSet",
    "TreeSet",
    "ArrayList",
  ],
  correct: 1,
},

{
  question: "241) Quelle collection trie automatiquement ses éléments selon leur ordre naturel ?",
  answers: [
    "HashSet",
    "TreeSet",
    "LinkedHashSet",
    "ArrayList",
  ],
  correct: 1,
},

{
  question: "242) Quelle interface représente une collection pouvant contenir des éléments en double et accessible par position ?",
  answers: [
    "List",
    "Set",
    "Map",
    "SortedSet",
  ],
  correct: 0,
},

{
  question: "243) Quelle implémentation de List est basée sur une structure chaînée ?",
  answers: [
    "ArrayList",
    "LinkedList",
    "HashList",
    "TreeList",
  ],
  correct: 1,
},

{
  question: "244) Quelle structure est généralement plus adaptée aux accès aléatoires par index ?",
  answers: [
    "ArrayList",
    "LinkedList",
    "HashSet",
    "TreeSet",
  ],
  correct: 0,
},

{
  question: "245) Quelle structure est généralement adaptée aux insertions/suppressions fréquentes aux extrémités ?",
  answers: [
    "LinkedList",
    "ArrayList",
    "HashMap",
    "TreeSet",
  ],
  correct: 0,
},

{
  question: "246) Quelle interface représente une file dans laquelle les éléments sont généralement traités selon un ordre ?",
  answers: [
    "Queue",
    "List",
    "Map",
    "Set",
  ],
  correct: 0,
},

{
  question: "247) Quelle interface représente une file à double extrémité ?",
  answers: [
    "Deque",
    "DoubleQueueOnly",
    "BiQueue",
    "TwoWayList",
  ],
  correct: 0,
},

{
  question: "248) Quelle classe implémente une file de priorité basée sur un tas ?",
  answers: [
    "PriorityQueue",
    "PriorityList",
    "HeapQueue",
    "SortedQueueOnly",
  ],
  correct: 0,
},

{
  question: "249) Quelle méthode de Queue ajoute un élément en respectant le contrat de Queue ?",
  answers: [
    "offer()",
    "pushOnly()",
    "insertOnly()",
    "enqueueOnly()",
  ],
  correct: 0,
},

{
  question: "250) Quelle méthode de Queue récupère puis supprime généralement l'élément en tête ?",
  answers: [
    "poll()",
    "peek()",
    "get()",
    "removeFirstOnly()",
  ],
  correct: 0,
},

{
  question: "251) Quelle méthode de Queue consulte l'élément en tête sans le supprimer ?",
  answers: [
    "peek()",
    "look()",
    "view()",
    "inspect()",
  ],
  correct: 0,
},

{
  question: "252) Quelle différence principale existe entre poll() et peek() ?",
  answers: [
    "poll supprime l'élément, peek ne le supprime pas",
    "peek supprime l'élément, poll ne le supprime pas",
    "Les deux suppriment l'élément",
    "Aucune différence",
  ],
  correct: 0,
},

{
  question: "253) Quel est le rôle des génériques en Java ?",
  answers: [
    "Fournir une vérification de type plus sûre à la compilation",
    "Accélérer automatiquement la JVM",
    "Remplacer les classes",
    "Supprimer les exceptions",
  ],
  correct: 0,
},

{
  question: "254) Quelle déclaration représente une liste de chaînes générique ?",
  answers: [
    "List<String> names;",
    "List(String) names;",
    "String<List> names;",
    "List.names<String>;",
  ],
  correct: 0,
},

{
  question: "255) Quelle déclaration est correcte pour une liste d'entiers avec les génériques ?",
  answers: [
    "List<int> numbers;",
    "List<Integer> numbers;",
    "ArrayList<int> numbers;",
    "Integer<List> numbers;",
  ],
  correct: 1,
},

{
  question: "256) Pourquoi List<int> n'est-elle pas valide en Java ?",
  answers: [
    "Les génériques utilisent des types référence, pas les types primitifs",
    "int est réservé à la JVM",
    "List n'accepte aucun nombre",
    "Les listes ne peuvent contenir qu'une String",
  ],
  correct: 0,
},

{
  question: "257) Quel type wrapper peut être utilisé à la place de int dans un générique ?",
  answers: [
    "Integer",
    "Int",
    "NumberInt",
    "PrimitiveInt",
  ],
  correct: 0,
},

{
  question: "258) Que représente le symbole <?> dans List<?> ?",
  answers: [
    "Un type générique inconnu",
    "Un type String",
    "Un type int",
    "Un type obligatoire",
  ],
  correct: 0,
},

{
  question: "259) Quelle déclaration représente une liste pouvant contenir des objets d'un type inconnu ?",
  answers: [
    "List<?> list;",
    "List<unknown> list;",
    "List<any> list;",
    "List<Object?> list;",
  ],
  correct: 0,
},

{
  question: "260) Quel est le rôle de <? extends Number> ?",
  answers: [
    "Autoriser un type qui est Number ou une sous-classe de Number",
    "Autoriser uniquement String",
    "Interdire tous les nombres",
    "Créer automatiquement une classe Number",
  ],
  correct: 0,
},

{
  question: "261) Quel est le rôle de <? super Integer> ?",
  answers: [
    "Autoriser Integer ou un de ses super-types",
    "Autoriser uniquement Integer",
    "Interdire Integer",
    "Créer une sous-classe de Integer",
  ],
  correct: 0,
},

{
  question: "262) Quelle convention est généralement utilisée pour représenter un type générique ?",
  answers: [
    "T",
    "TypeOnly",
    "GTypeOnly",
    "GenericType",
  ],
  correct: 0,
},

{
  question: "263) Quelle classe permet de trier une collection selon l'ordre naturel de ses éléments ?",
  answers: [
    "Collections",
    "Sorter",
    "CollectionSort",
    "ArraysOnly",
  ],
  correct: 0,
},

{
  question: "264) Quelle méthode de Collections permet de trier une liste ?",
  answers: [
    "sort()",
    "order()",
    "arrange()",
    "sortList()",
  ],
  correct: 0,
},

{
  question: "265) Quelle classe fournit des méthodes utilitaires pour manipuler les tableaux ?",
  answers: [
    "Arrays",
    "ArrayTools",
    "ArrayUtilsOnly",
    "CollectionsOnly",
  ],
  correct: 0,
},

{
  question: "266) Quelle méthode de Arrays permet de trier un tableau ?",
  answers: [
    "Arrays.sort()",
    "Arrays.order()",
    "Arrays.arrange()",
    "Arrays.organize()",
  ],
  correct: 0,
},

{
  question: "267) Quelle méthode permet de rechercher efficacement une valeur dans un tableau trié ?",
  answers: [
    "Arrays.binarySearch()",
    "Arrays.search()",
    "Arrays.find()",
    "Arrays.lookup()",
  ],
  correct: 0,
},

{
  question: "268) Quelle classe fournit des méthodes utilitaires pour remplir ou copier des tableaux ?",
  answers: [
    "Arrays",
    "Collections",
    "ArrayManager",
    "SystemArrays",
  ],
  correct: 0,
},

{
  question: "269) Quelle méthode permet de copier une partie d'un tableau ?",
  answers: [
    "Arrays.copyOfRange()",
    "Arrays.partialCopy()",
    "Arrays.rangeCopy()",
    "Arrays.extract()",
  ],
  correct: 0,
},

{
  question: "270) Quel mécanisme permet de définir une comparaison personnalisée pour trier des objets ?",
  answers: [
    "Comparator",
    "ComparerOnly",
    "CompareObject",
    "SorterInterfaceOnly",
  ],
  correct: 0,
},

{
  question: "271) Quelle interface permet à une classe de définir son ordre naturel ?",
  answers: [
    "Comparable",
    "Comparator",
    "Sortable",
    "NaturalOrder",
  ],
  correct: 0,
},

{
  question: "272) Quelle méthode doit être implémentée par Comparable ?",
  answers: [
    "compareTo()",
    "compare()",
    "sort()",
    "order()",
  ],
  correct: 0,
},

{
  question: "273) Quelle méthode doit être implémentée par Comparator ?",
  answers: [
    "compare()",
    "compareTo()",
    "sort()",
    "orderBy()",
  ],
  correct: 0,
},

{
  question: "274) Quelle est la différence principale entre Comparable et Comparator ?",
  answers: [
    "Comparable définit généralement l'ordre naturel, Comparator permet une comparaison externe",
    "Comparable sert uniquement aux String",
    "Comparator sert uniquement aux nombres",
    "Il n'existe aucune différence",
  ],
  correct: 0,
},

{
  question: "275) Quel package contient Comparable et Comparator ?",
  answers: [
    "java.lang",
    "java.util",
    "java.compare",
    "java.collections",
  ],
  correct: 1,
},

{
  question: "276) Quel mot-clé permet de déclarer une interface fonctionnelle ?",
  answers: [
    "functional",
    "interface",
    "lambda",
    "Il n'existe pas de mot-clé spécial",
  ],
  correct: 3,
},

{
  question: "277) Quelle annotation indique qu'une interface doit avoir une seule méthode abstraite ?",
  answers: [
    "@FunctionalInterface",
    "@Functional",
    "@SingleMethod",
    "@LambdaInterface",
  ],
  correct: 0,
},

{
  question: "278) À partir de quelle version de Java les expressions lambda ont-elles été introduites ?",
  answers: [
    "Java 5",
    "Java 6",
    "Java 7",
    "Java 8",
  ],
  correct: 3,
},

{
  question: "279) Quelle syntaxe représente une expression lambda simple ?",
  answers: [
    "x -> x * 2",
    "lambda x: x * 2",
    "x => x * 2",
    "function(x) => x * 2",
  ],
  correct: 0,
},

{
  question: "280) Quelle interface fonctionnelle accepte un argument et retourne une valeur ?",
  answers: [
    "Consumer",
    "Supplier",
    "Function",
    "Runnable",
  ],
  correct: 2,
},

{
  question: "281) Quelle interface fonctionnelle accepte un argument et ne retourne aucune valeur ?",
  answers: [
    "Consumer",
    "Function",
    "Supplier",
    "Predicate",
  ],
  correct: 0,
},

{
  question: "282) Quelle interface fonctionnelle ne prend aucun argument et fournit une valeur ?",
  answers: [
    "Supplier",
    "Consumer",
    "Function",
    "Predicate",
  ],
  correct: 0,
},

{
  question: "283) Quelle interface fonctionnelle prend un argument et retourne un boolean ?",
  answers: [
    "Predicate",
    "Consumer",
    "Supplier",
    "FunctionOnly",
  ],
  correct: 0,
},

{
  question: "284) Quelle méthode est utilisée pour exécuter un Consumer ?",
  answers: [
    "accept()",
    "apply()",
    "test()",
    "get()",
  ],
  correct: 0,
},

{
  question: "285) Quelle méthode est utilisée pour exécuter un Function ?",
  answers: [
    "apply()",
    "accept()",
    "test()",
    "get()",
  ],
  correct: 0,
},

{
  question: "286) Quelle méthode est utilisée pour exécuter un Predicate ?",
  answers: [
    "test()",
    "apply()",
    "accept()",
    "get()",
  ],
  correct: 0,
},

{
  question: "287) Quelle méthode est utilisée pour obtenir la valeur fournie par un Supplier ?",
  answers: [
    "get()",
    "apply()",
    "accept()",
    "supply()",
  ],
  correct: 0,
},

{
  question: "288) Quel concept Java 8 permet de traiter des collections de manière déclarative ?",
  answers: [
    "Stream API",
    "DataPipe",
    "CollectionFlow",
    "ArrayStreamOnly",
  ],
  correct: 0,
},

{
  question: "289) Quelle méthode permet de créer un Stream à partir d'une Collection ?",
  answers: [
    "stream()",
    "toStream()",
    "createStream()",
    "asStreamOnly()",
  ],
  correct: 0,
},

{
  question: "290) Quelle opération Stream permet de transformer chaque élément ?",
  answers: [
    "map()",
    "filter()",
    "reduce()",
    "transformOnly()",
  ],
  correct: 0,
},

{
  question: "291) Quelle opération Stream permet de conserver uniquement certains éléments ?",
  answers: [
    "filter()",
    "map()",
    "selectOnly()",
    "keep()",
  ],
  correct: 0,
},

{
  question: "292) Quelle opération Stream permet de réduire plusieurs éléments à une seule valeur ?",
  answers: [
    "reduce()",
    "collapse()",
    "mergeOnly()",
    "single()",
  ],
  correct: 0,
},

{
  question: "293) Quelle opération terminale permet d'effectuer une action sur chaque élément d'un Stream ?",
  answers: [
    "forEach()",
    "each()",
    "iterateOnly()",
    "process()",
  ],
  correct: 0,
},

{
  question: "294) Quelle méthode permet de compter les éléments d'un Stream ?",
  answers: [
    "count()",
    "size()",
    "length()",
    "number()",
  ],
  correct: 0,
},

{
  question: "295) Une opération intermédiaire d'un Stream retourne généralement :",
  answers: [
    "Un autre Stream",
    "Toujours un int",
    "Toujours un boolean",
    "Toujours void",
  ],
  correct: 0,
},

{
  question: "296) Une opération terminale d'un Stream :",
  answers: [
    "Termine le pipeline du Stream",
    "Crée toujours un nouveau Stream",
    "Ne peut jamais être exécutée",
    "Transforme obligatoirement la source",
  ],
  correct: 0,
},

{
  question: "297) Quelle classe permet de représenter une valeur qui peut être présente ou absente ?",
  answers: [
    "Optional",
    "Maybe",
    "Nullable",
    "ValueContainer",
  ],
  correct: 0,
},

{
  question: "298) Dans quelle version de Java Optional a-t-il été introduit ?",
  answers: [
    "Java 5",
    "Java 7",
    "Java 8",
    "Java 11",
  ],
  correct: 2,
},

{
  question: "299) Quelle méthode d'Optional permet de vérifier si une valeur est présente ?",
  answers: [
    "isPresent()",
    "hasValue()",
    "exists()",
    "containsValue()",
  ],
  correct: 0,
},

{
  question: "300) Quelle méthode d'Optional permet de récupérer la valeur lorsqu'elle est présente ?",
  answers: [
    "get()",
    "value()",
    "retrieve()",
    "read()",
  ],
  correct: 0,
},
{
  question: "300) Quelle méthode d'Optional permet de récupérer directement la valeur lorsqu'elle est présente ?",
  answers: [
    "get()",
    "value()",
    "retrieve()",
    "read()",
  ],
  correct: 0,
},

{
  question: "301) Quelle méthode d'Optional permet de vérifier si une valeur est présente ?",
  answers: [
    "exists()",
    "isPresent()",
    "hasValue()",
    "contains()",
  ],
  correct: 1,
},

{
  question: "302) Quelle méthode d'Optional permet d'exécuter une action uniquement si une valeur est présente ?",
  answers: [
    "ifPresent()",
    "ifExists()",
    "present()",
    "executeIf()",
  ],
  correct: 0,
},

{
  question: "303) Quelle méthode d'Optional permet de retourner une autre valeur si l'Optional est vide ?",
  answers: [
    "orElse()",
    "orDefault()",
    "defaultValue()",
    "elseValue()",
  ],
  correct: 0,
},

{
  question: "304) Quelle méthode d'Optional permet de calculer la valeur par défaut uniquement lorsque l'Optional est vide ?",
  answers: [
    "orElse()",
    "orElseGet()",
    "getOrElse()",
    "defaultGet()",
  ],
  correct: 1,
},

{
  question: "305) Quelle méthode d'Optional permet de lancer une exception si aucune valeur n'est présente ?",
  answers: [
    "orElseThrow()",
    "throwIfEmpty()",
    "exception()",
    "failIfEmpty()",
  ],
  correct: 0,
},

{
  question: "306) Quelle classe Java représente une date sans heure ni fuseau horaire ?",
  answers: [
    "LocalDate",
    "DateOnly",
    "SimpleDate",
    "CalendarDate",
  ],
  correct: 0,
},

{
  question: "307) Dans quel package se trouve LocalDate ?",
  answers: [
    "java.util",
    "java.time",
    "java.date",
    "java.sql",
  ],
  correct: 1,
},

{
  question: "308) Quelle classe représente une date et une heure sans fuseau horaire ?",
  answers: [
    "LocalDateTime",
    "DateTime",
    "CalendarTime",
    "SimpleDateTime",
  ],
  correct: 0,
},

{
  question: "309) Quelle classe représente uniquement une heure sans date ?",
  answers: [
    "LocalHour",
    "TimeOnly",
    "LocalTime",
    "HourTime",
  ],
  correct: 2,
},

{
  question: "310) Quelle classe représente une date et une heure avec un fuseau horaire ?",
  answers: [
    "ZonedDateTime",
    "LocalDateTime",
    "DateZone",
    "TimeZoneDate",
  ],
  correct: 0,
},

{
  question: "311) Quelle méthode permet d'obtenir la date actuelle avec LocalDate ?",
  answers: [
    "current()",
    "now()",
    "today()",
    "getCurrent()",
  ],
  correct: 1,
},

{
  question: "312) Que retourne LocalDate.now() ?",
  answers: [
    "La date actuelle",
    "L'heure actuelle",
    "Le timestamp Unix",
    "Le fuseau horaire actuel",
  ],
  correct: 0,
},

{
  question: "313) Quelle méthode permet de créer une LocalDate à partir d'une année, d'un mois et d'un jour ?",
  answers: [
    "create()",
    "of()",
    "build()",
    "make()",
  ],
  correct: 1,
},

{
  question: "314) Que fait LocalDate.of(2026, 9, 18) ?",
  answers: [
    "Crée la date du 18 septembre 2026",
    "Crée la date du 9 février 2026",
    "Crée la date du 18 octobre 2026",
    "Crée la date du 9 septembre 2018",
  ],
  correct: 0,
},

{
  question: "315) Quelle méthode permet d'ajouter des jours à une LocalDate ?",
  answers: [
    "appendDays()",
    "plusDays()",
    "addDays()",
    "increaseDays()",
  ],
  correct: 1,
},

{
  question: "316) Quelle méthode permet de soustraire des jours à une LocalDate ?",
  answers: [
    "minusDays()",
    "subtractDays()",
    "removeDays()",
    "decreaseDays()",
  ],
  correct: 0,
},

{
  question: "317) Quelle méthode permet d'ajouter des mois à une LocalDate ?",
  answers: [
    "addMonths()",
    "plusMonths()",
    "increaseMonths()",
    "appendMonths()",
  ],
  correct: 1,
},

{
  question: "318) Quelle méthode permet d'obtenir l'année d'une LocalDate ?",
  answers: [
    "year()",
    "getYear()",
    "readYear()",
    "extractYear()",
  ],
  correct: 1,
},

{
  question: "319) Quelle méthode permet d'obtenir le mois sous forme numérique ?",
  answers: [
    "getMonthValue()",
    "getMonthNumber()",
    "monthValue()",
    "getNumericMonth()",
  ],
  correct: 0,
},

{
  question: "320) Quelle méthode permet d'obtenir le jour du mois ?",
  answers: [
    "getDay()",
    "getDayOfMonth()",
    "dayOfMonth()",
    "getMonthDay()",
  ],
  correct: 1,
},

{
  question: "321) Quelle méthode permet de vérifier si une date est antérieure à une autre ?",
  answers: [
    "before()",
    "isBefore()",
    "earlier()",
    "beforeDate()",
  ],
  correct: 1,
},

{
  question: "322) Quelle méthode permet de vérifier si une date est postérieure à une autre ?",
  answers: [
    "isAfter()",
    "after()",
    "later()",
    "afterDate()",
  ],
  correct: 0,
},

{
  question: "323) Quelle méthode permet de vérifier l'égalité de deux LocalDate ?",
  answers: [
    "same()",
    "equals()",
    "equalDate()",
    "isSameDate()",
  ],
  correct: 1,
},

{
  question: "324) Les objets LocalDate sont-ils mutables ?",
  answers: [
    "Oui",
    "Non",
    "Seulement dans une collection",
    "Seulement avec static",
  ],
  correct: 1,
},

{
  question: "325) Quelle classe permet de représenter une durée exprimée principalement en secondes et nanosecondes ?",
  answers: [
    "Period",
    "Duration",
    "TimeSpan",
    "Interval",
  ],
  correct: 1,
},

{
  question: "326) Quelle classe représente une période en années, mois et jours ?",
  answers: [
    "Duration",
    "Period",
    "DateInterval",
    "CalendarPeriod",
  ],
  correct: 1,
},

{
  question: "327) Quelle méthode calcule la période entre deux LocalDate ?",
  answers: [
    "Period.between()",
    "Period.calculate()",
    "LocalDate.period()",
    "Date.periodBetween()",
  ],
  correct: 0,
},

{
  question: "328) Quelle classe permet de formater les dates et heures ?",
  answers: [
    "DateFormatter",
    "DateTimeFormatter",
    "SimpleFormatter",
    "TimeFormatter",
  ],
  correct: 1,
},

{
  question: "329) Quelle méthode permet de créer un DateTimeFormatter à partir d'un motif ?",
  answers: [
    "DateTimeFormatter.ofPattern()",
    "DateTimeFormatter.createPattern()",
    "DateTimeFormatter.pattern()",
    "DateTimeFormatter.build()",
  ],
  correct: 0,
},

{
  question: "330) Quelle méthode permet de transformer une LocalDate en chaîne selon un format ?",
  answers: [
    "format()",
    "toFormat()",
    "formatDate()",
    "stringFormat()",
  ],
  correct: 0,
},

{
  question: "331) Quelle méthode permet de convertir une chaîne en LocalDate ?",
  answers: [
    "convert()",
    "parse()",
    "fromString()",
    "readDate()",
  ],
  correct: 1,
},

{
  question: "332) Quelle classe représente un instant précis sur la ligne du temps ?",
  answers: [
    "Instant",
    "Moment",
    "TimePoint",
    "DateInstant",
  ],
  correct: 0,
},

{
  question: "333) Quelle méthode permet d'obtenir l'instant actuel ?",
  answers: [
    "Instant.current()",
    "Instant.now()",
    "Instant.today()",
    "Instant.getCurrent()",
  ],
  correct: 1,
},

{
  question: "334) Quelle classe représente un décalage horaire tel que +01:00 ?",
  answers: [
    "ZoneOffset",
    "TimeOffset",
    "HourOffset",
    "ZoneDifference",
  ],
  correct: 0,
},

{
  question: "335) Quelle classe représente un fuseau horaire identifié par une région comme Europe/Paris ?",
  answers: [
    "TimeZoneId",
    "ZoneId",
    "RegionZone",
    "TimeRegion",
  ],
  correct: 1,
},

{
  question: "336) Quelle méthode permet de créer un ZoneId à partir d'un identifiant ?",
  answers: [
    "ZoneId.of()",
    "ZoneId.create()",
    "ZoneId.fromName()",
    "ZoneId.get()",
  ],
  correct: 0,
},

{
  question: "337) Quelle interface permet de parcourir les éléments d'une collection ?",
  answers: [
    "Iterator",
    "Traversable",
    "CollectionIterator",
    "Enumerator",
  ],
  correct: 0,
},

{
  question: "338) Quelle méthode d'Iterator vérifie s'il reste un élément ?",
  answers: [
    "hasNext()",
    "exists()",
    "nextAvailable()",
    "containsNext()",
  ],
  correct: 0,
},

{
  question: "339) Quelle méthode d'Iterator retourne l'élément suivant ?",
  answers: [
    "next()",
    "getNext()",
    "nextElement()",
    "forward()",
  ],
  correct: 0,
},

{
  question: "340) Quelle méthode d'Iterator permet de supprimer l'élément courant ?",
  answers: [
    "delete()",
    "remove()",
    "erase()",
    "removeCurrent()",
  ],
  correct: 1,
},

{
  question: "341) Quelle interface permet l'utilisation d'une collection avec la boucle for-each ?",
  answers: [
    "Iterable",
    "Foreachable",
    "Loopable",
    "Enumerable",
  ],
  correct: 0,
},

{
  question: "342) Quelle méthode doit fournir Iterable pour obtenir un Iterator ?",
  answers: [
    "iterator()",
    "getIterator()",
    "createIterator()",
    "iterate()",
  ],
  correct: 0,
},

{
  question: "343) Quelle collection élimine les doublons tout en conservant l'ordre d'insertion ?",
  answers: [
    "HashSet",
    "LinkedHashSet",
    "TreeSet",
    "PrioritySet",
  ],
  correct: 1,
},

{
  question: "344) Quelle collection trie ses éléments selon leur ordre naturel ?",
  answers: [
    "HashSet",
    "LinkedHashSet",
    "TreeSet",
    "ArrayList",
  ],
  correct: 2,
},

{
  question: "345) Quelle Map conserve l'ordre d'insertion des entrées ?",
  answers: [
    "HashMap",
    "TreeMap",
    "LinkedHashMap",
    "Hashtable",
  ],
  correct: 2,
},

{
  question: "346) Quelle Map trie ses clés selon leur ordre naturel ?",
  answers: [
    "HashMap",
    "LinkedHashMap",
    "TreeMap",
    "IdentityHashMap",
  ],
  correct: 2,
},

{
  question: "347) Dans une Map Java, les clés sont-elles uniques ?",
  answers: [
    "Oui",
    "Non",
    "Seulement dans HashMap",
    "Seulement dans TreeMap",
  ],
  correct: 0,
},

{
  question: "348) Que se passe-t-il avec put() lorsqu'une clé existe déjà dans une Map ?",
  answers: [
    "Une exception est toujours lancée",
    "La valeur associée à cette clé est remplacée",
    "La nouvelle valeur est ignorée",
    "La Map est vidée",
  ],
  correct: 1,
},

{
  question: "349) Quelle méthode permet d'obtenir toutes les clés d'une Map ?",
  answers: [
    "keys()",
    "keySet()",
    "getKeys()",
    "allKeys()",
  ],
  correct: 1,
},

{
  question: "350) Quelle méthode permet d'obtenir toutes les valeurs d'une Map ?",
  answers: [
    "values()",
    "getValues()",
    "allValues()",
    "valueSet()",
  ],
  correct: 0,
},

{
  question: "351) Quelle méthode vérifie si une Map contient une clé ?",
  answers: [
    "containsKey()",
    "hasKey()",
    "existsKey()",
    "keyExists()",
  ],
  correct: 0,
},

{
  question: "352) Quelle méthode vérifie si une Map contient une valeur ?",
  answers: [
    "containsValue()",
    "hasValue()",
    "existsValue()",
    "valueExists()",
  ],
  correct: 0,
},

{
  question: "353) Quelle méthode permet de récupérer la valeur associée à une clé ?",
  answers: [
    "get()",
    "value()",
    "find()",
    "read()",
  ],
  correct: 0,
},

{
  question: "354) Quelle méthode permet d'ajouter une association clé-valeur dans une Map ?",
  answers: [
    "add()",
    "put()",
    "insertValue()",
    "setValue()",
  ],
  correct: 1,
},

{
  question: "355) Quelle méthode supprime une entrée à partir de sa clé ?",
  answers: [
    "delete()",
    "remove()",
    "eraseKey()",
    "drop()",
  ],
  correct: 1,
},

{
  question: "356) Quelle méthode vide complètement une collection ?",
  answers: [
    "empty()",
    "clear()",
    "deleteAll()",
    "removeAll()",
  ],
  correct: 1,
},

{
  question: "357) Quelle méthode retourne le nombre d'éléments d'une collection ?",
  answers: [
    "length()",
    "count()",
    "size()",
    "number()",
  ],
  correct: 2,
},

{
  question: "358) Quelle interface représente une collection ordonnée pouvant contenir des doublons ?",
  answers: [
    "Set",
    "List",
    "Map",
    "QueueOnly",
  ],
  correct: 1,
},

{
  question: "359) Quelle collection est généralement efficace pour accéder aux éléments par index ?",
  answers: [
    "ArrayList",
    "LinkedList",
    "HashSet",
    "TreeSet",
  ],
  correct: 0,
},

{
  question: "360) Quelle collection est basée sur une structure chaînée ?",
  answers: [
    "ArrayList",
    "LinkedList",
    "HashSet",
    "TreeMap",
  ],
  correct: 1,
},

{
  question: "361) Quelle interface représente une file FIFO ?",
  answers: [
    "Queue",
    "Stack",
    "Line",
    "FifoList",
  ],
  correct: 0,
},

{
  question: "362) Quelle interface permet de travailler avec les deux extrémités d'une file ?",
  answers: [
    "Deque",
    "DualQueue",
    "DoubleList",
    "BiQueue",
  ],
  correct: 0,
},

{
  question: "363) Quelle méthode ajoute un élément dans une Queue et retourne false en cas d'échec ?",
  answers: [
    "add()",
    "offer()",
    "insert()",
    "push()",
  ],
  correct: 1,
},

{
  question: "364) Quelle méthode retire et retourne la tête d'une Queue, ou retourne null si elle est vide ?",
  answers: [
    "remove()",
    "poll()",
    "pop()",
    "extract()",
  ],
  correct: 1,
},

{
  question: "365) Quelle méthode consulte la tête d'une Queue sans la supprimer et retourne null si elle est vide ?",
  answers: [
    "peek()",
    "view()",
    "top()",
    "inspect()",
  ],
  correct: 0,
},

{
  question: "366) Quelle classe implémente une file de priorité ?",
  answers: [
    "PriorityQueue",
    "PriorityList",
    "SortedQueue",
    "OrderQueue",
  ],
  correct: 0,
},

{
  question: "367) Une PriorityQueue organise principalement ses éléments selon :",
  answers: [
    "L'ordre d'insertion",
    "L'ordre naturel ou un Comparator",
    "L'adresse mémoire",
    "Un ordre aléatoire",
  ],
  correct: 1,
},

{
  question: "368) Quelle interface permet de définir l'ordre naturel d'une classe ?",
  answers: [
    "Comparator",
    "Comparable",
    "Sortable",
    "Ordering",
  ],
  correct: 1,
},

{
  question: "369) Quelle méthode doit être implémentée par Comparable ?",
  answers: [
    "compare()",
    "compareTo()",
    "order()",
    "sort()",
  ],
  correct: 1,
},

{
  question: "370) Quelle interface permet de définir un ordre de comparaison externe ?",
  answers: [
    "Comparable",
    "Comparator",
    "Sorter",
    "Ordering",
  ],
  correct: 1,
},

{
  question: "371) Quelle méthode doit être implémentée par Comparator ?",
  answers: [
    "compare()",
    "compareTo()",
    "order()",
    "sort()",
  ],
  correct: 0,
},

{
  question: "372) Si compareTo() retourne une valeur négative, cela signifie généralement que :",
  answers: [
    "L'objet courant est inférieur à l'autre",
    "Les objets sont égaux",
    "L'objet courant est supérieur à l'autre",
    "La comparaison est impossible",
  ],
  correct: 0,
},

{
  question: "373) Si compareTo() retourne 0, cela signifie généralement que :",
  answers: [
    "Les objets sont considérés équivalents selon l'ordre",
    "Les objets sont forcément la même instance",
    "Une exception est lancée",
    "Le premier objet est supérieur",
  ],
  correct: 0,
},

{
  question: "374) Quelle classe utilitaire contient des méthodes pour manipuler les collections ?",
  answers: [
    "Arrays",
    "Collections",
    "CollectionUtils",
    "ListUtils",
  ],
  correct: 1,
},

{
  question: "375) Quelle méthode permet de trier une List selon son ordre naturel ?",
  answers: [
    "Collections.sort()",
    "Collections.order()",
    "List.sortNatural()",
    "Sort.list()",
  ],
  correct: 0,
},

{
  question: "376) Quelle méthode permet de trier un tableau ?",
  answers: [
    "Arrays.sort()",
    "Arrays.order()",
    "Arrays.organize()",
    "Arrays.sortArray()",
  ],
  correct: 0,
},

{
  question: "377) Quelle classe fournit des méthodes utilitaires pour les tableaux ?",
  answers: [
    "Collections",
    "Arrays",
    "ArrayUtils",
    "SystemArrays",
  ],
  correct: 1,
},

{
  question: "378) Quelle méthode remplit un tableau avec une même valeur ?",
  answers: [
    "Arrays.fill()",
    "Arrays.populate()",
    "Arrays.repeat()",
    "Arrays.setAllSame()",
  ],
  correct: 0,
},

{
  question: "379) Quelle méthode compare deux tableaux élément par élément ?",
  answers: [
    "Arrays.equals()",
    "Arrays.same()",
    "Arrays.compareEqual()",
    "Arrays.match()",
  ],
  correct: 0,
},

{
  question: "380) Quelle méthode permet d'effectuer une recherche binaire dans un tableau ?",
  answers: [
    "Arrays.search()",
    "Arrays.binarySearch()",
    "Arrays.findBinary()",
    "Arrays.find()",
  ],
  correct: 1,
},

{
  question: "381) Pour utiliser efficacement Arrays.binarySearch(), le tableau doit généralement être :",
  answers: [
    "Vide",
    "Trié",
    "Toujours inversé",
    "Multidimensionnel",
  ],
  correct: 1,
},

{
  question: "382) Quelle interface fonctionnelle accepte un argument et ne retourne aucune valeur ?",
  answers: [
    "Function",
    "Consumer",
    "Supplier",
    "Predicate",
  ],
  correct: 1,
},

{
  question: "383) Quelle interface fonctionnelle ne prend aucun argument et retourne une valeur ?",
  answers: [
    "Consumer",
    "Supplier",
    "Predicate",
    "Function",
  ],
  correct: 1,
},

{
  question: "384) Quelle interface fonctionnelle retourne un booléen à partir d'un argument ?",
  answers: [
    "Predicate",
    "Consumer",
    "Supplier",
    "Runnable",
  ],
  correct: 0,
},

{
  question: "385) Quelle méthode est utilisée par Predicate<T> ?",
  answers: [
    "apply()",
    "test()",
    "accept()",
    "get()",
  ],
  correct: 1,
},

{
  question: "386) Quelle méthode est utilisée par Function<T,R> ?",
  answers: [
    "apply()",
    "test()",
    "accept()",
    "get()",
  ],
  correct: 0,
},

{
  question: "387) Quelle méthode est utilisée par Consumer<T> ?",
  answers: [
    "apply()",
    "test()",
    "accept()",
    "consume()",
  ],
  correct: 2,
},

{
  question: "388) Quelle méthode est utilisée par Supplier<T> ?",
  answers: [
    "supply()",
    "provide()",
    "get()",
    "apply()",
  ],
  correct: 2,
},

{
  question: "389) Quelle interface représente une tâche sans paramètre et sans valeur de retour ?",
  answers: [
    "Runnable",
    "Consumer",
    "Supplier",
    "Callable",
  ],
  correct: 0,
},

{
  question: "390) Quelle syntaxe représente une lambda qui prend x et retourne x * 2 ?",
  answers: [
    "x -> x * 2",
    "x => x * 2",
    "lambda x: x * 2",
    "(x) := x * 2",
  ],
  correct: 0,
},

{
  question: "391) Quelle syntaxe représente une lambda sans paramètre ?",
  answers: [
    "-> System.out.println(\"OK\")",
    "() -> System.out.println(\"OK\")",
    "void -> System.out.println(\"OK\")",
    "null -> System.out.println(\"OK\")",
  ],
  correct: 1,
},

{
  question: "392) Une expression lambda Java peut être utilisée avec :",
  answers: [
    "N'importe quelle classe",
    "Une interface fonctionnelle compatible",
    "Uniquement une classe abstraite",
    "Uniquement Object",
  ],
  correct: 1,
},

{
  question: "393) Combien de méthodes abstraites doit normalement déclarer une interface fonctionnelle ?",
  answers: [
    "0",
    "1",
    "2",
    "Au moins 3",
  ],
  correct: 1,
},

{
  question: "394) Quelle annotation indique qu'une interface est destinée à être fonctionnelle ?",
  answers: [
    "@Functional",
    "@FunctionalInterface",
    "@Lambda",
    "@SingleMethod",
  ],
  correct: 1,
},

{
  question: "395) Quelle opération Stream transforme chaque élément en une autre valeur ?",
  answers: [
    "filter()",
    "map()",
    "reduce()",
    "count()",
  ],
  correct: 1,
},

{
  question: "396) Quelle opération Stream sélectionne les éléments correspondant à une condition ?",
  answers: [
    "map()",
    "filter()",
    "select()",
    "where()",
  ],
  correct: 1,
},

{
  question: "397) Quelle opération Stream combine les éléments pour produire un résultat ?",
  answers: [
    "reduce()",
    "filter()",
    "map()",
    "iterate()",
  ],
  correct: 0,
},

{
  question: "398) Quelle opération Stream retourne le nombre d'éléments ?",
  answers: [
    "size()",
    "length()",
    "count()",
    "number()",
  ],
  correct: 2,
},

{
  question: "399) Laquelle de ces opérations est une opération intermédiaire d'un Stream ?",
  answers: [
    "count()",
    "collect()",
    "filter()",
    "forEach()",
  ],
  correct: 2,
},

{
  question: "400) Laquelle de ces opérations est une opération terminale d'un Stream ?",
  answers: [
    "map()",
    "filter()",
    "sorted()",
    "collect()",
  ],
  correct: 3,
},
{
  question: "401) Quelle méthode permet de convertir un Stream en une collection List avec l'API Stream moderne ?",
  answers: [
    "toList()",
    "asList()",
    "convertList()",
    "makeList()",
  ],
  correct: 0,
},

{
  question: "402) Quelle méthode permet de supprimer les doublons d'un Stream ?",
  answers: [
    "unique()",
    "distinct()",
    "removeDuplicates()",
    "deduplicate()",
  ],
  correct: 1,
},

{
  question: "403) Quelle opération intermédiaire permet de trier les éléments d'un Stream ?",
  answers: [
    "order()",
    "sort()",
    "sorted()",
    "arrange()",
  ],
  correct: 2,
},

{
  question: "404) Quelle méthode permet de limiter le nombre d'éléments d'un Stream ?",
  answers: [
    "limit()",
    "max()",
    "take()",
    "truncate()",
  ],
  correct: 0,
},

{
  question: "405) Quelle méthode permet d'ignorer les premiers éléments d'un Stream ?",
  answers: [
    "skip()",
    "ignore()",
    "offset()",
    "jump()",
  ],
  correct: 0,
},

{
  question: "406) Quelle méthode permet de vérifier si au moins un élément satisfait une condition ?",
  answers: [
    "anyMatch()",
    "someMatch()",
    "existsMatch()",
    "oneMatch()",
  ],
  correct: 0,
},

{
  question: "407) Quelle méthode permet de vérifier si tous les éléments satisfont une condition ?",
  answers: [
    "allMatch()",
    "everyMatch()",
    "eachMatch()",
    "matchAllElements()",
  ],
  correct: 0,
},

{
  question: "408) Quelle méthode permet de vérifier si aucun élément ne satisfait une condition ?",
  answers: [
    "noneMatch()",
    "noMatch()",
    "zeroMatch()",
    "notMatch()",
  ],
  correct: 0,
},

{
  question: "409) Quelle méthode permet de récupérer un élément quelconque d'un Stream ?",
  answers: [
    "getAny()",
    "findAny()",
    "any()",
    "getRandom()",
  ],
  correct: 1,
},

{
  question: "410) Quelle méthode permet de récupérer le premier élément d'un Stream ?",
  answers: [
    "first()",
    "findFirst()",
    "getFirst()",
    "head()",
  ],
  correct: 1,
},

{
  question: "411) Quel type est généralement retourné par findFirst() sur un Stream<T> ?",
  answers: [
    "T",
    "Optional<T>",
    "List<T>",
    "Stream<T>",
  ],
  correct: 1,
},

{
  question: "412) Quelle opération terminale permet d'exécuter une action sur chaque élément ?",
  answers: [
    "forEach()",
    "each()",
    "iterate()",
    "executeAll()",
  ],
  correct: 0,
},

{
  question: "413) Quelle méthode permet de créer un Stream à partir d'une collection ?",
  answers: [
    "stream()",
    "createStream()",
    "toStreamOnly()",
    "makeStream()",
  ],
  correct: 0,
},

{
  question: "414) Quelle méthode permet de créer un Stream parallèle à partir d'une collection ?",
  answers: [
    "parallel()",
    "parallelStream()",
    "createParallel()",
    "streamParallel()",
  ],
  correct: 1,
},

{
  question: "415) Quelle méthode permet de transformer un Stream séquentiel en Stream parallèle ?",
  answers: [
    "parallel()",
    "parallelStream()",
    "toParallel()",
    "makeParallel()",
  ],
  correct: 0,
},

{
  question: "416) Quel est le rôle principal de flatMap() dans l'API Stream ?",
  answers: [
    "Trier les éléments",
    "Aplatir des structures imbriquées",
    "Compter les éléments",
    "Supprimer uniquement les null",
  ],
  correct: 1,
},

{
  question: "417) Quelle méthode permet de transformer un Stream<T> en Stream<R> ?",
  answers: [
    "filter()",
    "map()",
    "peek()",
    "count()",
  ],
  correct: 1,
},

{
  question: "418) Quelle méthode permet d'effectuer une action intermédiaire principalement destinée au débogage d'un Stream ?",
  answers: [
    "debug()",
    "inspect()",
    "peek()",
    "trace()",
  ],
  correct: 2,
},

{
  question: "419) Quelle méthode permet de compter les éléments d'un Stream après filtrage ?",
  answers: [
    "filter().count()",
    "count().filter()",
    "filter().size()",
    "count().where()",
  ],
  correct: 0,
},

{
  question: "420) Quel résultat produit généralement Stream.empty() ?",
  answers: [
    "Un Stream contenant null",
    "Un Stream vide",
    "Une exception",
    "Un Stream contenant zéro",
  ],
  correct: 1,
},

{
  question: "421) Quelle classe permet de créer un Stream à partir de plusieurs éléments ?",
  answers: [
    "Stream",
    "Streams",
    "StreamBuilderOnly",
    "CollectionStream",
  ],
  correct: 0,
},

{
  question: "422) Quelle méthode permet de créer un Stream contenant plusieurs valeurs spécifiées ?",
  answers: [
    "Stream.of()",
    "Stream.create()",
    "Stream.values()",
    "Stream.from()",
  ],
  correct: 0,
},

{
  question: "423) Quelle méthode permet de créer un Stream infini en répétant une valeur ?",
  answers: [
    "Stream.repeat()",
    "Stream.generate()",
    "Stream.infinite()",
    "Stream.loop()",
  ],
  correct: 1,
},

{
  question: "424) Quelle méthode permet de créer un Stream séquentiel infini basé sur une fonction d'initialisation et une fonction suivante ?",
  answers: [
    "Stream.iterate()",
    "Stream.loop()",
    "Stream.sequence()",
    "Stream.generateSequence()",
  ],
  correct: 0,
},

{
  question: "425) Pourquoi utilise-t-on souvent limit() avec un Stream généré par generate() ?",
  answers: [
    "Pour trier le Stream",
    "Pour éviter un traitement infini",
    "Pour supprimer les doublons",
    "Pour convertir le Stream en List",
  ],
  correct: 1,
},

{
  question: "426) Quelle classe fournit les collecteurs standard utilisés avec Stream.collect() ?",
  answers: [
    "CollectorUtils",
    "Collectors",
    "CollectionTools",
    "StreamCollectors",
  ],
  correct: 1,
},

{
  question: "427) Quel collecteur permet de regrouper des éléments selon une clé ?",
  answers: [
    "Collectors.groupingBy()",
    "Collectors.groupByOnly()",
    "Collectors.collectBy()",
    "Collectors.partitionBy()",
  ],
  correct: 0,
},

{
  question: "428) Quel collecteur permet de partitionner les éléments selon un prédicat en deux groupes ?",
  answers: [
    "Collectors.partitioningBy()",
    "Collectors.groupingBy()",
    "Collectors.splitBy()",
    "Collectors.divideBy()",
  ],
  correct: 0,
},

{
  question: "429) Quel collecteur permet de joindre des chaînes de caractères ?",
  answers: [
    "Collectors.joining()",
    "Collectors.concat()",
    "Collectors.mergeStrings()",
    "Collectors.combine()",
  ],
  correct: 0,
},

{
  question: "430) Que retourne généralement Collectors.toSet() ?",
  answers: [
    "Une List",
    "Un Set",
    "Une Map",
    "Un tableau",
  ],
  correct: 1,
},

{
  question: "431) Quelle interface représente un résultat mutable pouvant accumuler des éléments dans un Collector ?",
  answers: [
    "Collector",
    "Collection",
    "Accumulator",
    "Supplier",
  ],
  correct: 0,
},

{
  question: "432) Quelle interface fonctionnelle représente une fonction qui accepte deux arguments et retourne un résultat ?",
  answers: [
    "BiFunction",
    "TwoFunction",
    "DoubleFunction",
    "BinaryFunction",
  ],
  correct: 0,
},

{
  question: "433) Quelle interface accepte deux arguments et retourne un booléen ?",
  answers: [
    "BiPredicate",
    "BiBoolean",
    "TwoPredicate",
    "BinaryPredicate",
  ],
  correct: 0,
},

{
  question: "434) Quelle interface accepte deux arguments et ne retourne aucune valeur ?",
  answers: [
    "BiConsumer",
    "TwoConsumer",
    "BinaryConsumer",
    "DualConsumer",
  ],
  correct: 0,
},

{
  question: "435) Quelle méthode permet de combiner deux Predicate avec une condition AND ?",
  answers: [
    "and()",
    "combineAnd()",
    "merge()",
    "both()",
  ],
  correct: 0,
},

{
  question: "436) Quelle méthode permet de créer la négation d'un Predicate ?",
  answers: [
    "not()",
    "negate()",
    "inverse()",
    "reverse()",
  ],
  correct: 1,
},

{
  question: "437) Quelle méthode permet de combiner deux Predicate avec OR ?",
  answers: [
    "or()",
    "either()",
    "combineOr()",
    "any()",
  ],
  correct: 0,
},

{
  question: "438) Quelle méthode de Function permet de composer une autre fonction avant celle-ci ?",
  answers: [
    "compose()",
    "before()",
    "chainBefore()",
    "prepend()",
  ],
  correct: 0,
},

{
  question: "439) Quelle méthode de Function permet de composer une autre fonction après celle-ci ?",
  answers: [
    "after()",
    "andThen()",
    "next()",
    "chainAfter()",
  ],
  correct: 1,
},

{
  question: "440) Quelle classe permet de représenter un entier avec une valeur primitive dans les Streams spécialisés ?",
  answers: [
    "IntStream",
    "IntegerStream",
    "NumberStream",
    "PrimitiveStream",
  ],
  correct: 0,
},

{
  question: "441) Quelle classe représente un Stream spécialisé de valeurs long ?",
  answers: [
    "LongStream",
    "StreamLong",
    "LongValueStream",
    "PrimitiveLongStream",
  ],
  correct: 0,
},

{
  question: "442) Quelle classe représente un Stream spécialisé de valeurs double ?",
  answers: [
    "DoubleStream",
    "StreamDouble",
    "DoubleValueStream",
    "PrimitiveDoubleStream",
  ],
  correct: 0,
},

{
  question: "443) Quelle méthode d'IntStream permet de calculer la somme des valeurs ?",
  answers: [
    "sum()",
    "total()",
    "addAll()",
    "calculateSum()",
  ],
  correct: 0,
},

{
  question: "444) Quelle méthode d'IntStream permet de calculer la moyenne ?",
  answers: [
    "average()",
    "mean()",
    "avgValue()",
    "calculateAverage()",
  ],
  correct: 0,
},

{
  question: "445) Quel type est retourné par IntStream.average() ?",
  answers: [
    "double",
    "OptionalDouble",
    "Double",
    "Optional<Integer>",
  ],
  correct: 1,
},

{
  question: "446) Quelle classe représente un résultat optionnel contenant une valeur double ?",
  answers: [
    "OptionalDouble",
    "DoubleOptional",
    "Optional<DoubleValue>",
    "MaybeDouble",
  ],
  correct: 0,
},

{
  question: "447) Quelle méthode permet de transformer un Stream<T> en IntStream à partir d'une fonction ?",
  answers: [
    "mapToInt()",
    "toIntStream()",
    "convertInt()",
    "mapInt()",
  ],
  correct: 0,
},

{
  question: "448) Quelle méthode permet de transformer un Stream<T> en LongStream ?",
  answers: [
    "mapToLong()",
    "toLongStream()",
    "convertLong()",
    "mapLong()",
  ],
  correct: 0,
},

{
  question: "449) Quelle méthode permet de transformer un Stream<T> en DoubleStream ?",
  answers: [
    "mapToDouble()",
    "toDoubleStream()",
    "convertDouble()",
    "mapDouble()",
  ],
  correct: 0,
},

{
  question: "450) Quelle méthode permet de convertir un IntStream en Stream<Integer> ?",
  answers: [
    "boxed()",
    "toObjects()",
    "wrap()",
    "boxValues()",
  ],
  correct: 0,
},

{
  question: "451) Quelle interface permet de représenter une tâche qui retourne un résultat et peut lancer une exception ?",
  answers: [
    "Runnable",
    "Callable",
    "Supplier",
    "Task",
  ],
  correct: 1,
},

{
  question: "452) Quelle méthode doit être implémentée par Callable ?",
  answers: [
    "run()",
    "call()",
    "execute()",
    "perform()",
  ],
  correct: 1,
},

{
  question: "453) Quelle interface représente le résultat futur d'une tâche exécutée par un ExecutorService ?",
  answers: [
    "Future",
    "Result",
    "TaskResult",
    "AsyncResult",
  ],
  correct: 0,
},

{
  question: "454) Quelle méthode de Future permet d'attendre et récupérer le résultat ?",
  answers: [
    "result()",
    "get()",
    "waitResult()",
    "retrieve()",
  ],
  correct: 1,
},

{
  question: "455) Quelle méthode de Future permet de vérifier si la tâche est terminée ?",
  answers: [
    "isDone()",
    "isFinished()",
    "completed()",
    "done()",
  ],
  correct: 0,
},

{
  question: "456) Quelle méthode de Future permet d'annuler une tâche ?",
  answers: [
    "stop()",
    "cancel()",
    "abort()",
    "terminate()",
  ],
  correct: 1,
},

{
  question: "457) Quelle interface permet de gérer un pool de threads ?",
  answers: [
    "ExecutorService",
    "ThreadPoolManager",
    "ThreadExecutor",
    "ExecutorManager",
  ],
  correct: 0,
},

{
  question: "458) Quelle classe fournit une implémentation courante d'ExecutorService avec un pool fixe ?",
  answers: [
    "Executors",
    "FixedExecutor",
    "ThreadFactory",
    "ExecutorBuilder",
  ],
  correct: 0,
},

{
  question: "459) Quelle méthode crée un ExecutorService avec un nombre fixe de threads ?",
  answers: [
    "Executors.fixedPool()",
    "Executors.newFixedThreadPool()",
    "Executors.createFixedPool()",
    "Executors.fixedExecutor()",
  ],
  correct: 1,
},

{
  question: "460) Quelle méthode permet de soumettre une Callable à un ExecutorService ?",
  answers: [
    "execute()",
    "submit()",
    "call()",
    "runTask()",
  ],
  correct: 1,
},

{
  question: "461) Quelle méthode d'ExecutorService exécute une Runnable sans retourner de Future ?",
  answers: [
    "execute()",
    "run()",
    "start()",
    "perform()",
  ],
  correct: 0,
},

{
  question: "462) Quelle méthode permet d'arrêter proprement un ExecutorService ?",
  answers: [
    "closeAll()",
    "shutdown()",
    "stop()",
    "terminate()",
  ],
  correct: 1,
},

{
  question: "463) Quelle méthode tente d'arrêter immédiatement les tâches en cours d'un ExecutorService ?",
  answers: [
    "shutdownNow()",
    "forceShutdown()",
    "stopNow()",
    "terminateNow()",
  ],
  correct: 0,
},

{
  question: "464) Quelle classe permet de créer des threads virtuels dans les versions modernes de Java ?",
  answers: [
    "Executors",
    "VirtualThreads",
    "ThreadFactory",
    "VirtualThreadBuilder",
  ],
  correct: 0,
},

{
  question: "465) Quelle méthode permet de créer un ExecutorService utilisant un thread virtuel par tâche ?",
  answers: [
    "Executors.newVirtualThreadPerTaskExecutor()",
    "Executors.virtualThreadPool()",
    "Executors.newVirtualPool()",
    "Thread.newVirtualExecutor()",
  ],
  correct: 0,
},

{
  question: "466) Quelle méthode démarre un thread créé avec la classe Thread ?",
  answers: [
    "run()",
    "start()",
    "execute()",
    "begin()",
  ],
  correct: 1,
},

{
  question: "467) Que se passe-t-il si on appelle directement run() sur un Thread au lieu de start() ?",
  answers: [
    "Un nouveau thread est toujours créé",
    "La méthode s'exécute dans le thread courant",
    "Le programme se termine",
    "Une exception est toujours levée",
  ],
  correct: 1,
},

{
  question: "468) Quelle méthode permet à un thread de demander à l'autre thread de s'interrompre ?",
  answers: [
    "stop()",
    "interrupt()",
    "cancelThread()",
    "break()",
  ],
  correct: 1,
},

{
  question: "469) Quelle méthode permet de vérifier le statut d'interruption d'un thread sans effacer le flag ?",
  answers: [
    "Thread.isInterrupted()",
    "Thread.interrupted()",
    "Thread.hasInterrupt()",
    "Thread.interruptStatus()",
  ],
  correct: 0,
},

{
  question: "470) Quelle méthode statique vérifie le statut d'interruption du thread courant et efface le flag ?",
  answers: [
    "Thread.isInterrupted()",
    "Thread.interrupted()",
    "Thread.checkInterrupt()",
    "Thread.currentInterrupted()",
  ],
  correct: 1,
},

{
  question: "471) Quel mot-clé permet de synchroniser l'accès à une méthode ou un bloc ?",
  answers: [
    "atomic",
    "synchronized",
    "concurrent",
    "locked",
  ],
  correct: 1,
},

{
  question: "472) Quel est l'objectif principal de synchronized ?",
  answers: [
    "Accélérer tous les threads",
    "Contrôler l'accès concurrent à une section critique",
    "Créer automatiquement un thread",
    "Supprimer le garbage collector",
  ],
  correct: 1,
},

{
  question: "473) Quelle classe permet d'utiliser un verrou explicite avec lock() et unlock() ?",
  answers: [
    "ReentrantLock",
    "ExplicitLock",
    "ThreadLock",
    "SyncLock",
  ],
  correct: 0,
},

{
  question: "474) Dans quel package se trouve ReentrantLock ?",
  answers: [
    "java.util.concurrent",
    "java.concurrent",
    "java.thread",
    "java.util.lock",
  ],
  correct: 0,
},

{
  question: "475) Quelle méthode doit généralement être placée dans un finally lorsqu'on utilise manuellement un Lock ?",
  answers: [
    "lock()",
    "unlock()",
    "releaseLock()",
    "closeLock()",
  ],
  correct: 1,
},

{
  question: "476) Quel mot-clé garantit principalement la visibilité des modifications d'une variable entre threads ?",
  answers: [
    "visible",
    "volatile",
    "shared",
    "atomic",
  ],
  correct: 1,
},

{
  question: "477) Une variable volatile garantit-elle automatiquement les opérations composées comme i++ ?",
  answers: [
    "Oui, toujours",
    "Non",
    "Oui, uniquement avec int",
    "Oui, uniquement avec long",
  ],
  correct: 1,
},

{
  question: "478) Quelle classe fournit des opérations atomiques sur des entiers ?",
  answers: [
    "AtomicInteger",
    "IntegerAtomic",
    "AtomicIntValue",
    "ConcurrentInteger",
  ],
  correct: 0,
},

{
  question: "479) Dans quel package se trouve AtomicInteger ?",
  answers: [
    "java.util.atomic",
    "java.util.concurrent.atomic",
    "java.concurrent",
    "java.atomic",
  ],
  correct: 1,
},

{
  question: "480) Quelle méthode d'AtomicInteger incrémente puis retourne la nouvelle valeur ?",
  answers: [
    "increment()",
    "incrementAndGet()",
    "getAndIncrement()",
    "addOne()",
  ],
  correct: 1,
},

{
  question: "481) Quelle méthode d'AtomicInteger retourne l'ancienne valeur puis incrémente ?",
  answers: [
    "incrementAndGet()",
    "getAndIncrement()",
    "increment()",
    "increaseAndGet()",
  ],
  correct: 1,
},

{
  question: "482) Quelle collection est conçue pour les accès concurrents et ne permet pas les clés null ?",
  answers: [
    "ConcurrentHashMap",
    "ConcurrentMapOnly",
    "ThreadHashMap",
    "SafeHashMap",
  ],
  correct: 0,
},

{
  question: "483) Quelle collection représente une file bloquante ?",
  answers: [
    "BlockingQueue",
    "BlockingList",
    "WaitQueue",
    "ThreadQueue",
  ],
  correct: 0,
},

{
  question: "484) Dans quel package se trouve BlockingQueue ?",
  answers: [
    "java.util.concurrent",
    "java.concurrent.queue",
    "java.util.queue",
    "java.thread",
  ],
  correct: 0,
},

{
  question: "485) Quelle implémentation de BlockingQueue utilise généralement une capacité fixe ?",
  answers: [
    "ArrayBlockingQueue",
    "FixedQueue",
    "BlockingArrayList",
    "ConcurrentArrayQueue",
  ],
  correct: 0,
},

{
  question: "486) Quelle implémentation de BlockingQueue est basée sur des nœuds chaînés ?",
  answers: [
    "LinkedBlockingQueue",
    "ChainBlockingQueue",
    "NodeQueue",
    "LinkedQueueBlocking",
  ],
  correct: 0,
},

{
  question: "487) Quelle méthode de BlockingQueue attend jusqu'à ce qu'un élément soit disponible ?",
  answers: [
    "waitForElement()",
    "take()",
    "getBlocking()",
    "pollWait()",
  ],
  correct: 1,
},

{
  question: "488) Quelle méthode de BlockingQueue attend jusqu'à ce qu'une place soit disponible pour insérer un élément ?",
  answers: [
    "put()",
    "insertWait()",
    "addBlocking()",
    "offerWait()",
  ],
  correct: 0,
},

{
  question: "489) Quel mécanisme permet à un thread d'attendre qu'une condition soit remplie avec un verrou explicite ?",
  answers: [
    "Condition",
    "WaitConditionOnly",
    "ThreadCondition",
    "LockCondition",
  ],
  correct: 0,
},

{
  question: "490) Quelle méthode de Condition permet à un thread d'attendre ?",
  answers: [
    "wait()",
    "await()",
    "sleep()",
    "pause()",
  ],
  correct: 1,
},

{
  question: "491) Quelle méthode de Condition réveille un thread en attente ?",
  answers: [
    "signal()",
    "wake()",
    "notifyThread()",
    "resume()",
  ],
  correct: 0,
},

{
  question: "492) Quelle méthode de Condition réveille tous les threads en attente ?",
  answers: [
    "signalAll()",
    "notifyAllThreads()",
    "wakeAll()",
    "resumeAll()",
  ],
  correct: 0,
},

{
  question: "493) Quelle interface représente une tâche pouvant être exécutée avec un résultat ?",
  answers: [
    "Callable<V>",
    "Runnable<V>",
    "Task<V>",
    "Executable<V>",
  ],
  correct: 0,
},

{
  question: "494) Quelle interface représente une action sans résultat et sans exception checked dans sa signature ?",
  answers: [
    "Runnable",
    "Callable",
    "ConsumerTask",
    "Action",
  ],
  correct: 0,
},

{
  question: "495) Quelle exception checked peut être lancée par Future.get() ?",
  answers: [
    "InterruptedException",
    "NullPointerException uniquement",
    "IndexOutOfBoundsException uniquement",
    "ClassCastException uniquement",
  ],
  correct: 0,
},

{
  question: "496) Quelle exception peut indiquer que l'exécution d'une tâche soumise via ExecutorService a échoué ?",
  answers: [
    "ExecutionException",
    "TaskException",
    "ExecutorException",
    "ThreadExecutionError",
  ],
  correct: 0,
},

{
  question: "497) Quelle classe permet de représenter un compteur décrémenté par plusieurs threads ?",
  answers: [
    "CountDownLatch",
    "ThreadCounter",
    "CountdownCounter",
    "MultiThreadLatch",
  ],
  correct: 0,
},

{
  question: "498) Quelle méthode de CountDownLatch diminue le compteur ?",
  answers: [
    "decrement()",
    "countDown()",
    "down()",
    "reduce()",
  ],
  correct: 1,
},

{
  question: "499) Quelle méthode de CountDownLatch permet à un thread d'attendre jusqu'à ce que le compteur atteigne zéro ?",
  answers: [
    "await()",
    "waitZero()",
    "wait()",
    "join()",
  ],
  correct: 0,
},

{
  question: "500) Quel mécanisme permet à plusieurs threads d'attendre les uns les autres à un point de synchronisation ?",
  answers: [
    "CyclicBarrier",
    "ThreadBarrierOnly",
    "MultiWait",
    "SyncPoint",
  ],
  correct: 0,
},
{
  question: "501) Quelle méthode de CyclicBarrier permet à un thread d'attendre les autres threads ?",
  answers: [
    "await()",
    "waitAll()",
    "joinAll()",
    "sync()",
  ],
  correct: 0,
},

{
  question: "502) Quelle classe permet de synchroniser plusieurs threads avec un nombre de parties à atteindre avant de continuer ?",
  answers: [
    "CyclicBarrier",
    "CountDownLatch",
    "ThreadGate",
    "SyncBarrier",
  ],
  correct: 0,
},

{
  question: "503) Quelle différence caractérise principalement CyclicBarrier par rapport à CountDownLatch ?",
  answers: [
    "CyclicBarrier peut être réutilisée après avoir atteint la barrière",
    "CyclicBarrier ne fonctionne qu'avec un seul thread",
    "CountDownLatch est toujours réutilisable",
    "Il n'existe aucune différence",
  ],
  correct: 0,
},

{
  question: "504) Quelle classe permet de faire communiquer plusieurs threads via des opérations d'échange de données ?",
  answers: [
    "Exchanger",
    "DataExchange",
    "ThreadExchange",
    "SwapChannel",
  ],
  correct: 0,
},

{
  question: "505) Quelle méthode d'Exchanger permet d'échanger une valeur entre deux threads ?",
  answers: [
    "exchange()",
    "swap()",
    "exchangeValue()",
    "transfer()",
  ],
  correct: 0,
},

{
  question: "506) Quelle classe permet de contrôler l'accès à une ressource avec un nombre limité de permis ?",
  answers: [
    "Semaphore",
    "PermitLock",
    "ResourceCounter",
    "AccessController",
  ],
  correct: 0,
},

{
  question: "507) Quelle méthode de Semaphore permet d'acquérir un permis ?",
  answers: [
    "acquire()",
    "getPermit()",
    "takePermit()",
    "lockPermit()",
  ],
  correct: 0,
},

{
  question: "508) Quelle méthode de Semaphore permet de libérer un permis ?",
  answers: [
    "release()",
    "free()",
    "unlockPermit()",
    "returnPermit()",
  ],
  correct: 0,
},

{
  question: "509) Quel mot-clé permet de créer une variable constante au niveau du langage Java ?",
  answers: [
    "const",
    "final",
    "constant",
    "immutable",
  ],
  correct: 1,
},

{
  question: "510) Une variable d'instance déclarée final peut-elle être réaffectée après son initialisation ?",
  answers: [
    "Oui",
    "Non",
    "Seulement dans une méthode static",
    "Seulement dans un constructeur",
  ],
  correct: 1,
},

{
  question: "511) Une référence final peut-elle désigner un objet dont l'état interne est modifiable ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement avec String",
    "Uniquement avec Integer",
  ],
  correct: 0,
},

{
  question: "512) Que signifie principalement le mot-clé immutable dans le contexte des objets Java ?",
  answers: [
    "L'objet ne peut pas être modifié après sa création",
    "L'objet est toujours static",
    "L'objet est toujours final",
    "L'objet ne peut pas être supprimé",
  ],
  correct: 0,
},

{
  question: "513) Quelle classe Java est connue pour être immuable ?",
  answers: [
    "String",
    "StringBuilder",
    "ArrayList",
    "StringBuffer",
  ],
  correct: 0,
},

{
  question: "514) Que se passe-t-il lorsqu'une opération de concaténation est effectuée sur une String ?",
  answers: [
    "La String originale est modifiée",
    "Une nouvelle String peut être créée",
    "La String devient mutable",
    "Une exception est toujours levée",
  ],
  correct: 1,
},

{
  question: "515) Quelle classe est généralement utilisée lorsqu'on souhaite construire une chaîne de manière mutable ?",
  answers: [
    "StringBuilder",
    "StringConstant",
    "MutableStringOnly",
    "TextBuilder",
  ],
  correct: 0,
},

{
  question: "516) Quelle classe est conçue pour les opérations sur des chaînes mutables et synchronisées ?",
  answers: [
    "StringBuilder",
    "StringBuffer",
    "MutableString",
    "ThreadString",
  ],
  correct: 1,
},

{
  question: "517) Entre StringBuilder et StringBuffer, laquelle est généralement plus adaptée lorsqu'une synchronisation intégrée est nécessaire ?",
  answers: [
    "StringBuilder",
    "StringBuffer",
    "Les deux sont identiques",
    "String",
  ],
  correct: 1,
},

{
  question: "518) Quelle méthode de StringBuilder ajoute du texte à la fin ?",
  answers: [
    "append()",
    "add()",
    "insertEnd()",
    "concatMutable()",
  ],
  correct: 0,
},

{
  question: "519) Quelle méthode de StringBuilder insère du texte à une position donnée ?",
  answers: [
    "insert()",
    "addAt()",
    "put()",
    "appendAt()",
  ],
  correct: 0,
},

{
  question: "520) Quelle méthode de StringBuilder inverse les caractères ?",
  answers: [
    "reverse()",
    "invert()",
    "backward()",
    "reverseText()",
  ],
  correct: 0,
},

{
  question: "521) Quelle méthode permet de supprimer une partie d'un StringBuilder entre deux indices ?",
  answers: [
    "remove()",
    "delete()",
    "eraseRange()",
    "cut()",
  ],
  correct: 1,
},

{
  question: "522) Quelle méthode de StringBuilder permet de remplacer une portion de caractères ?",
  answers: [
    "replace()",
    "change()",
    "substitute()",
    "replaceRange()",
  ],
  correct: 0,
},

{
  question: "523) Quel type de données est utilisé pour représenter un caractère unique en Java ?",
  answers: [
    "String",
    "char",
    "character",
    "text",
  ],
  correct: 1,
},

{
  question: "524) Quelle taille occupe généralement un char Java ?",
  answers: [
    "8 bits",
    "16 bits",
    "32 bits",
    "64 bits",
  ],
  correct: 1,
},

{
  question: "525) Quelle valeur représente le caractère Unicode U+0041 ?",
  answers: [
    "'A'",
    "'B'",
    "'a'",
    "'1'",
  ],
  correct: 0,
},

{
  question: "526) Quelle classe permet de manipuler une séquence de caractères sous forme d'un objet immuable ?",
  answers: [
    "String",
    "CharSequenceBuilder",
    "CharacterArray",
    "Text",
  ],
  correct: 0,
},

{
  question: "527) Quelle interface est implémentée par String ?",
  answers: [
    "CharSequence",
    "TextSequenceOnly",
    "StringSequence",
    "CharacterCollection",
  ],
  correct: 0,
},

{
  question: "528) Quelle méthode de String retourne le nombre de caractères ?",
  answers: [
    "size()",
    "length()",
    "count()",
    "characters()",
  ],
  correct: 1,
},

{
  question: "529) Quelle méthode retourne le caractère situé à un index donné dans une String ?",
  answers: [
    "charAt()",
    "getChar()",
    "characterAt()",
    "getCharacter()",
  ],
  correct: 0,
},

{
  question: "530) Que retourne " + "\"Java\".charAt(0)" + " ?",
  answers: [
    "'J'",
    "'a'",
    "\"Java\"",
    "0",
  ],
  correct: 0,
},

{
  question: "531) Quelle méthode de String permet de rechercher la première occurrence d'un caractère ou d'une sous-chaîne ?",
  answers: [
    "indexOf()",
    "find()",
    "search()",
    "locate()",
  ],
  correct: 0,
},

{
  question: "532) Quelle valeur retourne indexOf() lorsque l'élément recherché n'est pas trouvé ?",
  answers: [
    "0",
    "null",
    "-1",
    "false",
  ],
  correct: 2,
},

{
  question: "533) Quelle méthode vérifie si une String commence par une sous-chaîne donnée ?",
  answers: [
    "startsWith()",
    "beginWith()",
    "start()",
    "hasPrefix()",
  ],
  correct: 0,
},

{
  question: "534) Quelle méthode vérifie si une String se termine par une sous-chaîne donnée ?",
  answers: [
    "endsWith()",
    "finishWith()",
    "end()",
    "hasSuffixOnly()",
  ],
  correct: 0,
},

{
  question: "535) Quelle méthode permet de remplacer toutes les occurrences correspondant à une expression régulière ?",
  answers: [
    "replace()",
    "replaceAll()",
    "replaceRegexOnly()",
    "substituteAll()",
  ],
  correct: 1,
},

{
  question: "536) Quelle méthode permet de découper une String selon une expression régulière ?",
  answers: [
    "split()",
    "divide()",
    "separate()",
    "cut()",
  ],
  correct: 0,
},

{
  question: "537) Quelle méthode supprime les espaces au début et à la fin d'une String ?",
  answers: [
    "strip()",
    "trimSpacesOnly()",
    "removeSpaces()",
    "clean()",
  ],
  correct: 0,
},

{
  question: "538) Quelle méthode convertit une String en minuscules selon les règles par défaut ?",
  answers: [
    "lower()",
    "toLowerCase()",
    "lowerCase()",
    "convertLower()",
  ],
  correct: 1,
},

{
  question: "539) Quelle méthode convertit une String en majuscules ?",
  answers: [
    "upper()",
    "toUpperCase()",
    "upperCase()",
    "convertUpper()",
  ],
  correct: 1,
},

{
  question: "540) Quelle méthode permet de tester le contenu d'une String sans tenir compte de la casse ?",
  answers: [
    "equalsIgnoreCase()",
    "equalsNoCase()",
    "sameIgnoreCase()",
    "compareIgnoreCaseOnly()",
  ],
  correct: 0,
},

{
  question: "541) Quelle méthode permet de comparer deux chaînes selon l'ordre lexicographique ?",
  answers: [
    "compareTo()",
    "compareString()",
    "lexicalCompare()",
    "orderCompare()",
  ],
  correct: 0,
},

{
  question: "542) Quelle méthode compare deux chaînes sans tenir compte de la casse ?",
  answers: [
    "compareToIgnoreCase()",
    "compareIgnoreCase()",
    "equalsIgnoreCaseCompare()",
    "lexicalIgnoreCase()",
  ],
  correct: 0,
},

{
  question: "543) Quelle méthode retourne une sous-chaîne d'une String à partir d'un index de début ?",
  answers: [
    "substring()",
    "subStringOnly()",
    "slice()",
    "extract()",
  ],
  correct: 0,
},

{
  question: "544) Dans substring(beginIndex, endIndex), l'index endIndex est-il inclus ?",
  answers: [
    "Oui",
    "Non",
    "Seulement pour char",
    "Seulement pour StringBuilder",
  ],
  correct: 1,
},

{
  question: "545) Quelle classe permet de représenter une expression régulière compilée ?",
  answers: [
    "Pattern",
    "Regex",
    "RegularExpression",
    "ExpressionPattern",
  ],
  correct: 0,
},

{
  question: "546) Quelle classe représente le résultat d'une recherche avec une expression régulière ?",
  answers: [
    "Matcher",
    "MatchResultOnly",
    "RegexResult",
    "PatternMatch",
  ],
  correct: 0,
},

{
  question: "547) Dans quel package se trouvent Pattern et Matcher ?",
  answers: [
    "java.util.regex",
    "java.regex",
    "java.text.regex",
    "java.lang.regex",
  ],
  correct: 0,
},

{
  question: "548) Quelle méthode de Pattern permet de compiler une expression régulière ?",
  answers: [
    "compile()",
    "create()",
    "build()",
    "parse()",
  ],
  correct: 0,
},

{
  question: "549) Quelle méthode de Matcher vérifie si toute la région correspond au motif ?",
  answers: [
    "matches()",
    "matchAll()",
    "fullMatch()",
    "entire()",
  ],
  correct: 0,
},

{
  question: "550) Quelle méthode de Matcher recherche la prochaine sous-séquence correspondant au motif ?",
  answers: [
    "find()",
    "search()",
    "nextMatch()",
    "locate()",
  ],
  correct: 0,
},

{
  question: "551) Quelle classe permet de lire des données saisies au clavier de manière courante ?",
  answers: [
    "Scanner",
    "KeyboardReader",
    "InputReader",
    "ConsoleScanner",
  ],
  correct: 0,
},

{
  question: "552) Dans quel package se trouve Scanner ?",
  answers: [
    "java.io",
    "java.util",
    "java.input",
    "java.lang",
  ],
  correct: 1,
},

{
  question: "553) Quelle méthode de Scanner lit un entier ?",
  answers: [
    "readInt()",
    "nextInt()",
    "getInt()",
    "readInteger()",
  ],
  correct: 1,
},

{
  question: "554) Quelle méthode de Scanner lit un double ?",
  answers: [
    "nextDouble()",
    "readDouble()",
    "getDouble()",
    "scanDouble()",
  ],
  correct: 0,
},

{
  question: "555) Quelle méthode de Scanner lit une ligne entière ?",
  answers: [
    "nextLine()",
    "readLine()",
    "getLine()",
    "scanLine()",
  ],
  correct: 0,
},

{
  question: "556) Quelle méthode de Scanner lit le prochain token sous forme de String ?",
  answers: [
    "next()",
    "nextTokenString()",
    "readToken()",
    "getNext()",
  ],
  correct: 0,
},

{
  question: "557) Quelle méthode vérifie si un prochain token peut être interprété comme un entier ?",
  answers: [
    "hasInt()",
    "hasNextInt()",
    "isNextInt()",
    "nextIsInt()",
  ],
  correct: 1,
},

{
  question: "558) Quel objet représente généralement la sortie standard en Java ?",
  answers: [
    "System.in",
    "System.out",
    "System.err",
    "Console.out",
  ],
  correct: 1,
},

{
  question: "559) Quel objet représente généralement l'entrée standard en Java ?",
  answers: [
    "System.in",
    "System.out",
    "System.input",
    "Console.in",
  ],
  correct: 0,
},

{
  question: "560) Quel objet représente généralement la sortie d'erreur standard ?",
  answers: [
    "System.error",
    "System.err",
    "System.outError",
    "Console.err",
  ],
  correct: 1,
},

{
  question: "561) Quelle méthode affiche du texte sans retour automatique à la ligne ?",
  answers: [
    "System.out.print()",
    "System.out.println()",
    "System.out.writeLine()",
    "System.printLine()",
  ],
  correct: 0,
},

{
  question: "562) Quelle méthode affiche du texte avec un retour à la ligne ?",
  answers: [
    "System.out.print()",
    "System.out.println()",
    "System.out.write()",
    "System.printlnText()",
  ],
  correct: 1,
},

{
  question: "563) Quelle classe permet d'écrire des caractères dans un fichier avec un buffer ?",
  answers: [
    "BufferedWriter",
    "FileWriterBuffer",
    "BufferedFile",
    "WriterBufferOnly",
  ],
  correct: 0,
},

{
  question: "564) Dans quel package se trouve BufferedWriter ?",
  answers: [
    "java.io",
    "java.nio",
    "java.util",
    "java.file",
  ],
  correct: 0,
},

{
  question: "565) Quelle classe permet de lire efficacement du texte caractère par caractère ou par blocs avec un buffer ?",
  answers: [
    "BufferedReader",
    "BufferedFileReader",
    "TextBufferReader",
    "FileBuffer",
  ],
  correct: 0,
},

{
  question: "566) Quelle méthode de BufferedReader lit une ligne complète ?",
  answers: [
    "readLine()",
    "nextLine()",
    "readTextLine()",
    "getLine()",
  ],
  correct: 0,
},

{
  question: "567) Que retourne BufferedReader.readLine() lorsqu'il atteint la fin du fichier ?",
  answers: [
    "0",
    "false",
    "null",
    "-1",
  ],
  correct: 2,
},

{
  question: "568) Quelle classe permet de lire des octets depuis un fichier ?",
  answers: [
    "FileInputStream",
    "FileByteReader",
    "InputFileStream",
    "ByteFileInput",
  ],
  correct: 0,
},

{
  question: "569) Quelle classe permet d'écrire des octets dans un fichier ?",
  answers: [
    "FileOutputStream",
    "FileByteWriter",
    "OutputFileStream",
    "ByteFileOutput",
  ],
  correct: 0,
},

{
  question: "570) Quelle classe permet d'écrire des caractères dans un fichier ?",
  answers: [
    "FileWriter",
    "FileCharWriterOnly",
    "CharacterOutput",
    "TextOutputFile",
  ],
  correct: 0,
},

{
  question: "571) Quelle classe permet de lire des caractères depuis un fichier ?",
  answers: [
    "FileReader",
    "FileCharReader",
    "CharacterInputFile",
    "TextInputFile",
  ],
  correct: 0,
},

{
  question: "572) Quelle interface représente une ressource pouvant être fermée automatiquement par try-with-resources ?",
  answers: [
    "AutoCloseable",
    "ClosableResource",
    "CloseableOnly",
    "Resource",
  ],
  correct: 0,
},

{
  question: "573) Quelle méthode doit être fournie par AutoCloseable ?",
  answers: [
    "close()",
    "shutdown()",
    "dispose()",
    "release()",
  ],
  correct: 0,
},

{
  question: "574) Quel est le principal avantage de try-with-resources ?",
  answers: [
    "Il évite toute exception",
    "Il ferme automatiquement les ressources",
    "Il accélère les fichiers",
    "Il supprime les fichiers temporaires",
  ],
  correct: 1,
},

{
  question: "575) Quelle syntaxe est correcte pour utiliser try-with-resources ?",
  answers: [
    "try (Resource r = new Resource()) { }",
    "try Resource(r) { }",
    "try [Resource r = new Resource()] { }",
    "resource try (r) { }",
  ],
  correct: 0,
},

{
  question: "576) Quelle classe représente un chemin dans l'API NIO.2 ?",
  answers: [
    "Path",
    "FilePath",
    "FileLocation",
    "NioPath",
  ],
  correct: 0,
},

{
  question: "577) Quelle classe fournit des opérations statiques sur les fichiers et répertoires avec NIO.2 ?",
  answers: [
    "FileUtils",
    "Files",
    "PathUtils",
    "NioFiles",
  ],
  correct: 1,
},

{
  question: "578) Quelle méthode permet de créer un Path à partir d'une chaîne ?",
  answers: [
    "Path.of()",
    "Path.create()",
    "Path.fromString()",
    "Path.make()",
  ],
  correct: 0,
},

{
  question: "579) Quelle méthode permet de vérifier l'existence d'un fichier avec Files ?",
  answers: [
    "Files.exists()",
    "Files.exist()",
    "Files.isThere()",
    "Files.present()",
  ],
  correct: 0,
},

{
  question: "580) Quelle méthode permet de créer un répertoire avec Files ?",
  answers: [
    "Files.createDirectory()",
    "Files.makeDirectory()",
    "Files.newDirectory()",
    "Files.createFolderOnly()",
  ],
  correct: 0,
},

{
  question: "581) Quelle méthode permet de créer un répertoire ainsi que ses parents inexistants ?",
  answers: [
    "Files.createDirectories()",
    "Files.createAllDirectories()",
    "Files.makeDirectories()",
    "Files.mkdirs()",
  ],
  correct: 0,
},

{
  question: "582) Quelle méthode permet de supprimer un fichier ou un répertoire vide ?",
  answers: [
    "Files.delete()",
    "Files.remove()",
    "Files.erase()",
    "Files.deleteFile()",
  ],
  correct: 0,
},

{
  question: "583) Quelle méthode supprime un fichier ou retourne false s'il n'existe pas ?",
  answers: [
    "Files.deleteIfExists()",
    "Files.removeIfExists()",
    "Files.tryDelete()",
    "Files.deleteOptional()",
  ],
  correct: 0,
},

{
  question: "584) Quelle méthode permet de copier un fichier avec NIO ?",
  answers: [
    "Files.copy()",
    "Files.clone()",
    "Files.duplicate()",
    "Files.copyFile()",
  ],
  correct: 0,
},

{
  question: "585) Quelle méthode permet de déplacer ou renommer un fichier avec NIO ?",
  answers: [
    "Files.move()",
    "Files.rename()",
    "Files.transfer()",
    "Files.relocate()",
  ],
  correct: 0,
},

{
  question: "586) Quelle méthode permet de lire toutes les lignes d'un fichier texte ?",
  answers: [
    "Files.readAllLines()",
    "Files.readLines()",
    "Files.getAllLines()",
    "Files.readTextLines()",
  ],
  correct: 0,
},

{
  question: "587) Quelle méthode permet d'écrire une liste de chaînes dans un fichier ?",
  answers: [
    "Files.write()",
    "Files.writeLines()",
    "Files.saveLines()",
    "Files.writeText()",
  ],
  correct: 0,
},

{
  question: "588) Quelle exception est généralement liée aux opérations d'entrée/sortie ?",
  answers: [
    "IOException",
    "InputException",
    "FileException",
    "IOErrorException",
  ],
  correct: 0,
},

{
  question: "589) IOException est-elle une exception checked ?",
  answers: [
    "Oui",
    "Non",
    "Seulement dans java.io",
    "Seulement avec FileReader",
  ],
  correct: 0,
},

{
  question: "590) Quelle classe représente une erreur liée à un fichier inexistant dans certaines opérations NIO ?",
  answers: [
    "NoSuchFileException",
    "FileNotFoundRuntimeException",
    "MissingFileException",
    "FileAbsentException",
  ],
  correct: 0,
},

{
  question: "591) Quelle exception est levée lorsqu'une opération d'entrée/sortie rencontre une violation d'accès ?",
  answers: [
    "AccessDeniedException",
    "PermissionException",
    "FileAccessRuntimeException",
    "DeniedFileException",
  ],
  correct: 0,
},

{
  question: "592) Quelle classe représente un fichier ou répertoire dans l'ancienne API java.io ?",
  answers: [
    "File",
    "PathFile",
    "DirectoryFile",
    "IOFile",
  ],
  correct: 0,
},

{
  question: "593) Quelle méthode de File vérifie si le chemin représente un répertoire ?",
  answers: [
    "isDirectory()",
    "isFolder()",
    "directory()",
    "checkDirectory()",
  ],
  correct: 0,
},

{
  question: "594) Quelle méthode de File vérifie si le chemin représente un fichier normal ?",
  answers: [
    "isFile()",
    "isRegularFile()",
    "file()",
    "checkFile()",
  ],
  correct: 0,
},

{
  question: "595) Quelle méthode de File retourne le nom du fichier ou répertoire ?",
  answers: [
    "getName()",
    "name()",
    "getFileNameOnly()",
    "fileName()",
  ],
  correct: 0,
},

{
  question: "596) Quelle méthode de File retourne le chemin absolu ?",
  answers: [
    "getAbsolutePath()",
    "absolutePath()",
    "getFullPath()",
    "toAbsolute()",
  ],
  correct: 0,
},

{
  question: "597) Quelle méthode permet d'obtenir les fichiers et répertoires contenus dans un répertoire avec File ?",
  answers: [
    "listFiles()",
    "getFiles()",
    "children()",
    "contents()",
  ],
  correct: 0,
},

{
  question: "598) Quelle classe permet de créer un fichier temporaire dans java.io ?",
  answers: [
    "File",
    "TempFile",
    "TemporaryFile",
    "FileTemp",
  ],
  correct: 0,
},

{
  question: "599) Quelle méthode de File permet de créer un nouveau fichier vide ?",
  answers: [
    "createNewFile()",
    "createFile()",
    "newFile()",
    "makeFile()",
  ],
  correct: 0,
},

{
  question: "600) Quelle méthode permet de vérifier si un chemin est un chemin absolu avec Path ?",
  answers: [
    "isAbsolute()",
    "isFullPath()",
    "absolute()",
    "checkAbsolute()",
  ],
  correct: 0,
},
{
  question: "601) Quelle méthode de Path permet d'obtenir le dernier élément du chemin ?",
  answers: [
    "getFileName()",
    "getLast()",
    "lastElement()",
    "fileName()",
  ],
  correct: 0,
},

{
  question: "602) Quelle méthode de Path permet d'obtenir le chemin parent ?",
  answers: [
    "parent()",
    "getParent()",
    "getParentPath()",
    "parentPath()",
  ],
  correct: 1,
},

{
  question: "603) Quelle méthode de Path permet de combiner deux chemins ?",
  answers: [
    "merge()",
    "join()",
    "resolve()",
    "combine()",
  ],
  correct: 2,
},

{
  question: "604) Quelle méthode de Path permet de calculer le chemin relatif entre deux chemins ?",
  answers: [
    "relative()",
    "relativize()",
    "makeRelative()",
    "toRelative()",
  ],
  correct: 1,
},

{
  question: "605) Quelle méthode permet de normaliser un chemin en supprimant notamment les composants inutiles comme . et .. ?",
  answers: [
    "normalize()",
    "clean()",
    "simplify()",
    "canonicalize()",
  ],
  correct: 0,
},

{
  question: "606) Quelle méthode permet de vérifier si un Path est absolu ?",
  answers: [
    "isAbsolute()",
    "isFullPath()",
    "absolute()",
    "checkAbsolute()",
  ],
  correct: 0,
},

{
  question: "607) Quelle méthode permet de vérifier l'existence d'un fichier avec la classe Files ?",
  answers: [
    "Files.exists()",
    "Files.exist()",
    "Files.isThere()",
    "Files.present()",
  ],
  correct: 0,
},

{
  question: "608) Quelle méthode permet de vérifier si un chemin correspond à un fichier régulier ?",
  answers: [
    "Files.isRegularFile()",
    "Files.isFileOnly()",
    "Files.regularFile()",
    "Files.checkFile()",
  ],
  correct: 0,
},

{
  question: "609) Quelle méthode permet de vérifier si un chemin correspond à un répertoire ?",
  answers: [
    "Files.isDirectory()",
    "Files.isFolder()",
    "Files.directory()",
    "Files.checkDirectory()",
  ],
  correct: 0,
},

{
  question: "610) Quelle méthode permet de créer un répertoire avec Files ?",
  answers: [
    "Files.createDirectory()",
    "Files.makeDirectory()",
    "Files.newDirectory()",
    "Files.createFolder()",
  ],
  correct: 0,
},

{
  question: "611) Quelle méthode permet de créer un répertoire ainsi que les répertoires parents nécessaires ?",
  answers: [
    "Files.createDirectories()",
    "Files.createAllDirectories()",
    "Files.makeDirectories()",
    "Files.mkdirs()",
  ],
  correct: 0,
},

{
  question: "612) Quelle méthode permet de supprimer un fichier ou un répertoire vide ?",
  answers: [
    "Files.delete()",
    "Files.remove()",
    "Files.erase()",
    "Files.deleteFile()",
  ],
  correct: 0,
},

{
  question: "613) Quelle méthode permet de supprimer un fichier uniquement s'il existe ?",
  answers: [
    "Files.deleteIfExists()",
    "Files.removeIfExists()",
    "Files.tryDelete()",
    "Files.deleteOptional()",
  ],
  correct: 0,
},

{
  question: "614) Quelle méthode permet de copier un fichier avec NIO ?",
  answers: [
    "Files.copy()",
    "Files.clone()",
    "Files.duplicate()",
    "Files.copyFile()",
  ],
  correct: 0,
},

{
  question: "615) Quelle méthode permet de déplacer ou renommer un fichier avec NIO ?",
  answers: [
    "Files.move()",
    "Files.rename()",
    "Files.transfer()",
    "Files.relocate()",
  ],
  correct: 0,
},

{
  question: "616) Quelle méthode permet de lire toutes les lignes d'un fichier texte ?",
  answers: [
    "Files.readAllLines()",
    "Files.readLines()",
    "Files.getAllLines()",
    "Files.readTextLines()",
  ],
  correct: 0,
},

{
  question: "617) Quelle méthode permet de lire toutes les données d'un fichier sous forme de tableau d'octets ?",
  answers: [
    "Files.readAllBytes()",
    "Files.readBytes()",
    "Files.getBytes()",
    "Files.loadBytes()",
  ],
  correct: 0,
},

{
  question: "618) Quelle méthode permet d'écrire un tableau d'octets dans un fichier ?",
  answers: [
    "Files.write()",
    "Files.writeBytes()",
    "Files.saveBytes()",
    "Files.outputBytes()",
  ],
  correct: 0,
},

{
  question: "619) Quelle méthode permet d'obtenir la taille d'un fichier en octets ?",
  answers: [
    "Files.size()",
    "Files.length()",
    "Files.fileSize()",
    "Files.bytes()",
  ],
  correct: 0,
},

{
  question: "620) Quelle méthode permet de tester si deux chemins désignent le même fichier ?",
  answers: [
    "Files.same()",
    "Files.isSameFile()",
    "Files.equalsFile()",
    "Files.compareFiles()",
  ],
  correct: 1,
},

{
  question: "621) Quelle méthode de Map permet d'obtenir une valeur par défaut si la clé est absente ?",
  answers: [
    "getOrDefault()",
    "getDefault()",
    "defaultGet()",
    "findOrDefault()",
  ],
  correct: 0,
},

{
  question: "622) Quelle méthode de Map ajoute une valeur uniquement si la clé est absente ?",
  answers: [
    "putIfAbsent()",
    "putOnly()",
    "insertIfMissing()",
    "addIfAbsent()",
  ],
  correct: 0,
},

{
  question: "623) Quelle méthode de Map permet de fusionner une valeur avec une valeur existante ?",
  answers: [
    "merge()",
    "combine()",
    "joinValue()",
    "mergeValue()",
  ],
  correct: 0,
},

{
  question: "624) Quelle méthode de Map remplace une valeur uniquement si la clé est déjà présente ?",
  answers: [
    "replace()",
    "replaceExisting()",
    "update()",
    "change()",
  ],
  correct: 0,
},

{
  question: "625) Quelle méthode permet de remplacer toutes les valeurs d'une Map avec une fonction ?",
  answers: [
    "replaceAll()",
    "updateAll()",
    "mapAll()",
    "changeAll()",
  ],
  correct: 0,
},

{
  question: "626) Quelle méthode permet d'exécuter une action sur chaque entrée d'une Map ?",
  answers: [
    "forEach()",
    "eachEntry()",
    "iterateEntries()",
    "applyAll()",
  ],
  correct: 0,
},

{
  question: "627) Quelle interface représente un ensemble trié ?",
  answers: [
    "SortedSet",
    "OrderedSet",
    "SortedCollection",
    "TreeCollection",
  ],
  correct: 0,
},

{
  question: "628) Quelle interface représente une Map dont les clés sont triées ?",
  answers: [
    "SortedMap",
    "OrderedMap",
    "SortedHashMap",
    "TreeMapInterface",
  ],
  correct: 0,
},

{
  question: "629) Quelle méthode de SortedMap retourne la plus petite clé ?",
  answers: [
    "firstKey()",
    "lowestKey()",
    "minKey()",
    "getFirstKey()",
  ],
  correct: 0,
},

{
  question: "630) Quelle méthode de SortedMap retourne la plus grande clé ?",
  answers: [
    "lastKey()",
    "highestKey()",
    "maxKey()",
    "getLastKey()",
  ],
  correct: 0,
},

{
  question: "631) Quelle méthode de NavigableSet retourne le plus petit élément supérieur ou égal à une valeur donnée ?",
  answers: [
    "ceiling()",
    "higher()",
    "floor()",
    "next()",
  ],
  correct: 0,
},

{
  question: "632) Quelle méthode de NavigableSet retourne le plus grand élément inférieur ou égal à une valeur donnée ?",
  answers: [
    "floor()",
    "lower()",
    "ceiling()",
    "previous()",
  ],
  correct: 0,
},

{
  question: "633) Quelle méthode de NavigableSet retourne le plus grand élément strictement inférieur à une valeur donnée ?",
  answers: [
    "lower()",
    "floor()",
    "higher()",
    "previousOrEqual()",
  ],
  correct: 0,
},

{
  question: "634) Quelle méthode de NavigableSet retourne le plus petit élément strictement supérieur à une valeur donnée ?",
  answers: [
    "higher()",
    "ceiling()",
    "upper()",
    "nextGreater()",
  ],
  correct: 0,
},

{
  question: "635) Quelle interface permet de naviguer dans un ensemble trié ?",
  answers: [
    "NavigableSet",
    "NavigableCollection",
    "SortedNavigator",
    "TreeNavigator",
  ],
  correct: 0,
},

{
  question: "636) Quelle méthode permet d'obtenir une vue inversée d'un NavigableSet ?",
  answers: [
    "descendingSet()",
    "reverseSet()",
    "reversedSet()",
    "inverseSet()",
  ],
  correct: 0,
},

{
  question: "637) Quelle méthode permet d'obtenir une vue inversée des clés d'une NavigableMap ?",
  answers: [
    "descendingMap()",
    "reverseMap()",
    "reversedMap()",
    "inverseMap()",
  ],
  correct: 0,
},

{
  question: "638) Quelle classe implémente NavigableMap avec une structure d'arbre ?",
  answers: [
    "TreeMap",
    "HashMap",
    "LinkedHashMap",
    "SortedHashMap",
  ],
  correct: 0,
},

{
  question: "639) Quelle classe implémente NavigableSet avec une structure d'arbre ?",
  answers: [
    "TreeSet",
    "HashSet",
    "LinkedHashSet",
    "SortedSetImpl",
  ],
  correct: 0,
},

{
  question: "640) Quelle propriété caractérise principalement HashSet ?",
  answers: [
    "Il interdit les doublons",
    "Il trie automatiquement les éléments",
    "Il conserve toujours l'ordre d'insertion",
    "Il accepte plusieurs fois le même élément",
  ],
  correct: 0,
},

{
  question: "641) Quelle propriété caractérise principalement LinkedHashSet ?",
  answers: [
    "Il trie automatiquement les éléments",
    "Il conserve l'ordre d'insertion",
    "Il accepte les doublons",
    "Il interdit null",
  ],
  correct: 1,
},

{
  question: "642) Quelle propriété caractérise principalement TreeSet ?",
  answers: [
    "Il conserve l'ordre d'insertion",
    "Il trie les éléments",
    "Il accepte les doublons",
    "Il fonctionne uniquement avec String",
  ],
  correct: 1,
},

{
  question: "643) Quelle interface représente une collection qui peut contenir des doublons et conserve une séquence ordonnée ?",
  answers: [
    "Set",
    "List",
    "Map",
    "SortedSet",
  ],
  correct: 1,
},

{
  question: "644) Quelle méthode de List retourne l'élément situé à un index donné ?",
  answers: [
    "get()",
    "elementAt()",
    "at()",
    "read()",
  ],
  correct: 0,
},

{
  question: "645) Quelle méthode de List remplace l'élément situé à un index donné ?",
  answers: [
    "replace()",
    "set()",
    "update()",
    "change()",
  ],
  correct: 1,
},

{
  question: "646) Quelle méthode de List ajoute un élément à une position donnée ?",
  answers: [
    "insert()",
    "add(index, element)",
    "put(index, element)",
    "set(index, element)",
  ],
  correct: 1,
},

{
  question: "647) Quelle méthode de List retourne l'index de la première occurrence d'un élément ?",
  answers: [
    "indexOf()",
    "findIndex()",
    "searchIndex()",
    "firstIndex()",
  ],
  correct: 0,
},

{
  question: "648) Quelle méthode de List retourne l'index de la dernière occurrence d'un élément ?",
  answers: [
    "lastIndexOf()",
    "findLast()",
    "reverseIndexOf()",
    "lastOccurrence()",
  ],
  correct: 0,
},

{
  question: "649) Quelle méthode permet de créer une sous-liste à partir d'une List ?",
  answers: [
    "subList()",
    "sliceList()",
    "partList()",
    "getSubListOnly()",
  ],
  correct: 0,
},

{
  question: "650) Que retourne généralement List.subList(fromIndex, toIndex) ?",
  answers: [
    "Une copie indépendante obligatoire",
    "Une vue de la partie de la liste",
    "Un tableau",
    "Un Set",
  ],
  correct: 1,
},

{
  question: "651) Quelle interface représente une file FIFO ?",
  answers: [
    "Queue",
    "List",
    "Set",
    "Map",
  ],
  correct: 0,
},

{
  question: "652) Quelle structure peut être utilisée comme une pile LIFO avec push() et pop() ?",
  answers: [
    "Deque",
    "HashSet",
    "PriorityQueue",
    "TreeMap",
  ],
  correct: 0,
},

{
  question: "653) Quelle méthode de Deque ajoute un élément au début ?",
  answers: [
    "addFirst()",
    "insertStart()",
    "pushFirstElement()",
    "prependElement()",
  ],
  correct: 0,
},

{
  question: "654) Quelle méthode de Deque ajoute un élément à la fin ?",
  answers: [
    "addLast()",
    "appendLast()",
    "insertEnd()",
    "pushEnd()",
  ],
  correct: 0,
},

{
  question: "655) Quelle méthode de Deque retire le premier élément ?",
  answers: [
    "removeFirst()",
    "deleteFirst()",
    "popFirstElement()",
    "takeFirst()",
  ],
  correct: 0,
},

{
  question: "656) Quelle méthode de Deque retire le dernier élément ?",
  answers: [
    "removeLast()",
    "deleteLast()",
    "popLastElement()",
    "takeLast()",
  ],
  correct: 0,
},

{
  question: "657) Quelle méthode de Deque ajoute un élément au début et est utilisée comme opération de pile ?",
  answers: [
    "push()",
    "stackAdd()",
    "insertTop()",
    "addStack()",
  ],
  correct: 0,
},

{
  question: "658) Quelle méthode de Deque retire et retourne le premier élément ?",
  answers: [
    "pop()",
    "removeTop()",
    "takeTop()",
    "extractFirst()",
  ],
  correct: 0,
},

{
  question: "659) Quelle classe représente une ancienne implémentation de pile en Java ?",
  answers: [
    "Stack",
    "Pile",
    "LifoStack",
    "LegacyStack",
  ],
  correct: 0,
},

{
  question: "660) Quelle structure est généralement recommandée pour implémenter une pile LIFO moderne ?",
  answers: [
    "Stack",
    "ArrayDeque",
    "Vector",
    "LinkedHashSet",
  ],
  correct: 1,
},

{
  question: "661) Quelle méthode permet de convertir une collection en tableau ?",
  answers: [
    "toArray()",
    "asArray()",
    "convertArray()",
    "array()",
  ],
  correct: 0,
},

{
  question: "662) Quelle méthode permet de créer une List non modifiable à partir d'éléments donnés ?",
  answers: [
    "List.of()",
    "List.unmodifiable()",
    "List.createImmutable()",
    "List.fixed()",
  ],
  correct: 0,
},

{
  question: "663) Que se passe-t-il si on tente d'ajouter un élément à une List créée avec List.of() ?",
  answers: [
    "L'élément est ajouté",
    "Une UnsupportedOperationException est généralement levée",
    "La liste devient mutable",
    "L'élément est ignoré",
  ],
  correct: 1,
},

{
  question: "664) Quelle méthode permet de créer un Set non modifiable à partir d'éléments donnés ?",
  answers: [
    "Set.of()",
    "Set.immutable()",
    "Set.createFixed()",
    "Set.unmodifiable()",
  ],
  correct: 0,
},

{
  question: "665) Quelle méthode permet de créer une Map non modifiable à partir d'associations clé-valeur ?",
  answers: [
    "Map.of()",
    "Map.createImmutable()",
    "Map.fixed()",
    "Map.unmodifiable()",
  ],
  correct: 0,
},

{
  question: "666) Les collections créées par List.of(), Set.of() et Map.of() acceptent-elles généralement null ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement List.of()",
    "Uniquement Map.of()",
  ],
  correct: 1,
},

{
  question: "667) Quelle méthode permet de créer une copie non modifiable d'une List existante ?",
  answers: [
    "List.copyOf()",
    "List.unmodifiableCopy()",
    "List.cloneImmutable()",
    "List.freeze()",
  ],
  correct: 0,
},

{
  question: "668) Quelle classe fournit des méthodes permettant d'obtenir des collections synchronisées ?",
  answers: [
    "Collections",
    "ConcurrentCollections",
    "ThreadCollections",
    "SyncCollections",
  ],
  correct: 0,
},

{
  question: "669) Quelle méthode transforme une collection en collection synchronisée ?",
  answers: [
    "Collections.synchronizedCollection()",
    "Collections.makeSynchronized()",
    "Collections.sync()",
    "Collections.threadSafe()",
  ],
  correct: 0,
},

{
  question: "670) Quelle classe est conçue pour les opérations concurrentes sur une Map ?",
  answers: [
    "ConcurrentHashMap",
    "SynchronizedHashMap",
    "ThreadMap",
    "ConcurrentMapImpl",
  ],
  correct: 0,
},

{
  question: "671) Quelle interface est implémentée par ConcurrentHashMap ?",
  answers: [
    "ConcurrentMap",
    "ThreadSafeMap",
    "ConcurrentCollection",
    "ParallelMap",
  ],
  correct: 0,
},

{
  question: "672) Quelle méthode de ConcurrentMap permet d'ajouter une valeur si elle est absente ?",
  answers: [
    "putIfAbsent()",
    "addIfMissing()",
    "insertIfAbsent()",
    "putMissing()",
  ],
  correct: 0,
},

{
  question: "673) Quelle classe fournit une liste adaptée aux scénarios avec beaucoup de lectures et peu d'écritures concurrentes ?",
  answers: [
    "CopyOnWriteArrayList",
    "ConcurrentArrayList",
    "SafeArrayList",
    "ReadMostlyList",
  ],
  correct: 0,
},

{
  question: "674) Quelle classe fournit un ensemble basé sur Copy-On-Write ?",
  answers: [
    "CopyOnWriteArraySet",
    "ConcurrentSet",
    "CopySet",
    "SafeHashSet",
  ],
  correct: 0,
},

{
  question: "675) Lors d'une modification d'une CopyOnWriteArrayList, que se passe-t-il généralement ?",
  answers: [
    "La structure interne est modifiée directement",
    "Une nouvelle copie interne est créée",
    "Toutes les lectures sont définitivement bloquées",
    "Les lecteurs sont supprimés",
  ],
  correct: 1,
},

{
  question: "676) Quelle interface représente le résultat futur d'une tâche asynchrone ?",
  answers: [
    "Future",
    "Result",
    "TaskResult",
    "AsyncResult",
  ],
  correct: 0,
},

{
  question: "677) Quelle classe permet de construire et composer des calculs asynchrones ?",
  answers: [
    "CompletableFuture",
    "AsyncFuture",
    "ManualFuture",
    "FutureBuilder",
  ],
  correct: 0,
},

{
  question: "678) Quelle méthode crée un CompletableFuture déjà terminé avec une valeur ?",
  answers: [
    "completedFuture()",
    "completeFuture()",
    "finishedFuture()",
    "successFuture()",
  ],
  correct: 0,
},

{
  question: "679) Quelle méthode permet de transformer le résultat d'un CompletableFuture ?",
  answers: [
    "thenApply()",
    "thenMap()",
    "afterApply()",
    "mapAsync()",
  ],
  correct: 0,
},

{
  question: "680) Quelle méthode permet d'enchaîner une opération asynchrone qui retourne un autre CompletionStage ?",
  answers: [
    "thenCompose()",
    "thenChain()",
    "composeAsyncOnly()",
    "chainFuture()",
  ],
  correct: 0,
},

{
  question: "681) Quelle méthode permet de combiner les résultats de deux CompletableFuture ?",
  answers: [
    "thenCombine()",
    "combineBoth()",
    "mergeFutures()",
    "joinBoth()",
  ],
  correct: 0,
},

{
  question: "682) Quelle méthode permet d'exécuter une action lorsque le CompletableFuture se termine, avec succès ou échec ?",
  answers: [
    "whenComplete()",
    "whenFinished()",
    "onComplete()",
    "finallyAsync()",
  ],
  correct: 0,
},

{
  question: "683) Quelle méthode permet de récupérer le résultat d'un CompletableFuture en lançant une CompletionException en cas d'échec ?",
  answers: [
    "join()",
    "result()",
    "await()",
    "retrieve()",
  ],
  correct: 0,
},

{
  question: "684) Quelle méthode permet de compléter manuellement un CompletableFuture avec une valeur ?",
  answers: [
    "complete()",
    "finish()",
    "setResult()",
    "resolve()",
  ],
  correct: 0,
},

{
  question: "685) Quelle méthode de CompletableFuture permet de fournir une valeur de remplacement lorsqu'une exception survient ?",
  answers: [
    "exceptionally()",
    "onError()",
    "recover()",
    "catchException()",
  ],
  correct: 0,
},

{
  question: "686) Quelle interface représente une étape d'un calcul asynchrone ?",
  answers: [
    "CompletionStage",
    "AsyncStage",
    "FutureStage",
    "TaskStage",
  ],
  correct: 0,
},

{
  question: "687) Quelle méthode permet d'exécuter une action après la réussite de deux étapes asynchrones, sans utiliser leurs résultats ?",
  answers: [
    "runAfterBoth()",
    "thenRunBoth()",
    "executeBoth()",
    "parallelRun()",
  ],
  correct: 0,
},

{
  question: "688) Quelle méthode permet d'exécuter une action après la réussite de l'un de deux CompletableFuture ?",
  answers: [
    "runAfterEither()",
    "runWhenOne()",
    "executeEither()",
    "afterAny()",
  ],
  correct: 0,
},

{
  question: "689) Quelle méthode crée un CompletableFuture à partir d'une tâche asynchrone qui fournit une valeur ?",
  answers: [
    "supplyAsync()",
    "asyncSupply()",
    "createAsyncSupplier()",
    "runSupplierAsync()",
  ],
  correct: 0,
},

{
  question: "690) Quelle méthode crée un CompletableFuture à partir d'une tâche asynchrone sans résultat ?",
  answers: [
    "runAsync()",
    "voidAsync()",
    "executeAsync()",
    "startAsync()",
  ],
  correct: 0,
},

{
  question: "691) Quelle annotation indique qu'une API ou une méthode est obsolète ?",
  answers: [
    "@Deprecated",
    "@Obsolete",
    "@Old",
    "@Legacy",
  ],
  correct: 0,
},

{
  question: "692) Quelle annotation indique qu'une méthode redéfinit une méthode héritée ?",
  answers: [
    "@Override",
    "@Redefine",
    "@Overridden",
    "@InheritedMethod",
  ],
  correct: 0,
},

{
  question: "693) Quelle annotation permet de supprimer certains avertissements du compilateur ?",
  answers: [
    "@SuppressWarnings",
    "@IgnoreWarnings",
    "@DisableWarnings",
    "@NoWarnings",
  ],
  correct: 0,
},

{
  question: "694) Quelle annotation indique qu'une autre annotation doit être incluse dans la documentation générée ?",
  answers: [
    "@Documented",
    "@Javadoc",
    "@Documentation",
    "@Doc",
  ],
  correct: 0,
},

{
  question: "695) Quelle annotation permet de définir la durée de conservation d'une annotation ?",
  answers: [
    "@Retention",
    "@Keep",
    "@AnnotationLifetime",
    "@Persist",
  ],
  correct: 0,
},

{
  question: "696) Quelle valeur de RetentionPolicy permet à une annotation d'être disponible à l'exécution ?",
  answers: [
    "SOURCE",
    "CLASS",
    "RUNTIME",
    "EXECUTION",
  ],
  correct: 2,
},

{
  question: "697) Quelle valeur de RetentionPolicy indique que l'annotation est disponible uniquement dans le code source ?",
  answers: [
    "SOURCE",
    "CLASS",
    "RUNTIME",
    "COMPILE",
  ],
  correct: 0,
},

{
  question: "698) Quelle valeur de RetentionPolicy indique que l'annotation est conservée dans le bytecode ?",
  answers: [
    "SOURCE",
    "CLASS",
    "RUNTIME",
    "BYTECODE",
  ],
  correct: 1,
},

{
  question: "699) Quelle annotation permet de définir les endroits où une annotation peut être utilisée ?",
  answers: [
    "@Target",
    "@Location",
    "@UseAt",
    "@AnnotationTarget",
  ],
  correct: 0,
},

{
  question: "700) Quelle classe Java représente une classe ou une interface à l'exécution et permet notamment d'utiliser la réflexion ?",
  answers: [
    "Class",
    "ReflectionClass",
    "RuntimeClass",
    "TypeInfo",
  ],
  correct: 0,
},
{
  question: "701) Quelle méthode de Class permet d'obtenir le nom complet d'une classe ?",
  answers: [
    "getName()",
    "getClassName()",
    "className()",
    "name()",
  ],
  correct: 0,
},

{
  question: "702) Quelle méthode de Class permet d'obtenir le nom simple d'une classe sans son package ?",
  answers: [
    "getSimpleName()",
    "getShortName()",
    "simpleName()",
    "getClassSimpleName()",
  ],
  correct: 0,
},

{
  question: "703) Quelle méthode de Class permet d'obtenir le package d'une classe ?",
  answers: [
    "getPackage()",
    "getNamespace()",
    "packageName()",
    "getClassPackage()",
  ],
  correct: 0,
},

{
  question: "704) Quelle méthode de Class permet d'obtenir la classe parente directe ?",
  answers: [
    "getParentClass()",
    "getSuperclass()",
    "getBaseClass()",
    "superclass()",
  ],
  correct: 1,
},

{
  question: "705) Quelle méthode permet d'obtenir les interfaces directement implémentées par une classe ?",
  answers: [
    "getInterfaces()",
    "getImplementedInterfaces()",
    "interfaces()",
    "getInterfaceList()",
  ],
  correct: 0,
},

{
  question: "706) Quelle méthode de Class permet d'obtenir un constructeur public correspondant aux paramètres donnés ?",
  answers: [
    "getConstructor()",
    "findConstructor()",
    "getPublicConstructor()",
    "constructor()",
  ],
  correct: 0,
},

{
  question: "707) Quelle méthode de Class permet d'obtenir tous les constructeurs déclarés ?",
  answers: [
    "getConstructors()",
    "getDeclaredConstructors()",
    "constructors()",
    "getAllConstructors()",
  ],
  correct: 1,
},

{
  question: "708) Quelle méthode de Class permet d'obtenir une méthode publique correspondant à un nom et des paramètres ?",
  answers: [
    "getMethod()",
    "findMethod()",
    "getPublicMethod()",
    "method()",
  ],
  correct: 0,
},

{
  question: "709) Quelle méthode permet d'obtenir toutes les méthodes déclarées directement dans une classe, y compris les méthodes non publiques ?",
  answers: [
    "getMethods()",
    "getDeclaredMethods()",
    "getAllMethods()",
    "getClassMethods()",
  ],
  correct: 1,
},

{
  question: "710) Quelle méthode de Class permet d'obtenir un champ public ?",
  answers: [
    "getField()",
    "findField()",
    "getPublicField()",
    "field()",
  ],
  correct: 0,
},

{
  question: "711) Quelle méthode permet d'obtenir tous les champs déclarés directement dans une classe ?",
  answers: [
    "getFields()",
    "getDeclaredFields()",
    "getAllFields()",
    "getClassFields()",
  ],
  correct: 1,
},

{
  question: "712) Quelle classe de java.lang.reflect représente une méthode ?",
  answers: [
    "Method",
    "Function",
    "ReflectMethod",
    "ExecutableMethod",
  ],
  correct: 0,
},

{
  question: "713) Quelle classe de java.lang.reflect représente un champ ?",
  answers: [
    "Field",
    "Attribute",
    "Variable",
    "ReflectField",
  ],
  correct: 0,
},

{
  question: "714) Quelle classe de java.lang.reflect représente un constructeur ?",
  answers: [
    "Constructor",
    "ClassConstructor",
    "ReflectConstructor",
    "Builder",
  ],
  correct: 0,
},

{
  question: "715) Quelle méthode de Method permet d'invoquer une méthode par réflexion ?",
  answers: [
    "invoke()",
    "call()",
    "execute()",
    "run()",
  ],
  correct: 0,
},

{
  question: "716) Quelle méthode de Field permet de lire la valeur d'un champ par réflexion ?",
  answers: [
    "get()",
    "read()",
    "getValue()",
    "value()",
  ],
  correct: 0,
},

{
  question: "717) Quelle méthode de Field permet de modifier la valeur d'un champ par réflexion ?",
  answers: [
    "set()",
    "write()",
    "setValueOnly()",
    "update()",
  ],
  correct: 0,
},

{
  question: "718) Quelle méthode permet de créer une nouvelle instance par réflexion à partir d'un constructeur ?",
  answers: [
    "newInstance()",
    "create()",
    "instantiate()",
    "newObject()",
  ],
  correct: 0,
},

{
  question: "719) Quelle classe représente une annotation lors de l'utilisation de la réflexion ?",
  answers: [
    "Annotation",
    "ReflectAnnotation",
    "AnnotationInfo",
    "MetaAnnotation",
  ],
  correct: 0,
},

{
  question: "720) Quelle méthode permet de vérifier si une classe possède une annotation donnée ?",
  answers: [
    "isAnnotationPresent()",
    "hasAnnotation()",
    "containsAnnotation()",
    "checkAnnotation()",
  ],
  correct: 0,
},

{
  question: "721) Quelle méthode permet d'obtenir une annotation présente sur une classe ?",
  answers: [
    "getAnnotation()",
    "findAnnotation()",
    "readAnnotation()",
    "annotation()",
  ],
  correct: 0,
},

{
  question: "722) Quel mot-clé permet de déclarer une énumération en Java ?",
  answers: [
    "enum",
    "enumeration",
    "const",
    "values",
  ],
  correct: 0,
},

{
  question: "723) Une constante d'un enum est généralement créée avec quelle syntaxe ?",
  answers: [
    "MONDAY",
    "enum MONDAY",
    "const MONDAY",
    "static MONDAY",
  ],
  correct: 0,
},

{
  question: "724) Quelle méthode d'un enum retourne toutes ses constantes ?",
  answers: [
    "values()",
    "getValues()",
    "all()",
    "constants()",
  ],
  correct: 0,
},

{
  question: "725) Quelle méthode d'un enum permet d'obtenir une constante à partir de son nom ?",
  answers: [
    "valueOf()",
    "fromName()",
    "getByName()",
    "parseEnum()",
  ],
  correct: 0,
},

{
  question: "726) Quelle méthode d'un enum retourne le nom exact de la constante ?",
  answers: [
    "name()",
    "getName()",
    "value()",
    "constantName()",
  ],
  correct: 0,
},

{
  question: "727) Quelle méthode d'un enum retourne la position de la constante dans sa déclaration ?",
  answers: [
    "ordinal()",
    "index()",
    "position()",
    "rank()",
  ],
  correct: 0,
},

{
  question: "728) Peut-on définir des champs et des méthodes dans un enum Java ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement des champs",
    "Uniquement des méthodes statiques",
  ],
  correct: 0,
},

{
  question: "729) Un enum Java peut-il implémenter une interface ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement si l'interface est abstraite",
    "Uniquement avec Serializable",
  ],
  correct: 0,
},

{
  question: "730) Un enum Java peut-il étendre explicitement une autre classe ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement Object",
    "Uniquement une classe abstraite",
  ],
  correct: 1,
},

{
  question: "731) Quelle fonctionnalité permet de définir des classes de données avec une syntaxe concise ?",
  answers: [
    "record",
    "data",
    "struct",
    "tuple",
  ],
  correct: 0,
},

{
  question: "732) Quel mot-clé permet de déclarer un record ?",
  answers: [
    "record",
    "data",
    "classdata",
    "value",
  ],
  correct: 0,
},

{
  question: "733) Les composants d'un record sont-ils implicitement final ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement les String",
    "Uniquement les primitifs",
  ],
  correct: 0,
},

{
  question: "734) Comment accède-t-on à un composant d'un record nommé name ?",
  answers: [
    "name()",
    "getName()",
    "name",
    "readName()",
  ],
  correct: 0,
},

{
  question: "735) Un record peut-il implémenter une interface ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement une interface fonctionnelle",
    "Uniquement Serializable",
  ],
  correct: 0,
},

{
  question: "736) Un record peut-il étendre une classe utilisateur ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement une classe abstraite",
    "Uniquement une classe finale",
  ],
  correct: 1,
},

{
  question: "737) Quelle classe est la superclasse implicite des records ?",
  answers: [
    "Record",
    "Object",
    "DataRecord",
    "BaseRecord",
  ],
  correct: 0,
},

{
  question: "738) Quelle fonctionnalité permet de limiter les classes pouvant étendre une classe ou implémenter une interface ?",
  answers: [
    "sealed classes",
    "restricted classes",
    "limited classes",
    "closed classes",
  ],
  correct: 0,
},

{
  question: "739) Quel mot-clé permet de déclarer une classe scellée ?",
  answers: [
    "sealed",
    "restricted",
    "closed",
    "limited",
  ],
  correct: 0,
},

{
  question: "740) Quel mot-clé indique les classes autorisées à étendre une classe sealed ?",
  answers: [
    "permits",
    "allows",
    "extends",
    "authorized",
  ],
  correct: 0,
},

{
  question: "741) Quel mot-clé peut être utilisé par une sous-classe autorisée à devenir elle-même non extensible ?",
  answers: [
    "final",
    "closed",
    "sealedOnly",
    "immutable",
  ],
  correct: 0,
},

{
  question: "742) Quel mot-clé permet à une sous-classe autorisée de rester extensible sans restriction de scellement ?",
  answers: [
    "non-sealed",
    "open",
    "unsealed",
    "free",
  ],
  correct: 0,
},

{
  question: "743) Quelle fonctionnalité Java permet de regrouper plusieurs packages et contrôler leurs dépendances ?",
  answers: [
    "Java Platform Module System",
    "Package Manager",
    "Java Namespace System",
    "Class Group System",
  ],
  correct: 0,
},

{
  question: "744) Quel fichier décrit le module Java ?",
  answers: [
    "module-info.java",
    "module.java",
    "module.xml",
    "info-module.java",
  ],
  correct: 0,
},

{
  question: "745) Quel mot-clé de module indique les packages accessibles aux autres modules ?",
  answers: [
    "exports",
    "public",
    "opens",
    "exposes",
  ],
  correct: 0,
},

{
  question: "746) Quel mot-clé de module déclare une dépendance vers un autre module ?",
  answers: [
    "requires",
    "imports",
    "depends",
    "uses",
  ],
  correct: 0,
},

{
  question: "747) Quel mot-clé de module permet de déclarer un service utilisé par un module ?",
  answers: [
    "uses",
    "requires",
    "consumes",
    "service",
  ],
  correct: 0,
},

{
  question: "748) Quel mot-clé de module permet de déclarer une implémentation d'un service ?",
  answers: [
    "provides",
    "implements",
    "service",
    "supplies",
  ],
  correct: 0,
},

{
  question: "749) Quelle instruction permet d'ouvrir un package à la réflexion profonde dans le système de modules ?",
  answers: [
    "opens",
    "reflects",
    "exports",
    "exposes",
  ],
  correct: 0,
},

{
  question: "750) Quel mot-clé permet de définir un package Java ?",
  answers: [
    "package",
    "namespace",
    "module",
    "group",
  ],
  correct: 0,
},

{
  question: "751) Quelle instruction permet d'utiliser une classe d'un autre package sans écrire son nom complet ?",
  answers: [
    "import",
    "include",
    "using",
    "require",
  ],
  correct: 0,
},

{
  question: "752) Quel package est automatiquement importé dans tous les programmes Java ?",
  answers: [
    "java.lang",
    "java.util",
    "java.io",
    "java.base",
  ],
  correct: 0,
},

{
  question: "753) Quelle classe est utilisée pour représenter une URL ?",
  answers: [
    "URL",
    "URI",
    "WebURL",
    "HttpURL",
  ],
  correct: 0,
},

{
  question: "754) Quelle classe représente une ressource identifiée par un URI ?",
  answers: [
    "URI",
    "URL",
    "Resource",
    "Identifier",
  ],
  correct: 0,
},

{
  question: "755) Quelle classe permet d'envoyer des requêtes HTTP modernes en Java ?",
  answers: [
    "HttpClient",
    "HttpConnection",
    "WebClient",
    "HttpRequestClient",
  ],
  correct: 0,
},

{
  question: "756) Quelle classe représente une requête HTTP avec l'API java.net.http ?",
  answers: [
    "HttpRequest",
    "HttpQuery",
    "WebRequest",
    "HttpCall",
  ],
  correct: 0,
},

{
  question: "757) Quelle classe représente une réponse HTTP avec l'API java.net.http ?",
  answers: [
    "HttpResponse",
    "HttpResult",
    "WebResponse",
    "HttpReply",
  ],
  correct: 0,
},

{
  question: "758) Quelle méthode de HttpClient permet d'envoyer une requête de manière synchrone ?",
  answers: [
    "send()",
    "execute()",
    "request()",
    "perform()",
  ],
  correct: 0,
},

{
  question: "759) Quelle méthode de HttpClient permet d'envoyer une requête de manière asynchrone ?",
  answers: [
    "sendAsync()",
    "asyncSend()",
    "sendLater()",
    "executeAsync()",
  ],
  correct: 0,
},

{
  question: "760) Quelle méthode de HttpRequest.Builder permet de définir l'URI ?",
  answers: [
    "uri()",
    "url()",
    "address()",
    "endpoint()",
  ],
  correct: 0,
},

{
  question: "761) Quelle méthode de HttpRequest.Builder permet de créer une requête GET ?",
  answers: [
    "GET()",
    "get()",
    "methodGet()",
    "requestGet()",
  ],
  correct: 0,
},

{
  question: "762) Quelle méthode de HttpRequest.Builder permet de créer une requête POST avec un BodyPublisher ?",
  answers: [
    "POST()",
    "post()",
    "sendPost()",
    "bodyPost()",
  ],
  correct: 0,
},

{
  question: "763) Quelle classe permet de représenter le contenu envoyé dans le corps d'une requête HTTP ?",
  answers: [
    "HttpRequest.BodyPublisher",
    "HttpRequest.Body",
    "HttpBody",
    "BodyContent",
  ],
  correct: 0,
},

{
  question: "764) Quelle classe permet de créer un BodyHandler pour obtenir la réponse sous forme de String ?",
  answers: [
    "HttpResponse.BodyHandlers",
    "HttpResponse.StringHandler",
    "HttpClient.StringBody",
    "BodyHandlers.String",
  ],
  correct: 0,
},

{
  question: "765) Quelle méthode de HttpResponse permet d'obtenir le code de statut HTTP ?",
  answers: [
    "statusCode()",
    "getStatus()",
    "status()",
    "code()",
  ],
  correct: 0,
},

{
  question: "766) Quelle méthode de HttpResponse permet d'obtenir le corps de la réponse ?",
  answers: [
    "body()",
    "getBody()",
    "content()",
    "responseBody()",
  ],
  correct: 0,
},

{
  question: "767) Quel code HTTP indique généralement qu'une ressource a été trouvée avec succès ?",
  answers: [
    "200",
    "201",
    "301",
    "404",
  ],
  correct: 0,
},

{
  question: "768) Quel code HTTP indique généralement qu'une ressource a été créée ?",
  answers: [
    "200",
    "201",
    "204",
    "302",
  ],
  correct: 1,
},

{
  question: "769) Quel code HTTP indique généralement qu'une ressource est introuvable ?",
  answers: [
    "400",
    "401",
    "403",
    "404",
  ],
  correct: 3,
},

{
  question: "770) Quel code HTTP indique généralement une erreur interne du serveur ?",
  answers: [
    "400",
    "404",
    "500",
    "503",
  ],
  correct: 2,
},

{
  question: "771) Quelle classe Java permet de travailler avec des connexions TCP côté serveur ?",
  answers: [
    "ServerSocket",
    "SocketServer",
    "TCPServer",
    "ServerConnection",
  ],
  correct: 0,
},

{
  question: "772) Quelle classe Java représente principalement une connexion réseau TCP côté client ?",
  answers: [
    "Socket",
    "ClientSocket",
    "TCPSocket",
    "NetworkSocket",
  ],
  correct: 0,
},

{
  question: "773) Quelle méthode de ServerSocket attend une connexion entrante ?",
  answers: [
    "accept()",
    "listen()",
    "waitConnection()",
    "receive()",
  ],
  correct: 0,
},

{
  question: "774) Quelle méthode de Socket permet d'obtenir le flux d'entrée ?",
  answers: [
    "getInputStream()",
    "inputStream()",
    "readStream()",
    "receiveStream()",
  ],
  correct: 0,
},

{
  question: "775) Quelle méthode de Socket permet d'obtenir le flux de sortie ?",
  answers: [
    "getOutputStream()",
    "outputStream()",
    "writeStream()",
    "sendStream()",
  ],
  correct: 0,
},

{
  question: "776) Quel protocole est orienté connexion et garantit généralement la livraison ordonnée des données ?",
  answers: [
    "TCP",
    "UDP",
    "ICMP",
    "ARP",
  ],
  correct: 0,
},

{
  question: "777) Quel protocole est généralement sans connexion et ne garantit pas la livraison des paquets ?",
  answers: [
    "TCP",
    "UDP",
    "HTTP",
    "FTP",
  ],
  correct: 1,
},

{
  question: "778) Quelle classe Java permet d'utiliser UDP ?",
  answers: [
    "DatagramSocket",
    "UDPSocket",
    "PacketSocket",
    "DatagramClient",
  ],
  correct: 0,
},

{
  question: "779) Quelle classe représente un paquet UDP en Java ?",
  answers: [
    "DatagramPacket",
    "UDPPacket",
    "Packet",
    "NetworkPacket",
  ],
  correct: 0,
},

{
  question: "780) Quelle méthode de DatagramSocket permet de recevoir un datagramme ?",
  answers: [
    "receive()",
    "accept()",
    "readPacket()",
    "getPacket()",
  ],
  correct: 0,
},

{
  question: "781) Quelle méthode de DatagramSocket permet d'envoyer un datagramme ?",
  answers: [
    "send()",
    "transmit()",
    "writePacket()",
    "post()",
  ],
  correct: 0,
},

{
  question: "782) Quelle API Java est utilisée pour accéder aux bases de données relationnelles ?",
  answers: [
    "JDBC",
    "JDB",
    "JDA",
    "JSQL",
  ],
  correct: 0,
},

{
  question: "783) Que signifie JDBC ?",
  answers: [
    "Java Database Connectivity",
    "Java Data Base Control",
    "Java Database Compiler",
    "Java Data Connection",
  ],
  correct: 0,
},

{
  question: "784) Quelle classe permet généralement d'établir une connexion JDBC ?",
  answers: [
    "DriverManager",
    "ConnectionManager",
    "DatabaseManager",
    "JDBCManager",
  ],
  correct: 0,
},

{
  question: "785) Quelle interface représente une connexion à une base de données JDBC ?",
  answers: [
    "Connection",
    "DatabaseConnection",
    "DBConnection",
    "JdbcConnection",
  ],
  correct: 0,
},

{
  question: "786) Quelle méthode permet d'obtenir une connexion JDBC via DriverManager ?",
  answers: [
    "getConnection()",
    "connect()",
    "openConnection()",
    "createConnection()",
  ],
  correct: 0,
},

{
  question: "787) Quelle interface permet d'exécuter une requête SQL simple ?",
  answers: [
    "Statement",
    "SQLStatement",
    "Query",
    "SQLExecutor",
  ],
  correct: 0,
},

{
  question: "788) Quelle interface permet d'exécuter une requête SQL paramétrée ?",
  answers: [
    "PreparedStatement",
    "ParameterizedStatement",
    "SQLPrepared",
    "ParamStatement",
  ],
  correct: 0,
},

{
  question: "789) Quelle méthode de PreparedStatement permet de définir un paramètre entier ?",
  answers: [
    "setInt()",
    "setInteger()",
    "putInt()",
    "parameterInt()",
  ],
  correct: 0,
},

{
  question: "790) Quelle méthode de PreparedStatement permet de définir un paramètre String ?",
  answers: [
    "setString()",
    "setText()",
    "putString()",
    "parameterString()",
  ],
  correct: 0,
},

{
  question: "791) Quelle méthode de Statement permet d'exécuter une requête SELECT ?",
  answers: [
    "executeQuery()",
    "executeSelect()",
    "query()",
    "select()",
  ],
  correct: 0,
},

{
  question: "792) Quelle méthode de Statement permet d'exécuter généralement INSERT, UPDATE ou DELETE ?",
  answers: [
    "executeUpdate()",
    "executeModification()",
    "executeChange()",
    "updateQuery()",
  ],
  correct: 0,
},

{
  question: "793) Quelle interface représente les résultats d'une requête SQL JDBC ?",
  answers: [
    "ResultSet",
    "QueryResult",
    "SQLResult",
    "ResultTable",
  ],
  correct: 0,
},

{
  question: "794) Quelle méthode de ResultSet permet de passer à la ligne suivante ?",
  answers: [
    "next()",
    "forward()",
    "nextRow()",
    "moveNext()",
  ],
  correct: 0,
},

{
  question: "795) Quelle méthode de ResultSet permet de lire une colonne String ?",
  answers: [
    "getString()",
    "readString()",
    "getText()",
    "stringValue()",
  ],
  correct: 0,
},

{
  question: "796) Quelle méthode de Connection permet de valider une transaction JDBC ?",
  answers: [
    "commit()",
    "save()",
    "confirm()",
    "apply()",
  ],
  correct: 0,
},

{
  question: "797) Quelle méthode de Connection permet d'annuler les modifications d'une transaction ?",
  answers: [
    "rollback()",
    "cancel()",
    "undo()",
    "revertTransaction()",
  ],
  correct: 0,
},

{
  question: "798) Quelle méthode de Connection permet de désactiver le commit automatique ?",
  answers: [
    "setAutoCommit(false)",
    "disableAutoCommit()",
    "autoCommit(false)",
    "setCommitMode(false)",
  ],
  correct: 0,
},

{
  question: "799) Quelle interface JDBC représente une procédure stockée pouvant être appelée avec des paramètres ?",
  answers: [
    "CallableStatement",
    "StoredProcedureStatement",
    "ProcedureStatement",
    "CallStatement",
  ],
  correct: 0,
},

{
  question: "800) Quelle interface JDBC représente une ressource qui doit généralement être fermée après utilisation ?",
  answers: [
    "AutoCloseable",
    "ClosableResource",
    "CloseableResource",
    "JdbcResource",
  ],
  correct: 0,
},
{
  question: "801) Quelle classe JDBC permet de représenter une erreur liée à l'accès à une base de données ?",
  answers: [
    "SQLException",
    "DatabaseException",
    "JDBCException",
    "SQLAccessException",
  ],
  correct: 0,
},

{
  question: "802) Quelle méthode de Connection permet de créer un Statement ?",
  answers: [
    "createStatement()",
    "newStatement()",
    "getStatement()",
    "statement()",
  ],
  correct: 0,
},

{
  question: "803) Quelle méthode de Connection permet de créer un PreparedStatement ?",
  answers: [
    "prepareStatement()",
    "createPreparedStatement()",
    "newPreparedStatement()",
    "preparedStatement()",
  ],
  correct: 0,
},

{
  question: "804) Quel caractère est utilisé comme paramètre dans une requête PreparedStatement ?",
  answers: [
    "?",
    ":",
    "#",
    "$",
  ],
  correct: 0,
},

{
  question: "805) Quel est l'un des principaux avantages de PreparedStatement ?",
  answers: [
    "Réduire notamment les risques d'injection SQL",
    "Supprimer toute connexion à la base",
    "Remplacer automatiquement SQL",
    "Éviter toutes les transactions",
  ],
  correct: 0,
},

{
  question: "806) Quelle méthode de ResultSet permet de lire une colonne entière ?",
  answers: [
    "getInt()",
    "readInt()",
    "getInteger()",
    "readInteger()",
  ],
  correct: 0,
},

{
  question: "807) Quelle méthode de ResultSet permet de vérifier si la dernière valeur lue était SQL NULL ?",
  answers: [
    "wasNull()",
    "isNull()",
    "lastWasNull()",
    "checkNull()",
  ],
  correct: 0,
},

{
  question: "808) Quelle méthode permet de fermer explicitement un ResultSet ?",
  answers: [
    "close()",
    "shutdown()",
    "dispose()",
    "terminate()",
  ],
  correct: 0,
},

{
  question: "809) Quelle interface JDBC permet de représenter les métadonnées d'une base de données ?",
  answers: [
    "DatabaseMetaData",
    "DatabaseInfo",
    "DBMetadata",
    "SQLMetadata",
  ],
  correct: 0,
},

{
  question: "810) Quelle interface JDBC permet d'obtenir des informations sur les colonnes d'un ResultSet ?",
  answers: [
    "ResultSetMetaData",
    "ResultMetadata",
    "ColumnMetaData",
    "ResultInfo",
  ],
  correct: 0,
},

{
  question: "811) Quel mécanisme JDBC permet de regrouper plusieurs opérations SQL avant leur exécution ?",
  answers: [
    "Batch processing",
    "SQL grouping",
    "Query merge",
    "Statement packing",
  ],
  correct: 0,
},

{
  question: "812) Quelle méthode permet d'ajouter une commande SQL à un batch avec Statement ?",
  answers: [
    "addBatch()",
    "appendBatch()",
    "addQuery()",
    "batchAdd()",
  ],
  correct: 0,
},

{
  question: "813) Quelle méthode exécute les commandes d'un batch JDBC ?",
  answers: [
    "executeBatch()",
    "runBatch()",
    "executeAll()",
    "runCommands()",
  ],
  correct: 0,
},

{
  question: "814) Quel type Java est généralement utilisé pour représenter une date sans heure dans java.time ?",
  answers: [
    "LocalDate",
    "DateOnly",
    "SimpleDate",
    "CalendarDate",
  ],
  correct: 0,
},

{
  question: "815) Quel type Java représente une date avec une heure mais sans fuseau horaire ?",
  answers: [
    "LocalDateTime",
    "DateTime",
    "LocalTimeDate",
    "SimpleDateTime",
  ],
  correct: 0,
},

{
  question: "816) Quel type Java représente uniquement une heure sans date ni fuseau horaire ?",
  answers: [
    "LocalTime",
    "TimeOnly",
    "ClockTime",
    "SimpleTime",
  ],
  correct: 0,
},

{
  question: "817) Quel type représente une date et une heure avec un décalage par rapport à UTC ?",
  answers: [
    "OffsetDateTime",
    "LocalDateTime",
    "DateOffset",
    "ZonedTime",
  ],
  correct: 0,
},

{
  question: "818) Quel type représente une date et une heure avec un fuseau horaire ?",
  answers: [
    "ZonedDateTime",
    "ZoneDateTime",
    "TimeZoneDate",
    "LocalZonedDate",
  ],
  correct: 0,
},

{
  question: "819) Quelle classe représente un fuseau horaire dans java.time ?",
  answers: [
    "ZoneId",
    "TimeZoneId",
    "Zone",
    "TimeZoneInfo",
  ],
  correct: 0,
},

{
  question: "820) Quelle classe représente un décalage fixe par rapport à UTC ?",
  answers: [
    "ZoneOffset",
    "OffsetZone",
    "UTCOffset",
    "TimeOffset",
  ],
  correct: 0,
},

{
  question: "821) Quelle classe permet de représenter une durée basée sur des secondes et nanosecondes ?",
  answers: [
    "Duration",
    "Period",
    "TimeSpan",
    "ElapsedTime",
  ],
  correct: 0,
},

{
  question: "822) Quelle classe représente une période exprimée en années, mois et jours ?",
  answers: [
    "Period",
    "Duration",
    "CalendarPeriod",
    "DatePeriod",
  ],
  correct: 0,
},

{
  question: "823) Quelle méthode de LocalDate permet d'ajouter des jours ?",
  answers: [
    "plusDays()",
    "addDays()",
    "increaseDays()",
    "withDaysAdded()",
  ],
  correct: 0,
},

{
  question: "824) Quelle méthode de LocalDate permet de soustraire des mois ?",
  answers: [
    "minusMonths()",
    "subtractMonths()",
    "removeMonths()",
    "decreaseMonths()",
  ],
  correct: 0,
},

{
  question: "825) Quelle méthode permet d'obtenir l'année d'un LocalDate ?",
  answers: [
    "getYear()",
    "year()",
    "getDateYear()",
    "readYear()",
  ],
  correct: 0,
},

{
  question: "826) Quelle méthode permet d'obtenir le mois sous forme de numéro dans LocalDate ?",
  answers: [
    "getMonthValue()",
    "getMonthNumber()",
    "monthValue()",
    "getNumericMonth()",
  ],
  correct: 0,
},

{
  question: "827) Quelle méthode permet d'obtenir le jour du mois d'un LocalDate ?",
  answers: [
    "getDayOfMonth()",
    "getDay()",
    "dayOfMonth()",
    "getMonthDay()",
  ],
  correct: 0,
},

{
  question: "828) Quelle méthode permet de comparer deux dates et de vérifier si la première est avant la seconde ?",
  answers: [
    "isBefore()",
    "before()",
    "isEarlier()",
    "compareBefore()",
  ],
  correct: 0,
},

{
  question: "829) Quelle méthode permet de vérifier si une date est après une autre ?",
  answers: [
    "isAfter()",
    "after()",
    "isLater()",
    "compareAfter()",
  ],
  correct: 0,
},

{
  question: "830) Quelle méthode permet de créer un LocalDate à partir de l'année, du mois et du jour ?",
  answers: [
    "LocalDate.of()",
    "LocalDate.create()",
    "LocalDate.newDate()",
    "LocalDate.build()",
  ],
  correct: 0,
},

{
  question: "831) Quelle méthode permet de convertir une chaîne ISO en LocalDate ?",
  answers: [
    "LocalDate.parse()",
    "LocalDate.fromString()",
    "LocalDate.valueOf()",
    "LocalDate.read()",
  ],
  correct: 0,
},

{
  question: "832) Quelle classe permet de formater et parser les dates modernes Java ?",
  answers: [
    "DateTimeFormatter",
    "DateFormatter",
    "TimeFormatter",
    "JavaDateFormatter",
  ],
  correct: 0,
},

{
  question: "833) Quelle méthode de DateTimeFormatter permet de formater une date ?",
  answers: [
    "format()",
    "formatDate()",
    "toFormattedString()",
    "writeDate()",
  ],
  correct: 0,
},

{
  question: "834) Quelle méthode permet de créer un DateTimeFormatter à partir d'un motif ?",
  answers: [
    "ofPattern()",
    "createPattern()",
    "fromPattern()",
    "pattern()",
  ],
  correct: 0,
},

{
  question: "835) Quel package contient l'API moderne de date et heure introduite avec Java 8 ?",
  answers: [
    "java.time",
    "java.date",
    "java.datetime",
    "java.calendar",
  ],
  correct: 0,
},

{
  question: "836) Quelle ancienne classe Java représente principalement une date et une heure ?",
  answers: [
    "Date",
    "OldDate",
    "CalendarDate",
    "JavaDate",
  ],
  correct: 0,
},

{
  question: "837) Quelle ancienne classe permet de manipuler des calendriers et des dates ?",
  answers: [
    "Calendar",
    "DateCalendar",
    "TimeCalendar",
    "GregorianTime",
  ],
  correct: 0,
},

{
  question: "838) Quelle classe est une implémentation concrète de Calendar utilisée pour le calendrier grégorien ?",
  answers: [
    "GregorianCalendar",
    "GregorianDate",
    "GregorianCalendarDate",
    "StandardCalendar",
  ],
  correct: 0,
},

{
  question: "839) Quel avantage important présente l'API java.time par rapport à plusieurs anciennes classes de date ?",
  answers: [
    "Elle privilégie des types immuables",
    "Elle interdit toute comparaison",
    "Elle fonctionne uniquement avec UTC",
    "Elle supprime les fuseaux horaires",
  ],
  correct: 0,
},

{
  question: "840) Quelle classe permet de représenter un instant sur la timeline UTC ?",
  answers: [
    "Instant",
    "Timeline",
    "UTCInstantTime",
    "Moment",
  ],
  correct: 0,
},

{
  question: "841) Quelle classe permet de manipuler des expressions régulières ?",
  answers: [
    "Pattern",
    "Regex",
    "RegularExpression",
    "MatcherPattern",
  ],
  correct: 0,
},

{
  question: "842) Quelle classe permet de rechercher les correspondances d'une expression régulière ?",
  answers: [
    "Matcher",
    "RegexMatcher",
    "PatternMatcher",
    "SearchPattern",
  ],
  correct: 0,
},

{
  question: "843) Quelle méthode de Pattern permet de créer un Matcher pour une chaîne donnée ?",
  answers: [
    "matcher()",
    "match()",
    "createMatcher()",
    "findMatcher()",
  ],
  correct: 0,
},

{
  question: "844) Quelle méthode de Matcher vérifie si toute la chaîne correspond au motif ?",
  answers: [
    "matches()",
    "matchAll()",
    "fullMatch()",
    "isMatch()",
  ],
  correct: 0,
},

{
  question: "845) Quelle méthode de Matcher recherche la prochaine correspondance dans la chaîne ?",
  answers: [
    "find()",
    "search()",
    "nextMatch()",
    "locate()",
  ],
  correct: 0,
},

{
  question: "846) Quelle méthode de Matcher permet d'obtenir la sous-chaîne correspondant à la dernière correspondance ?",
  answers: [
    "group()",
    "match()",
    "value()",
    "matchedText()",
  ],
  correct: 0,
},

{
  question: "847) Quel symbole regex représente généralement n'importe quel caractère sauf un saut de ligne selon les options utilisées ?",
  answers: [
    ".",
    "*",
    "?",
    "#",
  ],
  correct: 0,
},

{
  question: "848) Quel quantificateur regex signifie zéro ou plusieurs occurrences ?",
  answers: [
    "*",
    "+",
    "?",
    "{1}",
  ],
  correct: 0,
},

{
  question: "849) Quel quantificateur regex signifie une ou plusieurs occurrences ?",
  answers: [
    "+",
    "*",
    "?",
    "#",
  ],
  correct: 0,
},

{
  question: "850) Quel quantificateur regex signifie zéro ou une occurrence ?",
  answers: [
    "?",
    "*",
    "+",
    "{0}",
  ],
  correct: 0,
},

{
  question: "851) Quelle classe permet de manipuler des fichiers ZIP en Java ?",
  answers: [
    "ZipFile",
    "ZipArchive",
    "JavaZip",
    "CompressedFile",
  ],
  correct: 0,
},

{
  question: "852) Quelle classe permet de créer des entrées dans une archive ZIP ?",
  answers: [
    "ZipEntry",
    "ZipItem",
    "ArchiveEntry",
    "ZipRecord",
  ],
  correct: 0,
},

{
  question: "853) Quelle classe permet d'écrire des données dans une archive ZIP ?",
  answers: [
    "ZipOutputStream",
    "ZipWriter",
    "ArchiveOutputStream",
    "ZipStreamWriter",
  ],
  correct: 0,
},

{
  question: "854) Quelle classe permet de lire les données compressées d'une archive ZIP ?",
  answers: [
    "ZipInputStream",
    "ZipReader",
    "ArchiveInputStream",
    "ZipStreamReader",
  ],
  correct: 0,
},

{
  question: "855) Quel package contient les classes principales de compression ZIP ?",
  answers: [
    "java.util.zip",
    "java.zip",
    "java.io.zip",
    "java.compress",
  ],
  correct: 0,
},

{
  question: "856) Quelle interface est utilisée pour la sérialisation Java standard ?",
  answers: [
    "Serializable",
    "Serial",
    "JavaSerializable",
    "Persistable",
  ],
  correct: 0,
},

{
  question: "857) Quelle classe permet d'écrire un objet sérialisable dans un flux ?",
  answers: [
    "ObjectOutputStream",
    "ObjectWriter",
    "SerializationOutputStream",
    "ObjectSerializer",
  ],
  correct: 0,
},

{
  question: "858) Quelle classe permet de lire un objet sérialisé depuis un flux ?",
  answers: [
    "ObjectInputStream",
    "ObjectReader",
    "SerializationInputStream",
    "ObjectDeserializer",
  ],
  correct: 0,
},

{
  question: "859) Quelle exception peut être levée lors de la désérialisation d'un objet incompatible ou invalide ?",
  answers: [
    "InvalidClassException",
    "DeserializeException",
    "ObjectException",
    "SerializationError",
  ],
  correct: 0,
},

{
  question: "860) Quel mot-clé permet d'exclure un champ de la sérialisation Java standard ?",
  answers: [
    "transient",
    "volatile",
    "staticOnly",
    "exclude",
  ],
  correct: 0,
},

{
  question: "861) Un champ static est-il sérialisé comme état d'instance par la sérialisation Java standard ?",
  answers: [
    "Non",
    "Oui",
    "Uniquement s'il est public",
    "Uniquement s'il est final",
  ],
  correct: 0,
},

{
  question: "862) Quel identifiant est utilisé pour vérifier la compatibilité entre versions d'une classe sérialisable ?",
  answers: [
    "serialVersionUID",
    "serializationUID",
    "classVersionUID",
    "serialId",
  ],
  correct: 0,
},

{
  question: "863) Quelle interface permet de personnaliser la logique de comparaison naturelle d'un objet ?",
  answers: [
    "Comparable",
    "Comparator",
    "Sortable",
    "Compareable",
  ],
  correct: 0,
},

{
  question: "864) Quelle interface permet de définir un comparateur externe à la classe comparée ?",
  answers: [
    "Comparator",
    "Comparable",
    "Comparer",
    "SortComparator",
  ],
  correct: 0,
},

{
  question: "865) Quelle méthode doit être implémentée par Comparable ?",
  answers: [
    "compareTo()",
    "compare()",
    "compareWith()",
    "order()",
  ],
  correct: 0,
},

{
  question: "866) Quelle méthode doit être implémentée par Comparator ?",
  answers: [
    "compare()",
    "compareTo()",
    "compareObjects()",
    "sortCompare()",
  ],
  correct: 0,
},

{
  question: "867) Que retourne généralement compareTo() si deux objets sont considérés équivalents pour l'ordre ?",
  answers: [
    "0",
    "1",
    "-1",
    "null",
  ],
  correct: 0,
},

{
  question: "868) Que signifie généralement une valeur négative retournée par compareTo() ?",
  answers: [
    "L'objet courant est inférieur à l'objet comparé",
    "Les objets sont égaux",
    "L'objet courant est supérieur",
    "La comparaison a échoué",
  ],
  correct: 0,
},

{
  question: "869) Quelle classe fournit des méthodes utilitaires pour trier des tableaux primitifs ?",
  answers: [
    "Arrays",
    "ArrayUtils",
    "Collections",
    "ArrayTools",
  ],
  correct: 0,
},

{
  question: "870) Quelle méthode de Arrays permet de trier un tableau ?",
  answers: [
    "sort()",
    "order()",
    "arrange()",
    "sortArray()",
  ],
  correct: 0,
},

{
  question: "871) Quelle méthode de Arrays permet de rechercher efficacement une valeur dans un tableau trié ?",
  answers: [
    "binarySearch()",
    "searchBinary()",
    "findSorted()",
    "binaryFind()",
  ],
  correct: 0,
},

{
  question: "872) Que faut-il généralement faire avant d'utiliser Arrays.binarySearch() pour obtenir un résultat fiable ?",
  answers: [
    "Trier le tableau",
    "Convertir le tableau en String",
    "Copier le tableau",
    "Le rendre final",
  ],
  correct: 0,
},

{
  question: "873) Quelle méthode de Arrays compare deux tableaux par leur contenu ?",
  answers: [
    "equals()",
    "compareContent()",
    "sameArray()",
    "contentEquals()",
  ],
  correct: 0,
},

{
  question: "874) Quelle méthode de Arrays permet de remplir un tableau avec une même valeur ?",
  answers: [
    "fill()",
    "populate()",
    "setAllSame()",
    "initialize()",
  ],
  correct: 0,
},

{
  question: "875) Quelle classe fournit des méthodes utilitaires générales pour les collections ?",
  answers: [
    "Collections",
    "CollectionUtils",
    "CollectionTools",
    "ListUtils",
  ],
  correct: 0,
},

{
  question: "876) Quelle méthode de Collections trie une List selon son ordre naturel ?",
  answers: [
    "sort()",
    "order()",
    "sortNatural()",
    "arrange()",
  ],
  correct: 0,
},

{
  question: "877) Quelle méthode de Collections permet de mélanger aléatoirement une liste ?",
  answers: [
    "shuffle()",
    "randomize()",
    "mix()",
    "scrambleList()",
  ],
  correct: 0,
},

{
  question: "878) Quelle méthode de Collections inverse l'ordre d'une liste ?",
  answers: [
    "reverse()",
    "invert()",
    "flip()",
    "reverseList()",
  ],
  correct: 0,
},

{
  question: "879) Quelle méthode de Collections permet de rechercher la fréquence d'un élément dans une collection ?",
  answers: [
    "frequency()",
    "count()",
    "occurrences()",
    "countElement()",
  ],
  correct: 0,
},

{
  question: "880) Quelle méthode de Collections permet de trouver l'élément maximal selon l'ordre naturel ?",
  answers: [
    "max()",
    "maximum()",
    "largest()",
    "findMax()",
  ],
  correct: 0,
},

{
  question: "881) Quelle méthode de Collections permet de trouver l'élément minimal selon l'ordre naturel ?",
  answers: [
    "min()",
    "minimum()",
    "smallest()",
    "findMin()",
  ],
  correct: 0,
},

{
  question: "882) Quelle méthode de Collections recherche une sous-liste dans une liste ?",
  answers: [
    "indexOfSubList()",
    "findSubList()",
    "searchSubList()",
    "subListIndex()",
  ],
  correct: 0,
},

{
  question: "883) Quelle interface fonctionnelle accepte un argument et ne retourne aucune valeur ?",
  answers: [
    "Consumer",
    "Supplier",
    "Function",
    "Predicate",
  ],
  correct: 0,
},

{
  question: "884) Quelle interface fonctionnelle ne prend aucun argument et retourne une valeur ?",
  answers: [
    "Supplier",
    "Consumer",
    "Function",
    "Predicate",
  ],
  correct: 0,
},

{
  question: "885) Quelle interface fonctionnelle transforme un argument de type T en résultat de type R ?",
  answers: [
    "Function<T, R>",
    "Consumer<T, R>",
    "Supplier<T, R>",
    "Predicate<T, R>",
  ],
  correct: 0,
},

{
  question: "886) Quelle interface fonctionnelle retourne un boolean à partir d'un argument ?",
  answers: [
    "Predicate",
    "BooleanFunction",
    "Condition",
    "Tester",
  ],
  correct: 0,
},

{
  question: "887) Quelle méthode d'un Predicate combine deux prédicats avec un ET logique ?",
  answers: [
    "and()",
    "combineAnd()",
    "all()",
    "both()",
  ],
  correct: 0,
},

{
  question: "888) Quelle méthode d'un Predicate combine deux prédicats avec un OU logique ?",
  answers: [
    "or()",
    "combineOr()",
    "either()",
    "any()",
  ],
  correct: 0,
},

{
  question: "889) Quelle méthode d'un Predicate inverse son résultat logique ?",
  answers: [
    "negate()",
    "not()",
    "reverse()",
    "invertPredicate()",
  ],
  correct: 0,
},

{
  question: "890) Quelle interface fonctionnelle représente une fonction prenant deux arguments et retournant un résultat ?",
  answers: [
    "BiFunction",
    "TwoFunction",
    "DoubleFunction",
    "PairFunction",
  ],
  correct: 0,
},

{
  question: "891) Quelle interface fonctionnelle représente une opération acceptant deux arguments sans résultat ?",
  answers: [
    "BiConsumer",
    "TwoConsumer",
    "DoubleConsumer",
    "PairConsumer",
  ],
  correct: 0,
},

{
  question: "892) Quelle interface fonctionnelle représente un prédicat prenant deux arguments ?",
  answers: [
    "BiPredicate",
    "TwoPredicate",
    "DoublePredicate",
    "PairPredicate",
  ],
  correct: 0,
},

{
  question: "893) Quelle interface fonctionnelle représente une fonction sans argument retournant une valeur primitive int ?",
  answers: [
    "IntSupplier",
    "IntFunction",
    "SupplierInt",
    "IntegerSupplier",
  ],
  correct: 0,
},

{
  question: "894) Quelle interface fonctionnelle accepte un int sans retourner de résultat ?",
  answers: [
    "IntConsumer",
    "IntegerConsumer",
    "ConsumerInt",
    "IntAction",
  ],
  correct: 0,
},

{
  question: "895) Quelle interface fonctionnelle transforme un int en un résultat de type R ?",
  answers: [
    "IntFunction<R>",
    "FunctionInt<R>",
    "IntToObject<R>",
    "IntegerFunction<R>",
  ],
  correct: 0,
},

{
  question: "896) Quelle méthode de Stream transforme chaque élément en un autre élément ?",
  answers: [
    "map()",
    "transform()",
    "convert()",
    "change()",
  ],
  correct: 0,
},

{
  question: "897) Quelle méthode de Stream conserve uniquement les éléments satisfaisant une condition ?",
  answers: [
    "filter()",
    "select()",
    "where()",
    "keep()",
  ],
  correct: 0,
},

{
  question: "898) Quelle méthode de Stream permet de trier les éléments ?",
  answers: [
    "sorted()",
    "sort()",
    "order()",
    "arrange()",
  ],
  correct: 0,
},

{
  question: "899) Quelle méthode de Stream permet de supprimer les doublons selon equals() ?",
  answers: [
    "distinct()",
    "unique()",
    "removeDuplicates()",
    "deduplicate()",
  ],
  correct: 0,
},

{
  question: "900) Quelle méthode terminale de Stream retourne le nombre d'éléments ?",
  answers: [
    "count()",
    "size()",
    "length()",
    "number()",
  ],
  correct: 0,
},
{
  question: "901) Quelle méthode terminale de Stream permet d'appliquer une action à chaque élément ?",
  answers: [
    "forEach()",
    "each()",
    "applyEach()",
    "iterateAll()",
  ],
  correct: 0,
},

{
  question: "902) Quelle méthode terminale de Stream retourne un Optional contenant le premier élément ?",
  answers: [
    "findFirst()",
    "first()",
    "getFirst()",
    "findOne()",
  ],
  correct: 0,
},

{
  question: "903) Quelle méthode terminale de Stream retourne un Optional contenant un élément quelconque ?",
  answers: [
    "findAny()",
    "any()",
    "getAny()",
    "randomElement()",
  ],
  correct: 0,
},

{
  question: "904) Quelle méthode terminale vérifie si tous les éléments satisfont un prédicat ?",
  answers: [
    "allMatch()",
    "everyMatch()",
    "matchAll()",
    "isAll()",
  ],
  correct: 0,
},

{
  question: "905) Quelle méthode terminale vérifie si au moins un élément satisfait un prédicat ?",
  answers: [
    "anyMatch()",
    "someMatch()",
    "oneMatch()",
    "existsMatch()",
  ],
  correct: 0,
},

{
  question: "906) Quelle méthode terminale vérifie si aucun élément ne satisfait un prédicat ?",
  answers: [
    "noneMatch()",
    "noMatch()",
    "notMatch()",
    "emptyMatch()",
  ],
  correct: 0,
},

{
  question: "907) Quelle opération terminale permet de réduire les éléments d'un Stream à une seule valeur ?",
  answers: [
    "reduce()",
    "collapse()",
    "aggregate()",
    "combineAll()",
  ],
  correct: 0,
},

{
  question: "908) Quelle méthode permet de transformer un Stream en tableau ?",
  answers: [
    "toArray()",
    "asArray()",
    "array()",
    "collectArray()",
  ],
  correct: 0,
},

{
  question: "909) Quelle méthode permet généralement de collecter un Stream dans une List ?",
  answers: [
    "collect()",
    "toListOnly()",
    "list()",
    "gather()",
  ],
  correct: 0,
},

{
  question: "910) Quelle classe fournit les collecteurs du Stream API ?",
  answers: [
    "Collectors",
    "StreamCollectors",
    "CollectionFactory",
    "CollectorUtils",
  ],
  correct: 0,
},

{
  question: "911) Quel collecteur permet de regrouper les éléments selon une fonction de classification ?",
  answers: [
    "groupingBy()",
    "groupBy()",
    "classifyBy()",
    "collectByGroup()",
  ],
  correct: 0,
},

{
  question: "912) Quel collecteur permet de partitionner les éléments selon une condition booléenne ?",
  answers: [
    "partitioningBy()",
    "splitBy()",
    "divideBy()",
    "booleanPartition()",
  ],
  correct: 0,
},

{
  question: "913) Quel collecteur permet de joindre des chaînes avec un séparateur ?",
  answers: [
    "joining()",
    "join()",
    "concat()",
    "mergeStrings()",
  ],
  correct: 0,
},

{
  question: "914) Quelle opération permet de transformer un Stream de collections en un Stream aplati ?",
  answers: [
    "flatMap()",
    "flatten()",
    "flat()",
    "expand()",
  ],
  correct: 0,
},

{
  question: "915) Quelle méthode permet de limiter le nombre d'éléments d'un Stream ?",
  answers: [
    "limit()",
    "maxSize()",
    "take()",
    "restrict()",
  ],
  correct: 0,
},

{
  question: "916) Quelle méthode permet de sauter les premiers éléments d'un Stream ?",
  answers: [
    "skip()",
    "ignore()",
    "dropFirst()",
    "pass()",
  ],
  correct: 0,
},

{
  question: "917) Quelle méthode de Stream permet de vérifier si un élément correspond à un prédicat sans produire nécessairement une valeur ?",
  answers: [
    "anyMatch()",
    "check()",
    "verify()",
    "test()",
  ],
  correct: 0,
},

{
  question: "918) Les opérations intermédiaires d'un Stream sont-elles généralement évaluées immédiatement ?",
  answers: [
    "Non",
    "Oui",
    "Uniquement avec map()",
    "Uniquement avec filter()",
  ],
  correct: 0,
},

{
  question: "919) Comment appelle-t-on une opération qui déclenche généralement l'évaluation d'un Stream ?",
  answers: [
    "Opération terminale",
    "Opération finale statique",
    "Opération de fermeture",
    "Opération de compilation",
  ],
  correct: 0,
},

{
  question: "920) Un Stream peut-il être réutilisé après une opération terminale ?",
  answers: [
    "Non",
    "Oui",
    "Uniquement s'il est parallèle",
    "Uniquement après reset()",
  ],
  correct: 0,
},

{
  question: "921) Quelle méthode permet de créer un Stream à partir d'une collection ?",
  answers: [
    "stream()",
    "createStream()",
    "toStream()",
    "makeStream()",
  ],
  correct: 0,
},

{
  question: "922) Quelle méthode permet de créer un Stream parallèle à partir d'une collection ?",
  answers: [
    "parallelStream()",
    "parallel()",
    "createParallelStream()",
    "streamParallel()",
  ],
  correct: 0,
},

{
  question: "923) Quelle méthode transforme un Stream séquentiel en Stream parallèle ?",
  answers: [
    "parallel()",
    "toParallel()",
    "makeParallel()",
    "parallelStream()",
  ],
  correct: 0,
},

{
  question: "924) Quelle méthode transforme un Stream parallèle en Stream séquentiel ?",
  answers: [
    "sequential()",
    "serial()",
    "toSequential()",
    "makeSequential()",
  ],
  correct: 0,
},

{
  question: "925) Quelle méthode permet d'obtenir le nombre d'éléments d'un IntStream ?",
  answers: [
    "count()",
    "size()",
    "length()",
    "number()",
  ],
  correct: 0,
},

{
  question: "926) Quelle méthode d'IntStream permet de calculer la somme des valeurs ?",
  answers: [
    "sum()",
    "total()",
    "addAll()",
    "aggregate()",
  ],
  correct: 0,
},

{
  question: "927) Quelle méthode d'IntStream permet de calculer la moyenne ?",
  answers: [
    "average()",
    "mean()",
    "avg()",
    "calculateAverage()",
  ],
  correct: 0,
},

{
  question: "928) Quel type est retourné par IntStream.average() ?",
  answers: [
    "OptionalDouble",
    "OptionalInt",
    "Double",
    "double",
  ],
  correct: 0,
},

{
  question: "929) Quel type permet de représenter un Optional contenant un int ?",
  answers: [
    "OptionalInt",
    "IntOptional",
    "OptionalInteger",
    "IntegerOptional",
  ],
  correct: 0,
},

{
  question: "930) Quelle méthode d'Optional permet de vérifier la présence d'une valeur ?",
  answers: [
    "isPresent()",
    "exists()",
    "hasValue()",
    "contains()",
  ],
  correct: 0,
},

{
  question: "931) Quelle méthode d'Optional permet d'exécuter une action uniquement si une valeur est présente ?",
  answers: [
    "ifPresent()",
    "whenPresent()",
    "presentAction()",
    "executeIfPresent()",
  ],
  correct: 0,
},

{
  question: "932) Quelle méthode d'Optional permet de retourner une valeur par défaut si aucune valeur n'est présente ?",
  answers: [
    "orElse()",
    "defaultValue()",
    "elseValue()",
    "otherwise()",
  ],
  correct: 0,
},

{
  question: "933) Quelle méthode d'Optional permet de calculer une valeur par défaut uniquement si l'Optional est vide ?",
  answers: [
    "orElseGet()",
    "getElse()",
    "lazyElse()",
    "defaultGet()",
  ],
  correct: 0,
},

{
  question: "934) Quelle méthode d'Optional permet de lever une exception si aucune valeur n'est présente ?",
  answers: [
    "orElseThrow()",
    "throwIfEmpty()",
    "requireValue()",
    "failIfAbsent()",
  ],
  correct: 0,
},

{
  question: "935) Quelle méthode permet de transformer la valeur d'un Optional ?",
  answers: [
    "map()",
    "transform()",
    "convert()",
    "change()",
  ],
  correct: 0,
},

{
  question: "936) Quelle méthode d'Optional permet d'éviter un Optional imbriqué lorsqu'une fonction retourne elle-même un Optional ?",
  answers: [
    "flatMap()",
    "flatten()",
    "flat()",
    "expand()",
  ],
  correct: 0,
},

{
  question: "937) Quelle méthode permet de créer un Optional vide ?",
  answers: [
    "Optional.empty()",
    "Optional.none()",
    "Optional.nullValue()",
    "Optional.blank()",
  ],
  correct: 0,
},

{
  question: "938) Quelle méthode permet de créer un Optional contenant une valeur non nulle ?",
  answers: [
    "Optional.of()",
    "Optional.create()",
    "Optional.value()",
    "Optional.some()",
  ],
  correct: 0,
},

{
  question: "939) Quelle méthode permet de créer un Optional qui accepte une valeur potentiellement null ?",
  answers: [
    "Optional.ofNullable()",
    "Optional.safeOf()",
    "Optional.nullable()",
    "Optional.maybe()",
  ],
  correct: 0,
},

{
  question: "940) Que se passe-t-il avec Optional.of(null) ?",
  answers: [
    "Une NullPointerException est levée",
    "Un Optional vide est créé",
    "La valeur null est conservée",
    "Une valeur par défaut est créée",
  ],
  correct: 0,
},

{
  question: "941) Quelle interface représente une ressource pouvant être fermée automatiquement ?",
  answers: [
    "AutoCloseable",
    "Closable",
    "CloseableResource",
    "Disposable",
  ],
  correct: 0,
},

{
  question: "942) Quelle interface étend AutoCloseable pour les flux d'E/S ?",
  answers: [
    "Closeable",
    "IOCloseable",
    "ResourceCloseable",
    "StreamCloseable",
  ],
  correct: 0,
},

{
  question: "943) Dans un try-with-resources, quand les ressources sont-elles normalement fermées ?",
  answers: [
    "Automatiquement à la fin du bloc try",
    "Uniquement si close() est appelé manuellement",
    "À la fin du programme uniquement",
    "Jamais automatiquement",
  ],
  correct: 0,
},

{
  question: "944) Si plusieurs ressources sont déclarées dans un try-with-resources, dans quel ordre sont-elles généralement fermées ?",
  answers: [
    "Dans l'ordre inverse de leur déclaration",
    "Dans l'ordre de leur déclaration",
    "Dans un ordre aléatoire",
    "Toutes simultanément",
  ],
  correct: 0,
},

{
  question: "945) Quelle classe permet de lire efficacement du texte ligne par ligne avec un buffer ?",
  answers: [
    "BufferedReader",
    "TextReader",
    "LineReader",
    "BufferedTextReader",
  ],
  correct: 0,
},

{
  question: "946) Quelle méthode de BufferedReader lit une ligne complète ?",
  answers: [
    "readLine()",
    "readRow()",
    "nextLine()",
    "getLine()",
  ],
  correct: 0,
},

{
  question: "947) Quelle classe permet d'écrire du texte avec un buffer ?",
  answers: [
    "BufferedWriter",
    "TextWriter",
    "BufferedTextWriter",
    "WriterBuffer",
  ],
  correct: 0,
},

{
  question: "948) Quelle classe permet d'écrire des caractères dans un fichier ?",
  answers: [
    "FileWriter",
    "FileCharacterWriter",
    "CharacterFileWriter",
    "TextFileWriter",
  ],
  correct: 0,
},

{
  question: "949) Quelle classe permet de lire des caractères depuis un fichier ?",
  answers: [
    "FileReader",
    "FileCharacterReader",
    "CharacterFileReader",
    "TextFileReader",
  ],
  correct: 0,
},

{
  question: "950) Quelle classe permet de lire des octets depuis un fichier ?",
  answers: [
    "FileInputStream",
    "FileByteReader",
    "ByteFileReader",
    "InputFileStream",
  ],
  correct: 0,
},

{
  question: "951) Quelle classe permet d'écrire des octets dans un fichier ?",
  answers: [
    "FileOutputStream",
    "FileByteWriter",
    "ByteFileWriter",
    "OutputFileStream",
  ],
  correct: 0,
},

{
  question: "952) Quelle classe ajoute un buffer à un InputStream ?",
  answers: [
    "BufferedInputStream",
    "InputBuffer",
    "StreamBuffer",
    "BufferedStreamReader",
  ],
  correct: 0,
},

{
  question: "953) Quelle classe ajoute un buffer à un OutputStream ?",
  answers: [
    "BufferedOutputStream",
    "OutputBuffer",
    "StreamOutputBuffer",
    "BufferedStreamWriter",
  ],
  correct: 0,
},

{
  question: "954) Quelle classe permet de lire des types primitifs depuis un flux binaire ?",
  answers: [
    "DataInputStream",
    "PrimitiveInputStream",
    "BinaryDataReader",
    "TypedInputStream",
  ],
  correct: 0,
},

{
  question: "955) Quelle classe permet d'écrire des types primitifs dans un flux binaire ?",
  answers: [
    "DataOutputStream",
    "PrimitiveOutputStream",
    "BinaryDataWriter",
    "TypedOutputStream",
  ],
  correct: 0,
},

{
  question: "956) Quelle classe permet de lire des objets sérialisés ?",
  answers: [
    "ObjectInputStream",
    "SerializedReader",
    "ObjectReaderStream",
    "SerializationReader",
  ],
  correct: 0,
},

{
  question: "957) Quelle classe permet d'écrire des objets sérialisables ?",
  answers: [
    "ObjectOutputStream",
    "SerializedWriter",
    "ObjectWriterStream",
    "SerializationWriter",
  ],
  correct: 0,
},

{
  question: "958) Quelle exception est généralement associée à une incompatibilité de classe lors de la désérialisation ?",
  answers: [
    "InvalidClassException",
    "ClassMismatchException",
    "SerializationMismatchException",
    "InvalidObjectClassException",
  ],
  correct: 0,
},

{
  question: "959) Quelle exception est levée lorsqu'un objet désérialisé n'est pas du type attendu ?",
  answers: [
    "ClassCastException",
    "InvalidTypeException",
    "DeserializeCastException",
    "ObjectTypeException",
  ],
  correct: 0,
},

{
  question: "960) Quelle interface peut être utilisée pour contrôler la désérialisation d'une classe ?",
  answers: [
    "ObjectInputValidation",
    "DeserializationControl",
    "ObjectValidation",
    "SerializationValidator",
  ],
  correct: 0,
},

{
  question: "961) Quelle annotation indique qu'un élément Java est destiné à être utilisé comme une API expérimentale ou interne ?",
  answers: [
    "@Incubating",
    "@Experimental",
    "@Internal",
    "@PreviewOnly",
  ],
  correct: 0,
},

{
  question: "962) Quelle annotation standard indique qu'un élément est destiné à être supprimé ou est obsolète ?",
  answers: [
    "@Deprecated",
    "@Obsolete",
    "@Removed",
    "@Legacy",
  ],
  correct: 0,
},

{
  question: "963) Quelle annotation permet d'indiquer qu'un paramètre ou retour ne devrait pas être null ?",
  answers: [
    "Aucune annotation standard universelle de java.lang",
    "@NotNull",
    "@NonNull",
    "@NeverNull",
  ],
  correct: 0,
},

{
  question: "964) Quelle annotation standard permet d'indiquer une méthode ou un type sûr vis-à-vis de certains usages de l'injection de dépendances ?",
  answers: [
    "Il n'existe pas d'annotation standard Java universelle pour cela",
    "@Safe",
    "@Secure",
    "@DependencySafe",
  ],
  correct: 0,
},

{
  question: "965) Quelle annotation permet de déclarer une interface fonctionnelle ?",
  answers: [
    "@FunctionalInterface",
    "@Function",
    "@Functional",
    "@SingleMethod",
  ],
  correct: 0,
},

{
  question: "966) Une interface annotée @FunctionalInterface doit-elle avoir exactement une méthode abstraite ?",
  answers: [
    "Oui",
    "Non",
    "Elle doit avoir exactement deux méthodes",
    "Elle ne peut avoir aucune méthode",
  ],
  correct: 0,
},

{
  question: "967) Les méthodes default d'une interface comptent-elles comme méthodes abstraites pour @FunctionalInterface ?",
  answers: [
    "Non",
    "Oui",
    "Uniquement si elles sont publiques",
    "Uniquement si elles sont static",
  ],
  correct: 0,
},

{
  question: "968) Les méthodes static d'une interface comptent-elles comme méthode abstraite pour @FunctionalInterface ?",
  answers: [
    "Non",
    "Oui",
    "Uniquement avec private",
    "Uniquement avec final",
  ],
  correct: 0,
},

{
  question: "969) Quelle méthode d'une interface peut avoir une implémentation par défaut ?",
  answers: [
    "Une méthode default",
    "Une méthode abstract",
    "Une méthode interface",
    "Une méthode prototype",
  ],
  correct: 0,
},

{
  question: "970) Quel mot-clé permet de déclarer une méthode avec une implémentation par défaut dans une interface ?",
  answers: [
    "default",
    "implements",
    "standard",
    "body",
  ],
  correct: 0,
},

{
  question: "971) Une interface Java peut-elle contenir des méthodes static ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement avant Java 8",
    "Uniquement si elle est functional",
  ],
  correct: 0,
},

{
  question: "972) Une interface Java peut-elle contenir des méthodes private ?",
  answers: [
    "Oui",
    "Non",
    "Uniquement dans les interfaces abstraites",
    "Uniquement dans les interfaces fonctionnelles",
  ],
  correct: 0,
},

{
  question: "973) Les champs déclarés dans une interface sont implicitement :",
  answers: [
    "public, static et final",
    "private et final",
    "protected et static",
    "public et volatile",
  ],
  correct: 0,
},

{
  question: "974) Quelle classe permet de créer des nombres aléatoires ?",
  answers: [
    "Random",
    "RandomNumber",
    "NumberGenerator",
    "JavaRandomizer",
  ],
  correct: 0,
},

{
  question: "975) Quelle méthode de Random retourne un entier aléatoire ?",
  answers: [
    "nextInt()",
    "randomInt()",
    "getInt()",
    "generateInt()",
  ],
  correct: 0,
},

{
  question: "976) Quelle méthode de Random retourne un booléen aléatoire ?",
  answers: [
    "nextBoolean()",
    "randomBoolean()",
    "getBoolean()",
    "generateBoolean()",
  ],
  correct: 0,
},

{
  question: "977) Quelle méthode de Random retourne un double aléatoire compris généralement entre 0.0 inclus et 1.0 exclus ?",
  answers: [
    "nextDouble()",
    "randomDouble()",
    "getDouble()",
    "generateDouble()",
  ],
  correct: 0,
},

{
  question: "978) Quelle classe fournit un générateur pseudo-aléatoire moderne adapté à de nombreux usages concurrents ?",
  answers: [
    "ThreadLocalRandom",
    "ConcurrentRandom",
    "ParallelRandom",
    "SafeRandom",
  ],
  correct: 0,
},

{
  question: "979) Quelle classe est destinée à la génération de nombres aléatoires plus adaptés aux usages cryptographiques ?",
  answers: [
    "SecureRandom",
    "CryptoRandom",
    "SafeRandom",
    "SecurityRandom",
  ],
  correct: 0,
},

{
  question: "980) Quelle classe permet d'effectuer des opérations mathématiques courantes ?",
  answers: [
    "Math",
    "MathUtils",
    "Calculator",
    "Arithmetic",
  ],
  correct: 0,
},

{
  question: "981) Quelle méthode de Math retourne la valeur absolue ?",
  answers: [
    "abs()",
    "absolute()",
    "absoluteValue()",
    "positive()",
  ],
  correct: 0,
},

{
  question: "982) Quelle méthode de Math retourne le maximum de deux valeurs ?",
  answers: [
    "max()",
    "maximum()",
    "highest()",
    "greater()",
  ],
  correct: 0,
},

{
  question: "983) Quelle méthode de Math retourne le minimum de deux valeurs ?",
  answers: [
    "min()",
    "minimum()",
    "lowest()",
    "smaller()",
  ],
  correct: 0,
},

{
  question: "984) Quelle méthode de Math arrondit un nombre vers l'entier supérieur le plus proche ?",
  answers: [
    "ceil()",
    "roundUp()",
    "up()",
    "ceilingValue()",
  ],
  correct: 0,
},

{
  question: "985) Quelle méthode de Math arrondit un nombre vers l'entier inférieur le plus proche ?",
  answers: [
    "floor()",
    "roundDown()",
    "down()",
    "floorValue()",
  ],
  correct: 0,
},

{
  question: "986) Quelle méthode de Math retourne l'arrondi classique d'un nombre vers un entier long ?",
  answers: [
    "round()",
    "nearest()",
    "approximate()",
    "integerRound()",
  ],
  correct: 0,
},

{
  question: "987) Quelle constante de Math représente approximativement le nombre pi ?",
  answers: [
    "Math.PI",
    "Math.Pi",
    "Math.PI_VALUE",
    "Math.P",
  ],
  correct: 0,
},

{
  question: "988) Quelle constante de Math représente approximativement le nombre d'Euler e ?",
  answers: [
    "Math.E",
    "Math.EULER",
    "Math.E_VALUE",
    "Math.EXP",
  ],
  correct: 0,
},

{
  question: "989) Quelle classe permet de représenter des calculs décimaux avec une précision arbitraire ?",
  answers: [
    "BigDecimal",
    "Decimal",
    "PreciseDecimal",
    "ExactDouble",
  ],
  correct: 0,
},

{
  question: "990) Quelle classe permet de représenter des entiers de taille arbitraire ?",
  answers: [
    "BigInteger",
    "LargeInteger",
    "BigInt",
    "UnlimitedInteger",
  ],
  correct: 0,
},

{
  question: "991) Quelle méthode de BigInteger permet d'effectuer une addition ?",
  answers: [
    "add()",
    "plus()",
    "sum()",
    "increase()",
  ],
  correct: 0,
},

{
  question: "992) Quelle méthode de BigInteger permet d'effectuer une multiplication ?",
  answers: [
    "multiply()",
    "times()",
    "product()",
    "mult()",
  ],
  correct: 0,
},

{
  question: "993) Quelle méthode de BigDecimal permet d'effectuer une addition ?",
  answers: [
    "add()",
    "plus()",
    "sum()",
    "increase()",
  ],
  correct: 0,
},

{
  question: "994) Pourquoi BigDecimal est-il souvent préférable à double pour les calculs financiers ?",
  answers: [
    "Il permet de contrôler précisément la représentation décimale",
    "Il est toujours plus rapide",
    "Il utilise uniquement des entiers",
    "Il supprime toutes les exceptions",
  ],
  correct: 0,
},

{
  question: "995) Quelle classe permet de manipuler des propriétés clé-valeur dans un fichier de configuration simple ?",
  answers: [
    "Properties",
    "Config",
    "Settings",
    "KeyValueFile",
  ],
  correct: 0,
},

{
  question: "996) Quelle méthode de Properties permet de charger des propriétés depuis un InputStream ?",
  answers: [
    "load()",
    "read()",
    "loadFromStream()",
    "importProperties()",
  ],
  correct: 0,
},

{
  question: "997) Quelle méthode de Properties permet d'obtenir une propriété sous forme de String avec une valeur par défaut ?",
  answers: [
    "getProperty()",
    "getStringProperty()",
    "propertyOrDefault()",
    "readProperty()",
  ],
  correct: 0,
},

{
  question: "998) Quelle classe permet de représenter une paire clé-valeur simple ?",
  answers: [
    "Map.Entry",
    "KeyValue",
    "Pair",
    "EntryPair",
  ],
  correct: 0,
},

{
  question: "999) Quelle méthode de Map permet d'obtenir un ensemble contenant les associations clé-valeur ?",
  answers: [
    "entrySet()",
    "entries()",
    "getEntries()",
    "keyValueSet()",
  ],
  correct: 0,
},

{
  question: "1000) Quelle méthode de Map permet d'obtenir un ensemble contenant toutes les clés ?",
  answers: [
    "keySet()",
    "keys()",
    "getKeys()",
    "allKeys()",
  ],
  correct: 0,
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
