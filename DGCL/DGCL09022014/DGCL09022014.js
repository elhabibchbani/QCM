const questions = [
  {
    question:
      "1. Quel protocole permet d'attribuer automatiquement une adresse IP à un ordinateur ?",
    answers: ["A. DNS", "B. DHCP", "C. HTTP", "D. FTP"],
    correct: 1,
  },
  {
    question: "2. Quelle est la fonction principale d'un serveur DNS ?",
    answers: [
      "A. Chiffrer les données",
      "B. Convertir les noms de domaine en adresses IP",
      "C. Attribuer les adresses MAC",
      "D. Bloquer les virus",
    ],
    correct: 1,
  },
  {
    question:
      "3. Quelle commande permet de tester la connectivité avec une autre machine ?",
    answers: ["A. ipconfig", "B. ping", "C. format", "D. mkdir"],
    correct: 1,
  },
  {
    question: "4. Quelle est la longueur d'une adresse IPv4 ?",
    answers: ["A. 16 bits", "B. 32 bits", "C. 64 bits", "D. 128 bits"],
    correct: 1,
  },
  {
    question:
      "5. Quel équipement réseau permet de connecter plusieurs ordinateurs dans un réseau local (LAN) ?",
    answers: ["A. Switch", "B. Modem", "C. Imprimante", "D. Scanner"],
    correct: 0,
  },
  {
    question: "6. Quel protocole sécurise les communications Web ?",
    answers: ["A. HTTP", "B. FTP", "C. HTTPS", "D. Telnet"],
    correct: 2,
  },
  {
    question:
      "7. Dans une base de données relationnelle, quel est le rôle d'une clé primaire (Primary Key) ?",
    answers: [
      "A. Identifier chaque enregistrement de manière unique",
      "B. Supprimer les tables",
      "C. Trier les données automatiquement",
      "D. Créer une sauvegarde",
    ],
    correct: 0,
  },
  {
    question:
      "8. Quelle commande SQL permet de récupérer des données dans une table ?",
    answers: ["A. INSERT", "B. UPDATE", "C. SELECT", "D. DELETE"],
    correct: 2,
  },
  {
    question:
      "9. Quel composant est considéré comme le cerveau de l'ordinateur ?",
    answers: ["A. RAM", "B. CPU", "C. Disque dur", "D. Carte réseau"],
    correct: 1,
  },
  {
    question: "10. Quel est le rôle principal d'un pare-feu (Firewall) ?",
    answers: [
      "A. Accélérer le processeur",
      "B. Contrôler le trafic réseau entrant et sortant",
      "C. Augmenter la mémoire RAM",
      "D. Créer des fichiers",
    ],
    correct: 1,
  },
  {
    question:
      "11. Quel protocole est utilisé pour envoyer des courriers électroniques ?",
    answers: ["A. POP3", "B. SMTP", "C. IMAP", "D. DNS"],
    correct: 1,
  },
  {
    question: "12. Quel port est utilisé par défaut par le protocole HTTPS ?",
    answers: ["A. 21", "B. 25", "C. 80", "D. 443"],
    correct: 3,
  },
  {
    question:
      "13. Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
    answers: ["A. pwd", "B. ls", "C. cd", "D. rm"],
    correct: 1,
  },
  {
    question: "14. Quel système d'exploitation est open source ?",
    answers: ["A. Windows", "B. macOS", "C. Linux", "D. iOS"],
    correct: 2,
  },
  {
    question: "15. Que signifie l'acronyme RAM ?",
    answers: [
      "A. Read Access Memory",
      "B. Random Access Memory",
      "C. Run Application Memory",
      "D. Remote Allocation Memory",
    ],
    correct: 1,
  },
  {
    question:
      "16. Quel langage est principalement utilisé pour structurer le contenu d'une page Web ?",
    answers: ["A. CSS", "B. HTML", "C. SQL", "D. Python"],
    correct: 1,
  },
  {
    question:
      "17. Quel langage permet principalement de gérer le style et la présentation d'une page Web ?",
    answers: ["A. HTML", "B. CSS", "C. PHP", "D. SQL"],
    correct: 1,
  },
  {
    question:
      "18. Quelle instruction SQL permet d'ajouter un nouvel enregistrement dans une table ?",
    answers: ["A. INSERT INTO", "B. UPDATE", "C. SELECT", "D. DROP"],
    correct: 0,
  },
  {
    question:
      "19. Quelle structure de données fonctionne selon le principe LIFO ?",
    answers: ["A. File", "B. Pile", "C. Arbre", "D. Graphe"],
    correct: 1,
  },
  {
    question:
      "20. Quelle méthode HTTP est généralement utilisée pour récupérer une ressource ?",
    answers: ["A. POST", "B. DELETE", "C. GET", "D. PATCH"],
    correct: 2,
  },
  {
    question: "21. Quel protocole permet le transfert sécurisé de fichiers ?",
    answers: ["A. FTP", "B. SFTP", "C. Telnet", "D. HTTP"],
    correct: 1,
  },
  {
    question:
      "22. Quelle adresse IP est utilisée pour désigner la machine locale ?",
    answers: [
      "A. 192.168.1.1",
      "B. 10.0.0.1",
      "C. 127.0.0.1",
      "D. 255.255.255.0",
    ],
    correct: 2,
  },
  {
    question: "23. Quel masque correspond au préfixe CIDR /24 ?",
    answers: [
      "A. 255.255.0.0",
      "B. 255.255.255.0",
      "C. 255.0.0.0",
      "D. 255.255.255.128",
    ],
    correct: 1,
  },
  {
    question:
      "24. Quel équipement fonctionne principalement à la couche 3 du modèle OSI ?",
    answers: ["A. Hub", "B. Switch de niveau 2", "C. Routeur", "D. Répéteur"],
    correct: 2,
  },
  {
    question: "25. Combien de couches contient le modèle OSI ?",
    answers: ["A. 4", "B. 5", "C. 7", "D. 8"],
    correct: 2,
  },
  {
    question:
      "26. Quel protocole permet d'obtenir automatiquement une configuration IP ?",
    answers: ["A. DNS", "B. DHCP", "C. SMTP", "D. SNMP"],
    correct: 1,
  },
  {
    question: "27. Quelle commande Windows affiche la configuration IP ?",
    answers: ["A. ipconfig", "B. ls", "C. chmod", "D. grep"],
    correct: 0,
  },
  {
    question: "28. Quel est le rôle d'une adresse MAC ?",
    answers: [
      "A. Identifier une interface réseau",
      "B. Identifier un site Web",
      "C. Chiffrer les données",
      "D. Attribuer un nom de domaine",
    ],
    correct: 0,
  },
  {
    question: "29. Quel protocole est orienté connexion ?",
    answers: ["A. UDP", "B. TCP", "C. ICMP", "D. ARP"],
    correct: 1,
  },
  {
    question:
      "30. Quel protocole est généralement utilisé pour tester la disponibilité d'un hôte ?",
    answers: ["A. ICMP", "B. SMTP", "C. FTP", "D. POP3"],
    correct: 0,
  },
  {
    question: "31. Quel port est associé au protocole SSH ?",
    answers: ["A. 21", "B. 22", "C. 23", "D. 25"],
    correct: 1,
  },
  {
    question: "32. Quel port est utilisé par DNS en général ?",
    answers: ["A. 53", "B. 67", "C. 80", "D. 443"],
    correct: 0,
  },
  {
    question:
      "33. Quel protocole permet de traduire une adresse IP en adresse MAC sur un réseau IPv4 local ?",
    answers: ["A. ARP", "B. DNS", "C. HTTP", "D. SNMP"],
    correct: 0,
  },
  {
    question:
      "34. Quel type de réseau couvre généralement un bâtiment ou un campus ?",
    answers: ["A. LAN", "B. WAN", "C. GAN", "D. PAN"],
    correct: 0,
  },
  {
    question:
      "35. Quel dispositif permet de partager une connexion Internet entre plusieurs appareils ?",
    answers: ["A. Routeur", "B. Clavier", "C. Écran", "D. Scanner"],
    correct: 0,
  },
  {
    question: "36. Quelle topologie réseau utilise un équipement central ?",
    answers: ["A. Anneau", "B. Bus", "C. Étoile", "D. Maillée"],
    correct: 2,
  },
  {
    question:
      "37. Quel protocole est utilisé pour la réception des e-mails et leur synchronisation sur plusieurs appareils ?",
    answers: ["A. SMTP", "B. IMAP", "C. HTTP", "D. DHCP"],
    correct: 1,
  },
  {
    question:
      "38. Quelle technologie permet de connecter des appareils sans fil à un réseau local ?",
    answers: ["A. Wi-Fi", "B. HDMI", "C. SATA", "D. USB"],
    correct: 0,
  },
  {
    question: "39. Que signifie VPN ?",
    answers: [
      "A. Virtual Private Network",
      "B. Verified Public Node",
      "C. Visual Protocol Network",
      "D. Virtual Program Number",
    ],
    correct: 0,
  },
  {
    question: "40. Quel est le rôle principal d'un proxy ?",
    answers: [
      "A. Servir d'intermédiaire entre client et serveur",
      "B. Remplacer le processeur",
      "C. Créer une base de données",
      "D. Formater un disque",
    ],
    correct: 0,
  },
  {
    question:
      "41. Quel principe de sécurité consiste à donner uniquement les droits nécessaires ?",
    answers: [
      "A. Moindre privilège",
      "B. Accès illimité",
      "C. Partage public",
      "D. Anonymat total",
    ],
    correct: 0,
  },
  {
    question:
      "42. Quelle technique protège les données en les rendant illisibles sans clé ?",
    answers: [
      "A. Compression",
      "B. Chiffrement",
      "C. Indexation",
      "D. Défragmentation",
    ],
    correct: 1,
  },
  {
    question: "43. Quel outil permet de détecter des logiciels malveillants ?",
    answers: [
      "A. Antivirus",
      "B. Compilateur",
      "C. Éditeur de texte",
      "D. Navigateur",
    ],
    correct: 0,
  },
  {
    question: "44. Qu'est-ce que l'authentification à deux facteurs ?",
    answers: [
      "A. Deux mots de passe identiques",
      "B. Deux preuves d'identité distinctes",
      "C. Deux comptes utilisateurs",
      "D. Deux adresses IP",
    ],
    correct: 1,
  },
  {
    question: "45. Quel est l'objectif d'une sauvegarde ?",
    answers: [
      "A. Augmenter la RAM",
      "B. Restaurer les données après une perte",
      "C. Accélérer Internet",
      "D. Supprimer les virus automatiquement",
    ],
    correct: 1,
  },
  {
    question:
      "46. Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
    answers: ["A. Ransomware", "B. Spyware", "C. Adware", "D. Worm"],
    correct: 0,
  },
  {
    question:
      "47. Quel protocole sécurise les connexions à distance en ligne de commande ?",
    answers: ["A. Telnet", "B. SSH", "C. FTP", "D. HTTP"],
    correct: 1,
  },
  {
    question: "48. Quelle pratique réduit le risque lié aux mots de passe ?",
    answers: [
      "A. Réutiliser le même mot de passe",
      "B. Utiliser des mots de passe uniques et robustes",
      "C. Partager son mot de passe",
      "D. Le noter publiquement",
    ],
    correct: 1,
  },
  {
    question: "49. Que signifie HTTPS ?",
    answers: [
      "A. HyperText Transfer Protocol Secure",
      "B. High Transfer Text Protocol System",
      "C. Hyper Terminal Transfer Protocol",
      "D. Host Transfer Text Program",
    ],
    correct: 0,
  },
  {
    question:
      "50. Quel mécanisme permet de vérifier l'intégrité d'un fichier ?",
    answers: ["A. Hachage", "B. Formatage", "C. Routage", "D. DHCP"],
    correct: 0,
  },
  {
    question: "51. Quel est le rôle d'un IDS ?",
    answers: [
      "A. Détecter les intrusions",
      "B. Attribuer des adresses IP",
      "C. Héberger des sites",
      "D. Compiler du code",
    ],
    correct: 0,
  },
  {
    question: "52. Quel risque est associé au phishing ?",
    answers: [
      "A. Vol d'identifiants par tromperie",
      "B. Panne électrique",
      "C. Surchauffe du CPU",
      "D. Perte de résolution d'écran",
    ],
    correct: 0,
  },
  {
    question:
      "53. Quelle action est recommandée après la découverte d'une faille de sécurité ?",
    answers: [
      "A. L'ignorer",
      "B. Appliquer le correctif approprié",
      "C. Désactiver toutes les sauvegardes",
      "D. Publier les mots de passe",
    ],
    correct: 1,
  },
  {
    question:
      "54. Quel principe garantit que seules les personnes autorisées accèdent aux données ?",
    answers: [
      "A. Confidentialité",
      "B. Disponibilité",
      "C. Redondance",
      "D. Portabilité",
    ],
    correct: 0,
  },
  {
    question: "55. Quel est le rôle d'un certificat numérique TLS ?",
    answers: [
      "A. Authentifier un serveur et permettre une connexion chiffrée",
      "B. Attribuer une adresse IP",
      "C. Compresser les images",
      "D. Créer un utilisateur local",
    ],
    correct: 0,
  },
  {
    question:
      "56. Quel type de sauvegarde copie uniquement les fichiers modifiés depuis la dernière sauvegarde ?",
    answers: [
      "A. Complète",
      "B. Incrémentielle",
      "C. Miroir physique",
      "D. Initiale",
    ],
    correct: 1,
  },
  {
    question: "57. Qu'est-ce qu'une attaque par déni de service ?",
    answers: [
      "A. Rendre un service indisponible en le surchargeant",
      "B. Créer une sauvegarde",
      "C. Mettre à jour un serveur",
      "D. Chiffrer un disque local",
    ],
    correct: 0,
  },
  {
    question:
      "58. Quel élément est souvent utilisé pour stocker des clés cryptographiques de manière sécurisée ?",
    answers: [
      "A. HSM",
      "B. RAM ordinaire uniquement",
      "C. Switch non administrable",
      "D. Écran",
    ],
    correct: 0,
  },
  {
    question: "59. Quel est le but d'une politique de sécurité informatique ?",
    answers: [
      "A. Définir les règles de protection du système d'information",
      "B. Augmenter la vitesse du processeur",
      "C. Remplacer le réseau",
      "D. Supprimer les utilisateurs",
    ],
    correct: 0,
  },
  {
    question:
      "60. Quel protocole est utilisé pour superviser des équipements réseau ?",
    answers: ["A. SNMP", "B. SMTP", "C. SFTP", "D. HTML"],
    correct: 0,
  },
  {
    question:
      "61. Quel langage est principalement utilisé pour le développement côté serveur avec Django ?",
    answers: ["A. Python", "B. CSS", "C. HTML", "D. SQL"],
    correct: 0,
  },
  {
    question: "62. Quelle structure conditionnelle est utilisée en Python ?",
    answers: ["A. if", "B. select", "C. switcher", "D. when"],
    correct: 0,
  },
  {
    question:
      "63. Quel symbole permet de commencer un commentaire sur une ligne en Python ?",
    answers: ["A. //", "B. #", "C. <!--", "D. **"],
    correct: 1,
  },
  {
    question:
      "64. Quel type Python représente une suite ordonnée et modifiable ?",
    answers: ["A. tuple", "B. list", "C. str", "D. bool"],
    correct: 1,
  },
  {
    question: "65. Quelle fonction Python retourne la longueur d'une liste ?",
    answers: ["A. count()", "B. length()", "C. len()", "D. size()"],
    correct: 2,
  },
  {
    question: "66. Quel mot-clé permet de définir une fonction en Python ?",
    answers: ["A. func", "B. define", "C. def", "D. function"],
    correct: 2,
  },
  {
    question:
      "67. Quel langage est exécuté principalement dans le navigateur pour rendre une page interactive ?",
    answers: ["A. JavaScript", "B. SQL", "C. C", "D. Bash"],
    correct: 0,
  },
  {
    question:
      "68. Quel format est couramment utilisé pour échanger des données entre applications Web ?",
    answers: ["A. JSON", "B. MP3", "C. PNG", "D. EXE"],
    correct: 0,
  },
  {
    question: "69. Quel code HTTP signifie « Not Found » ?",
    answers: ["A. 200", "B. 301", "C. 404", "D. 500"],
    correct: 2,
  },
  {
    question:
      "70. Quelle méthode HTTP sert généralement à envoyer des données au serveur ?",
    answers: ["A. GET", "B. POST", "C. TRACE", "D. HEAD"],
    correct: 1,
  },
  {
    question: "71. Quel est le rôle de CSS ?",
    answers: [
      "A. Structurer une base de données",
      "B. Mettre en forme une page Web",
      "C. Gérer les adresses IP",
      "D. Compiler Python",
    ],
    correct: 1,
  },
  {
    question: "72. Quel élément HTML crée un lien hypertexte ?",
    answers: ["A. <p>", "B. <a>", "C. <img>", "D. <table>"],
    correct: 1,
  },
  {
    question: "73. Quel outil permet de gérer les versions du code source ?",
    answers: ["A. Git", "B. Apache", "C. MySQL", "D. Nginx"],
    correct: 0,
  },
  {
    question:
      "74. Quelle commande Git enregistre un instantané dans l'historique local ?",
    answers: ["A. git push", "B. git commit", "C. git pull", "D. git clone"],
    correct: 1,
  },
  {
    question: "75. Qu'est-ce qu'une API REST ?",
    answers: [
      "A. Une interface de communication utilisant des ressources HTTP",
      "B. Un système d'exploitation",
      "C. Un langage de programmation",
      "D. Un type de câble",
    ],
    correct: 0,
  },
  {
    question:
      "76. Quel outil est couramment utilisé pour conteneuriser des applications ?",
    answers: ["A. Docker", "B. Excel", "C. Photoshop", "D. BIOS"],
    correct: 0,
  },
  {
    question: "77. Que signifie CI/CD ?",
    answers: [
      "A. Continuous Integration / Continuous Delivery ou Deployment",
      "B. Computer Interface / Computer Data",
      "C. Central Internet / Cloud Database",
      "D. Code Inspection / Code Design",
    ],
    correct: 0,
  },
  {
    question: "78. Quel est le rôle d'un serveur Web ?",
    answers: [
      "A. Traiter les requêtes HTTP et fournir des ressources Web",
      "B. Gérer uniquement les imprimantes",
      "C. Remplacer le DNS",
      "D. Créer des adresses MAC",
    ],
    correct: 0,
  },
  {
    question:
      "79. Quel langage est utilisé pour interroger une base de données relationnelle ?",
    answers: ["A. SQL", "B. CSS", "C. XML uniquement", "D. Bash uniquement"],
    correct: 0,
  },
  {
    question: "80. Quel est le rôle d'une API ?",
    answers: [
      "A. Permettre la communication entre logiciels",
      "B. Augmenter la mémoire physique",
      "C. Remplacer le système d'exploitation",
      "D. Défragmenter le disque",
    ],
    correct: 0,
  },
  {
    question:
      "81. Quelle commande SQL permet de modifier des données existantes ?",
    answers: ["A. INSERT", "B. UPDATE", "C. CREATE", "D. SELECT"],
    correct: 1,
  },
  {
    question: "82. Quelle clause SQL filtre les lignes selon une condition ?",
    answers: ["A. ORDER BY", "B. GROUP BY", "C. WHERE", "D. JOIN"],
    correct: 2,
  },
  {
    question: "83. Quelle fonction SQL calcule le nombre de lignes ?",
    answers: ["A. SUM()", "B. COUNT()", "C. AVG()", "D. MAX()"],
    correct: 1,
  },
  {
    question:
      "84. Quel type de jointure retourne uniquement les lignes correspondantes dans les deux tables ?",
    answers: [
      "A. INNER JOIN",
      "B. LEFT JOIN",
      "C. CROSS JOIN",
      "D. FULL OUTER JOIN",
    ],
    correct: 0,
  },
  {
    question: "85. Quel est le rôle d'une clé étrangère ?",
    answers: [
      "A. Assurer une relation entre deux tables",
      "B. Chiffrer une table",
      "C. Supprimer les doublons automatiquement",
      "D. Trier les colonnes",
    ],
    correct: 0,
  },
  {
    question: "86. Que signifie l'ACID en bases de données ?",
    answers: [
      "A. Atomicité, Cohérence, Isolation, Durabilité",
      "B. Accès, Contrôle, Index, Données",
      "C. Analyse, Calcul, Intégration, Déploiement",
      "D. Authentification, Chiffrement, Identification, Disponibilité",
    ],
    correct: 0,
  },
  {
    question: "87. Quelle commande SQL supprime une table ?",
    answers: ["A. DELETE", "B. DROP TABLE", "C. REMOVE ROW", "D. CLEAR"],
    correct: 1,
  },
  {
    question:
      "88. Quel type de base de données stocke les données sous forme de documents JSON ou similaires ?",
    answers: [
      "A. Relationnelle uniquement",
      "B. Documentaire NoSQL",
      "C. Système de fichiers",
      "D. Base hiérarchique uniquement",
    ],
    correct: 1,
  },
  {
    question:
      "89. Quel est l'objectif de l'indexation dans une base de données ?",
    answers: [
      "A. Accélérer certaines recherches",
      "B. Supprimer toutes les contraintes",
      "C. Chiffrer les colonnes",
      "D. Créer des sauvegardes",
    ],
    correct: 0,
  },
  {
    question: "90. Quelle clause SQL trie les résultats ?",
    answers: ["A. WHERE", "B. ORDER BY", "C. HAVING", "D. LIMIT"],
    correct: 1,
  },
  {
    question:
      "91. Quel modèle de développement organise le travail en cycles courts et itératifs ?",
    answers: [
      "A. Agile",
      "B. Cascade uniquement",
      "C. Big Bang",
      "D. Sans méthode",
    ],
    correct: 0,
  },
  {
    question: "92. Quel document décrit les besoins fonctionnels d'un projet ?",
    answers: [
      "A. Cahier des charges",
      "B. Fichier journal",
      "C. Code source",
      "D. Plan de sauvegarde",
    ],
    correct: 0,
  },
  {
    question:
      "93. Quel diagramme UML représente les interactions entre acteurs et système ?",
    answers: [
      "A. Diagramme de cas d'utilisation",
      "B. Diagramme de classes uniquement",
      "C. Diagramme de déploiement",
      "D. Diagramme d'activité uniquement",
    ],
    correct: 0,
  },
  {
    question: "94. Quel indicateur mesure le respect des délais d'un projet ?",
    answers: [
      "A. Écart de planning",
      "B. Adresse IP",
      "C. Taux de compression",
      "D. Débit Wi-Fi",
    ],
    correct: 0,
  },
  {
    question:
      "95. Quelle pratique permet de vérifier qu'un logiciel répond aux exigences ?",
    answers: [
      "A. Tests logiciels",
      "B. Défragmentation",
      "C. Routage",
      "D. Archivage uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "96. Quel test vérifie le comportement d'une petite unité de code ?",
    answers: [
      "A. Test unitaire",
      "B. Test de charge uniquement",
      "C. Test d'acceptation uniquement",
      "D. Test réseau",
    ],
    correct: 0,
  },
  {
    question:
      "97. Quel principe de conception vise à limiter les dépendances entre modules ?",
    answers: [
      "A. Faible couplage",
      "B. Couplage fort",
      "C. Duplication",
      "D. Monolithisme obligatoire",
    ],
    correct: 0,
  },
  {
    question:
      "98. Quel système permet de gérer les utilisateurs et les permissions dans un environnement Windows Server ?",
    answers: [
      "A. Active Directory",
      "B. Docker Hub",
      "C. GitHub",
      "D. Node.js",
    ],
    correct: 0,
  },
  {
    question:
      "99. Quel service permet de centraliser l'authentification dans un domaine Windows ?",
    answers: [
      "A. Active Directory Domain Services",
      "B. DHCP uniquement",
      "C. FTP",
      "D. NAT",
    ],
    correct: 0,
  },
  {
    question: "100. Quel est l'objectif principal de la virtualisation ?",
    answers: [
      "A. Exécuter plusieurs environnements virtuels sur un même matériel",
      "B. Supprimer le réseau",
      "C. Remplacer les sauvegardes",
      "D. Éviter tout système d'exploitation",
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
