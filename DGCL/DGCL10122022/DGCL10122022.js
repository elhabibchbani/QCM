const questions = [
  {
    question:
      "1) Quelle est la définition du protocole de communication HTTP ?",
    answers: [
      "a) Protocole de transfert de fichiers",
      "b) Protocole de test de transmission hypermédia",
      "c) Protocole utilisé pour le transfert de courrier électronique",
      "d) Protocole sécurisé pour échange d'informations critiques",
      "e) Protocole grâce auquel un client web et un serveur web peuvent dialoguer",
    ],
    correct: 4,
  },
  {
    question: "2) Qu'est-ce que le protocole HTTPS ?",
    answers: [
      "a) Le protocole HTTP en version multiposte",
      "b) Une ancienne version du protocole HTTP",
      "c) Un protocole d'accès aux vidéos numériques",
      "d) La version sécurisée du protocole HTTP",
      "e) Un langage de description de page comme le format HTML",
    ],
    correct: 3,
  },
  {
    question:
      "3) Dans la liste suivante, quel sigle ne désigne pas un protocole ?",
    answers: ["a) POP", "b) HTTP", "c) SMTP", "d) TCP", "e) HTML"],
    correct: 4,
  },
  {
    question:
      "4) Parmi ces protocoles, lesquels sont des protocoles de courrier électronique ?",
    answers: ["a) IMAP", "b) POP", "c) HTTPS", "d) SMTP"],
    correct: [0, 1, 3],
  },
  {
    question: "5) Que désigne Intranet ?",
    answers: [
      "a) Une technique de sauvegarde de données dans une entreprise, sur un serveur spécialisé",
      "b) Un réseau de fibres optiques installé dans un immeuble",
      "c) Un réseau informatique utilisé à l'intérieur d'une entreprise utilisant les techniques de communication d'Internet",
      "d) Un code de bonne conduite au sein d'une entreprise",
      "e) Un ensemble de logiciels libres",
    ],
    correct: 2,
  },
  {
    question: "6) Qu'est-ce que l'hameçonnage (phishing) ?",
    answers: [
      "a) Un procédé frauduleux permettant de collecter des informations personnelles",
      "b) Une technique d'analyse du trafic réseau",
      "c) Une méthode de recherche d'informations sur Internet",
      "d) Un système d'envoi massif de courriers électroniques",
      "e) Une procédure de collecte de données par formulaire sécurisé",
    ],
    correct: 0,
  },
  {
    question:
      "7) En matière de sécurité informatique, que désigne-t-on par cheval de Troie ?",
    answers: [
      "a) Un courrier électronique malveillant qui s'envoie lui-même aux adresses contenues dans tout le carnet d'adresses de l'ordinateur sur lequel il se trouve",
      "b) Un logiciel malveillant qui s'installe discrètement sur l'ordinateur et collecte et envoie des informations personnelles à des organismes tiers",
      "c) Un logiciel malveillant ayant l'apparence d'un logiciel inoffensif mais qui comporte des instructions nuisibles qui s'exécutent une fois le logiciel installé",
      "d) Un logiciel malveillant qui se propage par courrier électronique en exploitant les failles des logiciels de messagerie",
    ],
    correct: 2,
  },
  {
    question:
      "8) Dans un tableur, que se passe-t-il si le résultat d'une formule affiche ###### ?",
    answers: [
      "a) Le format de nombre n'est pas compatible avec la donnée",
      "b) La formule contient une erreur",
      "c) La formule n'a pas de sens du point de vue mathématique",
      "d) Il n'y a pas assez de mémoire pour que le logiciel fasse le calcul",
      "e) La colonne est trop étroite pour afficher le résultat tout entier",
    ],
    correct: 4,
  },
  {
    question:
      "9) Dans un tableur, si on copie la formule =A$1*B4 de A4 en B5, quelle formule obtient-on en B5 ?",
    answers: [
      "a) =C$2*C5",
      "b) =B2*C5",
      "c) =B$2*C4",
      "d) =B$1*C5",
      "e) =C$1*C4",
    ],
    correct: 3,
  },
  {
    question:
      "10) Quels sont les deux critères utilisés pour choisir un support réseau parmi les différentes options ?",
    answers: [
      "a) Le nombre de périphériques intermédiaires installés sur le réseau",
      "b) Le coût des périphériques finaux utilisés sur le réseau",
      "c) L'environnement dans lequel le support sera installé",
      "d) La distance sur laquelle le support peut transporter correctement un signal",
      "e) Les types de données devant être priorisés",
    ],
    correct: [2, 3],
  },
  {
    question:
      "11) Quelle interface permet la gestion à distance d'un commutateur de couche 2 ?",
    answers: [
      "a) L'interface virtuelle du commutateur",
      "b) L'interface du port de console",
      "c) L'interface AUX",
      "d) La première interface de port Ethernet",
    ],
    correct: 0,
  },
  {
    question:
      "12) Lorsque l'adressage IPv4 est configuré manuellement sur un serveur web, quelle propriété de la configuration IPv4 identifie la partie réseau et la partie hôte d'une adresse IPv4 ?",
    answers: [
      "a) L'adresse du serveur DNS",
      "b) L'adresse du serveur DHCP",
      "c) La passerelle par défaut",
      "d) Le masque de sous-réseau",
    ],
    correct: 3,
  },
  {
    question:
      "13) Reportez-vous à l'illustration. Le serveur B tente de contacter l'hôte A. Quelles deux instructions identifient correctement l'adressage que le serveur B va générer dans le processus ?",
    answers: [
      "A) Serveur B va générer un paquet avec l'adresse IP de destination du routeur B",
      "b) Serveur B va générer un paquet avec l'adresse IP de destination de l'hôte A",
      "c) Serveur B va générer un paquet avec l'adresse MAC de destination du routeur B",
      "d) Serveur B va générer un paquet avec l'adresse MAC de destination du routeur A",
      "e) Serveur B va générer un paquet avec l'adresse IP de destination du routeur B",
    ],
    correct: [1, 2],
  },
  {
    question:
      "14) Quel protocole est attaqué lorsqu'un cybercriminel fournit une passerelle non valide afin de lancer une attaque de l'homme du milieu (Man-in-the-Middle) ?",
    answers: ["a) HTTP ou HTTPS", "b) DHCP", "c) ICMP", "d) DNS"],
    correct: 1,
  },
  {
    question:
      "15) Parmi ces caractéristiques, laquelle ne correspond pas aux concepts de l'approche orientée objet ?",
    answers: [
      "a) Agrégation",
      "b) Encapsulation",
      "c) Similitude",
      "d) Polymorphisme",
    ],
    correct: 2,
  },
  {
    question:
      "16) Quel utilitaire permet de consulter les mots de passe Web stockés sur un ordinateur Windows 10 ?",
    answers: [
      "A) Comptes d'utilisateurs",
      "B) Périphériques et imprimantes",
      "C) Outil de gestion des identifiants",
      "D) Centre Réseau et partage",
    ],
    correct: 2,
  },
  {
    question:
      "17) Quelle association entre les langages de script et leurs extensions est entièrement correcte ?",
    answers: [
      "A) Linux : .ps1 | Windows : .py | PowerShell : .sh | Python : .bat",
      "B) Linux : .bat | Windows : .sh | PowerShell : .py | Python : .ps1",
      "C) Linux : .sh | Windows : .bat | PowerShell : .ps1 | Python : .py",
      "D) Linux : .py | Windows : .ps1 | PowerShell : .bat | Python : .sh",
    ],
    correct: 2,
  },
  {
    question:
      "18) Dans quelles situations le technicien devra-t-il très probablement réinstaller complètement le système d'exploitation si une sauvegarde n'a pas été effectuée ?",
    answers: [
      "a) Un utilisateur a besoin d'accéder à une nouvelle imprimante",
      "b) Le système d'exploitation existant est endommagé",
      "c) Le logiciel de sécurité existant doit être mis à niveau",
      "d) L'ordinateur est transféré sur un autre réseau",
      "e) On installe un disque dur de rechange sur un ordinateur",
    ],
    correct: [1, 4],
  },
  {
    question:
      "19) Quels éléments sont des dispositifs de sécurité biométriques ?",
    answers: [
      "a) Lecteur d'empreintes digitales",
      "b) Scanner de l'iris de l'œil",
      "c) Carte à puce",
      "d) Reconnaissance vocale",
      "e) Jeton d'authentification",
      "f) Mot de passe",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "20) Une entreprise de sécurité tierce effectue l'audit de sécurité d'une société et lui recommande d'utiliser le protocole RDP (Remote Desktop Protocol). Quelles sont les caractéristiques du protocole RDP de Microsoft ?",
    answers: [
      "a) Le protocole RDP se connecte au port TCP 22",
      "b) Le protocole RDP nécessite un client Windows",
      "c) Le protocole RDP utilise une session chiffrée",
      "d) RDP est un protocole de terminal virtuel de réseau de ligne de commande",
      "e) Le protocole RDP se connecte au port TCP 3389",
    ],
    correct: [2, 4],
  },
  {
    question:
      "21) Un ordinateur peut envoyer une requête ping à l'extérieur du réseau local, mais il ne peut accéder à aucun service Web. Quelle est la cause la plus probable de ce problème ?",
    answers: [
      "a) Le pare-feu Windows bloque le port 80",
      "b) Le pare-feu Windows bloque le port 23 par défaut",
      "c) La carte réseau de l'ordinateur est défectueuse",
      "d) Les paramètres BIOS ou CMOS bloquent l'accès au Web",
    ],
    correct: 0,
  },
  {
    question:
      "22) Un technicien remarque qu'une application ne répond pas aux commandes et que l'ordinateur semble répondre lentement lorsque les applications s'ouvrent. Quel est le meilleur outil d'administration à utiliser pour forcer la libération de ressources système à partir de l'application qui ne répond pas ?",
    answers: [
      "a) Gestionnaire des tâches",
      "b) Ajouter ou supprimer des programmes",
      "c) Observateur d'événements",
      "d) Restauration du système",
    ],
    correct: 0,
  },
  {
    question:
      "23) Dans quel dossier les fichiers d'application des programmes 32 bits sont-ils généralement situés sur un ordinateur équipé de l'édition 64 bits de Windows 10 ?",
    answers: [
      "a) C:\\Users",
      "b) C:\\Program Files",
      "c) C:\\Application Data",
      "d) C:\\Program Files (x86)",
    ],
    correct: 3,
  },
  {
    question:
      "24) Un utilisateur signale qu'un PC perd des fichiers, n'en ouvre pas certains et fonctionne au ralenti. Le technicien soupçonne que cela est lié au disque dur. Que faut-il faire pour protéger les données et déterminer l'origine du problème sans risquer une panne complète du disque ?",
    answers: [
      "a) Exécuter la commande format, puis remplacer le disque dur",
      "b) Exécuter la commande chkdsk, puis format",
      "c) Sauvegarder tous les fichiers importants, puis remplacer le disque dur",
      "d) Sauvegarder tous les fichiers importants, puis exécuter chkdsk",
      "e) Exécuter chkdsk, puis sauvegarder tous les fichiers importants",
    ],
    correct: 3,
  },
  {
    question:
      "25) À quoi sert la clé primaire d'une table (attribut PRIMARY KEY en SQL) ?",
    answers: [
      "a) Enregistrer toutes les données",
      "b) Effectuer les mises à jour",
      "c) Distinguer chaque enregistrement de façon unique",
      "d) Dupliquer plusieurs lignes de tables",
    ],
    correct: 2,
  },
  {
    question:
      "26) Comment s'appelle l'opération de liaison de données qui permet d'interroger plusieurs tables à la fois ?",
    answers: [
      "a) Joint Venture",
      "b) Jonction",
      "c) Jointure",
      "d) Juxtaposition",
    ],
    correct: 2,
  },
  {
    question:
      "27) Parmi les éléments ci-dessous, quelles sont les fonctions standards du langage SQL ?",
    answers: [
      "a) SUM",
      "b) COUNT",
      "c) MAX",
      "d) RECHERCHEV",
      "e) DATEDIF",
      "f) AVG",
    ],
    correct: [0, 1, 2, 5],
  },
  {
    question:
      "28) Dans une base de données relationnelle, je souhaite sélectionner tous les enregistrements de la table nommée Produits. Choisissez la requête SQL convenable :",
    answers: [
      "a) SELECT DISTINCT id FROM Produits",
      "b) SELECT * FROM Produits WHERE reference NOT NULL",
      "c) SELECT * FROM Produits",
      "d) SELECT * WHERE Produits",
    ],
    correct: 2,
  },
  {
    question:
      "29) Quel équipement réseau permet de connecter plusieurs ordinateurs dans un réseau local (LAN) ?",
    answers: [
      "A) Un scanner",
      "B) Un modem",
      "C) Un commutateur (Switch)",
      "D) Un répéteur USB",
    ],
    correct: 2,
  },
  {
    question:
      "30) Quelle adresse appartient à la plage des adresses IPv4 privées de classe C ?",
    answers: [
      "A) 8.8.8.8",
      "B) 192.168.1.10",
      "C) 172.32.1.5",
      "D) 200.10.10.1",
    ],
    correct: 1,
  },
  {
    question:
      "31) Quel protocole permet de traduire un nom de domaine en adresse IP ?",
    answers: ["A) FTP", "B) SMTP", "C) DNS", "D) DHCP"],
    correct: 2,
  },
  {
    question: "32) Quel est le port TCP par défaut du protocole HTTPS ?",
    answers: ["A) 21", "B) 80", "C) 22", "D) 443"],
    correct: 3,
  },
  {
    question:
      "33) Quel protocole permet d'attribuer automatiquement une adresse IP ?",
    answers: ["A) DHCP", "B) HTTP", "C) ARP", "D) SMTP"],
    correct: 0,
  },
  {
    question:
      "34) Quelle commande Windows permet d'afficher la configuration IP détaillée ?",
    answers: ["A) ping", "B) ipconfig /all", "C) format", "D) mkdir"],
    correct: 1,
  },
  {
    question: "35) À quoi sert la commande ping ?",
    answers: [
      "A) Formater un disque",
      "B) Afficher les fichiers cachés",
      "C) Tester la connectivité réseau",
      "D) Créer une adresse IP",
    ],
    correct: 2,
  },
  {
    question: "36) Quel équipement permet de relier plusieurs réseaux IP ?",
    answers: [
      "A) Un clavier",
      "B) Un concentrateur (Hub)",
      "C) Une imprimante",
      "D) Un routeur",
    ],
    correct: 3,
  },
  {
    question:
      "37) Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
    answers: ["A) Ransomware", "B) Adware", "C) Pare-feu", "D) Pilote"],
    correct: 0,
  },
  {
    question:
      "38) Quel outil filtre le trafic entrant et sortant selon des règles de sécurité ?",
    answers: [
      "A) Un éditeur de texte",
      "B) Un pare-feu",
      "C) Un compilateur",
      "D) Un gestionnaire de fichiers",
    ],
    correct: 1,
  },
  {
    question:
      "39) Quel principe de sécurité consiste à accorder uniquement les droits nécessaires ?",
    answers: [
      "A) Disponibilité",
      "B) Redondance",
      "C) Moindre privilège",
      "D) Compression",
    ],
    correct: 2,
  },
  {
    question:
      "40) Quel outil Windows permet de gérer les partitions et les volumes d'un disque ?",
    answers: [
      "A) Bloc-notes",
      "B) Gestionnaire des tâches",
      "C) Nettoyage de disque",
      "D) Gestion des disques",
    ],
    correct: 3,
  },
  {
    question:
      "41) Quel raccourci clavier permet d'ouvrir directement le Gestionnaire des tâches sous Windows ?",
    answers: [
      "A) Ctrl + Maj + Échap",
      "B) Ctrl + C",
      "C) Alt + F4",
      "D) Windows + L",
    ],
    correct: 0,
  },
  {
    question:
      "42) Quelle commande Windows permet de vérifier et réparer les fichiers système protégés ?",
    answers: ["A) ipconfig", "B) sfc /scannow", "C) dir", "D) hostname"],
    correct: 1,
  },
  {
    question:
      "43) Quelle clause SQL permet de filtrer les lignes selon une condition ?",
    answers: ["A) ORDER BY", "B) GROUP BY", "C) WHERE", "D) SELECT"],
    correct: 2,
  },
  {
    question:
      "44) Quelle commande SQL permet de supprimer complètement une table ?",
    answers: ["A) UPDATE", "B) DELETE", "C) SELECT", "D) DROP TABLE"],
    correct: 3,
  },
  {
    question:
      "45) Quelle clause SQL permet de trier les résultats d'une requête ?",
    answers: ["A) ORDER BY", "B) WHERE", "C) HAVING", "D) DISTINCT"],
    correct: 0,
  },
  {
    question:
      "46) Quelle instruction SQL permet d'ajouter un nouvel enregistrement dans une table ?",
    answers: ["A) ALTER", "B) INSERT INTO", "C) UPDATE", "D) DROP"],
    correct: 1,
  },
  {
    question:
      "47) Quelle contrainte SQL interdit les valeurs NULL dans une colonne ?",
    answers: ["A) UNIQUE", "B) DEFAULT", "C) NOT NULL", "D) FOREIGN KEY"],
    correct: 2,
  },
  {
    question:
      "48) Quelle structure algorithmique permet de répéter un nombre déterminé de fois ?",
    answers: ["A) SI...ALORS", "B) SELON", "C) LIRE", "D) POUR"],
    correct: 3,
  },
  {
    question:
      "49) Quel composant d'un ordinateur exécute les instructions des programmes ?",
    answers: [
      "A) Le disque dur",
      "B) Le processeur (CPU)",
      "C) L'écran",
      "D) Le clavier",
    ],
    correct: 1,
  },
  {
    question:
      "50) Quelle mémoire perd son contenu lorsque l'ordinateur est éteint ?",
    answers: ["A) ROM", "B) SSD", "C) RAM", "D) Disque dur"],
    correct: 2,
  },
  {
    question: "51) Quel est le rôle principal du système d'exploitation ?",
    answers: [
      "A) Créer uniquement des documents",
      "B) Gérer les ressources matérielles et logicielles",
      "C) Remplacer le processeur",
      "D) Augmenter la capacité du disque dur",
    ],
    correct: 1,
  },
  {
    question: "52) Quelle unité mesure la fréquence d'un processeur ?",
    answers: ["A) Le Go", "B) Le bit", "C) Le GHz", "D) Le Mo"],
    correct: 2,
  },
  {
    question:
      "53) Quel périphérique permet de saisir du texte dans un ordinateur ?",
    answers: [
      "A) L'imprimante",
      "B) Le clavier",
      "C) Le haut-parleur",
      "D) Le vidéoprojecteur",
    ],
    correct: 1,
  },
  {
    question: "54) Quel type de logiciel permet de naviguer sur Internet ?",
    answers: [
      "A) Un navigateur Web",
      "B) Un tableur",
      "C) Un compilateur",
      "D) Un antivirus",
    ],
    correct: 0,
  },
  {
    question:
      "55) Quelle extension correspond généralement à un document PDF ?",
    answers: ["A) .docx", "B) .xlsx", "C) .pdf", "D) .pptx"],
    correct: 2,
  },
  {
    question:
      "56) Dans Microsoft Excel, quelle fonction permet de calculer la somme de plusieurs cellules ?",
    answers: ["A) MOYENNE()", "B) SOMME()", "C) MAX()", "D) NB()"],
    correct: 1,
  },
  {
    question:
      "57) Dans Excel, quelle fonction permet de calculer la moyenne d'une plage de cellules ?",
    answers: ["A) SOMME()", "B) MIN()", "C) MOYENNE()", "D) NBVAL()"],
    correct: 2,
  },
  {
    question:
      "58) Dans Excel, quelle référence de cellule est totalement absolue ?",
    answers: ["A) A1", "B) A$1", "C) $A1", "D) $A$1"],
    correct: 3,
  },
  {
    question:
      "59) Quel logiciel de la suite Microsoft Office est principalement utilisé pour créer des présentations ?",
    answers: ["A) Word", "B) Excel", "C) PowerPoint", "D) Access"],
    correct: 2,
  },
  {
    question:
      "60) Quel raccourci clavier permet de copier un élément sous Windows ?",
    answers: ["A) Ctrl + X", "B) Ctrl + C", "C) Ctrl + V", "D) Ctrl + Z"],
    correct: 1,
  },
  {
    question: "61) Quel raccourci clavier permet de coller un élément copié ?",
    answers: ["A) Ctrl + P", "B) Ctrl + A", "C) Ctrl + V", "D) Ctrl + S"],
    correct: 2,
  },
  {
    question: "62) Quel raccourci clavier permet d'enregistrer un document ?",
    answers: ["A) Ctrl + S", "B) Ctrl + D", "C) Ctrl + F", "D) Ctrl + N"],
    correct: 0,
  },
  {
    question:
      "63) Quel format est principalement utilisé pour les images compressées ?",
    answers: ["A) .mp3", "B) .jpg", "C) .exe", "D) .sql"],
    correct: 1,
  },
  {
    question:
      "64) Quel langage est principalement utilisé pour structurer une page Web ?",
    answers: ["A) HTML", "B) SQL", "C) Python", "D) C"],
    correct: 0,
  },
  {
    question:
      "65) Quel langage est principalement utilisé pour mettre en forme une page Web ?",
    answers: ["A) PHP", "B) CSS", "C) SQL", "D) Java"],
    correct: 1,
  },
  {
    question:
      "66) Quel langage permet d'ajouter des interactions dynamiques à une page Web ?",
    answers: ["A) JavaScript", "B) HTML uniquement", "C) SQL", "D) XML"],
    correct: 0,
  },
  {
    question: "67) Que signifie l'acronyme URL ?",
    answers: [
      "A) Uniform Resource Locator",
      "B) Universal Router Link",
      "C) User Reference Language",
      "D) Unified Resource Login",
    ],
    correct: 0,
  },
  {
    question:
      "68) Quel protocole est utilisé pour transférer des fichiers entre un client et un serveur ?",
    answers: ["A) FTP", "B) SMTP", "C) DHCP", "D) ICMP"],
    correct: 0,
  },
  {
    question:
      "69) Quel protocole est principalement utilisé pour envoyer des courriers électroniques ?",
    answers: ["A) POP3", "B) SMTP", "C) IMAP", "D) DNS"],
    correct: 1,
  },
  {
    question:
      "70) Quel protocole permet de recevoir et de synchroniser les courriers électroniques sur plusieurs appareils ?",
    answers: ["A) FTP", "B) HTTP", "C) IMAP", "D) ARP"],
    correct: 2,
  },
  {
    question:
      "71) Quelle commande permet d'afficher le contenu d'un répertoire sous Windows ?",
    answers: ["A) dir", "B) ping", "C) ipconfig", "D) taskkill"],
    correct: 0,
  },
  {
    question:
      "72) Quelle commande permet de créer un nouveau répertoire sous Windows ?",
    answers: ["A) del", "B) mkdir", "C) ping", "D) cls"],
    correct: 1,
  },
  {
    question:
      "73) Quelle commande permet de supprimer un fichier sous Windows ?",
    answers: ["A) copy", "B) rename", "C) del", "D) cd"],
    correct: 2,
  },
  {
    question:
      "74) Quel système de fichiers est couramment utilisé par Windows ?",
    answers: ["A) NTFS", "B) EXT4", "C) APFS", "D) HFS+"],
    correct: 0,
  },
  {
    question: "75) Quel système de fichiers est couramment utilisé par Linux ?",
    answers: [
      "A) FAT12",
      "B) EXT4",
      "C) NTFS uniquement",
      "D) exFAT uniquement",
    ],
    correct: 1,
  },
  {
    question:
      "76) Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
    answers: ["A) pwd", "B) ls", "C) cd", "D) mkdir"],
    correct: 1,
  },
  {
    question: "77) Quelle commande Linux permet de changer de répertoire ?",
    answers: ["A) cd", "B) rm", "C) cat", "D) clear"],
    correct: 0,
  },
  {
    question: "78) Quelle commande Linux permet de supprimer un fichier ?",
    answers: ["A) cp", "B) mv", "C) rm", "D) ls"],
    correct: 2,
  },
  {
    question:
      "79) En programmation, quelle instruction permet d'exécuter un bloc de code uniquement si une condition est vraie ?",
    answers: ["A) POUR", "B) SI...ALORS", "C) TANT QUE", "D) LIRE"],
    correct: 1,
  },
  {
    question:
      "80) Quelle boucle permet de répéter des instructions tant qu'une condition est vraie ?",
    answers: ["A) SI", "B) SELON", "C) TANT QUE", "D) ÉCRIRE"],
    correct: 2,
  },
  {
    question:
      "81) Quel opérateur permet de vérifier l'égalité entre deux valeurs dans de nombreux langages de programmation ?",
    answers: ["A) =", "B) ==", "C) +", "D) !="],
    correct: 1,
  },
  {
    question:
      "82) Quel type de donnée permet de stocker une valeur vraie ou fausse ?",
    answers: ["A) Entier", "B) Chaîne", "C) Booléen", "D) Réel"],
    correct: 2,
  },
  {
    question: "83) Quel type de donnée permet de stocker un nombre entier ?",
    answers: ["A) Integer", "B) String", "C) Boolean", "D) Character"],
    correct: 0,
  },
  {
    question:
      "84) En algorithmique, quelle instruction permet de recevoir une valeur saisie par l'utilisateur ?",
    answers: ["A) ÉCRIRE", "B) LIRE", "C) AFFICHER", "D) FIN"],
    correct: 1,
  },
  {
    question:
      "85) En algorithmique, quelle instruction permet d'afficher un résultat à l'écran ?",
    answers: ["A) LIRE", "B) SAISIR", "C) ÉCRIRE", "D) TANT QUE"],
    correct: 2,
  },
  {
    question:
      "86) Dans la programmation orientée objet, quel concept consiste à regrouper les données et les méthodes dans une même unité ?",
    answers: ["A) Encapsulation", "B) Compilation", "C) Itération", "D) Tri"],
    correct: 0,
  },
  {
    question:
      "87) En programmation orientée objet, quel concept permet à une classe de récupérer les caractéristiques d'une autre classe ?",
    answers: ["A) Polymorphisme", "B) Héritage", "C) Boucle", "D) Déclaration"],
    correct: 1,
  },
  {
    question: "88) Quel est le rôle d'un constructeur dans une classe ?",
    answers: [
      "A) Supprimer automatiquement la classe",
      "B) Initialiser un objet lors de sa création",
      "C) Compiler le système d'exploitation",
      "D) Fermer une connexion réseau",
    ],
    correct: 1,
  },
  {
    question:
      "89) Dans une base de données relationnelle, quel élément représente une ligne d'une table ?",
    answers: [
      "A) Un champ",
      "B) Un enregistrement",
      "C) Une colonne",
      "D) Une clé étrangère",
    ],
    correct: 1,
  },
  {
    question:
      "90) Dans une base de données relationnelle, quel élément représente une colonne d'une table ?",
    answers: [
      "A) Un enregistrement",
      "B) Une ligne",
      "C) Un attribut",
      "D) Une relation",
    ],
    correct: 2,
  },
  {
    question: "91) Quel est le rôle d'une clé étrangère (FOREIGN KEY) ?",
    answers: [
      "A) Identifier obligatoirement chaque utilisateur par son mot de passe",
      "B) Établir une relation entre deux tables",
      "C) Trier les données par ordre alphabétique",
      "D) Supprimer une base de données",
    ],
    correct: 1,
  },
  {
    question:
      "92) Quelle instruction SQL permet de modifier des données existantes dans une table ?",
    answers: ["A) INSERT", "B) SELECT", "C) UPDATE", "D) CREATE"],
    correct: 2,
  },
  {
    question:
      "93) Quelle instruction SQL permet de compter le nombre de lignes retournées ?",
    answers: ["A) SUM()", "B) COUNT()", "C) AVG()", "D) MIN()"],
    correct: 1,
  },
  {
    question:
      "94) Quelle clause SQL permet de regrouper les lignes ayant les mêmes valeurs ?",
    answers: ["A) ORDER BY", "B) WHERE", "C) GROUP BY", "D) LIMIT"],
    correct: 2,
  },
  {
    question: "95) Quelle commande SQL permet de créer une nouvelle table ?",
    answers: [
      "A) CREATE TABLE",
      "B) SELECT TABLE",
      "C) UPDATE TABLE",
      "D) OPEN TABLE",
    ],
    correct: 0,
  },
  {
    question:
      "96) Quel langage permet d'interroger et de manipuler une base de données relationnelle ?",
    answers: ["A) HTML", "B) SQL", "C) CSS", "D) XML"],
    correct: 1,
  },
  {
    question:
      "97) Quelle topologie réseau relie tous les équipements à un équipement central ?",
    answers: ["A) Bus", "B) Anneau", "C) Étoile", "D) Maillée"],
    correct: 2,
  },
  {
    question: "98) Combien de bits contient une adresse IPv4 ?",
    answers: ["A) 16 bits", "B) 32 bits", "C) 64 bits", "D) 128 bits"],
    correct: 1,
  },
  {
    question: "99) Combien de bits contient une adresse IPv6 ?",
    answers: ["A) 32 bits", "B) 64 bits", "C) 128 bits", "D) 256 bits"],
    correct: 2,
  },
  {
    question: "100) Quel est le rôle principal d'un antivirus ?",
    answers: [
      "A) Augmenter la mémoire RAM",
      "B) Détecter et supprimer les logiciels malveillants",
      "C) Accélérer la connexion Internet",
      "D) Créer des bases de données",
    ],
    correct: 1,
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
