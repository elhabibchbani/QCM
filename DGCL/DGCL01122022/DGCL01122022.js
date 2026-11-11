const questions = [
  {
    question:
      "1. Quel composant n'est pas absolument nécessaire au fonctionnement d'un ordinateur ?",
    answers: [
      "A. Le processeur",
      "B. L'écran",
      "C. La mémoire RAM",
      "D. La carte mère",
    ],
    correct: 1,
  },
  {
    question:
      "2. Lequel de ces langages nécessite généralement un compilateur pour être exécuté ?",
    answers: ["A. C++", "B. HTML", "C. PHP", "D. SQL"],
    correct: 0,
  },
  {
    question:
      "3. Lequel de ces protocoles ne chiffre pas les données lors de leur transmission ?",
    answers: ["A. HTTPS", "B. SSH", "C. HTTP", "D. FTPS"],
    correct: 2,
  },
  {
    question:
      "4. Quelle commande permet d'afficher la configuration IP d'un ordinateur sous Windows ?",
    answers: ["A. ping", "B. ipconfig", "C. tracert", "D. netstat"],
    correct: 1,
  },
  {
    question:
      "5. Quelle structure de données fonctionne selon le principe FIFO ?",
    answers: [
      "A. La pile (Stack)",
      "B. La file (Queue)",
      "C. L'arbre binaire",
      "D. La liste chaînée",
    ],
    correct: 1,
  },
  {
    question:
      "6. Lequel de ces systèmes d'exploitation est une distribution GNU/Linux ?",
    answers: ["A. FreeBSD", "B. Ubuntu", "C. Windows", "D. macOS"],
    correct: 1,
  },
  {
    question: "7. Quel est le numéro de port par défaut du protocole POP3 ?",
    answers: ["A. 25", "B. 110", "C. 80", "D. 43"],
    correct: 1,
  },
  {
    question:
      "8. Quel serveur est principalement utilisé pour héberger un site web ?",
    answers: [
      "A. Serveur mail",
      "B. Serveur de base de données",
      "C. Serveur web",
      "D. Serveur DNS",
    ],
    correct: 2,
  },
  {
    question: "9. Comment appelle-t-on également un serveur proxy ?",
    answers: [
      "A. Serveur de fichiers",
      "B. Serveur mandataire",
      "C. Serveur DNS",
      "D. Serveur de messagerie",
    ],
    correct: 1,
  },
  {
    question:
      "10. Quel composant du processeur effectue les opérations arithmétiques et logiques ?",
    answers: [
      "A. Unité de contrôle",
      "B. ALU (Unité Arithmétique et Logique)",
      "C. Registre",
      "D. Mémoire cache",
    ],
    correct: 1,
  },
  {
    question: "11. Quel est le rôle principal d'un pare-feu (Firewall) ?",
    answers: [
      "A. Accélérer la connexion Internet",
      "B. Bloquer les accès réseau non autorisés",
      "C. Stocker les fichiers",
      "D. Attribuer des adresses IP",
    ],
    correct: 1,
  },
  {
    question:
      "12. Quel système de fichiers est principalement utilisé par Windows pour formater les disques durs ?",
    answers: ["A. ext4", "B. NTFS", "C. APFS", "D. HFS+"],
    correct: 1,
  },
  {
    question:
      "13. Quelle affirmation décrit correctement la différence entre IPv4 et IPv6 ?",
    answers: [
      "A. IPv4 utilise 32 bits et IPv6 utilise 128 bits.",
      "B. IPv4 utilise 128 bits et IPv6 utilise 32 bits.",
      "C. Les deux utilisent 32 bits.",
      "D. Les deux utilisent 128 bits.",
    ],
    correct: 0,
  },
  {
    question:
      "14. Quelle commande permet de créer un nouveau dossier sous Windows (CMD) ?",
    answers: ["A. mkdir", "B. ping", "C. ipconfig", "D. dir"],
    correct: 0,
  },
  {
    question:
      "15. Quel système de fichiers est utilisé principalement par les distributions Linux modernes ?",
    answers: ["A. NTFS", "B. FAT32", "C. ext4", "D. APFS"],
    correct: 2,
  },
  {
    question:
      "16. Quelle commande permet de créer un utilisateur User1 et un groupe Group1 sous Linux ?",
    answers: [
      "A. useradd User1 && groupadd Group1",
      "B. mkdir User1 && mkdir Group1",
      "C. passwd User1 && passwd Group1",
      "D. chmod User1 && chmod Group1",
    ],
    correct: 0,
  },
  {
    question:
      "17. Quel est le rôle de la couche liaison de données dans le modèle TCP/IP ?",
    answers: [
      "A. Assurer le routage des paquets entre les réseaux.",
      "B. Assurer la transmission des données sur le réseau local.",
      "C. Gérer les applications et les services web.",
      "D. Assurer le chiffrement des données.",
    ],
    correct: 1,
  },
  {
    question: "18. Qu'est-ce qu'un RODC (Read-Only Domain Controller) ?",
    answers: [
      "A. Un serveur DNS.",
      "B. Un contrôleur de domaine en lecture seule.",
      "C. Un serveur de messagerie.",
      "D. Un système de sauvegarde.",
    ],
    correct: 1,
  },
  {
    question:
      "19. Quel utilitaire permet de tester et de diagnostiquer un serveur DNS ?",
    answers: ["A. ping", "B. ipconfig", "C. nslookup", "D. netstat"],
    correct: 2,
  },
  {
    question: "20. Que signifie l'acronyme TCP/IP ?",
    answers: [
      "A. Transmission Control Protocol / Internet Protocol",
      "B. Transfer Communication Program / Internal Process",
      "C. Technical Control Protocol / Internet Program",
      "D. Transmission Computer Process / Information Protocol",
    ],
    correct: 0,
  },
  {
    question:
      "21. Quel protocole permet d'attribuer automatiquement une adresse IP à un ordinateur ?",
    answers: ["A. DNS", "B. DHCP", "C. FTP", "D. HTTP"],
    correct: 1,
  },
  {
    question:
      "22. Quel protocole permet de traduire un nom de domaine en adresse IP ?",
    answers: ["A. DNS", "B. DHCP", "C. SMTP", "D. SSH"],
    correct: 0,
  },
  {
    question: "23. Quel est le port par défaut du protocole HTTP ?",
    answers: ["A. 21", "B. 25", "C. 80", "D. 443"],
    correct: 2,
  },
  {
    question: "24. Quel est le port par défaut du protocole HTTPS ?",
    answers: ["A. 110", "B. 443", "C. 53", "D. 22"],
    correct: 1,
  },
  {
    question:
      "25. Quel protocole est principalement utilisé pour envoyer des e-mails ?",
    answers: ["A. POP3", "B. IMAP", "C. SMTP", "D. FTP"],
    correct: 2,
  },
  {
    question: "26. Quel est le port par défaut du protocole FTP de contrôle ?",
    answers: ["A. 21", "B. 22", "C. 23", "D. 80"],
    correct: 0,
  },
  {
    question:
      "27. Quel protocole permet une connexion distante sécurisée à un serveur ?",
    answers: ["A. Telnet", "B. SSH", "C. FTP", "D. HTTP"],
    correct: 1,
  },
  {
    question: "28. Quel est le port par défaut du protocole SSH ?",
    answers: ["A. 21", "B. 23", "C. 22", "D. 25"],
    correct: 2,
  },
  {
    question:
      "29. Quelle commande permet de vérifier la connectivité entre deux machines ?",
    answers: ["A. mkdir", "B. ping", "C. cd", "D. copy"],
    correct: 1,
  },
  {
    question:
      "30. Quelle commande Windows affiche la configuration IP d'un ordinateur ?",
    answers: ["A. ipconfig", "B. ping", "C. format", "D. tasklist"],
    correct: 0,
  },
  {
    question:
      "31. Quel équipement permet de connecter plusieurs ordinateurs dans un réseau local ?",
    answers: ["A. Scanner", "B. Switch", "C. Imprimante", "D. Modem USB"],
    correct: 1,
  },
  {
    question:
      "32. Quel équipement permet de relier plusieurs réseaux différents ?",
    answers: ["A. Switch", "B. Hub", "C. Routeur", "D. Répéteur"],
    correct: 2,
  },
  {
    question:
      "33. Quelle adresse identifie une interface réseau au niveau de la couche liaison ?",
    answers: [
      "A. Adresse IP",
      "B. Adresse MAC",
      "C. Adresse DNS",
      "D. Adresse URL",
    ],
    correct: 1,
  },
  {
    question: "34. Combien de bits contient une adresse IPv4 ?",
    answers: ["A. 16 bits", "B. 32 bits", "C. 64 bits", "D. 128 bits"],
    correct: 1,
  },
  {
    question: "35. Quelle est l'adresse IP de bouclage (Loopback) en IPv4 ?",
    answers: ["A. 192.168.1.1", "B. 10.0.0.1", "C. 127.0.0.1", "D. 172.16.0.1"],
    correct: 2,
  },
  {
    question: "36. Quel masque de sous-réseau correspond à un réseau /24 ?",
    answers: [
      "A. 255.0.0.0",
      "B. 255.255.0.0",
      "C. 255.255.255.0",
      "D. 255.255.255.255",
    ],
    correct: 2,
  },
  {
    question:
      "37. Quel protocole est utilisé pour transférer des fichiers entre deux machines ?",
    answers: ["A. FTP", "B. DNS", "C. DHCP", "D. SMTP"],
    correct: 0,
  },
  {
    question:
      "38. Quel protocole permet de consulter les e-mails directement sur le serveur ?",
    answers: ["A. FTP", "B. IMAP", "C. HTTP", "D. ARP"],
    correct: 1,
  },
  {
    question:
      "39. Quel protocole permet d'associer une adresse IP à une adresse MAC sur un réseau IPv4 local ?",
    answers: ["A. ARP", "B. DNS", "C. SMTP", "D. HTTPS"],
    correct: 0,
  },
  {
    question: "40. Quel est le rôle principal d'un pare-feu (Firewall) ?",
    answers: [
      "A. Augmenter la mémoire RAM",
      "B. Filtrer le trafic réseau",
      "C. Créer des fichiers",
      "D. Installer des pilotes",
    ],
    correct: 1,
  },
  {
    question: "41. Quel système d'exploitation est développé par Microsoft ?",
    answers: ["A. Ubuntu", "B. Debian", "C. Windows", "D. Fedora"],
    correct: 2,
  },
  {
    question:
      "42. Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
    answers: ["A. ls", "B. pwd", "C. cd", "D. rm"],
    correct: 0,
  },
  {
    question:
      "43. Quelle commande Linux permet de connaître le répertoire courant ?",
    answers: ["A. mkdir", "B. pwd", "C. touch", "D. cat"],
    correct: 1,
  },
  {
    question: "44. Quelle commande Linux permet de créer un répertoire ?",
    answers: ["A. rm", "B. ls", "C. mkdir", "D. chmod"],
    correct: 2,
  },
  {
    question: "45. Quelle commande Linux permet de supprimer un fichier ?",
    answers: ["A. rm", "B. cp", "C. mv", "D. pwd"],
    correct: 0,
  },
  {
    question: "46. Quelle commande Linux permet de copier un fichier ?",
    answers: ["A. mv", "B. cp", "C. rm", "D. ls"],
    correct: 1,
  },
  {
    question:
      "47. Quelle commande Linux permet de modifier les permissions d'un fichier ?",
    answers: ["A. chown", "B. passwd", "C. chmod", "D. useradd"],
    correct: 2,
  },
  {
    question:
      "48. Quelle commande permet de changer le propriétaire d'un fichier sous Linux ?",
    answers: ["A. chmod", "B. chown", "C. mkdir", "D. grep"],
    correct: 1,
  },
  {
    question:
      "49. Quelle commande Linux permet d'afficher le contenu d'un fichier texte ?",
    answers: ["A. cat", "B. cd", "C. clear", "D. mkdir"],
    correct: 0,
  },
  {
    question:
      "50. Quelle commande permet de rechercher du texte dans un fichier sous Linux ?",
    answers: ["A. pwd", "B. grep", "C. mv", "D. touch"],
    correct: 1,
  },
  {
    question:
      "51. Quelle commande Linux permet de changer le mot de passe d'un utilisateur ?",
    answers: ["A. passwd", "B. userdel", "C. groupadd", "D. chmod"],
    correct: 0,
  },
  {
    question:
      "52. Quel symbole représente généralement le répertoire personnel de l'utilisateur sous Linux ?",
    answers: ["A. /", "B. ~", "C. #", "D. *"],
    correct: 1,
  },
  {
    question:
      "53. Quelle commande permet d'afficher les processus en cours sous Linux ?",
    answers: ["A. ps", "B. mkdir", "C. cp", "D. touch"],
    correct: 0,
  },
  {
    question:
      "54. Quelle commande permet d'obtenir les privilèges administrateur sous Linux ?",
    answers: ["A. echo", "B. sudo", "C. ls", "D. pwd"],
    correct: 1,
  },
  {
    question:
      "55. Quel fichier Linux contient généralement les informations des comptes utilisateurs ?",
    answers: [
      "A. /etc/passwd",
      "B. /etc/hosts",
      "C. /etc/fstab",
      "D. /etc/hostname",
    ],
    correct: 0,
  },
  {
    question:
      "56. Quel service Windows permet de gérer les utilisateurs et les ordinateurs dans un domaine ?",
    answers: [
      "A. IIS",
      "B. Active Directory",
      "C. DHCP",
      "D. Windows Defender",
    ],
    correct: 1,
  },
  {
    question:
      "57. Quel serveur Windows permet de gérer les adresses IP automatiquement ?",
    answers: ["A. DNS", "B. IIS", "C. DHCP", "D. FTP"],
    correct: 2,
  },
  {
    question: "58. Quel service Windows permet d'héberger des sites web ?",
    answers: ["A. IIS", "B. Active Directory", "C. DHCP", "D. Print Spooler"],
    correct: 0,
  },
  {
    question:
      "59. Quel outil Windows permet de gérer les disques et les partitions ?",
    answers: [
      "A. Gestionnaire des tâches",
      "B. Gestion des disques",
      "C. Bloc-notes",
      "D. Calculatrice",
    ],
    correct: 1,
  },
  {
    question:
      "60. Quelle combinaison de touches permet d'ouvrir le Gestionnaire des tâches sous Windows ?",
    answers: [
      "A. Ctrl + C",
      "B. Ctrl + V",
      "C. Ctrl + Maj + Échap",
      "D. Alt + F4",
    ],
    correct: 2,
  },
  {
    question:
      "61. Quel système de fichiers est couramment utilisé par Windows ?",
    answers: ["A. NTFS", "B. EXT4", "C. APFS", "D. XFS"],
    correct: 0,
  },
  {
    question: "62. Quel système de fichiers est couramment utilisé par Linux ?",
    answers: ["A. FAT32", "B. EXT4", "C. NTFS", "D. exFAT"],
    correct: 1,
  },
  {
    question:
      "63. Quel outil Windows permet de vérifier et réparer certaines erreurs du disque ?",
    answers: ["A. chkdsk", "B. ipconfig", "C. ping", "D. nslookup"],
    correct: 0,
  },
  {
    question:
      "64. Quelle commande Windows permet d'afficher la liste des processus en cours ?",
    answers: ["A. dir", "B. tasklist", "C. cd", "D. format"],
    correct: 1,
  },
  {
    question:
      "65. Quel protocole permet de prendre le contrôle à distance d'un ordinateur Windows ?",
    answers: ["A. SMTP", "B. POP3", "C. RDP", "D. DNS"],
    correct: 2,
  },
  {
    question:
      "66. Quel composant informatique exécute les instructions des programmes ?",
    answers: ["A. Processeur", "B. Écran", "C. Clavier", "D. Imprimante"],
    correct: 0,
  },
  {
    question:
      "67. Quelle mémoire perd son contenu lorsque l'ordinateur est éteint ?",
    answers: ["A. ROM", "B. RAM", "C. SSD", "D. Disque dur"],
    correct: 1,
  },
  {
    question:
      "68. Quel composant permet de stocker les données de manière permanente ?",
    answers: ["A. RAM", "B. Cache", "C. SSD", "D. Registre"],
    correct: 2,
  },
  {
    question: "69. Quel composant est responsable du traitement graphique ?",
    answers: ["A. GPU", "B. RAM", "C. BIOS", "D. HDD"],
    correct: 0,
  },
  {
    question:
      "70. Quelle méthode JavaScript permet de sélectionner un élément HTML à partir de son identifiant (ID) ?",
    answers: [
      "A. document.querySelectorAll()",
      "B. document.getElementById()",
      "C. document.createElement()",
      "D. document.write()",
    ],
    correct: 1,
  },
  {
    question:
      "71. Quelle méthode JavaScript permet d'ajouter un élément à la fin d'un tableau ?",
    answers: ["A. pop()", "B. shift()", "C. push()", "D. unshift()"],
    correct: 2,
  },
  {
    question: "72. Quelle unité mesure la fréquence d'un processeur ?",
    answers: ["A. Octet", "B. Hertz", "C. Pixel", "D. Volt"],
    correct: 1,
  },
  {
    question:
      "73. Quelle unité mesure la capacité de stockage d'un disque dur ?",
    answers: ["A. Hertz", "B. Watt", "C. Octet", "D. Volt"],
    correct: 2,
  },
  {
    question:
      "74. Quel type de disque est généralement plus rapide : SSD ou HDD ?",
    answers: ["A. SSD", "B. HDD", "C. CD-ROM", "D. DVD"],
    correct: 0,
  },
  {
    question:
      "75. Quelle méthode JavaScript permet de convertir une chaîne JSON en objet JavaScript ?",
    answers: [
      "A. JSON.stringify()",
      "B. JSON.parse()",
      "C. JSON.convert()",
      "D. JSON.object()",
    ],
    correct: 1,
  },
  {
    question:
      "76. Quelle méthode JavaScript permet de supprimer le dernier élément d'un tableau ?",
    answers: ["A. shift()", "B. pop()", "C. push()", "D. unshift()"],
    correct: 1,
  },
  {
    question: "77. Quelle est la fonction principale d'un antivirus ?",
    answers: [
      "A. Détecter et supprimer les logiciels malveillants",
      "B. Augmenter la capacité du disque",
      "C. Améliorer la résolution de l'écran",
      "D. Créer des comptes utilisateurs",
    ],
    correct: 0,
  },
  {
    question:
      "78. Comment appelle-t-on un logiciel malveillant qui se reproduit et se propage automatiquement ?",
    answers: [
      "A. Antivirus",
      "B. Ver informatique",
      "C. Navigateur",
      "D. Pare-feu",
    ],
    correct: 1,
  },
  {
    question: "79. Qu'est-ce que le phishing (hameçonnage) ?",
    answers: [
      "A. Une méthode de sauvegarde",
      "B. Une technique de compression",
      "C. Une tentative de vol d'informations par tromperie",
      "D. Un protocole réseau",
    ],
    correct: 2,
  },
  {
    question:
      "80. Quel mécanisme permet de vérifier l'identité d'un utilisateur ?",
    answers: [
      "A. Authentification",
      "B. Compression",
      "C. Défragmentation",
      "D. Formatage",
    ],
    correct: 0,
  },
  {
    question: "81. Quel est le rôle principal du chiffrement des données ?",
    answers: [
      "A. Augmenter la vitesse du réseau",
      "B. Protéger la confidentialité des informations",
      "C. Supprimer les fichiers",
      "D. Améliorer la qualité d'image",
    ],
    correct: 1,
  },
  {
    question:
      "82. Quelle pratique permet de protéger efficacement un compte utilisateur ?",
    answers: [
      "A. Utiliser le même mot de passe partout",
      "B. Partager son mot de passe",
      "C. Activer l'authentification multifacteur",
      "D. Désactiver les mises à jour",
    ],
    correct: 2,
  },
  {
    question:
      "83. Quel est l'objectif principal d'une sauvegarde informatique ?",
    answers: [
      "A. Récupérer les données en cas de perte",
      "B. Accélérer le processeur",
      "C. Augmenter la mémoire RAM",
      "D. Modifier les adresses IP",
    ],
    correct: 0,
  },
  {
    question:
      "84. Quel langage est principalement utilisé pour ajouter de l'interactivité à une page web ?",
    answers: ["A. HTML", "B. CSS", "C. JavaScript", "D. SQL"],
    correct: 2,
  },
  {
    question:
      "85. Quelle instruction JavaScript permet de répéter un bloc de code tant qu'une condition est vraie ?",
    answers: ["A. if", "B. while", "C. switch", "D. return"],
    correct: 1,
  },
  {
    question:
      "86. Quel langage est principalement utilisé pour structurer les pages web ?",
    answers: ["A. HTML", "B. SQL", "C. Python", "D. C++"],
    correct: 0,
  },
  {
    question:
      "87. Quel langage est utilisé principalement pour styliser les pages web ?",
    answers: ["A. PHP", "B. CSS", "C. SQL", "D. Java"],
    correct: 1,
  },
  {
    question:
      "88. Quel langage permet d'ajouter de l'interactivité aux pages web ?",
    answers: ["A. HTML", "B. CSS", "C. JavaScript", "D. SQL"],
    correct: 2,
  },
  {
    question:
      "89. Quel langage est principalement utilisé pour interroger une base de données relationnelle ?",
    answers: ["A. SQL", "B. HTML", "C. CSS", "D. XML"],
    correct: 0,
  },
  {
    question:
      "90. Quelle commande SQL permet de récupérer des données dans une table ?",
    answers: ["A. DELETE", "B. SELECT", "C. UPDATE", "D. DROP"],
    correct: 1,
  },
  {
    question:
      "91. Quelle commande SQL permet d'ajouter un nouvel enregistrement dans une table ?",
    answers: ["A. SELECT", "B. DELETE", "C. INSERT INTO", "D. DROP"],
    correct: 2,
  },
  {
    question:
      "92. Quelle commande SQL permet de modifier des données existantes ?",
    answers: ["A. UPDATE", "B. INSERT", "C. CREATE", "D. SELECT"],
    correct: 0,
  },
  {
    question:
      "93. Quelle commande SQL permet de supprimer des enregistrements d'une table ?",
    answers: ["A. ALTER", "B. DELETE", "C. SELECT", "D. INSERT"],
    correct: 1,
  },
  {
    question:
      "94. Quel est le rôle d'une clé primaire dans une base de données ?",
    answers: [
      "A. Supprimer une table",
      "B. Trier les données",
      "C. Identifier chaque enregistrement de manière unique",
      "D. Chiffrer les données",
    ],
    correct: 2,
  },
  {
    question:
      "95. Quel est le rôle d'une clé étrangère dans une base de données ?",
    answers: [
      "A. Relier deux tables",
      "B. Supprimer automatiquement la base",
      "C. Créer un mot de passe",
      "D. Trier les colonnes",
    ],
    correct: 0,
  },
  {
    question:
      "96. Quelle fonction SQL permet de compter le nombre d'enregistrements ?",
    answers: ["A. SUM()", "B. COUNT()", "C. AVG()", "D. MAX()"],
    correct: 1,
  },
  {
    question:
      "97. Quelle clause SQL permet de filtrer les résultats d'une requête ?",
    answers: ["A. ORDER BY", "B. GROUP BY", "C. WHERE", "D. SELECT"],
    correct: 2,
  },
  {
    question:
      "98. Quelle clause SQL permet de trier les résultats d'une requête ?",
    answers: ["A. ORDER BY", "B. WHERE", "C. INSERT", "D. JOIN"],
    correct: 0,
  },
  {
    question:
      "99. Quelle opération SQL permet de relier des données provenant de plusieurs tables ?",
    answers: ["A. DELETE", "B. JOIN", "C. DROP", "D. TRUNCATE"],
    correct: 1,
  },
  {
    question:
      "100. Quel logiciel est principalement utilisé pour créer des feuilles de calcul ?",
    answers: [
      "A. Microsoft Word",
      "B. Microsoft PowerPoint",
      "C. Microsoft Excel",
      "D. Microsoft Access",
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
