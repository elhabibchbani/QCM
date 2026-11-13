const questions = [
{
  question: "1) Quelle est la définition du protocole de communication HTTP ?",
  answers: [
    "a) Protocole utilisé pour le transfert de courrier électronique",
    "b) Protocole de transfert de fichiers",
    "c) Protocole grâce auquel un client web et un serveur web peuvent dialoguer",
    "d) Protocole sécurisé pour échange d'informations critiques",
  ],
  correct: 2,
},
{
  question: "2) Qu'est-ce que le protocole HTTPS ?",
  answers: [
    "a) Une ancienne version du protocole HTTP",
    "b) Un protocole de transfert de fichiers",
    "c) La version sécurisée du protocole HTTP",
    "d) Un langage de description de page comme HTML",
  ],
  correct: 2,
},
{
  question: "3) Dans la liste suivante, quel sigle ne désigne pas un protocole ?",
  answers: [
    "a) SMTP",
    "b) HTML",
    "c) POP",
    "d) TCP",
  ],
  correct: 1,
},
{
  question: "4) Parmi ces protocoles, lequel est utilisé pour l'envoi de courrier électronique ?",
  answers: [
    "a) HTTPS",
    "b) IMAP",
    "c) SMTP",
    "d) POP",
  ],
  correct: 2,
},
{
  question: "5) Que désigne Intranet ?",
  answers: [
    "a) Un réseau de fibres optiques installé dans un immeuble",
    "b) Un code de bonne conduite au sein d'une entreprise",
    "c) Un réseau informatique utilisé à l'intérieur d'une entreprise utilisant les techniques de communication d'Internet",
    "d) Un ensemble de logiciels libres",
  ],
  correct: 2,
},
{
  question: "6) Quel est le rôle du CSS dans une page web ?",
  answers: [
    "a) Gérer les bases de données",
    "b) Définir la présentation et le style des pages web",
    "c) Assurer la communication entre le client et le serveur",
    "d) Créer la structure du contenu HTML",
  ],
  correct: 1,
},
{
  question: "7) Quelle propriété CSS permet de changer la couleur du texte ?",
  answers: [
    "a) background-color",
    "b) font-size",
    "c) color",
    "d) text-align",
  ],
  correct: 2,
},
{
  question: "8) Quelle propriété CSS permet de modifier la taille du texte ?",
  answers: [
    "a) color",
    "b) font-size",
    "c) background-color",
    "d) text-align",
  ],
  correct: 1,
},
{
  question: "9) Quelle propriété CSS permet de mettre un texte en gras ?",
  answers: [
    "a) font-style",
    "b) text-decoration",
    "c) font-weight",
    "d) text-align",
  ],
  correct: 2,
},
{
  question: "10) Quelle propriété CSS permet de définir la couleur de fond d'un élément HTML ?",
  answers: [
    "a) color",
    "b) background-color",
    "c) font-size",
    "d) border-style",
  ],
  correct: 1,
},
{
  question: "11) Quelle propriété CSS permet d'arrondir les coins d'un élément ?",
  answers: [
    "a) border-color",
    "b) border-radius",
    "c) border-width",
    "d) border-style",
  ],
  correct: 1,
},
{
  question: "12) Quelle instruction JavaScript permet d'afficher un message dans la console du navigateur ?",
  answers: [
    "a) document.write()",
    "b) console.log()",
    "c) alert()",
    "d) prompt()",
  ],
  correct: 1,
},
{
  question: "13) Quelle méthode JavaScript permet de convertir une chaîne de caractères en nombre entier ?",
  answers: [
    "a) parseInt()",
    "b) toString()",
    "c) parseFloat()",
    "d) isNaN()",
  ],
  correct: 0,
},
{
  question: "14) Quelle instruction permet de déclarer une variable en JavaScript ?",
  answers: [
    "a) print",
    "b) var",
    "c) echo",
    "d) display",
  ],
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
  question: "16) Quelle méthode JavaScript permet d'ajouter un élément à la fin d'un tableau ?",
  answers: [
    "a) pop()",
    "b) shift()",
    "c) push()",
    "d) unshift()",
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
  question: "18) Quel opérateur JavaScript permet de vérifier l'égalité stricte entre deux valeurs ?",
  answers: [
    "a) =",
    "b) ==",
    "c) ===",
    "d) !=",
  ],
  correct: 2,
},
{
  question: "19) Quelle fonction JavaScript permet de connaître la longueur d'une chaîne de caractères ?",
  answers: [
    "a) size()",
    "b) length()",
    "c) count()",
    "d) indexOf()",
  ],
  correct: 1,
},
{
  question: "20) Quelle méthode JavaScript permet de supprimer le dernier élément d'un tableau ?",
  answers: [
    "a) push()",
    "b) shift()",
    "c) pop()",
    "d) unshift()",
  ],
  correct: 2,
},
{
  question: "21) Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un bouton ?",
  answers: [
    "a) onmouseover",
    "b) onclick",
    "c) onload",
    "d) onchange",
  ],
  correct: 1,
},
{
  question: "22) Quelle balise HTML permet de créer un lien hypertexte ?",
  answers: [
    "a) <img>",
    "b) <a>",
    "c) <p>",
    "d) <link>",
  ],
  correct: 1,
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
  question: "24) Quelle balise HTML permet de créer une liste non ordonnée ?",
  answers: [
    "a) <ol>",
    "b) <li>",
    "c) <ul>",
    "d) <dl>",
  ],
  correct: 2,
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
  question: "27) Quelle commande SQL permet de supprimer une table d'une base de données ?",
  answers: [
    "a) DELETE",
    "b) DROP",
    "c) UPDATE",
    "d) SELECT",
  ],
  correct: 1,
},
{
  question: "28) Quelle requête SQL permet d'afficher tous les enregistrements de la table Produits ?",
  answers: [
    "a) SELECT * WHERE Produits",
    "b) SELECT * FROM Produits",
    "c) SELECT DISTINCT id FROM Produits",
    "d) SELECT * FROM Produits WHERE reference IS NOT NULL",
  ],
  correct: 1,
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
  question: "37) Quelle commande Linux permet d'afficher le contenu d'un répertoire ?",
  answers: [
    "A) pwd",
    "B) mkdir",
    "C) ls",
    "D) cd",
  ],
  correct: 2,
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
  question: "39) Quel mécanisme permet de protéger les données en les rendant illisibles sans une clé de déchiffrement ?",
  answers: [
    "A) Sauvegarde",
    "B) Compression",
    "C) Chiffrement",
    "D) Défragmentation",
  ],
  correct: 2,
},
{
  question: "40) Quel raccourci clavier permet d'ouvrir le Gestionnaire des tâches sous Windows ?",
  answers: [
    "A) Ctrl + C",
    "B) Ctrl + Shift + Esc",
    "C) Alt + F4",
    "D) Windows + E",
  ],
  correct: 1,
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
  question: "58) Dans Excel, quel symbole permet de commencer une formule ?",
  answers: [
    "A) #",
    "B) =",
    "C) %",
    "D) &",
  ],
  correct: 1,
},
{
  question: "59) Quelle extension correspond généralement à un fichier PowerPoint moderne ?",
  answers: [
    "A) .docx",
    "B) .xlsx",
    "C) .pptx",
    "D) .pdf",
  ],
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
  question: "86) En programmation orientée objet, quel concept permet de créer une nouvelle classe à partir d'une classe existante ?",
  answers: [
    "A) Polymorphisme",
    "B) Héritage",
    "C) Encapsulation",
    "D) Compilation",
  ],
  correct: 1,
},
{
  question: "87) En programmation orientée objet, quel concept permet à une même méthode d'avoir plusieurs comportements selon l'objet utilisé ?",
  answers: [
    "A) Héritage",
    "B) Encapsulation",
    "C) Polymorphisme",
    "D) Compilation",
  ],
  correct: 2,
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
  question: "89) Dans une base de données relationnelle, quel élément permet d'identifier de manière unique chaque enregistrement d'une table ?",
  answers: [
    "A) Clé primaire",
    "B) Clé étrangère",
    "C) Champ texte",
    "D) Index secondaire",
  ],
  correct: 0,
},
{
  question: "90) Quel type de clé permet de créer un lien entre deux tables dans une base de données relationnelle ?",
  answers: [
    "A) Clé primaire",
    "B) Clé étrangère",
    "C) Clé unique",
    "D) Clé composée",
  ],
  correct: 1,
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
  question: "97) Quel équipement réseau permet de connecter plusieurs ordinateurs dans un réseau local (LAN) ?",
  answers: [
    "A) Scanner",
    "B) Switch",
    "C) Modem",
    "D) Imprimante",
  ],
  correct: 1,
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
