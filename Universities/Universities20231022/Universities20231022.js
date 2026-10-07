const questions = [
{
  question: "Q1. Un Megaoctet correspond à :",
  answers: [
    "A. 2¹⁰ octets",
    "B. 2²⁰ octets",
    "C. 2³⁰ octets",
    "D. 2⁴⁰ octets"
  ],
  correct: 1
},
{
  question: "Q2. Quel est l'équivalent décimal du nombre binaire 11111110?",
  answers: [
    "A. 127",
    "B. 128",
    "C. 254",
    "D. 255"
  ],
  correct: 2
},
{
  question: "Q3. Quel est l'équivalent hexadécimal du nombre binaire 1110 1111 0100 0011?",
  answers: [
    "A. F314",
    "B. 3FE2",
    "C. EF43",
    "D. ABCD"
  ],
  correct: 2
},
{
  question: "Q4. Quelle est la bonne réponse concernant la conversion octal/binaire?",
  answers: [
    "A. 2964₈ = 101011100100₂",
    "B. 7513₈ = 11101001100₂",
    "C. 7214₈ = 111010001100₂",
    "D. 1817₈ = 11011011100₂"
  ],
  correct: 2
},
{
  question: "Q5. Que désigne-t-on part par mémoire de travail?",
  answers: [
    "A. RAM",
    "B. ROM",
    "C. EPROM",
    "D. SSD"
  ],
  correct: 0
},
{
  question: "Q6. Cocher l'intrus (élément qui n'est pas de la catégorie)",
  answers: [
    "A. GSM",
    "B. GPS",
    "C. GPRS",
    "D. UMTS"
  ],
  correct: 1
},
{
  question: "Q7. Cocher l'intrus",
  answers: [
    "A. Python",
    "B. Java",
    "C. Oracle",
    "D. C++"
  ],
  correct: 2
},
{
  question: "Q8. Que désigne-t-on part par mémoire de masse?",
  answers: [
    "A. RAM",
    "B. ROM",
    "C. EPROM",
    "D. HDD"
  ],
  correct: 3
},
{
  question: "Q9. Que signifie l'acronyme CPU?",
  answers: [
    "A. Central Processing Unit",
    "B. Central Programming Unit",
    "C. Cyclic Processing Usage",
    "D. Cyclic Programming Usage"
  ],
  correct: 0
},
{
  question: "Q10. Que signifie l'acronyme BIOS?",
  answers: [
    "A. Basic Input Output System",
    "B. Basic Interface On System",
    "C. Basic Interconnexion On System",
    "D. Bad Input Output Starting"
  ],
  correct: 0
},
{
  question: "Q11. Que signifie l'acronyme ALU?",
  answers: [
    "A. Arithmetic and Logic Unit",
    "B. Analog and Logic Unit",
    "C. Algorithme Langage Update",
    "D. Android Langage Update"
  ],
  correct: 0
},
{
  question: "Q12. Lequel de ces systèmes d'exploitation est plus vulnérable aux attaques internet?",
  answers: [
    "A. Windows",
    "B. Unix",
    "C. MacOS",
    "D. Novell Netware"
  ],
  correct: 0
},
{
  question: "Q13. Que peut être le cerveau d'un système informatique?",
  answers: [
    "A. OS",
    "B. RAM",
    "C. BIOS",
    "D. CPU"
  ],
  correct: 3
},
{
  question: "Q14. Dans quelle catégorie peut être classé le réseau Internet?",
  answers: [
    "A. Réseau PAN",
    "B. Réseau LAN",
    "C. Réseau MAN",
    "D. Réseau WAN"
  ],
  correct: 3
},
{
  question: "Q15. Quelle technologie est utilisée dans les réseaux de ville WMAN?",
  answers: [
    "A. zigbee",
    "B. bluetooth",
    "C. wifi",
    "D. wimax"
  ],
  correct: 3
},
{
  question: "Q16. Quel programme informatique permet de faire des calculs sur des tableaux de valeurs?",
  answers: [
    "A. Microsoft Word",
    "B. Microsoft Power point",
    "C. Microsoft Excel",
    "D. Microsoft Access"
  ],
  correct: 2
},
{
  question: "Q17. Lequel est un protocole de messagerie électronique?",
  answers: [
    "A. SMTP",
    "B. SNMP",
    "C. OSPF",
    "D. DHCP"
  ],
  correct: 0
},
{
  question: "Q18. Lequel est un protocole de supervision et gestion réseau?",
  answers: [
    "A. SMTP",
    "B. SNMP",
    "C. OSPF",
    "D. DHCP"
  ],
  correct: 1
},
{
  question: "Q19. Lequel est un protocole de routage réseau ?",
  answers: [
    "A. SMTP",
    "B. SNMP",
    "C. OSPF",
    "D. DHCP"
  ],
  correct: 2
},
{
  question: "Q20. A quoi correspond le composant matériel d'ordinateur SSD NVMe?",
  answers: [
    "A. carte mémoire SD",
    "B. barrette mémoire RAM",
    "C. disque dur interne statique",
    "D. disque dur interne mobile"
  ],
  correct: 2
},
{
  question: "Q21. A quoi correspond le composant matériel d'ordinateur HDD?",
  answers: [
    "A. carte mémoire SD",
    "B. barrette mémoire RAM",
    "C. disque dur interne statique",
    "D. disque dur interne mobile"
  ],
  correct: 2
},
{
  question: "Q22. Quel est le rôle du compilateur",
  answers: [
    "A. Il traduit tout le code source avant l'exécution du programme",
    "B. II traduit et exécute le programme ligne par ligne",
    "C. II fonctionne exacternement comme un interpréteur",
    "D. Il est plus lent que l'interpréteur"
  ],
  correct: 0
},
{
  question: "Q23. Comment s'appelle le programme qui permet la recherche des pages Web sur Internet?",
  answers: [
    "A. Navigateur/Browser",
    "B. Serveur",
    "C. Client",
    "D. URL (Uniform Resource Locator)"
  ],
  correct: 0
},
{
  question: "Q24. En quoi consiste l'acronyme ADSL?",
  answers: [
    "A. Technologie d'accés aux réseaux internet",
    "B. Technologie d'accès aux réseaux Ethernet",
    "C. Technologie d'accès aux réseaux sans fil",
    "D. Technologie d'accès aux réseaux mobiles"
  ],
  correct: 0
},
{
  question: "Q25. En quoi consiste CSMA/CD?",
  answers: [
    "A. Technologie d'accès aux réseaux internet",
    "B. Technologie d'accès aux réseaux Ethernet",
    "C. Technologie d'accès aux réseaux sans fil",
    "D. Technologie d'accès aux réseaux mobiles"
  ],
  correct: 1
},
{
  question: "Q26. En quoi consiste CSMA/CA?",
  answers: [
    "A. Technologie d'accès au réseau internet",
    "B. Technologie developpée pour Ethernet",
    "C. Technologie utilisée dans les réseaux sans fil",
    "D. Technologie d'accès aux réseaux mobiles"
  ],
  correct: 2
},
{
  question: "Q27. Laquelle est une topologie réseau ?",
  answers: [
    "A. Etoile",
    "B. Token Ring",
    "C. ADSL",
    "D. Ethernet"
  ],
  correct: 0
},
{
  question: "Q28. Laquelle est une technologie réseau ?",
  answers: [
    "A. Etoile",
    "B. Bus",
    "C. Anneau",
    "D. Ethernet"
  ],
  correct: 3
},
{
  question: "Q29. Quelle est le rôle de la couche physique du modèle ISO?",
  answers: [
    "A. adressage et acheminement de paquets à destination",
    "B. Mise en trame des données",
    "C. segmentation des données et correction d'erreur",
    "D. transfert de données sous forme de bits sur médium"
  ],
  correct: 3
},
{
  question: "Q30. Quelle est le rôle de la couche internet du modèle TCP/IP?",
  answers: [
    "A. adressage et acheminement de paquets à destination",
    "B. Mise en trame des données",
    "C. segmentation des données et correction d'erreur",
    "D. transfert de données sous forme de bits sur médium"
  ],
  correct: 0
},
{
  question: "Q31. Quelle réponse correspond bien à la norme IEEE 802.11 ?",
  answers: [
    "A. Norme des réseaux sans fil bluctooth.",
    "B. Norme des réseaux sans fil wifi",
    "C. Norme des réseaux sans fil wimax",
    "D. Norme de la technologie Ethernet"
  ],
  correct: 1
},
{
  question: "Q32. Quelle réponse correspond bien à la norme IEEE 802.3?",
  answers: [
    "A. Norme des réseaux sans fil bluetooth",
    "B. Norme des réseaux sans fil wifi",
    "C. Norme des réseaux sans fil wimax",
    "D. Norme de la technologie Ethernet"
  ],
  correct: 3
},
{
  question: "Q33. Quelle description correspond bien à TCP/IP?",
  answers: [
    "A. Modèle de référence des communications réseaux",
    "B. Organisation de standardisation des communications réseaux",
    "C. Pile des communications Internet",
    "D. Modèle qui a remplacé le modèle OSI"
  ],
  correct: 2
},
{
  question: "Q34. Quelle couche appartient à OSI et à TCP/IP et réalise le même rôle sur les deux modèles?",
  answers: [
    "A. Présentation",
    "B. Transport",
    "C. Application",
    "D. Session"
  ],
  correct: 1
},
{
  question: "Q35. Lequel de ces mediums est insensé aux perturbations électromagnétiques?",
  answers: [
    "A. Câble coaxial",
    "B. Câble à paires torsadées",
    "C. Fibre optique",
    "D. Ondes radio"
  ],
  correct: 2
},
{
  question: "Q36. Quel medium offre plus de mobilité?",
  answers: [
    "A. Cable coaxial",
    "B. Cable à paires torsadées",
    "C. Fibre optique",
    "D. Ondes radio"
  ],
  correct: 3
},
{
  question: "Q37. Lequel de ces équipements réseaux est limité à la couche internet du modèle TCP/IP?",
  answers: [
    "A. Switch",
    "B. Routeur",
    "C. Répéteur",
    "D. Ordinateur"
  ],
  correct: 1
},
{
  question: "Q38. Quel équipement d'interconnexion réseau permet de relier les réseaux distants à l'échelle d'internet?",
  answers: [
    "A. Switch",
    "B. Routeur",
    "C. Répéteur",
    "D. Ordinateur"
  ],
  correct: 1
},
{
  question: "Q39. Quelle est la taille de l'adresse physique dite MAC?",
  answers: [
    "A. 6 octets",
    "B. 12 octets",
    "C. 24 octets",
    "D. 48 octets"
  ],
  correct: 0
},
{
  question: "Q40. Laquelle de ces adresses est une adresse IPv4 privée?",
  answers: [
    "A. 172.160.23.45",
    "B. 172.10.23.45",
    "C. 172.56.23.45",
    "D. 172.20.23.45"
  ],
  correct: 3
},
{
  question: "Q41. Laquelle de ces adresses est une adresse IPv4 publique?",
  answers: [
    "A. 172.20.23.45",
    "B. 192.168.1.45",
    "C. 172.56.23.45",
    "D. 10.20.23.45"
  ],
  correct: 2
},
{
  question: "Q42. Quel est le rôle du protocole ARP?",
  answers: [
    "A. Translation d'adresse IP en adresse MAC",
    "B. Translation d'adresses physiques MAC en adresses IP",
    "C. Translation des noms de domaines en adresse physiques",
    "D. Translation des adresses physiques en nonis de domaines"
  ],
  correct: 0
},
{
  question: "Q43. Quel est le rôle du service DNS ?",
  answers: [
    "A. Traduction des nonis de domaines en adresses logiques IP",
    "B. Traduction d'adresses IP en noms de domaines",
    "C. Traduction des noms de domaines en adresse physiques",
    "D. Traduction des adresses phy siques en noms de domaines"
  ],
  correct: 0
},
{
  question: "Q44. Quel est le rôle du service DHCP?",
  answers: [
    "A. Attribution des paramètres TCP/IP aux machines",
    "B. Attribution des adresses MAC aux cartes réseaux",
    "C. Conversion des adresses IP en adresses MAC",
    "D. Conversion des adresses MAC en adresses IP"
  ],
  correct: 0
},
{
  question: "Q45. A quoi peut correspondre un algorithme?",
  answers: [
    "A. ASCII Code",
    "B. Binarycode",
    "C. Bytecode",
    "D. Pseudocode"
  ],
  correct: 3
},
{
  question: "Q46. Quel énoncé correspond au langage assembleur?",
  answers: [
    "A. Langage machine",
    "B. Langage évolué",
    "C. Langage difficile",
    "D. Langage facile"
  ],
  correct: 0
},
{
  question: "Q47. Lequel des langages suivants est mieux adapté à la programmation structurée?",
  answers: [
    "A. C#",
    "B. C",
    "C. Java",
    "D. Python"
  ],
  correct: 1
},
{
  question: "Q48. Comment s'appelle un ordinateur sur un réseau qui demande des fichiers à un autre ordinateur ?",
  answers: [
    "A. Un client",
    "B. Un hôte",
    "C. Un routeur",
    "D. Un serveur web"
  ],
  correct: 0
},
{
  question: "Q49. Comment s'appelle le serveur réseau dédié au transfert de fichiers?",
  answers: [
    "A. Serveur HTTP",
    "B. Serveur FTP",
    "C. Serveur DNS",
    "D. Serveur DHCP"
  ],
  correct: 1
},
{
  question: "Q50. Qu'est ce qui permet de localiser et d'une manière unique une ressource sur internet?",
  answers: [
    "A. URL",
    "B. HTTP",
    "C. FTP",
    "D. TELNET"
  ],
  correct: 0
},
{
  question: "Q51. Quel est le protocole qui permet de contrôler une machine à distance?",
  answers: [
    "A. URL",
    "B. HTTP",
    "C. FIP",
    "D. TELNET"
  ],
  correct: 3
},
{
  question: "Q52. Quel est le composant utilisé pour la compilation, le débogage et l'exécution des programmes java?",
  answers: [
    "A. JDK",
    "B. JVM",
    "C. JRE",
    "D. JIT"
  ],
  correct: 0
},
{
  question: "Q53. Quel composant effectue la conversion du bytecode en code machine?",
  answers: [
    "A. JDK",
    "B. JVM",
    "C. JRE",
    "D. JIT"
  ],
  correct: 3
},
{
  question: "Q54. Quel code est utilisé pour coder le clavier d'un ordinateur?",
  answers: [
    "A. code binaire",
    "B. code hexadecimal",
    "C. code ascii",
    "D. code gray"
  ],
  correct: 2
},
{
  question: "Q55. Quelle méthode peut définir ou modifier le texte dans une étiquette(Label) sous java?",
  answers: [
    "A. setText()",
    "B. getText()",
    "C. Toutes les réponses précédentes sont vraies",
    "D. Aucune de ces réponses n'est vraie."
  ],
  correct: 0
},
{
  question: "Q56. Sous java, lequel des énoncés suivants est une déclaration valide d'un objet qui appartient à la classe « MaClass»?",
  answers: [
    "A. MaClass obj = new MaClass();",
    "B. MaClass obj = new MaClass;",
    "C. obj = new MaClass();",
    "D. new MaClass obj;"
  ],
  correct: 0
},
{
  question: "Q57. Quel opérateur est utilisé pour allouer de la mémoire à un objet Sous Java?",
  answers: [
    "A. malloc68.",
    "B. alloc",
    "C. new",
    "D. realloc"
  ],
  correct: 2
},
{
  question: "58. Quel est le rendu du code java suivant?\n\nclass Main {\n    public static void main(String args[]) {\n        int x = 3;\n        if (x == 3) {\n            int x = 10;\n            System.out.println(x);\n        }\n    }\n}",
  answers: [
    "A. Erreur d'exécution",
    "B. Erreur de compilation",
    "C. 3",
    "D. 10"
  ],
  correct: 1
},
{
  question: "59. Qu'est-ce qu'une collection en Java?",
  answers: [
    "A. Un groupe d'objets",
    "B. Un groupe d'interfaces",
    "C. Un groupe de classes",
    "D. Aucune de ces réponses n'est vraie"
  ],
  correct: 0
},
{
  question: "60. Qu'est-ce que std en C++?",
  answers: [
    "A. Une classe standard en C++",
    "B. Un fichier standard d'en-tête de lecture",
    "C. Un fichier d'en-tête standard",
    "D. Un espace de nom standard"
  ],
  correct: 3
},
{
  question: "61. Lequel est l'opérateur de flux de sortie en C++?",
  answers: [
    "A. <<",
    "B. >>",
    "C. >",
    "D. <"
  ],
  correct: 0
},
{
  question: "62. Lequel des énoncés suivants est vrai concernant la permutation des valeurs de deux variables en programmation?",
  answers: [
    "A. Possible uniquement en utilisant une troisième variable",
    "B. Possible sans passer par une troisième variable",
    "C. Impossible d'échanger les contenus de deux variables",
    "D. II faudrait peut-être utiliser deux autres variables"
  ],
  correct: 1
},
{
  question: "63. Lequel des énoncés suivants est vrai en C++?",
  answers: [
    "A. Une classe est une instance d'un objet",
    "B. Un objet est une instance d'une classe",
    "C. Les membres d'une classe sont public par défaut",
    "D. Toutes les réponses précédentes sont vraies"
  ],
  correct: 1
},
{
  question: "64. Qu'utilise-t-on pour appeler une fonction en C++?",
  answers: [
    "A. Son nom suffit aimplement",
    "B. Son nom et ses paramètres effectifs ou arguments",
    "C. Son nom et ses paramètres formeis",
    "D. Son prototype ou sa signature"
  ],
  correct: 1
},
{
  question: "65. Qu'utilise-t-on pour sortir de switch en C++?",
  answers: [
    "A. break",
    "B. exit",
    "C. continue",
    "D. default"
  ],
  correct: 0
},
{
  question: "66. Les membres d'une structure en C++ sont par défaut :",
  answers: [
    "A. Private",
    "B. Protected",
    "C. Public",
    "D. Toutes les réponses précédentes sont fausses"
  ],
  correct: 2
},
{
  question: "67. Quelle déclaration correspond à une matrice de nombres réels ayant M lignes et N colonnes?",
  answers: [
    "A. float Mat[M-1][N-1]",
    "B. float Mat[N-1][M-1]",
    "C. float Mat[N][M]",
    "D. float Mat[M][N]"
  ],
  correct: 3
},
{
  question: "68. Que contient un pointeur en programmation C/C++?",
  answers: [
    "A. l'adresse d'une variable en mémoire",
    "B. l'adresse de l'adresse d'une variable en mémoire",
    "C. l'adresse de la pile",
    "D. l'adresse de l'adresse de la pile"
  ],
  correct: 0
},
{
  question: "69. Que fait le programme C suivant?\n\n#include <stdio.h>\nint main ()\n{\n    int A, B:\n    A = A + B;\n    B = A - B;\n    A = A - B;\n    Return 0;\n}",
  answers: [
    "A. Somme de A et B",
    "B. Différence de A et B",
    "C. Echange de A et B",
    "D. Erreur de compilation"
  ],
  correct: 2
},
{
  question: "70. Quelle est la bonne réponse concernant la nature des éléments d'un tableau en C/C++?",
  answers: [
    "A. Peuvent être de type différents ",
    "B. Doivent être de méme type",
    "C. Ne peuvent être que des nombres",
    "D. Ne peuvent être que des caractères"
  ],
  correct: 1
},
{
  question: "71. Quelle est la bonne réponse concernant la nature des champs d'une structure en C/C++?",
  answers: [
    "A. Peuvent être de type différents",
    "B. Doivent être de même type",
    "C. Ne peuvent être que des nombres",
    "D. Ne peuvent être que des caractères"
  ],
  correct: 0
},
{
  question: "72. On considère l'appel de fonction suivant sous C/C++: \nechange (A, B);\nPour qu'il y ait permutation des valeurs des deux variables A et B dans le programme principal, quel type de passage peut-on utiliser?",
  answers: [
    "A. Passage par valeur void echange (int A, int B)",
    "B. Passage par adresse void echange (int &A, int &B)",
    "C. Les deux réponses précédentes sont vraies",
    "D. Impossible de faire la permutation par fonction"
  ],
  correct: 1
},
{
  question: "73. Que peut être un système embarqué?",
  answers: [
    "A. Un ordinateur enfoui à bord d'une voiture",
    "B. Un ordinateur de bureau (desktop)",
    "C. Un ordinateur portable (laptop)",
    "D. Un ordinateur serveur réseau"
  ],
  correct: 0
},
{
  question: "74. Où sont déclarées les fonctions en C/C++?",
  answers: [
    "A. Après la fonction main à condition que les prototypes soient déclarés avant",
    "B. Avant la fonction main à condition que les prototypes soient déclarés après",
    "C. nécessairement au sein de la fonction main",
    "D. Peu n'importe aucune restriction"
  ],
  correct: 0
},
{
  question: "75. Quelle commande permet de basculer d'un compte user ordinaire au compte root sous Unix?",
  answers: [
    "A. user",
    "B. chroot",
    "C. SU",
    "D. root"
  ],
  correct: 2
},
{
  question: "76. Comment s'appelle le processus que chaque chef de projet doit suivre pendant la durée de vie d'un projet ?",
  answers: [
    "A. Gestion de projet",
    "B. Cycle de vie du chef de projet",
    "C. Cycle de vie du projet",
    "D. Toutes les réponses précédentes sont vraies"
  ],
  correct: 2
},
{
  question: "77. Laquelle des raisons suivantes explique les retards sur le livrable ?",
  answers: [
    "A. Exigences changeantes du client non prévues à l'avance",
    "B. Difficultés techniques non prévues à l'avance.",
    "C. Difficultés humaines non prévues à l'avance",
    "D. Toutes les réponses sont vraies"
  ],
  correct: 3
},
{
  question: "78. Quel terme signifie que les données ne sont pas corrompues en sécurité informatique?",
  answers: [
    "A. La confidentialité",
    "B. L'intégrité",
    "C. La disponibilité",
    "D. L'authenticité"
  ],
  correct: 1
},
{
  question: "79. Lequel des programmes malveillants suivants peut servir comme porte dérobée aux pirates sur une machine?",
  answers: [
    "A. Hoax",
    "B. Trojan",
    "C. Virus",
    "D. Warm"
  ],
  correct: 1
},
{
  question: "80. Comment peut-on éviter d'être infecté par un virus?",
  answers: [
    "A. En évitant d'envoyer des messages électroniques",
    "B. En évitant des achats en ligne",
    "C. En évitant d'ouvrir les pièces jointes d'un e-mail",
    "D. En évitant d'utiliser l'ordinateur pendant l'hiver"
  ],
  correct: 2
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
