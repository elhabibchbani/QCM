const questions = [
  {
    question: "1) Un réseau informatique est :",
    answers: [
      "a) Un ensemble d'ordinateurs et de périphériques interconnectés",
      "b) Un seul ordinateur avec plusieurs programmes",
      "c) Uniquement un réseau Internet",
      "d) Un système d'exploitation",
    ],
    correct: 0,
  },
  {
    question: "2) LAN signifie :",
    answers: [
      "a) Large Area Network",
      "b) Local Area Network",
      "c) Logical Access Network",
      "d) Long Access Node",
    ],
    correct: 1,
  },
  {
    question: "3) Un LAN couvre généralement :",
    answers: [
      "a) Une zone géographique limitée",
      "b) Plusieurs continents",
      "c) Toute la planète",
      "d) Uniquement les réseaux mobiles",
    ],
    correct: 0,
  },
  {
    question: "4) WAN signifie :",
    answers: [
      "a) Wireless Area Network",
      "b) Wide Area Network",
      "c) Web Access Network",
      "d) Wired Area Node",
    ],
    correct: 1,
  },
  {
    question: "5) Internet est principalement considéré comme :",
    answers: [
      "a) Un LAN",
      "b) Un WAN mondial",
      "c) Un PAN",
      "d) Un réseau Bluetooth",
    ],
    correct: 1,
  },
  {
    question: "6) Le modèle OSI comporte :",
    answers: ["a) 4 couches", "b) 5 couches", "c) 7 couches", "d) 8 couches"],
    correct: 2,
  },
  {
    question: "7) La couche 1 du modèle OSI est :",
    answers: ["a) Réseau", "b) Physique", "c) Transport", "d) Session"],
    correct: 1,
  },
  {
    question: "8) La couche 2 du modèle OSI est :",
    answers: [
      "a) Liaison de données",
      "b) Réseau",
      "c) Session",
      "d) Application",
    ],
    correct: 0,
  },
  {
    question: "9) La couche 3 du modèle OSI est :",
    answers: ["a) Transport", "b) Réseau", "c) Présentation", "d) Physique"],
    correct: 1,
  },
  {
    question: "10) La couche 4 du modèle OSI est :",
    answers: ["a) Transport", "b) Réseau", "c) Session", "d) Application"],
    correct: 0,
  },
  {
    question: "11) La couche 7 du modèle OSI est :",
    answers: [
      "a) Présentation",
      "b) Session",
      "c) Application",
      "d) Transport",
    ],
    correct: 2,
  },
  {
    question: "12) L'ordre correct des couches OSI de 1 à 7 est :",
    answers: [
      "a) Physique, Liaison, Réseau, Transport, Session, Présentation, Application",
      "b) Physique, Réseau, Liaison, Transport, Session, Application, Présentation",
      "c) Liaison, Physique, Réseau, Transport, Présentation, Session, Application",
      "d) Physique, Transport, Réseau, Liaison, Session, Présentation, Application",
    ],
    correct: 0,
  },
  {
    question: "13) La couche physique du modèle OSI concerne principalement :",
    answers: [
      "a) Les bits et les signaux transmis sur le support",
      "b) Les adresses IP",
      "c) Les ports TCP",
      "d) Les noms DNS",
    ],
    correct: 0,
  },
  {
    question: "14) La couche liaison de données utilise notamment :",
    answers: [
      "a) Les adresses MAC",
      "b) Les adresses URL",
      "c) Les numéros de port",
      "d) Les noms de domaine",
    ],
    correct: 0,
  },
  {
    question: "15) La couche réseau est principalement associée à :",
    answers: [
      "a) L'adressage IP et le routage",
      "b) La transmission des bits",
      "c) Les applications utilisateur",
      "d) Le chiffrement des fichiers uniquement",
    ],
    correct: 0,
  },
  {
    question: "16) La couche transport est principalement responsable :",
    answers: [
      "a) De la communication de bout en bout entre applications",
      "b) De la conversion des signaux électriques",
      "c) De l'adressage MAC uniquement",
      "d) Du câblage réseau",
    ],
    correct: 0,
  },
  {
    question: "17) TCP signifie :",
    answers: [
      "a) Transmission Control Protocol",
      "b) Transfer Communication Process",
      "c) Transport Connection Program",
      "d) Transmission Communication Port",
    ],
    correct: 0,
  },
  {
    question: "18) UDP signifie :",
    answers: [
      "a) Universal Data Protocol",
      "b) User Datagram Protocol",
      "c) Unified Data Process",
      "d) User Data Port",
    ],
    correct: 1,
  },
  {
    question: "19) TCP est un protocole :",
    answers: [
      "a) Orienté connexion",
      "b) Sans connexion",
      "c) Exclusivement utilisé par DNS",
      "d) Exclusivement utilisé par DHCP",
    ],
    correct: 0,
  },
  {
    question: "20) UDP est généralement :",
    answers: [
      "a) Orienté connexion",
      "b) Sans connexion",
      "c) Basé sur une connexion TCP",
      "d) Utilisé uniquement pour le routage",
    ],
    correct: 1,
  },
  {
    question: "21) Un avantage important de TCP est :",
    answers: [
      "a) La fiabilité de la transmission",
      "b) L'absence totale d'en-tête",
      "c) L'absence de contrôle de flux",
      "d) L'utilisation obligatoire de l'adresse MAC",
    ],
    correct: 0,
  },
  {
    question: "22) UDP est particulièrement adapté aux applications qui :",
    answers: [
      "a) Privilégient une faible latence et peuvent tolérer certaines pertes",
      "b) Nécessitent toujours une livraison fiable de chaque paquet",
      "c) Nécessitent obligatoirement une connexion TCP",
      "d) N'utilisent jamais Internet",
    ],
    correct: 0,
  },
  {
    question: "23) Une adresse MAC est généralement :",
    answers: [
      "a) Une adresse de couche liaison",
      "b) Une adresse de couche transport",
      "c) Une adresse DNS",
      "d) Un numéro de port",
    ],
    correct: 0,
  },
  {
    question: "24) Une adresse MAC Ethernet classique comporte :",
    answers: ["a) 16 bits", "b) 32 bits", "c) 48 bits", "d) 128 bits"],
    correct: 2,
  },
  {
    question: "25) Une adresse IPv4 comporte :",
    answers: ["a) 16 bits", "b) 32 bits", "c) 48 bits", "d) 128 bits"],
    correct: 1,
  },
  {
    question: "26) Une adresse IPv6 comporte :",
    answers: ["a) 32 bits", "b) 64 bits", "c) 96 bits", "d) 128 bits"],
    correct: 3,
  },
  {
    question: "27) Laquelle est une adresse IPv4 valide ?",
    answers: [
      "a) 192.168.1.10",
      "b) 192.168.1.300",
      "c) 192.168.1",
      "d) 192.168.1.10.5",
    ],
    correct: 0,
  },
  {
    question: "28) Laquelle est une adresse IPv6 valide ?",
    answers: [
      "a) 192.168.1.1",
      "b) 2001:db8::1",
      "c) 255.255.255.0",
      "d) 10.0.0.1",
    ],
    correct: 1,
  },
  {
    question:
      "29) Quelle adresse appartient au réseau privé IPv4 192.168.0.0/16 ?",
    answers: [
      "a) 192.168.10.20",
      "b) 192.169.10.20",
      "c) 172.50.1.1",
      "d) 8.8.8.8",
    ],
    correct: 0,
  },
  {
    question: "30) Laquelle est une adresse IPv4 privée ?",
    answers: ["a) 8.8.8.8", "b) 172.20.10.5", "c) 1.1.1.1", "d) 209.85.200.1"],
    correct: 1,
  },
  {
    question:
      "31) Les trois plages IPv4 privées définies par RFC 1918 comprennent notamment :",
    answers: [
      "a) 10.0.0.0/8",
      "b) 11.0.0.0/8",
      "c) 100.0.0.0/8",
      "d) 200.0.0.0/8",
    ],
    correct: 0,
  },
  {
    question: "32) Le masque 255.255.255.0 correspond à :",
    answers: ["a) /8", "b) /16", "c) /24", "d) /32"],
    correct: 2,
  },
  {
    question: "33) Le masque 255.255.0.0 correspond à :",
    answers: ["a) /8", "b) /16", "c) /24", "d) /30"],
    correct: 1,
  },
  {
    question: "34) Le masque 255.0.0.0 correspond à :",
    answers: ["a) /8", "b) /16", "c) /24", "d) /32"],
    correct: 0,
  },
  {
    question:
      "35) Pour le réseau 192.168.1.0/24, le nombre total d'adresses IPv4 est :",
    answers: ["a) 128", "b) 254", "c) 256", "d) 512"],
    correct: 2,
  },
  {
    question:
      "36) Dans un réseau IPv4 /24 classique, le nombre d'adresses hôtes utilisables est généralement :",
    answers: ["a) 256", "b) 255", "c) 254", "d) 252"],
    correct: 2,
  },
  {
    question:
      "37) Dans un réseau IPv4 classique, l'adresse réseau est utilisée pour :",
    answers: [
      "a) Identifier le réseau",
      "b) Identifier obligatoirement le serveur DNS",
      "c) Identifier le port TCP",
      "d) Identifier la carte Wi-Fi uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "38) Dans un réseau IPv4 classique, l'adresse de broadcast sert à :",
    answers: [
      "a) Envoyer un paquet à tous les hôtes du réseau local",
      "b) Identifier uniquement le routeur",
      "c) Identifier un serveur DNS",
      "d) Chiffrer les communications",
    ],
    correct: 0,
  },
  {
    question: "39) Le protocole ARP permet principalement de :",
    answers: [
      "a) Associer une adresse IPv4 à une adresse MAC sur un réseau local",
      "b) Associer un nom de domaine à une adresse IP",
      "c) Attribuer automatiquement une adresse IP",
      "d) Transférer des fichiers",
    ],
    correct: 0,
  },
  {
    question: "40) DNS permet principalement de :",
    answers: [
      "a) Résoudre des noms de domaine en adresses IP",
      "b) Attribuer des adresses MAC",
      "c) Router les paquets IP",
      "d) Chiffrer les disques",
    ],
    correct: 0,
  },
  {
    question: "41) DHCP permet principalement :",
    answers: [
      "a) L'attribution automatique de paramètres réseau",
      "b) La résolution des noms de domaine",
      "c) Le transfert de fichiers",
      "d) Le routage dynamique uniquement",
    ],
    correct: 0,
  },
  {
    question: "42) Un switch Ethernet fonctionne principalement au niveau :",
    answers: [
      "a) Couche 1 uniquement",
      "b) Couche 2",
      "c) Couche 3 uniquement",
      "d) Couche 7",
    ],
    correct: 1,
  },
  {
    question: "43) Un routeur fonctionne principalement au niveau :",
    answers: ["a) Couche 1", "b) Couche 2", "c) Couche 3", "d) Couche 7"],
    correct: 2,
  },
  {
    question: "44) Le rôle principal d'un routeur est de :",
    answers: [
      "a) Acheminer les paquets entre différents réseaux",
      "b) Convertir les noms DNS",
      "c) Imprimer les documents",
      "d) Attribuer les adresses MAC",
    ],
    correct: 0,
  },
  {
    question:
      "45) Un hub Ethernet classique fonctionne principalement au niveau :",
    answers: [
      "a) Couche physique",
      "b) Couche liaison",
      "c) Couche réseau",
      "d) Couche transport",
    ],
    correct: 0,
  },
  {
    question: "46) Contrairement à un hub, un switch :",
    answers: [
      "a) Utilise généralement les adresses MAC pour transférer les trames",
      "b) Ne possède aucune mémoire",
      "c) Fonctionne uniquement avec DNS",
      "d) Ne peut connecter que deux appareils",
    ],
    correct: 0,
  },
  {
    question: "47) Ethernet est principalement associé à :",
    answers: [
      "a) IEEE 802.3",
      "b) IEEE 802.11",
      "c) IEEE 802.15",
      "d) IEEE 802.16",
    ],
    correct: 0,
  },
  {
    question: "48) Wi-Fi est principalement associé à :",
    answers: [
      "a) IEEE 802.3",
      "b) IEEE 802.11",
      "c) IEEE 802.1Q",
      "d) IEEE 802.1X uniquement",
    ],
    correct: 1,
  },
  {
    question: "49) Le protocole ICMP est notamment utilisé par :",
    answers: ["a) ping", "b) FTP", "c) SMTP", "d) DHCP uniquement"],
    correct: 0,
  },
  {
    question: "50) La commande ping permet principalement de :",
    answers: [
      "a) Tester l'accessibilité d'une destination IP et mesurer le temps de réponse",
      "b) Modifier l'adresse MAC",
      "c) Créer un VLAN",
      "d) Configurer un serveur DNS",
    ],
    correct: 0,
  },
  {
    question: "51) Le modèle TCP/IP comporte traditionnellement :",
    answers: ["a) 2 couches", "b) 4 couches", "c) 7 couches", "d) 9 couches"],
    correct: 1,
  },
  {
    question:
      "52) Dans le modèle TCP/IP à 4 couches, la couche Internet correspond approximativement à quelle couche OSI ?",
    answers: ["a) Couche 1", "b) Couche 2", "c) Couche 3", "d) Couche 7"],
    correct: 2,
  },
  {
    question:
      "53) Dans le modèle TCP/IP, TCP et UDP appartiennent à la couche :",
    answers: [
      "a) Accès réseau",
      "b) Internet",
      "c) Transport",
      "d) Application",
    ],
    correct: 2,
  },
  {
    question: "54) IP est principalement un protocole de :",
    answers: [
      "a) Couche transport",
      "b) Couche Internet/réseau",
      "c) Couche session",
      "d) Couche présentation",
    ],
    correct: 1,
  },
  {
    question: "55) HTTP appartient principalement à la couche :",
    answers: ["a) Application", "b) Transport", "c) Internet", "d) Liaison"],
    correct: 0,
  },
  {
    question: "56) Le protocole HTTPS utilise normalement :",
    answers: [
      "a) TCP avec chiffrement via TLS",
      "b) UDP uniquement sans chiffrement",
      "c) ICMP",
      "d) ARP",
    ],
    correct: 0,
  },
  {
    question: "57) Le port TCP généralement associé à HTTP est :",
    answers: ["a) 21", "b) 22", "c) 80", "d) 443"],
    correct: 2,
  },
  {
    question: "58) Le port généralement associé à HTTPS est :",
    answers: ["a) 25", "b) 53", "c) 110", "d) 443"],
    correct: 3,
  },
  {
    question: "59) SSH utilise généralement le port :",
    answers: ["a) 20", "b) 21", "c) 22", "d) 23"],
    correct: 2,
  },
  {
    question: "60) FTP utilise traditionnellement le port de contrôle :",
    answers: ["a) 20", "b) 21", "c) 22", "d) 25"],
    correct: 1,
  },
  {
    question: "61) Le protocole SMTP est principalement utilisé pour :",
    answers: [
      "a) Envoyer des e-mails",
      "b) Résoudre des noms",
      "c) Attribuer des adresses IP",
      "d) Transférer des paquets ICMP",
    ],
    correct: 0,
  },
  {
    question: "62) Le port TCP traditionnellement associé à SMTP est :",
    answers: ["a) 25", "b) 53", "c) 80", "d) 110"],
    correct: 0,
  },
  {
    question: "63) DNS utilise principalement le port :",
    answers: ["a) 21", "b) 23", "c) 53", "d) 161"],
    correct: 2,
  },
  {
    question: "64) DHCP utilise principalement :",
    answers: ["a) TCP uniquement", "b) UDP", "c) ICMP", "d) ARP uniquement"],
    correct: 1,
  },
  {
    question: "65) Le port UDP du serveur DHCP est généralement :",
    answers: ["a) 53", "b) 67", "c) 68", "d) 69"],
    correct: 1,
  },
  {
    question: "66) Le client DHCP utilise généralement le port UDP :",
    answers: ["a) 53", "b) 67", "c) 68", "d) 80"],
    correct: 2,
  },
  {
    question: "67) Le protocole TFTP utilise généralement le port :",
    answers: ["a) UDP 69", "b) TCP 69", "c) TCP 161", "d) UDP 443"],
    correct: 0,
  },
  {
    question: "68) Telnet utilise traditionnellement le port :",
    answers: ["a) 21", "b) 22", "c) 23", "d) 25"],
    correct: 2,
  },
  {
    question:
      "69) Telnet est considéré comme moins sécurisé que SSH principalement parce que :",
    answers: [
      "a) Il ne chiffre pas normalement les communications",
      "b) Il utilise uniquement IPv6",
      "c) Il ne fonctionne pas sur TCP",
      "d) Il utilise exclusivement UDP",
    ],
    correct: 0,
  },
  {
    question: "70) Le protocole SNMP est principalement utilisé pour :",
    answers: [
      "a) La supervision et la gestion des équipements réseau",
      "b) Le transfert de pages Web",
      "c) Le transfert de fichiers uniquement",
      "d) La résolution des adresses MAC",
    ],
    correct: 0,
  },
  {
    question: "71) Une adresse IPv4 est représentée généralement par :",
    answers: [
      "a) 4 octets en notation décimale pointée",
      "b) 8 octets en notation hexadécimale",
      "c) 16 octets",
      "d) 2 octets",
    ],
    correct: 0,
  },
  {
    question:
      "72) Dans l'adresse IPv4 192.168.10.25/24, l'adresse réseau est :",
    answers: [
      "a) 192.168.10.0",
      "b) 192.168.10.1",
      "c) 192.168.10.25",
      "d) 192.168.10.255",
    ],
    correct: 0,
  },
  {
    question: "73) Dans 192.168.10.25/24, l'adresse de broadcast est :",
    answers: [
      "a) 192.168.10.0",
      "b) 192.168.10.1",
      "c) 192.168.10.254",
      "d) 192.168.10.255",
    ],
    correct: 3,
  },
  {
    question:
      "74) Dans le réseau 192.168.10.0/24, quelle adresse peut être attribuée à un hôte ?",
    answers: [
      "a) 192.168.10.0",
      "b) 192.168.10.1",
      "c) 192.168.10.255",
      "d) 192.168.10.256",
    ],
    correct: 1,
  },
  {
    question: "75) Le préfixe /30 contient combien d'adresses IPv4 au total ?",
    answers: ["a) 2", "b) 4", "c) 8", "d) 16"],
    correct: 1,
  },
  {
    question:
      "76) Dans un sous-réseau IPv4 /30 classique, combien d'adresses sont généralement utilisables par les hôtes ?",
    answers: ["a) 1", "b) 2", "c) 3", "d) 4"],
    correct: 1,
  },
  {
    question: "77) Le préfixe /26 fournit combien d'adresses IPv4 au total ?",
    answers: ["a) 32", "b) 64", "c) 128", "d) 256"],
    correct: 1,
  },
  {
    question:
      "78) Un réseau /26 classique offre généralement combien d'adresses hôtes utilisables ?",
    answers: ["a) 62", "b) 64", "c) 126", "d) 60"],
    correct: 0,
  },
  {
    question: "79) Le masque correspondant à /26 est :",
    answers: [
      "a) 255.255.255.0",
      "b) 255.255.255.128",
      "c) 255.255.255.192",
      "d) 255.255.255.224",
    ],
    correct: 2,
  },
  {
    question: "80) Le masque correspondant à /27 est :",
    answers: [
      "a) 255.255.255.192",
      "b) 255.255.255.224",
      "c) 255.255.255.240",
      "d) 255.255.255.128",
    ],
    correct: 1,
  },
  {
    question: "81) Un réseau /28 contient combien d'adresses IPv4 au total ?",
    answers: ["a) 8", "b) 16", "c) 32", "d) 64"],
    correct: 1,
  },
  {
    question:
      "82) Un réseau /28 classique permet généralement combien d'adresses hôtes utilisables ?",
    answers: ["a) 14", "b) 16", "c) 30", "d) 12"],
    correct: 0,
  },
  {
    question: "83) Le masque 255.255.255.224 correspond à :",
    answers: ["a) /25", "b) /26", "c) /27", "d) /28"],
    correct: 2,
  },
  {
    question: "84) Le masque 255.255.255.240 correspond à :",
    answers: ["a) /27", "b) /28", "c) /29", "d) /30"],
    correct: 1,
  },
  {
    question: "85) Le masque 255.255.255.248 correspond à :",
    answers: ["a) /28", "b) /29", "c) /30", "d) /31"],
    correct: 1,
  },
  {
    question: "86) Le masque 255.255.255.252 correspond à :",
    answers: ["a) /28", "b) /29", "c) /30", "d) /32"],
    correct: 2,
  },
  {
    question: "87) Quelle adresse appartient au réseau 192.168.1.64/26 ?",
    answers: [
      "a) 192.168.1.63",
      "b) 192.168.1.70",
      "c) 192.168.1.130",
      "d) 192.168.1.200",
    ],
    correct: 1,
  },
  {
    question:
      "88) Pour le réseau 192.168.1.64/26, l'adresse de broadcast est :",
    answers: [
      "a) 192.168.1.63",
      "b) 192.168.1.64",
      "c) 192.168.1.127",
      "d) 192.168.1.128",
    ],
    correct: 2,
  },
  {
    question:
      "89) Pour le réseau 192.168.1.64/26, la première adresse hôte utilisable est :",
    answers: [
      "a) 192.168.1.64",
      "b) 192.168.1.65",
      "c) 192.168.1.66",
      "d) 192.168.1.127",
    ],
    correct: 1,
  },
  {
    question:
      "90) Pour le réseau 192.168.1.64/26, la dernière adresse hôte utilisable est :",
    answers: [
      "a) 192.168.1.126",
      "b) 192.168.1.127",
      "c) 192.168.1.128",
      "d) 192.168.1.125",
    ],
    correct: 0,
  },
  {
    question:
      "91) Une adresse IPv4 APIPA est généralement comprise dans la plage :",
    answers: [
      "a) 10.0.0.0/8",
      "b) 127.0.0.0/8",
      "c) 169.254.0.0/16",
      "d) 192.168.0.0/16",
    ],
    correct: 2,
  },
  {
    question: "92) Une adresse IPv4 de loopback appartient à la plage :",
    answers: [
      "a) 127.0.0.0/8",
      "b) 169.254.0.0/16",
      "c) 224.0.0.0/4",
      "d) 192.168.0.0/16",
    ],
    correct: 0,
  },
  {
    question: "93) L'adresse IPv4 127.0.0.1 désigne généralement :",
    answers: [
      "a) Le routeur par défaut",
      "b) L'interface loopback de la machine locale",
      "c) Le serveur DNS",
      "d) Le broadcast local",
    ],
    correct: 1,
  },
  {
    question: "94) L'adresse 0.0.0.0 peut notamment représenter :",
    answers: [
      "a) Une adresse non spécifiée",
      "b) Le serveur DNS public",
      "c) Une adresse MAC",
      "d) Une adresse IPv6",
    ],
    correct: 0,
  },
  {
    question: "95) Une adresse IPv4 multicast appartient à la plage :",
    answers: [
      "a) 10.0.0.0/8",
      "b) 127.0.0.0/8",
      "c) 169.254.0.0/16",
      "d) 224.0.0.0/4",
    ],
    correct: 3,
  },
  {
    question: "96) ARP est utilisé dans un réseau IPv4 local pour connaître :",
    answers: [
      "a) L'adresse MAC correspondant à une adresse IPv4",
      "b) Le nom DNS correspondant à une adresse IP",
      "c) Le numéro de port TCP",
      "d) Le masque DNS",
    ],
    correct: 0,
  },
  {
    question: "97) Une requête ARP est généralement envoyée sous forme de :",
    answers: [
      "a) Broadcast Ethernet",
      "b) Unicast vers Internet",
      "c) Multicast IPv6 uniquement",
      "d) Paquet TCP",
    ],
    correct: 0,
  },
  {
    question: "98) La table MAC d'un switch contient principalement :",
    answers: [
      "a) Des associations entre adresses MAC et ports du switch",
      "b) Des noms DNS et ports TCP",
      "c) Des mots de passe utilisateurs",
      "d) Des routes Internet uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "99) Lorsqu'un switch reçoit une trame dont l'adresse MAC de destination est inconnue, il peut :",
    answers: [
      "a) La diffuser sur les ports appropriés du même VLAN sauf le port d'entrée",
      "b) La supprimer systématiquement",
      "c) La convertir en paquet IP",
      "d) L'envoyer uniquement au routeur",
    ],
    correct: 0,
  },
  {
    question:
      "100) Un broadcast Ethernet est généralement représenté par l'adresse MAC :",
    answers: [
      "a) 00:00:00:00:00:00",
      "b) FF:FF:FF:FF:FF:FF",
      "c) 11:11:11:11:11:11",
      "d) 127:127:127:127:127:127",
    ],
    correct: 1,
  },
  {
    question: "101) Le protocole IPv4 utilise une adresse de :",
    answers: ["a) 16 bits", "b) 32 bits", "c) 64 bits", "d) 128 bits"],
    correct: 1,
  },
  {
    question:
      "102) Combien de bits sont utilisés pour identifier la partie réseau dans une adresse IPv4 /24 ?",
    answers: ["a) 8 bits", "b) 16 bits", "c) 24 bits", "d) 32 bits"],
    correct: 2,
  },
  {
    question:
      "103) Dans une adresse IPv4 /24, combien de bits restent pour la partie hôte ?",
    answers: ["a) 4", "b) 8", "c) 16", "d) 24"],
    correct: 1,
  },
  {
    question: "104) Combien d'adresses contient un réseau IPv4 /25 ?",
    answers: ["a) 64", "b) 128", "c) 256", "d) 512"],
    correct: 1,
  },
  {
    question:
      "105) Un réseau /25 classique permet généralement combien d'hôtes utilisables ?",
    answers: ["a) 126", "b) 128", "c) 124", "d) 254"],
    correct: 0,
  },
  {
    question: "106) Combien d'adresses contient un réseau IPv4 /23 ?",
    answers: ["a) 256", "b) 512", "c) 1024", "d) 128"],
    correct: 1,
  },
  {
    question:
      "107) Un réseau /23 classique permet généralement combien d'hôtes utilisables ?",
    answers: ["a) 254", "b) 510", "c) 512", "d) 1022"],
    correct: 1,
  },
  {
    question: "108) Le masque 255.255.254.0 correspond à :",
    answers: ["a) /22", "b) /23", "c) /24", "d) /25"],
    correct: 1,
  },
  {
    question: "109) Le masque 255.255.252.0 correspond à :",
    answers: ["a) /20", "b) /21", "c) /22", "d) /23"],
    correct: 2,
  },
  {
    question: "110) Le masque 255.255.248.0 correspond à :",
    answers: ["a) /21", "b) /22", "c) /23", "d) /24"],
    correct: 0,
  },
  {
    question: "111) Le préfixe /16 correspond au masque :",
    answers: [
      "a) 255.0.0.0",
      "b) 255.255.0.0",
      "c) 255.255.255.0",
      "d) 255.255.255.128",
    ],
    correct: 1,
  },
  {
    question: "112) Le préfixe /20 correspond au masque :",
    answers: [
      "a) 255.255.0.0",
      "b) 255.255.240.0",
      "c) 255.255.248.0",
      "d) 255.255.255.0",
    ],
    correct: 1,
  },
  {
    question:
      "113) Combien de sous-réseaux /26 peut-on obtenir à partir d'un réseau /24 ?",
    answers: ["a) 2", "b) 4", "c) 8", "d) 16"],
    correct: 1,
  },
  {
    question:
      "114) Combien de sous-réseaux /27 peut-on obtenir à partir d'un /24 ?",
    answers: ["a) 2", "b) 4", "c) 8", "d) 16"],
    correct: 2,
  },
  {
    question:
      "115) Combien de sous-réseaux /28 peut-on obtenir à partir d'un /24 ?",
    answers: ["a) 4", "b) 8", "c) 16", "d) 32"],
    correct: 2,
  },
  {
    question: "116) Un réseau /29 contient au total :",
    answers: [
      "a) 4 adresses",
      "b) 8 adresses",
      "c) 16 adresses",
      "d) 32 adresses",
    ],
    correct: 1,
  },
  {
    question: "117) Un réseau /29 classique fournit généralement :",
    answers: [
      "a) 6 adresses hôtes utilisables",
      "b) 8 adresses hôtes utilisables",
      "c) 14 adresses hôtes utilisables",
      "d) 4 adresses hôtes utilisables",
    ],
    correct: 0,
  },
  {
    question: "118) Le préfixe /31 est particulièrement utilisé pour :",
    answers: [
      "a) Certains liens point-à-point",
      "b) Les réseaux de 254 hôtes",
      "c) Les réseaux Wi-Fi domestiques uniquement",
      "d) Les adresses multicast",
    ],
    correct: 0,
  },
  {
    question: "119) Le préfixe /32 représente :",
    answers: [
      "a) Une seule adresse IPv4",
      "b) 32 adresses IPv4",
      "c) 64 adresses IPv4",
      "d) 256 adresses IPv4",
    ],
    correct: 0,
  },
  {
    question: "120) VLSM signifie :",
    answers: [
      "a) Variable Length Subnet Mask",
      "b) Virtual Local Switching Method",
      "c) Variable Local Security Mode",
      "d) Virtual Link Subnet Management",
    ],
    correct: 0,
  },
  {
    question: "121) L'intérêt principal du VLSM est de :",
    answers: [
      "a) Utiliser des masques de tailles différentes selon les besoins des sous-réseaux",
      "b) Supprimer les adresses IP",
      "c) Remplacer les routeurs par des switches",
      "d) Chiffrer les paquets",
    ],
    correct: 0,
  },
  {
    question: "122) CIDR signifie :",
    answers: [
      "a) Classless Inter-Domain Routing",
      "b) Central Internet Data Routing",
      "c) Class Internet Domain Resolution",
      "d) Common IP Data Register",
    ],
    correct: 0,
  },
  {
    question: "123) L'objectif du CIDR est notamment de :",
    answers: [
      "a) Permettre un adressage IP plus flexible et l'agrégation de routes",
      "b) Remplacer Ethernet",
      "c) Supprimer IPv4",
      "d) Attribuer les adresses MAC",
    ],
    correct: 0,
  },
  {
    question:
      "124) Quelle notation représente correctement un réseau IPv4 en CIDR ?",
    answers: [
      "a) 192.168.1.0/24",
      "b) 192.168.1.0:24",
      "c) 192.168.1.0-24",
      "d) 192.168.1.0#24",
    ],
    correct: 0,
  },
  {
    question: "125) L'adresse IPv6 utilise principalement :",
    answers: [
      "a) La notation décimale pointée",
      "b) La notation hexadécimale",
      "c) La notation binaire uniquement",
      "d) La notation octale",
    ],
    correct: 1,
  },
  {
    question: "126) Une adresse IPv6 complète contient :",
    answers: ["a) 32 bits", "b) 64 bits", "c) 128 bits", "d) 256 bits"],
    correct: 2,
  },
  {
    question: "127) Dans IPv6, :: permet généralement :",
    answers: [
      "a) De compresser une suite de groupes de zéros",
      "b) De représenter une adresse MAC",
      "c) De séparer les ports TCP",
      "d) De représenter un masque IPv4",
    ],
    correct: 0,
  },
  {
    question: "128) Laquelle est une adresse IPv6 loopback ?",
    answers: ["a) ::1", "b) ::0", "c) 127.0.0.1", "d) FF::1"],
    correct: 0,
  },
  {
    question: "129) Une adresse IPv6 link-local commence généralement par :",
    answers: ["a) 10::/8", "b) FE80::/10", "c) FF00::/8", "d) 2000::/3"],
    correct: 1,
  },
  {
    question: "130) Les adresses IPv6 multicast commencent généralement par :",
    answers: ["a) FE80::/10", "b) FF00::/8", "c) 2001::/16", "d) FC00::/7"],
    correct: 1,
  },
  {
    question:
      "131) Les adresses IPv6 global unicast sont généralement situées dans :",
    answers: ["a) 2000::/3", "b) FF00::/8", "c) FE80::/10", "d) ::1/128"],
    correct: 0,
  },
  {
    question: "132) En IPv6, quel protocole remplace principalement ARP ?",
    answers: ["a) DHCPv6", "b) ICMPv6 Neighbor Discovery", "c) FTP", "d) SNMP"],
    correct: 1,
  },
  {
    question: "133) IPv6 utilise-t-il le broadcast comme IPv4 ?",
    answers: [
      "a) Oui, systématiquement",
      "b) Non, IPv6 utilise notamment le multicast",
      "c) Oui, uniquement avec TCP",
      "d) Oui, uniquement avec UDP",
    ],
    correct: 1,
  },
  {
    question: "134) Un VLAN permet principalement de :",
    answers: [
      "a) Segmenter logiquement un réseau de niveau 2",
      "b) Augmenter la longueur d'un câble",
      "c) Remplacer une adresse IP",
      "d) Chiffrer automatiquement les paquets",
    ],
    correct: 0,
  },
  {
    question: "135) VLAN signifie :",
    answers: [
      "a) Virtual Local Area Network",
      "b) Variable Local Access Node",
      "c) Virtual Link Access Network",
      "d) Verified Local Area Node",
    ],
    correct: 0,
  },
  {
    question: "136) Deux machines placées dans des VLAN différents :",
    answers: [
      "a) Sont automatiquement dans le même domaine de broadcast",
      "b) Sont dans des domaines de broadcast différents",
      "c) Utilisent obligatoirement la même adresse IP",
      "d) Ne peuvent jamais communiquer",
    ],
    correct: 1,
  },
  {
    question: "137) Le protocole IEEE 802.1Q est associé notamment à :",
    answers: ["a) Le marquage VLAN", "b) Wi-Fi", "c) TCP", "d) DNS"],
    correct: 0,
  },
  {
    question: "138) Un port trunk sur un switch sert généralement à :",
    answers: [
      "a) Transporter plusieurs VLAN",
      "b) Transporter uniquement un VLAN",
      "c) Connecter uniquement une imprimante",
      "d) Remplacer un routeur",
    ],
    correct: 0,
  },
  {
    question: "139) Un port access est généralement associé à :",
    answers: [
      "a) Un VLAN particulier",
      "b) Tous les VLAN simultanément",
      "c) Aucun VLAN",
      "d) Uniquement IPv6",
    ],
    correct: 0,
  },
  {
    question: "140) Le routage entre VLAN différents est appelé :",
    answers: [
      "a) Inter-VLAN routing",
      "b) Intra-MAC switching",
      "c) VLAN bridging uniquement",
      "d) Broadcast routing",
    ],
    correct: 0,
  },
  {
    question:
      "141) Pour permettre la communication entre deux VLAN différents, il faut généralement :",
    answers: [
      "a) Un équipement ou une fonction de couche 3",
      "b) Un simple câble droit supplémentaire",
      "c) Un hub uniquement",
      "d) Une adresse MAC supplémentaire",
    ],
    correct: 0,
  },
  {
    question: "142) Un domaine de broadcast est :",
    answers: [
      "a) Une zone dans laquelle un broadcast de couche 2 peut être diffusé",
      "b) Une zone réservée uniquement aux serveurs DNS",
      "c) Une zone définie par les ports TCP",
      "d) Une zone exclusivement Internet",
    ],
    correct: 0,
  },
  {
    question: "143) Un routeur permet généralement de séparer :",
    answers: [
      "a) Les domaines de broadcast",
      "b) Les caractères ASCII",
      "c) Les ports d'un switch uniquement",
      "d) Les adresses MAC d'une même interface",
    ],
    correct: 0,
  },
  {
    question: "144) Une trame Ethernet contient notamment :",
    answers: [
      "a) Des adresses MAC source et destination",
      "b) Uniquement des adresses IP",
      "c) Uniquement des numéros de port",
      "d) Un nom DNS obligatoire",
    ],
    correct: 0,
  },
  {
    question: "145) Dans une trame Ethernet, l'adresse MAC source indique :",
    answers: [
      "a) L'adresse de l'émetteur de la trame",
      "b) L'adresse IP du routeur",
      "c) Le port TCP de destination",
      "d) Le masque réseau",
    ],
    correct: 0,
  },
  {
    question: "146) Le FCS dans une trame Ethernet sert notamment à :",
    answers: [
      "a) Détecter certaines erreurs de transmission",
      "b) Attribuer une adresse IP",
      "c) Chiffrer la trame",
      "d) Déterminer le port TCP",
    ],
    correct: 0,
  },
  {
    question: "147) CSMA/CD est historiquement associé à :",
    answers: ["a) Ethernet partagé", "b) IPv6", "c) DNS", "d) TCP"],
    correct: 0,
  },
  {
    question: "148) Dans un réseau Ethernet commuté moderne en full-duplex :",
    answers: [
      "a) Les collisions sont normalement éliminées",
      "b) Les collisions sont obligatoires",
      "c) CSMA/CD doit être utilisé pour chaque trame",
      "d) Le switch devient un hub",
    ],
    correct: 0,
  },
  {
    question: "149) Le mode full-duplex permet :",
    answers: [
      "a) L'émission et la réception simultanées",
      "b) L'émission uniquement",
      "c) La réception uniquement",
      "d) Une seule transmission par seconde",
    ],
    correct: 0,
  },
  {
    question: "150) Le débit Ethernet est généralement exprimé en :",
    answers: [
      "a) Bits par seconde",
      "b) Octets uniquement par minute",
      "c) Adresses MAC par seconde",
      "d) Paquets DNS par seconde",
    ],
    correct: 0,
  },
  {
    question: "151) STP signifie :",
    answers: [
      "a) Spanning Tree Protocol",
      "b) Switching Transfer Protocol",
      "c) Secure Tree Process",
      "d) Standard Trunk Protocol",
    ],
    correct: 0,
  },
  {
    question: "152) Le rôle principal de STP est de :",
    answers: [
      "a) Éviter les boucles de niveau 2",
      "b) Attribuer les adresses IP",
      "c) Résoudre les noms DNS",
      "d) Chiffrer les communications",
    ],
    correct: 0,
  },
  {
    question: "153) Une boucle de niveau 2 peut notamment provoquer :",
    answers: [
      "a) Des tempêtes de broadcast",
      "b) Une amélioration du débit",
      "c) La suppression automatique des VLAN",
      "d) Une conversion IPv4 vers IPv6",
    ],
    correct: 0,
  },
  {
    question: "154) Dans STP, le Root Bridge est :",
    answers: [
      "a) Le switch de référence pour construire l'arbre sans boucle",
      "b) Toujours le routeur Internet",
      "c) Toujours le switch ayant le plus grand numéro de port",
      "d) Le serveur DNS",
    ],
    correct: 0,
  },
  {
    question: "155) Dans STP, le Root Bridge est élu notamment selon :",
    answers: [
      "a) Le Bridge ID",
      "b) L'adresse IP du serveur DNS",
      "c) Le numéro de port TCP",
      "d) Le nom du VLAN",
    ],
    correct: 0,
  },
  {
    question: "156) Dans STP, un Bridge ID comprend notamment :",
    answers: [
      "a) Une priorité et une adresse MAC",
      "b) Une adresse IP et un port TCP",
      "c) Un masque et une passerelle",
      "d) Un nom DNS et une adresse IPv6",
    ],
    correct: 0,
  },
  {
    question:
      "157) Pour être élu Root Bridge, un switch doit généralement avoir :",
    answers: [
      "a) Le plus petit Bridge ID",
      "b) Le plus grand Bridge ID",
      "c) Le plus grand nombre de ports",
      "d) La plus grande adresse IP",
    ],
    correct: 0,
  },
  {
    question: "158) Dans STP, un Root Port est généralement :",
    answers: [
      "a) Le port offrant le meilleur chemin vers le Root Bridge sur un switch non-root",
      "b) Le port connecté au serveur DNS",
      "c) Le port ayant l'adresse MAC la plus élevée",
      "d) Un port toujours désactivé",
    ],
    correct: 0,
  },
  {
    question: "159) Un port bloqué par STP :",
    answers: [
      "a) Ne transfère normalement pas les trames de données",
      "b) Est obligatoirement déconnecté physiquement",
      "c) Ne reçoit jamais de trames",
      "d) Devient automatiquement un port routé",
    ],
    correct: 0,
  },
  {
    question: "160) RSTP signifie :",
    answers: [
      "a) Rapid Spanning Tree Protocol",
      "b) Routing Spanning Transfer Protocol",
      "c) Remote Switching Tree Protocol",
      "d) Rapid Secure Transport Protocol",
    ],
    correct: 0,
  },
  {
    question: "161) RSTP a principalement été conçu pour :",
    answers: [
      "a) Converger plus rapidement que STP classique",
      "b) Remplacer IPv4",
      "c) Remplacer DHCP",
      "d) Attribuer des adresses MAC",
    ],
    correct: 0,
  },
  {
    question: "162) BPDU signifie :",
    answers: [
      "a) Bridge Protocol Data Unit",
      "b) Basic Packet Data Unit",
      "c) Bridge Port Distribution Utility",
      "d) Broadcast Protocol Data User",
    ],
    correct: 0,
  },
  {
    question: "163) Les BPDUs sont principalement utilisées par :",
    answers: ["a) STP/RSTP", "b) DHCP", "c) DNS", "d) FTP"],
    correct: 0,
  },
  {
    question: "164) PortFast est principalement utilisé sur :",
    answers: [
      "a) Les ports d'accès connectés à des terminaux",
      "b) Les liens entre deux routeurs Internet",
      "c) Les serveurs DNS uniquement",
      "d) Les trunks entre switches uniquement",
    ],
    correct: 0,
  },
  {
    question: "165) PortFast est généralement déconseillé sur :",
    answers: [
      "a) Un lien entre deux switches",
      "b) Un port connecté à un PC",
      "c) Un port connecté à une imprimante",
      "d) Un port connecté à un terminal",
    ],
    correct: 0,
  },
  {
    question: "166) BPDU Guard sert notamment à :",
    answers: [
      "a) Protéger un port PortFast contre la réception inattendue de BPDUs",
      "b) Accélérer DNS",
      "c) Attribuer une adresse IP",
      "d) Remplacer STP",
    ],
    correct: 0,
  },
  {
    question: "167) EtherChannel permet principalement de :",
    answers: [
      "a) Regrouper plusieurs liens physiques en un lien logique",
      "b) Transformer un switch en routeur",
      "c) Remplacer une adresse MAC",
      "d) Créer automatiquement un serveur DHCP",
    ],
    correct: 0,
  },
  {
    question: "168) L'un des avantages d'EtherChannel est :",
    answers: [
      "a) Augmenter la bande passante disponible et fournir de la redondance",
      "b) Supprimer tous les VLAN",
      "c) Désactiver STP sur tout le réseau",
      "d) Supprimer les adresses IP",
    ],
    correct: 0,
  },
  {
    question: "169) LACP est un protocole associé à :",
    answers: [
      "a) L'agrégation de liens",
      "b) La résolution DNS",
      "c) L'attribution DHCP",
      "d) La compression IPv6",
    ],
    correct: 0,
  },
  {
    question: "170) LACP est défini par :",
    answers: [
      "a) IEEE 802.1AX",
      "b) IEEE 802.11",
      "c) IEEE 802.3u uniquement",
      "d) RFC 1918",
    ],
    correct: 0,
  },
  {
    question: "171) Un trunk entre deux switches permet généralement :",
    answers: [
      "a) De transporter plusieurs VLAN sur un même lien physique",
      "b) De transporter uniquement le VLAN 1",
      "c) De remplacer le routage",
      "d) De supprimer les tags VLAN",
    ],
    correct: 0,
  },
  {
    question:
      "172) Le protocole de tagging VLAN couramment utilisé sur Ethernet est :",
    answers: ["a) 802.1Q", "b) 802.3", "c) 802.11", "d) 802.15"],
    correct: 0,
  },
  {
    question:
      "173) Un VLAN natif sur un trunk 802.1Q est généralement transmis :",
    answers: [
      "a) Sans tag VLAN sur ce trunk, selon la configuration",
      "b) Toujours avec deux tags",
      "c) Uniquement via UDP",
      "d) Uniquement via IPv6",
    ],
    correct: 0,
  },
  {
    question:
      "174) Une mauvaise configuration du VLAN natif entre deux switches peut provoquer :",
    answers: [
      "a) Des problèmes de communication et des incohérences de VLAN",
      "b) Une augmentation automatique de la bande passante",
      "c) La suppression de STP",
      "d) La création automatique d'un routeur",
    ],
    correct: 0,
  },
  {
    question: "175) Un port access reçoit normalement des trames provenant :",
    answers: [
      "a) D'un terminal appartenant à un VLAN donné",
      "b) De tous les VLAN sans distinction",
      "c) Uniquement d'un routeur BGP",
      "d) Uniquement d'un serveur DNS",
    ],
    correct: 0,
  },
  {
    question:
      "176) Une adresse MAC de destination FF:FF:FF:FF:FF:FF représente :",
    answers: [
      "a) Un broadcast Ethernet",
      "b) Unicast",
      "c) Multicast IPv6 uniquement",
      "d) Une adresse MAC invalide",
    ],
    correct: 0,
  },
  {
    question:
      "177) Un switch apprend généralement une adresse MAC en examinant :",
    answers: [
      "a) L'adresse MAC source des trames reçues",
      "b) L'adresse IP destination uniquement",
      "c) Le port TCP source",
      "d) Le serveur DNS",
    ],
    correct: 0,
  },
  {
    question:
      "178) Si un switch connaît le port associé à la MAC destination, il :",
    answers: [
      "a) Transmet généralement la trame uniquement sur ce port",
      "b) La diffuse sur tous les ports",
      "c) La convertit en paquet UDP",
      "d) La supprime toujours",
    ],
    correct: 0,
  },
  {
    question:
      "179) Si un switch ne connaît pas la MAC destination d'une trame unicast, il peut :",
    answers: [
      "a) Flooder la trame dans le VLAN concerné",
      "b) L'envoyer uniquement au serveur DHCP",
      "c) La transformer en broadcast IP",
      "d) Modifier l'adresse MAC source",
    ],
    correct: 0,
  },
  {
    question:
      "180) Le flooding d'une trame inconnue par un switch reste généralement limité :",
    answers: [
      "a) Au VLAN concerné",
      "b) À Internet entier",
      "c) Au serveur DNS",
      "d) À tous les routeurs du monde",
    ],
    correct: 0,
  },
  {
    question: "181) Une collision domain correspond principalement :",
    answers: [
      "a) À une zone où des collisions peuvent se produire sur un même segment partagé",
      "b) À un domaine DNS",
      "c) À un VLAN uniquement",
      "d) À une table de routage",
    ],
    correct: 0,
  },
  {
    question:
      "182) Dans un réseau commuté moderne, chaque port du switch constitue généralement :",
    answers: [
      "a) Un domaine de collision distinct",
      "b) Un domaine de broadcast mondial",
      "c) Un domaine DNS",
      "d) Un réseau IP différent obligatoirement",
    ],
    correct: 0,
  },
  {
    question:
      "183) Un routeur utilise principalement sa table de routage pour :",
    answers: [
      "a) Déterminer où envoyer les paquets IP",
      "b) Déterminer les adresses MAC des utilisateurs uniquement",
      "c) Attribuer les ports TCP",
      "d) Résoudre les noms DNS",
    ],
    correct: 0,
  },
  {
    question:
      "184) Une route par défaut IPv4 est généralement représentée par :",
    answers: [
      "a) 0.0.0.0/0",
      "b) 255.255.255.255/32",
      "c) 127.0.0.1/32",
      "d) 224.0.0.0/4",
    ],
    correct: 0,
  },
  {
    question: "185) La route par défaut est utilisée lorsque :",
    answers: [
      "a) Aucune route plus spécifique ne correspond à la destination",
      "b) Toutes les routes sont identiques",
      "c) Le paquet est toujours un broadcast",
      "d) Le DNS est indisponible",
    ],
    correct: 0,
  },
  {
    question:
      "186) Le principe du longest prefix match signifie que le routeur choisit :",
    answers: [
      "a) La route correspondant au préfixe le plus spécifique",
      "b) Toujours la route par défaut",
      "c) La route avec le plus petit nombre de sauts uniquement",
      "d) La route avec la plus grande adresse IP",
    ],
    correct: 0,
  },
  {
    question: "187) Une route statique est :",
    answers: [
      "a) Configurée manuellement par l'administrateur",
      "b) Apprise automatiquement par DHCP",
      "c) Créée par DNS",
      "d) Toujours calculée par STP",
    ],
    correct: 0,
  },
  {
    question: "188) Un protocole de routage dynamique permet notamment :",
    answers: [
      "a) Aux routeurs d'échanger des informations de routage",
      "b) Aux PC de changer automatiquement leur adresse MAC",
      "c) De remplacer Ethernet",
      "d) De supprimer les VLAN",
    ],
    correct: 0,
  },
  {
    question: "189) OSPF est un protocole de :",
    answers: [
      "a) Routage dynamique",
      "b) Résolution DNS",
      "c) Transfert de fichiers",
      "d) Chiffrement",
    ],
    correct: 0,
  },
  {
    question: "190) OSPF est basé principalement sur l'algorithme :",
    answers: ["a) SPF de Dijkstra", "b) RSA", "c) AES", "d) CSMA/CD"],
    correct: 0,
  },
  {
    question: "191) RIP utilise principalement comme métrique :",
    answers: [
      "a) Le nombre de sauts",
      "b) La bande passante uniquement",
      "c) Le délai uniquement",
      "d) L'adresse MAC",
    ],
    correct: 0,
  },
  {
    question:
      "192) Dans RIP, le nombre maximal de sauts considéré comme valide est généralement :",
    answers: ["a) 5", "b) 15", "c) 32", "d) 255"],
    correct: 1,
  },
  {
    question: "193) BGP est principalement utilisé pour :",
    answers: [
      "a) Le routage inter-domaines sur Internet",
      "b) L'attribution d'adresses IP privées",
      "c) La commutation Ethernet locale",
      "d) La résolution des noms",
    ],
    correct: 0,
  },
  {
    question: "194) OSPF appartient à la famille des protocoles :",
    answers: [
      "a) Link-state",
      "b) Distance-vector pur",
      "c) Application",
      "d) Transport",
    ],
    correct: 0,
  },
  {
    question: "195) RIP est historiquement classé comme protocole :",
    answers: [
      "a) Distance-vector",
      "b) Link-state",
      "c) Path-vector",
      "d) Application",
    ],
    correct: 0,
  },
  {
    question: "196) BGP est généralement classé comme protocole :",
    answers: [
      "a) Path-vector",
      "b) Link-state",
      "c) Distance-vector classique",
      "d) Transport",
    ],
    correct: 0,
  },
  {
    question: "197) Une interface de routeur possède généralement :",
    answers: [
      "a) Une adresse MAC et peut avoir une adresse IP",
      "b) Uniquement une adresse DNS",
      "c) Uniquement un numéro de port TCP",
      "d) Aucun identifiant",
    ],
    correct: 0,
  },
  {
    question: "198) La passerelle par défaut d'un PC est généralement :",
    answers: [
      "a) L'adresse IP d'une interface de routeur permettant de sortir du réseau local",
      "b) L'adresse MAC du PC",
      "c) L'adresse du serveur DNS uniquement",
      "d) L'adresse de broadcast",
    ],
    correct: 0,
  },
  {
    question:
      "199) Si un PC veut communiquer avec une adresse située sur un autre réseau IP, il envoie généralement la trame Ethernet vers :",
    answers: [
      "a) La MAC de sa passerelle par défaut",
      "b) La MAC du serveur DNS",
      "c) La MAC de l'hôte distant directement",
      "d) FF:FF:FF:FF:FF:FF dans tous les cas",
    ],
    correct: 0,
  },
  {
    question:
      "200) Lorsqu'un paquet IP traverse plusieurs routeurs, l'adresse IP source et destination :",
    answers: [
      "a) Restent normalement les mêmes de bout en bout, sauf mécanismes comme NAT",
      "b) Sont systématiquement remplacées à chaque routeur",
      "c) Sont remplacées par des adresses MAC",
      "d) Deviennent toujours 0.0.0.0",
    ],
    correct: 0,
  },
  {
    question: "201) NAT signifie :",
    answers: [
      "a) Network Address Translation",
      "b) Network Access Transfer",
      "c) Network Application Transport",
      "d) Node Address Table",
    ],
    correct: 0,
  },
  {
    question: "202) Le rôle principal de NAT est de :",
    answers: [
      "a) Traduire certaines adresses IP entre différents espaces d'adressage",
      "b) Attribuer les adresses MAC",
      "c) Remplacer le protocole TCP",
      "d) Créer des VLAN",
    ],
    correct: 0,
  },
  {
    question: "203) PAT permet principalement :",
    answers: [
      "a) À plusieurs adresses privées de partager une adresse publique en utilisant les numéros de ports",
      "b) De remplacer DNS",
      "c) De créer des adresses MAC",
      "d) De supprimer les ports TCP",
    ],
    correct: 0,
  },
  {
    question: "204) PAT est souvent appelé :",
    answers: [
      "a) NAT overload",
      "b) NAT broadcast",
      "c) NAT routing",
      "d) NAT multicast",
    ],
    correct: 0,
  },
  {
    question: "205) Une adresse IP privée est généralement :",
    answers: [
      "a) Non routable directement sur Internet",
      "b) Toujours une adresse publique",
      "c) Une adresse MAC",
      "d) Une adresse DNS",
    ],
    correct: 0,
  },
  {
    question: "206) Quelle plage est réservée aux adresses privées IPv4 ?",
    answers: [
      "a) 10.0.0.0/8",
      "b) 11.0.0.0/8",
      "c) 12.0.0.0/8",
      "d) 13.0.0.0/8",
    ],
    correct: 0,
  },
  {
    question: "207) Quelle plage est privée en IPv4 ?",
    answers: [
      "a) 172.16.0.0/12",
      "b) 172.0.0.0/12",
      "c) 173.16.0.0/12",
      "d) 174.16.0.0/12",
    ],
    correct: 0,
  },
  {
    question: "208) Quelle plage est privée en IPv4 ?",
    answers: [
      "a) 192.168.0.0/16",
      "b) 192.0.0.0/16",
      "c) 193.168.0.0/16",
      "d) 194.168.0.0/16",
    ],
    correct: 0,
  },
  {
    question:
      "209) Un routeur utilisant PAT peut distinguer plusieurs connexions grâce notamment :",
    answers: [
      "a) Aux numéros de ports",
      "b) Aux noms des VLAN uniquement",
      "c) Aux adresses DNS uniquement",
      "d) Aux masques uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "210) L'adresse publique utilisée par NAT permet généralement à un réseau privé :",
    answers: [
      "a) D'accéder à des réseaux externes avec traduction d'adresse",
      "b) De supprimer TCP",
      "c) De supprimer le routage",
      "d) De transformer IPv4 en MAC",
    ],
    correct: 0,
  },
  {
    question: "211) ICMP signifie :",
    answers: [
      "a) Internet Control Message Protocol",
      "b) Internet Communication Management Protocol",
      "c) Internal Control Message Process",
      "d) Internet Connection Management Port",
    ],
    correct: 0,
  },
  {
    question: "212) ICMP est principalement utilisé pour :",
    answers: [
      "a) Les messages de contrôle et de diagnostic IP",
      "b) Le transfert de fichiers",
      "c) L'envoi d'e-mails",
      "d) L'attribution d'adresses IP",
    ],
    correct: 0,
  },
  {
    question: "213) La commande ping utilise principalement :",
    answers: [
      "a) ICMP Echo Request et Echo Reply",
      "b) TCP SYN uniquement",
      "c) UDP 53",
      "d) ARP uniquement",
    ],
    correct: 0,
  },
  {
    question: "214) La commande traceroute/tracert permet principalement de :",
    answers: [
      "a) Identifier les routeurs traversés vers une destination",
      "b) Configurer automatiquement DHCP",
      "c) Créer un VLAN",
      "d) Modifier une adresse MAC",
    ],
    correct: 0,
  },
  {
    question:
      "215) Sur Windows, la commande courante pour tracer le chemin vers une destination est :",
    answers: ["a) traceroute", "b) tracert", "c) tracepath", "d) routepath"],
    correct: 1,
  },
  {
    question:
      "216) Sur de nombreux systèmes Unix/Linux, la commande classique est :",
    answers: ["a) tracert", "b) traceroute", "c) tracewin", "d) routecheck"],
    correct: 1,
  },
  {
    question: "217) La commande ipconfig sous Windows permet notamment de :",
    answers: [
      "a) Afficher ou gérer la configuration IP selon les options utilisées",
      "b) Créer une table SQL",
      "c) Configurer un VLAN sur tous les switches",
      "d) Chiffrer le trafic",
    ],
    correct: 0,
  },
  {
    question:
      "218) Sous Linux, la commande moderne pour afficher les interfaces et adresses IP est notamment :",
    answers: ["a) ip addr", "b) winip", "c) ipconfig /all", "d) netview"],
    correct: 0,
  },
  {
    question:
      "219) La commande ping échoue vers une adresse distante. Cela signifie nécessairement que :",
    answers: [
      "a) La destination est inaccessible",
      "b) Le protocole HTTP est arrêté",
      "c) Le DNS est obligatoirement en panne",
      "d) Le câble est obligatoirement défectueux",
    ],
    correct: 0,
  },
  {
    question:
      "220) Si ping vers 127.0.0.1 fonctionne mais ping vers la passerelle échoue, un problème peut se situer :",
    answers: [
      "a) Au niveau de l'interface ou du réseau local",
      "b) Uniquement sur le serveur DNS distant",
      "c) Uniquement sur Internet",
      "d) Uniquement sur HTTP",
    ],
    correct: 0,
  },
  {
    question: "221) ACL signifie :",
    answers: [
      "a) Access Control List",
      "b) Access Communication Link",
      "c) Address Control Layer",
      "d) Application Control Line",
    ],
    correct: 0,
  },
  {
    question: "222) Une ACL réseau permet principalement de :",
    answers: [
      "a) Filtrer le trafic selon des critères définis",
      "b) Attribuer automatiquement des adresses IP",
      "c) Remplacer DNS",
      "d) Créer des câbles virtuels",
    ],
    correct: 0,
  },
  {
    question: "223) Une ACL peut notamment filtrer selon :",
    answers: [
      "a) Les adresses IP et les protocoles",
      "b) Uniquement le nom de l'utilisateur",
      "c) Uniquement le type de câble",
      "d) La température du switch",
    ],
    correct: 0,
  },
  {
    question: "224) Dans une ACL, l'ordre des règles peut être important car :",
    answers: [
      "a) Les règles peuvent être évaluées séquentiellement",
      "b) Toutes les règles sont toujours ignorées",
      "c) La dernière règle est toujours exécutée en premier",
      "d) Les règles ne peuvent jamais se contredire",
    ],
    correct: 0,
  },
  {
    question: "225) Une règle ACL de type deny sert à :",
    answers: [
      "a) Refuser le trafic correspondant",
      "b) Autoriser automatiquement tout le trafic",
      "c) Créer une route",
      "d) Ajouter un VLAN",
    ],
    correct: 0,
  },
  {
    question: "226) Une règle ACL de type permit sert à :",
    answers: [
      "a) Autoriser le trafic correspondant",
      "b) Supprimer une route",
      "c) Bloquer tout Internet",
      "d) Modifier le DNS",
    ],
    correct: 0,
  },
  {
    question:
      "227) Sur de nombreux équipements Cisco, une ACL possède implicitement à la fin :",
    answers: [
      "a) Un deny any implicite",
      "b) Un permit any implicite",
      "c) Un shutdown implicite",
      "d) Un NAT implicite",
    ],
    correct: 0,
  },
  {
    question: "228) Une ACL trop restrictive peut avoir pour conséquence :",
    answers: [
      "a) Le blocage involontaire de trafic légitime",
      "b) L'augmentation automatique du débit",
      "c) La création automatique d'un VLAN",
      "d) La désactivation du DNS mondial",
    ],
    correct: 0,
  },
  {
    question: "229) DHCP signifie :",
    answers: [
      "a) Dynamic Host Configuration Protocol",
      "b) Dynamic Hypertext Control Protocol",
      "c) Domain Host Communication Protocol",
      "d) Data Host Configuration Process",
    ],
    correct: 0,
  },
  {
    question: "230) DHCP peut fournir automatiquement :",
    answers: [
      "a) Une adresse IP, un masque et une passerelle",
      "b) Une adresse MAC physique",
      "c) Un processeur",
      "d) Un câble réseau",
    ],
    correct: 0,
  },
  {
    question: "231) DHCP peut également fournir :",
    answers: [
      "a) L'adresse d'un ou plusieurs serveurs DNS",
      "b) Une adresse MAC modifiée",
      "c) Une fréquence CPU",
      "d) Un mot de passe Wi-Fi obligatoire",
    ],
    correct: 0,
  },
  {
    question: "232) Le processus DHCP classique est souvent résumé par :",
    answers: ["a) DORA", "b) ARPA", "c) TCPIP", "d) DNSA"],
    correct: 0,
  },
  {
    question: "233) Dans DORA, D signifie :",
    answers: ["a) Discover", "b) Data", "c) Domain", "d) Destination"],
    correct: 0,
  },
  {
    question: "234) Dans DORA, O signifie :",
    answers: ["a) Offer", "b) Open", "c) Output", "d) Option"],
    correct: 0,
  },
  {
    question: "235) Dans DORA, R signifie :",
    answers: ["a) Request", "b) Route", "c) Resolve", "d) Reply"],
    correct: 0,
  },
  {
    question: "236) Dans DORA, A signifie :",
    answers: ["a) Acknowledge", "b) Address", "c) Access", "d) Acceptable"],
    correct: 0,
  },
  {
    question:
      "237) Le serveur DHCP attribue une adresse IP pour une durée appelée :",
    answers: ["a) Bail (lease)", "b) Session DNS", "c) Route", "d) VLAN"],
    correct: 0,
  },
  {
    question:
      "238) Si un client reçoit une adresse 169.254.x.x alors qu'il devrait utiliser DHCP, cela peut indiquer :",
    answers: [
      "a) Un échec d'obtention de configuration DHCP",
      "b) Une connexion DNS parfaite",
      "c) Une adresse publique Internet",
      "d) Une configuration IPv6 uniquement",
    ],
    correct: 0,
  },
  {
    question: "239) Un relais DHCP est nécessaire notamment lorsque :",
    answers: [
      "a) Le serveur DHCP se trouve sur un autre réseau IP",
      "b) Le serveur DHCP est toujours sur le même switch",
      "c) Le réseau n'utilise aucune adresse IP",
      "d) Le protocole DNS est désactivé",
    ],
    correct: 0,
  },
  {
    question: "240) DNS signifie :",
    answers: [
      "a) Domain Name System",
      "b) Data Network Service",
      "c) Domain Network Security",
      "d) Digital Name Server",
    ],
    correct: 0,
  },
  {
    question: "241) Le rôle principal de DNS est :",
    answers: [
      "a) Résoudre les noms de domaine et fournir des informations associées",
      "b) Attribuer les adresses MAC",
      "c) Remplacer les routeurs",
      "d) Chiffrer tous les paquets IP",
    ],
    correct: 0,
  },
  {
    question: "242) Un enregistrement DNS de type A associe généralement :",
    answers: [
      "a) Un nom à une adresse IPv4",
      "b) Un nom à une adresse IPv6",
      "c) Un domaine à un serveur de messagerie",
      "d) Une adresse MAC à un port",
    ],
    correct: 0,
  },
  {
    question: "243) Un enregistrement DNS de type AAAA associe généralement :",
    answers: [
      "a) Un nom à une adresse IPv6",
      "b) Un nom à une adresse IPv4",
      "c) Un domaine à un serveur SMTP",
      "d) Une MAC à une IPv4",
    ],
    correct: 0,
  },
  {
    question: "244) Un enregistrement DNS de type MX indique généralement :",
    answers: [
      "a) Un serveur de messagerie pour un domaine",
      "b) Une adresse MAC",
      "c) Une passerelle par défaut",
      "d) Un serveur DHCP",
    ],
    correct: 0,
  },
  {
    question: "245) Un enregistrement DNS CNAME sert principalement à :",
    answers: [
      "a) Créer un alias vers un autre nom canonique",
      "b) Attribuer une adresse MAC",
      "c) Définir un VLAN",
      "d) Définir une route statique",
    ],
    correct: 0,
  },
  {
    question: "246) Un serveur DNS récursif peut :",
    answers: [
      "a) Rechercher une réponse DNS pour le compte du client",
      "b) Remplacer le switch",
      "c) Modifier les adresses MAC",
      "d) Attribuer des adresses DHCP obligatoirement",
    ],
    correct: 0,
  },
  {
    question: "247) Le cache DNS sert principalement à :",
    answers: [
      "a) Conserver temporairement des réponses DNS afin de réduire certaines requêtes",
      "b) Stocker les mots de passe Wi-Fi",
      "c) Remplacer les tables de routage",
      "d) Créer des VLAN",
    ],
    correct: 0,
  },
  {
    question: "248) La commande nslookup permet notamment de :",
    answers: [
      "a) Interroger le système DNS",
      "b) Configurer un switch",
      "c) Créer une route",
      "d) Tester un câble physiquement",
    ],
    correct: 0,
  },
  {
    question: "249) La commande dig est couramment utilisée sous Linux pour :",
    answers: [
      "a) Effectuer des requêtes DNS et analyser leurs réponses",
      "b) Configurer les VLAN",
      "c) Modifier les adresses MAC",
      "d) Démarrer DHCP",
    ],
    correct: 0,
  },
  {
    question:
      "250) Si un site est accessible par son adresse IP mais pas par son nom de domaine, le problème peut être lié à :",
    answers: [
      "a) La résolution DNS",
      "b) La carte graphique",
      "c) Le protocole ARP uniquement",
      "d) La résolution MAC uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "251) Le protocole TCP établit généralement une connexion grâce à :",
    answers: [
      "a) Un handshake en trois étapes",
      "b) Un handshake en une seule étape",
      "c) ARP",
      "d) DNS",
    ],
    correct: 0,
  },
  {
    question:
      "252) Le premier segment du three-way handshake TCP contient généralement :",
    answers: ["a) SYN", "b) FIN", "c) RST", "d) PSH uniquement"],
    correct: 0,
  },
  {
    question:
      "253) Le deuxième échange du three-way handshake TCP contient généralement :",
    answers: ["a) SYN + ACK", "b) FIN + ACK", "c) RST + ACK", "d) PSH + FIN"],
    correct: 0,
  },
  {
    question:
      "254) Le troisième échange du three-way handshake TCP contient généralement :",
    answers: ["a) ACK", "b) SYN", "c) FIN", "d) RST"],
    correct: 0,
  },
  {
    question: "255) Le flag TCP SYN sert principalement à :",
    answers: [
      "a) Initier une connexion TCP",
      "b) Fermer immédiatement une connexion",
      "c) Réinitialiser une connexion",
      "d) Accuser réception d'une donnée",
    ],
    correct: 0,
  },
  {
    question: "256) Le flag TCP FIN est principalement utilisé pour :",
    answers: [
      "a) Indiquer la fin normale d'une connexion",
      "b) Initier une connexion",
      "c) Résoudre un nom DNS",
      "d) Demander une adresse IP",
    ],
    correct: 0,
  },
  {
    question: "257) Le flag TCP RST sert notamment à :",
    answers: [
      "a) Réinitialiser ou interrompre une connexion",
      "b) Créer une connexion normale",
      "c) Attribuer une adresse IP",
      "d) Créer un VLAN",
    ],
    correct: 0,
  },
  {
    question: "258) TCP utilise des numéros de séquence principalement pour :",
    answers: [
      "a) Organiser et suivre les données transmises",
      "b) Identifier les adresses MAC",
      "c) Identifier les VLAN",
      "d) Résoudre les noms DNS",
    ],
    correct: 0,
  },
  {
    question: "259) Les ACK TCP servent notamment à :",
    answers: [
      "a) Accuser réception des données",
      "b) Créer une adresse IP",
      "c) Modifier une adresse MAC",
      "d) Définir un DNS",
    ],
    correct: 0,
  },
  {
    question: "260) Le contrôle de flux TCP utilise notamment :",
    answers: [
      "a) Une fenêtre de réception",
      "b) Une adresse MAC multicast",
      "c) Un enregistrement DNS",
      "d) Un VLAN natif",
    ],
    correct: 0,
  },
  {
    question: "261) La retransmission TCP permet principalement :",
    answers: [
      "a) De renvoyer des données considérées comme perdues",
      "b) De créer une nouvelle adresse MAC",
      "c) De changer de VLAN",
      "d) De remplacer DNS",
    ],
    correct: 0,
  },
  {
    question: "262) UDP ne fournit normalement pas :",
    answers: [
      "a) Un mécanisme de retransmission intégré comparable à TCP",
      "b) Des numéros de port",
      "c) Un en-tête",
      "d) Une communication entre applications",
    ],
    correct: 0,
  },
  {
    question: "263) Un avantage d'UDP par rapport à TCP est généralement :",
    answers: [
      "a) Un faible overhead et l'absence d'établissement de connexion",
      "b) Une fiabilité supérieure garantie",
      "c) Une retransmission automatique",
      "d) Une connexion obligatoire",
    ],
    correct: 0,
  },
  {
    question: "264) Les numéros de port servent principalement à identifier :",
    answers: [
      "a) Les applications ou services sur un hôte",
      "b) Les câbles réseau",
      "c) Les VLAN uniquement",
      "d) Les adresses MAC",
    ],
    correct: 0,
  },
  {
    question: "265) Les numéros de ports TCP et UDP vont généralement de :",
    answers: ["a) 0 à 255", "b) 0 à 1023", "c) 0 à 65535", "d) 1 à 100000"],
    correct: 2,
  },
  {
    question: "266) Les ports 0 à 1023 sont généralement appelés :",
    answers: [
      "a) Well-known ports",
      "b) Dynamic ports uniquement",
      "c) Private ports",
      "d) VLAN ports",
    ],
    correct: 0,
  },
  {
    question: "267) Le port 80 est généralement associé à :",
    answers: ["a) HTTP", "b) HTTPS", "c) SSH", "d) DNS"],
    correct: 0,
  },
  {
    question: "268) Le port 443 est généralement associé à :",
    answers: ["a) HTTP", "b) HTTPS", "c) FTP", "d) SMTP"],
    correct: 1,
  },
  {
    question: "269) Le port 22 est généralement associé à :",
    answers: ["a) SSH", "b) Telnet", "c) DNS", "d) SMTP"],
    correct: 0,
  },
  {
    question: "270) Le port 23 est généralement associé à :",
    answers: ["a) Telnet", "b) SSH", "c) HTTP", "d) DHCP"],
    correct: 0,
  },
  {
    question: "271) Le port 53 est associé principalement à :",
    answers: ["a) DNS", "b) DHCP", "c) HTTP", "d) FTP"],
    correct: 0,
  },
  {
    question: "272) Le port 25 est traditionnellement associé à :",
    answers: ["a) SMTP", "b) HTTP", "c) SSH", "d) DNS"],
    correct: 0,
  },
  {
    question: "273) Le port 110 est traditionnellement associé à :",
    answers: ["a) POP3", "b) IMAP", "c) SMTP", "d) FTP"],
    correct: 0,
  },
  {
    question: "274) Le port 143 est traditionnellement associé à :",
    answers: ["a) IMAP", "b) POP3", "c) SMTP", "d) DNS"],
    correct: 0,
  },
  {
    question: "275) Le port 993 est généralement associé à :",
    answers: ["a) IMAPS", "b) POP3", "c) HTTP", "d) FTP"],
    correct: 0,
  },
  {
    question: "276) Le port 995 est généralement associé à :",
    answers: ["a) POP3S", "b) IMAPS", "c) HTTPS", "d) SSH"],
    correct: 0,
  },
  {
    question: "277) Le protocole IMAP sert principalement à :",
    answers: [
      "a) Accéder et gérer les messages électroniques sur un serveur",
      "b) Résoudre des noms DNS",
      "c) Attribuer des adresses IP",
      "d) Router des paquets",
    ],
    correct: 0,
  },
  {
    question: "278) Le protocole POP3 sert principalement à :",
    answers: [
      "a) Récupérer des messages électroniques depuis un serveur",
      "b) Configurer les VLAN",
      "c) Résoudre les adresses MAC",
      "d) Router les paquets IP",
    ],
    correct: 0,
  },
  {
    question: "279) FTP signifie :",
    answers: [
      "a) File Transfer Protocol",
      "b) Fast Transfer Process",
      "c) File Transmission Port",
      "d) Forward Transfer Protocol",
    ],
    correct: 0,
  },
  {
    question: "280) SFTP est principalement associé à :",
    answers: [
      "a) Un transfert de fichiers via SSH",
      "b) Un transfert FTP sans sécurité",
      "c) DNS sécurisé",
      "d) DHCP sécurisé",
    ],
    correct: 0,
  },
  {
    question: "281) HTTP est principalement un protocole :",
    answers: [
      "a) De communication Web",
      "b) De routage",
      "c) De résolution MAC",
      "d) De commutation",
    ],
    correct: 0,
  },
  {
    question: "282) HTTPS ajoute principalement à HTTP :",
    answers: [
      "a) La protection cryptographique via TLS",
      "b) Le protocole ARP",
      "c) Le protocole DHCP",
      "d) Le protocole STP",
    ],
    correct: 0,
  },
  {
    question: "283) TLS sert notamment à fournir :",
    answers: [
      "a) Confidentialité et intégrité des communications",
      "b) Une adresse IP automatique",
      "c) Un routage dynamique",
      "d) Un VLAN",
    ],
    correct: 0,
  },
  {
    question: "284) Un certificat TLS permet notamment au client de :",
    answers: [
      "a) Vérifier l'identité du serveur selon la chaîne de confiance",
      "b) Attribuer une adresse MAC",
      "c) Configurer le DHCP",
      "d) Créer une route statique",
    ],
    correct: 0,
  },
  {
    question: "285) Wi-Fi correspond principalement à la famille de normes :",
    answers: [
      "a) IEEE 802.11",
      "b) IEEE 802.3",
      "c) IEEE 802.1Q",
      "d) IEEE 802.15.1",
    ],
    correct: 0,
  },
  {
    question: "286) Un point d'accès Wi-Fi est appelé :",
    answers: [
      "a) Access Point",
      "b) Access Protocol",
      "c) Application Port",
      "d) Address Provider",
    ],
    correct: 0,
  },
  {
    question: "287) SSID signifie généralement :",
    answers: [
      "a) Service Set Identifier",
      "b) Secure Service Internet Domain",
      "c) System Security Identifier",
      "d) Service Switch ID",
    ],
    correct: 0,
  },
  {
    question: "288) Le SSID sert principalement à :",
    answers: [
      "a) Identifier un réseau Wi-Fi",
      "b) Identifier un port TCP",
      "c) Identifier une route IP",
      "d) Identifier un serveur DNS",
    ],
    correct: 0,
  },
  {
    question:
      "289) Parmi les standards suivants, lequel est associé à Wi-Fi 5 ?",
    answers: ["a) 802.11ac", "b) 802.11b", "c) 802.3", "d) 802.1Q"],
    correct: 0,
  },
  {
    question: "290) Wi-Fi 6 correspond principalement à :",
    answers: [
      "a) IEEE 802.11ax",
      "b) IEEE 802.11b",
      "c) IEEE 802.3",
      "d) IEEE 802.1D",
    ],
    correct: 0,
  },
  {
    question: "291) WPA2 utilise généralement :",
    answers: [
      "a) AES avec CCMP dans son mode courant",
      "b) WEP uniquement",
      "c) DES uniquement",
      "d) Aucun chiffrement",
    ],
    correct: 0,
  },
  {
    question: "292) WPA3 a été conçu notamment pour :",
    answers: [
      "a) Améliorer la sécurité des réseaux Wi-Fi",
      "b) Remplacer IPv4",
      "c) Remplacer Ethernet",
      "d) Remplacer DNS",
    ],
    correct: 0,
  },
  {
    question: "293) WEP est aujourd'hui considéré comme :",
    answers: [
      "a) Obsolète et insuffisamment sécurisé",
      "b) Le protocole Wi-Fi le plus sécurisé",
      "c) Obligatoire avec WPA3",
      "d) Un protocole de routage",
    ],
    correct: 0,
  },
  {
    question:
      "294) Une bonne pratique pour sécuriser un réseau Wi-Fi consiste à :",
    answers: [
      "a) Utiliser WPA2/WPA3 avec une authentification appropriée",
      "b) Utiliser WEP systématiquement",
      "c) Désactiver tout chiffrement",
      "d) Utiliser un SSID vide obligatoirement",
    ],
    correct: 0,
  },
  {
    question: "295) Le filtrage MAC sur un point d'accès :",
    answers: [
      "a) Peut limiter les appareils autorisés mais ne constitue pas à lui seul une sécurité forte",
      "b) Chiffre automatiquement tout le trafic",
      "c) Remplace WPA3",
      "d) Remplace un pare-feu",
    ],
    correct: 0,
  },
  {
    question: "296) Un firewall sert principalement à :",
    answers: [
      "a) Contrôler le trafic réseau selon des règles",
      "b) Attribuer les adresses MAC",
      "c) Remplacer les câbles",
      "d) Résoudre les noms DNS uniquement",
    ],
    correct: 0,
  },
  {
    question: "297) Un firewall peut filtrer notamment selon :",
    answers: [
      "a) Les adresses IP, ports et protocoles",
      "b) La couleur du câble",
      "c) La marque du clavier",
      "d) Le nom du processeur uniquement",
    ],
    correct: 0,
  },
  {
    question: "298) Un IDS a principalement pour rôle de :",
    answers: [
      "a) Détecter et signaler des activités potentiellement malveillantes",
      "b) Bloquer obligatoirement tout trafic",
      "c) Attribuer des adresses DHCP",
      "d) Remplacer DNS",
    ],
    correct: 0,
  },
  {
    question: "299) Un IPS se distingue notamment d'un IDS parce qu'il peut :",
    answers: [
      "a) Prévenir ou bloquer automatiquement certaines activités détectées",
      "b) Uniquement afficher les adresses IP",
      "c) Attribuer des adresses MAC",
      "d) Créer des VLAN automatiquement dans tous les cas",
    ],
    correct: 0,
  },
  {
    question: "300) Un VPN permet principalement :",
    answers: [
      "a) D'établir une communication sécurisée à travers un réseau non fiable",
      "b) De remplacer toutes les adresses IP par des adresses MAC",
      "c) De supprimer le routage",
      "d) De remplacer un switch Ethernet",
    ],
    correct: 0,
  },
  {
    question:
      "301) Dans Cisco IOS, quelle commande affiche les interfaces et leurs adresses IP ?",
    answers: [
      "a) show ip interface brief",
      "b) show interfaces mac",
      "c) display ip brief",
      "d) show network address",
    ],
    correct: 0,
  },
  {
    question: "302) La commande Cisco `show running-config` permet de :",
    answers: [
      "a) Afficher la configuration actuellement en mémoire active",
      "b) Afficher uniquement les routes statiques",
      "c) Afficher uniquement les adresses MAC",
      "d) Redémarrer le routeur",
    ],
    correct: 0,
  },
  {
    question: "303) La commande Cisco `show startup-config` affiche :",
    answers: [
      "a) La configuration sauvegardée en NVRAM",
      "b) La configuration temporaire du terminal",
      "c) La table ARP uniquement",
      "d) Les routes apprises par OSPF uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "304) Pour sauvegarder la configuration courante Cisco dans la startup-config, on peut utiliser :",
    answers: [
      "a) copy running-config startup-config",
      "b) save running startup",
      "c) backup config permanent",
      "d) copy startup-config running-config",
    ],
    correct: 0,
  },
  {
    question:
      "305) La commande `show ip route` sur un routeur Cisco permet de :",
    answers: [
      "a) Afficher la table de routage IPv4",
      "b) Afficher les mots de passe",
      "c) Afficher uniquement les VLAN",
      "d) Afficher les adresses MAC",
    ],
    correct: 0,
  },
  {
    question: "306) La commande `show arp` permet notamment d'afficher :",
    answers: [
      "a) Les associations IP/MAC connues par le routeur",
      "b) Les routes OSPF uniquement",
      "c) Les ports TCP ouverts",
      "d) Les VLAN configurés",
    ],
    correct: 0,
  },
  {
    question:
      "307) Sur Cisco IOS, quelle commande affiche la table MAC d'un switch ?",
    answers: [
      "a) show mac address-table",
      "b) show ip mac",
      "c) display mac routing",
      "d) show ethernet table ip",
    ],
    correct: 0,
  },
  {
    question: "308) La commande `show vlan brief` permet principalement de :",
    answers: [
      "a) Afficher les VLAN et les ports qui leur sont associés",
      "b) Afficher la table de routage",
      "c) Afficher les routes OSPF",
      "d) Afficher les connexions TCP",
    ],
    correct: 0,
  },
  {
    question:
      "309) Sur Cisco IOS, la commande `enable` permet généralement de :",
    answers: [
      "a) Passer au mode EXEC privilégié",
      "b) Redémarrer le switch",
      "c) Activer DHCP sur tous les ports",
      "d) Créer automatiquement un VLAN",
    ],
    correct: 0,
  },
  {
    question: "310) La commande `configure terminal` permet de :",
    answers: [
      "a) Entrer dans le mode de configuration globale",
      "b) Afficher la table ARP",
      "c) Tester une connexion",
      "d) Afficher la mémoire RAM",
    ],
    correct: 0,
  },
  {
    question: "311) Dans Cisco IOS, `hostname R1` sert à :",
    answers: [
      "a) Définir le nom de l'équipement",
      "b) Définir son adresse IP",
      "c) Définir son masque",
      "d) Créer une route",
    ],
    correct: 0,
  },
  {
    question:
      "312) La commande `no shutdown` sur une interface Cisco sert généralement à :",
    answers: [
      "a) Activer administrativement l'interface",
      "b) Supprimer l'adresse IP",
      "c) Désactiver le routage",
      "d) Effacer la configuration",
    ],
    correct: 0,
  },
  {
    question:
      "313) Une interface Cisco affichant `administratively down` est généralement :",
    answers: [
      "a) Désactivée administrativement",
      "b) En panne physique obligatoirement",
      "c) Connectée à Internet",
      "d) En mode trunk",
    ],
    correct: 0,
  },
  {
    question:
      "314) Quelle commande permet généralement de configurer une adresse IPv4 sur une interface Cisco ?",
    answers: [
      "a) ip address 192.168.1.1 255.255.255.0",
      "b) address ip 192.168.1.1/24",
      "c) set ipv4 192.168.1.1",
      "d) interface ip 192.168.1.1",
    ],
    correct: 0,
  },
  {
    question:
      "315) Une interface configurée avec une adresse IP mais sans `no shutdown` peut rester :",
    answers: [
      "a) Administratively down",
      "b) Up automatiquement dans tous les cas",
      "c) En mode trunk",
      "d) En mode loopback",
    ],
    correct: 0,
  },
  {
    question: "316) La commande `ping` utilise principalement :",
    answers: [
      "a) ICMP",
      "b) TCP port 80",
      "c) UDP port 53",
      "d) ARP uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "317) Si un PC peut pinguer sa passerelle mais pas une adresse Internet, il faut notamment vérifier :",
    answers: [
      "a) Le routage, NAT et la connectivité vers l'extérieur",
      "b) Uniquement le clavier",
      "c) Uniquement le nom du PC",
      "d) Uniquement l'adresse MAC du moniteur",
    ],
    correct: 0,
  },
  {
    question:
      "318) Si un PC peut accéder à un site par son adresse IP mais pas par son nom, le problème est probablement lié à :",
    answers: ["a) DNS", "b) STP", "c) VLAN natif", "d) ARP uniquement"],
    correct: 0,
  },
  {
    question:
      "319) Si un PC ne peut même pas pinguer sa propre adresse loopback, cela peut indiquer :",
    answers: [
      "a) Un problème local de pile réseau ou de configuration",
      "b) Un problème DNS distant uniquement",
      "c) Un problème de serveur Web uniquement",
      "d) Une panne obligatoire du routeur Internet",
    ],
    correct: 0,
  },
  {
    question:
      "320) La commande `ipconfig /all` sous Windows permet notamment d'afficher :",
    answers: [
      "a) L'adresse IP, le masque, la passerelle et les serveurs DNS",
      "b) Les tables SQL",
      "c) Les processus Windows uniquement",
      "d) Les VLAN de tous les switches",
    ],
    correct: 0,
  },
  {
    question: "321) La commande `ipconfig /release` sert à :",
    answers: [
      "a) Libérer une configuration DHCP IPv4",
      "b) Réinitialiser le routeur",
      "c) Supprimer DNS du serveur",
      "d) Désactiver Ethernet définitivement",
    ],
    correct: 0,
  },
  {
    question: "322) La commande `ipconfig /renew` sert à :",
    answers: [
      "a) Demander ou renouveler une configuration DHCP",
      "b) Modifier l'adresse MAC",
      "c) Redémarrer Windows",
      "d) Créer une route OSPF",
    ],
    correct: 0,
  },
  {
    question: "323) Sous Windows, `arp -a` permet notamment d'afficher :",
    answers: [
      "a) Le cache ARP",
      "b) La table DNS complète",
      "c) Les ports TCP du serveur distant",
      "d) Les VLAN du switch",
    ],
    correct: 0,
  },
  {
    question:
      "324) La commande `route print` sous Windows permet notamment de :",
    answers: [
      "a) Afficher la table de routage IP",
      "b) Afficher la table MAC du switch",
      "c) Afficher les utilisateurs connectés",
      "d) Afficher les requêtes DNS",
    ],
    correct: 0,
  },
  {
    question: "325) La commande `netstat` permet notamment d'afficher :",
    answers: [
      "a) Des connexions réseau et ports selon les options",
      "b) Les VLAN uniquement",
      "c) Les adresses MAC de tous les routeurs Internet",
      "d) Les fichiers du disque",
    ],
    correct: 0,
  },
  {
    question: "326) La commande `nslookup example.com` sert principalement à :",
    answers: [
      "a) Interroger DNS pour le domaine indiqué",
      "b) Tester le câble Ethernet",
      "c) Modifier le serveur DHCP",
      "d) Configurer une adresse IP",
    ],
    correct: 0,
  },
  {
    question:
      "327) Une adresse IP du type 192.168.1.50 avec masque 255.255.255.0 appartient au réseau :",
    answers: [
      "a) 192.168.1.0/24",
      "b) 192.168.0.0/16",
      "c) 192.168.1.50/32 uniquement",
      "d) 192.0.0.0/8",
    ],
    correct: 0,
  },
  {
    question:
      "328) Deux machines 192.168.1.10/24 et 192.168.1.20/24 sont normalement :",
    answers: [
      "a) Dans le même réseau IPv4",
      "b) Dans deux réseaux différents",
      "c) Dans deux VLAN obligatoirement différents",
      "d) Sur deux réseaux Internet différents",
    ],
    correct: 0,
  },
  {
    question:
      "329) Deux machines 192.168.1.10/24 et 192.168.2.10/24 sont normalement :",
    answers: [
      "a) Dans des réseaux IP différents",
      "b) Dans le même réseau IP",
      "c) Sur le même hôte",
      "d) Des adresses MAC",
    ],
    correct: 0,
  },
  {
    question:
      "330) Pour communiquer directement au niveau IP dans un même sous-réseau, deux hôtes doivent généralement avoir :",
    answers: [
      "a) Des adresses appartenant au même sous-réseau",
      "b) Le même numéro de port",
      "c) La même adresse MAC",
      "d) Le même nom DNS",
    ],
    correct: 0,
  },
  {
    question:
      "331) Si deux PC du même VLAN ont des adresses IP de sous-réseaux différents, leur communication peut nécessiter :",
    answers: [
      "a) Un routage de couche 3",
      "b) Uniquement ARP",
      "c) Uniquement STP",
      "d) Aucun équipement de couche 3 dans tous les cas",
    ],
    correct: 0,
  },
  {
    question:
      "332) Une passerelle par défaut incorrecte peut empêcher un PC de :",
    answers: [
      "a) Communiquer correctement avec des réseaux distants",
      "b) Communiquer avec sa propre interface loopback",
      "c) Lire un fichier local",
      "d) Utiliser le clavier",
    ],
    correct: 0,
  },
  {
    question: "333) Un masque de sous-réseau incorrect peut provoquer :",
    answers: [
      "a) Des problèmes pour déterminer si une destination est locale ou distante",
      "b) Une modification automatique de l'adresse MAC",
      "c) Une désactivation de TCP",
      "d) Une suppression de DNS",
    ],
    correct: 0,
  },
  {
    question:
      "334) Quelle commande Linux permet généralement de tester la connectivité vers une adresse IP ?",
    answers: ["a) ping", "b) testip", "c) checknet", "d) networktest"],
    correct: 0,
  },
  {
    question: "335) Sous Linux, `ip route` permet notamment de :",
    answers: [
      "a) Afficher ou gérer les routes IP selon les options",
      "b) Afficher les mots de passe",
      "c) Configurer DNS uniquement",
      "d) Afficher les ports USB",
    ],
    correct: 0,
  },
  {
    question: "336) Sous Linux, `ip link` permet notamment de :",
    answers: [
      "a) Afficher ou gérer les interfaces réseau de niveau liaison",
      "b) Interroger DNS uniquement",
      "c) Afficher les tables SQL",
      "d) Configurer uniquement le routage BGP",
    ],
    correct: 0,
  },
  {
    question: "337) Une interface réseau en état DOWN signifie généralement :",
    answers: [
      "a) Qu'elle n'est pas opérationnelle selon l'état indiqué",
      "b) Qu'elle possède forcément une mauvaise adresse IP",
      "c) Que DNS est en panne",
      "d) Que le routeur distant est obligatoirement arrêté",
    ],
    correct: 0,
  },
  {
    question:
      "338) Pour diagnostiquer méthodiquement un problème réseau, il est généralement pertinent de commencer par :",
    answers: [
      "a) Vérifier la couche physique et la configuration locale",
      "b) Changer immédiatement tous les routeurs",
      "c) Supprimer toutes les routes",
      "d) Désinstaller le système d'exploitation",
    ],
    correct: 0,
  },
  {
    question:
      "339) Si le voyant de lien d'une interface Ethernet est éteint, il faut notamment vérifier :",
    answers: [
      "a) Le câble, le port et l'état de l'interface",
      "b) Le serveur DNS uniquement",
      "c) Le port TCP 80 uniquement",
      "d) Le nom DNS",
    ],
    correct: 0,
  },
  {
    question: "340) Un câble Ethernet défectueux peut provoquer :",
    answers: [
      "a) Une perte de connectivité ou des erreurs de transmission",
      "b) Une modification du nom DNS",
      "c) Une création automatique de VLAN",
      "d) Une augmentation du débit",
    ],
    correct: 0,
  },
  {
    question:
      "341) Une adresse IP en double sur deux machines peut provoquer :",
    answers: [
      "a) Des conflits et des communications réseau instables",
      "b) Une meilleure performance",
      "c) Une augmentation automatique du débit",
      "d) Une création automatique de route",
    ],
    correct: 0,
  },
  {
    question: "342) Le protocole DHCP permet d'éviter notamment :",
    answers: [
      "a) La configuration manuelle répétitive de nombreux paramètres IP",
      "b) Toutes les attaques réseau",
      "c) Toutes les collisions Ethernet",
      "d) Toutes les erreurs DNS",
    ],
    correct: 0,
  },
  {
    question: "343) Une réservation DHCP permet généralement :",
    answers: [
      "a) D'associer une adresse IP déterminée à un client identifié",
      "b) De créer un VLAN",
      "c) De remplacer NAT",
      "d) De désactiver le DNS",
    ],
    correct: 0,
  },
  {
    question: "344) Une attaque DHCP Starvation vise notamment à :",
    answers: [
      "a) Épuiser les adresses disponibles dans un pool DHCP",
      "b) Modifier les câbles réseau",
      "c) Supprimer les VLAN",
      "d) Chiffrer le trafic",
    ],
    correct: 0,
  },
  {
    question: "345) Un faux serveur DHCP peut notamment :",
    answers: [
      "a) Fournir de mauvaises informations réseau aux clients",
      "b) Améliorer automatiquement le routage",
      "c) Remplacer tous les switches",
      "d) Augmenter le signal Wi-Fi",
    ],
    correct: 0,
  },
  {
    question: "346) DHCP Snooping sur un switch peut notamment aider à :",
    answers: [
      "a) Distinguer les ports DHCP de confiance et limiter certains serveurs DHCP non autorisés",
      "b) Résoudre les noms DNS",
      "c) Remplacer le protocole TCP",
      "d) Créer des routes BGP",
    ],
    correct: 0,
  },
  {
    question: "347) ARP Spoofing consiste notamment à :",
    answers: [
      "a) Envoyer de fausses associations IP/MAC pour tromper les hôtes",
      "b) Bloquer uniquement le port HTTP",
      "c) Modifier le protocole DNS uniquement",
      "d) Créer un réseau Wi-Fi",
    ],
    correct: 0,
  },
  {
    question:
      "348) Une mesure pouvant aider à limiter certaines attaques ARP sur des équipements réseau est :",
    answers: [
      "a) Dynamic ARP Inspection",
      "b) FTP",
      "c) POP3",
      "d) NAT uniquement",
    ],
    correct: 0,
  },
  {
    question: "349) Le principe de défense en profondeur consiste à :",
    answers: [
      "a) Utiliser plusieurs mécanismes de sécurité complémentaires",
      "b) Utiliser un seul mot de passe pour tout",
      "c) Désactiver le firewall",
      "d) Autoriser tout le trafic",
    ],
    correct: 0,
  },
  {
    question:
      "350) Pour sécuriser l'administration d'un équipement réseau, il est préférable d'utiliser :",
    answers: [
      "a) SSH plutôt que Telnet",
      "b) Telnet plutôt que SSH",
      "c) FTP plutôt que SSH",
      "d) HTTP non chiffré uniquement",
    ],
    correct: 0,
  },
  {
    question:
      "351) Quel protocole de routage utilise l'algorithme SPF de Dijkstra ?",
    answers: ["a) RIP", "b) OSPF", "c) BGP", "d) FTP"],
    correct: 1,
  },

  {
    question: "352) RIP est principalement basé sur quelle métrique ?",
    answers: [
      "a) La bande passante",
      "b) Le délai",
      "c) Le nombre de sauts",
      "d) Le coût administratif",
    ],
    correct: 2,
  },

  {
    question:
      "353) Quelle est la limite maximale de sauts considérée comme valide par RIP ?",
    answers: ["a) 10", "b) 15", "c) 16", "d) 255"],
    correct: 1,
  },

  {
    question: "354) Dans RIP, une métrique de 16 représente généralement :",
    answers: [
      "a) Une route directement connectée",
      "b) Une route prioritaire",
      "c) Une destination inaccessible",
      "d) Une route par défaut",
    ],
    correct: 2,
  },

  {
    question: "355) OSPF est quel type de protocole de routage ?",
    answers: [
      "a) Distance-vector",
      "b) Link-state",
      "c) Path-vector",
      "d) Transport",
    ],
    correct: 1,
  },

  {
    question:
      "356) Quelle information OSPF utilise principalement pour calculer le meilleur chemin ?",
    answers: [
      "a) Le coût",
      "b) Le numéro de port TCP",
      "c) L'adresse MAC",
      "d) Le TTL uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "357) Dans OSPF, le coût d'une interface est principalement lié à :",
    answers: [
      "a) La bande passante",
      "b) L'adresse IP",
      "c) La taille du paquet",
      "d) La longueur du câble uniquement",
    ],
    correct: 0,
  },

  {
    question: "358) Quel est le rôle principal d'une table de routage ?",
    answers: [
      "a) Stocker les mots de passe des utilisateurs",
      "b) Déterminer où envoyer les paquets IP",
      "c) Traduire les noms DNS",
      "d) Stocker les adresses MAC uniquement",
    ],
    correct: 1,
  },

  {
    question:
      "359) Quelle route est utilisée si aucune route plus spécifique ne correspond à la destination ?",
    answers: [
      "a) La route par défaut",
      "b) La route loopback",
      "c) La route ARP",
      "d) La route broadcast",
    ],
    correct: 0,
  },

  {
    question: "360) Quelle notation représente une route IPv4 par défaut ?",
    answers: [
      "a) 255.255.255.255/32",
      "b) 127.0.0.0/8",
      "c) 0.0.0.0/0",
      "d) 224.0.0.0/4",
    ],
    correct: 2,
  },

  {
    question: "361) Qu'est-ce que le principe du « longest prefix match » ?",
    answers: [
      "a) Choisir la route ayant le plus grand numéro de métrique",
      "b) Choisir la route ayant le préfixe correspondant le plus spécifique",
      "c) Choisir toujours la route par défaut",
      "d) Choisir la route la plus ancienne",
    ],
    correct: 1,
  },

  {
    question:
      "362) Un routeur possède 192.168.0.0/16 et 192.168.10.0/24. Pour un paquet destiné à 192.168.10.25, quelle route est choisie ?",
    answers: [
      "a) 192.168.0.0/16",
      "b) 192.168.10.0/24",
      "c) 0.0.0.0/0",
      "d) Aucune",
    ],
    correct: 1,
  },

  {
    question:
      "363) Quelle commande Cisco IOS permet d'afficher la table de routage IPv4 ?",
    answers: [
      "a) show ip route",
      "b) show ip arp",
      "c) show vlan brief",
      "d) show interfaces",
    ],
    correct: 0,
  },

  {
    question:
      "364) Dans la sortie Cisco de `show ip route`, la lettre C indique généralement :",
    answers: ["a) Connected", "b) Cached", "c) Control", "d) Configured"],
    correct: 0,
  },

  {
    question: "365) Dans `show ip route`, la lettre S indique généralement :",
    answers: ["a) Secure", "b) Static", "c) Switch", "d) Serial"],
    correct: 1,
  },

  {
    question: "366) Dans `show ip route`, la lettre O indique généralement :",
    answers: [
      "a) OSPF",
      "b) OSPF uniquement sur une interface série",
      "c) Open network",
      "d) Optical",
    ],
    correct: 0,
  },

  {
    question:
      "367) Quelle commande Cisco permet de configurer une route statique IPv4 ?",
    answers: [
      "a) ip route",
      "b) route add seulement",
      "c) router static",
      "d) static-route enable",
    ],
    correct: 0,
  },

  {
    question:
      "368) Quelle commande configure une route statique vers 192.168.2.0/24 via 10.0.0.2 ?",
    answers: [
      "a) ip route 192.168.2.0 255.255.255.0 10.0.0.2",
      "b) route 192.168.2.0/24 10.0.0.2",
      "c) ip static 192.168.2.0 10.0.0.2",
      "d) router ip 192.168.2.0 10.0.0.2",
    ],
    correct: 0,
  },

  {
    question:
      "369) Quel est l'avantage principal d'une route statique simple ?",
    answers: [
      "a) Elle s'adapte automatiquement à toutes les pannes",
      "b) Elle ne nécessite pas de protocole de routage dynamique",
      "c) Elle échange automatiquement des routes",
      "d) Elle augmente toujours la bande passante",
    ],
    correct: 1,
  },

  {
    question:
      "370) Quel est l'inconvénient d'un grand nombre de routes statiques ?",
    answers: [
      "a) Elles sont toujours impossibles à supprimer",
      "b) Elles peuvent devenir difficiles à administrer",
      "c) Elles utilisent obligatoirement UDP",
      "d) Elles empêchent le fonctionnement d'ARP",
    ],
    correct: 1,
  },

  {
    question:
      "371) Quelle commande Cisco configure une route par défaut IPv4 ?",
    answers: [
      "a) ip default-route 0.0.0.0",
      "b) ip route 0.0.0.0 0.0.0.0 <next-hop>",
      "c) default ip route",
      "d) route default enable",
    ],
    correct: 1,
  },

  {
    question:
      "372) Dans une route statique, le « next-hop » représente généralement :",
    answers: [
      "a) L'adresse MAC du PC source",
      "b) Le routeur suivant vers lequel envoyer le paquet",
      "c) Le serveur DNS",
      "d) L'adresse broadcast",
    ],
    correct: 1,
  },

  {
    question:
      "373) Quelle est la fonction d'une route flottante (floating static route) ?",
    answers: [
      "a) Remplacer une interface Wi-Fi",
      "b) Servir de chemin de secours avec une distance administrative plus élevée",
      "c) Remplacer ARP",
      "d) Bloquer tous les paquets",
    ],
    correct: 1,
  },

  {
    question:
      "374) Quelle valeur est généralement utilisée par une route statique Cisco comme distance administrative par défaut ?",
    answers: ["a) 0", "b) 1", "c) 90", "d) 110"],
    correct: 1,
  },

  {
    question:
      "375) Quelle distance administrative est généralement associée à OSPF sur Cisco ?",
    answers: ["a) 1", "b) 90", "c) 110", "d) 120"],
    correct: 2,
  },

  {
    question:
      "376) Quelle distance administrative est généralement associée à RIP sur Cisco ?",
    answers: ["a) 1", "b) 90", "c) 110", "d) 120"],
    correct: 3,
  },

  {
    question:
      "377) Si plusieurs protocoles fournissent une route vers le même réseau, le routeur considère notamment :",
    answers: [
      "a) La distance administrative",
      "b) Le nom du câble",
      "c) Le SSID",
      "d) Le masque MAC",
    ],
    correct: 0,
  },

  {
    question:
      "378) Quelle est la différence entre distance administrative et métrique ?",
    answers: [
      "a) Elles sont toujours exactement identiques",
      "b) La distance administrative compare les sources de routage, tandis que la métrique compare les chemins selon le protocole",
      "c) La métrique est uniquement utilisée par ARP",
      "d) La distance administrative est une adresse IP",
    ],
    correct: 1,
  },

  {
    question:
      "379) Dans OSPF, quel identifiant doit être unique dans le domaine OSPF ?",
    answers: [
      "a) Le Router ID",
      "b) Le numéro de VLAN",
      "c) Le port TCP",
      "d) L'adresse broadcast",
    ],
    correct: 0,
  },

  {
    question: "380) Dans OSPF, quel est le rôle d'un voisin (neighbor) ?",
    answers: [
      "a) Un routeur OSPF avec lequel une relation OSPF est établie",
      "b) Un serveur DNS uniquement",
      "c) Un switch sans adresse IP",
      "d) Un câble réseau",
    ],
    correct: 0,
  },

  {
    question: "381) Quel message OSPF est utilisé pour découvrir les voisins ?",
    answers: ["a) Hello", "b) SYN", "c) ARP Request", "d) DHCP Discover"],
    correct: 0,
  },

  {
    question:
      "382) Dans un réseau OSPF multi-accès comme Ethernet, quel rôle peut être élu pour réduire les adjacences ?",
    answers: ["a) DR", "b) DHCP", "c) NAT", "d) DNS"],
    correct: 0,
  },

  {
    question: "383) Que signifie DR dans OSPF ?",
    answers: [
      "a) Default Router",
      "b) Designated Router",
      "c) Dynamic Route",
      "d) Domain Router",
    ],
    correct: 1,
  },

  {
    question: "384) Que signifie BDR dans OSPF ?",
    answers: [
      "a) Backup Designated Router",
      "b) Basic Data Router",
      "c) Broadcast Domain Router",
      "d) Border DHCP Router",
    ],
    correct: 0,
  },

  {
    question: "385) Quel est l'objectif principal des aires OSPF ?",
    answers: [
      "a) Réduire la taille et la complexité de la base de données LSDB",
      "b) Remplacer Ethernet",
      "c) Chiffrer les paquets IP",
      "d) Attribuer des adresses DHCP",
    ],
    correct: 0,
  },

  {
    question: "386) Dans OSPF, quelle aire est l'aire backbone ?",
    answers: ["a) Area 1", "b) Area 10", "c) Area 0", "d) Area 255"],
    correct: 2,
  },

  {
    question: "387) Que signifie LSDB dans OSPF ?",
    answers: [
      "a) Local Switch Database",
      "b) Link-State Database",
      "c) Logical Subnet Database",
      "d) Link Security Database",
    ],
    correct: 1,
  },

  {
    question:
      "388) Quel algorithme OSPF utilise-t-il pour calculer les meilleurs chemins à partir de la LSDB ?",
    answers: ["a) Dijkstra/SPF", "b) RSA", "c) AES", "d) CSMA/CD"],
    correct: 0,
  },

  {
    question:
      "389) Quel protocole est adapté au routage entre différents systèmes autonomes sur Internet ?",
    answers: ["a) BGP", "b) ARP", "c) DHCP", "d) STP"],
    correct: 0,
  },

  {
    question: "390) BGP est généralement décrit comme un protocole de type :",
    answers: [
      "a) Distance-vector pur",
      "b) Link-state",
      "c) Path-vector",
      "d) Transport",
    ],
    correct: 2,
  },

  {
    question: "391) Un ACL standard Cisco filtre principalement selon :",
    answers: [
      "a) L'adresse IP source",
      "b) Le port TCP destination uniquement",
      "c) L'adresse MAC uniquement",
      "d) Le SSID",
    ],
    correct: 0,
  },

  {
    question: "392) Un ACL étendu Cisco peut notamment filtrer selon :",
    answers: [
      "a) Source, destination et protocole/ports",
      "b) Le nom du câble uniquement",
      "c) La température du routeur",
      "d) Le fabricant de la carte réseau uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "393) Dans une ACL Cisco, que se passe-t-il si aucun ACE ne correspond au paquet ?",
    answers: [
      "a) Le paquet est toujours accepté",
      "b) Le paquet est soumis à un implicit deny",
      "c) Le routeur redémarre",
      "d) Le paquet est converti en broadcast",
    ],
    correct: 1,
  },

  {
    question: "394) Dans une ACL Cisco, que signifie le mot-clé `permit` ?",
    answers: [
      "a) Refuser le trafic correspondant",
      "b) Autoriser le trafic correspondant",
      "c) Chiffrer le trafic",
      "d) Traduire l'adresse IP",
    ],
    correct: 1,
  },

  {
    question: "395) Dans une ACL Cisco, que signifie le mot-clé `deny` ?",
    answers: [
      "a) Autoriser le trafic",
      "b) Refuser le trafic correspondant",
      "c) Activer OSPF",
      "d) Activer DHCP",
    ],
    correct: 1,
  },

  {
    question:
      "396) Dans une ACL IPv4 Cisco, que représente généralement un wildcard mask de 0.0.0.0 ?",
    answers: [
      "a) Tous les bits doivent correspondre",
      "b) Aucun bit ne doit correspondre",
      "c) Le paquet est toujours refusé",
      "d) Le réseau est désactivé",
    ],
    correct: 0,
  },

  {
    question:
      "397) Dans une ACL IPv4 Cisco, que représente généralement un wildcard mask de 0.0.0.255 ?",
    answers: [
      "a) Les 24 premiers bits doivent correspondre et les 8 derniers sont ignorés",
      "b) Tous les bits doivent correspondre",
      "c) Aucun bit n'est accepté",
      "d) Il s'agit d'un masque réseau /32",
    ],
    correct: 0,
  },

  {
    question:
      "398) Quel wildcard mask correspond au réseau 192.168.1.0/24 dans une ACL Cisco ?",
    answers: [
      "a) 255.255.255.0",
      "b) 0.0.0.255",
      "c) 0.0.255.255",
      "d) 255.255.0.0",
    ],
    correct: 1,
  },

  {
    question:
      "399) Dans une ACL Cisco étendue, quel numéro de port permet de filtrer le trafic HTTP classique ?",
    answers: ["a) 21", "b) 22", "c) 53", "d) 80"],
    correct: 3,
  },

  {
    question:
      "400) Quel problème peut provoquer une ACL trop restrictive appliquée sur une interface réseau ?",
    answers: [
      "a) Elle peut bloquer du trafic légitime",
      "b) Elle augmente automatiquement la bande passante",
      "c) Elle remplace le protocole DNS",
      "d) Elle désactive automatiquement toutes les interfaces",
    ],
    correct: 0,
  },
  {
    question:
      "401) Combien d'adresses IPv4 totales contient un sous-réseau en /27 ?",
    answers: ["a) 16", "b) 32", "c) 64", "d) 128"],
    correct: 1,
  },

  {
    question:
      "402) Combien d'adresses IPv4 sont généralement utilisables pour les hôtes dans un réseau /27 classique ?",
    answers: ["a) 30", "b) 32", "c) 31", "d) 28"],
    correct: 0,
  },

  {
    question: "403) Quel masque correspond au préfixe /27 ?",
    answers: [
      "a) 255.255.255.0",
      "b) 255.255.255.192",
      "c) 255.255.255.224",
      "d) 255.255.255.240",
    ],
    correct: 2,
  },

  {
    question: "404) Quel masque correspond au préfixe /28 ?",
    answers: [
      "a) 255.255.255.224",
      "b) 255.255.255.240",
      "c) 255.255.255.248",
      "d) 255.255.255.252",
    ],
    correct: 1,
  },

  {
    question: "405) Combien d'adresses totales contient un réseau IPv4 /28 ?",
    answers: ["a) 8", "b) 16", "c) 32", "d) 64"],
    correct: 1,
  },

  {
    question:
      "406) Combien d'hôtes sont généralement utilisables dans un sous-réseau IPv4 /28 classique ?",
    answers: ["a) 14", "b) 16", "c) 15", "d) 12"],
    correct: 0,
  },

  {
    question: "407) Quel masque correspond au préfixe /29 ?",
    answers: [
      "a) 255.255.255.240",
      "b) 255.255.255.248",
      "c) 255.255.255.252",
      "d) 255.255.255.224",
    ],
    correct: 1,
  },

  {
    question: "408) Combien d'adresses totales contient un réseau /29 ?",
    answers: ["a) 4", "b) 8", "c) 16", "d) 32"],
    correct: 1,
  },

  {
    question:
      "409) Combien d'hôtes sont généralement utilisables dans un réseau /29 classique ?",
    answers: ["a) 6", "b) 7", "c) 8", "d) 5"],
    correct: 0,
  },

  {
    question: "410) Quel masque correspond au préfixe /30 ?",
    answers: [
      "a) 255.255.255.248",
      "b) 255.255.255.252",
      "c) 255.255.255.240",
      "d) 255.255.255.254",
    ],
    correct: 1,
  },

  {
    question: "411) Combien d'adresses IPv4 totales contient un réseau /30 ?",
    answers: ["a) 2", "b) 4", "c) 8", "d) 16"],
    correct: 1,
  },

  {
    question:
      "412) Dans un réseau /30 classique, combien d'adresses sont généralement utilisables pour les hôtes ?",
    answers: ["a) 1", "b) 2", "c) 3", "d) 4"],
    correct: 1,
  },

  {
    question: "413) Quelle est l'adresse réseau de 192.168.10.67/26 ?",
    answers: [
      "a) 192.168.10.0",
      "b) 192.168.10.32",
      "c) 192.168.10.64",
      "d) 192.168.10.128",
    ],
    correct: 2,
  },

  {
    question: "414) Quelle est l'adresse de broadcast de 192.168.10.67/26 ?",
    answers: [
      "a) 192.168.10.63",
      "b) 192.168.10.127",
      "c) 192.168.10.255",
      "d) 192.168.10.64",
    ],
    correct: 1,
  },

  {
    question: "415) Dans quel sous-réseau se trouve 192.168.1.130/25 ?",
    answers: [
      "a) 192.168.1.0/25",
      "b) 192.168.1.64/25",
      "c) 192.168.1.128/25",
      "d) 192.168.1.192/25",
    ],
    correct: 2,
  },

  {
    question: "416) Quelle est l'adresse réseau de 10.20.35.200/20 ?",
    answers: [
      "a) 10.20.0.0",
      "b) 10.20.16.0",
      "c) 10.20.32.0",
      "d) 10.20.35.0",
    ],
    correct: 2,
  },

  {
    question:
      "417) Quel préfixe permet de créer 4 sous-réseaux de taille égale à partir d'un réseau /24 ?",
    answers: ["a) /25", "b) /26", "c) /27", "d) /28"],
    correct: 1,
  },

  {
    question:
      "418) Combien de sous-réseaux /28 peut-on obtenir à partir d'un réseau /24 ?",
    answers: ["a) 4", "b) 8", "c) 16", "d) 32"],
    correct: 2,
  },

  {
    question:
      "419) Combien d'hôtes utilisables possède normalement chacun des sous-réseaux /28 ?",
    answers: ["a) 14", "b) 16", "c) 30", "d) 12"],
    correct: 0,
  },

  {
    question:
      "420) Quelle technique permet de créer des sous-réseaux de tailles différentes selon les besoins ?",
    answers: ["a) NAT", "b) VLSM", "c) ARP", "d) STP"],
    correct: 1,
  },

  {
    question: "421) Que signifie VLSM ?",
    answers: [
      "a) Variable Length Subnet Mask",
      "b) Virtual LAN Security Management",
      "c) Variable Link Switching Mode",
      "d) Virtual Layer Subnet Mapping",
    ],
    correct: 0,
  },

  {
    question: "422) Quel est l'avantage principal du VLSM ?",
    answers: [
      "a) Il permet une utilisation plus efficace de l'espace d'adressage",
      "b) Il remplace les routeurs",
      "c) Il supprime les adresses MAC",
      "d) Il chiffre automatiquement les paquets",
    ],
    correct: 0,
  },

  {
    question: "423) Que signifie CIDR ?",
    answers: [
      "a) Classless Inter-Domain Routing",
      "b) Central Internet Dynamic Routing",
      "c) Class Internet Domain Resolution",
      "d) Common IP Data Routing",
    ],
    correct: 0,
  },

  {
    question:
      "424) Quel préfixe représente un réseau IPv4 contenant 256 adresses totales ?",
    answers: ["a) /24", "b) /25", "c) /26", "d) /23"],
    correct: 0,
  },

  {
    question: "425) Quel préfixe IPv4 correspond à 1024 adresses totales ?",
    answers: ["a) /20", "b) /21", "c) /22", "d) /24"],
    correct: 2,
  },

  {
    question: "426) Quelle est la longueur d'une adresse IPv6 ?",
    answers: ["a) 32 bits", "b) 64 bits", "c) 128 bits", "d) 256 bits"],
    correct: 2,
  },

  {
    question:
      "427) Combien de groupes hexadécimaux de 16 bits une adresse IPv6 complète contient-elle ?",
    answers: ["a) 4", "b) 6", "c) 8", "d) 16"],
    correct: 2,
  },

  {
    question:
      "428) Quelle adresse IPv6 représente la boucle locale (loopback) ?",
    answers: ["a) ::", "b) ::1", "c) FF02::1", "d) FE80::1"],
    correct: 1,
  },

  {
    question:
      "429) Quel préfixe est utilisé pour les adresses IPv6 link-local ?",
    answers: ["a) 2000::/3", "b) FC00::/7", "c) FE80::/10", "d) FF00::/8"],
    correct: 2,
  },

  {
    question: "430) Quelle affirmation concernant IPv6 est correcte ?",
    answers: [
      "a) IPv6 utilise des adresses de 32 bits",
      "b) IPv6 utilise des adresses de 128 bits",
      "c) IPv6 n'utilise pas de routage",
      "d) IPv6 utilise obligatoirement NAT",
    ],
    correct: 1,
  },

  {
    question:
      "431) Quel protocole IPv6 remplit notamment les fonctions auparavant assurées par ARP en IPv4 ?",
    answers: ["a) ICMPv6 Neighbor Discovery", "b) FTP", "c) DHCPv4", "d) TCP"],
    correct: 0,
  },

  {
    question: "432) IPv6 utilise-t-il une adresse de broadcast comme IPv4 ?",
    answers: [
      "a) Oui, toujours",
      "b) Oui, uniquement sur Ethernet",
      "c) Non, IPv6 utilise notamment le multicast",
      "d) Oui, uniquement pour DNS",
    ],
    correct: 2,
  },

  {
    question:
      "433) Quel préfixe IPv6 est utilisé pour les adresses multicast ?",
    answers: ["a) FF00::/8", "b) FE80::/10", "c) 2000::/3", "d) FC00::/7"],
    correct: 0,
  },

  {
    question:
      "434) Quel préfixe IPv6 est associé aux adresses Unique Local Addresses (ULA) ?",
    answers: ["a) 2000::/3", "b) FE80::/10", "c) FC00::/7", "d) FF00::/8"],
    correct: 2,
  },

  {
    question:
      "435) Quel équipement fonctionne principalement à la couche 2 du modèle OSI ?",
    answers: ["a) Hub", "b) Switch Ethernet", "c) Routeur", "d) Serveur DNS"],
    correct: 1,
  },

  {
    question:
      "436) Quel équipement utilise principalement les adresses IP pour prendre des décisions de routage ?",
    answers: ["a) Hub", "b) Switch de couche 2", "c) Routeur", "d) Répéteur"],
    correct: 2,
  },

  {
    question: "437) Quel est le rôle principal d'un switch Ethernet ?",
    answers: [
      "a) Transmettre les trames selon les adresses MAC",
      "b) Attribuer des adresses IP automatiquement",
      "c) Traduire les noms DNS",
      "d) Chiffrer les paquets IP",
    ],
    correct: 0,
  },

  {
    question:
      "438) Qu'utilise principalement un switch pour apprendre les adresses des équipements connectés ?",
    answers: [
      "a) L'adresse IP source",
      "b) L'adresse MAC source des trames reçues",
      "c) Le numéro de port TCP",
      "d) Le nom DNS",
    ],
    correct: 1,
  },

  {
    question:
      "439) Que fait un switch lorsqu'il reçoit une trame unicast dont l'adresse MAC destination est inconnue ?",
    answers: [
      "a) Il la supprime toujours",
      "b) Il l'envoie uniquement au routeur",
      "c) Il la diffuse sur les ports appropriés sauf le port d'entrée",
      "d) Il la transforme en paquet IP",
    ],
    correct: 2,
  },

  {
    question: "440) Quelle adresse MAC représente le broadcast Ethernet IPv4 ?",
    answers: [
      "a) 00:00:00:00:00:00",
      "b) FF:FF:FF:FF:FF:FF",
      "c) 11:11:11:11:11:11",
      "d) 01:00:00:00:00:00",
    ],
    correct: 1,
  },

  {
    question: "441) Que signifie VLAN ?",
    answers: [
      "a) Virtual Local Area Network",
      "b) Virtual Link Access Node",
      "c) Variable Local Address Network",
      "d) Virtual Layer Access Network",
    ],
    correct: 0,
  },

  {
    question: "442) Quel est l'objectif principal d'un VLAN ?",
    answers: [
      "a) Segmenter logiquement un réseau de niveau 2",
      "b) Augmenter la longueur maximale d'un câble",
      "c) Remplacer les adresses IP",
      "d) Remplacer le protocole TCP",
    ],
    correct: 0,
  },

  {
    question:
      "443) Un port de switch configuré comme port access appartient généralement à :",
    answers: [
      "a) Plusieurs VLAN simultanément avec balises 802.1Q",
      "b) Un seul VLAN",
      "c) Aucun VLAN",
      "d) Tous les VLAN",
    ],
    correct: 1,
  },

  {
    question:
      "444) Quel type de port est généralement utilisé pour transporter plusieurs VLAN entre deux switches ?",
    answers: ["a) Access", "b) Trunk", "c) Console", "d) Loopback"],
    correct: 1,
  },

  {
    question:
      "445) Quelle norme est couramment utilisée pour le marquage des VLAN sur un trunk Ethernet ?",
    answers: [
      "a) IEEE 802.1Q",
      "b) IEEE 802.3af",
      "c) IEEE 802.11ac",
      "d) IEEE 802.1X uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "446) Deux PC appartenant à deux VLAN différents peuvent-ils communiquer directement au niveau 2 ?",
    answers: [
      "a) Oui, toujours",
      "b) Non, une communication inter-VLAN nécessite généralement un équipement de couche 3",
      "c) Oui, uniquement avec ARP",
      "d) Oui, uniquement avec DHCP",
    ],
    correct: 1,
  },

  {
    question:
      "447) Quelle solution permet le routage inter-VLAN avec un seul lien physique entre un routeur et un switch ?",
    answers: [
      "a) Router-on-a-stick",
      "b) NAT overload",
      "c) PortFast",
      "d) EtherChannel uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "448) Dans une configuration router-on-a-stick, les sous-interfaces du routeur sont généralement associées à :",
    answers: [
      "a) Des VLAN différents",
      "b) Des adresses MAC différentes uniquement",
      "c) Des ports TCP différents",
      "d) Des serveurs DNS différents",
    ],
    correct: 0,
  },

  {
    question:
      "449) Quel protocole empêche principalement les boucles de niveau 2 dans un réseau commuté ?",
    answers: ["a) DHCP", "b) STP", "c) DNS", "d) FTP"],
    correct: 1,
  },

  {
    question:
      "450) Quel est le rôle principal du Spanning Tree Protocol (STP) ?",
    answers: [
      "a) Empêcher les boucles dans un réseau Ethernet commuté",
      "b) Attribuer des adresses IP",
      "c) Traduire les adresses privées en publiques",
      "d) Résoudre les noms de domaine",
    ],
    correct: 0,
  },
  {
    question: "451) Dans STP, quel switch devient le Root Bridge ?",
    answers: [
      "a) Celui qui possède le plus grand Bridge ID",
      "b) Celui qui possède le plus petit Bridge ID",
      "c) Celui qui possède la plus grande adresse IP",
      "d) Celui qui possède le plus grand nombre de ports",
    ],
    correct: 1,
  },

  {
    question: "452) Le Bridge ID dans STP dépend notamment de :",
    answers: [
      "a) La priorité et l'adresse MAC",
      "b) L'adresse IP et le port TCP",
      "c) Le SSID uniquement",
      "d) La passerelle par défaut uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "453) Si deux switches STP ont la même priorité, quel critère permet généralement de les départager ?",
    answers: [
      "a) L'adresse MAC la plus faible",
      "b) L'adresse IP la plus élevée",
      "c) Le numéro de VLAN",
      "d) Le numéro de port TCP",
    ],
    correct: 0,
  },

  {
    question:
      "454) Sur un switch non-root, quel port est généralement sélectionné comme Root Port ?",
    answers: [
      "a) Le port offrant le meilleur chemin vers le Root Bridge",
      "b) Le port ayant la plus grande adresse MAC",
      "c) Le port connecté à Internet uniquement",
      "d) Le port configuré en access uniquement",
    ],
    correct: 0,
  },

  {
    question: "455) Que signifie BPDU dans STP ?",
    answers: [
      "a) Bridge Protocol Data Unit",
      "b) Broadcast Protocol Data User",
      "c) Basic Port Data Unit",
      "d) Bridge Packet Distribution Utility",
    ],
    correct: 0,
  },

  {
    question: "456) Quel est le rôle des BPDUs dans STP ?",
    answers: [
      "a) Échanger des informations de spanning tree entre switches",
      "b) Attribuer des adresses IP",
      "c) Résoudre les noms DNS",
      "d) Transporter des fichiers",
    ],
    correct: 0,
  },

  {
    question:
      "457) Quelle version de STP offre généralement une convergence plus rapide que le STP classique 802.1D ?",
    answers: ["a) RSTP", "b) FTP", "c) ARP", "d) RIP"],
    correct: 0,
  },

  {
    question: "458) Que signifie RSTP ?",
    answers: [
      "a) Rapid Spanning Tree Protocol",
      "b) Routing Spanning Transport Protocol",
      "c) Remote Switching Tree Protocol",
      "d) Rapid Switching Transfer Protocol",
    ],
    correct: 0,
  },

  {
    question:
      "459) Quelle fonction Cisco est généralement utilisée sur un port d'accès connecté directement à un terminal afin d'accélérer le passage vers l'état forwarding ?",
    answers: ["a) PortFast", "b) EtherChannel", "c) DHCP Snooping", "d) NAT"],
    correct: 0,
  },

  {
    question: "460) BPDU Guard sert principalement à :",
    answers: [
      "a) Protéger un port PortFast contre la réception inattendue de BPDUs",
      "b) Attribuer des adresses IP",
      "c) Chiffrer les trames",
      "d) Configurer OSPF",
    ],
    correct: 0,
  },

  {
    question: "461) Qu'est-ce qu'EtherChannel ?",
    answers: [
      "a) Une technologie permettant de regrouper plusieurs liens physiques en un lien logique",
      "b) Un protocole DNS",
      "c) Une méthode d'adressage IPv6",
      "d) Un type de câble coaxial",
    ],
    correct: 0,
  },

  {
    question:
      "462) Quel protocole peut être utilisé pour négocier dynamiquement un EtherChannel sur des équipements Cisco ?",
    answers: ["a) LACP", "b) ARP", "c) DHCP", "d) ICMP"],
    correct: 0,
  },

  {
    question: "463) Que signifie LACP ?",
    answers: [
      "a) Link Aggregation Control Protocol",
      "b) Local Address Configuration Protocol",
      "c) Link Access Control Packet",
      "d) LAN Aggregation Communication Protocol",
    ],
    correct: 0,
  },

  {
    question: "464) Quel est un avantage d'EtherChannel ?",
    answers: [
      "a) Agréger la bande passante de plusieurs liens et fournir de la redondance",
      "b) Remplacer le protocole IP",
      "c) Supprimer toutes les adresses MAC",
      "d) Désactiver STP sur tout le réseau",
    ],
    correct: 0,
  },

  {
    question:
      "465) Quel problème peut survenir si les paramètres d'un trunk ne correspondent pas correctement des deux côtés ?",
    answers: [
      "a) Certains VLAN peuvent ne pas fonctionner correctement",
      "b) Le DNS devient automatiquement plus rapide",
      "c) Les adresses MAC deviennent des adresses IP",
      "d) TCP est remplacé par UDP",
    ],
    correct: 0,
  },

  {
    question: "466) Qu'est-ce qu'un VLAN natif sur un trunk 802.1Q ?",
    answers: [
      "a) Le VLAN dont les trames sont généralement transmises sans balise 802.1Q",
      "b) Le VLAN réservé uniquement à Internet",
      "c) Le VLAN qui ne peut jamais être modifié",
      "d) Le VLAN utilisé uniquement pour DNS",
    ],
    correct: 0,
  },

  {
    question:
      "467) Quelle commande Cisco affiche un résumé des VLAN configurés sur un switch ?",
    answers: [
      "a) show vlan brief",
      "b) show ip route",
      "c) show arp",
      "d) show interfaces status-only",
    ],
    correct: 0,
  },

  {
    question:
      "468) Quelle commande Cisco permet d'afficher les VLAN et les ports qui leur sont associés ?",
    answers: [
      "a) show vlan brief",
      "b) show ip protocols",
      "c) show arp",
      "d) show cdp neighbors detail",
    ],
    correct: 0,
  },

  {
    question:
      "469) Quelle commande Cisco permet généralement de vérifier si une interface est en mode access ou trunk ?",
    answers: [
      "a) show interfaces switchport",
      "b) show ip route",
      "c) show arp",
      "d) show users",
    ],
    correct: 0,
  },

  {
    question:
      "470) Quelle commande Cisco permet notamment d'afficher les trunks actifs et les VLAN autorisés ?",
    answers: [
      "a) show interfaces trunk",
      "b) show ip arp",
      "c) show vlan database",
      "d) show ip dhcp pool",
    ],
    correct: 0,
  },

  {
    question:
      "471) Quel protocole est utilisé pour associer une adresse IPv4 à une adresse MAC sur un réseau local ?",
    answers: ["a) ARP", "b) DNS", "c) DHCP", "d) FTP"],
    correct: 0,
  },

  {
    question: "472) Une requête ARP classique est envoyée sous forme de :",
    answers: [
      "a) Broadcast Ethernet",
      "b) Unicast vers Internet",
      "c) Multicast IPv6 uniquement",
      "d) Paquet TCP",
    ],
    correct: 0,
  },

  {
    question:
      "473) Lorsqu'un PC veut envoyer un paquet à une autre machine du même réseau IPv4 mais ne connaît pas son adresse MAC, il utilise :",
    answers: ["a) ARP", "b) DNS", "c) DHCP", "d) STP"],
    correct: 0,
  },

  {
    question:
      "474) Si la destination IPv4 est située sur un autre réseau, quelle adresse MAC le PC utilise-t-il généralement comme destination Ethernet ?",
    answers: [
      "a) La MAC de la passerelle par défaut",
      "b) La MAC du serveur DNS",
      "c) La MAC de la destination finale",
      "d) FF:FF:FF:FF:FF:FF",
    ],
    correct: 0,
  },

  {
    question:
      "475) Quelle information permet à un hôte de déterminer si une destination IPv4 est locale ou distante ?",
    answers: [
      "a) Le masque de sous-réseau",
      "b) Le numéro de port TCP",
      "c) L'adresse MAC du switch",
      "d) Le serveur DNS",
    ],
    correct: 0,
  },

  {
    question:
      "476) Un PC possède l'adresse 192.168.1.20/24 et veut communiquer avec 192.168.1.50. La destination est :",
    answers: [
      "a) Sur le même réseau IPv4",
      "b) Sur un réseau distant",
      "c) Une adresse multicast",
      "d) Une adresse loopback",
    ],
    correct: 0,
  },

  {
    question:
      "477) Un PC possède 192.168.1.20/24 et veut communiquer avec 192.168.2.50. La destination est :",
    answers: [
      "a) Sur le même réseau",
      "b) Sur un réseau différent",
      "c) Une adresse broadcast",
      "d) Une adresse APIPA",
    ],
    correct: 1,
  },

  {
    question:
      "478) Quelle adresse IP est généralement configurée comme passerelle par défaut d'un PC ?",
    answers: [
      "a) L'adresse d'une interface de routeur située sur le même réseau",
      "b) L'adresse MAC du switch",
      "c) L'adresse du serveur DNS uniquement",
      "d) L'adresse broadcast",
    ],
    correct: 0,
  },

  {
    question:
      "479) Un PC peut-il communiquer avec des machines de son propre sous-réseau sans passer par la passerelle par défaut ?",
    answers: [
      "a) Oui",
      "b) Non, jamais",
      "c) Seulement avec DNS",
      "d) Seulement avec DHCP",
    ],
    correct: 0,
  },

  {
    question:
      "480) Quel protocole est principalement responsable de l'adressage logique et du routage des paquets ?",
    answers: ["a) IP", "b) Ethernet", "c) ARP", "d) STP"],
    correct: 0,
  },

  {
    question:
      "481) Quelle information est modifiée à chaque saut Ethernet lors du routage d'un paquet IP ?",
    answers: [
      "a) Les adresses MAC source et destination de la trame",
      "b) L'adresse IP destination uniquement",
      "c) Le numéro de port TCP uniquement",
      "d) Le nom DNS",
    ],
    correct: 0,
  },

  {
    question:
      "482) Lorsqu'un routeur transfère un paquet IPv4 sans NAT, l'adresse IP destination :",
    answers: [
      "a) Reste généralement inchangée",
      "b) Devient toujours 0.0.0.0",
      "c) Devient l'adresse du routeur",
      "d) Devient une adresse MAC",
    ],
    correct: 0,
  },

  {
    question:
      "483) Quel champ IPv4 est décrémenté à chaque passage par un routeur ?",
    answers: [
      "a) TTL",
      "b) Port source",
      "c) DSCP uniquement",
      "d) Adresse MAC",
    ],
    correct: 0,
  },

  {
    question:
      "484) Que se passe-t-il généralement lorsqu'un paquet IPv4 arrive sur un routeur avec un TTL égal à 1 ?",
    answers: [
      "a) Le routeur le transmet sans modification",
      "b) Le TTL expire et le routeur peut générer un message ICMP Time Exceeded",
      "c) Le routeur le transforme en ARP",
      "d) Le routeur augmente le TTL",
    ],
    correct: 1,
  },

  {
    question:
      "485) Quel outil utilise notamment l'expiration du TTL pour identifier les routeurs traversés ?",
    answers: ["a) traceroute/tracert", "b) nslookup", "c) ipconfig", "d) arp"],
    correct: 0,
  },

  {
    question:
      "486) Quelle commande Windows permet d'afficher le chemin suivi vers une destination ?",
    answers: ["a) tracert", "b) route", "c) arp", "d) hostname"],
    correct: 0,
  },

  {
    question:
      "487) Quelle commande Linux est couramment utilisée pour afficher la table de routage avec la commande ip ?",
    answers: ["a) ip route", "b) ip dns", "c) ip arp", "d) ip table"],
    correct: 0,
  },

  {
    question:
      "488) Quelle commande Windows affiche généralement la table de routage IPv4 ?",
    answers: [
      "a) route print",
      "b) ipconfig /route",
      "c) arp /route",
      "d) netstat /routing",
    ],
    correct: 0,
  },

  {
    question:
      "489) Quelle commande Windows permet d'afficher les paramètres IP détaillés, notamment DNS et DHCP ?",
    answers: [
      "a) ipconfig /all",
      "b) ipconfig /dns",
      "c) route /all",
      "d) netstat /ip",
    ],
    correct: 0,
  },

  {
    question:
      "490) Quelle commande Windows demande généralement au serveur DHCP de renouveler la configuration IPv4 ?",
    answers: [
      "a) ipconfig /renew",
      "b) ipconfig /refresh",
      "c) dhcp /renew",
      "d) netsh /renew",
    ],
    correct: 0,
  },

  {
    question: "491) Quelle commande Windows permet d'afficher le cache ARP ?",
    answers: [
      "a) arp -a",
      "b) arp -show",
      "c) ipconfig /arp",
      "d) netstat -arp",
    ],
    correct: 0,
  },

  {
    question:
      "492) Quelle commande permet généralement de tester la résolution DNS depuis Windows ou de nombreux systèmes ?",
    answers: ["a) nslookup", "b) pingdns", "c) dnscheck", "d) ipconfig /dns"],
    correct: 0,
  },

  {
    question:
      "493) Un utilisateur peut pinguer 8.8.8.8 mais ne peut pas ouvrir un site avec son nom de domaine. Quelle cause est particulièrement probable ?",
    answers: [
      "a) Un problème de résolution DNS",
      "b) Une panne complète de la carte réseau",
      "c) Une absence totale de connectivité IP",
      "d) Un problème de câble USB",
    ],
    correct: 0,
  },

  {
    question:
      "494) Un PC peut communiquer avec les autres machines du LAN mais pas avec Internet. Quelle configuration doit notamment être vérifiée ?",
    answers: [
      "a) La passerelle par défaut",
      "b) Le nom de l'ordinateur uniquement",
      "c) La résolution des noms NetBIOS uniquement",
      "d) Le fond d'écran",
    ],
    correct: 0,
  },

  {
    question:
      "495) Un PC possède une adresse IP correcte, mais `ping 127.0.0.1` échoue. Quel élément peut être en cause ?",
    answers: [
      "a) La pile TCP/IP locale",
      "b) Le serveur DNS distant uniquement",
      "c) La passerelle Internet uniquement",
      "d) Le câble entre le PC et le routeur uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "496) Si `ping 127.0.0.1` fonctionne mais que le ping vers l'adresse IP locale du PC échoue, quel problème peut être suspecté ?",
    answers: [
      "a) Un problème lié à l'interface réseau ou à sa configuration",
      "b) Un problème obligatoire du serveur DNS",
      "c) Une panne obligatoire d'Internet",
      "d) Une erreur du protocole FTP",
    ],
    correct: 0,
  },

  {
    question:
      "497) Quelle commande Cisco affiche un résumé des interfaces avec leurs adresses IP et leur état ?",
    answers: [
      "a) show ip interface brief",
      "b) show interfaces vlan",
      "c) show route brief",
      "d) show ip summary",
    ],
    correct: 0,
  },

  {
    question:
      "498) Sur Cisco IOS, l'état `administratively down` indique généralement que :",
    answers: [
      "a) L'interface est désactivée administrativement",
      "b) Le câble est obligatoirement coupé",
      "c) L'adresse IP est obligatoirement incorrecte",
      "d) Le routeur n'a aucune table de routage",
    ],
    correct: 0,
  },

  {
    question:
      "499) Quelle commande Cisco active administrativement une interface qui est en état shutdown ?",
    answers: [
      "a) no shutdown",
      "b) interface up",
      "c) enable interface",
      "d) start interface",
    ],
    correct: 0,
  },

  {
    question:
      "500) Après avoir configuré une adresse IP sur une interface Cisco, quelle commande est généralement nécessaire si l'interface est administrativement désactivée ?",
    answers: [
      "a) no shutdown",
      "b) shutdown",
      "c) enable routing",
      "d) ip start",
    ],
    correct: 0,
  },
  {
    question:
      "501) Quelle caractéristique distingue principalement TCP d'UDP ?",
    answers: [
      "a) TCP est orienté connexion, UDP ne l'est pas",
      "b) UDP garantit toujours la livraison",
      "c) TCP n'utilise aucun numéro de port",
      "d) UDP effectue toujours un three-way handshake",
    ],
    correct: 0,
  },

  {
    question:
      "502) Combien de messages sont échangés lors du three-way handshake TCP classique ?",
    answers: ["a) 2", "b) 3", "c) 4", "d) 5"],
    correct: 1,
  },

  {
    question:
      "503) Quel drapeau TCP est utilisé pour initier normalement une connexion ?",
    answers: ["a) FIN", "b) ACK", "c) SYN", "d) RST"],
    correct: 2,
  },

  {
    question:
      "504) Quelle séquence correspond à l'établissement classique d'une connexion TCP ?",
    answers: [
      "a) ACK → SYN → FIN",
      "b) SYN → SYN-ACK → ACK",
      "c) FIN → ACK → SYN",
      "d) SYN → FIN → ACK",
    ],
    correct: 1,
  },

  {
    question:
      "505) Quel drapeau TCP est généralement utilisé pour terminer proprement une connexion ?",
    answers: ["a) SYN", "b) ACK", "c) FIN", "d) PSH"],
    correct: 2,
  },

  {
    question:
      "506) Quel drapeau TCP peut être utilisé pour réinitialiser immédiatement une connexion ?",
    answers: ["a) RST", "b) FIN", "c) SYN", "d) URG"],
    correct: 0,
  },

  {
    question: "507) Le contrôle de flux TCP utilise notamment :",
    answers: [
      "a) Une fenêtre de réception",
      "b) Le SSID",
      "c) L'adresse MAC du switch",
      "d) Le TTL DNS",
    ],
    correct: 0,
  },

  {
    question:
      "508) Quel mécanisme TCP permet de détecter et de réorganiser les données reçues hors ordre ?",
    answers: [
      "a) Les numéros de séquence",
      "b) Les adresses MAC",
      "c) Les VLAN",
      "d) Les masques réseau",
    ],
    correct: 0,
  },

  {
    question:
      "509) Un accusé de réception TCP est principalement identifié par le champ :",
    answers: ["a) ACK", "b) TTL", "c) DSCP", "d) FCS"],
    correct: 0,
  },

  {
    question: "510) Quelle caractéristique correspond à UDP ?",
    answers: [
      "a) Il établit toujours une connexion avant transmission",
      "b) Il garantit la livraison des paquets",
      "c) Il possède un faible overhead et ne garantit pas la livraison",
      "d) Il utilise le three-way handshake",
    ],
    correct: 2,
  },

  {
    question:
      "511) Quel protocole de transport est généralement utilisé par DNS pour les requêtes classiques ?",
    answers: [
      "a) TCP uniquement",
      "b) UDP principalement",
      "c) ICMP",
      "d) SCTP uniquement",
    ],
    correct: 1,
  },

  {
    question:
      "512) DNS utilise principalement quel port pour les requêtes classiques ?",
    answers: ["a) 21", "b) 25", "c) 53", "d) 110"],
    correct: 2,
  },

  {
    question: "513) DNS peut également utiliser TCP notamment pour :",
    answers: [
      "a) Certaines communications DNS nécessitant TCP, notamment les transferts de zone",
      "b) Remplacer Ethernet",
      "c) Attribuer automatiquement les adresses IP",
      "d) Chiffrer toutes les connexions HTTP",
    ],
    correct: 0,
  },

  {
    question:
      "514) Quel type d'enregistrement DNS associe un nom à une adresse IPv4 ?",
    answers: ["a) AAAA", "b) MX", "c) A", "d) CNAME"],
    correct: 2,
  },

  {
    question:
      "515) Quel type d'enregistrement DNS associe un nom à une adresse IPv6 ?",
    answers: ["a) A", "b) AAAA", "c) MX", "d) PTR"],
    correct: 1,
  },

  {
    question:
      "516) Quel enregistrement DNS indique généralement les serveurs de messagerie d'un domaine ?",
    answers: ["a) MX", "b) A", "c) CNAME", "d) TXT uniquement"],
    correct: 0,
  },

  {
    question:
      "517) Quel enregistrement DNS crée généralement un alias vers un autre nom DNS ?",
    answers: ["a) MX", "b) PTR", "c) CNAME", "d) NS uniquement"],
    correct: 2,
  },

  {
    question:
      "518) Quel enregistrement DNS est utilisé pour la résolution inverse d'une adresse IP vers un nom ?",
    answers: ["a) PTR", "b) MX", "c) AAAA", "d) CNAME"],
    correct: 0,
  },

  {
    question: "519) Quel est le rôle principal d'un serveur DNS récursif ?",
    answers: [
      "a) Rechercher la réponse DNS pour le client et la lui retourner",
      "b) Attribuer une adresse MAC",
      "c) Configurer les VLAN",
      "d) Router les paquets IP",
    ],
    correct: 0,
  },

  {
    question:
      "520) Quel mécanisme permet à un serveur DNS de conserver temporairement des réponses déjà obtenues ?",
    answers: ["a) DNS caching", "b) NAT", "c) STP", "d) ARP spoofing"],
    correct: 0,
  },

  {
    question:
      "521) Quelle commande Windows permet de tester directement la résolution DNS ?",
    answers: ["a) nslookup", "b) arp", "c) route", "d) tracert"],
    correct: 0,
  },

  {
    question: "522) Quelle est la première étape du processus DHCP DORA ?",
    answers: [
      "a) DHCP ACK",
      "b) DHCP Discover",
      "c) DHCP Request",
      "d) DHCP Offer",
    ],
    correct: 1,
  },

  {
    question: "523) Quelle est la deuxième étape du processus DHCP DORA ?",
    answers: [
      "a) DHCP Offer",
      "b) DHCP ACK",
      "c) DHCP Discover",
      "d) DHCP Release",
    ],
    correct: 0,
  },

  {
    question: "524) Quelle est la troisième étape du processus DHCP DORA ?",
    answers: [
      "a) DHCP Discover",
      "b) DHCP Offer",
      "c) DHCP Request",
      "d) DHCP NAK",
    ],
    correct: 2,
  },

  {
    question: "525) Quelle est la dernière étape du processus DHCP DORA ?",
    answers: [
      "a) DHCP ACK",
      "b) DHCP Request",
      "c) DHCP Offer",
      "d) DHCP Discover",
    ],
    correct: 0,
  },

  {
    question: "526) Que signifie DHCP ?",
    answers: [
      "a) Dynamic Host Configuration Protocol",
      "b) Dynamic Hardware Control Protocol",
      "c) Domain Host Configuration Process",
      "d) Data Host Communication Protocol",
    ],
    correct: 0,
  },

  {
    question: "527) Quel port UDP est utilisé par un serveur DHCP ?",
    answers: ["a) 53", "b) 67", "c) 68", "d) 69"],
    correct: 1,
  },

  {
    question: "528) Quel port UDP est utilisé par un client DHCP ?",
    answers: ["a) 67", "b) 68", "c) 53", "d) 161"],
    correct: 1,
  },

  {
    question:
      "529) Quelle adresse IPv4 est couramment utilisée comme adresse source initiale lors d'un DHCP Discover par un client sans configuration IPv4 ?",
    answers: [
      "a) 127.0.0.1",
      "b) 0.0.0.0",
      "c) 255.255.255.255",
      "d) 192.168.1.1",
    ],
    correct: 1,
  },

  {
    question:
      "530) Quelle adresse IPv4 est généralement utilisée comme destination d'un DHCP Discover initial ?",
    answers: [
      "a) 127.0.0.1",
      "b) 224.0.0.1",
      "c) 255.255.255.255",
      "d) 8.8.8.8",
    ],
    correct: 2,
  },

  {
    question: "531) Quel est le rôle d'un DHCP Relay ?",
    answers: [
      "a) Transmettre les messages DHCP entre différents réseaux",
      "b) Traduire les adresses privées",
      "c) Résoudre les noms DNS",
      "d) Bloquer les broadcasts Ethernet",
    ],
    correct: 0,
  },

  {
    question:
      "532) Un client DHCP ne reçoit aucune réponse et s'auto-attribue une adresse 169.254.x.x. Quelle technologie est concernée ?",
    answers: ["a) APIPA", "b) NAT", "c) OSPF", "d) DNSSEC"],
    correct: 0,
  },

  {
    question: "533) Quelle est la fonction principale de HTTP ?",
    answers: [
      "a) Transférer des ressources Web",
      "b) Attribuer des adresses IP",
      "c) Résoudre les adresses MAC",
      "d) Établir des routes OSPF",
    ],
    correct: 0,
  },

  {
    question: "534) Quel est le port TCP par défaut de HTTP ?",
    answers: ["a) 22", "b) 53", "c) 80", "d) 443"],
    correct: 2,
  },

  {
    question: "535) Quel est le port TCP par défaut de HTTPS ?",
    answers: ["a) 80", "b) 110", "c) 143", "d) 443"],
    correct: 3,
  },

  {
    question: "536) Quelle technologie sécurise généralement HTTPS ?",
    answers: ["a) TLS", "b) ARP", "c) DHCP", "d) STP"],
    correct: 0,
  },

  {
    question: "537) Quel est l'objectif principal de TLS dans HTTPS ?",
    answers: [
      "a) Fournir notamment chiffrement et authentification du serveur",
      "b) Attribuer les adresses IP",
      "c) Remplacer DNS",
      "d) Apprendre les adresses MAC",
    ],
    correct: 0,
  },

  {
    question:
      "538) Quelle méthode HTTP est généralement utilisée pour demander une ressource ?",
    answers: ["a) GET", "b) SEND", "c) FETCHIP", "d) REQUESTTCP"],
    correct: 0,
  },

  {
    question:
      "539) Quelle méthode HTTP est généralement utilisée pour envoyer des données au serveur afin de créer ou traiter une ressource ?",
    answers: ["a) GET", "b) POST", "c) TRACEIP", "d) CONNECTUDP"],
    correct: 1,
  },

  {
    question: "540) Que signifie le code HTTP 404 ?",
    answers: [
      "a) Unauthorized",
      "b) Not Found",
      "c) Server Started",
      "d) Bad Gateway",
    ],
    correct: 1,
  },

  {
    question: "541) Que signifie généralement le code HTTP 200 ?",
    answers: [
      "a) OK / succès",
      "b) Redirection permanente",
      "c) Erreur serveur",
      "d) Ressource introuvable",
    ],
    correct: 0,
  },

  {
    question: "542) Que signifie généralement le code HTTP 301 ?",
    answers: [
      "a) Unauthorized",
      "b) Moved Permanently",
      "c) Not Found",
      "d) Internal Server Error",
    ],
    correct: 1,
  },

  {
    question:
      "543) Quel protocole est principalement utilisé pour transférer des fichiers de manière classique ?",
    answers: ["a) FTP", "b) ARP", "c) ICMP", "d) STP"],
    correct: 0,
  },

  {
    question:
      "544) Quels ports sont traditionnellement associés à FTP en mode actif ?",
    answers: ["a) 20 et 21", "b) 22 et 23", "c) 53 et 67", "d) 80 et 443"],
    correct: 0,
  },

  {
    question:
      "545) Quel protocole permet généralement un transfert de fichiers sécurisé via SSH ?",
    answers: ["a) SFTP", "b) TFTP", "c) FTP uniquement", "d) HTTP"],
    correct: 0,
  },

  {
    question:
      "546) Quel protocole est principalement utilisé pour envoyer des e-mails entre serveurs de messagerie ?",
    answers: ["a) SMTP", "b) POP3", "c) IMAP", "d) DHCP"],
    correct: 0,
  },

  {
    question:
      "547) Quel protocole permet généralement à un client de consulter ses e-mails tout en les conservant sur le serveur et en synchronisant les dossiers ?",
    answers: ["a) FTP", "b) IMAP", "c) ARP", "d) TFTP"],
    correct: 1,
  },

  {
    question:
      "548) Quel protocole télécharge généralement les e-mails depuis un serveur vers un client, selon sa configuration ?",
    answers: ["a) POP3", "b) SMTP", "c) DNS", "d) SSH"],
    correct: 0,
  },

  {
    question: "549) Quel est le port TCP classique de SMTP ?",
    answers: ["a) 21", "b) 22", "c) 25", "d) 110"],
    correct: 2,
  },

  {
    question: "550) Quel est le port TCP classique de IMAP ?",
    answers: ["a) 53", "b) 110", "c) 143", "d) 443"],
    correct: 2,
  },
  {
    question: "551) Quelle norme IEEE correspond au Wi-Fi 4 ?",
    answers: ["a) 802.11a", "b) 802.11n", "c) 802.11ac", "d) 802.11ax"],
    correct: 1,
  },

  {
    question: "552) Quelle norme IEEE correspond au Wi-Fi 5 ?",
    answers: ["a) 802.11n", "b) 802.11ac", "c) 802.11ax", "d) 802.11g"],
    correct: 1,
  },

  {
    question: "553) Quelle norme IEEE correspond au Wi-Fi 6 ?",
    answers: ["a) 802.11ac", "b) 802.11n", "c) 802.11ax", "d) 802.11g"],
    correct: 2,
  },

  {
    question:
      "554) Quel équipement fournit généralement l'accès Wi-Fi aux clients sans fil ?",
    answers: [
      "a) Point d'accès (Access Point)",
      "b) Hub",
      "c) Répéteur Ethernet uniquement",
      "d) Serveur DNS",
    ],
    correct: 0,
  },

  {
    question: "555) Que signifie SSID dans un réseau Wi-Fi ?",
    answers: [
      "a) Service Set Identifier",
      "b) Secure Service Internet Device",
      "c) System Security Identification",
      "d) Shared Switch Identifier",
    ],
    correct: 0,
  },

  {
    question: "556) Le SSID sert principalement à :",
    answers: [
      "a) Identifier le réseau Wi-Fi",
      "b) Attribuer une adresse IP",
      "c) Chiffrer directement les paquets IP",
      "d) Remplacer l'adresse MAC",
    ],
    correct: 0,
  },

  {
    question:
      "557) Quelle bande de fréquences est couramment utilisée par les réseaux Wi-Fi ?",
    answers: [
      "a) 2,4 GHz",
      "b) 5 GHz",
      "c) 6 GHz",
      "d) Toutes les réponses précédentes selon la norme et l'équipement",
    ],
    correct: 3,
  },

  {
    question:
      "558) Quel est généralement l'avantage de la bande 5 GHz par rapport à 2,4 GHz ?",
    answers: [
      "a) Elle offre généralement davantage de canaux et moins d'interférences dans de nombreux environnements",
      "b) Elle traverse toujours mieux les murs",
      "c) Elle fonctionne sans antenne",
      "d) Elle ne nécessite aucune sécurité",
    ],
    correct: 0,
  },

  {
    question:
      "559) Quelle caractéristique est généralement associée à la bande 2,4 GHz ?",
    answers: [
      "a) Une meilleure portée et pénétration que 5 GHz dans de nombreux environnements",
      "b) Une portée toujours inférieure à 5 GHz",
      "c) L'absence totale d'interférences",
      "d) L'impossibilité de transporter des données",
    ],
    correct: 0,
  },

  {
    question:
      "560) Quelle technologie de sécurité Wi-Fi est considérée comme obsolète et vulnérable ?",
    answers: ["a) WPA3", "b) WPA2-AES", "c) WEP", "d) 802.1X"],
    correct: 2,
  },

  {
    question:
      "561) Quelle méthode de chiffrement est couramment associée à WPA2-Personal ?",
    answers: ["a) AES-CCMP", "b) DES uniquement", "c) WEP", "d) FTP"],
    correct: 0,
  },

  {
    question:
      "562) Quel protocole de sécurité Wi-Fi est plus récent que WPA2 ?",
    answers: ["a) WEP", "b) WPA", "c) WPA3", "d) TKIP uniquement"],
    correct: 2,
  },

  {
    question:
      "563) Dans WPA2-Personal, l'authentification utilise généralement :",
    answers: [
      "a) Une clé pré-partagée (PSK)",
      "b) Une adresse IP publique uniquement",
      "c) Un serveur DNS uniquement",
      "d) Une adresse MAC broadcast",
    ],
    correct: 0,
  },

  {
    question:
      "564) Quelle pratique améliore la sécurité d'un réseau Wi-Fi domestique ?",
    answers: [
      "a) Utiliser WEP",
      "b) Utiliser WPA2/WPA3 avec un mot de passe robuste",
      "c) Désactiver tout chiffrement",
      "d) Utiliser le mot de passe par défaut du routeur",
    ],
    correct: 1,
  },

  {
    question:
      "565) Pourquoi le filtrage MAC seul n'est-il pas considéré comme une protection suffisante pour un Wi-Fi ?",
    answers: [
      "a) Une adresse MAC peut être usurpée",
      "b) Les adresses MAC n'existent pas en Wi-Fi",
      "c) Le filtrage MAC chiffre les données",
      "d) Il remplace WPA3",
    ],
    correct: 0,
  },

  {
    question: "566) Quel est le rôle principal d'un pare-feu (firewall) ?",
    answers: [
      "a) Contrôler le trafic réseau selon des règles de sécurité",
      "b) Attribuer automatiquement des adresses IP",
      "c) Convertir les noms en adresses MAC",
      "d) Remplacer les câbles réseau",
    ],
    correct: 0,
  },

  {
    question:
      "567) Un pare-feu peut-il filtrer le trafic selon les ports TCP/UDP ?",
    answers: [
      "a) Oui",
      "b) Non",
      "c) Seulement le trafic DNS",
      "d) Seulement le trafic Wi-Fi",
    ],
    correct: 0,
  },

  {
    question:
      "568) Quel principe de sécurité consiste à n'autoriser que les communications nécessaires ?",
    answers: [
      "a) Principe du moindre privilège",
      "b) Broadcast permanent",
      "c) Open routing",
      "d) Full trust",
    ],
    correct: 0,
  },

  {
    question: "569) Que fait généralement un IDS ?",
    answers: [
      "a) Détecte et signale des activités suspectes",
      "b) Bloque obligatoirement toutes les attaques",
      "c) Attribue des adresses IP",
      "d) Remplace un routeur",
    ],
    correct: 0,
  },

  {
    question: "570) Que fait principalement un IPS ?",
    answers: [
      "a) Détecte et peut bloquer ou prévenir certaines attaques",
      "b) Résout les noms DNS",
      "c) Attribue les adresses MAC",
      "d) Configure les VLAN automatiquement",
    ],
    correct: 0,
  },

  {
    question: "571) Quelle est la différence principale entre IDS et IPS ?",
    answers: [
      "a) IDS est principalement orienté détection, IPS peut également agir pour bloquer",
      "b) IDS utilise IP et IPS utilise uniquement MAC",
      "c) IPS ne peut jamais détecter une attaque",
      "d) Il n'existe aucune différence",
    ],
    correct: 0,
  },

  {
    question: "572) Que signifie VPN ?",
    answers: [
      "a) Virtual Private Network",
      "b) Virtual Public Network",
      "c) Verified Private Node",
      "d) Virtual Protocol Network",
    ],
    correct: 0,
  },

  {
    question: "573) Quel est l'objectif principal d'un VPN ?",
    answers: [
      "a) Créer un canal de communication sécurisé à travers un réseau non fiable",
      "b) Remplacer les adresses IP",
      "c) Augmenter automatiquement la bande passante",
      "d) Désactiver le routage",
    ],
    correct: 0,
  },

  {
    question:
      "574) Quel mécanisme est généralement utilisé par un VPN pour protéger la confidentialité des données ?",
    answers: ["a) Le chiffrement", "b) Le broadcast", "c) ARP", "d) DHCP"],
    correct: 0,
  },

  {
    question: "575) Un VPN site-to-site sert principalement à :",
    answers: [
      "a) Connecter de manière sécurisée deux réseaux ou sites",
      "b) Connecter uniquement deux claviers",
      "c) Attribuer des adresses DHCP",
      "d) Remplacer DNS",
    ],
    correct: 0,
  },

  {
    question: "576) Un VPN remote-access permet généralement à :",
    answers: [
      "a) Un utilisateur distant d'accéder de manière sécurisée aux ressources d'un réseau",
      "b) Deux switches de devenir un seul switch",
      "c) Un serveur DNS de devenir un routeur",
      "d) Un câble de fonctionner sans signal",
    ],
    correct: 0,
  },

  {
    question:
      "577) Quel protocole est couramment utilisé pour établir des tunnels VPN IPsec ?",
    answers: ["a) IKE", "b) ARP", "c) DHCP", "d) FTP"],
    correct: 0,
  },

  {
    question:
      "578) IPsec fonctionne principalement pour sécuriser les communications au niveau :",
    answers: [
      "a) Réseau",
      "b) Application uniquement",
      "c) Physique uniquement",
      "d) Présentation uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "579) Quel protocole IPsec fournit notamment l'authentification de l'origine et l'intégrité, mais pas le chiffrement des données ?",
    answers: ["a) AH", "b) ESP", "c) TLS", "d) SSH"],
    correct: 0,
  },

  {
    question:
      "580) Quel protocole IPsec peut fournir le chiffrement des données ?",
    answers: ["a) ESP", "b) ARP", "c) ICMP", "d) DHCP"],
    correct: 0,
  },

  {
    question: "581) Que signifie NAT ?",
    answers: [
      "a) Network Address Translation",
      "b) Network Access Transport",
      "c) Network Authentication Table",
      "d) Node Address Transfer",
    ],
    correct: 0,
  },

  {
    question: "582) Quel est l'objectif principal du NAT ?",
    answers: [
      "a) Traduire des adresses IP entre différents espaces d'adressage",
      "b) Résoudre les noms DNS",
      "c) Établir une connexion TCP",
      "d) Créer des VLAN",
    ],
    correct: 0,
  },

  {
    question:
      "583) Quel type de NAT associe généralement une adresse privée à une adresse publique de manière relativement fixe ?",
    answers: [
      "a) NAT statique",
      "b) PAT",
      "c) NAT dynamique uniquement",
      "d) ARP NAT",
    ],
    correct: 0,
  },

  {
    question:
      "584) Quel type de NAT utilise un pool d'adresses publiques pour effectuer les traductions ?",
    answers: [
      "a) NAT dynamique",
      "b) NAT statique",
      "c) PAT uniquement",
      "d) DNS NAT",
    ],
    correct: 0,
  },

  {
    question:
      "585) Quelle technique permet à plusieurs hôtes privés de partager une même adresse IPv4 publique en utilisant différents numéros de ports ?",
    answers: ["a) PAT", "b) STP", "c) OSPF", "d) ARP"],
    correct: 0,
  },

  {
    question: "586) Que signifie PAT ?",
    answers: [
      "a) Port Address Translation",
      "b) Private Address Transport",
      "c) Protocol Access Translation",
      "d) Packet Address Table",
    ],
    correct: 0,
  },

  {
    question: "587) PAT est aussi couramment appelé :",
    answers: [
      "a) NAT overload",
      "b) DNS forwarding",
      "c) DHCP relay",
      "d) Static routing",
    ],
    correct: 0,
  },

  {
    question: "588) Pourquoi le NAT/PAT est-il largement utilisé avec IPv4 ?",
    answers: [
      "a) Pour permettre notamment à plusieurs réseaux privés d'accéder à Internet avec un nombre limité d'adresses publiques",
      "b) Pour remplacer TCP",
      "c) Pour supprimer les masques",
      "d) Pour créer automatiquement des VLAN",
    ],
    correct: 0,
  },

  {
    question: "589) Quelle adresse appartient à l'espace privé IPv4 RFC 1918 ?",
    answers: ["a) 8.8.8.8", "b) 172.20.10.5", "c) 1.1.1.1", "d) 203.0.113.10"],
    correct: 1,
  },

  {
    question:
      "590) Quelle plage IPv4 est réservée aux réseaux privés dans la classe 10/8 ?",
    answers: [
      "a) 10.0.0.0/8",
      "b) 100.64.0.0/10",
      "c) 127.0.0.0/8",
      "d) 169.254.0.0/16",
    ],
    correct: 0,
  },

  {
    question: "591) Quelle plage IPv4 privée correspond à 172.16.0.0/12 ?",
    answers: [
      "a) 172.0.0.0 à 172.15.255.255",
      "b) 172.16.0.0 à 172.31.255.255",
      "c) 172.32.0.0 à 172.63.255.255",
      "d) 172.64.0.0 à 172.95.255.255",
    ],
    correct: 1,
  },

  {
    question: "592) Quelle plage IPv4 privée correspond à 192.168.0.0/16 ?",
    answers: [
      "a) 192.0.0.0 à 192.0.255.255",
      "b) 192.168.0.0 à 192.168.255.255",
      "c) 192.169.0.0 à 192.169.255.255",
      "d) 192.0.0.0 à 192.168.255.255",
    ],
    correct: 1,
  },

  {
    question: "593) Quelle adresse IPv4 est utilisée pour le loopback ?",
    answers: [
      "a) 10.0.0.1",
      "b) 127.0.0.1",
      "c) 169.254.1.1",
      "d) 255.255.255.255",
    ],
    correct: 1,
  },

  {
    question: "594) Quelle plage IPv4 est réservée au loopback ?",
    answers: [
      "a) 127.0.0.0/8",
      "b) 10.0.0.0/8",
      "c) 224.0.0.0/4",
      "d) 169.254.0.0/16",
    ],
    correct: 0,
  },

  {
    question:
      "595) Quelle plage IPv4 est utilisée pour les adresses link-local/APIPA ?",
    answers: [
      "a) 127.0.0.0/8",
      "b) 169.254.0.0/16",
      "c) 224.0.0.0/4",
      "d) 192.168.0.0/16",
    ],
    correct: 1,
  },

  {
    question:
      "596) Une adresse IPv4 située dans 169.254.0.0/16 indique généralement :",
    answers: [
      "a) Une configuration APIPA/link-local",
      "b) Une adresse publique Internet",
      "c) Une adresse multicast",
      "d) Une adresse loopback",
    ],
    correct: 0,
  },

  {
    question: "597) Quelle plage IPv4 est réservée au multicast classique ?",
    answers: [
      "a) 127.0.0.0/8",
      "b) 169.254.0.0/16",
      "c) 224.0.0.0/4",
      "d) 192.168.0.0/16",
    ],
    correct: 2,
  },

  {
    question:
      "598) Quel type de communication permet à un émetteur d'envoyer des données à plusieurs destinataires appartenant à un groupe ?",
    answers: [
      "a) Unicast",
      "b) Broadcast",
      "c) Multicast",
      "d) Anycast uniquement",
    ],
    correct: 2,
  },

  {
    question:
      "599) Quel type de communication correspond à un échange entre un émetteur et un seul destinataire ?",
    answers: [
      "a) Unicast",
      "b) Multicast",
      "c) Broadcast",
      "d) Flooding uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "600) Quel type de communication IPv4 permet à un hôte d'envoyer un paquet à tous les hôtes du réseau local concerné ?",
    answers: ["a) Unicast", "b) Multicast", "c) Broadcast", "d) Anycast"],
    correct: 2,
  },
  {
    question:
      "601) Quelle commande Cisco IOS permet d'entrer en mode privilégié ?",
    answers: ["a) enable", "b) login", "c) privilege", "d) admin"],
    correct: 0,
  },

  {
    question:
      "602) Dans Cisco IOS, quelle commande permet d'entrer en mode de configuration globale ?",
    answers: [
      "a) configure terminal",
      "b) config global",
      "c) setup router",
      "d) terminal configure",
    ],
    correct: 0,
  },

  {
    question:
      "603) Quelle commande permet de modifier le nom d'un routeur Cisco ?",
    answers: [
      "a) device-name",
      "b) hostname",
      "c) router-name",
      "d) name-router",
    ],
    correct: 1,
  },

  {
    question:
      "604) Dans Cisco IOS, quelle commande affiche la configuration actuellement active en RAM ?",
    answers: [
      "a) show startup-config",
      "b) show running-config",
      "c) show current-config",
      "d) show memory-config",
    ],
    correct: 1,
  },

  {
    question:
      "605) Où se trouve généralement la configuration de démarrage d'un équipement Cisco ?",
    answers: [
      "a) RAM",
      "b) NVRAM",
      "c) Cache CPU uniquement",
      "d) Carte réseau",
    ],
    correct: 1,
  },

  {
    question:
      "606) Quelle commande Cisco permet d'afficher la configuration sauvegardée utilisée au démarrage ?",
    answers: [
      "a) show running-config",
      "b) show startup-config",
      "c) show boot-config",
      "d) show saved-config",
    ],
    correct: 1,
  },

  {
    question:
      "607) Quelle commande sauvegarde généralement la running-config dans la startup-config sur Cisco IOS ?",
    answers: [
      "a) copy running-config startup-config",
      "b) save config startup",
      "c) write running",
      "d) backup config",
    ],
    correct: 0,
  },

  {
    question:
      "608) Que risque-t-on si une configuration Cisco n'est pas sauvegardée dans la startup-config avant un redémarrage ?",
    answers: [
      "a) Les modifications de la running-config peuvent être perdues",
      "b) L'adresse MAC est supprimée",
      "c) Le processeur est définitivement bloqué",
      "d) Les ports Ethernet deviennent automatiquement des trunks",
    ],
    correct: 0,
  },

  {
    question:
      "609) Quelle commande permet de sélectionner une interface Cisco afin de la configurer ?",
    answers: [
      "a) interface",
      "b) select-interface",
      "c) port-config",
      "d) configure-port",
    ],
    correct: 0,
  },

  {
    question:
      "610) Quelle commande Cisco configure une adresse IPv4 sur une interface ?",
    answers: [
      "a) ip address <adresse> <masque>",
      "b) set ip <adresse>",
      "c) ipv4 configure <adresse>",
      "d) address ip <adresse>",
    ],
    correct: 0,
  },

  {
    question:
      "611) Quelle commande permet d'activer administrativement une interface Cisco ?",
    answers: [
      "a) enable interface",
      "b) no shutdown",
      "c) interface enable",
      "d) startup interface",
    ],
    correct: 1,
  },

  {
    question:
      "612) Quelle commande désactive administrativement une interface Cisco ?",
    answers: [
      "a) shutdown",
      "b) disable port",
      "c) no interface",
      "d) stop interface",
    ],
    correct: 0,
  },

  {
    question:
      "613) Quelle commande permet d'obtenir rapidement l'état des interfaces et leurs adresses IP sur un routeur Cisco ?",
    answers: [
      "a) show ip interface brief",
      "b) show route interface",
      "c) show network brief",
      "d) show interfaces ip",
    ],
    correct: 0,
  },

  {
    question:
      "614) Dans `show ip interface brief`, que signifie généralement l'état `up/up` ?",
    answers: [
      "a) Interface administrativement et opérationnellement active",
      "b) Interface désactivée",
      "c) Interface sans adresse IP",
      "d) Interface uniquement en mode configuration",
    ],
    correct: 0,
  },

  {
    question:
      "615) Dans `show ip interface brief`, que signifie généralement `administratively down/down` ?",
    answers: [
      "a) L'interface est désactivée administrativement",
      "b) Le protocole OSPF est actif",
      "c) Le câble fonctionne parfaitement",
      "d) L'interface est un trunk",
    ],
    correct: 0,
  },

  {
    question:
      "616) Si une interface Cisco est `down/down` sans être administrativement désactivée, quelle cause est possible ?",
    answers: [
      "a) Un problème physique ou de liaison",
      "b) Une route par défaut correcte",
      "c) Un serveur DNS actif",
      "d) Une ACL vide",
    ],
    correct: 0,
  },

  {
    question:
      "617) Quelle commande Cisco permet d'afficher les détails et statistiques des interfaces ?",
    answers: [
      "a) show interfaces",
      "b) show ports only",
      "c) show network statistics",
      "d) show interface-summary",
    ],
    correct: 0,
  },

  {
    question:
      "618) Quel compteur peut indiquer des erreurs détectées sur une interface Ethernet Cisco ?",
    answers: ["a) CRC", "b) DNS", "c) DHCP", "d) TTL"],
    correct: 0,
  },

  {
    question:
      "619) Des erreurs CRC nombreuses sur une interface Ethernet peuvent indiquer notamment :",
    answers: [
      "a) Un problème physique, de câble ou d'interférences",
      "b) Une mauvaise résolution DNS uniquement",
      "c) Une erreur de nom d'hôte uniquement",
      "d) Une mauvaise configuration SMTP",
    ],
    correct: 0,
  },

  {
    question:
      "620) Quelle commande Cisco affiche les entrées ARP connues du routeur ?",
    answers: [
      "a) show arp",
      "b) show mac arp",
      "c) show ip mac",
      "d) show address-resolution",
    ],
    correct: 0,
  },

  {
    question:
      "621) Quelle commande Cisco affiche la table d'adresses MAC d'un switch ?",
    answers: [
      "a) show mac address-table",
      "b) show ip mac-table",
      "c) show arp table",
      "d) show ethernet addresses",
    ],
    correct: 0,
  },

  {
    question:
      "622) Une entrée dans la table MAC d'un switch associe principalement :",
    answers: [
      "a) Une adresse MAC à un port",
      "b) Une adresse IP à un port TCP",
      "c) Un nom DNS à une adresse IP",
      "d) Un VLAN à une adresse DNS",
    ],
    correct: 0,
  },

  {
    question:
      "623) Quelle commande Cisco affiche les VLAN configurés avec un résumé des ports associés ?",
    answers: [
      "a) show vlan brief",
      "b) show ip vlan",
      "c) show vlan route",
      "d) show switch vlan-summary",
    ],
    correct: 0,
  },

  {
    question:
      "624) Quelle commande Cisco permet généralement de vérifier les informations de trunking ?",
    answers: [
      "a) show interfaces trunk",
      "b) show trunking ip",
      "c) show vlan trunk-ip",
      "d) show interfaces vlan-only",
    ],
    correct: 0,
  },

  {
    question:
      "625) Quelle commande Cisco permet généralement de vérifier les paramètres switchport d'une interface ?",
    answers: [
      "a) show interfaces switchport",
      "b) show switchport ip",
      "c) show port protocol",
      "d) show ethernet switch",
    ],
    correct: 0,
  },

  {
    question:
      "626) Quelle commande Cisco permet d'afficher les informations de voisinage CDP ?",
    answers: [
      "a) show cdp neighbors",
      "b) show neighbors cdp-ip",
      "c) show discovery",
      "d) show network neighbors",
    ],
    correct: 0,
  },

  {
    question: "627) CDP est principalement un protocole :",
    answers: [
      "a) Propriétaire Cisco de découverte de voisins",
      "b) De résolution DNS",
      "c) De routage inter-domaine",
      "d) De chiffrement VPN",
    ],
    correct: 0,
  },

  {
    question:
      "628) Quel protocole standardisé peut être utilisé pour découvrir des voisins de réseau indépendamment du constructeur ?",
    answers: ["a) LLDP", "b) CDP uniquement", "c) FTP", "d) RIP"],
    correct: 0,
  },

  {
    question: "629) Que signifie LLDP ?",
    answers: [
      "a) Link Layer Discovery Protocol",
      "b) Local Link Data Protocol",
      "c) LAN Layer Distribution Protocol",
      "d) Link Load Detection Protocol",
    ],
    correct: 0,
  },

  {
    question:
      "630) Quelle commande Cisco permet d'afficher les protocoles de routage actifs et leurs paramètres ?",
    answers: [
      "a) show ip protocols",
      "b) show route protocols-only",
      "c) show routing active",
      "d) show ip routing-protocol",
    ],
    correct: 0,
  },

  {
    question:
      "631) Quelle commande permet de vérifier la présence d'une route vers une destination donnée ?",
    answers: [
      "a) show ip route",
      "b) show ip dns",
      "c) show route arp",
      "d) show forwarding only",
    ],
    correct: 0,
  },

  {
    question:
      "632) Une route statique configurée avec un next-hop inaccessible peut-elle être installée ou utilisée correctement ?",
    answers: [
      "a) Oui, toujours",
      "b) Non, la résolution/atteignabilité du next-hop est nécessaire selon le type de configuration",
      "c) Oui, mais seulement avec DNS",
      "d) Oui, uniquement en IPv6",
    ],
    correct: 1,
  },

  {
    question:
      "633) Quelle route est utilisée lorsqu'une destination ne correspond à aucune route plus spécifique et qu'une route par défaut existe ?",
    answers: [
      "a) La route par défaut",
      "b) La route loopback",
      "c) La route broadcast",
      "d) La route ARP",
    ],
    correct: 0,
  },

  {
    question: "634) Quelle adresse représente la route IPv4 par défaut ?",
    answers: [
      "a) 127.0.0.0/8",
      "b) 255.255.255.255/32",
      "c) 0.0.0.0/0",
      "d) 224.0.0.0/4",
    ],
    correct: 2,
  },

  {
    question: "635) Quel est le rôle d'une route de secours dans un réseau ?",
    answers: [
      "a) Fournir un chemin alternatif en cas de défaillance du chemin principal",
      "b) Remplacer le DNS",
      "c) Empêcher tous les broadcasts",
      "d) Désactiver STP",
    ],
    correct: 0,
  },

  {
    question:
      "636) Dans un routeur, deux routes vers le même préfixe sont proposées par deux protocoles différents. Quel critère est généralement examiné en premier pour choisir la source de routage ?",
    answers: [
      "a) La distance administrative",
      "b) Le nom du routeur",
      "c) Le SSID",
      "d) Le numéro de port HTTP",
    ],
    correct: 0,
  },

  {
    question:
      "637) Si deux chemins provenant du même protocole de routage sont comparés, quel élément est généralement utilisé pour choisir le meilleur chemin ?",
    answers: [
      "a) La métrique du protocole",
      "b) Le nom DNS",
      "c) L'adresse MAC du client",
      "d) Le type de câble uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "638) Quelle commande Cisco permet de configurer OSPF avec un processus local donné ?",
    answers: [
      "a) router ospf <process-id>",
      "b) ospf enable <process-id>",
      "c) routing ospf-start",
      "d) protocol ospf <process-id>",
    ],
    correct: 0,
  },

  {
    question:
      "639) Dans une configuration OSPF Cisco classique, la commande `network` sert notamment à :",
    answers: [
      "a) Indiquer les réseaux/interfaces concernés par OSPF et leur zone",
      "b) Configurer le serveur DNS",
      "c) Définir une adresse MAC",
      "d) Configurer le VLAN natif",
    ],
    correct: 0,
  },

  {
    question:
      "640) Quelle zone OSPF est généralement utilisée comme backbone ?",
    answers: ["a) Area 0", "b) Area 1", "c) Area 100", "d) Area 255"],
    correct: 0,
  },

  {
    question:
      "641) Quelle commande Cisco permet de vérifier les voisins OSPF ?",
    answers: [
      "a) show ip ospf neighbor",
      "b) show ospf neighbors-only",
      "c) show ip neighbor ospf",
      "d) show routing ospf-neighbor",
    ],
    correct: 0,
  },

  {
    question:
      "642) Si deux routeurs OSPF ne deviennent pas voisins, quel élément doit notamment être vérifié ?",
    answers: [
      "a) La zone OSPF, les paramètres Hello/Dead et l'accessibilité entre interfaces",
      "b) Le mot de passe Wi-Fi du PC uniquement",
      "c) Le serveur FTP uniquement",
      "d) Le nom DNS du routeur uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "643) Quel protocole de routage utilise des messages périodiques pour annoncer les routes selon le principe du vecteur de distance ?",
    answers: ["a) RIP", "b) OSPF", "c) BGP", "d) STP"],
    correct: 0,
  },

  {
    question:
      "644) Quel mécanisme RIP aide à empêcher certaines boucles de routage en n'annonçant pas une route vers une interface par laquelle elle a été apprise ?",
    answers: [
      "a) Split horizon",
      "b) PortFast",
      "c) NAT overload",
      "d) DHCP relay",
    ],
    correct: 0,
  },

  {
    question: "645) Quelle commande Cisco permet de configurer RIP version 2 ?",
    answers: [
      "a) router rip puis version 2",
      "b) router rip2",
      "c) routing rip v2",
      "d) enable rip-version2",
    ],
    correct: 0,
  },

  {
    question: "646) Quel avantage RIPv2 possède-t-il par rapport à RIPv1 ?",
    answers: [
      "a) Il supporte le routage classless avec transmission du masque",
      "b) Il remplace OSPF",
      "c) Il fonctionne uniquement en IPv6",
      "d) Il utilise l'adresse MAC pour router",
    ],
    correct: 0,
  },

  {
    question:
      "647) Quelle commande Cisco permet de vérifier la configuration et l'état des ACL appliquées sur les interfaces ?",
    answers: [
      "a) show access-lists",
      "b) show firewall interfaces-only",
      "c) show ip security",
      "d) show acl status",
    ],
    correct: 0,
  },

  {
    question:
      "648) Dans une ACL Cisco, l'ordre des entrées est important parce que :",
    answers: [
      "a) Les entrées sont évaluées séquentiellement et la première correspondance détermine l'action",
      "b) Toutes les entrées sont toujours évaluées avant décision",
      "c) Seule la dernière ligne est utilisée",
      "d) L'ordre est uniquement esthétique",
    ],
    correct: 0,
  },

  {
    question:
      "649) Quelle erreur de conception d'ACL peut accidentellement bloquer tout le trafic autorisé ?",
    answers: [
      "a) Placer une règle deny trop générale avant une règle permit plus spécifique",
      "b) Utiliser un commentaire",
      "c) Sauvegarder la configuration",
      "d) Utiliser une adresse IP source valide",
    ],
    correct: 0,
  },

  {
    question:
      "650) Pour diagnostiquer méthodiquement une panne réseau, quelle approche est généralement la plus appropriée ?",
    answers: [
      "a) Vérifier progressivement la couche physique, la configuration IP, la passerelle, le routage, puis les services",
      "b) Modifier toutes les configurations simultanément",
      "c) Redémarrer tous les équipements sans diagnostic",
      "d) Changer immédiatement toutes les adresses IP",
    ],
    correct: 0,
  },
  {
    question:
      "651) Quelle attaque consiste à envoyer de fausses réponses ARP afin d'associer sa propre adresse MAC à l'adresse IP d'une autre machine ?",
    answers: [
      "a) ARP spoofing",
      "b) DNS tunneling",
      "c) SYN flooding",
      "d) Port scanning",
    ],
    correct: 0,
  },

  {
    question: "652) Quel est un risque important de l'ARP spoofing ?",
    answers: [
      "a) L'interception du trafic",
      "b) L'augmentation automatique de la bande passante",
      "c) La création de nouveaux VLAN",
      "d) La désactivation du DNS mondial",
    ],
    correct: 0,
  },

  {
    question:
      "653) Quelle fonctionnalité Cisco peut aider à protéger un réseau contre certaines attaques ARP spoofing lorsqu'elle est correctement configurée avec DHCP Snooping ?",
    answers: [
      "a) Dynamic ARP Inspection",
      "b) PortFast",
      "c) EtherChannel",
      "d) CDP",
    ],
    correct: 0,
  },

  {
    question:
      "654) Que signifie DAI dans le contexte de sécurité des switches Cisco ?",
    answers: [
      "a) Dynamic ARP Inspection",
      "b) Dynamic Access Internet",
      "c) Data ARP Integration",
      "d) Distributed Access Interface",
    ],
    correct: 0,
  },

  {
    question:
      "655) Quel mécanisme fournit à Dynamic ARP Inspection des informations permettant notamment de valider les associations IP-MAC ?",
    answers: ["a) DHCP Snooping", "b) STP", "c) DNS", "d) FTP"],
    correct: 0,
  },

  {
    question:
      "656) Quel est le rôle principal de DHCP Snooping sur un switch ?",
    answers: [
      "a) Contrôler les messages DHCP et identifier les ports de confiance",
      "b) Chiffrer tous les paquets",
      "c) Remplacer DHCP",
      "d) Configurer OSPF",
    ],
    correct: 0,
  },

  {
    question: "657) Qu'est-ce qu'un rogue DHCP server ?",
    answers: [
      "a) Un serveur DHCP non autorisé sur le réseau",
      "b) Un serveur DNS sécurisé",
      "c) Un routeur OSPF",
      "d) Un switch configuré en trunk",
    ],
    correct: 0,
  },

  {
    question:
      "658) Quel problème peut provoquer un serveur DHCP non autorisé ?",
    answers: [
      "a) Distribuer de mauvaises adresses IP ou passerelles aux clients",
      "b) Augmenter la sécurité du réseau",
      "c) Améliorer la résolution DNS",
      "d) Réduire automatiquement le nombre de VLAN",
    ],
    correct: 0,
  },

  {
    question:
      "659) Quelle attaque consiste à envoyer un grand nombre de demandes DHCP afin d'épuiser les adresses disponibles ?",
    answers: [
      "a) DHCP starvation",
      "b) ARP poisoning",
      "c) DNS spoofing",
      "d) VLAN hopping",
    ],
    correct: 0,
  },

  {
    question:
      "660) Quelle mesure peut contribuer à limiter les attaques DHCP starvation sur un switch ?",
    answers: [
      "a) DHCP Snooping et limitation du nombre de requêtes DHCP selon la configuration",
      "b) Désactiver STP",
      "c) Utiliser uniquement FTP",
      "d) Désactiver toutes les ACL",
    ],
    correct: 0,
  },

  {
    question: "661) Quel est l'objectif du port security sur un switch Cisco ?",
    answers: [
      "a) Contrôler les adresses MAC autorisées sur un port",
      "b) Configurer les routes OSPF",
      "c) Attribuer des adresses DNS",
      "d) Chiffrer les paquets IP",
    ],
    correct: 0,
  },

  {
    question:
      "662) Que peut faire un switch lorsqu'une violation de port-security est détectée, selon le mode configuré ?",
    answers: [
      "a) Bloquer ou limiter le trafic provenant d'adresses MAC non autorisées",
      "b) Modifier automatiquement toutes les adresses IP",
      "c) Désactiver DNS sur Internet",
      "d) Transformer le port en routeur",
    ],
    correct: 0,
  },

  {
    question:
      "663) Quelle attaque cherche à exploiter la table MAC d'un switch en envoyant un très grand nombre d'adresses MAC différentes ?",
    answers: [
      "a) MAC flooding",
      "b) DNS poisoning",
      "c) DHCP relay",
      "d) SYN-ACK",
    ],
    correct: 0,
  },

  {
    question:
      "664) Quel peut être l'effet d'une attaque MAC flooding réussie ?",
    answers: [
      "a) Le switch peut être amené à diffuser davantage de trames inconnues",
      "b) Le switch devient automatiquement un routeur",
      "c) DHCP est remplacé par DNS",
      "d) Les adresses IP deviennent des adresses MAC",
    ],
    correct: 0,
  },

  {
    question:
      "665) Quel mécanisme de sécurité peut limiter le nombre d'adresses MAC apprises sur un port ?",
    answers: ["a) Port Security", "b) OSPF", "c) NAT", "d) ICMP"],
    correct: 0,
  },

  {
    question:
      "666) Quelle attaque exploite des requêtes DNS falsifiées afin de rediriger un utilisateur vers une mauvaise adresse IP ?",
    answers: [
      "a) DNS cache poisoning",
      "b) ARP flooding",
      "c) DHCP starvation",
      "d) MAC learning",
    ],
    correct: 0,
  },

  {
    question:
      "667) Quel mécanisme de sécurité DNS permet notamment de vérifier cryptographiquement l'authenticité des données DNS ?",
    answers: ["a) DNSSEC", "b) DHCP Snooping", "c) STP", "d) NAT"],
    correct: 0,
  },

  {
    question: "668) DNSSEC fournit principalement :",
    answers: [
      "a) Une validation cryptographique de l'authenticité et de l'intégrité des données DNS",
      "b) Le chiffrement systématique de toutes les requêtes DNS",
      "c) Des adresses IP privées",
      "d) Une connexion VPN",
    ],
    correct: 0,
  },

  {
    question: "669) Quelle affirmation concernant DNSSEC est correcte ?",
    answers: [
      "a) DNSSEC ne remplace pas nécessairement le chiffrement des requêtes DNS",
      "b) DNSSEC remplace TCP",
      "c) DNSSEC est un protocole Wi-Fi",
      "d) DNSSEC attribue les adresses IP",
    ],
    correct: 0,
  },

  {
    question:
      "670) Quel protocole permet une administration distante sécurisée d'un équipement réseau via une connexion chiffrée ?",
    answers: ["a) SSH", "b) Telnet", "c) FTP non chiffré", "d) TFTP"],
    correct: 0,
  },

  {
    question: "671) Quel est le port TCP par défaut de SSH ?",
    answers: ["a) 21", "b) 22", "c) 23", "d) 25"],
    correct: 1,
  },

  {
    question:
      "672) Quel est le principal problème de sécurité de Telnet par rapport à SSH ?",
    answers: [
      "a) Telnet transmet les informations sans chiffrement",
      "b) Telnet ne fonctionne qu'en IPv6",
      "c) Telnet utilise uniquement UDP",
      "d) Telnet ne possède aucun numéro de port",
    ],
    correct: 0,
  },

  {
    question:
      "673) Quel protocole est préférable pour administrer à distance un routeur de manière sécurisée ?",
    answers: ["a) SSH", "b) Telnet", "c) FTP", "d) TFTP"],
    correct: 0,
  },

  {
    question:
      "674) Quel protocole peut être utilisé pour authentifier des utilisateurs réseau auprès d'un serveur central dans de nombreuses infrastructures ?",
    answers: ["a) RADIUS", "b) ARP", "c) ICMP", "d) STP"],
    correct: 0,
  },

  {
    question: "675) Que signifie RADIUS ?",
    answers: [
      "a) Remote Authentication Dial-In User Service",
      "b) Remote Address Dynamic Internet Service",
      "c) Routing Authentication Data Internet System",
      "d) Reliable Access Directory User Service",
    ],
    correct: 0,
  },

  {
    question:
      "676) Quel protocole est couramment associé à l'authentification centralisée dans les environnements réseau et Wi-Fi d'entreprise ?",
    answers: [
      "a) 802.1X",
      "b) 802.3af uniquement",
      "c) 802.11b uniquement",
      "d) ARP",
    ],
    correct: 0,
  },

  {
    question:
      "677) Dans une architecture 802.1X, quel composant demande généralement l'authentification de l'utilisateur ou du terminal ?",
    answers: [
      "a) Authenticator",
      "b) DNS server",
      "c) DHCP server uniquement",
      "d) Routeur Internet uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "678) Dans 802.1X, quel protocole est couramment utilisé pour transporter les messages d'authentification sur le lien entre le supplicant et l'authenticator ?",
    answers: ["a) EAPOL", "b) FTP", "c) ARP", "d) ICMP"],
    correct: 0,
  },

  {
    question: "679) Que signifie EAPOL ?",
    answers: [
      "a) Extensible Authentication Protocol over LAN",
      "b) Ethernet Access Protocol over Link",
      "c) Extended Address Protocol on LAN",
      "d) Enterprise Authentication Port over Layer",
    ],
    correct: 0,
  },

  {
    question:
      "680) Quel principe consiste à utiliser plusieurs mécanismes de sécurité complémentaires ?",
    answers: [
      "a) Défense en profondeur",
      "b) Routage statique",
      "c) Split horizon",
      "d) Broadcast flooding",
    ],
    correct: 0,
  },

  {
    question:
      "681) Quelle attaque consiste à envoyer un grand nombre de paquets SYN afin d'épuiser les ressources d'un serveur ?",
    answers: [
      "a) SYN flood",
      "b) ARP spoofing",
      "c) DNS poisoning",
      "d) DHCP relay",
    ],
    correct: 0,
  },

  {
    question: "682) Une attaque DDoS vise principalement à :",
    answers: [
      "a) Rendre un service ou une ressource indisponible en surchargeant ses ressources",
      "b) Attribuer des adresses IP privées",
      "c) Améliorer le routage",
      "d) Configurer automatiquement les VLAN",
    ],
    correct: 0,
  },

  {
    question: "683) Quelle différence caractérise généralement DoS et DDoS ?",
    answers: [
      "a) DDoS implique généralement plusieurs sources d'attaque",
      "b) DoS utilise obligatoirement IPv6",
      "c) DDoS ne concerne jamais les réseaux",
      "d) Il n'existe aucune différence",
    ],
    correct: 0,
  },

  {
    question:
      "684) Quel mécanisme peut limiter certains types d'attaques par déni de service en filtrant le trafic selon des règles ?",
    answers: ["a) Pare-feu/ACL", "b) DNS", "c) DHCP", "d) ARP uniquement"],
    correct: 0,
  },

  {
    question: "685) Quelle est la fonction principale d'une ACL réseau ?",
    answers: [
      "a) Autoriser ou refuser certains flux selon des critères définis",
      "b) Attribuer des adresses IP",
      "c) Résoudre les noms DNS",
      "d) Synchroniser les horloges uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "686) Dans une ACL IPv4 Cisco standard, quelle information est principalement examinée ?",
    answers: [
      "a) L'adresse IP source",
      "b) Le port TCP destination uniquement",
      "c) Le SSID",
      "d) L'adresse MAC uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "687) Dans une ACL IPv4 Cisco étendue, quel ensemble de critères peut notamment être utilisé ?",
    answers: [
      "a) Protocole, IP source, IP destination et ports",
      "b) Nom de domaine uniquement",
      "c) Adresse MAC uniquement",
      "d) VLAN natif uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "688) Quel wildcard mask correspond à un hôte unique dans une ACL IPv4 Cisco ?",
    answers: [
      "a) 0.0.0.0",
      "b) 255.255.255.255",
      "c) 255.255.255.0",
      "d) 0.0.0.255",
    ],
    correct: 0,
  },

  {
    question:
      "689) Dans une ACL Cisco, le mot-clé `host` permet généralement de désigner :",
    answers: [
      "a) Une seule adresse IPv4",
      "b) Un réseau /24 uniquement",
      "c) Tous les réseaux",
      "d) Une adresse MAC",
    ],
    correct: 0,
  },

  {
    question:
      "690) Dans une ACL Cisco, le mot-clé `any` représente généralement :",
    answers: [
      "a) Toutes les adresses",
      "b) Une seule adresse",
      "c) Le réseau local uniquement",
      "d) Le serveur DNS",
    ],
    correct: 0,
  },

  {
    question: "691) Quel wildcard mask correspond au réseau 192.168.10.0/24 ?",
    answers: [
      "a) 255.255.255.0",
      "b) 0.0.0.255",
      "c) 0.0.255.255",
      "d) 255.255.0.255",
    ],
    correct: 1,
  },

  {
    question: "692) Quel wildcard mask correspond à un réseau /26 ?",
    answers: ["a) 0.0.0.63", "b) 0.0.0.31", "c) 0.0.0.127", "d) 0.0.0.255"],
    correct: 0,
  },

  {
    question:
      "693) Une ACL contient d'abord `deny` pour un réseau entier puis `permit` pour un hôte appartenant à ce réseau. Que se passe-t-il pour cet hôte ?",
    answers: [
      "a) Il est refusé car la première règle correspond",
      "b) Il est autorisé par la deuxième règle",
      "c) Les deux règles sont combinées",
      "d) Le routeur choisit aléatoirement",
    ],
    correct: 0,
  },

  {
    question:
      "694) Quel est le principe de traitement des ACE dans une ACL Cisco ?",
    answers: [
      "a) Elles sont évaluées dans l'ordre jusqu'à la première correspondance",
      "b) Elles sont toutes évaluées puis additionnées",
      "c) Seule la dernière ACE est utilisée",
      "d) L'ordre n'a aucune importance",
    ],
    correct: 0,
  },

  {
    question:
      "695) Que signifie le « implicit deny » à la fin d'une ACL Cisco ?",
    answers: [
      "a) Le trafic qui ne correspond à aucune ACE explicite est refusé",
      "b) Tout le trafic est automatiquement autorisé",
      "c) Seul le trafic DNS est refusé",
      "d) Seules les adresses MAC sont bloquées",
    ],
    correct: 0,
  },

  {
    question: "696) Quel est le rôle de NAT dans un réseau IPv4 ?",
    answers: [
      "a) Traduire des adresses IP entre différents espaces d'adressage",
      "b) Chiffrer les communications",
      "c) Remplacer le routage",
      "d) Remplacer le DNS",
    ],
    correct: 0,
  },

  {
    question: "697) Avec PAT, plusieurs hôtes privés peuvent partager :",
    answers: [
      "a) Une même adresse IPv4 publique en utilisant des numéros de ports différents",
      "b) Une même adresse MAC",
      "c) Un même nom DNS obligatoire",
      "d) Un même VLAN uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "698) Quel problème peut être rencontré avec certaines applications lorsqu'un NAT est utilisé ?",
    answers: [
      "a) Certaines informations d'adressage intégrées dans les données peuvent nécessiter des mécanismes particuliers pour traverser le NAT",
      "b) ARP devient toujours impossible",
      "c) Ethernet ne fonctionne plus",
      "d) TCP ne peut jamais fonctionner",
    ],
    correct: 0,
  },

  {
    question:
      "699) Quel type de VPN permet généralement de connecter deux réseaux d'entreprise de manière sécurisée à travers Internet ?",
    answers: [
      "a) Site-to-site VPN",
      "b) Remote desktop uniquement",
      "c) VLAN VPN",
      "d) DNS VPN",
    ],
    correct: 0,
  },

  {
    question:
      "700) Quel élément doit notamment être vérifié lorsqu'un VPN site-to-site ne fonctionne pas ?",
    answers: [
      "a) La connectivité entre les pairs, les paramètres du tunnel et les règles de sécurité",
      "b) Le fond d'écran des postes",
      "c) Le nom du fichier PDF",
      "d) Le SSID d'un réseau totalement indépendant",
    ],
    correct: 0,
  },
  {
    question:
      "701) Dans le modèle OSI, quelle couche est responsable du routage logique des paquets ?",
    answers: ["a) Couche 1", "b) Couche 2", "c) Couche 3", "d) Couche 4"],
    correct: 2,
  },

  {
    question:
      "702) Dans le modèle OSI, quelle couche est associée aux adresses MAC et aux trames Ethernet ?",
    answers: ["a) Couche 1", "b) Couche 2", "c) Couche 3", "d) Couche 7"],
    correct: 1,
  },

  {
    question:
      "703) Quelle couche OSI fournit principalement les services de communication de bout en bout et utilise les ports TCP/UDP ?",
    answers: ["a) Couche 2", "b) Couche 3", "c) Couche 4", "d) Couche 6"],
    correct: 2,
  },

  {
    question:
      "704) Quelle couche OSI est directement associée aux câbles, connecteurs et signaux électriques ou optiques ?",
    answers: ["a) Couche 1", "b) Couche 2", "c) Couche 3", "d) Couche 5"],
    correct: 0,
  },

  {
    question:
      "705) Quelle couche OSI est associée aux protocoles tels que HTTP, DNS et SMTP ?",
    answers: ["a) Couche 2", "b) Couche 3", "c) Couche 4", "d) Couche 7"],
    correct: 3,
  },

  {
    question:
      "706) Dans le modèle OSI, comment appelle-t-on généralement l'unité de données de la couche réseau ?",
    answers: ["a) Trame", "b) Paquet", "c) Segment", "d) Bit"],
    correct: 1,
  },

  {
    question:
      "707) Dans le modèle OSI, comment appelle-t-on généralement l'unité de données de TCP ?",
    answers: ["a) Segment", "b) Trame", "c) Paquet", "d) Bit"],
    correct: 0,
  },

  {
    question:
      "708) Dans le modèle OSI, comment appelle-t-on généralement l'unité de données d'Ethernet ?",
    answers: ["a) Segment", "b) Paquet", "c) Trame", "d) Message DNS"],
    correct: 2,
  },

  {
    question:
      "709) Quelle est l'unité de données associée à la couche physique ?",
    answers: ["a) Segment", "b) Paquet", "c) Trame", "d) Bits"],
    correct: 3,
  },

  {
    question:
      "710) Quel phénomène décrit l'ajout successif d'en-têtes aux données lors de leur transmission à travers les couches réseau ?",
    answers: [
      "a) Encapsulation",
      "b) Fragmentation DNS",
      "c) Translation",
      "d) Compression ARP",
    ],
    correct: 0,
  },

  {
    question:
      "711) Lorsqu'un paquet reçu remonte les couches du destinataire et que les en-têtes sont retirés, on parle de :",
    answers: [
      "a) Encapsulation",
      "b) Décapsulation",
      "c) Routage",
      "d) Fragmentation",
    ],
    correct: 1,
  },

  {
    question:
      "712) Dans une communication TCP/IP, quelle couche ajoute généralement les numéros de port ?",
    answers: [
      "a) Accès réseau",
      "b) Internet",
      "c) Transport",
      "d) Application",
    ],
    correct: 2,
  },

  {
    question:
      "713) Dans le modèle TCP/IP, IP appartient principalement à la couche :",
    answers: [
      "a) Application",
      "b) Transport",
      "c) Internet",
      "d) Accès réseau",
    ],
    correct: 2,
  },

  {
    question:
      "714) Dans le modèle TCP/IP, TCP et UDP appartiennent à la couche :",
    answers: [
      "a) Application",
      "b) Transport",
      "c) Internet",
      "d) Accès réseau",
    ],
    correct: 1,
  },

  {
    question: "715) Dans le modèle TCP/IP, HTTP appartient à la couche :",
    answers: [
      "a) Application",
      "b) Transport",
      "c) Internet",
      "d) Accès réseau",
    ],
    correct: 0,
  },

  {
    question:
      "716) Quelle adresse identifie une interface réseau au niveau Ethernet ?",
    answers: [
      "a) Adresse IP",
      "b) Adresse MAC",
      "c) Port TCP",
      "d) Numéro de VLAN uniquement",
    ],
    correct: 1,
  },

  {
    question: "717) Une adresse MAC Ethernet classique contient :",
    answers: ["a) 16 bits", "b) 32 bits", "c) 48 bits", "d) 128 bits"],
    correct: 2,
  },

  {
    question: "718) Une adresse IPv4 contient :",
    answers: ["a) 16 bits", "b) 32 bits", "c) 48 bits", "d) 128 bits"],
    correct: 1,
  },

  {
    question: "719) Une adresse IPv6 contient :",
    answers: ["a) 32 bits", "b) 64 bits", "c) 96 bits", "d) 128 bits"],
    correct: 3,
  },

  {
    question: "720) Combien d'octets composent une adresse IPv4 ?",
    answers: ["a) 2", "b) 4", "c) 6", "d) 16"],
    correct: 1,
  },

  {
    question: "721) Quelle écriture représente correctement une adresse IPv4 ?",
    answers: [
      "a) 192.168.1.10",
      "b) 192:168:1:10",
      "c) 192-168-1-10-5",
      "d) 2001:db8::1",
    ],
    correct: 0,
  },

  {
    question: "722) Quelle écriture représente correctement une adresse IPv6 ?",
    answers: [
      "a) 192.168.1.1",
      "b) 255.255.255.0",
      "c) 2001:db8::10",
      "d) 10.0.0.1",
    ],
    correct: 2,
  },

  {
    question:
      "723) Quel caractère est utilisé pour séparer les groupes hexadécimaux d'une adresse IPv6 ?",
    answers: [
      "a) Le point",
      "b) Le deux-points",
      "c) Le point-virgule",
      "d) Le slash uniquement",
    ],
    correct: 1,
  },

  {
    question:
      "724) Quelle notation permet de compresser une suite de groupes IPv6 contenant uniquement des zéros ?",
    answers: ["a) //", "b) ::", "c) 00", "d) ##"],
    correct: 1,
  },

  {
    question:
      "725) Combien de fois `::` peut-on utiliser dans une adresse IPv6 compressée ?",
    answers: [
      "a) Une seule fois",
      "b) Deux fois",
      "c) Trois fois",
      "d) Autant de fois que nécessaire",
    ],
    correct: 0,
  },

  {
    question: "726) Quelle adresse IPv6 représente l'adresse non spécifiée ?",
    answers: ["a) ::", "b) ::1", "c) FF02::1", "d) FE80::1"],
    correct: 0,
  },

  {
    question: "727) Quelle adresse IPv6 représente le loopback ?",
    answers: ["a) ::", "b) ::1", "c) FF00::1", "d) FE80::1"],
    correct: 1,
  },

  {
    question: "728) Quelle plage IPv6 correspond aux adresses link-local ?",
    answers: ["a) FE80::/10", "b) FF00::/8", "c) FC00::/7", "d) 2000::/3"],
    correct: 0,
  },

  {
    question:
      "729) Quelle plage IPv6 est utilisée pour les adresses multicast ?",
    answers: ["a) FE80::/10", "b) FC00::/7", "c) FF00::/8", "d) 2000::/3"],
    correct: 2,
  },

  {
    question:
      "730) Quelle plage IPv6 est utilisée pour les adresses global unicast courantes ?",
    answers: ["a) 2000::/3", "b) FF00::/8", "c) FE80::/10", "d) FC00::/7"],
    correct: 0,
  },

  {
    question: "731) Quelle plage IPv4 est destinée au multicast ?",
    answers: [
      "a) 127.0.0.0/8",
      "b) 224.0.0.0/4",
      "c) 169.254.0.0/16",
      "d) 192.168.0.0/16",
    ],
    correct: 1,
  },

  {
    question: "732) Quelle adresse IPv4 représente le broadcast limité ?",
    answers: [
      "a) 0.0.0.0",
      "b) 127.0.0.1",
      "c) 255.255.255.255",
      "d) 224.0.0.1",
    ],
    correct: 2,
  },

  {
    question:
      "733) Que signifie une adresse IPv4 de destination 255.255.255.255 ?",
    answers: [
      "a) Broadcast limité sur le réseau local",
      "b) Adresse loopback",
      "c) Adresse multicast",
      "d) Adresse privée",
    ],
    correct: 0,
  },

  {
    question:
      "734) Quelle adresse IPv4 représente généralement l'adresse « non spécifiée » ?",
    answers: [
      "a) 0.0.0.0",
      "b) 127.0.0.1",
      "c) 255.255.255.255",
      "d) 169.254.0.1",
    ],
    correct: 0,
  },

  {
    question:
      "735) Quelle adresse IPv4 est utilisée comme destination dans de nombreux messages DHCP initiaux ?",
    answers: [
      "a) 127.0.0.1",
      "b) 255.255.255.255",
      "c) 224.0.0.1",
      "d) 8.8.8.8",
    ],
    correct: 1,
  },

  {
    question:
      "736) Quel est le rôle principal d'un masque de sous-réseau IPv4 ?",
    answers: [
      "a) Déterminer la partie réseau et la partie hôte d'une adresse",
      "b) Chiffrer les paquets",
      "c) Identifier le serveur DNS",
      "d) Identifier le port TCP",
    ],
    correct: 0,
  },

  {
    question: "737) Quel masque correspond au préfixe /25 ?",
    answers: [
      "a) 255.255.255.0",
      "b) 255.255.255.128",
      "c) 255.255.255.192",
      "d) 255.255.255.224",
    ],
    correct: 1,
  },

  {
    question: "738) Quel masque correspond au préfixe /26 ?",
    answers: [
      "a) 255.255.255.128",
      "b) 255.255.255.192",
      "c) 255.255.255.224",
      "d) 255.255.255.240",
    ],
    correct: 1,
  },

  {
    question: "739) Quel masque correspond au préfixe /23 ?",
    answers: [
      "a) 255.255.254.0",
      "b) 255.255.252.0",
      "c) 255.255.255.0",
      "d) 255.255.248.0",
    ],
    correct: 0,
  },

  {
    question: "740) Combien d'adresses totales contient un réseau /23 ?",
    answers: ["a) 256", "b) 512", "c) 1024", "d) 2048"],
    correct: 1,
  },

  {
    question:
      "741) Combien d'hôtes sont généralement utilisables dans un réseau IPv4 /23 classique ?",
    answers: ["a) 510", "b) 512", "c) 511", "d) 508"],
    correct: 0,
  },

  {
    question: "742) Quelle est l'adresse réseau de 192.168.5.130/25 ?",
    answers: [
      "a) 192.168.5.0",
      "b) 192.168.5.64",
      "c) 192.168.5.128",
      "d) 192.168.5.255",
    ],
    correct: 2,
  },

  {
    question: "743) Quelle est l'adresse de broadcast de 192.168.5.130/25 ?",
    answers: [
      "a) 192.168.5.127",
      "b) 192.168.5.128",
      "c) 192.168.5.254",
      "d) 192.168.5.255",
    ],
    correct: 3,
  },

  {
    question:
      "744) Quelle adresse est une adresse hôte valide dans le réseau 192.168.10.64/26 ?",
    answers: [
      "a) 192.168.10.64",
      "b) 192.168.10.65",
      "c) 192.168.10.127",
      "d) 192.168.10.128",
    ],
    correct: 1,
  },

  {
    question:
      "745) Quelle est l'adresse de broadcast du réseau 192.168.10.64/26 ?",
    answers: [
      "a) 192.168.10.63",
      "b) 192.168.10.95",
      "c) 192.168.10.127",
      "d) 192.168.10.255",
    ],
    correct: 2,
  },

  {
    question:
      "746) Quel protocole permet généralement de tester la connectivité IP avec une requête Echo ?",
    answers: ["a) ICMP", "b) ARP", "c) TCP", "d) DHCP"],
    correct: 0,
  },

  {
    question:
      "747) Quelle commande est généralement utilisée pour envoyer des requêtes ICMP Echo sous Windows ?",
    answers: ["a) ping", "b) route", "c) arp", "d) nslookup"],
    correct: 0,
  },

  {
    question:
      "748) Un ping vers une adresse IP fonctionne mais un ping vers son nom DNS échoue. Quelle cause est probable ?",
    answers: [
      "a) Un problème de résolution DNS",
      "b) Une panne obligatoire de la carte réseau",
      "c) Une panne obligatoire du câble",
      "d) Une absence totale de routage IP",
    ],
    correct: 0,
  },

  {
    question:
      "749) Un PC ne peut pas atteindre sa passerelle par défaut. Quelle catégorie de problème faut-il notamment examiner en priorité ?",
    answers: [
      "a) La connexion locale, l'adressage IP, le VLAN et la passerelle",
      "b) Le serveur Web distant uniquement",
      "c) Le protocole SMTP uniquement",
      "d) Le DNS public uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "750) Si plusieurs postes d'un même VLAN perdent simultanément la connectivité vers leur passerelle, quel élément commun doit être vérifié en priorité ?",
    answers: [
      "a) Le switch, le VLAN, le trunk ou l'interface de passerelle",
      "b) Le navigateur Web d'un seul utilisateur",
      "c) Le compte e-mail d'un utilisateur",
      "d) Le clavier des postes",
    ],
    correct: 0,
  },
  {
    question:
      "751) Quel protocole de routage est considéré comme un protocole à état de liens ?",
    answers: ["a) RIP", "b) OSPF", "c) BGP", "d) ARP"],
    correct: 1,
  },

  {
    question:
      "752) Quel protocole de routage utilise principalement le nombre de sauts comme métrique ?",
    answers: ["a) OSPF", "b) BGP", "c) RIP", "d) STP"],
    correct: 2,
  },

  {
    question: "753) Quelle métrique OSPF est principalement appelée :",
    answers: ["a) Hop count", "b) Cost", "c) Delay count", "d) Distance"],
    correct: 1,
  },

  {
    question:
      "754) Quel algorithme est utilisé par OSPF pour calculer l'arbre des meilleurs chemins ?",
    answers: ["a) Bellman-Ford", "b) Dijkstra SPF", "c) RSA", "d) AES"],
    correct: 1,
  },

  {
    question: "755) Que signifie SPF dans OSPF ?",
    answers: [
      "a) Shortest Path First",
      "b) Secure Packet Forwarding",
      "c) Simple Protocol Framework",
      "d) Standard Path Filtering",
    ],
    correct: 0,
  },

  {
    question:
      "756) Quel est le rôle principal d'un protocole de routage dynamique ?",
    answers: [
      "a) Découvrir et maintenir automatiquement des informations de routage",
      "b) Remplacer les adresses MAC",
      "c) Attribuer des adresses DHCP",
      "d) Chiffrer les trames Ethernet",
    ],
    correct: 0,
  },

  {
    question:
      "757) Quel avantage possède généralement le routage dynamique par rapport à un grand nombre de routes statiques ?",
    answers: [
      "a) Il peut adapter les routes aux changements de topologie",
      "b) Il ne nécessite aucune adresse IP",
      "c) Il fonctionne sans routeur",
      "d) Il supprime le besoin de masques",
    ],
    correct: 0,
  },

  {
    question: "758) Quel est un inconvénient possible du routage dynamique ?",
    answers: [
      "a) Il consomme des ressources CPU, mémoire et bande passante pour les échanges de routage",
      "b) Il ne peut jamais détecter une panne",
      "c) Il interdit les routes statiques",
      "d) Il fonctionne uniquement sur les réseaux Wi-Fi",
    ],
    correct: 0,
  },

  {
    question:
      "759) Quelle distance administrative est généralement associée à RIP sur Cisco IOS ?",
    answers: ["a) 1", "b) 90", "c) 110", "d) 120"],
    correct: 3,
  },

  {
    question:
      "760) Quelle distance administrative est généralement associée à OSPF sur Cisco IOS ?",
    answers: ["a) 1", "b) 90", "c) 110", "d) 120"],
    correct: 2,
  },

  {
    question:
      "761) Quelle distance administrative est généralement associée à une route statique Cisco ?",
    answers: ["a) 1", "b) 90", "c) 110", "d) 120"],
    correct: 0,
  },

  {
    question:
      "762) Si un routeur connaît deux routes vers le même préfixe provenant de sources différentes, quelle source possède généralement la priorité avec la plus petite distance administrative ?",
    answers: [
      "a) La source avec la plus grande distance administrative",
      "b) La source avec la plus petite distance administrative",
      "c) La source la plus ancienne",
      "d) La source ayant la plus grande adresse IP",
    ],
    correct: 1,
  },

  {
    question:
      "763) Si deux routes ont le même préfixe et proviennent du même protocole de routage, le routeur compare notamment :",
    answers: [
      "a) Leur métrique",
      "b) Leur SSID",
      "c) Leur adresse MAC de destination",
      "d) Leur serveur DNS",
    ],
    correct: 0,
  },

  {
    question:
      "764) Quel préfixe est plus spécifique entre 10.0.0.0/8 et 10.1.0.0/16 ?",
    answers: ["a) /8", "b) /16", "c) Les deux sont identiques", "d) Aucun"],
    correct: 1,
  },

  {
    question:
      "765) Pour une destination 10.1.2.5, si les routes 10.0.0.0/8 et 10.1.0.0/16 existent, laquelle est sélectionnée ?",
    answers: [
      "a) 10.0.0.0/8",
      "b) 10.1.0.0/16",
      "c) La route par défaut",
      "d) Aucune",
    ],
    correct: 1,
  },

  {
    question: "766) Quel est le but d'une route par défaut ?",
    answers: [
      "a) Fournir un chemin lorsqu'aucune route plus spécifique n'est disponible",
      "b) Remplacer toutes les routes connectées",
      "c) Bloquer le trafic inconnu",
      "d) Attribuer des adresses IP",
    ],
    correct: 0,
  },

  {
    question:
      "767) Quelle commande Cisco configure une route par défaut vers le next-hop 192.168.1.1 ?",
    answers: [
      "a) ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "b) default-route 192.168.1.1",
      "c) ip default 192.168.1.1",
      "d) route default-ip 192.168.1.1",
    ],
    correct: 0,
  },

  {
    question:
      "768) Une route statique possède une distance administrative configurée supérieure à celle d'un protocole dynamique. Elle peut servir de :",
    answers: [
      "a) Route de secours",
      "b) Route connectée",
      "c) Route broadcast",
      "d) Route ARP",
    ],
    correct: 0,
  },

  {
    question: "769) Quelle commande Cisco affiche les routes IPv6 ?",
    answers: [
      "a) show ipv6 route",
      "b) show ip route-v6",
      "c) show route ipv6-only",
      "d) show ipv6 routing-table",
    ],
    correct: 0,
  },

  {
    question:
      "770) Quel protocole de routage est conçu spécifiquement pour IPv6 et constitue l'évolution d'OSPFv2 ?",
    answers: ["a) OSPFv3", "b) RIPng uniquement", "c) BGPv4", "d) EIGRPv6"],
    correct: 0,
  },

  {
    question: "771) Que signifie OSPFv3 ?",
    answers: [
      "a) Une version d'OSPF prenant notamment en charge IPv6",
      "b) Une version de DNS",
      "c) Un protocole Wi-Fi",
      "d) Un protocole de transport",
    ],
    correct: 0,
  },

  {
    question:
      "772) Quel protocole correspond à une version de RIP adaptée à IPv6 ?",
    answers: ["a) RIPng", "b) RIPv1", "c) RIPv2", "d) RIP-IPv4"],
    correct: 0,
  },

  {
    question: "773) Que signifie RIPng ?",
    answers: [
      "a) Routing Information Protocol next generation",
      "b) Routing Internet Protocol network gateway",
      "c) Remote IP Protocol new gateway",
      "d) Rapid Internet Path Network",
    ],
    correct: 0,
  },

  {
    question: "774) Quelle affirmation concernant IPv6 est correcte ?",
    answers: [
      "a) IPv6 utilise obligatoirement ARP",
      "b) IPv6 utilise ICMPv6 Neighbor Discovery pour des fonctions de découverte de voisins",
      "c) IPv6 utilise des adresses de 32 bits",
      "d) IPv6 possède un broadcast équivalent à FF:FF:FF:FF:FF:FF",
    ],
    correct: 1,
  },

  {
    question:
      "775) Quel protocole IPv6 est utilisé pour les messages d'erreur et de contrôle ?",
    answers: [
      "a) ICMPv6",
      "b) ARPv6",
      "c) TCPv6 uniquement",
      "d) DHCPv6 uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "776) Quelle technologie IPv6 permet notamment à un hôte de configurer automatiquement son adresse à partir des informations annoncées par le routeur ?",
    answers: ["a) SLAAC", "b) NAT", "c) STP", "d) PAT"],
    correct: 0,
  },

  {
    question: "777) Que signifie SLAAC ?",
    answers: [
      "a) Stateless Address Autoconfiguration",
      "b) Secure LAN Address Access Control",
      "c) Static Local Address Configuration",
      "d) Simple Link Address Access Control",
    ],
    correct: 0,
  },

  {
    question:
      "778) Quel message ICMPv6 est utilisé par un routeur pour annoncer des informations de configuration aux hôtes ?",
    answers: [
      "a) Router Advertisement",
      "b) Router Reset",
      "c) Router Synchronization",
      "d) Route Discovery Request",
    ],
    correct: 0,
  },

  {
    question:
      "779) Quel message ICMPv6 est utilisé par un hôte pour solliciter rapidement une annonce de routeur ?",
    answers: [
      "a) Router Solicitation",
      "b) Router Advertisement",
      "c) Neighbor Advertisement",
      "d) Echo Request",
    ],
    correct: 0,
  },

  {
    question:
      "780) Quelle commande Cisco active globalement le routage IPv6 sur un routeur Cisco IOS classique ?",
    answers: [
      "a) ipv6 unicast-routing",
      "b) ipv6 routing enable",
      "c) enable ipv6 route",
      "d) ipv6 forwarding start",
    ],
    correct: 0,
  },

  {
    question: "781) Quel est le préfixe IPv6 des adresses link-local ?",
    answers: ["a) FE80::/10", "b) 2000::/3", "c) FF00::/8", "d) FC00::/7"],
    correct: 0,
  },

  {
    question: "782) Une adresse IPv6 commençant par FE80:: est généralement :",
    answers: [
      "a) Link-local",
      "b) Multicast",
      "c) Global unicast",
      "d) Loopback",
    ],
    correct: 0,
  },

  {
    question: "783) Quelle adresse IPv6 est une adresse multicast ?",
    answers: ["a) FE80::1", "b) 2001:db8::1", "c) FF02::1", "d) ::1"],
    correct: 2,
  },

  {
    question: "784) Quelle adresse IPv6 correspond au loopback ?",
    answers: ["a) ::", "b) ::1", "c) FF02::1", "d) FE80::1"],
    correct: 1,
  },

  {
    question: "785) Quelle est la taille maximale d'une adresse IPv6 en bits ?",
    answers: ["a) 32", "b) 64", "c) 96", "d) 128"],
    correct: 3,
  },

  {
    question:
      "786) Quelle est la taille habituelle du préfixe d'un sous-réseau IPv6 dans de nombreux réseaux locaux ?",
    answers: ["a) /24", "b) /48", "c) /64", "d) /128"],
    correct: 2,
  },

  {
    question:
      "787) Combien de bits restent pour l'identifiant d'interface dans un préfixe IPv6 /64 ?",
    answers: ["a) 32", "b) 48", "c) 64", "d) 128"],
    correct: 2,
  },

  {
    question:
      "788) Quelle adresse IPv4 appartient à un réseau privé RFC 1918 ?",
    answers: [
      "a) 11.0.0.1",
      "b) 172.20.5.10",
      "c) 192.0.2.10",
      "d) 198.51.100.10",
    ],
    correct: 1,
  },

  {
    question: "789) Quel réseau correspond à la plage privée 10.0.0.0/8 ?",
    answers: [
      "a) 10.0.0.0 à 10.255.255.255",
      "b) 10.0.0.0 à 10.0.255.255",
      "c) 10.10.0.0 à 10.10.255.255",
      "d) 10.0.0.0 à 10.127.255.255",
    ],
    correct: 0,
  },

  {
    question:
      "790) Quel préfixe correspond au réseau IPv4 192.168.0.0 avec le masque 255.255.255.0 ?",
    answers: ["a) /16", "b) /20", "c) /24", "d) /28"],
    correct: 2,
  },

  {
    question: "791) Quel préfixe correspond au masque 255.255.255.192 ?",
    answers: ["a) /24", "b) /25", "c) /26", "d) /27"],
    correct: 2,
  },

  {
    question: "792) Quel préfixe correspond au masque 255.255.255.248 ?",
    answers: ["a) /27", "b) /28", "c) /29", "d) /30"],
    correct: 2,
  },

  {
    question: "793) Combien d'adresses totales contient un réseau IPv4 /26 ?",
    answers: ["a) 32", "b) 64", "c) 128", "d) 256"],
    correct: 1,
  },

  {
    question:
      "794) Combien d'hôtes sont généralement utilisables dans un réseau IPv4 /26 classique ?",
    answers: ["a) 62", "b) 64", "c) 63", "d) 60"],
    correct: 0,
  },

  {
    question: "795) Quelle est l'adresse réseau de 192.168.20.70/26 ?",
    answers: [
      "a) 192.168.20.0",
      "b) 192.168.20.64",
      "c) 192.168.20.70",
      "d) 192.168.20.128",
    ],
    correct: 1,
  },

  {
    question:
      "796) Quelle est l'adresse de broadcast du réseau 192.168.20.64/26 ?",
    answers: [
      "a) 192.168.20.63",
      "b) 192.168.20.95",
      "c) 192.168.20.127",
      "d) 192.168.20.255",
    ],
    correct: 2,
  },

  {
    question:
      "797) Quelle plage d'adresses hôtes est valide pour le réseau 192.168.20.64/26 ?",
    answers: [
      "a) 192.168.20.64 à 192.168.20.127",
      "b) 192.168.20.65 à 192.168.20.126",
      "c) 192.168.20.66 à 192.168.20.127",
      "d) 192.168.20.1 à 192.168.20.62",
    ],
    correct: 1,
  },

  {
    question: "798) Quelle est l'adresse réseau de 172.16.35.10/20 ?",
    answers: [
      "a) 172.16.0.0",
      "b) 172.16.16.0",
      "c) 172.16.32.0",
      "d) 172.16.35.0",
    ],
    correct: 2,
  },

  {
    question:
      "799) Quelle est l'adresse de broadcast du réseau 172.16.32.0/20 ?",
    answers: [
      "a) 172.16.47.255",
      "b) 172.16.63.255",
      "c) 172.16.32.255",
      "d) 172.16.255.255",
    ],
    correct: 0,
  },

  {
    question:
      "800) Un poste possède une adresse IP correcte mais ne peut joindre aucune machine située sur un autre réseau. Quelle configuration est particulièrement importante à vérifier ?",
    answers: [
      "a) La passerelle par défaut",
      "b) Le nom du poste uniquement",
      "c) Le fond d'écran",
      "d) Le protocole FTP",
    ],
    correct: 0,
  },
  {
    question:
      "801) Quel protocole est principalement utilisé pour transférer des pages Web ?",
    answers: ["a) HTTP", "b) SMTP", "c) DHCP", "d) SNMP"],
    correct: 0,
  },

  {
    question:
      "802) Quel protocole est utilisé pour sécuriser les communications Web ?",
    answers: ["a) HTTP", "b) HTTPS", "c) FTP", "d) TFTP"],
    correct: 1,
  },

  {
    question: "803) Quel est le port TCP par défaut de HTTPS ?",
    answers: ["a) 21", "b) 22", "c) 80", "d) 443"],
    correct: 3,
  },

  {
    question: "804) Quel est le port TCP par défaut de HTTP ?",
    answers: ["a) 25", "b) 53", "c) 80", "d) 443"],
    correct: 2,
  },

  {
    question:
      "805) Quel protocole est utilisé pour l'administration distante sécurisée d'un serveur ou équipement réseau ?",
    answers: ["a) Telnet", "b) SSH", "c) FTP", "d) TFTP"],
    correct: 1,
  },

  {
    question: "806) Quel est le port TCP par défaut de SSH ?",
    answers: ["a) 20", "b) 21", "c) 22", "d) 23"],
    correct: 2,
  },

  {
    question:
      "807) Quel protocole permet une administration distante mais transmet traditionnellement les informations sans chiffrement ?",
    answers: ["a) SSH", "b) HTTPS", "c) Telnet", "d) SFTP"],
    correct: 2,
  },

  {
    question: "808) Quel est le port TCP par défaut de Telnet ?",
    answers: ["a) 21", "b) 22", "c) 23", "d) 25"],
    correct: 2,
  },

  {
    question:
      "809) Quel protocole est principalement utilisé pour envoyer des e-mails ?",
    answers: ["a) SMTP", "b) POP3", "c) IMAP", "d) DNS"],
    correct: 0,
  },

  {
    question: "810) Quel est le port TCP classique de SMTP ?",
    answers: ["a) 21", "b) 25", "c) 53", "d) 110"],
    correct: 1,
  },

  {
    question:
      "811) Quel protocole permet principalement de récupérer et synchroniser les e-mails sur le serveur ?",
    answers: ["a) IMAP", "b) SMTP", "c) FTP", "d) DHCP"],
    correct: 0,
  },

  {
    question: "812) Quel est le port TCP classique de IMAP ?",
    answers: ["a) 110", "b) 143", "c) 443", "d) 993"],
    correct: 1,
  },

  {
    question: "813) Quel port TCP est généralement associé à IMAPS ?",
    answers: ["a) 143", "b) 993", "c) 995", "d) 587"],
    correct: 1,
  },

  {
    question:
      "814) Quel protocole est principalement destiné au téléchargement des e-mails depuis un serveur ?",
    answers: ["a) POP3", "b) SMTP", "c) IMAP", "d) DNS"],
    correct: 0,
  },

  {
    question: "815) Quel est le port TCP classique de POP3 ?",
    answers: ["a) 53", "b) 80", "c) 110", "d) 143"],
    correct: 2,
  },

  {
    question: "816) Quel port TCP est généralement associé à POP3S ?",
    answers: ["a) 110", "b) 143", "c) 993", "d) 995"],
    correct: 3,
  },

  {
    question:
      "817) Quel protocole traduit principalement les noms de domaine en adresses IP ?",
    answers: ["a) DNS", "b) DHCP", "c) ARP", "d) ICMP"],
    correct: 0,
  },

  {
    question: "818) Quel est le port principal utilisé par DNS ?",
    answers: ["a) 23", "b) 53", "c) 67", "d) 161"],
    correct: 1,
  },

  {
    question:
      "819) Quel protocole attribue automatiquement des paramètres IP aux clients ?",
    answers: ["a) DNS", "b) DHCP", "c) HTTP", "d) SNMP"],
    correct: 1,
  },

  {
    question: "820) Quels ports UDP sont utilisés classiquement par DHCP ?",
    answers: ["a) 20 et 21", "b) 53 et 54", "c) 67 et 68", "d) 161 et 162"],
    correct: 2,
  },

  {
    question:
      "821) Quel protocole permet notamment de transférer des fichiers avec peu de mécanismes de sécurité et de contrôle, souvent utilisé dans certains environnements réseau ?",
    answers: ["a) TFTP", "b) HTTPS", "c) SSH", "d) IMAP"],
    correct: 0,
  },

  {
    question: "822) Quel port UDP est généralement associé à TFTP ?",
    answers: ["a) 53", "b) 69", "c) 80", "d) 161"],
    correct: 1,
  },

  {
    question:
      "823) Quel protocole permet de transférer des fichiers de manière sécurisée au-dessus de SSH ?",
    answers: ["a) TFTP", "b) SFTP", "c) FTP", "d) HTTP"],
    correct: 1,
  },

  {
    question:
      "824) Quel protocole de gestion réseau utilise généralement UDP 161 pour les requêtes SNMP ?",
    answers: ["a) SNMP", "b) SMTP", "c) SSH", "d) DHCP"],
    correct: 0,
  },

  {
    question: "825) Que signifie SNMP ?",
    answers: [
      "a) Simple Network Management Protocol",
      "b) Secure Network Messaging Protocol",
      "c) System Network Monitoring Process",
      "d) Simple Node Management Port",
    ],
    correct: 0,
  },

  {
    question: "826) Quel est le rôle principal de SNMP ?",
    answers: [
      "a) Superviser et gérer des équipements réseau",
      "b) Transférer des pages Web",
      "c) Attribuer des adresses IP",
      "d) Résoudre les noms DNS",
    ],
    correct: 0,
  },

  {
    question:
      "827) Quel port UDP est généralement utilisé par SNMP pour les requêtes ?",
    answers: ["a) 53", "b) 69", "c) 161", "d) 443"],
    correct: 2,
  },

  {
    question:
      "828) Quel port UDP est généralement utilisé par SNMP pour les traps ?",
    answers: ["a) 160", "b) 161", "c) 162", "d) 163"],
    correct: 2,
  },

  {
    question:
      "829) Quel protocole est utilisé pour synchroniser l'heure des équipements réseau ?",
    answers: ["a) NTP", "b) FTP", "c) ARP", "d) SMTP"],
    correct: 0,
  },

  {
    question: "830) Que signifie NTP ?",
    answers: [
      "a) Network Time Protocol",
      "b) Network Transport Process",
      "c) Node Transfer Protocol",
      "d) Network Terminal Protocol",
    ],
    correct: 0,
  },

  {
    question: "831) Quel est le port UDP classique utilisé par NTP ?",
    answers: ["a) 53", "b) 67", "c) 123", "d) 161"],
    correct: 2,
  },

  {
    question:
      "832) Pourquoi la synchronisation de l'heure est-elle importante en réseau ?",
    answers: [
      "a) Elle facilite notamment la corrélation des journaux et certains mécanismes d'authentification",
      "b) Elle remplace le DNS",
      "c) Elle attribue les adresses MAC",
      "d) Elle augmente automatiquement le débit",
    ],
    correct: 0,
  },

  {
    question:
      "833) Quelle technologie Ethernet utilise des adresses MAC pour identifier les interfaces ?",
    answers: ["a) Ethernet", "b) DNS", "c) DHCP", "d) OSPF"],
    correct: 0,
  },

  {
    question: "834) Quelle norme IEEE définit principalement Ethernet ?",
    answers: ["a) 802.11", "b) 802.1Q", "c) 802.3", "d) 802.15"],
    correct: 2,
  },

  {
    question: "835) Quelle norme IEEE est associée aux réseaux Wi-Fi ?",
    answers: ["a) 802.3", "b) 802.11", "c) 802.1Q", "d) 802.1D uniquement"],
    correct: 1,
  },

  {
    question:
      "836) Quelle norme IEEE est utilisée pour le marquage VLAN sur Ethernet ?",
    answers: ["a) 802.1Q", "b) 802.3", "c) 802.11ax", "d) 802.15.4"],
    correct: 0,
  },

  {
    question:
      "837) Quelle norme est associée au contrôle d'accès réseau basé sur l'authentification au niveau du port ?",
    answers: ["a) 802.1X", "b) 802.3u", "c) 802.11b", "d) 802.1Q"],
    correct: 0,
  },

  {
    question:
      "838) Quel protocole est utilisé pour éviter les boucles de niveau 2 ?",
    answers: ["a) STP", "b) DHCP", "c) DNS", "d) SMTP"],
    correct: 0,
  },

  {
    question:
      "839) Quelle norme IEEE est historiquement associée au STP classique ?",
    answers: ["a) 802.1D", "b) 802.1Q", "c) 802.3", "d) 802.11"],
    correct: 0,
  },

  {
    question:
      "840) Quelle technologie est utilisée pour agréger plusieurs liens physiques en un lien logique ?",
    answers: ["a) EtherChannel", "b) PortFast", "c) DHCP Snooping", "d) NAT"],
    correct: 0,
  },

  {
    question:
      "841) Quel protocole standard est utilisé pour négocier l'agrégation de liens ?",
    answers: ["a) LACP", "b) ARP", "c) ICMP", "d) RIP"],
    correct: 0,
  },

  {
    question: "842) Que signifie LACP ?",
    answers: [
      "a) Link Aggregation Control Protocol",
      "b) Local Access Control Protocol",
      "c) Link Address Configuration Protocol",
      "d) LAN Authentication Control Process",
    ],
    correct: 0,
  },

  {
    question:
      "843) Quel mode de port transporte généralement plusieurs VLAN entre des switches ?",
    answers: ["a) Access", "b) Trunk", "c) Console", "d) Loopback"],
    correct: 1,
  },

  {
    question:
      "844) Quel mode de port est généralement associé à un seul VLAN pour un terminal utilisateur ?",
    answers: ["a) Trunk", "b) Access", "c) Routed", "d) EtherChannel"],
    correct: 1,
  },

  {
    question: "845) Une trame provenant d'un port access est généralement :",
    answers: [
      "a) Associée au VLAN configuré sur ce port",
      "b) Toujours envoyée à tous les VLAN",
      "c) Toujours une trame IPv6",
      "d) Toujours chiffrée",
    ],
    correct: 0,
  },

  {
    question:
      "846) Quel équipement sépare les domaines de broadcast en fonction de ses interfaces de couche 3 ?",
    answers: [
      "a) Routeur",
      "b) Hub",
      "c) Répéteur",
      "d) Pont transparent uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "847) Un switch de couche 2 sépare-t-il normalement les domaines de broadcast entre ses ports appartenant au même VLAN ?",
    answers: [
      "a) Oui, chaque port constitue toujours un domaine de broadcast",
      "b) Non, les ports du même VLAN appartiennent normalement au même domaine de broadcast",
      "c) Oui, mais uniquement avec IPv6",
      "d) Oui, si DHCP est activé",
    ],
    correct: 1,
  },

  {
    question:
      "848) Quel élément permet de séparer deux VLAN au niveau logique ?",
    answers: [
      "a) Le VLAN lui-même",
      "b) Le câble uniquement",
      "c) Le protocole DNS",
      "d) Le numéro de port TCP",
    ],
    correct: 0,
  },

  {
    question:
      "849) Quel équipement est généralement nécessaire pour permettre la communication entre deux VLAN différents ?",
    answers: [
      "a) Un équipement de couche 3",
      "b) Un hub uniquement",
      "c) Un répéteur uniquement",
      "d) Un câble croisé uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "850) Quel problème peut provoquer une mauvaise configuration du VLAN sur un port access ?",
    answers: [
      "a) Le poste peut être placé dans le mauvais domaine de broadcast et perdre l'accès aux ressources attendues",
      "b) Le processeur du switch devient automatiquement plus rapide",
      "c) DNS est définitivement supprimé",
      "d) L'adresse MAC du poste devient une adresse IPv6",
    ],
    correct: 0,
  },
  {
    question:
      "851) Quelle commande Cisco permet d'afficher les VLAN configurés sur un switch ?",
    answers: [
      "a) show vlan brief",
      "b) show ip route",
      "c) show arp",
      "d) show interfaces trunk",
    ],
    correct: 0,
  },

  {
    question:
      "852) Quelle commande Cisco permet de vérifier les trunks actifs sur un switch ?",
    answers: [
      "a) show vlan brief",
      "b) show interfaces trunk",
      "c) show ip interface brief",
      "d) show arp",
    ],
    correct: 1,
  },

  {
    question:
      "853) Quelle commande Cisco permet d'afficher la table MAC d'un switch ?",
    answers: [
      "a) show mac address-table",
      "b) show ip route",
      "c) show vlan",
      "d) show interfaces ip",
    ],
    correct: 0,
  },

  {
    question:
      "854) Quelle information un switch apprend-il principalement pour construire sa table MAC ?",
    answers: [
      "a) L'adresse IP de destination",
      "b) L'adresse MAC source des trames reçues",
      "c) Le numéro de port TCP",
      "d) Le masque de sous-réseau",
    ],
    correct: 1,
  },

  {
    question:
      "855) Lorsqu'un switch reçoit une trame unicast dont l'adresse MAC destination est inconnue, il :",
    answers: [
      "a) La supprime immédiatement",
      "b) La route vers Internet",
      "c) La diffuse sur les ports appropriés sauf le port d'entrée",
      "d) Modifie son adresse IP",
    ],
    correct: 2,
  },

  {
    question: "856) Quelle adresse MAC représente le broadcast Ethernet ?",
    answers: [
      "a) 00:00:00:00:00:00",
      "b) FF:FF:FF:FF:FF:FF",
      "c) 11:11:11:11:11:11",
      "d) 01:00:00:00:00:00",
    ],
    correct: 1,
  },

  {
    question: "857) Quel est le rôle principal de STP ?",
    answers: [
      "a) Attribuer des adresses IP",
      "b) Éviter les boucles de niveau 2",
      "c) Résoudre les noms DNS",
      "d) Chiffrer les trames",
    ],
    correct: 1,
  },

  {
    question: "858) Dans STP, quel switch devient le Root Bridge ?",
    answers: [
      "a) Celui qui possède le Bridge ID le plus élevé",
      "b) Celui qui possède le Bridge ID le plus faible",
      "c) Celui qui possède le plus grand nombre de ports",
      "d) Celui qui possède l'adresse IP la plus élevée",
    ],
    correct: 1,
  },

  {
    question:
      "859) Dans STP, quel port d'un switch non-root possède généralement le meilleur chemin vers le Root Bridge ?",
    answers: [
      "a) Root Port",
      "b) Designated Port",
      "c) Disabled Port",
      "d) Console Port",
    ],
    correct: 0,
  },

  {
    question: "860) Que transportent les BPDU dans STP ?",
    answers: [
      "a) Des informations nécessaires au fonctionnement de STP",
      "b) Des requêtes DNS",
      "c) Des adresses DHCP",
      "d) Des paquets HTTP",
    ],
    correct: 0,
  },

  {
    question:
      "861) Quelle technologie Cisco permet de mettre rapidement un port access en état forwarding pour un terminal ?",
    answers: ["a) PortFast", "b) EtherChannel", "c) NAT", "d) HSRP"],
    correct: 0,
  },

  {
    question:
      "862) Quel mécanisme peut désactiver un port PortFast lorsqu'un BPDU inattendu est reçu ?",
    answers: ["a) BPDU Guard", "b) DHCP Relay", "c) PAT", "d) ARP"],
    correct: 0,
  },

  {
    question:
      "863) Quel protocole est une évolution de STP visant notamment une convergence plus rapide ?",
    answers: ["a) RSTP", "b) RIP", "c) FTP", "d) ICMP"],
    correct: 0,
  },

  {
    question:
      "864) Quel protocole standard est utilisé pour l'agrégation de liens ?",
    answers: ["a) LACP", "b) ARP", "c) DHCP", "d) DNS"],
    correct: 0,
  },

  {
    question: "865) Quel est l'objectif principal d'EtherChannel ?",
    answers: [
      "a) Combiner plusieurs liens physiques en un lien logique",
      "b) Remplacer le protocole DNS",
      "c) Créer des adresses IPv6",
      "d) Chiffrer les paquets IP",
    ],
    correct: 0,
  },

  {
    question:
      "866) Quel protocole de routage utilise l'algorithme SPF basé sur Dijkstra ?",
    answers: ["a) RIP", "b) OSPF", "c) BGP", "d) ARP"],
    correct: 1,
  },

  {
    question: "867) OSPF est principalement classé comme protocole :",
    answers: [
      "a) À état de liens",
      "b) À vecteur de distance uniquement",
      "c) De couche 2",
      "d) De résolution de noms",
    ],
    correct: 0,
  },

  {
    question:
      "868) Quel protocole de routage utilise le nombre de sauts comme métrique principale ?",
    answers: ["a) OSPF", "b) RIP", "c) BGP", "d) STP"],
    correct: 1,
  },

  {
    question:
      "869) Quelle est la valeur maximale de sauts considérée comme valide par RIP ?",
    answers: ["a) 10", "b) 15", "c) 16", "d) 255"],
    correct: 1,
  },

  {
    question: "870) Dans RIP, une métrique de 16 représente généralement :",
    answers: [
      "a) Une route directement connectée",
      "b) Une route inaccessible",
      "c) Une route prioritaire",
      "d) Une route par défaut",
    ],
    correct: 1,
  },

  {
    question:
      "871) Quel protocole est principalement utilisé comme protocole de routage inter-domaine sur Internet ?",
    answers: ["a) RIP", "b) OSPF", "c) BGP", "d) STP"],
    correct: 2,
  },

  {
    question: "872) BGP est généralement classé comme protocole :",
    answers: ["a) Path-vector", "b) Link-state", "c) ARP", "d) Transport"],
    correct: 0,
  },

  {
    question: "873) Quelle route représente la route par défaut en IPv4 ?",
    answers: [
      "a) 255.255.255.255/32",
      "b) 127.0.0.0/8",
      "c) 0.0.0.0/0",
      "d) 224.0.0.0/4",
    ],
    correct: 2,
  },

  {
    question:
      "874) Lorsqu'un routeur possède plusieurs routes correspondant à une destination, il utilise généralement :",
    answers: [
      "a) La route avec le préfixe le plus long",
      "b) Toujours la route avec la plus petite adresse IP",
      "c) Toujours la première route affichée",
      "d) La route avec le plus grand masque numérique",
    ],
    correct: 0,
  },

  {
    question: "875) Que signifie le principe de Longest Prefix Match ?",
    answers: [
      "a) Choisir la route correspondant au préfixe le plus spécifique",
      "b) Choisir toujours la route par défaut",
      "c) Choisir la route ayant le plus grand nombre de sauts",
      "d) Choisir la route ayant la plus grande adresse MAC",
    ],
    correct: 0,
  },

  {
    question:
      "876) Quelle commande Cisco affiche principalement la table de routage IPv4 ?",
    answers: [
      "a) show ip route",
      "b) show vlan brief",
      "c) show arp",
      "d) show mac address-table",
    ],
    correct: 0,
  },

  {
    question:
      "877) Dans une table de routage Cisco, la lettre C indique généralement :",
    answers: ["a) Connected", "b) Cached", "c) Control", "d) Client"],
    correct: 0,
  },

  {
    question:
      "878) Dans une table de routage Cisco, la lettre S indique généralement :",
    answers: ["a) Secure", "b) Static", "c) Server", "d) Switch"],
    correct: 1,
  },

  {
    question:
      "879) Dans une table de routage Cisco, la lettre O indique généralement :",
    answers: ["a) OSPF", "b) OSI", "c) Optical", "d) Output"],
    correct: 0,
  },

  {
    question:
      "880) Quelle commande Cisco permet d'afficher brièvement l'état des interfaces et leurs adresses IP ?",
    answers: [
      "a) show ip interface brief",
      "b) show running-config",
      "c) show vlan brief",
      "d) show ip route",
    ],
    correct: 0,
  },

  {
    question:
      "881) Sur une interface Cisco, l'état « administratively down » indique généralement que :",
    answers: [
      "a) L'interface est désactivée par configuration",
      "b) Le câble est nécessairement coupé",
      "c) L'adresse IP est toujours incorrecte",
      "d) Le protocole DNS est arrêté",
    ],
    correct: 0,
  },

  {
    question:
      "882) Quelle commande Cisco active une interface précédemment désactivée administrativement ?",
    answers: [
      "a) enable interface",
      "b) no shutdown",
      "c) activate",
      "d) interface up",
    ],
    correct: 1,
  },

  {
    question:
      "883) Quelle commande Cisco désactive administrativement une interface ?",
    answers: [
      "a) shutdown",
      "b) no shutdown",
      "c) disable port",
      "d) stop interface",
    ],
    correct: 0,
  },

  {
    question:
      "884) Quelle commande permet d'afficher la configuration actuellement active en mémoire ?",
    answers: [
      "a) show startup-config",
      "b) show running-config",
      "c) show flash",
      "d) show vlan brief",
    ],
    correct: 1,
  },

  {
    question:
      "885) Où se trouve généralement la configuration de démarrage d'un équipement Cisco ?",
    answers: ["a) RAM", "b) NVRAM", "c) Cache CPU", "d) Carte réseau"],
    correct: 1,
  },

  {
    question:
      "886) Quelle commande sauvegarde généralement la running-config vers la startup-config ?",
    answers: [
      "a) copy startup-config running-config",
      "b) copy running-config startup-config",
      "c) save running-config flash",
      "d) write vlan",
    ],
    correct: 1,
  },

  {
    question:
      "887) Quel protocole est utilisé par ARP en IPv4 pour trouver l'adresse MAC correspondant à une adresse IP locale ?",
    answers: ["a) ARP", "b) DNS", "c) DHCP", "d) ICMP"],
    correct: 0,
  },

  {
    question:
      "888) Quelle adresse est généralement utilisée comme destination d'une requête ARP Request ?",
    answers: [
      "a) Une adresse MAC unicast connue",
      "b) FF:FF:FF:FF:FF:FF",
      "c) 00:00:00:00:00:00",
      "d) L'adresse MAC du routeur uniquement",
    ],
    correct: 1,
  },

  {
    question:
      "889) Lorsqu'un PC veut communiquer avec une machine située sur un autre réseau IP, il envoie généralement la trame Ethernet vers :",
    answers: [
      "a) La MAC du serveur DNS",
      "b) La MAC de la passerelle par défaut",
      "c) La MAC de l'adresse IP distante directement",
      "d) FF:FF:FF:FF:FF:FF uniquement",
    ],
    correct: 1,
  },

  {
    question:
      "890) Quel protocole est utilisé par IPv6 pour les mécanismes de découverte de voisins ?",
    answers: ["a) ARP", "b) ICMPv6 Neighbor Discovery", "c) DHCPv4", "d) FTP"],
    correct: 1,
  },

  {
    question:
      "891) Quel type d'adresse IPv6 commence généralement par FE80:: et est utilisé pour la communication locale au lien ?",
    answers: [
      "a) Global unicast",
      "b) Link-local",
      "c) Multicast global",
      "d) Loopback",
    ],
    correct: 1,
  },

  {
    question: "892) Quelle est l'adresse de loopback IPv6 ?",
    answers: ["a) ::", "b) ::1", "c) FE80::1", "d) FF02::1"],
    correct: 1,
  },

  {
    question: "893) Quelle adresse IPv6 représente l'adresse non spécifiée ?",
    answers: ["a) ::", "b) ::1", "c) FF00::", "d) FE80::"],
    correct: 0,
  },

  {
    question:
      "894) Quelle caractéristique distingue IPv6 d'IPv4 concernant le broadcast ?",
    answers: [
      "a) IPv6 utilise davantage de broadcasts",
      "b) IPv6 n'utilise pas le broadcast et utilise notamment le multicast",
      "c) IPv6 utilise uniquement le broadcast",
      "d) IPv6 remplace le broadcast par ARP",
    ],
    correct: 1,
  },

  {
    question:
      "895) Quelle méthode permet à un hôte IPv6 de configurer automatiquement une adresse à partir des informations annoncées par un routeur ?",
    answers: ["a) SLAAC", "b) PAT", "c) NAT64 uniquement", "d) STP"],
    correct: 0,
  },

  {
    question:
      "896) Quel message ICMPv6 est envoyé par un routeur pour annoncer les paramètres du réseau IPv6 ?",
    answers: [
      "a) Router Advertisement",
      "b) Echo Reply",
      "c) DHCP Discover",
      "d) ARP Reply",
    ],
    correct: 0,
  },

  {
    question:
      "897) Quel mécanisme permet à un hôte IPv6 de solliciter les informations d'un routeur ?",
    answers: [
      "a) Router Solicitation",
      "b) Router Advertisement",
      "c) ARP Request",
      "d) DHCP Offer",
    ],
    correct: 0,
  },

  {
    question:
      "898) Quel mécanisme NAT permet à plusieurs adresses IP privées de partager une seule adresse IP publique grâce aux numéros de ports ?",
    answers: [
      "a) NAT statique",
      "b) PAT",
      "c) Routing statique",
      "d) Proxy ARP",
    ],
    correct: 1,
  },

  {
    question: "899) Quel est l'un des objectifs principaux d'une ACL réseau ?",
    answers: [
      "a) Contrôler les flux selon des critères définis",
      "b) Attribuer automatiquement des adresses MAC",
      "c) Remplacer le protocole Ethernet",
      "d) Convertir IPv4 en IPv6 automatiquement",
    ],
    correct: 0,
  },

  {
    question:
      "900) Dans une ACL Cisco classique, si aucun élément ne correspond à un paquet et qu'aucune règle explicite ne l'autorise, le paquet est généralement :",
    answers: [
      "a) Autorisé automatiquement",
      "b) Rejeté par le deny implicite",
      "c) Converti en broadcast",
      "d) Envoyé au DNS",
    ],
    correct: 1,
  },
  {
    question:
      "901) Quelle différence caractérise principalement une ACL standard Cisco par rapport à une ACL étendue ?",
    answers: [
      "a) L'ACL standard filtre principalement selon l'adresse IP source",
      "b) L'ACL standard filtre uniquement selon le port TCP",
      "c) L'ACL standard filtre uniquement selon l'adresse MAC",
      "d) L'ACL standard ne peut contenir aucune règle",
    ],
    correct: 0,
  },

  {
    question: "902) Une ACL étendue Cisco peut notamment filtrer selon :",
    answers: [
      "a) Source, destination et protocole/ports",
      "b) Uniquement le nom d'hôte",
      "c) Uniquement l'adresse MAC",
      "d) Uniquement le masque réseau",
    ],
    correct: 0,
  },

  {
    question:
      "903) Dans une ACL Cisco, quelle règle est généralement évaluée en premier ?",
    answers: [
      "a) La dernière règle",
      "b) La première règle correspondant au paquet",
      "c) La règle ayant le plus grand numéro",
      "d) La règle implicite uniquement",
    ],
    correct: 1,
  },

  {
    question: "904) Dans une ACL Cisco, que signifie le mot-clé « any » ?",
    answers: [
      "a) Une seule adresse IP",
      "b) Toutes les adresses",
      "c) Toutes les adresses MAC uniquement",
      "d) Uniquement le réseau local",
    ],
    correct: 1,
  },

  {
    question:
      "905) Dans une ACL Cisco, que signifie généralement « host 192.168.1.10 » ?",
    answers: [
      "a) Le réseau 192.168.1.0/24",
      "b) L'adresse unique 192.168.1.10",
      "c) Toutes les adresses privées",
      "d) Une adresse broadcast",
    ],
    correct: 1,
  },

  {
    question:
      "906) Quelle wildcard mask correspond à un masque réseau 255.255.255.0 ?",
    answers: [
      "a) 0.0.0.255",
      "b) 255.255.255.0",
      "c) 0.0.255.255",
      "d) 255.0.0.255",
    ],
    correct: 0,
  },

  {
    question: "907) Quelle wildcard mask correspond à 255.255.255.252 ?",
    answers: ["a) 0.0.0.252", "b) 0.0.0.3", "c) 255.255.255.3", "d) 0.0.3.255"],
    correct: 1,
  },

  {
    question:
      "908) Une ACL étendue doit bloquer HTTP vers un serveur précis. Quel protocole de transport doit principalement être pris en compte pour HTTP classique ?",
    answers: ["a) UDP", "b) TCP", "c) ICMP", "d) ARP"],
    correct: 1,
  },

  {
    question: "909) Quel port TCP est associé au service HTTP classique ?",
    answers: ["a) 21", "b) 22", "c) 80", "d) 110"],
    correct: 2,
  },

  {
    question: "910) Quel port TCP est associé au service HTTPS classique ?",
    answers: ["a) 53", "b) 80", "c) 443", "d) 8080"],
    correct: 2,
  },

  {
    question:
      "911) Quel mécanisme NAT associe généralement une adresse privée à une adresse publique de manière fixe ?",
    answers: ["a) NAT statique", "b) PAT", "c) DHCP", "d) ARP"],
    correct: 0,
  },

  {
    question:
      "912) Quel mécanisme NAT utilise un pool d'adresses publiques pour effectuer des traductions ?",
    answers: ["a) NAT dynamique", "b) PAT uniquement", "c) DNS", "d) STP"],
    correct: 0,
  },

  {
    question:
      "913) Quelle technique permet à plusieurs hôtes privés de partager une seule adresse IPv4 publique ?",
    answers: ["a) PAT", "b) STP", "c) OSPF", "d) ARP"],
    correct: 0,
  },

  {
    question:
      "914) Quel élément permet au PAT de distinguer plusieurs connexions utilisant la même adresse IP publique ?",
    answers: [
      "a) Les numéros de port",
      "b) Les adresses MAC uniquement",
      "c) Les noms DNS uniquement",
      "d) Les VLAN uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "915) Parmi les plages suivantes, laquelle est une plage IPv4 privée RFC 1918 ?",
    answers: [
      "a) 8.8.8.0/24",
      "b) 172.16.0.0/12",
      "c) 1.0.0.0/8",
      "d) 224.0.0.0/4",
    ],
    correct: 1,
  },

  {
    question: "916) La plage 10.0.0.0/8 est :",
    answers: ["a) Publique", "b) Privée", "c) Multicast", "d) Loopback"],
    correct: 1,
  },

  {
    question: "917) La plage 192.168.0.0/16 est principalement utilisée pour :",
    answers: [
      "a) Les adresses IPv4 privées",
      "b) Les adresses multicast",
      "c) Les adresses loopback",
      "d) Les adresses APIPA",
    ],
    correct: 0,
  },

  {
    question:
      "918) Un PC reçoit l'adresse 169.254.20.15 automatiquement. Quelle situation est probable ?",
    answers: [
      "a) Le PC a obtenu une adresse APIPA",
      "b) Le PC utilise une adresse multicast",
      "c) Le PC possède une adresse loopback",
      "d) Le PC utilise une adresse publique",
    ],
    correct: 0,
  },

  {
    question: "919) Quelle plage IPv4 est utilisée pour les adresses APIPA ?",
    answers: [
      "a) 127.0.0.0/8",
      "b) 169.254.0.0/16",
      "c) 192.168.0.0/16",
      "d) 224.0.0.0/4",
    ],
    correct: 1,
  },

  {
    question:
      "920) Un client DHCP commence normalement le processus DORA par l'envoi de :",
    answers: [
      "a) DHCP ACK",
      "b) DHCP Discover",
      "c) DHCP Offer",
      "d) DHCP Request",
    ],
    correct: 1,
  },

  {
    question:
      "921) Dans le processus DHCP DORA, quel message est envoyé par le serveur pour proposer une configuration ?",
    answers: ["a) Discover", "b) Offer", "c) Request", "d) ACK"],
    correct: 1,
  },

  {
    question:
      "922) Dans le processus DHCP DORA, quel message indique que le client demande la configuration proposée ?",
    answers: ["a) Discover", "b) Offer", "c) Request", "d) ACK"],
    correct: 2,
  },

  {
    question:
      "923) Quel message DHCP confirme généralement l'attribution de la configuration au client ?",
    answers: [
      "a) DHCP ACK",
      "b) DHCP Discover",
      "c) DHCP Offer",
      "d) DHCP Relay",
    ],
    correct: 0,
  },

  {
    question:
      "924) Quel équipement ou fonction permet à un serveur DHCP situé sur un autre réseau de répondre aux clients ?",
    answers: [
      "a) DHCP Relay",
      "b) DNS Cache",
      "c) NAT statique uniquement",
      "d) STP",
    ],
    correct: 0,
  },

  {
    question:
      "925) Sur Cisco, quelle commande est généralement utilisée sur une interface pour configurer l'adresse d'un serveur DHCP relay ?",
    answers: [
      "a) ip helper-address",
      "b) ip dhcp relay",
      "c) dhcp-forward",
      "d) helper-dhcp",
    ],
    correct: 0,
  },

  {
    question: "926) Quel est le rôle principal d'un serveur DNS ?",
    answers: [
      "a) Résoudre les noms de domaine",
      "b) Attribuer les adresses MAC",
      "c) Bloquer toutes les connexions TCP",
      "d) Créer des VLAN",
    ],
    correct: 0,
  },

  {
    question:
      "927) Quel enregistrement DNS associe généralement un nom d'hôte à une adresse IPv4 ?",
    answers: ["a) AAAA", "b) MX", "c) A", "d) PTR"],
    correct: 2,
  },

  {
    question:
      "928) Quel enregistrement DNS associe généralement un nom d'hôte à une adresse IPv6 ?",
    answers: ["a) A", "b) AAAA", "c) MX", "d) PTR"],
    correct: 1,
  },

  {
    question:
      "929) Quel enregistrement DNS est principalement utilisé pour indiquer les serveurs de messagerie d'un domaine ?",
    answers: ["a) A", "b) CNAME", "c) MX", "d) PTR"],
    correct: 2,
  },

  {
    question:
      "930) Quel enregistrement DNS permet généralement de créer un alias vers un autre nom ?",
    answers: ["a) CNAME", "b) MX", "c) PTR", "d) NS uniquement"],
    correct: 0,
  },

  {
    question:
      "931) Quel type de requête DNS permet principalement une résolution inverse adresse IP → nom ?",
    answers: ["a) A", "b) PTR", "c) MX", "d) CNAME"],
    correct: 1,
  },

  {
    question:
      "932) Un utilisateur peut accéder à un serveur par son adresse IP mais pas par son nom. Quel service faut-il vérifier en priorité ?",
    answers: ["a) DNS", "b) STP", "c) ARP uniquement", "d) FTP"],
    correct: 0,
  },

  {
    question:
      "933) Quel outil Windows permet notamment de tester la résolution DNS ?",
    answers: ["a) nslookup", "b) tracert uniquement", "c) arp", "d) route"],
    correct: 0,
  },

  {
    question:
      "934) Quel outil Linux/Unix est couramment utilisé pour interroger un serveur DNS ?",
    answers: ["a) dig", "b) arp", "c) ip link", "d) route print"],
    correct: 0,
  },

  {
    question:
      "935) Quel mécanisme DNS améliore les performances en conservant temporairement des réponses ?",
    answers: [
      "a) DNS caching",
      "b) DNS flooding",
      "c) DNS routing",
      "d) DNS switching",
    ],
    correct: 0,
  },

  {
    question:
      "936) Quel protocole ajoute une couche de validation cryptographique aux données DNS ?",
    answers: ["a) DNSSEC", "b) DHCP", "c) ARP", "d) FTP"],
    correct: 0,
  },

  {
    question: "937) Quel est l'objectif principal de DNSSEC ?",
    answers: [
      "a) Authentifier l'origine des données DNS et leur intégrité",
      "b) Attribuer des adresses IP",
      "c) Chiffrer toutes les pages Web",
      "d) Remplacer DHCP",
    ],
    correct: 0,
  },

  {
    question:
      "938) Quel mécanisme de sécurité protège principalement contre les serveurs DHCP non autorisés dans un réseau commuté ?",
    answers: ["a) DHCP Snooping", "b) NAT", "c) OSPF", "d) PortFast"],
    correct: 0,
  },

  {
    question:
      "939) Dans DHCP Snooping, les ports reliés aux serveurs DHCP légitimes sont généralement configurés comme :",
    answers: ["a) Untrusted", "b) Trusted", "c) Disabled", "d) Loopback"],
    correct: 1,
  },

  {
    question:
      "940) Quelle attaque consiste à envoyer de nombreuses demandes DHCP afin d'épuiser le pool d'adresses ?",
    answers: [
      "a) DHCP starvation",
      "b) DNS tunneling",
      "c) ARP poisoning",
      "d) SYN scanning",
    ],
    correct: 0,
  },

  {
    question:
      "941) Quelle attaque consiste à introduire un serveur DHCP malveillant dans le réseau ?",
    answers: [
      "a) Rogue DHCP",
      "b) MAC flooding",
      "c) IP spoofing uniquement",
      "d) VLAN hopping uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "942) Quelle attaque vise à associer faussement une adresse MAC à l'adresse IP d'une autre machine dans les caches ARP ?",
    answers: [
      "a) ARP spoofing",
      "b) DHCP starvation",
      "c) DNSSEC",
      "d) SYN ACK",
    ],
    correct: 0,
  },

  {
    question:
      "943) Quelle technologie Cisco peut contribuer à protéger contre l'ARP spoofing sur un réseau commuté ?",
    answers: [
      "a) Dynamic ARP Inspection",
      "b) NAT overload",
      "c) PortFast uniquement",
      "d) DNS caching",
    ],
    correct: 0,
  },

  {
    question:
      "944) Quelle information DHCP Snooping peut notamment fournir à d'autres mécanismes de sécurité comme Dynamic ARP Inspection ?",
    answers: [
      "a) Une base d'associations IP-MAC-port",
      "b) Une table DNS publique",
      "c) Une table BGP complète",
      "d) Une liste de ports HTTP",
    ],
    correct: 0,
  },

  {
    question:
      "945) Quelle attaque vise à remplir la table MAC d'un switch avec de nombreuses fausses adresses ?",
    answers: [
      "a) MAC flooding",
      "b) DNS poisoning",
      "c) DHCP relay",
      "d) ICMP redirect",
    ],
    correct: 0,
  },

  {
    question:
      "946) Quel mécanisme de sécurité Cisco limite notamment le nombre d'adresses MAC apprises sur un port ?",
    answers: ["a) Port Security", "b) PortFast", "c) OSPF", "d) PAT"],
    correct: 0,
  },

  {
    question:
      "947) Quel protocole de sécurité Wi-Fi est considéré comme obsolète et vulnérable ?",
    answers: ["a) WPA3", "b) WPA2", "c) WEP", "d) 802.1X"],
    correct: 2,
  },

  {
    question:
      "948) Quel protocole de sécurité Wi-Fi est le plus récent parmi les suivants ?",
    answers: ["a) WEP", "b) WPA", "c) WPA2", "d) WPA3"],
    correct: 3,
  },

  {
    question: "949) Quelle norme Wi-Fi correspond au Wi-Fi 6 ?",
    answers: ["a) 802.11n", "b) 802.11ac", "c) 802.11ax", "d) 802.11g"],
    correct: 2,
  },

  {
    question:
      "950) Quel élément identifie généralement le nom logique d'un réseau Wi-Fi visible par les utilisateurs ?",
    answers: ["a) SSID", "b) BSSID uniquement", "c) VLAN ID", "d) TCP port"],
    correct: 0,
  },
  {
    question:
      "951) Quelle commande Windows affiche la configuration IP détaillée d'une machine ?",
    answers: [
      "a) ipconfig /all",
      "b) ping /all",
      "c) route /all",
      "d) netstat /all",
    ],
    correct: 0,
  },

  {
    question:
      "952) Quelle commande Windows permet de renouveler une adresse obtenue via DHCP ?",
    answers: [
      "a) ipconfig /renew",
      "b) ipconfig /release-only",
      "c) dhcp renew",
      "d) net renew",
    ],
    correct: 0,
  },

  {
    question:
      "953) Quelle commande Windows libère l'adresse IP obtenue via DHCP ?",
    answers: [
      "a) ipconfig /release",
      "b) ipconfig /delete",
      "c) dhcp /release",
      "d) net release",
    ],
    correct: 0,
  },

  {
    question: "954) Quelle commande Windows affiche le cache ARP ?",
    answers: ["a) arp -a", "b) arp -r", "c) ipconfig /arp", "d) netstat -arp"],
    correct: 0,
  },

  {
    question:
      "955) Quelle commande Windows permet d'afficher la table de routage IP ?",
    answers: [
      "a) route print",
      "b) ipconfig /route",
      "c) arp -r",
      "d) net route",
    ],
    correct: 0,
  },

  {
    question:
      "956) Quelle commande Windows permet de tester la connectivité IP vers une destination ?",
    answers: ["a) ping", "b) nslookup", "c) arp", "d) hostname"],
    correct: 0,
  },

  {
    question:
      "957) Quelle commande Windows permet généralement d'afficher le chemin suivi par les paquets vers une destination ?",
    answers: ["a) ping", "b) tracert", "c) nslookup", "d) route"],
    correct: 1,
  },

  {
    question:
      "958) Quel outil permet principalement de tester la résolution d'un nom DNS sous Windows ?",
    answers: ["a) tracert", "b) nslookup", "c) arp", "d) route"],
    correct: 1,
  },

  {
    question:
      "959) Quelle commande Linux affiche les adresses IP des interfaces réseau ?",
    answers: ["a) ip addr", "b) ip dns", "c) route dns", "d) netshow"],
    correct: 0,
  },

  {
    question:
      "960) Quelle commande Linux permet d'afficher la table de routage ?",
    answers: ["a) ip route", "b) ip arp", "c) route dns", "d) net ip"],
    correct: 0,
  },

  {
    question:
      "961) Un PC peut joindre sa passerelle mais pas Internet. Quelle vérification est particulièrement pertinente ?",
    answers: [
      "a) La route par défaut et la connectivité du routeur vers Internet",
      "b) Le nom du PC uniquement",
      "c) L'adresse MAC du clavier",
      "d) Le fond d'écran",
    ],
    correct: 0,
  },

  {
    question:
      "962) Un PC peut joindre une adresse IP Internet mais pas un nom de domaine. Quel problème est probable ?",
    answers: ["a) DNS", "b) STP", "c) Ethernet", "d) VLAN uniquement"],
    correct: 0,
  },

  {
    question:
      "963) Un PC ne peut même pas joindre sa propre passerelle. Quelle cause faut-il notamment vérifier ?",
    answers: [
      "a) La configuration IP, le VLAN, le câble ou l'interface",
      "b) Le serveur Web distant uniquement",
      "c) Le DNS public uniquement",
      "d) Le port SMTP",
    ],
    correct: 0,
  },

  {
    question:
      "964) Si deux machines du même réseau ont la même adresse IP, cela peut provoquer :",
    answers: [
      "a) Un conflit d'adresses IP",
      "b) Une amélioration du débit",
      "c) Une création automatique de VLAN",
      "d) Une augmentation du TTL",
    ],
    correct: 0,
  },

  {
    question:
      "965) Quelle commande Cisco permet d'identifier rapidement les interfaces avec leur adresse IP et leur état ?",
    answers: [
      "a) show ip interface brief",
      "b) show vlan brief",
      "c) show arp",
      "d) show mac address-table",
    ],
    correct: 0,
  },

  {
    question:
      "966) Quelle commande Cisco affiche les voisins découverts via CDP ?",
    answers: [
      "a) show cdp neighbors",
      "b) show neighbors ip",
      "c) show discovery",
      "d) show arp neighbors",
    ],
    correct: 0,
  },

  {
    question:
      "967) Quel protocole Cisco permet notamment de découvrir des équipements Cisco directement connectés ?",
    answers: ["a) CDP", "b) DHCP", "c) DNS", "d) FTP"],
    correct: 0,
  },

  {
    question:
      "968) Quel protocole standard peut être utilisé pour la découverte de voisins entre équipements de différents constructeurs ?",
    answers: ["a) LLDP", "b) CDP uniquement", "c) ARP", "d) STP"],
    correct: 0,
  },

  {
    question:
      "969) Quel mécanisme permet à un routeur d'utiliser une route statique uniquement lorsqu'une route principale devient indisponible, avec une distance administrative supérieure ?",
    answers: [
      "a) Floating static route",
      "b) Default gateway",
      "c) PAT",
      "d) PortFast",
    ],
    correct: 0,
  },

  {
    question: "970) Quel est le rôle d'une route statique flottante ?",
    answers: [
      "a) Servir de route de secours",
      "b) Remplacer ARP",
      "c) Créer un VLAN",
      "d) Attribuer des adresses DHCP",
    ],
    correct: 0,
  },

  {
    question:
      "971) Une adresse IPv4 /30 contient combien d'adresses au total ?",
    answers: ["a) 2", "b) 4", "c) 8", "d) 16"],
    correct: 1,
  },

  {
    question:
      "972) Combien d'adresses hôtes utilisables contient normalement un sous-réseau IPv4 /30 classique ?",
    answers: ["a) 1", "b) 2", "c) 4", "d) 6"],
    correct: 1,
  },

  {
    question: "973) Combien d'adresses IPv4 contient un sous-réseau /28 ?",
    answers: ["a) 8", "b) 16", "c) 32", "d) 64"],
    correct: 1,
  },

  {
    question:
      "974) Combien d'hôtes sont normalement utilisables dans un sous-réseau IPv4 /28 ?",
    answers: ["a) 12", "b) 14", "c) 16", "d) 30"],
    correct: 1,
  },

  {
    question: "975) Combien d'adresses IPv4 contient un réseau /26 ?",
    answers: ["a) 32", "b) 64", "c) 128", "d) 256"],
    correct: 1,
  },

  {
    question:
      "976) Combien d'hôtes sont normalement utilisables dans un réseau IPv4 /26 classique ?",
    answers: ["a) 62", "b) 64", "c) 126", "d) 30"],
    correct: 0,
  },

  {
    question: "977) Quelle est la taille du masque correspondant à /27 ?",
    answers: [
      "a) 255.255.255.0",
      "b) 255.255.255.128",
      "c) 255.255.255.224",
      "d) 255.255.255.240",
    ],
    correct: 2,
  },

  {
    question: "978) Quel masque correspond à /29 ?",
    answers: [
      "a) 255.255.255.224",
      "b) 255.255.255.240",
      "c) 255.255.255.248",
      "d) 255.255.255.252",
    ],
    correct: 2,
  },

  {
    question: "979) Quelle adresse est le réseau pour 192.168.10.70/26 ?",
    answers: [
      "a) 192.168.10.0",
      "b) 192.168.10.64",
      "c) 192.168.10.70",
      "d) 192.168.10.128",
    ],
    correct: 1,
  },

  {
    question:
      "980) Quelle est l'adresse de broadcast du réseau 192.168.10.64/26 ?",
    answers: [
      "a) 192.168.10.63",
      "b) 192.168.10.64",
      "c) 192.168.10.127",
      "d) 192.168.10.128",
    ],
    correct: 2,
  },

  {
    question: "981) Quelle adresse est le réseau pour 172.16.5.130/25 ?",
    answers: [
      "a) 172.16.5.0",
      "b) 172.16.5.64",
      "c) 172.16.5.128",
      "d) 172.16.5.255",
    ],
    correct: 2,
  },

  {
    question:
      "982) Quelle est l'adresse de broadcast du réseau 172.16.5.128/25 ?",
    answers: [
      "a) 172.16.5.127",
      "b) 172.16.5.128",
      "c) 172.16.5.254",
      "d) 172.16.5.255",
    ],
    correct: 3,
  },

  {
    question: "983) Quelle adresse IPv4 appartient à la plage multicast ?",
    answers: [
      "a) 127.0.0.1",
      "b) 169.254.1.1",
      "c) 224.0.0.1",
      "d) 192.168.1.1",
    ],
    correct: 2,
  },

  {
    question: "984) Quelle adresse IPv4 est une adresse loopback ?",
    answers: ["a) 10.0.0.1", "b) 127.0.0.1", "c) 169.254.1.1", "d) 224.0.0.1"],
    correct: 1,
  },

  {
    question:
      "985) Quel champ IPv4 diminue généralement de 1 à chaque routeur traversé ?",
    answers: ["a) TTL", "b) DSCP", "c) IHL", "d) Identification"],
    correct: 0,
  },

  {
    question:
      "986) Que se passe-t-il lorsqu'un paquet IPv4 atteint un TTL nul avant d'arriver à destination ?",
    answers: [
      "a) Il est normalement supprimé et un message ICMP peut être généré",
      "b) Il devient automatiquement un paquet TCP",
      "c) Il est transformé en broadcast",
      "d) Son adresse MAC est supprimée uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "987) Quel message ICMP est notamment utilisé par ping pour tester la connectivité ?",
    answers: [
      "a) Echo Request",
      "b) Redirect",
      "c) Router Advertisement",
      "d) Destination Unreachable uniquement",
    ],
    correct: 0,
  },

  {
    question:
      "988) Quelle réponse ICMP indique normalement qu'une machine répond à un ping ?",
    answers: [
      "a) Echo Reply",
      "b) Echo Request",
      "c) Time Exceeded",
      "d) Redirect",
    ],
    correct: 0,
  },

  {
    question:
      "989) Quel protocole de transport garantit généralement la livraison fiable et ordonnée des données ?",
    answers: ["a) UDP", "b) TCP", "c) ICMP", "d) ARP"],
    correct: 1,
  },

  {
    question:
      "990) Quel protocole de transport est généralement sans connexion et ne garantit pas la livraison ?",
    answers: ["a) TCP", "b) UDP", "c) HTTPS", "d) SSH"],
    correct: 1,
  },

  {
    question:
      "991) Quel mécanisme TCP est utilisé pour établir une connexion ?",
    answers: ["a) Three-way handshake", "b) DORA", "c) SPF", "d) ARP Request"],
    correct: 0,
  },

  {
    question: "992) Quel est l'ordre correct du three-way handshake TCP ?",
    answers: [
      "a) ACK → SYN → SYN-ACK",
      "b) SYN → ACK → SYN-ACK",
      "c) SYN → SYN-ACK → ACK",
      "d) FIN → SYN → ACK",
    ],
    correct: 2,
  },

  {
    question:
      "993) Quel indicateur TCP est principalement associé à une demande de réinitialisation immédiate d'une connexion ?",
    answers: ["a) SYN", "b) FIN", "c) RST", "d) PSH"],
    correct: 2,
  },

  {
    question:
      "994) Quel mécanisme TCP permet notamment de contrôler la quantité de données qu'un récepteur peut accepter ?",
    answers: ["a) Flow control", "b) DNS", "c) NAT", "d) VLAN"],
    correct: 0,
  },

  {
    question:
      "995) Quel équipement filtre généralement le trafic selon des règles de sécurité entre différentes zones réseau ?",
    answers: [
      "a) Firewall",
      "b) Hub",
      "c) Répéteur",
      "d) Point d'accès uniquement",
    ],
    correct: 0,
  },

  {
    question: "996) Quelle différence décrit correctement un IDS et un IPS ?",
    answers: [
      "a) IDS détecte principalement, tandis qu'IPS peut également bloquer ou prévenir automatiquement",
      "b) IDS attribue les adresses IP et IPS résout les noms DNS",
      "c) IDS remplace les routeurs et IPS remplace les switches",
      "d) Ils servent uniquement à augmenter le débit",
    ],
    correct: 0,
  },

  {
    question:
      "997) Quel protocole est couramment utilisé pour créer un VPN sécurisé au niveau IP ?",
    answers: ["a) IPsec", "b) ARP", "c) DHCP", "d) FTP"],
    correct: 0,
  },

  {
    question:
      "998) Dans IPsec, quel protocole fournit notamment le chiffrement et l'authentification des données IP ?",
    answers: ["a) ESP", "b) ARP", "c) DNS", "d) DHCP"],
    correct: 0,
  },

  {
    question:
      "999) Quel type de VPN relie généralement deux réseaux d'entreprise entre eux ?",
    answers: [
      "a) Site-to-site VPN",
      "b) Remote-access VPN uniquement",
      "c) VLAN VPN",
      "d) DNS VPN",
    ],
    correct: 0,
  },

  {
    question:
      "1000) Un utilisateur peut communiquer avec les machines de son réseau local mais ne peut atteindre aucun autre réseau. Quelle configuration faut-il vérifier en priorité sur son poste ?",
    answers: [
      "a) La passerelle par défaut",
      "b) Le nom du fichier utilisateur",
      "c) Le port HDMI",
      "d) La résolution de l'écran",
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
      // feedback بصري مباشر
      if (i === q.correct) {
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
