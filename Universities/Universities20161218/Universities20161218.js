const questions = [
{
  question:
    "1) Quelles sont les fonctions d'un système d'exploitation (deux réponses) ?",
  answers: [
    "Naviguer sur le web",
    "Gérer les applications",
    "Compiler des programmes",
    "Contrôler l'accès au matériel",
    "Traiter du texte",
    "Contrôler le BIOS",
  ],
  correct: [1, 3],
},
{
  question:
    "2) Quels utilitaires Windows peut-on utiliser pour assurer la maintenance de disques durs d'ordinateurs ayant été utilisés normalement pendant longtemps (deux réponses) ?",
  answers: [
    "Nettoyage de disque",
    "Partition de disque",
    "Défragmentation de disque",
    "Formatage de disque",
    "Maintenance de disque",
  ],
  correct: [0, 2],
},

{
  question:
    "3) Quelle quantité de mémoire vive (RAM) peut-on en théorie adresser avec un système d'exploitation 64 bits ?",
  answers: [
    "16 Go maximum",
    "32 Go maximum",
    "128 Go ou plus",
  ],
  correct: 2,
},

{
  question:
    "4) Quelle serait la conséquence d'un MBR (Master Boot Record) endommagé ?",
  answers: [
    "Le clavier ne répondra pas aux sollicitations de l'utilisateur",
    "L'installation d'une application échouera",
    "L'imprimante ne fonctionnera pas correctement",
    "Le système d'exploitation ne pourra pas démarrer",
  ],
  correct: 3,
},

{
  question:
    "5) Un utilisateur remarque que son PC est lent et met un certain temps à répondre aux commandes introduites au clavier. Quelle est la cause probable de ce problème ?",
  answers: [
    "La carte vidéo ne prend pas en charge la résolution utilisée",
    "Un pilote de périphérique installé récemment est incompatible avec le contrôleur de démarrage",
    "Un ou plusieurs fichiers programmes ont été supprimés",
    "Un processus est en train d'utiliser la plupart des ressources du processeur",
  ],
  correct: 3,
},
{
  question:
    "6) Pour séparer un disque dur physique en deux disques logiques, il faut :",
  answers: [
    "Le formater",
    "Le partitionner",
    "Le partager",
    "Créer deux dossiers à la racine",
  ],
  correct: 1,
},

{
  question:
    "7) Le nombre maximal de partitions sur un disque dur est :",
  answers: [
    "8 partitions primaires / 8 partitions logiques",
    "4 partitions primaires / un nombre illimité de partitions logiques",
    "4 partitions primaires / 4 partitions logiques",
  ],
  correct: 1,
},

{
  question:
    "8) Le système de fichiers sur lequel s'installe Windows 7 par défaut est :",
  answers: [
    "NFS",
    "NTFS",
    "FAT",
    "EXT3",
  ],
  correct: 1,
},

{
  question:
    "9) Un utilisateur se plaint que son PC a été infecté par un virus qui change les extensions de ses fichiers personnels. L'utilisateur rapporte qu'il a lancé un scan antivirus plusieurs fois, mais à chaque redémarrage, le virus réapparaît. Que doit-on faire en premier pour tenter de résoudre le problème de cet utilisateur (deux réponses) ?",
  answers: [
    "Formater le PC pour éliminer totalement le virus",
    "Lancer un scan au démarrage du PC",
    "Mettre à jour la base des signatures de l'antivirus",
    "Demander de l'aide en ligne",
  ],
  correct: [1, 2],
},

{
  question:
    "10) Un technicien est chargé de mettre à niveau le pilote d'une ancienne imprimante. Quelle est la meilleure source pour se procurer un nouveau pilote ?",
  answers: [
    "Site Web du fabricant",
    "Site Web Microsoft Update",
    "Disque d'installation de l'imprimante",
    "Gestionnaire de périphériques Windows",
    "Profils matériels Windows",
  ],
  correct: 0,
},
{
  question:
    "11) Quel type de démarrage faut-il sélectionner pour un service qui doit s'exécuter à chaque démarrage de l'ordinateur ?",
  answers: [
    "Automatique",
    "Amorçage",
    "Manuel",
    "Démarrer",
    "Démarrage",
  ],
  correct: 0,
},

{
  question:
    "12) Un technicien doit configurer le disque dur d'un ordinateur afin qu'un lecteur soit dédié au système d'exploitation et quatre lecteurs aux données provenant de diverses applications. Comment le disque dur peut-il être configuré dans cette optique ?",
  answers: [
    "Créer cinq partitions principales.",
    "Créer une partition étendue comportant cinq lecteurs logiques.",
    "Créer une partition principale et une partition étendue comportant quatre lecteurs logiques.",
    "Créer cinq partitions étendues.",
    "Créer une partition logique comportant cinq partitions principales.",
  ],
  correct: 2,
},

{
  question:
    "13) Un utilisateur qui installe et désinstalle de nombreux logiciels constate que les performances de son système informatique se détériorent. Quelle mesure prendre en premier lieu pour tenter d'améliorer les performances de son ordinateur ?",
  answers: [
    "Mettre à niveau la mémoire vive (RAM)",
    "Mettre à niveau le processeur",
    "Réinstaller le système d'exploitation",
    "Exécuter l'utilitaire de défragmentation",
    "Exécuter l'utilitaire de formatage",
  ],
  correct: 3,
},

{
  question:
    "14) Le nombre binaire 1011 vaut en décimal :",
  answers: [
    "7",
    "9",
    "33",
    "11",
  ],
  correct: 3,
},

{
  question:
    "15) Le « cache » sur un disque dur est utilisé pour :",
  answers: [
    "Protéger l'interface du disque",
    "Conserver temporairement des données en mémoire afin d'améliorer les performances globales",
    "Permettre l'entretien régulier de la surface magnétique",
    "Cacher une partition d'un disque contenant des données sensibles",
  ],
  correct: 1,
},

{
  question:
    "16) Quelle mise à niveau matérielle permet à un PC de jeux de fournir des performances de jeu optimales ?",
  answers: [
    "Lecteur EIDE rapide",
    "Refroidissement liquide",
    "Mémoire vive (RAM) rapide en grande quantité",
    "Disque dur externe de haute capacité",
  ],
  correct: 2,
},

{
  question:
    "17) Un technicien tente de réparer une défaillance matérielle détectée par le BIOS sur un ordinateur. Comment cette défaillance se manifeste-t-elle ?",
  answers: [
    "L'ordinateur démarre automatiquement en Mode sans échec et un avertissement s'affiche à l'écran.",
    "L'écran clignote en affichant un fond rouge et un message d'avertissement apparaît.",
    "L'ordinateur émet des bips sonores qui indiquent que le périphérique est défaillant.",
    "L'ordinateur renvoie un message d'erreur indiquant l'adresse E/S du périphérique défectueux.",
  ],
  correct: 2,
},

{
  question:
    "18) La technologie RAID permet :",
  answers: [
    "Le contrôle des données",
    "La protection contre le piratage",
    "La performance",
    "La redondance des données",
  ],
  correct: 3,
},

{
  question:
    "19) Un technicien souhaite démarrer un ordinateur à l'aide d'un CD-ROM comprenant un système d'exploitation et des utilitaires de diagnostic limités. Où le technicien doit-il définir la commande de démarrage du PC ?",
  answers: [
    "Poste de travail",
    "Panneau de configuration",
    "Gestionnaire de périphériques",
    "BIOS",
    "Menu Démarrer",
  ],
  correct: 3,
},

{
  question:
    "20) Quel type de câblage doit-on utiliser pour relier un PC à un commutateur ?",
  answers: [
    "Un câble croisé",
    "Un câble droit",
    "Un câble DB9",
  ],
  correct: 1,
},
{
  question:
    "21) Identifiez un avantage de l'utilisation de la fibre optique dans les réseaux.",
  answers: [
    "Peu coûteux",
    "Facile à installer",
    "Insensible aux interférences électromagnétiques",
    "Disponible avec ou sans blindage extérieur",
  ],
  correct: 2,
},

{
  question:
    "22) Le câble à paires torsadées blindées :",
  answers: [
    "Doit être correctement mis à la terre.",
    "Présente tous les avantages du câble à paires torsadées non blindées.",
    "A une longueur maximale de 100 mètres.",
    "Toutes ces réponses",
  ],
  correct: 3,
},

{
  question:
    "23) Pourquoi les fils d'un câble de catégorie 5 sont-ils torsadés ?",
  answers: [
    "Pour amincir le câble",
    "Pour le rendre moins coûteux",
    "Pour réduire les problèmes de bruit",
    "Pour faire tenir six paires de fils dans l'espace de quatre",
  ],
  correct: 2,
},

{
  question:
    "24) Quel genre de prise est utilisé de manière standard pour les prises de télécommunications ?",
  answers: [
    "UTP 55",
    "RJ45",
    "EIA45",
    "TIA 74",
  ],
  correct: 1,
},

{
  question:
    "25) Aujourd'hui, pour réaliser le backbone en GigaBit Ethernet d'un grand bâtiment, on utilise :",
  answers: [
    "De la fibre multimode",
    "Du câble coaxial jaune",
    "Du câble UTP",
  ],
  correct: 0,
},

{
  question:
    "26) L'entreprise ABC doit effectuer chaque année la maintenance préventive de l'ensemble de son câblage de réseau local. Quelle tâche doit être incluse dans le programme de maintenance préventive ?",
  answers: [
    "Remplacer toutes les étiquettes des câbles",
    "Remplacer tous les supports des câbles afin d'éviter la mauvaise fixation des points d'attache",
    "Déconnecter et reconnecter tous les câbles de raccordement",
    "Vérifier que les câbles de raccordement ne présentent pas de ruptures",
  ],
  correct: 3,
},

{
  question:
    "27) Quel élément définit l'interface principale utilisée pour une configuration initiale d'un routeur Cisco ?",
  answers: [
    "Une interface AUX",
    "Une interface Ethernet",
    "Une interface série",
    "Une interface console",
  ],
  correct: 3,
},

{
  question:
    "28) Un administrateur réseau est chargé d'utiliser un support réseau pouvant s'étendre à 100 m sans faire appel à des répéteurs. Le support choisi doit être bon marché et facile à installer. L'installation est prévue dans un bâtiment existant où l'espace pour le câblage est limité. Quel type de support répondrait le mieux à ces conditions ?",
  answers: [
    "Câblage STP",
    "Câblage à paires torsadées non blindées",
    "Câblage coaxial",
    "Fibre monomode",
    "Fibre multimode",
  ],
  correct: 1,
},

{
  question:
    "29) Un technicien est chargé de réparer un ordinateur qui ne peut pas se connecter à Internet. La connexion fonctionnait correctement le jour précédent, et la configuration matérielle et logicielle n'a pas été modifiée depuis. Quelle est la première mesure à prendre pour résoudre le problème ?",
  answers: [
    "Réinstaller le pilote de carte réseau",
    "Vérifier les câbles réseau",
    "Repositionner la carte réseau dans le logement d'extension",
    "Tenter de renouveler le bail DHCP à l'aide de ipconfig /all",
  ],
  correct: 1,
},

{
  question:
    "30) À quoi sert la création d'un VLAN sur un switch ? (deux réponses)",
  answers: [
    "Le VLAN permet de sortir sur Internet",
    "Le VLAN permet de propager les trames utilisateurs à travers les switches et les routeurs",
    "Le VLAN permet d'avoir un domaine de diffusion restreint aux ports appartenant à ce VLAN",
    "Le VLAN permet d'isoler certains ordinateurs qui ne pourront communiquer qu'avec des ordinateurs appartenant au même VLAN",
  ],
  correct: [2, 3],
},
{
  question:
    "31) Quelles commandes sont nécessaires pour établir un lien entre deux switches Cisco 2950 afin de propager les VLANs ? (deux réponses)",
  answers: [
    "switchport trunk encapsulation dot1q",
    "switchport mode vlan all",
    "switchport mode trunk",
    "switchport access vlan all",
  ],
  correct: [0, 2],
},

{
  question:
    "32) Deux PCs appartiennent à deux VLANs différents. Ils souhaitent s'envoyer des données. En tant qu'administrateur, quelle fonction allez-vous mettre en place pour permettre cet échange ?",
  answers: [
    "Configurer un TRUNK sur les ports connectés aux PCs",
    "Mettre les 2 PCs dans le même VLAN",
    "Redémarrer le switch",
    "Installer un routeur et le configurer pour effectuer le routage inter-VLAN",
  ],
  correct: 3,
},

{
  question:
    "33) Quelles caractéristiques appartiennent à la technologie Ethernet ? (deux réponses)",
  answers: [
    "Elle utilise la méthode de contrôle d'accès CSMA/CD",
    "Elle est prise en charge par les normes IEEE 802.5",
    "Elle utilise une topologie en anneau",
    "Elle utilise généralement un débit de transfert de données moyen de 16 Mbit/s",
    "Elle est prise en charge par les normes IEEE 802.3",
  ],
  correct: [0, 4],
},

{
  question:
    "34) Quel équipement réseau prend des décisions de transfert en fonction de l'adresse MAC de destination dans la trame ?",
  answers: [
    "Concentrateur",
    "Répéteur",
    "Routeur",
    "Commutateur",
  ],
  correct: 3,
},

{
  question:
    "35) Le Spanning Tree permet de :",
  answers: [
    "Éviter les boucles de niveau 2 dans un contexte de liaisons redondantes",
    "Échanger des tables de routage",
    "Diviser un switch en plusieurs VLAN",
  ],
  correct: 0,
},

{
  question:
    "36) Qu'effectue un switch lorsqu'il reçoit une trame Ethernet avec comme adresse destination une adresse MAC unicast qui est présente dans sa table MAC (Content Addressable Memory) ?",
  answers: [
    "Le switch supprime la trame et renvoie un message ICMP error",
    "Le switch commute la trame sur le port mentionné dans la table MAC associée à l'adresse MAC de destination de la trame",
    "Le switch commute la trame sur tous les ports excepté le port de réception",
    "Le switch commute la trame sur un port spécifique",
  ],
  correct: 1,
},

{
  question:
    "37) Quelle exigence impose le réseau sans fil comme solution idéale ?",
  answers: [
    "L'entreprise dispose d'un budget limité pour le réseau en pleine croissance.",
    "Les bureaux de l'entreprise se trouvent à l'étage supérieur d'un bâtiment historique et toute modification structurelle est interdite.",
    "La société traite des informations financières pour des centaines de clients.",
    "La société envisage de mettre en œuvre la technologie voix sur IP (VoIP) et la vidéo en continu pour fournir des mises à jour en temps réel aux courtiers.",
  ],
  correct: 1,
},

{
  question:
    "38) Parmi les technologies suivantes, lesquelles sont liées aux réseaux sans fil personnels WPAN ? (deux réponses)",
  answers: [
    "RFID",
    "Bluetooth",
    "IEEE 802.15",
    "Wi-Fi",
    "IEEE 802.11 a/b/g/ac",
  ],
  correct: [1, 2],
},

{
  question:
    "39) Quel inconvénient pourrait présenter la configuration d'un routeur ou d'un point d'accès sans fil pour qu'il ne fonctionne qu'avec la norme 802.11g ?",
  answers: [
    "Le fait de n'utiliser que la 802.11g entraîne la diffusion de plusieurs SSID",
    "La 802.11g ne prend pas en charge l'adressage IP statique",
    "La 802.11g ne prend pas en charge les fonctionnalités avancées de sécurité",
    "Les périphériques sans fil 802.11a ne pourront pas se connecter au réseau sans fil",
  ],
  correct: 3,
},

{
  question:
    "40) Quelles couches du modèle OSI équivalent à la couche Application du modèle TCP/IP ? (trois réponses)",
  answers: [
    "Transport",
    "Liaison de données",
    "Présentation",
    "Session",
    "Application",
    "Physique",
  ],
  correct: [2, 3, 4],
},
{
  question:
    "41) Quelle couche du modèle OSI fournit les trois fonctionnalités suivantes : segmentation, séquencement et reprise sur erreur ?",
  answers: [
    "TCP",
    "IP",
    "UDP",
    "Ethernet",
  ],
  correct: 0,
},

{
  question:
    "42) Quel protocole est utilisé pour la résolution d'un nom de domaine ?",
  answers: [
    "FTP",
    "DNS",
    "HTTP",
    "TFTP",
  ],
  correct: 1,
},

{
  question:
    "43) Quel rôle joue un routeur ?",
  answers: [
    "Divise le domaine de diffusion",
    "Réduit les domaines de collision",
    "Annule les boucles dans une architecture maillée",
  ],
  correct: 0,
},

{
  question:
    "44) Choisir parmi les listes suivantes celle qui est constituée de protocoles de routage :",
  answers: [
    "TCP, UDP, IP",
    "RIP, OSPF, BGP",
    "Ethernet, RNIS, ATM",
  ],
  correct: 1,
},

{
  question:
    "45) Quel est le meilleur mot de passe ?",
  answers: [
    "123Soleil",
    "Password",
    "$tRj45*fdC",
    "%rtAmmAtr%",
    "Alexandra*%",
  ],
  correct: 2,
},

{
  question:
    "46) Quelle proposition n'est pas un CMS ?",
  answers: [
    "Drupal",
    "Joomla",
    "WordPress",
    "Symfony",
  ],
  correct: 3,
},

{
  question:
    "47) Quel port est associé au protocole SMTP ?",
  answers: [
    "443",
    "80",
    "25",
    "21",
  ],
  correct: 2,
},

{
  question:
    "48) En base de données, qu'est-ce qui permet d'identifier de façon unique un enregistrement dans une table ?",
  answers: [
    "Clé secondaire",
    "Clé primaire",
    "Cardinalité",
    "Attribut",
  ],
  correct: 1,
},

{
  question:
    "49) À quoi servent les jointures dans une base de données ?",
  answers: [
    "Valider le schéma",
    "Relier des identifiants de même nom dans plusieurs tables",
    "Valider une requête",
    "Associer des identifiants identiques de même nature",
  ],
  correct: 3,
},

{
  question:
    "50) Parmi ces SGBD, quelle base est issue du monde libre ?",
  answers: [
    "Microsoft Access",
    "Oracle",
    "SQL Server",
    "PostgreSQL",
  ],
  correct: 3,
},
{
  question:
    "51) Dans une base de données relationnelle, je souhaite sélectionner tous les enregistrements d'une table nommée « PRODUITS ». Choisissez la requête SQL convenable :",
  answers: [
    "SELECT DISTINCT id FROM PRODUITS",
    "SELECT * FROM PRODUITS WHERE reference NOT NULL",
    "SELECT * FROM PRODUITS",
    "SELECT * WHERE PRODUITS",
    "SELECT ALL FROM PRODUITS",
  ],
  correct: 2,
},

{
  question:
    "52) Laquelle de ces propositions n'est pas une solution de virtualisation ?",
  answers: [
    "VMware",
    "VirtualBox",
    "KVM",
    "Hyper-V",
    "Packet Tracer",
  ],
  correct: 4,
},

{
  question:
    "53) Quelles considérations sont les plus importantes lors de l'assemblage d'une station de travail destinée à exécuter plusieurs ordinateurs virtuels ? (deux réponses)",
  answers: [
    "Carte vidéo puissante",
    "Nombre de cœurs dans le processeur",
    "Quantité de mémoire vive (RAM)",
    "Carte son haut de gamme",
    "Refroidissement à l'eau",
  ],
  correct: [1, 2],
},

{
  question:
    "54) Que définit l'enregistrement de type MX dans un serveur de noms DNS ?",
  answers: [
    "Un pointeur vers un serveur de messagerie",
    "Un pointeur vers un DNS secondaire",
    "Un alias vers un nom de domaine",
    "Un serveur de DIVX",
  ],
  correct: 0,
},

{
  question:
    "55) Comment s'appelle le navigateur natif de Windows 10 ?",
  answers: [
    "Netscape",
    "Edge",
    "Safari",
    "Chromium",
    "Konqueror",
  ],
  correct: 1,
},

{
  question:
    "56) LAMP veut dire :",
  answers: [
    "Linux, Apache, Microsoft, PHP",
    "Linux, ASP, MySQL, PHP",
    "Linux, ASP, Microsoft, PostgreSQL",
    "Linux, Apache, MySQL, PHP",
  ],
  correct: 3,
},

{
  question:
    "57) Quel est l'intrus ?",
  answers: [
    "UDP",
    "TCP",
    "PHP",
    "ICMP",
  ],
  correct: 2,
},

{
  question:
    "58) SNMP est un protocole qui sert :",
  answers: [
    "À la gestion et à la supervision des équipements réseaux",
    "À la sécurité",
    "À la messagerie",
    "Au routage extérieur",
  ],
  correct: 0,
},

{
  question:
    "59) Une société utilise un seul ordinateur pour recevoir et tester toutes les mises à jour Windows. Une fois la mise à jour la plus récente installée, plusieurs programmes ont échoué. Quelle est la première mesure à prendre pour tenter de supprimer la mise à jour ?",
  answers: [
    "Exécuter une Restauration du système à partir du dernier point de restauration.",
    "Utiliser l'applet Ajout/Suppression de matériel dans le Panneau de configuration pour supprimer la mise à jour.",
    "Restaurer le disque dur à partir de la dernière sauvegarde système.",
    "Utiliser la Console de récupération pour restaurer le système d'exploitation.",
  ],
  correct: 0,
},

{
  question:
    "60) Lequel est un outil de supervision / monitoring réseau ?",
  answers: [
    "SSH",
    "Nagios",
    "Ping",
    "Telnet",
  ],
  correct: 1,
},
{
  question:
    "61) Le flooding est :",
  answers: [
    "Une attaque qui sature le réseau",
    "La mise en place d'un sniffeur",
    "Une usurpation d'adresse IP interne venant de l'extérieur",
    "Une faille de sécurité de Sendmail",
  ],
  correct: 0,
},

{
  question:
    "62) Un firewall sert principalement à :",
  answers: [
    "Filtrer les contenus des pages web",
    "Filtrer les flux qui passent sur le réseau",
    "Analyser les mails afin d'éviter les virus",
  ],
  correct: 1,
},

{
  question:
    "63) Dans un service de comptabilité, certaines applications sont inaccessibles sur le serveur. Le technicien pense que le problème est dû au serveur. Quel est l'outil Windows à utiliser sur le serveur pour déterminer si celui-ci fonctionne correctement ?",
  answers: [
    "Gestionnaire de périphériques",
    "Pare-feu",
    "Outil Gestionnaire de démarrage",
    "Éditeur de configuration système",
    "Informations système",
  ],
  correct: 4,
},

{
  question:
    "64) On suppose que l'ACL ci-dessous est appliquée sur une interface réseau. Quel effet aura cette ACL sur le trafic ? access-list 147 deny tcp 172.16.0.0 0.0.255.255 any eq 23 access-list 147 permit ip any any",
  answers: [
    "Tout le trafic vers le réseau 172.16.0.0 sera interdit",
    "Tout le trafic TCP sera autorisé venant ou vers le réseau 172.16.0.0",
    "Tout le trafic Telnet du réseau 172.16.0.0 vers toute destination sera interdit",
    "Tous les trafics issus d'un port source 23 vers le réseau 172.16.0.0 seront interdits",
  ],
  correct: 2,
},

{
  question:
    "65) Plusieurs messages envoyés à l'administrateur réseau ont signalé que l'accès à un serveur sécurisé à l'aide du protocole HTTPS a échoué. Après avoir vérifié les mises à jour récentes appliquées au pare-feu de l'entreprise, l'administrateur a découvert que le pare-feu bloquait le protocole HTTPS. Quel port faut-il ouvrir pour résoudre le problème ?",
  answers: [
    "22",
    "53",
    "80",
    "143",
    "443",
  ],
  correct: 4,
},

{
  question:
    "66) Parmi ces propositions, laquelle n'est pas un algorithme de chiffrement ?",
  answers: [
    "AES",
    "TAR",
    "3DES",
    "Blowfish",
  ],
  correct: 1,
},

{
  question:
    "67) Parmi ces technologies, laquelle permet de créer un VPN ?",
  answers: [
    "IPv4",
    "IPv6",
    "IPsec",
    "ICMP",
    "SDSL",
  ],
  correct: 2,
},

{
  question:
    "68) Lorsque vous installez un poste de travail, vous ne devez pas :",
  answers: [
    "Recenser les licences de logiciels que vous installez dessus",
    "Répertorier le PC dans l'inventaire de votre établissement",
    "Vérifier si le poste remplit bien les fonctionnalités attendues",
    "Installer des logiciels dont l'établissement ne possède pas la licence",
  ],
  correct: 3,
},

{
  question:
    "69) La commande Linux « find / -name \"result.log\" -type f -mtime +365 -exec rm {} \\; » permet de :",
  answers: [
    "Parcourir tous les dossiers de la machine",
    "Supprimer tous les fichiers créés il y a plus de 365 jours",
    "Supprimer les fichiers du répertoire utilisateur",
    "De faire autre chose que les trois propositions précédentes",
  ],
  correct: 3,
},

{
  question:
    "70) Sous Linux, le fichier « httpd.conf » peut être lu par les membres du groupe, modifié par le propriétaire (admin) et aucun droit aux autres. Quelle commande doit-on exécuter pour être certain de ces droits ?",
  answers: [
    "chmod 770 httpd.conf",
    "chmod 640 httpd.conf",
    "chmod u+rw httpd.conf",
    "chmod admin httpd.conf",
  ],
  correct: 1,
},
{
  question:
    "71) Sur un système Linux, les utilisateurs sont déclarés dans le fichier :",
  answers: [
    "/home/users",
    "/users/password",
    "/etc/passwd",
    "/lib/user",
  ],
  correct: 2,
},

{
  question:
    "72) grep désigne :",
  answers: [
    "Une commande Linux permettant la recherche de fichiers dans le système",
    "Une commande Linux permettant la suppression de fichiers",
    "Un service d'information sur les processus Linux",
    "Une commande Linux effectuant la recherche d'une chaîne de caractères dans un ou plusieurs fichiers",
  ],
  correct: 3,
},

{
  question:
    "73) This command is most widely used to create compressed archive files that can be moved easily from one disk to another or from machine to machine. What is it?",
  answers: [
    "scp",
    "ls wc -l",
    "tar",
    "mv",
  ],
  correct: 2,
},

{
  question:
    "74) Les droits d'un fichier sous Linux sont initialement rwxrwxrwx. Quels seront-ils après lui avoir successivement appliqué les commandes chmod o-wx puis chmod u+x ?",
  answers: [
    "rwxrwxrwx",
    "r--r-xrwx",
    "rwxrwx---",
    "rw-r-xr--",
  ],
  correct: 2,
},

{
  question:
    "75) Sous Linux, quelle commande affiche la configuration des interfaces du réseau ?",
  answers: [
    "ipconfig",
    "netipcfg",
    "ifconfig",
    "networkedit",
  ],
  correct: 2,
},

{
  question:
    "76) Que peut-on faire avec une GPO dans un Active Directory ? (deux réponses)",
  answers: [
    "Installer / désinstaller des logiciels",
    "Configurer l'environnement de travail d'un utilisateur sur un poste de travail",
    "Virtualiser un poste de travail",
    "Fournir à un gestionnaire de parc les informations matérielles et logicielles d'un poste de travail",
  ],
  correct: [0, 1],
},

{
  question:
    "77) Le terme GPO dans la famille Windows désigne :",
  answers: [
    "Global Program Organization",
    "Group Policy Objects",
    "Fonction de gestion centralisée de la famille Windows",
  ],
  correct: 1,
},

{
  question:
    "78) Les « OU » ou Organizational Units sont :",
  answers: [
    "Des conteneurs permettant de hiérarchiser Active Directory et de regrouper des objets de l'AD",
    "Des structures permettant de hiérarchiser le système de fichiers Windows",
    "Des règles de sécurité qui permettent de mieux sécuriser Active Directory",
    "Des règles d'approbation des domaines Windows",
  ],
  correct: 0,
},

{
  question:
    "79) Quel logiciel fourni par Apple permet d'installer Windows 7 sur un Mac ?",
  answers: [
    "Boot Mac",
    "Boot Camp",
    "Dual Boot",
    "Apple Boot",
  ],
  correct: 1,
},

{
  question:
    "80) It is a network protocol analyzer. It lets you capture packet data from a live network, or read packets from a previously saved capture file. What is it?",
  answers: [
    "SNMP",
    "Wireshark",
    "CAPTCHA",
    "Ping",
  ],
  correct: 1,
},
{
  question:
    "81) Dans la liste suivante, indiquer les logiciels permettant la prise en main de machines à distance (deux réponses).",
  answers: [
    "VNC",
    "VLC",
    "TeamViewer",
    "Webex",
  ],
  correct: [0, 2],
},

{
  question:
    "82) Une adresse IPv4 se code sur :",
  answers: [
    "4 bits",
    "8 bits",
    "16 bits",
    "32 bits",
  ],
  correct: 3,
},

{
  question:
    "83) Parmi les adresses IP suivantes, laquelle n'est pas valide ?",
  answers: [
    "169.36.125.0",
    "1.2.3.4",
    "147.126.276.9",
    "169.36.255.0",
  ],
  correct: 2,
},

{
  question:
    "84) Quelle est l'adresse localhost ?",
  answers: [
    "255.255.255.0",
    "192.168.0.1",
    "127.0.0.1",
    "255.255.255.255",
  ],
  correct: 2,
},

{
  question:
    "85) Un périphérique possède l'adresse IPv6 suivante : 2001:0DB8:75a3:0214:0607:1234:aa10:ba01. Quel est l'ID de l'interface de ce périphérique ?",
  answers: [
    "2001:0DB8",
    "ba01",
    "2001:0DB8:75a3",
    "0607:1234:aa10:ba01",
  ],
  correct: 3,
},

{
  question:
    "86) Vous devez configurer les adresses IP de vos PC sur le réseau 192.168.1.0 avec un masque 255.255.255.0. Parmi les adresses IP suivantes, quelles sont celles qui ne peuvent pas fonctionner correctement sur vos PC ? (trois réponses)",
  answers: [
    "192.168.1.0",
    "192.168.1.128",
    "192.168.1.254",
    "192.168.1.255",
    "192.168.1.256",
  ],
  correct: [0, 3, 4],
},

{
  question:
    "87) Combien d'adresses hôte peuvent être attribuées sur chaque sous-réseau si l'adresse réseau 130.68.0.0 est utilisée avec un masque 255.255.248.0 ?",
  answers: [
    "30",
    "256",
    "2048",
    "4096",
  ],
  correct: 2,
},

{
  question:
    "88) Quel masque de sous-réseau doit être attribué à l'adresse 192.168.32.0 pour obtenir 254 adresses d'hôtes utilisables par sous-réseau ?",
  answers: [
    "255.255.0.0",
    "255.255.254.0",
    "255.255.255.0",
    "255.255.248.0",
  ],
  correct: 2,
},

{
  question:
    "89) Un employé se plaint qu'il ne peut plus accéder au serveur Intranet de la société. Après vérification de ses paramètres IP, on connaît les informations suivantes : Adresse IP : 10.1.1.2, Masque : 255.255.255.127, Passerelle : 10.1.1.254, Serveur DNS : 192.168.2.3. Quelle est la cause probable du problème ?",
  answers: [
    "Le masque de sous-réseau n'est pas bon, il faudrait le modifier en 255.255.255.248",
    "L'adresse du DNS est erronée, il faut la modifier en 10.1.1.100",
    "L'adresse de la passerelle est incorrecte, il faudrait la modifier en 10.1.1.255",
    "Le masque de sous-réseau n'est pas bon, il faudrait le modifier en 255.255.255.0",
  ],
  correct: 3,
},

{
  question:
    "90) Le PC dont l'adresse IP est 10.1.1.1/24 et dont la passerelle est 10.1.1.100 doit envoyer un paquet ICMP echo (commande ping) à l'adresse IP 10.1.2.3. Quelle est la première étape ?",
  answers: [
    "Il effectue une requête ARP pour récupérer l'adresse MAC du PC 10.1.2.3",
    "Il envoie directement un paquet ICMP echo à l'adresse 10.1.2.3",
    "Il envoie directement un paquet ICMP echo à l'adresse 10.1.1.100",
    "Il effectue une requête ARP pour récupérer l'adresse MAC de sa passerelle",
  ],
  correct: 3,
},
{
  question:
    "91) Un routeur :",
  answers: [
    "Change systématiquement l'adresse IP source d'un paquet qu'il vient de router",
    "Change systématiquement l'adresse IP destination d'un paquet qu'il vient de router",
    "Ne change ni l'adresse IP source, ni l'adresse IP destination tant qu'il n'y a pas de NAT",
  ],
  correct: 2,
},

{
  question:
    "92) Un utilisateur a envoyé un rapport d'incident, car il ne peut accéder à aucun périphérique sur le réseau. Quel outil le technicien réseau peut-il utiliser pour vérifier rapidement la validité de l'adresse IP ?",
  answers: [
    "ipconfig",
    "netstat",
    "ping",
    "tracert",
  ],
  correct: 0,
},

{
  question:
    "93) Un technicien est en train d'effectuer des diagnostics. L'utilisateur indique que l'accès à Internet ne fonctionne pas alors qu'il fonctionnait correctement hier. Après quelques vérifications, le technicien constate que l'utilisateur ne peut pas non plus accéder à l'imprimante réseau du bureau qui se trouve sur le même LAN. L'ordinateur a l'adresse IP 169.254.100.88. Quelle est la cause la plus probable de ce problème ?",
  answers: [
    "Le pilote de la carte réseau doit être mis à jour",
    "Le routeur qui connecte ce réseau aux autres réseaux est en panne",
    "L'ordinateur ne peut pas communiquer avec le serveur DHCP",
    "La passerelle IP par défaut de l'ordinateur est incorrecte",
  ],
  correct: 2,
},

{
  question:
    "94) Un utilisateur peut utiliser une imprimante située sur le même réseau, mais le trafic généré par cet utilisateur ne peut pas atteindre Internet. Quelle peut être la cause de ce problème ?",
  answers: [
    "Une carte réseau du PC est défectueuse",
    "Le câble réseau connecté au PC de l'utilisateur est défectueux",
    "L'adresse IP du PC est incorrecte",
    "L'adresse de la passerelle par défaut du PC est manquante ou incorrecte",
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
