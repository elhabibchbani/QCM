const questions = [
  {
    question:
      "1) Le BIOS a un rôle essentiel pour le fonctionnement de la carte mère:",
    answers: [
      "Initialise tous les composants de la carte mère, du chipset et de certains périphériques",
      "Démarre le système d'exploitation dans l'ordre décroissant des périphériques disponibles",
      "Attribue les ressources nécessaires aux différents périphériques connectés",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "2) Le registre peut être défini comme:",
    answers: [
      "Une base de données contenant les enregistrements de fichiers",
      "Une base de données contenant les paramètres du système d'exploitation",
      "Une base de données contenant les enregistrements système",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "3) La terminologie officielle de l'UEFI:",
    answers: [
      "Catégorise six états distincts dans des processus de démarrage du système d'exploitation",
      "Utilise un nouveau système de partitionnement nommé MBR",
      "Utilise un mécanisme de vérification par signatures numériques",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "4) La technologie RAID consiste à:",
    answers: [
      "Améliorer les performances",
      "Protéger totalement contre les défaillances matérielles",
      "Protéger les données contre la suppression accidentelle",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "5) La couche présentation permet les fonctionnalités suivantes :",
    answers: [
      "Gérer le chiffrement et le déchiffrement des données",
      "Convertir les données machine en données exploitables par n'importe quelle autre machine",
      "La délimitation et la synchronisation des échanges de données",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1],
  },
  {
    question:
      "6) Un utilisateur souhaite chiffrer un message critique avant de l'envoyer à un de ses partenaires, Quel type de cryptage est souvent utilisé?",
    answers: ["SSL", "S/Mime", "DES", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "7) Les disques durs compatibles HOT PLUG permettent ?",
    answers: [
      "L'échange de disque à chaud",
      "De tenir les disques durs à une température correcte",
      "De connecter un format spécifique de disques pour les gros systèmes informatiques",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "8) Quel Protocole/Port est utilisé par NTP (Network Time Protocol)?",
    answers: [
      "UDP 514",
      "UDP 415",
      "UDP 321",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "9) Quelle est l'adresse de broadcast de l'adresse 10.0.1.0/15:",
    answers: [
      "10.0.254.255",
      "10.0.255.255",
      "10.1.255.255",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "10) La MFT peut être définie comme:",
    answers: [
      "Un fichier système accessible depuis l'explorateur de fichiers",
      "Une base de données contenant les enregistrements des fichiers",
      "Remplace la table d'allocation de fichiers du système de fichiers",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "11) Un administrateur souhaite sécuriser son réseau sans fil. Il veut autoriser que certains dispositifs puissent accéder au réseau. Quelle mesure à prendre serait la plus efficace pour limiter l'accès ?",
    answers: [
      "Utiliser le protocole WPA2",
      "Désactiver la diffusion de SSID",
      "Filtrer des adresses MAC",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "12) Laquelle de ces propositions est basée sur un réseau de stockage très haut débit en Fiber Channel ou SCSI?",
    answers: ["NAS", "SAN", "RAID 10", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "13) Le protocole VTP (VLAN Trunking Protocol) est:",
    answers: [
      "Un protocole de niveau 3",
      "Permet d'ajouter ou supprimer un ou plusieurs réseaux locaux virtuels sur un seul commutateur",
      "Permet d'éviter toute incohérence de configuration des VLAN sur l'ensemble d'un réseau local",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "14) Quelle est la représentation en notation décimale de l'adresse IPv4 1101 0010. 0101 0010. 1011 1101. 1001 0111?",
    answers: [
      "172.132.111.30",
      "210.82.189.153",
      "192.168.60.211",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "15) Une interface virtuelle du commutateur (SVI):",
    answers: [
      "Permet l'administration à distance ou le routage inter-vlan",
      "Est une interface physique",
      "Cause une latence plus grande",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "16) Quelle est la distance administrative correcte des méthodes de routage suivantes:",
    answers: [
      "OSPF est 111",
      "RIP est 120",
      "Route statique est 1",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "17) Le mode de transfert asynchrone (en anglais Asynchronous Transfer Mode ou ATM):",
    answers: [
      "Transmettre des paquets de longueur variable",
      "Est un protocole de la couche liaison de donnée du modèle OSI",
      "Conçu pour pouvoir transporter les données de type vidéo",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "18) L'unité de données du protocole de la couche réseau est ?",
    answers: ["Trame", "Paquet", "Segment", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "19) Le protocole PPoE dépend de la couche :",
    answers: [
      "Liaison de données",
      "Réseau",
      "Présentation",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "20) Quels sont les ports implicites du protocole FTPS?",
    answers: ["993", "980", "21", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question:
      "21) Un réseau a comme adresse 179.25.81.0 de masque 255.255.240.0. Quelle est l'adresse de broadcast?",
    answers: [
      "179.25.95.255",
      "179.25.96.255",
      "179.25.111.255",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "22) A quelle couche du modèle OSI Intervient un Pont?",
    answers: [
      "Transport",
      "Session",
      "Liaison",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "23) Quelles sont les propriétés d'un algorithme de routage?",
    answers: [
      "Simplicité",
      "Capacité d'adaptation aux pannes et changement de topologie",
      "Justice (vis à vis des usagers)",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "24) Le protocole ICMP est principalement utilisé pour:",
    answers: [
      "Connaitre la passerelle",
      "Diagnostiquer les problèmes de communication du réseau",
      "Envoyer des données",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "25) À quoi peut servir le hash d'un fichier ?",
    answers: [
      "A obtenir une empreinte d'un fichier",
      "A garantir l'intégrité d'un fichier",
      "À échanger un fichier de manière sécurisée",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1],
  },
  {
    question: "26) Sur Windows 11. où sont stockés les event logs ?",
    answers: [
      "%SystemRoot%\\System32\\Winevt\\Logs",
      "%USERNAME%\\System\\Windows\\logs",
      "%SystemRoot%\\System32\\Widnows\\Winevt\\Logs",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "27) Choisir parmi la liste suivante les différents types de filtrage d'un Firewall:",
    answers: [
      "Le filtrage simple de bit",
      "Le filtrage de paquet avec état (Stateful)",
      "Le filtrage applicatif",
      "Toutes les réponses sont fausses",
    ],
    correct: [1, 2],
  },
  {
    question: "28) Comment sécuriser un réseau ?",
    answers: [
      "Limiter le téléchargement des pièces jointes",
      "Analyser le trafic entrant",
      "Mettre le serveur AD dans la zone DMZ",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "29) ISAKMP définit :",
    answers: [
      "Deux méthodes d'authentification",
      "Les procédures d'authentification d'un pair communicant",
      "Un protocole pour authentifier une seule extrémité d'un tunnel sécurisé",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "30) Par quoi commencent les noms du domaine génériques:",
    answers: ["Une étoile (*)", "@", "&", "Toutes les réponses sont fausses"],
    correct: 3,
  },
  {
    question: "31) La configuration RAID 6:",
    answers: [
      "Se constitue sur un minimum de 3 disques durs",
      "Ne possède qu'une seule tolérance à la panne",
      "Peut résister à la défaillance de 2 ou plusieurs disques",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "32) Quelle plage d'adresses peut être utilisée dans le premier octet d'une adresse de classe C?",
    answers: [
      "192-223",
      "191-222",
      "191-221",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "33) Quelle commande est lancée par l'administrateur réseau pour déterminer si l'équilibrage de la charge est actif sur un routeur ?",
    answers: [
      "show ip protocols",
      "show ip interface brief",
      "show ip interface",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "34) Lesquels des protocoles suivants de la couche application utilisent le protocole TCP?",
    answers: ["SMTP", "FTP", "TFTP", "Toutes les réponses sont fausses"],
    correct: [0, 1],
  },
  {
    question:
      "35) Quelle est la dernière adresse machine pour l'adresse suivante 172.40.40.0/21:",
    answers: [
      "172.40.46.254",
      "172.40.40.255",
      "172.40.45.254",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "36) Quelle est la différence entre un IPS et un IDS?",
    answers: [
      "L'action prise lorsqu'un incident potentiel a été détecté",
      "Les IPS ne sont pas conçus pour bloquer les attaques par contre les IDS oui",
      "Les deux offrent une prévention proactive contre certaines des failles de sécurité réseau les plus connue",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "37) Un administrateur veut programmer un arrêt du système dans 15 minutes en informant les utilisateurs, on exécute la commande suivante :",
    answers: [
      "Shutdown -c 15 'Arrêt pour maintenance'",
      "Shutdown now + 15 'Arrêt pour maintenance'",
      "Shutdown -h + 15 'Arrêt pour maintenance'",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "38) Les VLANs présentent les intérêts suivants :",
    answers: [
      "Améliorer la gestion du réseau",
      "Sécuriser la liaison entre deux réseaux",
      "Séparer les flux",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 2],
  },
  {
    question: "39) La fonction d'un PTR (élément d'enregistrement DNS):",
    answers: [
      "Renvoie une adresse IPv4 pour un nom d'host donné",
      "Délègue la gestion d'une zone à un serveur de nom faisant autorité",
      "Permet d'effectuer un Reverse DNS",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "40) Un processeur RISC est un processeur dont le jeu d'instructions possède les propriétés suivantes:",
    answers: [
      "Contient beaucoup de classes d'instructions différentes",
      "Contient des instructions complexes et de taille variable",
      "Les instructions sont de taille fixe",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "41) En Wi-Fi, au niveau MAC, les données sont véhiculées dans des :",
    answers: [
      "Paquets",
      "Bits",
      "Trames de données",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "42) L'unité de traitement est composée de :",
    answers: [
      "Un registre de données",
      "Mémoire cache LI",
      "Un accumulateur",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "43) Les processeurs ARM sont des processeurs:",
    answers: [
      "Caractérisés par leur faible consommation d'énergie",
      "Connus par leurs surconsommations électriques",
      "Compatiblés avec tous les logiciels",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "44) Sur une carte mère UEFI le mode BIOS est souvent appelé CSM, il permet de:",
    answers: [
      "Rendre la carte mére compatible avec des anciens systèmes d'exploitation",
      "Déterminer l'emplacement du chargeur d'amorçage",
      "Lancer un ou plusieurs systèmes d'exploitation",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "45) Une machine a comme adresse IP 192.168.25.14 et se trouve dans un réseau dont le masque est 255.255.240.0. Quelle est l'adresse du réseau ?",
    answers: [
      "162.183.18.0",
      "162.183.24.0",
      "162.183.16.0",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "46) Quels composants protègent les données les plus importantes ?",
    answers: [
      "Composants de chiffrement",
      "Code d'accès à la base de données",
      "Code de gestion de session",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "47) L'auto-négociation d'Ethernet est relatif au:",
    answers: [
      "Mode QOS",
      "Mode STP",
      "Détection des collisions",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "48) Quel dispositif réseau est généralement utilisé pour connecter différents réseaux locaux ensemble ?",
    answers: [
      "Commutateur",
      "Pont",
      "Répéteur",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "49) Quelle est la principale différence entre un switch de niveau 2 (L2) et un switch de niveau 3 (L3) dans un réseau informatique ?",
    answers: [
      "Le switch de niveau 2 fonctionne uniquement au niveau de la couche liaison de données du modèle OSI, tandis que le switch de niveau 3 fonctionne au niveau de la couche réseau.",
      "Le switch de niveau 2 est capable de router les paquets IP entre différents sous-réseaux, tandis que le switch de niveau 3 se contente de transférer les trames Ethernet au sein d'un même sous-réseau.",
      "Le switch de niveau 2 peut gérer des adresses MAC, tandis que le switch de niveau 3 peut gérer des adresses IP",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "50) Choisissez le numéro de port du FTP:",
    answers: ["20", "23", "21", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question:
      "51) Quelle est la signification du terme 'multipaire' dans le domaine des câbles et des télécommunication",
    answers: [
      "Un câble composé de plusieurs paires torsadées, souvent utilisé pour la transmission de signaux numériques ou analogiques",
      "Un câble conçu spécifiquement pour les réseaux sans fil",
      "Un câble optique à fibre unique utilisé pour les connexions longue distance",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "52) Quel est le rôle principal d'un contrôleur de domaine dans un environnement Active Directory?",
    answers: [
      "Stocker les données des utilisateurs locaux",
      "Contrôler l'accès aux sites web sécurisés",
      "Gérer les stratégies de groupe et les permissions d'accès aux ressources réseau",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "53) À quoi sert principalement la réplication des données dans un système informatique?",
    answers: [
      "A accélérer le processus de sauvegarde des données",
      "A garantir l'intégrité des données stockées",
      "A fournir une redondance des données pour assurer la disponibilité en cas de panne",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "54) À quoi sert un snapshot dans un environnement de virtualisation ?",
    answers: [
      "A restaurer rapidement une machine virtuelle à un état antérieur en cas de besoin",
      "À capturer l'état actuel d'une machine virtuelle pour en faire une image figée",
      "À augmenter les performances des machines virtuelles en réduisant la fragmentation du stockage",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1],
  },
  {
    question:
      "55) Dans la couche 2 du modèle OSI, comment s'appelle la sous couche de la moitié supérieure ?",
    answers: [
      "Couche MAC",
      "Couche LLC",
      "Couche IP",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "56) Overclocking est une technique:",
    answers: [
      "De synchronisation",
      "D'accélération",
      "De ralentissement",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "57) Quelle est la différence entre un IPS et un IDS ?",
    answers: [
      "L'action prise lorsqu'un incident potentiel a été détecté",
      "Les IPS ne sont pas conçus pour bloquer les attaques par contre les IDS oui",
      "Les deux offrent une prévention proactive contre certaines des failles de sécurité réseau les plus connue",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "58) Quelle couche du modèle OSI est responsable de la transmission sans erreur des données sur le réseau ?",
    answers: [
      "Couche physique",
      "Couche liaison de données",
      "Couche réseau",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "59) Quel type d'adresse est utilisé pour identifier un périphérique sur un réseau local?",
    answers: [
      "Adresse IP",
      "Adresse MAC",
      "Adresse DNS",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "60) Quelle est la fonction du protocole TCP/IP dans un réseau informatique?",
    answers: [
      "Assurer la transmission fiable des données",
      "Déterminer le chemin optimal pour les paquets de données",
      "Contrôler l'accès au réseau en utilisant des adresses MAC",
      "Toutes les réponses sont fausses",
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
