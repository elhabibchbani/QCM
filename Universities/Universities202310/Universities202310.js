const questions = [

{
  question: "Q1. Un logiciel libre, quelle mention ci-dessous est fausse ?",
  answers: [
    "A. Logiciel dont le code source est disponible",
    "B. Le code source n'est pas modifiable",
    "C. Logiciel gratuit"
  ],
  correct: 1
},
{
  question: "Q2. Quel est l'ancêtre d'internet?",
  answers: [
    "A. Arpanet",
    "B. MouliNet",
    "C. Renater"
  ],
  correct: 0
},
{
  question: "Q3. Qu'est-ce que les CGI? (common gateway interfaces)",
  answers: [
    "A. Une interface qui permet de faire communiquer un programme avec un serveur web",
    "B. Un protocole de communication",
    "C. Un serveur de noms",
    "D. Une balise http"
  ],
  correct: 0
},
{
  question: "Q4. Nom du protocole sécurisé utilisé sur internet",
  answers: [
    "A. HTTP",
    "B. SMTP",
    "C. SHTP",
    "D. HTTPS"
  ],
  correct: 3
},
{
  question: "Q5. Le protocole FTP?",
  answers: [
    "A. Permet de transférer des fichiers entre une machine locale et une machine distante",
    "B. Est sécurisé",
    "C Est globalement moins efficace que le protocole HTTP pour le transfert de fichiers"
  ],
  correct: 0
},
{
  question: "Q6 Quel protocole est dit sécurisé parmi les suivants?",
  answers: [
    "A. POP",
    "B. SSL",
    "C. Telnet"
  ],
  correct: 1
},
{
  question: "Q7. Quel est le schéma HTML correct?",
  answers: [
    "A. <html><body><head></head></body></html>",
    "B <html><head></head><body></body></html>",
    "C. <html><head></head><body></html></body>"
  ],
  correct: 1
},
{
  question: "Q8. Quel langage est utilisé pour structurer une page Web ?",
  answers: [
    "A. HTML",
    "B. CSS",
    "C. SQL",
    "D. FTP"
  ],
  correct: 0
},
{
  question: "Q9. Quel langage est utilisé principalement pour définir le style d'une page Web ?",
  answers: [
    "A. HTML",
    "B. CSS",
    "C. PHP",
    "D. XML"
  ],
  correct: 1
},
{
  question: "Q10. Quel protocole est utilisé pour transférer des pages Web ?",
  answers: [
    "A. HTTP",
    "B. FTP",
    "C. SMTP",
    "D. POP3"
  ],
  correct: 0
},
{
  question: "Q11. Quel port est généralement utilisé par HTTP ?",
  answers: [
    "A. 21",
    "B. 25",
    "C. 80",
    "D. 443"
  ],
  correct: 2
},
{
  question: "Q12. Quel port est généralement utilisé par HTTPS ?",
  answers: [
    "A. 21",
    "B. 80",
    "C. 110",
    "D. 443"
  ],
  correct: 3
},
{
  question: "Q13. Quel protocole est utilisé pour envoyer des courriers électroniques ?",
  answers: [
    "A. POP3",
    "B. SMTP",
    "C. FTP",
    "D. HTTP"
  ],
  correct: 1
},
{
  question: "Q14. Quel protocole est principalement utilisé pour recevoir les courriers électroniques ?",
  answers: [
    "A. SMTP",
    "B. FTP",
    "C. POP3",
    "D. HTTP"
  ],
  correct: 2
},
{
  question: "Q15. Quel protocole permet de consulter les messages tout en les conservant sur le serveur ?",
  answers: [
    "A. IMAP",
    "B. FTP",
    "C. DNS",
    "D. DHCP"
  ],
  correct: 0
},
{
  question: "Q16. Quel protocole permet de traduire un nom de domaine en adresse IP ?",
  answers: [
    "A. DHCP",
    "B. DNS",
    "C. FTP",
    "D. SMTP"
  ],
  correct: 1
},
{
  question: "Q17. Quel protocole permet d'attribuer automatiquement une adresse IP ?",
  answers: [
    "A. DNS",
    "B. HTTP",
    "C. DHCP",
    "D. FTP"
  ],
  correct: 2
},
{
  question: "Q18. Quelle est la longueur d'une adresse IPv4 ?",
  answers: [
    "A. 16 bits",
    "B. 32 bits",
    "C. 64 bits",
    "D. 128 bits"
  ],
  correct: 1
},
{
  question: "Q19. Quelle est la longueur d'une adresse IPv6 ?",
  answers: [
    "A. 32 bits",
    "B. 64 bits",
    "C. 128 bits",
    "D. 256 bits"
  ],
  correct: 2
},
{
  question: "Q20. Quelle adresse est une adresse loopback IPv4 ?",
  answers: [
    "A. 192.168.1.1",
    "B. 10.0.0.1",
    "C. 127.0.0.1",
    "D. 172.16.0.1"
  ],
  correct: 2
},
{
  question: "Q21. Quelle adresse IPv6 correspond au loopback ?",
  answers: [
    "A. ::",
    "B. ::1",
    "C. FE80::1",
    "D. FF00::1"
  ],
  correct: 1
},
{
  question: "Q22. Quelle couche du modèle OSI utilise les adresses MAC ?",
  answers: [
    "A. Couche 1",
    "B. Couche 2",
    "C. Couche 3",
    "D. Couche 4"
  ],
  correct: 1
},
{
  question: "Q23. Quelle couche du modèle OSI est responsable du routage ?",
  answers: [
    "A. Couche 1",
    "B. Couche 2",
    "C. Couche 3",
    "D. Couche 7"
  ],
  correct: 2
},
{
  question: "Q24. Quel équipement permet de relier plusieurs réseaux différents ?",
  answers: [
    "A. Hub",
    "B. Switch",
    "C. Routeur",
    "D. Répéteur"
  ],
  correct: 2
},
{
  question: "Q25. Quel équipement fonctionne principalement au niveau de la couche 2 ?",
  answers: [
    "A. Routeur",
    "B. Switch",
    "C. Modem",
    "D. Serveur DNS"
  ],
  correct: 1
},
{
  question: "Q26. Quel protocole est utilisé par la commande ping ?",
  answers: [
    "A. TCP",
    "B. UDP",
    "C. ICMP",
    "D. FTP"
  ],
  correct: 2
},
{
  question: "Q27. Quel protocole assure une transmission fiable des données ?",
  answers: [
    "A. UDP",
    "B. TCP",
    "C. ICMP",
    "D. ARP"
  ],
  correct: 1
},
{
  question: "Q28. Quel protocole fonctionne sans établissement préalable d'une connexion ?",
  answers: [
    "A. TCP",
    "B. UDP",
    "C. FTP",
    "D. SSH"
  ],
  correct: 1
},
{
  question: "Q29. Quel protocole permet une connexion distante sécurisée ?",
  answers: [
    "A. Telnet",
    "B. FTP",
    "C. SSH",
    "D. HTTP"
  ],
  correct: 2
},
{
  question: "Q30. Quel port est généralement utilisé par SSH ?",
  answers: [
    "A. 20",
    "B. 21",
    "C. 22",
    "D. 23"
  ],
  correct: 2
},
{
  question: "Q31. Quel protocole est utilisé pour transférer des fichiers ?",
  answers: [
    "A. FTP",
    "B. SMTP",
    "C. DNS",
    "D. POP3"
  ],
  correct: 0
},
{
  question: "Q32. Quel protocole permet un transfert sécurisé de fichiers via SSH ?",
  answers: [
    "A. HTTP",
    "B. SFTP",
    "C. TFTP",
    "D. SMTP"
  ],
  correct: 1
},
{
  question: "Q33. Quel protocole est utilisé pour sécuriser les communications Web ?",
  answers: [
    "A. TLS",
    "B. FTP",
    "C. DHCP",
    "D. POP"
  ],
  correct: 0
},
{
  question: "Q34. Quel code HTTP signifie « Not Found » ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 403",
    "D. 404"
  ],
  correct: 3
},
{
  question: "Q35. Quel code HTTP indique généralement une requête réussie ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 404",
    "D. 500"
  ],
  correct: 0
},
{
  question: "Q36. Quel code HTTP correspond généralement à « Forbidden » ?",
  answers: [
    "A. 400",
    "B. 401",
    "C. 403",
    "D. 404"
  ],
  correct: 2
},
{
  question: "Q37. Quel code HTTP indique une erreur interne du serveur ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 404",
    "D. 500"
  ],
  correct: 3
},
{
  question: "Q38. Quelle méthode HTTP est généralement utilisée pour récupérer une ressource ?",
  answers: [
    "A. GET",
    "B. POST",
    "C. DELETE",
    "D. TRACE"
  ],
  correct: 0
},
{
  question: "Q39. Quelle méthode HTTP est généralement utilisée pour envoyer des données ?",
  answers: [
    "A. GET",
    "B. POST",
    "C. HEAD",
    "D. OPTIONS"
  ],
  correct: 1
},
{
  question: "Q40. Quelle technologie permet de créer des pages Web dynamiques côté serveur en Java ?",
  answers: [
    "A. JSP",
    "B. CSS",
    "C. HTML",
    "D. XML"
  ],
  correct: 0
},
{
  question: "Q41. Une Servlet Java s'exécute principalement :",
  answers: [
    "A. Sur le navigateur",
    "B. Sur le serveur",
    "C. Dans le clavier",
    "D. Dans le disque dur"
  ],
  correct: 1
},
{
  question: "Q42. Quelle méthode d'une Servlet est appelée lors de son initialisation ?",
  answers: [
    "A. start()",
    "B. init()",
    "C. create()",
    "D. begin()"
  ],
  correct: 1
},
{
  question: "Q43. Quelle méthode d'une Servlet traite généralement les requêtes ?",
  answers: [
    "A. service()",
    "B. run()",
    "C. main()",
    "D. execute()"
  ],
  correct: 0
},
{
  question: "Q44. Quelle méthode est appelée lorsqu'une Servlet est détruite ?",
  answers: [
    "A. close()",
    "B. stop()",
    "C. destroy()",
    "D. remove()"
  ],
  correct: 2
},
{
  question: "Q45. Quel fichier décrit traditionnellement la configuration d'une application Web Java ?",
  answers: [
    "A. server.xml",
    "B. web.xml",
    "C. http.xml",
    "D. app.xml"
  ],
  correct: 1
},
{
  question: "Q46. Dans Tomcat, quel dossier contient généralement les applications Web déployées ?",
  answers: [
    "A. lib",
    "B. conf",
    "C. webapps",
    "D. logs"
  ],
  correct: 2
},
{
  question: "Q47. Quel fichier Tomcat contient notamment la configuration des Connectors ?",
  answers: [
    "A. web.xml",
    "B. server.xml",
    "C. context.xml",
    "D. index.xml"
  ],
  correct: 1
},
{
  question: "Q48. Quel langage est utilisé pour interroger une base de données relationnelle ?",
  answers: [
    "A. HTML",
    "B. CSS",
    "C. SQL",
    "D. FTP"
  ],
  correct: 2
},
{
  question: "Q49. Quelle commande SQL permet de récupérer des données ?",
  answers: [
    "A. INSERT",
    "B. UPDATE",
    "C. SELECT",
    "D. DELETE"
  ],
  correct: 2
},
{
  question: "Q50. Quelle commande SQL permet d'ajouter une ligne ?",
  answers: [
    "A. INSERT",
    "B. SELECT",
    "C. UPDATE",
    "D. DELETE"
  ],
  correct: 0
},
{
  question: "Q51. Quelle commande SQL permet de modifier des données existantes ?",
  answers: [
    "A. SELECT",
    "B. UPDATE",
    "C. INSERT",
    "D. CREATE"
  ],
  correct: 1
},
{
  question: "Q52. Quelle commande SQL permet de supprimer des lignes ?",
  answers: [
    "A. REMOVE",
    "B. DROP",
    "C. DELETE",
    "D. ERASE"
  ],
  correct: 2
},
{
  question: "Q53. Quelle commande SQL permet de créer une table ?",
  answers: [
    "A. NEW TABLE",
    "B. CREATE TABLE",
    "C. MAKE TABLE",
    "D. ADD TABLE"
  ],
  correct: 1
},
{
  question: "Q54. Quelle contrainte identifie de manière unique chaque enregistrement ?",
  answers: [
    "A. Foreign Key",
    "B. Primary Key",
    "C. NULL",
    "D. CHECK"
  ],
  correct: 1
},
{
  question: "Q55. Une clé étrangère sert principalement à :",
  answers: [
    "A. Chiffrer une table",
    "B. Relier des tables",
    "C. Supprimer une base",
    "D. Trier les données"
  ],
  correct: 1
},
{
  question: "Q56. Quel mot-clé SQL permet de filtrer les résultats ?",
  answers: [
    "A. WHERE",
    "B. FILTER",
    "C. CHECK",
    "D. HAVING"
  ],
  correct: 0
},
{
  question: "Q57. Quelle clause SQL permet de trier les résultats ?",
  answers: [
    "A. GROUP BY",
    "B. ORDER BY",
    "C. SORT BY",
    "D. ORDER"
  ],
  correct: 1
},
{
  question: "Q58. Quelle fonction SQL permet de compter le nombre de lignes ?",
  answers: [
    "A. SUM()",
    "B. AVG()",
    "C. COUNT()",
    "D. MAX()"
  ],
  correct: 2
},
{
  question: "Q59. Quelle fonction SQL permet de calculer une moyenne ?",
  answers: [
    "A. AVG()",
    "B. SUM()",
    "C. COUNT()",
    "D. MIN()"
  ],
  correct: 0
},
{
  question: "Q60. Quelle clause permet de regrouper les résultats SQL ?",
  answers: [
    "A. ORDER BY",
    "B. GROUP BY",
    "C. SORT BY",
    "D. GROUP"
  ],
  correct: 1
},
{
  question: "Q61. Quelle structure permet de répéter des instructions en programmation ?",
  answers: [
    "A. Variable",
    "B. Boucle",
    "C. Commentaire",
    "D. Fonction"
  ],
  correct: 1
},
{
  question: "Q62. Quelle structure permet de prendre une décision dans un programme ?",
  answers: [
    "A. if",
    "B. loop",
    "C. import",
    "D. print"
  ],
  correct: 0
},
{
  question: "Q63. Qu'est-ce qu'un algorithme ?",
  answers: [
    "A. Un matériel informatique",
    "B. Une suite d'instructions permettant de résoudre un problème",
    "C. Un système d'exploitation",
    "D. Une base de données"
  ],
  correct: 1
},
{
  question: "Q64. Quelle structure de données fonctionne selon le principe LIFO ?",
  answers: [
    "A. File",
    "B. Pile",
    "C. Tableau",
    "D. Graphe"
  ],
  correct: 1
},
{
  question: "Q65. Quelle structure de données fonctionne selon le principe FIFO ?",
  answers: [
    "A. Pile",
    "B. File",
    "C. Arbre",
    "D. Graphe"
  ],
  correct: 1
},
{
  question: "Q66. Que signifie RAM ?",
  answers: [
    "A. Read Access Memory",
    "B. Random Access Memory",
    "C. Remote Access Memory",
    "D. Rapid Access Module"
  ],
  correct: 1
},
{
  question: "Q67. Quelle mémoire est généralement volatile ?",
  answers: [
    "A. ROM",
    "B. RAM",
    "C. SSD",
    "D. DVD"
  ],
  correct: 1
},
{
  question: "Q68. Quel composant exécute principalement les instructions d'un programme ?",
  answers: [
    "A. CPU",
    "B. Disque dur",
    "C. Clavier",
    "D. Écran"
  ],
  correct: 0
},
{
  question: "Q69. Quel système d'exploitation est open source ?",
  answers: [
    "A. Linux",
    "B. Windows uniquement",
    "C. iOS uniquement",
    "D. MS-DOS uniquement"
  ],
  correct: 0
},
{
  question: "Q70. Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
  answers: [
    "A. cd",
    "B. ls",
    "C. rm",
    "D. pwd"
  ],
  correct: 1
},
{
  question: "Q71. Quelle commande Linux permet de changer de répertoire ?",
  answers: [
    "A. cd",
    "B. ls",
    "C. mkdir",
    "D. pwd"
  ],
  correct: 0
},
{
  question: "Q72. Quelle commande Linux permet de supprimer un fichier ?",
  answers: [
    "A. delete",
    "B. remove",
    "C. rm",
    "D. erase"
  ],
  correct: 2
},
{
  question: "Q73. Quelle commande Linux permet de créer un répertoire ?",
  answers: [
    "A. mkdir",
    "B. createdir",
    "C. newdir",
    "D. makedir"
  ],
  correct: 0
},
{
  question: "Q74. Quelle commande Linux affiche le répertoire courant ?",
  answers: [
    "A. ls",
    "B. cd",
    "C. pwd",
    "D. dir"
  ],
  correct: 2
},
{
  question: "Q75. Quel mécanisme protège les données en les rendant illisibles sans clé appropriée ?",
  answers: [
    "A. Compression",
    "B. Chiffrement",
    "C. Compilation",
    "D. Fragmentation"
  ],
  correct: 1
},
{
  question: "Q76. Quel est le rôle principal d'un pare-feu ?",
  answers: [
    "A. Augmenter la vitesse du processeur",
    "B. Filtrer et contrôler le trafic réseau",
    "C. Compresser les fichiers",
    "D. Stocker les données"
  ],
  correct: 1
},
{
  question: "Q77. Quel est le rôle principal d'un serveur DNS ?",
  answers: [
    "A. Stocker des fichiers",
    "B. Résoudre les noms de domaine en adresses IP",
    "C. Attribuer automatiquement des adresses IP",
    "D. Envoyer des emails"
  ],
  correct: 1
},
{
  question: "Q78. Quel équipement utilise principalement les adresses MAC pour transmettre les trames ?",
  answers: [
    "A. Routeur",
    "B. Switch",
    "C. Serveur DNS",
    "D. Modem"
  ],
  correct: 1
},
{
  question: "Q79. Quel protocole de routage utilise l'algorithme SPF de Dijkstra ?",
  answers: [
    "A. RIP",
    "B. OSPF",
    "C. FTP",
    "D. SMTP"
  ],
  correct: 1
},
{
  question: "Q80. Quel protocole utilise principalement le nombre de sauts comme métrique ?",
  answers: [
    "A. OSPF",
    "B. RIP",
    "C. BGP",
    "D. HTTP"
  ],
  correct: 1
},
{
  question: "Q81. Quelle commande Cisco permet d'afficher la table de routage ?",
  answers: [
    "A. show interfaces",
    "B. show ip route",
    "C. show version",
    "D. show running-config"
  ],
  correct: 1
},
{
  question: "Q82. Quelle commande Cisco affiche la configuration active du routeur ?",
  answers: [
    "A. show running-config",
    "B. show ip route",
    "C. show startup",
    "D. show interfaces"
  ],
  correct: 0
},
{
  question: "Q83. Quelle commande permet de configurer une route statique IPv4 sur Cisco ?",
  answers: [
    "A. ip route",
    "B. router rip",
    "C. ip address",
    "D. route static"
  ],
  correct: 0
},
{
  question: "Q84. Quel masque correspond au préfixe /24 ?",
  answers: [
    "A. 255.0.0.0",
    "B. 255.255.0.0",
    "C. 255.255.255.0",
    "D. 255.255.255.255"
  ],
  correct: 2
},
{
  question: "Q85. Combien d'adresses hôtes utilisables contient normalement un réseau /24 ?",
  answers: [
    "A. 254",
    "B. 256",
    "C. 128",
    "D. 512"
  ],
  correct: 0
},
{
  question: "Q86. Quelle adresse représente généralement le broadcast de 192.168.1.0/24 ?",
  answers: [
    "A. 192.168.1.0",
    "B. 192.168.1.1",
    "C. 192.168.1.254",
    "D. 192.168.1.255"
  ],
  correct: 3
},
{
  question: "Q87. Quelle adresse représente généralement le réseau de 192.168.1.25/24 ?",
  answers: [
    "A. 192.168.1.0",
    "B. 192.168.1.1",
    "C. 192.168.1.25",
    "D. 192.168.1.255"
  ],
  correct: 0
},
{
  question: "Q88. Quelle adresse IPv6 représente l'adresse non spécifiée ?",
  answers: [
    "A. ::",
    "B. ::1",
    "C. FE80::1",
    "D. FF00::1"
  ],
  correct: 0
},
{
  question: "Q89. Quel préfixe est utilisé pour les adresses IPv6 link-local ?",
  answers: [
    "A. 2000::/3",
    "B. FC00::/7",
    "C. FE80::/10",
    "D. FF00::/8"
  ],
  correct: 2
},
{
  question: "Q90. Quel préfixe IPv6 est utilisé pour les adresses multicast ?",
  answers: [
    "A. FE80::/10",
    "B. FF00::/8",
    "C. FC00::/7",
    "D. 2000::/3"
  ],
  correct: 1
},
{
  question: "Q91. Quel est le rôle d'un système d'exploitation ?",
  answers: [
    "A. Gérer les ressources matérielles et logicielles",
    "B. Créer uniquement des pages Web",
    "C. Envoyer uniquement des emails",
    "D. Remplacer le processeur"
  ],
  correct: 0
},
{
  question: "Q92. Qu'est-ce qu'un processus en informatique ?",
  answers: [
    "A. Un programme en cours d'exécution",
    "B. Un fichier compressé",
    "C. Une unité de stockage",
    "D. Un câble réseau"
  ],
  correct: 0
},
{
  question: "Q93. Qu'est-ce qu'une adresse IP privée ?",
  answers: [
    "A. Une adresse réservée aux sites Web",
    "B. Une adresse utilisée sur un réseau local",
    "C. Une adresse utilisée uniquement par les serveurs DNS",
    "D. Une adresse publique obligatoire"
  ],
  correct: 1
},
{
  question: "Q94. Quel est le rôle d'un routeur ?",
  answers: [
    "A. Relier et acheminer le trafic entre différents réseaux",
    "B. Stocker uniquement des fichiers",
    "C. Afficher des pages Web",
    "D. Remplacer une carte réseau"
  ],
  correct: 0
},
{
  question: "Q95. Quelle technologie est utilisée pour sécuriser HTTPS ?",
  answers: [
    "A. FTP",
    "B. TLS",
    "C. DHCP",
    "D. POP3"
  ],
  correct: 1
},
{
  question: "Q96. Quel langage est principalement utilisé pour créer la structure d'une page Web ?",
  answers: [
    "A. CSS",
    "B. HTML",
    "C. SQL",
    "D. SMTP"
  ],
  correct: 1
},
{
  question: "Q97. Quel langage est principalement utilisé pour définir la présentation d'une page Web ?",
  answers: [
    "A. HTML",
    "B. CSS",
    "C. FTP",
    "D. DNS"
  ],
  correct: 1
},
{
  question: "Q98. Quel protocole est principalement utilisé pour l'envoi de courrier électronique ?",
  answers: [
    "A. POP3",
    "B. IMAP",
    "C. SMTP",
    "D. FTP"
  ],
  correct: 2
},
{
  question: "Q99. Quel principe décrit une structure où le dernier élément ajouté est le premier retiré ?",
  answers: [
    "A. FIFO",
    "B. LIFO",
    "C. TCP",
    "D. HTTP"
  ],
  correct: 1
},
{
  question: "Q100. Quel principe décrit une structure où le premier élément ajouté est le premier retiré ?",
  answers: [
    "A. FIFO",
    "B. LIFO",
    "C. TCP",
    "D. UDP"
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
