const questions = [
{
  question: "Q1. Qu'est-ce qu'une entrée de route statique lorsque l'interface sortante n'est pas disponible ?",
  answers: [
    "A. Le routeur demande aux voisins une route de remplacement.",
    "B. Le routeur redirige la route statique pour compenser la perte de l'unité du saut suivant.",
    "C. La route est supprimée de la table.",
    "D. La route est conservée dans la table car elle a été définie en tant que route statique."
  ],
  correct: 2
},
{
  question: "Q2. Quelle adresse change lorsqu'un paquet traverse plusieurs sauts Ethernet de couche 3 jusqu'à sa destination finale ?",
  answers: [
    "A. Port de destination",
    "B. Adresse IP de destination",
    "C. Adresse de couche 2 source",
    "D. Adresse IP source"
  ],
  correct: 2
},
{
  question: "Q3. Quel énoncé est correct à propos des adresses IPv6 ?",
  answers: [
    "A. Les adresses IPv6 sont de longueur 64 bits.",
    "B. Les adresses IPv6 sont de longueur 32 bits.",
    "C. Les adresses IPv6 sont représentées par des chiffres hexadécimaux."
  ],
  correct: 2
},
{
  question: "Q4. Un technicien réseau implémente des protocoles de routage dynamique pour une entreprise. Quelle commande l'administrateur peut-il exécuter sur un routeur pour afficher les protocoles de routage pris en charge ?",
  answers: [
    "A. Router(config)# router ?",
    "B. Router(config)# ip forward-protocol?",
    "C. Router(config)# ip route?",
    "D. Router(config)# service ?"
  ],
  correct: 0
},
{
  question: "Q5. Pour changer le port d'écoute par défaut de Tomcat, il faut :",
  answers: [
    "A. Modifier le fichier web.xml",
    "B. Modifier le fichier context.xml",
    "C. Modifier le fichier server.xml",
    "D. Modifier le fichier tomcat.xml"
  ],
  correct: 2
},
{
  question: "Q6. Le dossier de déploiement d'une application web dans Tomcat est :",
  answers: [
    "A. Deploy",
    "B. Autodeploy",
    "C. Webapps",
    "D. Webdeploy"
  ],
  correct: 2
},
{
  question: "Q7. La méthode getSession de l'interface HttpServletRequest, lorsqu'elle reçoit la valeur false, crée une session même si elle n'existe pas.",
  answers: [
    "A. Vrai",
    "B. Faux"
  ],
  correct: 1
},
{
  question: "Q8. Il est possible de changer le chemin de déploiement par défaut d'une application web de Tomcat en modifiant le fichier :",
  answers: [
    "A. contextPath.xml",
    "B. server.xml",
    "C. web.xml",
    "D. impossible"
  ],
  correct: 1
},
{
  question: "Q9. Les codes de réponses HTTP qui commencent par 4 indiquent :",
  answers: [
    "A. Des informations",
    "B. Des erreurs clients",
    "C. Des erreurs serveur",
    "D. Des redirections"
  ],
  correct: 1
},
{
  question: "Q10. Après l'exécution de la page including.jsp, la page included.jsp sera compilée en une servlet.",
  answers: [
    "A. Vrai",
    "B. Faux"
  ],
  correct: 1
},
{
  question: "Q11. Un cookie sur internet peut :",
  answers: [
    "A. Être un programme",
    "B. Contenir un virus",
    "C. Paramétrer d'une manière personnalisée la page d'accueil d'un site web",
    "D. Saturer votre disque dur"
  ],
  correct: 2
},
{
  question: "Q12. Une URL (Uniform Resource Locator) est composée obligatoirement de certains éléments. Lequel est facultatif ?",
  answers: [
    "A. Du protocole de communication",
    "B. Du nom du serveur",
    "C. Du port"
  ],
  correct: 2
},
{
  question: "Q13. L'adresse de classe A comprend :",
  answers: [
    "A. 16 millions d'adresses",
    "B. 65.000 adresses",
    "C. 256 adresses"
  ],
  correct: 0
},
{
  question: "Q14. Comment se nomme le format de codage le plus courant des pages Internet ?",
  answers: [
    "A. HTTP",
    "B. Java",
    "C. HTML"
  ],
  correct: 2
},
{
  question: "Q15. XML :",
  answers: [
    "A. Est un format de description de données",
    "B. Ne permet pas de séparer le contenu de la présentation",
    "C. N'est pas portable d'une plateforme à une autre"
  ],
  correct: 0
},
{
  question: "Q16. Trouvez l'affirmation fausse à propos de l'HTTP :",
  answers: [
    "A. Procédé de sécurisation des transactions HTTP",
    "B. HTTPS travaille au niveau de la couche transport",
    "C. Il permet de fournir une sécurisation des échanges lors de transactions de commerce électronique en cryptant les messages"
  ],
  correct: 1
},
{
  question: "Q17. Quel protocole est dédié à la transmission de fichiers sur Internet ?",
  answers: [
    "A. Gropher",
    "B. HTTP",
    "C. FTP"
  ],
  correct: 2
},
{
  question: "Q18. Qu'est-ce que le SMTP ?",
  answers: [
    "A. Un protocole de transmission de courrier électronique",
    "B. Un protocole de réception de courrier électronique sécurisé",
    "C. Un protocole réseau pour Internet"
  ],
  correct: 0
},
{
  question: "Q19. Qu'est-ce que le MP3 ?",
  answers: [
    "A. Une méthode de protection de fichiers audio",
    "B. Un protocole d'échange de fichiers audio",
    "C. Un format de compression de données audio"
  ],
  correct: 2
},
{
  question: "Q20. Le HTML est un langage dit :",
  answers: [
    "A. Encodé",
    "B. Crypté",
    "C. Balisé"
  ],
  correct: 2
},
{
  question: "Q21. Quel protocole est utilisé pour attribuer automatiquement une adresse IP à un ordinateur ?",
  answers: [
    "A. DNS",
    "B. DHCP",
    "C. FTP",
    "D. HTTP"
  ],
  correct: 1
},
{
  question: "Q22. Quel protocole permet de traduire un nom de domaine en adresse IP ?",
  answers: [
    "A. DHCP",
    "B. FTP",
    "C. DNS",
    "D. SMTP"
  ],
  correct: 2
},
{
  question: "Q23. Quelle est la longueur d'une adresse IPv4 ?",
  answers: [
    "A. 16 bits",
    "B. 32 bits",
    "C. 64 bits",
    "D. 128 bits"
  ],
  correct: 1
},
{
  question: "Q24. Quelle est la longueur d'une adresse IPv6 ?",
  answers: [
    "A. 32 bits",
    "B. 64 bits",
    "C. 128 bits",
    "D. 256 bits"
  ],
  correct: 2
},
{
  question: "Q25. Quelle adresse IP est une adresse privée ?",
  answers: [
    "A. 8.8.8.8",
    "B. 172.16.0.1",
    "C. 1.1.1.1",
    "D. 200.1.1.1"
  ],
  correct: 1
},
{
  question: "Q26. Quel équipement permet principalement de relier plusieurs réseaux différents ?",
  answers: [
    "A. Hub",
    "B. Switch",
    "C. Routeur",
    "D. Répéteur"
  ],
  correct: 2
},
{
  question: "Q27. Quelle couche du modèle OSI est responsable du routage ?",
  answers: [
    "A. Couche 2",
    "B. Couche 3",
    "C. Couche 4",
    "D. Couche 7"
  ],
  correct: 1
},
{
  question: "Q28. Quelle couche OSI utilise les adresses MAC ?",
  answers: [
    "A. Couche 1",
    "B. Couche 2",
    "C. Couche 3",
    "D. Couche 4"
  ],
  correct: 1
},
{
  question: "Q29. Quel protocole est utilisé par la commande ping ?",
  answers: [
    "A. TCP",
    "B. UDP",
    "C. ICMP",
    "D. FTP"
  ],
  correct: 2
},
{
  question: "Q30. Quel protocole fonctionne sans établissement préalable de connexion ?",
  answers: [
    "A. TCP",
    "B. UDP",
    "C. HTTP",
    "D. FTP"
  ],
  correct: 1
},
{
  question: "Q31. Quel protocole assure une transmission fiable des données ?",
  answers: [
    "A. UDP",
    "B. IP",
    "C. TCP",
    "D. ICMP"
  ],
  correct: 2
},
{
  question: "Q32. Quelle commande permet de tester la connectivité vers une machine distante ?",
  answers: [
    "A. ping",
    "B. format",
    "C. mkdir",
    "D. copy"
  ],
  correct: 0
},
{
  question: "Q33. Quel protocole utilise généralement le port 80 ?",
  answers: [
    "A. FTP",
    "B. HTTP",
    "C. HTTPS",
    "D. SMTP"
  ],
  correct: 1
},
{
  question: "Q34. Quel port est généralement utilisé par HTTPS ?",
  answers: [
    "A. 21",
    "B. 25",
    "C. 80",
    "D. 443"
  ],
  correct: 3
},
{
  question: "Q35. Quel port est généralement utilisé par FTP pour le contrôle ?",
  answers: [
    "A. 21",
    "B. 22",
    "C. 25",
    "D. 53"
  ],
  correct: 0
},
{
  question: "Q36. Quel port est généralement utilisé par SSH ?",
  answers: [
    "A. 20",
    "B. 22",
    "C. 23",
    "D. 25"
  ],
  correct: 1
},
{
  question: "Q37. Quel protocole permet une connexion distante sécurisée à un serveur ?",
  answers: [
    "A. Telnet",
    "B. FTP",
    "C. SSH",
    "D. HTTP"
  ],
  correct: 2
},
{
  question: "Q38. Quelle commande Cisco permet d'afficher la table de routage ?",
  answers: [
    "A. show interfaces",
    "B. show ip route",
    "C. show running-config",
    "D. show version"
  ],
  correct: 1
},
{
  question: "Q39. Quelle commande Cisco affiche la configuration active du routeur ?",
  answers: [
    "A. show running-config",
    "B. show ip route",
    "C. show interfaces",
    "D. show startup"
  ],
  correct: 0
},
{
  question: "Q40. Quel protocole de routage utilise l'algorithme SPF de Dijkstra ?",
  answers: [
    "A. RIP",
    "B. OSPF",
    "C. FTP",
    "D. DHCP"
  ],
  correct: 1
},
{
  question: "Q41. Quel protocole de routage utilise le nombre de sauts comme métrique principale ?",
  answers: [
    "A. OSPF",
    "B. RIP",
    "C. BGP",
    "D. HTTP"
  ],
  correct: 1
},
{
  question: "Q42. Quelle est la distance maximale recommandée par RIP pour une route valide ?",
  answers: [
    "A. 10 sauts",
    "B. 15 sauts",
    "C. 16 sauts",
    "D. 255 sauts"
  ],
  correct: 1
},
{
  question: "Q43. Une route avec une métrique de 16 dans RIP est considérée comme :",
  answers: [
    "A. Directement connectée",
    "B. La meilleure route",
    "C. Inaccessible",
    "D. Statique"
  ],
  correct: 2
},
{
  question: "Q44. Quelle commande permet de configurer une route statique IPv4 sur Cisco ?",
  answers: [
    "A. ip route",
    "B. router rip",
    "C. ip address",
    "D. route static"
  ],
  correct: 0
},
{
  question: "Q45. Quelle adresse représente le réseau de classe C par défaut ?",
  answers: [
    "A. /8",
    "B. /16",
    "C. /24",
    "D. /32"
  ],
  correct: 2
},
{
  question: "Q46. Quel masque correspond à /24 ?",
  answers: [
    "A. 255.0.0.0",
    "B. 255.255.0.0",
    "C. 255.255.255.0",
    "D. 255.255.255.255"
  ],
  correct: 2
},
{
  question: "Q47. Combien d'adresses hôtes utilisables contient normalement un réseau /24 ?",
  answers: [
    "A. 254",
    "B. 256",
    "C. 255",
    "D. 128"
  ],
  correct: 0
},
{
  question: "Q48. Quelle adresse représente généralement le broadcast d'un réseau /24 192.168.1.0 ?",
  answers: [
    "A. 192.168.1.0",
    "B. 192.168.1.1",
    "C. 192.168.1.254",
    "D. 192.168.1.255"
  ],
  correct: 3
},
{
  question: "Q49. Quelle adresse représente généralement l'adresse réseau de 192.168.1.25/24 ?",
  answers: [
    "A. 192.168.1.0",
    "B. 192.168.1.1",
    "C. 192.168.1.25",
    "D. 192.168.1.255"
  ],
  correct: 0
},
{
  question: "Q50. Quelle adresse est une adresse loopback IPv4 ?",
  answers: [
    "A. 127.0.0.1",
    "B. 192.168.1.1",
    "C. 10.0.0.1",
    "D. 255.255.255.255"
  ],
  correct: 0
},
{
  question: "Q51. Dans IPv6, quelle adresse est utilisée pour le loopback ?",
  answers: [
    "A. ::",
    "B. ::1",
    "C. FF::1",
    "D. FE80::1"
  ],
  correct: 1
},
{
  question: "Q52. Quelle adresse IPv6 représente l'adresse non spécifiée ?",
  answers: [
    "A. ::",
    "B. ::1",
    "C. FFFF::",
    "D. FE80::"
  ],
  correct: 0
},
{
  question: "Q53. Quel préfixe est utilisé pour les adresses IPv6 link-local ?",
  answers: [
    "A. 2000::/3",
    "B. FC00::/7",
    "C. FE80::/10",
    "D. FF00::/8"
  ],
  correct: 2
},
{
  question: "Q54. Quel préfixe IPv6 est utilisé pour les adresses multicast ?",
  answers: [
    "A. FE80::/10",
    "B. FF00::/8",
    "C. 2000::/3",
    "D. FC00::/7"
  ],
  correct: 1
},
{
  question: "Q55. Quel protocole est utilisé pour l'envoi de courrier électronique ?",
  answers: [
    "A. POP3",
    "B. IMAP",
    "C. SMTP",
    "D. FTP"
  ],
  correct: 2
},
{
  question: "Q56. Quel protocole est principalement utilisé pour recevoir les emails et les télécharger ?",
  answers: [
    "A. SMTP",
    "B. POP3",
    "C. HTTP",
    "D. DNS"
  ],
  correct: 1
},
{
  question: "Q57. Quel protocole permet de synchroniser les emails avec le serveur ?",
  answers: [
    "A. IMAP",
    "B. FTP",
    "C. SMTP",
    "D. DHCP"
  ],
  correct: 0
},
{
  question: "Q58. Quel protocole utilise généralement le port 53 ?",
  answers: [
    "A. DNS",
    "B. HTTP",
    "C. FTP",
    "D. SMTP"
  ],
  correct: 0
},
{
  question: "Q59. Quel protocole est utilisé pour transférer des fichiers de manière sécurisée via SSH ?",
  answers: [
    "A. TFTP",
    "B. SFTP",
    "C. HTTP",
    "D. SMTP"
  ],
  correct: 1
},
{
  question: "Q60. Quelle technologie est utilisée pour sécuriser les communications HTTPS ?",
  answers: [
    "A. FTP",
    "B. TLS",
    "C. DHCP",
    "D. DNS"
  ],
  correct: 1
},
{
  question: "Q61. Quel code HTTP signifie « Not Found » ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 403",
    "D. 404"
  ],
  correct: 3
},
{
  question: "Q62. Quel code HTTP indique généralement une requête réussie ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 404",
    "D. 500"
  ],
  correct: 0
},
{
  question: "Q63. Quel code HTTP indique une erreur interne du serveur ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 404",
    "D. 500"
  ],
  correct: 3
},
{
  question: "Q64. Quel code HTTP correspond généralement à « Forbidden » ?",
  answers: [
    "A. 400",
    "B. 401",
    "C. 403",
    "D. 404"
  ],
  correct: 2
},
{
  question: "Q65. Quel code HTTP correspond à « Unauthorized » ?",
  answers: [
    "A. 200",
    "B. 301",
    "C. 401",
    "D. 500"
  ],
  correct: 2
},
{
  question: "Q66. Dans une application web Java, quelle technologie permet de créer des pages dynamiques côté serveur ?",
  answers: [
    "A. JSP",
    "B. CSS",
    "C. XML",
    "D. SQL"
  ],
  correct: 0
},
{
  question: "Q67. Une Servlet Java s'exécute principalement :",
  answers: [
    "A. Sur le navigateur client",
    "B. Sur le serveur",
    "C. Dans le routeur",
    "D. Dans la base de données"
  ],
  correct: 1
},
{
  question: "Q68. Quelle méthode HTTP est généralement utilisée pour envoyer des données d'un formulaire ?",
  answers: [
    "A. GET",
    "B. POST",
    "C. PUT uniquement",
    "D. TRACE"
  ],
  correct: 1
},
{
  question: "Q69. Quelle méthode HTTP est généralement utilisée pour récupérer une ressource ?",
  answers: [
    "A. GET",
    "B. POST",
    "C. DELETE",
    "D. PATCH"
  ],
  correct: 0
},
{
  question: "Q70. Quel fichier décrit notamment la configuration d'une application Web Java traditionnelle ?",
  answers: [
    "A. web.xml",
    "B. server.txt",
    "C. index.xml",
    "D. http.xml"
  ],
  correct: 0
},
{
  question: "Q71. Dans Tomcat, le dossier contenant généralement les applications Web déployées est :",
  answers: [
    "A. config",
    "B. lib",
    "C. webapps",
    "D. logs"
  ],
  correct: 2
},
{
  question: "Q72. Quel fichier Tomcat contient notamment la configuration des Connectors ?",
  answers: [
    "A. web.xml",
    "B. server.xml",
    "C. context.xml",
    "D. index.xml"
  ],
  correct: 1
},
{
  question: "Q73. Quelle méthode du cycle de vie d'une Servlet est appelée lors de son initialisation ?",
  answers: [
    "A. start()",
    "B. init()",
    "C. begin()",
    "D. create()"
  ],
  correct: 1
},
{
  question: "Q74. Quelle méthode d'une Servlet traite généralement les requêtes HTTP ?",
  answers: [
    "A. service()",
    "B. main()",
    "C. execute()",
    "D. run()"
  ],
  correct: 0
},
{
  question: "Q75. Quelle méthode est appelée lorsqu'une Servlet est détruite ?",
  answers: [
    "A. close()",
    "B. stop()",
    "C. destroy()",
    "D. delete()"
  ],
  correct: 2
},
{
  question: "Q76. Quel langage est utilisé pour interroger une base de données relationnelle ?",
  answers: [
    "A. HTML",
    "B. SQL",
    "C. XML",
    "D. CSS"
  ],
  correct: 1
},
{
  question: "Q77. Quelle commande SQL permet de récupérer des données ?",
  answers: [
    "A. INSERT",
    "B. UPDATE",
    "C. SELECT",
    "D. DELETE"
  ],
  correct: 2
},
{
  question: "Q78. Quelle commande SQL permet d'ajouter une ligne dans une table ?",
  answers: [
    "A. INSERT",
    "B. SELECT",
    "C. UPDATE",
    "D. ALTER"
  ],
  correct: 0
},
{
  question: "Q79. Quelle commande SQL permet de modifier des données existantes ?",
  answers: [
    "A. SELECT",
    "B. UPDATE",
    "C. INSERT",
    "D. CREATE"
  ],
  correct: 1
},
{
  question: "Q80. Quelle commande SQL permet de supprimer des lignes ?",
  answers: [
    "A. DROP",
    "B. DELETE",
    "C. REMOVE",
    "D. CLEAR"
  ],
  correct: 1
},
{
  question: "Q81. Quelle contrainte identifie de manière unique chaque enregistrement d'une table ?",
  answers: [
    "A. Foreign Key",
    "B. Primary Key",
    "C. Index",
    "D. NULL"
  ],
  correct: 1
},
{
  question: "Q82. Une clé étrangère (Foreign Key) sert principalement à :",
  answers: [
    "A. Chiffrer une table",
    "B. Relier deux tables",
    "C. Supprimer une base",
    "D. Créer un utilisateur système"
  ],
  correct: 1
},
{
  question: "Q83. Quelle commande SQL permet de créer une table ?",
  answers: [
    "A. MAKE TABLE",
    "B. NEW TABLE",
    "C. CREATE TABLE",
    "D. ADD TABLE"
  ],
  correct: 2
},
{
  question: "Q84. Quel mot-clé SQL permet de filtrer les résultats ?",
  answers: [
    "A. WHERE",
    "B. FILTER",
    "C. HAVING ONLY",
    "D. CHECK"
  ],
  correct: 0
},
{
  question: "Q85. Quelle clause SQL permet de trier les résultats ?",
  answers: [
    "A. GROUP BY",
    "B. ORDER BY",
    "C. SORT BY",
    "D. ARRANGE BY"
  ],
  correct: 1
},
{
  question: "Q86. Quelle structure permet de répéter des instructions en programmation ?",
  answers: [
    "A. Boucle",
    "B. Variable",
    "C. Classe uniquement",
    "D. Commentaire"
  ],
  correct: 0
},
{
  question: "Q87. Quel opérateur signifie généralement « égal à » dans une condition de programmation ?",
  answers: [
    "A. =",
    "B. ==",
    "C. !=",
    "D. <>"
  ],
  correct: 1
},
{
  question: "Q88. Quelle structure permet de prendre une décision dans un programme ?",
  answers: [
    "A. if",
    "B. loop",
    "C. import",
    "D. print"
  ],
  correct: 0
},
{
  question: "Q89. Qu'est-ce qu'un algorithme ?",
  answers: [
    "A. Un matériel informatique",
    "B. Une suite d'instructions permettant de résoudre un problème",
    "C. Un protocole réseau",
    "D. Une base de données"
  ],
  correct: 1
},
{
  question: "Q90. Quelle structure de données fonctionne selon le principe LIFO ?",
  answers: [
    "A. File",
    "B. Pile",
    "C. Tableau",
    "D. Liste chaînée"
  ],
  correct: 1
},
{
  question: "Q91. Quelle structure de données fonctionne selon le principe FIFO ?",
  answers: [
    "A. Pile",
    "B. File",
    "C. Arbre",
    "D. Graphe"
  ],
  correct: 1
},
{
  question: "Q92. Que signifie RAM ?",
  answers: [
    "A. Read Access Memory",
    "B. Random Access Memory",
    "C. Rapid Access Machine",
    "D. Remote Access Memory"
  ],
  correct: 1
},
{
  question: "Q93. Quelle mémoire est généralement volatile ?",
  answers: [
    "A. ROM",
    "B. RAM",
    "C. SSD",
    "D. Disque dur"
  ],
  correct: 1
},
{
  question: "Q94. Quel composant exécute principalement les instructions d'un programme ?",
  answers: [
    "A. CPU",
    "B. Disque dur",
    "C. Clavier",
    "D. Écran"
  ],
  correct: 0
},
{
  question: "Q95. Quel système d'exploitation est open source ?",
  answers: [
    "A. Linux",
    "B. Windows uniquement",
    "C. MS-DOS uniquement",
    "D. iOS uniquement"
  ],
  correct: 0
},
{
  question: "Q96. Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
  answers: [
    "A. cd",
    "B. ls",
    "C. rm",
    "D. pwd"
  ],
  correct: 1
},
{
  question: "Q97. Quelle commande Linux permet de changer de répertoire ?",
  answers: [
    "A. cd",
    "B. ls",
    "C. mkdir",
    "D. cp"
  ],
  correct: 0
},
{
  question: "Q98. Quelle commande Linux permet de supprimer un fichier ?",
  answers: [
    "A. delete",
    "B. remove",
    "C. rm",
    "D. erasefile"
  ],
  correct: 2
},
{
  question: "Q99. Quel mécanisme protège les données en les rendant illisibles sans clé appropriée ?",
  answers: [
    "A. Compression",
    "B. Chiffrement",
    "C. Compilation",
    "D. Fragmentation"
  ],
  correct: 1
},
{
  question: "Q100. Quel est le rôle principal d'un pare-feu (Firewall) ?",
  answers: [
    "A. Augmenter la vitesse du processeur",
    "B. Filtrer et contrôler le trafic réseau",
    "C. Compresser les fichiers",
    "D. Remplacer la mémoire RAM"
  ],
  correct: 1
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
