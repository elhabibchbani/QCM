const questions = [
  {
    question: "1) Dans quelle topologie peut-on utiliser un commutateur?",
    answers: [
      "topologie bus",
      "topologie étoile",
      "topologie anneau",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "2) IP (Internet Protocol) décrit:",
    answers: [
      "un transfert de fichier",
      "un protocole de communication",
      "le réseau Ethernet",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question:
      "3) Un réseau a comme masque 255.255.255.240. Combien de machines peut-il y avoir sur un tel réseau ?",
    answers: ["16", "14", "32", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "4) Le three-way handshake est:",
    answers: [
      "Un processus de connexion entre deux hôtes en trois étapes",
      "Une technique de communication desktop",
      "Processus de prise de contact UDP",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "5) Le contrôle de parité est une technique:",
    answers: [
      "de détection d'erreur",
      "de cryptage",
      "de multiplexage",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "6) Le numéro de port du protocole POP3 est:",
    answers: ["53", "443", "110", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "7) A quoi sert WDS (Wireless Distribution System)?",
    answers: [
      "Interconnexion de plusieurs points d'accès sans fil",
      "Nécessite trois stations Wi-Fi minimum",
      "Pont entre deux réseaux câblés",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question:
      "8) Pour accéder à la racine d'un lecteur, j'utilise la commande:",
    answers: ["cd", "mv..", "cd..", "Toutes les réponses sont fausses"],
    correct: 0,
  },
  {
    question: "9) Qu'est-ce qu'un commutateur ?",
    answers: [
      "Un Hub",
      "Un Switch",
      "Un Routeur",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "10) La durée de transfert d'un fichier est déterminée par:",
    answers: [
      "Le débit disponible",
      "L'extension du fichier",
      "La taille du fichier",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question:
      "11) Dans un processeur l'unité de contrôle est composée au minimum de:",
    answers: [
      "Un registre instruction (RI)",
      "Un registre adresse (RA)",
      "Un registre de données",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "12) Parmi les fonctionnalités du protocole SIP sont:",
    answers: [
      "Gère les sessions multimédia",
      "Transfert vocal en commutation de circuits",
      "Utilise TCP ou UDP",
      "Toutes les réponses sont fausses",
    ],
    correct: [0,2],
  },
  {
    question:
      "13) Lequel de ces types de réseau couvre le plus en termes géographiques?",
    answers: ["WAN", "LAN", "MAN", "Toutes les réponses sont fausses"],
    correct: 0,
  },
  {
    question: "14) L'adresse MAC est l'adresse:",
    answers: [
      "Machines Apple",
      "IP unique mondiale",
      "Physique de la machine",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "15) Une adresse MAC est codée sur:",
    answers: [
      "12 octets",
      "48 bits",
      "24 octets",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "16) 172.16.0.0 accueille combien d'hôtes?",
    answers: ["510", "65534", "65536", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "17) Représentation binaire de 0xEB?",
    answers: [
      "11000111",
      "11000011",
      "11101011",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "18) Protocoles couche réseau:",
    answers: ["IPv6", "OSPF", "TCP", "Toutes les réponses sont fausses"],
    correct: [0,1],
  },
  {
    question: "19) But des messages ICMP?",
    answers: [
      "Fournir des commentaires des transmissions IP",
      "Informer les routeurs des changements",
      "Assurer livraison IP",
      "Toutes les réponses sont fauses",
    ],
    correct: 0,
  },
  {
    question: "20) Quelle adresse ne change jamais?",
    answers: [
      "Adresse MAC",
      "Passerelle",
      "Adresse IP",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "21) Commande pour afficher cache DNS:",
    answers: [
      "ipconfig /displaydns",
      "ipconfig /all",
      "nslookup",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "22) Pour bloquer définitivement un PC sur réseau:",
    answers: [
      "Adresse IP",
      "Adresse MAC",
      "Nom utilisateur",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "23) Restaurer la base de registres:",
    answers: [
      "scanreg /restore",
      "restore/registry",
      "copy registry/regedit",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "24) Deux PC même IP:",
    answers: [
      "Marchent très bien",
      "Seul le premier marche",
      "Débit partagé",
      "Conflit IP",
    ],
    correct: 3,
  },
  {
    question: "25) Sécurité WiFi clés dynamiques:",
    answers: ["EAP", "PSK", "WPA", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "26) Switch couche 2 sans MAC connue:",
    answers: [
      "Diffuse sur tous ports sauf entrant",
      "Requête ARP",
      "Informe l'hôte",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "27) Solution épuisement IPv4:",
    answers: ["SMB", "DHCP", "NAT", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "28) Réseau à canal partagé:",
    answers: [
      "Point-to-Point",
      "Broadcast",
      "Protocole",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "29) Gestion collisions WiFi:",
    answers: [
      "CSMA/CA",
      "CSMA/CD",
      "Token",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "30) WAN connexion dédiée:",
    answers: [
      "RNIS",
      "Frame Relay",
      "Lignes louées",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "31) Familles IDS:",
    answers: ["QIDS", "RIDS", "SIDS", "NIDS et HIDS"],
    correct: 3,
  },
  {
    question: "32) Afficher numéro série:",
    answers: ["vol", "cd", "whoami", "Toutes les réponses sont fausses"],
    correct: 0,
  },
  {
    question: "33) L'ALU stocke résultats intermédiaires dans:",
    answers: [
      "Registres",
      "Accumulateur",
      "Tas",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "34) WAN sans FAI:",
    answers: ["Câble", "VPN", "VSAT", "Toutes les réponses sont fausses"],
    correct: 2,
  },
  {
    question: "35) Skylake:",
    answers: [
      "Micro-architecture Haswell",
      "Micro-architecture x86 Intel",
      "Requiert socket LGA",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "36) Serveur Proxy permet:",
    answers: [
      "Connexion sous-réseaux",
      "Bloquer accès à certains sites",
      "Bloquer extensions fichiers",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "37) Programme malveillant non auto-réplicatif:",
    answers: [
      "Cheval de Troie",
      "Virus",
      "Ver",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "38) Première adresse machine 172.40.10.0/21:",
    answers: [
      "172.40.10.1",
      "172.40.9.1",
      "172.40.8.1",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "39) Accès distant sécurisé télétravail:",
    answers: [
      "Accès haut débit",
      "Tunnel VPN chiffré",
      "VoIP",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "40) Commande dig permet:",
    answers: [
      "Infos résolveurs DNS",
      "Interroger DHCP",
      "Diagnostiquer résolution nom",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "41) Serveur DNS ne trouve pas nom:",
    answers: [
      "Demande serveur adjacent",
      "Demande serveur racine",
      "Affiche erreur",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "42) Espace swap sert à:",
    answers: [
      "Améliorer OS",
      "Stocker commandes",
      "Éviter saturation RAM",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "43) Bus de données:",
    answers: [
      "Transporte données/instructions",
      "Transmet adresses",
      "Véhicule signaux réponse",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "44) RAID 10:",
    answers: [
      "Combinaison RAID 1 et 0",
      "Défaillance totale si 1 disque",
      "Pas perte stockage",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "45) VoIP est:",
    answers: [
      "Envoi voix sur Internet",
      "Réseau circuits dédié",
      "Gère sessions multimédia",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "46) SGX implique:",
    answers: [
      "CPU Sne Gen",
      "Support BIOS/UEFI",
      "Chiffrement mémoire CPU",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "47) ADSL dépend de la couche:",
    answers: [
      "Physique",
      "Liaison",
      "Réseau",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "48) Routage à état de lien:",
    answers: [
      "Nombre illimité sauts",
      "Petits réseaux",
      "Grands réseaux",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "49) Routage vecteur distance utilisé par:",
    answers: [
      "Réseaux modernes",
      "RIP",
      "IS-IS",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "50) Couche transport OSI:",
    answers: [
      "Livraison bout en bout",
      "Acheminer paquets",
      "Standardiser formats",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "51) OSPF est:",
    answers: [
      "Routage à état de lien",
      "MAJ seulement si changement",
      "Envoie table complète",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "52) Composant le plus rapide:",
    answers: ["Cache", "Registre", "SSD", "Toutes les réponses sont fausses"],
    correct: 1,
  },
  {
    question: "53) Câble de liaison sert à:",
    answers: [
      "Carte réseau → panneau",
      "Prise → ordinateur",
      "Panneau → switch",
      "Toutes les réponses sont fausses",
    ],
    correct: 3,
  },
  {
    question: "54) Si interruption détectée CPU:",
    answers: [
      "Enregistre état suivant",
      "Enregistre état précédent",
      "Enregistre état actuel",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "55) Avantage RAID 0:",
    answers: [
      "Données dupliquées",
      "Pas perte stockage",
      "Tolérance panne",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "56) Sous-couche haute liaison données:",
    answers: [
      "Contrôle erreur MAC",
      "Choisir chemin",
      "Contrôle flux",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "57) Classe B plage valide:",
    answers: [
      "128.0.0.1 à 191.255.255.254",
      "172.16.0.0 à 172.31.255.255",
      "128.0.0.1 à 192.255.255.254",
      "Toutes les réponses sont fausses",
    ],
    correct: 0,
  },
  {
    question: "58) POST fait:",
    answers: [
      "Teste lecteurs",
      "Teste carte mère et périphériques",
      "Teste fichiers DOS",
      "Toutes les réponses sont fausses",
    ],
    correct: 1,
  },
  {
    question: "59) Classe D plage:",
    answers: [
      "223.0.0.1 à 239.255.255.254",
      "223.0.0.1 à 241.255.255.254",
      "224.0.0.1 à 239.255.255.254",
      "Toutes les réponses sont fausses",
    ],
    correct: 2,
  },
  {
    question: "60) Un Pont permet d'interconnecter:",
    answers: [
      "Protocoles différents",
      "Technologies différentes",
      "Même technologie",
      "Toutes les réponses sont fausses",
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
