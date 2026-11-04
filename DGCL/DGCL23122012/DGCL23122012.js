const questions = [
  {
    question:
      "1. Quelle est la couche du modèle OSI qui fait partie de la couche application du modèle TCP/IP ?",
    answers: [
      "A. Liaison de données",
      "B. Réseau",
      "C. Transport",
      "D. Présentation",
    ],
    correct: 3,
  },
  {
    question:
      "2. Quel protocole sert à transférer des pages Web d'un serveur à un client ?",
    answers: ["A. HTML", "B. SMTP", "C. HTTP", "D. SSH"],
    correct: 2,
  },
  {
    question:
      "3. Un administrateur réseau tente de résoudre un problème d'accès au site www.xyz.com. La saisie de l'adresse IP du site dans le navigateur permet d'accéder correctement à la page Web. Quelle est l'origine de cette panne ?",
    answers: ["A. DHCP", "B. DNS", "C. CDP", "D. HTTP"],
    correct: 1,
  },
  {
    question:
      "4. Dans quelle couche du modèle TCP/IP intervient le protocole TCP ?",
    answers: [
      "A. La couche session",
      "B. La couche transport",
      "C. La couche réseau",
      "D. La couche liaison de données",
    ],
    correct: 1,
  },
  {
    question:
      "5. Quel protocole propose des services de couche réseau non orientés connexion ?",
    answers: ["A. IP", "B. TCP", "C. UDP", "D. OSI"],
    correct: 0,
  },
  {
    question:
      "6. Quel est le rôle principal d'une boucle FOR dans un algorithme ?",
    answers: [
      "A. Déclarer une variable",
      "B. Répéter un bloc d'instructions un nombre déterminé de fois",
      "C. Tester une condition sans répétition",
      "D. Afficher un résultat",
    ],
    correct: 1,
  },
  {
    question: "7. Quel est le type d'adresse correspondant à 127.0.0.1 ?",
    answers: [
      "A. Une adresse locale",
      "B. Une adresse de bouclage",
      "C. Une adresse publique",
      "D. Une adresse de route par défaut",
    ],
    correct: 1,
  },
  {
    question:
      "8. Combien de chiffres binaires (bits) composent une adresse IPv6 ?",
    answers: ["A. 64 bits", "B. 48 bits", "C. 128 bits", "D. 32 bits"],
    correct: 2,
  },
  {
    question:
      "9. Quelle est la valeur finale de la variable S après l'exécution de l'algorithme suivant ? S ← 0 ; Pour i ← 1 à 4 Faire ; S ← S + i ; FinPour",
    answers: ["A. 4", "B. 6", "C. 10", "D. 15"],
    correct: 2,
  },
  {
    question:
      "10. Quelle clause SQL permet de filtrer les résultats d'une requête selon une condition ?",
    answers: ["A. ORDER BY", "B. GROUP BY", "C. WHERE", "D. SELECT"],
    correct: 2,
  },
  {
    question:
      "11. En programmation orientée objet, quel est le rôle du constructeur d'une classe ?",
    answers: [
      "A. Détruire automatiquement tous les objets",
      "B. Initialiser les attributs d'un objet lors de sa création",
      "C. Supprimer les méthodes de la classe",
      "D. Déclarer une base de données",
    ],
    correct: 1,
  },
  {
    question:
      "12. Déterminez l'adresse IP qui peut être utilisée pour les hôtes du sous-réseau 200.100.50.0/28.",
    answers: [
      "A. 200.100.50.10",
      "B. 200.100.50.110",
      "C. 200.100.50.111",
      "D. 200.100.50.1111",
    ],
    correct: 0,
  },
  {
    question:
      "13. Laquelle des propositions suivantes est une adresse IP privée ?",
    answers: [
      "A. 11.1.1.1",
      "B. 172.33.5.2",
      "C. 192.167.10.10",
      "D. 172.16.4.4",
    ],
    correct: 3,
  },
  {
    question: "14. Laquelle des propositions suivantes est correcte ?",
    answers: [
      "A. /30 signifie le masque 255.255.255.0",
      "B. /30 signifie le masque 255.255.255.252",
      "C. /30 signifie le masque 255.255.255.128",
      "D. /30 signifie le masque 255.255.255.192",
    ],
    correct: 1,
  },
  {
    question:
      "15. Quelle est la différence entre une boucle WHILE et une boucle DO...WHILE ?",
    answers: [
      "A. WHILE exécute toujours les instructions au moins une fois",
      "B. DO...WHILE teste la condition après l'exécution du bloc d'instructions",
      "C. Les deux boucles sont utilisées uniquement pour déclarer des variables",
      "D. WHILE ne permet pas d'utiliser des conditions",
    ],
    correct: 1,
  },
  {
    question: "16. Combien d'hôtes supporte le sous-réseau 172.16.16.64/30 ?",
    answers: ["A. 1 hôte", "B. 2 hôtes", "C. 3 hôtes", "D. 4 hôtes"],
    correct: 1,
  },
  {
    question:
      "17. Combien de bits sont utilisés dans l'espace d'adressage IPv4 ?",
    answers: ["A. 8", "B. 12", "C. 16", "D. 32"],
    correct: 3,
  },
{
  question: "18. Quelle instruction SQL permet de récupérer des données depuis une table ?",
  answers: [
    "A. INSERT",
    "B. UPDATE",
    "C. SELECT",
    "D. DELETE",
  ],
  correct: 2,
},
  {
    question:
      "19. Sur quelle couche du modèle OSI est exécuté un commutateur qui utilise des adresses MAC pour acheminer les trames ?",
    answers: ["A. Couche 1", "B. Couche 2", "C. Couche 3", "D. Couche 4"],
    correct: 1,
  },
  {
    question:
      "20. Quel avantage procure SSH par rapport à Telnet lors d'une connexion distante à un périphérique ?",
    answers: [
      "A. Le chiffrement",
      "B. Davantage de lignes de connexion",
      "C. Des services orientés connexion",
      "D. Les services orientés connexion",
    ],
    correct: 0,
  },
  {
    question: "21. IPSEC fonctionne à quel niveau du modèle OSI ?",
    answers: [
      "A. La couche application",
      "B. La couche session",
      "C. La couche transport",
      "D. La couche réseau",
    ],
    correct: 3,
  },
  {
    question: "22. Sur quel équipement peut-on configurer des VLANs ?",
    answers: ["A. Hub", "B. Switch", "C. Routeur", "D. Serveur"],
    correct: 1,
  },
  {
    question:
      "23. Quel service permet au poste de travail d'obtenir une adresse IP dynamiquement ?",
    answers: ["A. DNS", "B. ICMP", "C. DHCP", "D. HSRP"],
    correct: 2,
  },
  {
    question:
      "24. Quel protocole est utilisé par les logiciels de management de réseau ?",
    answers: ["A. SNMP", "B. SMTP", "C. SMB", "D. SIP"],
    correct: 0,
  },
  {
    question: "25. Que signifie DMZ ?",
    answers: [
      "A. Dual Multimédia Zone",
      "B. Direct Multimedia Zone",
      "C. De Militarized Zone",
      "D. De Militarized Zom",
    ],
    correct: 2,
  },
  {
    question: "26. Quel est le rôle du NAT ?",
    answers: [
      "A. Il permet de convertir les adresses IP privées utilisées en entreprise par une adresse IP publique",
      "B. Il permet d'accéder à Internet avec des ordinateurs qui ne possèdent pas le protocole IP",
      "C. Aucune de ces réponses",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question:
      "27. Soit l'adresse IP 192.168.100.33 et le masque 255.255.255.224. Quelle est l'adresse du BROADCAST ?",
    answers: [
      "A. 192.168.255.255",
      "B. 255.255.255.255",
      "C. 192.168.100.255",
      "D. 192.168.100.63",
    ],
    correct: 3,
  },
  {
    question: "28. Quelle est la taille de l'adresse MAC ?",
    answers: ["A. 2 octets", "B. 4 octets", "C. 6 octets", "D. 8 octets"],
    correct: 2,
  },
  {
    question: "29. Quelle méthode d'accès est utilisée en Ethernet ?",
    answers: ["A. CDMA", "B. CSMA", "C. TDMA", "D. TSMA"],
    correct: 1,
  },
  {
    question:
      "30. Quelle est la commande permettant d'obtenir la configuration IP actuelle d'un poste de travail Windows 2000 ?",
    answers: ["A. PING", "B. IPCONFIG", "C. NSLOOKUP", "D. WINIPCFG"],
    correct: 1,
  },
  {
    question:
      "31. Quelle commande SQL permet de supprimer complètement une table d'une base de données ?",
    answers: ["A. DELETE", "B. UPDATE", "C. DROP TABLE", "D. REMOVE"],
    correct: 2,
  },
  {
    question:
      "32. Quel avantage présente l'utilisation de composants réseau redondants sur un réseau ?",
    answers: [
      "A. Évolutivité",
      "B. Facilité de gestion",
      "C. Compatibilité",
      "D. Fiabilité",
    ],
    correct: 3,
  },
  {
    question: "33. À quoi sert le processus de routage ?",
    answers: [
      "A. Encapsuler des données utilisées pour communiquer sur un réseau",
      "B. Sélectionner les chemins utilisés pour diriger le trafic vers des réseaux de destination",
      "C. Convertir un nom URL en adresse IP",
      "D. Fournir un transfert de fichiers Internet sécurisé",
    ],
    correct: 1,
  },
  {
    question:
      "34. Comment un poste de travail reconnaît-il l'adresse MAC d'un autre poste ?",
    answers: [
      "A. Il utilise le protocole ARP et fait une démarche en BROADCAST sur le réseau LAN",
      "B. Il utilise la table de routage de son routeur GATE WAY",
      "C. Il utilise le protocole RIP pour découvrir tous les postes de travail disponibles sur le LAN",
      "D. Il utilise la table des adresses MAC du switch sur lequel il est connecté",
    ],
    correct: 0,
  },
  {
    question:
      "35. La configuration d'un PC est la suivante : Adresse : 10.1.1.121 Masque : 255.255.255.224 Passerelle : 10.1.1.254 Serveur DNS : 212.217.0.1. Pourquoi n'arrive-t-il pas à atteindre Internet ?",
    answers: [
      "A. 10.1.1.121 est une adresse privée et interdite sur Internet",
      "B. La passerelle par défaut du PC n'est pas la bonne",
      "C. Le serveur DNS n'est pas configuré",
      "D. Le masque utilisé n'est pas un masque de classe A",
    ],
    correct: 1,
  },
  {
    question:
      "36. Quelle est la technologie LAN la plus répandue dans le monde ?",
    answers: [
      "A. Token ring",
      "B. Ethernet",
      "C. FDDI",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question: "37. Le Power Over Ethernet permet de :",
    answers: [
      "A. Passer le courant électrique et le flux IP sur un même réseau",
      "B. Augmenter le débit des équipements",
      "C. Crypter les communications téléphoniques",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "38. Le GSM est une technologie mobile de :",
    answers: [
      "A. 1ère génération",
      "B. 2ème génération",
      "C. 3ème génération",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question: "39. Le GSM est un réseau à :",
    answers: [
      "A. Commutation de circuits",
      "B. Commutation de paquets",
      "C. Commutation de messages",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "40. Le GPRS est une évolution du réseau GSM qui utilise la :",
    answers: [
      "A. Commutation de circuits",
      "B. Commutation de paquets",
      "C. Commutation de messages",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
{
  question: "41. Quel est le résultat de l'expression 10 % 3 en programmation ?",
  answers: [
    "A. 3",
    "B. 1",
    "C. 0",
    "D. 10",
  ],
  correct: 1,
},
{
  question: "42. Quel opérateur permet de comparer deux valeurs pour vérifier si elles sont égales en JavaScript ?",
  answers: [
    "A. =",
    "B. ==",
    "C. !=",
    "D. +=",
  ],
  correct: 1,
},
{
  question: "43. Quelle commande SQL permet d'ajouter un nouvel enregistrement dans une table ?",
  answers: [
    "A. SELECT",
    "B. INSERT INTO",
    "C. UPDATE",
    "D. DROP TABLE",
  ],
  correct: 1,
},
{
  question: "44. Quelle structure de données fonctionne selon le principe LIFO (Last In, First Out) ?",
  answers: [
    "A. Une file (Queue)",
    "B. Une pile (Stack)",
    "C. Un tableau (Array)",
    "D. Une liste chaînée (Linked List)",
  ],
  correct: 1,
},
{
  question: "45. Quel est le rôle d'une clé étrangère (FOREIGN KEY) dans une base de données ?",
  answers: [
    "A. Identifier chaque enregistrement de manière unique",
    "B. Établir une relation entre deux tables",
    "C. Supprimer automatiquement une table",
    "D. Trier les enregistrements",
  ],
  correct: 1,
},
{
  question: "46. Quel est le résultat de l'exécution du code suivant en JavaScript ?",
  answers: [
    "A. 10",
    "B. 15",
    "C. 20",
    "D. 25",
  ],
  correct: 1,
},
{
  question: "47. Quel mot-clé permet de déclarer une constante en JavaScript ?",
  answers: [
    "A. var",
    "B. let",
    "C. const",
    "D. static",
  ],
  correct: 2,
},
  {
    question:
      "48. Combien y a-t-il de liens entre 5 équipements dans un réseau de topologie maillée ?",
    answers: ["A. 5", "B. 10", "C. 20", "D. Aucune de ces réponses"],
    correct: 1,
  },
  {
    question:
      "49. Quel est le système de communication mobile le plus déployé dans le monde ?",
    answers: ["A. WiMAX", "B. GSM-R", "C. GSM", "D. Aucune de ces réponses"],
    correct: 2,
  },
{
  question: "50. Quel opérateur permet de vérifier si une valeur est différente d'une autre en JavaScript ?",
  answers: [
    "A. ==",
    "B. =",
    "C. !=",
    "D. >=",
  ],
  correct: 2,
},
{
  question: "51. Quelle méthode JavaScript permet de convertir une chaîne de caractères en nombre entier ?",
  answers: [
    "A. parseInt()",
    "B. toString()",
    "C. push()",
    "D. join()",
  ],
  correct: 0,
},
{
  question: "52. Quelle méthode JavaScript permet d'ajouter un élément à la fin d'un tableau ?",
  answers: [
    "A. pop()",
    "B. shift()",
    "C. push()",
    "D. unshift()",
  ],
  correct: 2,
},
  {
    question:
      "53. À hautes fréquences, une capacitance se comporte théoriquement comme :",
    answers: [
      "A. Un court-circuit",
      "B. Un interrupteur",
      "C. Un amplificateur",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question:
      "54. À hautes fréquences, une inductance se comporte théoriquement comme :",
    answers: [
      "A. Un court-circuit",
      "B. Un interrupteur",
      "C. Un amplificateur",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question:
      "55. Pour transformer une tension alternative en tension continue, on doit utiliser :",
    answers: [
      "A. Un transistor",
      "B. Un pont de diodes",
      "C. Des résistances",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question:
      "56. Quelle structure de données permet de stocker plusieurs valeurs du même type dans une seule variable ?",
    answers: [
      "A. Une fonction",
      "B. Un tableau",
      "C. Une condition",
      "D. Une boucle",
    ],
    correct: 1,
  },
  {
    question: "57. Une batterie fournit un courant électrique :",
    answers: [
      "A. Alternatif",
      "B. Synchrone",
      "C. Continu",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question: "58. Le wattmètre est un appareil qui mesure :",
    answers: [
      "A. L'intensité du courant",
      "B. La tension",
      "C. La puissance",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question: "59. Qu'est-ce que le chipset de la carte mère ?",
    answers: [
      "A. Le support accueillant le processeur",
      "B. Le support accueillant la barrette de mémoire (RAM)",
      "C. Un jeu de composants permettant les échanges entre les divers éléments d'un ordinateur",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question:
      "60. Comment se nomme l'unité minimale allouée par un disque dur lors d'une opération d'écriture ?",
    answers: [
      "A. Le secteur",
      "B. Le cluster",
      "C. Le bloc",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question:
      "61. Parmi les périphériques suivants, lesquels sont les périphériques d'entrée (mais pas d'entrée-sortie) ?",
    answers: [
      "A. Un écran",
      "B. Un lecteur de CD-ROM",
      "C. Un scanner",
      "D. Une clé USB",
    ],
    correct: 2,
  },
  {
    question:
      "62. Comment s'appelle le programme qui gère le stockage des fichiers sur un ordinateur ?",
    answers: [
      "A. Le navigateur de fichiers",
      "B. L'explorateur de fichiers",
      "C. Le système de fichiers",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question: "63. À quoi correspondent 3 GHz d'un microprocesseur ?",
    answers: [
      "A. Le nombre de transistors",
      "B. La fréquence d'horloge",
      "C. La finesse de gravure",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question:
      "64. Quelle est l'unité d'information fondamentale en informatique ?",
    answers: [
      "A. Le bit",
      "B. L'octet",
      "C. Le binaire",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "65. Le basic input output system (BIOS) :",
    answers: [
      "A. Gère en continu l'activité de l'ordinateur",
      "B. Initialise et identifie au démarrage les périphériques et l'emplacement du système d'exploitation",
      "C. S'occupe de la gestion de la mémoire vive",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
{
  question: "66. Quelle commande SQL permet de modifier les données existantes dans une table ?",
  answers: [
    "A. SELECT",
    "B. INSERT INTO",
    "C. UPDATE",
    "D. CREATE TABLE",
  ],
  correct: 2,
},
  {
    question: "67. Qu'est-ce que le NTFS ?",
    answers: [
      "A. Un protocole de cryptage de données",
      "B. Un protocole de communication sécurisé",
      "C. Un système d'organisation de fichier",
      "D. Un protocole de transfert des fichiers",
    ],
    correct: 2,
  },
  {
    question: "68. Qu'est-ce qu'un driver au sens de Windows ?",
    answers: [
      "A. Un protocole de fonctionnement pour toutes les cartes réseau",
      "B. Une interface de gestion des imprimantes",
      "C. Une interface entre le matériel et l'OS",
      "D. Une interface de gestion des cartes graphiques",
    ],
    correct: 2,
  },
  {
    question: "69. Quel est le composant qui exécute les programmes ?",
    answers: [
      "A. Le système d'exploitation",
      "B. Le processeur",
      "C. La mémoire vive",
      "D. Le disque dur",
    ],
    correct: 1,
  },
  {
    question:
      "70. Parmi ces 4 types de RAID, lequel n'a pas de tolérance de pannes ?",
    answers: ["A. RAID 4", "B. RAID 1", "C. RAID 0", "D. RAID 5"],
    correct: 2,
  },
  {
    question:
      "71. Dans une URL, la partie initiale, par exemple http://, désigne :",
    answers: [
      "A. L'adresse",
      "B. L'amorce",
      "C. Le protocole",
      "D. L'encodage",
    ],
    correct: 2,
  },
  {
    question:
      "72. Quel outil Windows permet d'interroger un serveur DNS afin d'obtenir les informations d'un domaine ou d'un hôte ?",
    answers: [
      "A. Nslookup",
      "B. Ipconfig",
      "C. Flushdns",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question:
      "73. Le serveur DHCP est un ordinateur qui affecte des adresses automatiquement à d'autres ordinateurs :",
    answers: [
      "A. Oui",
      "B. Non",
      "C. Aucune de ces réponses",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question:
      "74. Quel est le rôle d'une clé primaire (PRIMARY KEY) dans une base de données ?",
    answers: [
      "A. Relier deux tables uniquement",
      "B. Identifier chaque enregistrement de manière unique",
      "C. Trier les données par ordre alphabétique",
      "D. Supprimer les doublons automatiquement",
    ],
    correct: 1,
  },
  {
    question:
      "75. Parmi les éléments ci-dessous, choisissez ceux en relation avec la sécurité physique :",
    answers: [
      "A. Pare-feu, sonde IPS, routeur",
      "B. Antivirus, filtrage URL, filtrage Anti-spam",
      "C. Systèmes de contrôle d'accès, caméras, coffres-forts, systèmes d'alarme",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question:
      "76. Un système permettant de protéger un réseau d'ordinateurs des intrusions provenant d'un réseau tiers, on parle de :",
    answers: [
      "A. Pare-feu",
      "B. Routeur",
      "C. Switch",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "77. Quelle est la fonction d'une IPS ?",
    answers: [
      "A. Un dispositif pour bloquer les attaques par intrusion",
      "B. Un dispositif de scan de virus",
      "C. Un pare-feu",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "78. HTTPS signifie :",
    answers: [
      "A. Strict Hypertext Transfer Protocol",
      "B. Hypertext Transfer Protocol Secure",
      "C. Hypertext Transfer Protocol Strict transport security",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question: "79. Parmi ces protocoles lequel est sécurisé ?",
    answers: ["A. HTTP", "B. SHTTP", "C. HTTPS", "D. SMTP"],
    correct: 2,
  },
  {
    question: "80. Quel protocole est dit sécurisé parmi les suivants ?",
    answers: ["A. POP3", "B. SSH", "C. Telnet", "D. Aucune de ces réponses"],
    correct: 1,
  },
  {
    question:
      "81. Quelle instruction permet de répéter un bloc de code tant qu'une condition est vraie ?",
    answers: ["A. IF", "B. WHILE", "C. SWITCH", "D. RETURN"],
    correct: 1,
  },
  {
    question: "82. L'anti-spam est une solution qui permet de lutter contre :",
    answers: [
      "A. Les sites web malicieux",
      "B. Les virus",
      "C. Le courrier indésirable",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question: "83. Un logiciel espion est :",
    answers: ["A. Spyware", "B. Virus", "C. Spam", "D. Aucune de ces réponses"],
    correct: 0,
  },
  {
    question:
      "84. Un des termes ci-dessous décrit virus, vers et chevaux de Troie :",
    answers: [
      "A. Malware",
      "B. Spam",
      "C. Phishing",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question:
      "85. Une technique consistant à obtenir des informations de la part des utilisateurs par téléphone, courrier électronique, courrier traditionnel ou contact direct. On parle de :",
    answers: [
      "A. Accrochage",
      "B. Espionnage",
      "C. Ingénierie sociale (social engineering)",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question: "86. Que signifie l'acronyme SGBDR ?",
    answers: [
      "A. Système de Gestion de Base de Données Relationnelles",
      "B. Stratégie de Guerre Basique Des Roux",
      "C. Système de Gestion de Base de Données Réelles",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "87. Que veut dire SQL ?",
    answers: [
      "A. Strong Question Language",
      "B. Structured Query Language",
      "C. Simple Query Language",
      "D. Structured Question Language",
    ],
    correct: 1,
  },
  {
    question: "88. Une base de données ne peut pas être :",
    answers: [
      "A. Relationnelle",
      "B. Réseau",
      "C. Asymétrique",
      "D. Hiérarchique",
    ],
    correct: 2,
  },
  {
    question: "89. À quoi sert une contrainte d'intégrité ?",
    answers: [
      "A. À obtenir une indépendance logique",
      "B. À garder les bases cohérentes",
      "C. À intégrer des applications existantes",
      "D. À vérifier les données lors des changements",
    ],
    correct: 1,
  },
  {
    question: "90. Une base de données est cohérente lorsque :",
    answers: [
      "A. Toutes les contraintes d'intégrité sont respectées",
      "B. Toutes les contraintes d'intégrité référentielles sont respectées",
      "C. Les données saisies ne sont pas contradictoires",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "91. Que signifie la contrainte « not null » sur un attribut ?",
    answers: [
      "A. La colonne doit être renseignée",
      "B. La colonne doit avoir des valeurs différentes de zéro",
      "C. Aucune de ces réponses",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "92. Un algorithme est :",
    answers: [
      "A. Un programme écrit en BASIC",
      "B. Un programme écrit en Python",
      "C. Une suite d'actions à exécuter, de la première à la dernière",
      "D. Aucune de ces réponses",
    ],
    correct: 2,
  },
  {
    question:
      "93. Quelle sera la valeur affichée à la fin de l'exécution de l'algorithme suivant ?",
    answers: ["A. 4", "B. 9", "C. 1", "D. Aucune de ces réponses"],
    correct: 1,
  },
  {
    question:
      "94. Lequel de ces opérateurs n'est pas utilisé en algèbre de Boole ?",
    answers: ["A. AND", "B. XOR", "C. XAND", "D. Aucune de ces réponses"],
    correct: 2,
  },
  {
    question:
      "95. Comment appelle-t-on l'opération suivante en programmation ? nombre++ en langage C ;",
    answers: [
      "A. L'incrémentation",
      "B. L'augmentation",
      "C. La supplémentation",
      "D. Aucune de ces réponses",
    ],
    correct: 0,
  },
  {
    question: "96. Combien de fois le message « Salut » sera-t-il affiché ?",
    answers: ["A. 0 fois", "B. 1 fois", "C. 2 fois", "D. 15 fois"],
    correct: 1,
  },
  {
    question:
      "97. Si je veux additionner 1 + 2 + 3 + 4 ... et jusqu'à 50 dans une variable, quelle boucle correspond le mieux ?",
    answers: ["A. While", "B. If", "C. For", "D. Select"],
    correct: 2,
  },
  {
    question: "98. Le langage HTML est un langage :",
    answers: [
      "A. De programmation classique",
      "B. Qui permet de structurer une page Web",
      "C. Compilé",
      "D. Aucune de ces réponses",
    ],
    correct: 1,
  },
  {
    question: "99. Le nombre binaire 1011 vaut en décimal :",
    answers: ["A. 7", "B. 9", "C. 33", "D. 11"],
    correct: 3,
  },
  {
    question: "100. UML est :",
    answers: [
      "A. La partie « données » de la méthode MERISE",
      "B. Un standard de communication",
      "C. Un type de port",
      "D. Un langage de modélisation",
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
