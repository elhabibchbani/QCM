const questions = [
{
  question: "Q1. Qu'est-ce qu'une boucle \"for\" en programmation?",
  answers: [
    "A. Une boucle qui s'exécute indéfiniment.",
    "B. Une boucle qui permet d'itérer sur une séquence. de valeurs.",
    "C. Une boucle exclusivement utilisée pour les opérations arithmétiques."
  ],
  correct: 1
},
{
  question: "Q2. Quelle est la principale différence entre une classe et un objet en programmation orientée objet ?",
  answers: [
    "A. Une classe est une instance d'un objet.",
    "B. Un objet est une instance d'une classe..",
    "C. Les termes sont interchangeables, il n'y a pas de différence."
  ],
  correct: 1
},
{
  question: "Q3. Qu'est-ce qu'un pointeur en programmation C/C++?",
  answers: [
    "A. Une variable qui stocke les coordonnées d'un point dans l'espace.",
    "B. Une variable qui contient l'adresse mémoire d'une autre variable.",
    "C. Une variable qui stocke les résultats d'une opération mathématique."
  ],
  correct: 1
},
{
  question: "Q4. Quelle est la principale étape du modèle conceptuel dans la méthode Merise?",
  answers: [
    "A. La spécification des traitements.",
    "B. La conception des bases de données.",
    "C. La modélisation des données."
  ],
  correct: 2
},
{
  question: "Q5. Qu'est-ce qu'une entité dans le modèle entité-association de Merise?",
  answers: [
    "A. Une table dans la base de données.",
    "B. Un ensemble d'attributs décrivant un concept métier.",
    "C. Une opération effectuée sur les données."
  ],
  correct: 1
},
{
  question: "Q6. Quelle est la fonction principale d'un routeur dans un réseau informatique?",
  answers: [
    "A. Connecter des périphériques au réseau..",
    "B. Filtrer le trafic entre différents réseaux.",
    "C. Gérer les adresses IP des périphériques."
  ],
  correct: 1
},
{
  question: "Q7. Qu'est-ce qu'une adresse IP privée ?",
  answers: [
    "A. Une adresse réservée pour les sites web.",
    "B. Une adresse utilisée à des fins de test.",
    "C. Une adresse assignée à un périphérique sur un réseau local."
  ],
  correct: 2
},
{
  question: "Q8. Qu'est-ce que HTML?",
  answers: [
    "A. Un langage de programmation côté serveur.",
    "B. Un langage de balisage utilisé pour créer des pages web..",
    "C. Un protocole de communication sécurisé."
  ],
  correct: 1
},
{
  question: "Q9. Quel est le rôle de CSS dans le développement web?",
  answers: [
    "A. Gérer la logique côté serveur.",
    "B. Définir la présentation et le style des pages web..",
    "C. Assurer la sécurité des transactions en ligne."
  ],
  correct: 1
},
{
  question: "Q10. Quel est le rôle d'un système d'exploitation dans un ordinateur ?",
  answers: [
    "A. Gérer les ressources matérielles de l'ordinateur..",
    "B. Exécuter des programmes applicatifs.",
    "C. Protéger l'ordinateur contre les virus."
  ],
  correct: 0
},
{
  question: "Q11. Qu'est-ce qu'un processus en informatique ?",
  answers: [
    "A. Un programme en cours d'exécution..",
    "B. Un ensemble d'instructions stockées sur le disque dur.",
    "C. Une unité de stockage de données."
  ],
  correct: 0
},
{
  question: "Q12. Qu'est-ce qu'une base de données relationnelle ?",
  answers: [
    "A. Un ensemble de fichiers texte.",
    "B. Une collection de données non structurées.",
    "C. Une collection de tables liées entre elles par des clés."
  ],
  correct: 2
},
{
  question: "Q13. Qu'est-ce qu'une file de priorité en structures de données ?",
  answers: [
    "A. Une structure où les éléments sont organisés selon leur ordre d'insertion.",
    "B. Une structure où les éléments sont organisés selon leur priorité.",
    "C. Une structure qui stocke des données de manière aléatoire"
  ],
  correct: 1
},
{
  question: "Q14. Quelle méthode itérative est la plus couramment utilisée pour résoudre numériquement des équations non linéaires ?",
  answers: [
    "A. La méthode de Newton-Raphson.",
    "B. La méthode des moindres carrés",
    "C. La méthode de Gauss."
  ],
  correct: 0
},
{
  question: "Q15. Quel est le rôle principal du DNS ?",
  answers: [
    "A. Attribuer automatiquement des adresses IP.",
    "B. Traduire les noms de domaine en adresses IP.",
    "C. Transférer des fichiers entre deux ordinateurs."
  ],
  correct: 1
},
{
  question: "Q16. Quel protocole permet d'attribuer automatiquement une adresse IP à un ordinateur ?",
  answers: [
    "A. DNS",
    "B. DHCP",
    "C. FTP"
  ],
  correct: 1
},
{
  question: "Q17. Quelle est la longueur d'une adresse IPv4 ?",
  answers: [
    "A. 16 bits",
    "B. 32 bits",
    "C. 128 bits"
  ],
  correct: 1
},
{
  question: "Q18. Quelle est la longueur d'une adresse IPv6 ?",
  answers: [
    "A. 32 bits",
    "B. 64 bits",
    "C. 128 bits"
  ],
  correct: 2
},
{
  question: "Q19. Quel équipement permet de relier plusieurs réseaux différents ?",
  answers: [
    "A. Switch",
    "B. Routeur",
    "C. Hub"
  ],
  correct: 1
},
{
  question: "Q20. Quelle couche du modèle OSI est responsable du routage ?",
  answers: [
    "A. Couche 2",
    "B. Couche 3",
    "C. Couche 4"
  ],
  correct: 1
},
{
  question: "Q21. Quelle couche OSI utilise les adresses MAC ?",
  answers: [
    "A. Couche 1",
    "B. Couche 2",
    "C. Couche 3"
  ],
  correct: 1
},
{
  question: "Q22. Quel protocole est utilisé par la commande ping ?",
  answers: [
    "A. TCP",
    "B. UDP",
    "C. ICMP"
  ],
  correct: 2
},
{
  question: "Q23. Quel protocole fonctionne sans établissement préalable de connexion ?",
  answers: [
    "A. TCP",
    "B. UDP",
    "C. FTP"
  ],
  correct: 1
},
{
  question: "Q24. Quel protocole assure une transmission fiable des données ?",
  answers: [
    "A. UDP",
    "B. ICMP",
    "C. TCP"
  ],
  correct: 2
},
{
  question: "Q25. Quelle commande permet de tester la connectivité vers une machine distante ?",
  answers: [
    "A. ping",
    "B. mkdir",
    "C. copy"
  ],
  correct: 0
},
{
  question: "Q26. Quel protocole utilise généralement le port 80 ?",
  answers: [
    "A. FTP",
    "B. HTTP",
    "C. SMTP"
  ],
  correct: 1
},
{
  question: "Q27. Quel port est généralement utilisé par HTTPS ?",
  answers: [
    "A. 21",
    "B. 80",
    "C. 443"
  ],
  correct: 2
},
{
  question: "Q28. Quel port est généralement utilisé par SSH ?",
  answers: [
    "A. 20",
    "B. 22",
    "C. 25"
  ],
  correct: 1
},
{
  question: "Q29. Quel protocole permet une connexion distante sécurisée à un serveur ?",
  answers: [
    "A. Telnet",
    "B. SSH",
    "C. FTP"
  ],
  correct: 1
},
{
  question: "Q30. Quelle commande Cisco permet d'afficher la table de routage ?",
  answers: [
    "A. show interfaces",
    "B. show ip route",
    "C. show version"
  ],
  correct: 1
},
{
  question: "Q31. Quelle commande Cisco affiche la configuration active du routeur ?",
  answers: [
    "A. show running-config",
    "B. show ip route",
    "C. show startup"
  ],
  correct: 0
},
{
  question: "Q32. Quel protocole de routage utilise l'algorithme SPF de Dijkstra ?",
  answers: [
    "A. RIP",
    "B. OSPF",
    "C. BGP"
  ],
  correct: 1
},
{
  question: "Q33. Quel protocole de routage utilise le nombre de sauts comme métrique principale ?",
  answers: [
    "A. OSPF",
    "B. RIP",
    "C. BGP"
  ],
  correct: 1
},
{
  question: "Q34. Quelle est la distance maximale recommandée par RIP pour une route valide ?",
  answers: [
    "A. 10 sauts",
    "B. 15 sauts",
    "C. 16 sauts"
  ],
  correct: 1
},
{
  question: "Q35. Une route avec une métrique de 16 dans RIP est considérée comme :",
  answers: [
    "A. Directement connectée",
    "B. La meilleure route",
    "C. Inaccessible"
  ],
  correct: 2
},
{
  question: "Q36. Quelle commande permet de configurer une route statique IPv4 sur Cisco ?",
  answers: [
    "A. ip route",
    "B. router rip",
    "C. ip address"
  ],
  correct: 0
},
{
  question: "Q37. Quel masque correspond à /24 ?",
  answers: [
    "A. 255.0.0.0",
    "B. 255.255.0.0",
    "C. 255.255.255.0"
  ],
  correct: 2
},
{
  question: "Q38. Combien d'adresses hôtes utilisables contient normalement un réseau /24 ?",
  answers: [
    "A. 254",
    "B. 256",
    "C. 128"
  ],
  correct: 0
},
{
  question: "Q39. Quelle adresse représente généralement le broadcast d'un réseau /24 192.168.1.0 ?",
  answers: [
    "A. 192.168.1.0",
    "B. 192.168.1.254",
    "C. 192.168.1.255"
  ],
  correct: 2
},
{
  question: "Q40. Quelle adresse représente généralement l'adresse réseau de 192.168.1.25/24 ?",
  answers: [
    "A. 192.168.1.0",
    "B. 192.168.1.1",
    "C. 192.168.1.25"
  ],
  correct: 0
},
{
  question: "Q41. Quelle adresse est une adresse loopback IPv4 ?",
  answers: [
    "A. 127.0.0.1",
    "B. 192.168.1.1",
    "C. 10.0.0.1"
  ],
  correct: 0
},
{
  question: "Q42. Dans IPv6, quelle adresse est utilisée pour le loopback ?",
  answers: [
    "A. ::",
    "B. ::1",
    "C. FE80::1"
  ],
  correct: 1
},
{
  question: "Q43. Quelle adresse IPv6 représente l'adresse non spécifiée ?",
  answers: [
    "A. ::",
    "B. ::1",
    "C. FFFF::"
  ],
  correct: 0
},
{
  question: "Q44. Quel préfixe est utilisé pour les adresses IPv6 link-local ?",
  answers: [
    "A. 2000::/3",
    "B. FC00::/7",
    "C. FE80::/10"
  ],
  correct: 2
},
{
  question: "Q45. Quel préfixe IPv6 est utilisé pour les adresses multicast ?",
  answers: [
    "A. FE80::/10",
    "B. FF00::/8",
    "C. FC00::/7"
  ],
  correct: 1
},
{
  question: "Q46. Quel protocole est utilisé pour l'envoi de courrier électronique ?",
  answers: [
    "A. POP3",
    "B. IMAP",
    "C. SMTP"
  ],
  correct: 2
},
{
  question: "Q47. Quel protocole est principalement utilisé pour recevoir les emails et les télécharger ?",
  answers: [
    "A. SMTP",
    "B. POP3",
    "C. HTTP"
  ],
  correct: 1
},
{
  question: "Q48. Quel protocole permet de synchroniser les emails avec le serveur ?",
  answers: [
    "A. IMAP",
    "B. FTP",
    "C. SMTP"
  ],
  correct: 0
},
{
  question: "Q49. Quel protocole utilise généralement le port 53 ?",
  answers: [
    "A. DNS",
    "B. HTTP",
    "C. FTP"
  ],
  correct: 0
},
{
  question: "Q50. Quel protocole est utilisé pour transférer des fichiers de manière sécurisée via SSH ?",
  answers: [
    "A. TFTP",
    "B. SFTP",
    "C. HTTP"
  ],
  correct: 1
},
{
  question: "Q51. Quelle technologie est utilisée pour sécuriser les communications HTTPS ?",
  answers: [
    "A. FTP",
    "B. TLS",
    "C. DHCP"
  ],
  correct: 1
},
{
  question: "Q52. Quel code HTTP signifie « Not Found » ?",
  answers: [
    "A. 200",
    "B. 403",
    "C. 404"
  ],
  correct: 2
},
{
  question: "Q53. Quel code HTTP indique généralement une requête réussie ?",
  answers: [
    "A. 200",
    "B. 404",
    "C. 500"
  ],
  correct: 0
},
{
  question: "Q54. Quel code HTTP indique une erreur interne du serveur ?",
  answers: [
    "A. 200",
    "B. 404",
    "C. 500"
  ],
  correct: 2
},
{
  question: "Q55. Quel code HTTP correspond généralement à « Forbidden » ?",
  answers: [
    "A. 400",
    "B. 403",
    "C. 404"
  ],
  correct: 1
},
{
  question: "Q56. Quel code HTTP correspond à « Unauthorized » ?",
  answers: [
    "A. 200",
    "B. 401",
    "C. 500"
  ],
  correct: 1
},
{
  question: "Q57. Dans une application web Java, quelle technologie permet de créer des pages dynamiques côté serveur ?",
  answers: [
    "A. JSP",
    "B. CSS",
    "C. SQL"
  ],
  correct: 0
},
{
  question: "Q58. Une Servlet Java s'exécute principalement :",
  answers: [
    "A. Sur le navigateur client",
    "B. Sur le serveur",
    "C. Dans la base de données"
  ],
  correct: 1
},
{
  question: "Q59. Quelle méthode HTTP est généralement utilisée pour envoyer des données d'un formulaire ?",
  answers: [
    "A. GET",
    "B. POST",
    "C. TRACE"
  ],
  correct: 1
},
{
  question: "Q60. Quelle méthode HTTP est généralement utilisée pour récupérer une ressource ?",
  answers: [
    "A. GET",
    "B. POST",
    "C. DELETE"
  ],
  correct: 0
},
{
  question: "Q61. Quel fichier décrit notamment la configuration d'une application Web Java traditionnelle ?",
  answers: [
    "A. web.xml",
    "B. server.txt",
    "C. http.xml"
  ],
  correct: 0
},
{
  question: "Q62. Dans Tomcat, le dossier contenant généralement les applications Web déployées est :",
  answers: [
    "A. config",
    "B. lib",
    "C. webapps"
  ],
  correct: 2
},
{
  question: "Q63. Quel fichier Tomcat contient notamment la configuration des Connectors ?",
  answers: [
    "A. web.xml",
    "B. server.xml",
    "C. context.xml"
  ],
  correct: 1
},
{
  question: "Q64. Quelle méthode du cycle de vie d'une Servlet est appelée lors de son initialisation ?",
  answers: [
    "A. start()",
    "B. init()",
    "C. create()"
  ],
  correct: 1
},
{
  question: "Q65. Quelle méthode d'une Servlet traite généralement les requêtes HTTP ?",
  answers: [
    "A. service()",
    "B. main()",
    "C. run()"
  ],
  correct: 0
},
{
  question: "Q66. Quelle méthode est appelée lorsqu'une Servlet est détruite ?",
  answers: [
    "A. close()",
    "B. stop()",
    "C. destroy()"
  ],
  correct: 2
},
{
  question: "Q67. Quel langage est utilisé pour interroger une base de données relationnelle ?",
  answers: [
    "A. HTML",
    "B. SQL",
    "C. CSS"
  ],
  correct: 1
},
{
  question: "Q68. Quelle commande SQL permet de récupérer des données ?",
  answers: [
    "A. INSERT",
    "B. UPDATE",
    "C. SELECT"
  ],
  correct: 2
},
{
  question: "Q69. Quelle commande SQL permet d'ajouter une ligne dans une table ?",
  answers: [
    "A. INSERT",
    "B. SELECT",
    "C. UPDATE"
  ],
  correct: 0
},
{
  question: "Q70. Quelle commande SQL permet de modifier des données existantes ?",
  answers: [
    "A. SELECT",
    "B. UPDATE",
    "C. INSERT"
  ],
  correct: 1
},
{
  question: "Q71. Quelle commande SQL permet de supprimer des lignes ?",
  answers: [
    "A. DROP",
    "B. DELETE",
    "C. REMOVE"
  ],
  correct: 1
},
{
  question: "Q72. Quelle contrainte identifie de manière unique chaque enregistrement d'une table ?",
  answers: [
    "A. Foreign Key",
    "B. Primary Key",
    "C. NULL"
  ],
  correct: 1
},
{
  question: "Q73. Une clé étrangère (Foreign Key) sert principalement à :",
  answers: [
    "A. Chiffrer une table",
    "B. Relier deux tables",
    "C. Supprimer une base"
  ],
  correct: 1
},
{
  question: "Q74. Quelle commande SQL permet de créer une table ?",
  answers: [
    "A. MAKE TABLE",
    "B. NEW TABLE",
    "C. CREATE TABLE"
  ],
  correct: 2
},
{
  question: "Q75. Quel mot-clé SQL permet de filtrer les résultats ?",
  answers: [
    "A. WHERE",
    "B. FILTER",
    "C. CHECK"
  ],
  correct: 0
},
{
  question: "Q76. Quelle clause SQL permet de trier les résultats ?",
  answers: [
    "A. GROUP BY",
    "B. ORDER BY",
    "C. SORT BY"
  ],
  correct: 1
},
{
  question: "Q77. Quelle structure permet de répéter des instructions en programmation ?",
  answers: [
    "A. Boucle",
    "B. Variable",
    "C. Commentaire"
  ],
  correct: 0
},
{
  question: "Q78. Quel opérateur signifie généralement « égal à » dans une condition de programmation ?",
  answers: [
    "A. =",
    "B. ==",
    "C. !="
  ],
  correct: 1
},
{
  question: "Q79. Quelle structure permet de prendre une décision dans un programme ?",
  answers: [
    "A. if",
    "B. loop",
    "C. import"
  ],
  correct: 0
},
{
  question: "Q80. Qu'est-ce qu'un algorithme ?",
  answers: [
    "A. Un matériel informatique",
    "B. Une suite d'instructions permettant de résoudre un problème",
    "C. Une base de données"
  ],
  correct: 1
},
{
  question: "Q81. Quelle structure de données fonctionne selon le principe LIFO ?",
  answers: [
    "A. File",
    "B. Pile",
    "C. Tableau"
  ],
  correct: 1
},
{
  question: "Q82. Quelle structure de données fonctionne selon le principe FIFO ?",
  answers: [
    "A. Pile",
    "B. File",
    "C. Graphe"
  ],
  correct: 1
},
{
  question: "Q83. Que signifie RAM ?",
  answers: [
    "A. Read Access Memory",
    "B. Random Access Memory",
    "C. Remote Access Memory"
  ],
  correct: 1
},
{
  question: "Q84. Quelle mémoire est généralement volatile ?",
  answers: [
    "A. ROM",
    "B. RAM",
    "C. SSD"
  ],
  correct: 1
},
{
  question: "Q85. Quel composant exécute principalement les instructions d'un programme ?",
  answers: [
    "A. CPU",
    "B. Disque dur",
    "C. Clavier"
  ],
  correct: 0
},
{
  question: "Q86. Quel système d'exploitation est open source ?",
  answers: [
    "A. Linux",
    "B. Windows uniquement",
    "C. iOS uniquement"
  ],
  correct: 0
},
{
  question: "Q87. Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
  answers: [
    "A. cd",
    "B. ls",
    "C. rm"
  ],
  correct: 1
},
{
  question: "Q88. Quelle commande Linux permet de changer de répertoire ?",
  answers: [
    "A. cd",
    "B. ls",
    "C. mkdir"
  ],
  correct: 0
},
{
  question: "Q89. Quelle commande Linux permet de supprimer un fichier ?",
  answers: [
    "A. delete",
    "B. remove",
    "C. rm"
  ],
  correct: 2
},
{
  question: "Q90. Quel mécanisme protège les données en les rendant illisibles sans clé appropriée ?",
  answers: [
    "A. Compression",
    "B. Chiffrement",
    "C. Compilation"
  ],
  correct: 1
},
{
  question: "Q91. Quel est le rôle principal d'un pare-feu (Firewall) ?",
  answers: [
    "A. Augmenter la vitesse du processeur",
    "B. Filtrer et contrôler le trafic réseau",
    "C. Compresser les fichiers"
  ],
  correct: 1
},
{
  question: "Q92. Quel est le rôle principal d'un serveur DNS ?",
  answers: [
    "A. Stocker des fichiers",
    "B. Résoudre les noms de domaine en adresses IP",
    "C. Attribuer automatiquement des adresses IP"
  ],
  correct: 1
},
{
  question: "Q93. Quel protocole est utilisé pour transférer des fichiers ?",
  answers: [
    "A. FTP",
    "B. SMTP",
    "C. DNS"
  ],
  correct: 0
},
{
  question: "Q94. Quel protocole est principalement utilisé pour recevoir les emails ?",
  answers: [
    "A. SMTP",
    "B. POP3",
    "C. HTTP"
  ],
  correct: 1
},
{
  question: "Q95. Quel langage est principalement utilisé pour structurer une page Web ?",
  answers: [
    "A. CSS",
    "B. HTML",
    "C. SQL"
  ],
  correct: 1
},
{
  question: "Q96. Quel langage est principalement utilisé pour définir le style d'une page Web ?",
  answers: [
    "A. HTML",
    "B. CSS",
    "C. PHP"
  ],
  correct: 1
},
{
  question: "Q97. Quel composant stocke temporairement les données utilisées par le processeur ?",
  answers: [
    "A. RAM",
    "B. Disque dur",
    "C. Clavier"
  ],
  correct: 0
},
{
  question: "Q98. Quel type de logiciel gère les ressources matérielles d'un ordinateur ?",
  answers: [
    "A. Système d'exploitation",
    "B. Navigateur Web",
    "C. Antivirus uniquement"
  ],
  correct: 0
},
{
  question: "Q99. Quel principe décrit une structure de données où le dernier élément ajouté est le premier retiré ?",
  answers: [
    "A. FIFO",
    "B. LIFO",
    "C. HTTP"
  ],
  correct: 1
},
{
  question: "Q100. Quel principe décrit une structure de données où le premier élément ajouté est le premier retiré ?",
  answers: [
    "A. FIFO",
    "B. LIFO",
    "C. TCP"
  ],
  correct: 0
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
