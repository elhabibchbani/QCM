const questions = [
  {
    question: "1) Le nombre des tribunaux de Première Instance au Maroc est:",
    answers: ["53", "63", "83", "Toutes les réponses sont fausses"],
    correct: 3,
  },
  {
    question: "2) La date d'adoption de la dernière constitution au Maroc:",
    answers: [
      "1 Mars 2011",
      "1 Mai 2011",
      "1 Juin 2011",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "3) Le nombre des régions au Maroc",
    answers: ["9", "14", "15", "Toutes les réponses sont fausses"],
    correct: 3,
  },
  {
    question: "4) Le Ministère de la Justice fait partie du:",
    answers: [
      "pouvoir exécutif",
      "pouvoir législatif",
      "pouvoir judiciaire",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "5) Qui est le chef de l'administration au Maroc:",
    answers: [
      "Premier Ministre",
      "Chef du Gouvernement",
      "Ministre de L'économie, Des Finances et de la Réforme de",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "6) Le modèle TCP/IP contient:",
    answers: [
      "5 couches",
      "6 couches",
      "7 couches",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "7) Quelle est la première couche du modèle TCP/IP:",
    answers: [
      "Réseau",
      "Application",
      "Accès réseau",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "8) Quelle est la 4ème couche du modèle OSI :",
    answers: [
      "Couche session",
      "Couche réseau",
      "Couche Liaison de données",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "9) Le numéro de port du protocole HTTPS est:",
    answers: ["21", "53", "443", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "10) Le(s) numéro(s) de port du protocole DHCP est (sont):",
    answers: ["67", "68", "69", "Toutes les réponses sont fausses"],
    correct: [0, 1],
  },
  {
    question: "11) Quel est le masque réseau correspondant à la notation CID",
    answers: [
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "12) Quel est le masque réseau correspondant à l'adresse IP suiv",
    answers: [
      "255.255.240.0",
      "255.255.248.0",
      "255.255.252.0",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "13) Quel est le nombre des adresses IP utilisables pour le résea",
    answers: ["30", "31", "32", "Toutes les réponses sont fausses"],
    correct: 3,
  },
  {
    question: "14) Le protocole ARP permet:",
    answers: [
      "La résolution d'une adresse IP en adresse MAC",
      "La résolution d'une adresse MAC en adresse IP",
      "Tester la connectivité",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "15) Quelle(s) adresse(s) fait (font) partie(s) des adresses privées:",
    answers: [
      "10.59.13.8",
      "11.26.40.1",
      "172.32.644",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "16) Quelle(s) adresse(s) fait (font) partie(s) des adresses publiques:",
    answers: [
      "192.167.1.10",
      "172.15.84.96",
      "10.25.5.6",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "17) Quelle est la couche du modèle TCP/IP qui permet le routage:",
    answers: [
      "Accès réseau",
      "Liaison de données",
      "Réseau",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "18) Quel est l'algorithme utilisé par le protocole OSPF pour calculer le plus court chemin:",
    answers: [
      "Etat de lien",
      "Dijkstra",
      "Hybride x",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "19) Citez, parmi les choix, les types de virtualisation qui existent:",
    answers: [
      "Virtualisation du réseau",
      "Virtualisation du stockage",
      "Virtualisation du Poste de travail",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1, 2],
  },
  {
    question: "20) Un équipement de Filtrage Web (Proxy web) permet de:",
    answers: [
      "Filtrer les URLS",
      "Contrôler l'accès aux URLs",
      "Router les paquets IP",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1],
  },
  {
    question: "21) Un onduleur est un équipement qui assure:",
    answers: [
      "Le filtrage par adresse MAC",
      "Le routage et l'acheminement des paquets IP",
      "La segmentation TCP et UDP.",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "22) << IMAP >> est un protocole de messagerie permettant de:",
    answers: [
      "Récupérer les courriers électroniques sur un serveur de messagerie et de les télécharger sur un ordinateur",
      "Accéder aux courriers électroniques directement sur les serveurs de messagerie",
      "Envoyer et recevoir des courriers électroniques",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "23) DHCP est un protocole permettant:",
    answers: [
      "Le transfert des fichiers",
      "La resolution du nom de domaine",
      "L'attribution automatique des adresses IP",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "24) Quelle est la norme définissant la notion du VLAN:",
    answers: [
      "IFFE 802",
      "IEEE 802.11",
      "IEEE 802.10",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "25) Le protocole de transfert de fichier est:",
    answers: ["DNS", "FTP", "SNMP", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "26) Le protocole de supervision est:",
    answers: ["SMTPA", "SNMP", "SFTP", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question:
      "27) Quel est le type de RAID assurant une tolérance de panne élevée:",
    answers: ["RAID 0", "RAID 1", "RAID 5", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "28) La portée d'un câble Ethernet 10Gbit/s est de:",
    answers: ["90m", "100m", "1000m", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question:
      "29) Qu'appelle-t-on le connecteur d'un câble Ethernet catégorie 6:",
    answers: ["RJ11", "RJ457", "BNC", "Toutes les réponses sont fausses"],
    correct: 3,
  },
  {
    question:
      "30) Quelle(s) est (sont) la (les) commande(s) Cisco pour sauvegarder la configuration:",
    answers: [
      "Copy running-config startup-config",
      "Copy startup-config running-config",
      "Copy run start",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "31) Pour configurer un switch pour la première fois, on a besoin de:",
    answers: [
      "Connaitre son adresse IP",
      "Un cable Ethernet",
      "Un cable console",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "32) Qu'appelle-t-on le(s) connecteur(s) d'un câble Fibre optique:",
    answers: ["BNC", "LC", "SC", "Toutes les réponses sont fausses"],
    correct: [1, 2],
  },
  {
    question:
      "33) Dans un routeur Cisco, la configuration est sauvegardée dans la mémoire :",
    answers: ["Flash", "ROM", "NVRAM", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "34) Combien de couches du modèle OSI gère un Pont?",
    answers: ["1", "2", "4", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question:
      "35) Comment s'appelle le protocole permettant la résolution d'adresses MAC en adresse IP?",
    answers: ["SMTP", "ARP", "RARP", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question:
      "36) On parle de disques durs compatibles HOT PLUG ce mode sert à quoi ?",
    answers: [
      "Améliorer les performances de votre PC",
      "Permet l'échange de disque à chaud",
      "Maintenir les disques durs à une température correcte",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "37) Quelle est la plage d'adresses IP valides de la Classe B?",
    answers: [
      "128.0.0.1 à 191.255.255.254",
      "128.0.0.1 à 192.255.255.254",
      "127.0.0.1 à 192.255.255.254",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "38) Que fait le POST (Power on self test)?",
    answers: [
      "Teste tous les lecteurs exclusivement",
      "Teste les barrettes mémoires",
      "Teste des circuits de la carte mère et des périphériques",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "39) Dans la couche 2 du modèle OSI, comment s'appelle la sous couche de la moitié supérieure qui assure l'interface entre n'importe quel type de réseau et les couches supérieures ?",
    answers: [
      "Couche MAC",
      "Couche LLC",
      "Couche liaison",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "40) Que désigne-t-on par 'bande passante'?",
    answers: [
      "La quantité de données maximale transmissible par unité de temps",
      "La quantité de données maximale transmise par unité de temps",
      "La quantité de données minimale transmissible par unité de temps",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "41) En Wi-Fi, la technique d'accès au support s'appelle:",
    answers: [
      "CSMA/CA",
      "CSMA/CW",
      "CSMA/CD",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "42) La couche transport du modèle OSI se charge",
    answers: [
      "De livrer les messages de bout en bout du réseau",
      "D'acheminer les paquets d'après une adresse réseau unique",
      "De définir les procédures d'accès au support",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "43) Un CODEC dépend de la couche",
    answers: [
      "Liaison de données",
      "Réseau",
      "Présentation",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "44) Le champ Protocole de huit bits indique le type de protocole qui est encapsulé dans les données du datagramme IP. Les valeurs types sont:",
    answers: [
      "I pour ICMP",
      "6 pour TCP",
      "17 pour UDP",
      "Toutes les réponses sont fausses",
    ],
    correct: [1, 2],
  },
  {
    question: "45) L'unité de données de protocole de la couche liaison est?",
    answers: ["Bit", "Données", "Trame", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "46) En informatique, qu'est-ce qu'un SSO?",
    answers: [
      "Service d'identification",
      "Service de confidentialité",
      "Service d'authentification",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "47) La commande dig:",
    answers: [
      "Permet de tout savoir sur les résolveurs DNS",
      "Permet d'interroger des serveurs DHCP",
      "Permet de diagnostiquer les dysfonctionnements dans la résolution de noms",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "48) A quoi sert l'espace d'échange communément appelé espace de swap?",
    answers: [
      "Améliorer le bon fonctionnement de l'O.S",
      "Empêcher la saturation de la mémoire centrale",
      "Stocker des processus préemptés par le kernel",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "49) Quelle est la topologie logique du type de réseau 'Token ring'?",
    answers: ["Bus", "Anneau", "Etoile", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question:
      "50) Que représente l'arborescence '/dev' pour le système Linux ?",
    answers: [
      "Centralisation des fichiers exécutables",
      "Répertoire de fichiers spéciaux",
      "Répertoire personnel du super-utilisateur root",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "51) La commande 'pwd' permet de:",
    answers: [
      "Donner le nom complet du répertoire courant",
      "Créer un raccourci vers le répertoire personnel",
      "Afficher le chemin absolu",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question:
      "52) En Linux, quelle commande permet de changer les droits d'accès d'un fichier ou un répertoire?",
    answers: ["Lsmod", "Chmod", "Chown", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "53) Comment sécuriser un réseau ?",
    answers: [
      "Analyser le trafic sortant",
      "Analyser le trafic entrant",
      "Mettre en place les serveurs de production dans une zone séparée",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "54) L'adresse 185.10.30.74 est une adresse de classe:",
    answers: ["B", "A", "C", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "55) VoIP est un protocole de communication:",
    answers: [
      "Utilisé pour envoyer des messages vocaux sur Internet",
      "Fonctionne via un réseau à commutation de circuits dédié uniquement à la téléphonie",
      "Gère les sessions multimédia",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 2],
  },
  {
    question: "56) La technologie RAID peut:",
    answers: [
      "Améliorer les performances",
      "Protéger totalement des défaillances matérielles",
      "Protéger les données contre les virus",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "57) À quoi peut servir le hash d'un fichier?",
    answers: [
      "Obtenir une empreinte d'un fichier",
      "Garantir l'intégrité d'un fichier",
      "Échanger un fichier de manière sécurisée",
      "Toutes les réponses sont fausses",
    ],
    correct: [0, 1],
  },
  {
    question:
      "58) Quelle commande est lancée par l'administrateur réseau pour déterminer si l'équilibrage de la charge est actif sur un routeur?",
    answers: [
      "show ip protocols",
      "show ip route",
      "show ip interface brief",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "59) Lesquels des protocoles suivants de la couche application utilisent le protocole TCP?",
    answers: ["POP3", "FTP", "SSH", "Toutes les réponses sont fausses"],
    correct: [0, 1, 2],
  },
  {
    question: "60) Les virus touchent généralement les fichiers qui ont:",
    answers: [
      ".BIN et .bat",
      ".com et .exe",
      ".doc et .xls",
      "Toutes les réponses sont fausses",
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
