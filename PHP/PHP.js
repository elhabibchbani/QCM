const questions = [
  {
    question: "1) PHP est :",
    answers: [
      "a) Un langage compilé",
      "b) Un langage interprété",
      "c) Un langage machine",
      "d) Un langage assembleur",
    ],
    correct: 1,
  },
  {
    question: "2) L’extension par défaut d’un fichier PHP est :",
    answers: [".html", ".js", ".php", ".css"],
    correct: 2,
  },
  {
    question: "3) PHP signifie :",
    answers: [
      "Personal Home Page",
      "Private Hypertext Processor",
      "PHP: Hypertext Preprocessor",
      "Program Hypertext Page",
    ],
    correct: 2,
  },
  {
    question: "4) Le code PHP commence par :",
    answers: ["<php>", "<?php", "<script>", "{php}"],
    correct: 1,
  },
  {
    question: "5) Une variable PHP commence par :",
    answers: ["&", "@", "$", "#"],
    correct: 2,
  },
  {
    question: "6) Laquelle est une instruction valide ?",
    answers: ["$a == 5;", "$a = 5;", "int a = 5;", "var a := 5;"],
    correct: 1,
  },
  {
    question: "7) Quelle instruction affiche du texte ?",
    answers: ["display", "echo", "print_r", "show"],
    correct: 1,
  },
  {
    question: "8) PHP est principalement utilisé côté :",
    answers: ["Client", "Serveur", "Navigateur", "Mobile"],
    correct: 1,
  },
  {
    question: "9) Quel symbole termine une instruction PHP ?",
    answers: [":", ".", ";", ","],
    correct: 2,
  },
  {
    question: "10) Quelle fonction affiche le type et la valeur ?",
    answers: ["echo", "print", "var_dump", "gettype"],
    correct: 2,
  },
  {
    question: "11) Quel est le type de $x = '10'; ?",
    answers: ["int", "float", "string", "bool"],
    correct: 2,
  },
  {
    question: "12) Quelle fonction calcule la longueur d’une chaîne ?",
    answers: ["count()", "size()", "strlen()", "length()"],
    correct: 2,
  },
  {
    question: "13) Quel opérateur sert à concaténer ?",
    answers: ["+", "&", ".", ","],
    correct: 2,
  },
  {
    question: "14) Quelle est la sortie ? echo 5 + '5';",
    answers: ["55", "'55'", "10", "Erreur"],
    correct: 2,
  },
  {
    question: "15) Quelle est la sortie ? echo 'PHP'.'8';",
    answers: ["PHP 8", "PHP8", "Erreur", "8PHP"],
    correct: 1,
  },
  {
    question: "16) L’opérateur === compare :",
    answers: ["La valeur", "Le type", "La valeur et le type", "Rien"],
    correct: 2,
  },
  {
    question: "17) Quelle condition est correcte ?",
    answers: ["if x > 5", "if(x > 5)", "if[x > 5]", "if{x > 5}"],
    correct: 1,
  },
  {
    question: "18) Quelle boucle existe en PHP ?",
    answers: ["loop", "repeat", "for", "during"],
    correct: 2,
  },
  {
    question: "19) Quel mot-clé arrête une boucle ?",
    answers: ["stop", "break", "exit", "end"],
    correct: 1,
  },
  {
    question: "20) continue permet de :",
    answers: [
      "Arrêter le programme",
      "Arrêter la boucle",
      "Passer à l’itération suivante",
      "Redémarrer la boucle",
    ],
    correct: 2,
  },
  {
    question: "21) Comment définir une fonction ?",
    answers: [
      "function test() {}",
      "def test() {}",
      "func test() {}",
      "method test() {}",
    ],
    correct: 0,
  },
  {
    question: "22) Une fonction peut retourner une valeur avec :",
    answers: ["echo", "print", "return", "break"],
    correct: 2,
  },
  {
    question: "23) Une fonction sans return retourne :",
    answers: ["0", "false", "null", "error"],
    correct: 2,
  },
  {
    question: "24) Un tableau est créé avec :",
    answers: ["[]", "{}", "array()", "a et c"],
    correct: 3,
  },
  {
    question: "25) Index du premier élément d’un tableau :",
    answers: ["1", "0", "-1", "dépend"],
    correct: 1,
  },
  {
    question: "26) Quelle fonction compte les éléments d’un tableau ?",
    answers: ["size()", "length()", "count()", "total()"],
    correct: 2,
  },
  {
    question: "27) foreach est utilisé pour :",
    answers: ["Conditions", "Fonctions", "Tableaux", "Classes"],
    correct: 2,
  },
  {
    question: "28) Superglobale pour les formulaires POST :",
    answers: ["$_FORM", "$_POST", "$_GET", "$_DATA"],
    correct: 1,
  },
  {
    question: "29) Superglobale pour les paramètres URL :",
    answers: ["$_POST", "$_REQUEST", "$_GET", "$_URL"],
    correct: 2,
  },
  {
    question: "30) Superglobale pour les sessions :",
    answers: ["$_COOKIE", "$_SESSION", "$_SERVER", "$_ENV"],
    correct: 1,
  },
  {
    question: "31) Démarrer une session :",
    answers: [
      "start_session()",
      "begin_session()",
      "session_start()",
      "open_session()",
    ],
    correct: 2,
  },
  {
    question: "32) Créer un cookie :",
    answers: ["addcookie()", "createcookie()", "setcookie()", "cookie()"],
    correct: 2,
  },
  {
    question: "33) Superglobale des fichiers uploadés :",
    answers: ["$_FILE", "$_UPLOAD", "$_FILES", "$_DATA"],
    correct: 2,
  },
  {
    question: "34) Méthode sécurisée pour SQL :",
    answers: ["mysqli_query", "prepared statements", "echo", "addslashes"],
    correct: 1,
  },
  {
    question: "35) Fonction pour se connecter à MySQL (mysqli) :",
    answers: ["mysql_connect", "mysqli_connect", "connect_mysql", "db_connect"],
    correct: 1,
  },
  {
    question: "36) PDO est :",
    answers: [
      "Une base de données",
      "Une extension PHP",
      "Un framework",
      "Un serveur",
    ],
    correct: 1,
  },
  {
    question: "37) include vs require :",
    answers: [
      "Aucun",
      "require arrête le script en cas d’erreur",
      "include arrête le script",
      "Les deux arrêtent",
    ],
    correct: 1,
  },
  {
    question: "38) Fonction pour encoder en JSON :",
    answers: ["json_decode", "json_encode", "to_json", "parse_json"],
    correct: 1,
  },
  {
    question: "39) Fonction pour décoder JSON :",
    answers: ["json_encode", "json_parse", "json_decode", "decode_json"],
    correct: 2,
  },
  {
    question: "40) Redirection HTTP :",
    answers: ["redirect()", "header()", "location()", "move()"],
    correct: 1,
  },
  {
    question: "41) Mot-clé pour gérer les erreurs :",
    answers: ["try", "catch", "finally", "tous"],
    correct: 3,
  },
  {
    question: "42) Afficher toutes les erreurs :",
    answers: [
      "error_show()",
      "error_reporting(E_ALL)",
      "show_errors()",
      "debug()",
    ],
    correct: 1,
  },
  {
    question: "43) Chiffrement moderne des mots de passe :",
    answers: ["md5()", "sha1()", "password_hash()", "crypt()"],
    correct: 2,
  },
  {
    question: "44) Vérifier un mot de passe hashé :",
    answers: [
      "password_check",
      "password_verify",
      "hash_verify",
      "compare_password",
    ],
    correct: 1,
  },
  {
    question: "45) PHP est open source :",
    answers: ["Oui", "Non"],
    correct: 0,
  },
  {
    question: "46) Framework PHP populaire :",
    answers: ["Angular", "Django", "Laravel", "React"],
    correct: 2,
  },
  {
    question: "47) Composer est :",
    answers: [
      "Un framework",
      "Un gestionnaire de dépendances",
      "Un serveur",
      "Un IDE",
    ],
    correct: 1,
  },
  {
    question: "48) php.ini est :",
    answers: [
      "Un script",
      "Un fichier de configuration",
      "Une base de données",
      "Un framework",
    ],
    correct: 1,
  },
  {
    question: "49) Une constante est définie avec :",
    answers: ["const", "define()", "a et b", "final"],
    correct: 2,
  },
  {
    question: "50) Les constantes sont :",
    answers: ["Modifiables", "Non modifiables", "Supprimables", "Dynamiques"],
    correct: 1,
  },
  {
    question: "51) isset() vérifie :",
    answers: [
      "Si une variable existe",
      "Si une variable est vide",
      "Si une variable est nulle",
      "Si elle est numérique",
    ],
    correct: 0,
  },
  {
    question: "52) empty() retourne true si :",
    answers: ["Variable non définie", "Valeur vide", "0", "tous"],
    correct: 3,
  },
  {
    question: "53) unset() sert à :",
    answers: [
      "Créer une variable",
      "Modifier une variable",
      "Supprimer une variable",
      "Afficher une variable",
    ],
    correct: 2,
  },
  {
    question: "54) Type booléen :",
    answers: ["true / false", "0 / 1", "yes / no", "on / off"],
    correct: 0,
  },
  {
    question: "55) switch est une alternative à :",
    answers: ["for", "while", "if", "foreach"],
    correct: 2,
  },
  {
    question: "56) while est une boucle :",
    answers: ["Conditionnelle", "Infinie", "Numérique", "Statique"],
    correct: 0,
  },
  {
    question: "57) do…while s’exécute :",
    answers: ["0 fois minimum", "1 fois minimum", "Toujours 2 fois", "Jamais"],
    correct: 1,
  },
  {
    question: "58) PHP peut générer :",
    answers: ["HTML", "JSON", "XML", "tous"],
    correct: 3,
  },
  {
    question: "59) htmlentities() sert à :",
    answers: ["Chiffrer", "Sécuriser le HTML", "Compresser", "Décoder"],
    correct: 1,
  },
  {
    question: "60) htmlspecialchars() protège contre :",
    answers: ["SQL Injection", "XSS", "CSRF", "Malware"],
    correct: 1,
  },
  {
    question: "61) header() doit être utilisé :",
    answers: [
      "Après echo",
      "Avant tout affichage",
      "N’importe quand",
      "Dans HTML",
    ],
    correct: 1,
  },
  {
    question: "62) exit() permet de :",
    answers: [
      "Quitter PHP",
      "Arrêter le script",
      "Redémarrer",
      "Supprimer une variable",
    ],
    correct: 1,
  },
  {
    question: "63) die() est équivalent à :",
    answers: ["break", "exit", "return", "stop"],
    correct: 1,
  },
  {
    question: "64) PHP supporte la POO :",
    answers: ["Oui", "Non"],
    correct: 0,
  },
  {
    question: "65) Mot-clé pour créer une classe :",
    answers: ["object", "class", "struct", "new"],
    correct: 1,
  },
  {
    question: "66) new sert à :",
    answers: ["Définir une classe", "Créer un objet", "Supprimer", "Hériter"],
    correct: 1,
  },
  {
    question: "67) Constructeur :",
    answers: ["__init()", "__construct()", "construct()", "init()"],
    correct: 1,
  },
  {
    question: "68) Visibilité par défaut :",
    answers: ["private", "protected", "public", "static"],
    correct: 2,
  },
  {
    question: "69) Héritage :",
    answers: ["extend", "inherits", "extends", "include"],
    correct: 2,
  },
  {
    question: "70) Une classe peut hériter de :",
    answers: ["Plusieurs classes", "Une seule classe", "Aucune", "Toutes"],
    correct: 1,
  },
  {
    question: "71) interface permet :",
    answers: ["Héritage multiple", "Sécurité", "Performance", "Compilation"],
    correct: 0,
  },
  {
    question: "72) final empêche :",
    answers: ["L’héritage", "L’instanciation", "L’exécution", "L’affichage"],
    correct: 0,
  },
  {
    question: "73) static appartient à :",
    answers: ["L’objet", "La classe", "L’instance", "La session"],
    correct: 1,
  },
  {
    question: "74) Namespace sert à :",
    answers: [
      "Sécurité",
      "Organisation du code",
      "Performance",
      "Base de données",
    ],
    correct: 1,
  },
  {
    question: "75) PHP peut envoyer des emails avec :",
    answers: ["sendmail()", "mail()", "email()", "smtp()"],
    correct: 1,
  },
  {
    question: "76) Superglobale serveur :",
    answers: ["$_SERVER", "$_HOST", "$_ENV", "$_HTTP"],
    correct: 0,
  },
  {
    question: "77) $_SERVER['REQUEST_METHOD'] retourne :",
    answers: ["L’URL", "GET ou POST", "Le serveur", "Le navigateur"],
    correct: 1,
  },
  {
    question: "78) Trait est :",
    answers: [
      "Une classe",
      "Une interface",
      "Un mécanisme de réutilisation",
      "Une variable",
    ],
    correct: 2,
  },
  {
    question: "79) PHP est compatible avec :",
    answers: ["Apache", "Nginx", "IIS", "tous"],
    correct: 3,
  },
  {
    question: "80) Version actuelle populaire :",
    answers: ["PHP 5", "PHP 7", "PHP 8", "PHP 4"],
    correct: 2,
  },
  {
    question: "81) isset($_POST['x']) sert à :",
    answers: ["Supprimer x", "Tester existence", "Afficher x", "Modifier x"],
    correct: 1,
  },
  {
    question: "82) trim() enlève :",
    answers: ["Les chiffres", "Les espaces", "Les lettres", "Les symboles"],
    correct: 1,
  },
  {
    question: "83) explode() sert à :",
    answers: ["Fusionner", "Découper une chaîne", "Supprimer", "Compter"],
    correct: 1,
  },
  {
    question: "84) implode() sert à :",
    answers: ["Séparer", "Fusionner un tableau", "Trier", "Compter"],
    correct: 1,
  },
  {
    question: "85) sort() trie :",
    answers: ["Clés", "Valeurs", "Les deux", "Rien"],
    correct: 1,
  },
  {
    question: "86) ksort() trie :",
    answers: ["Valeurs", "Clés", "Objets", "Classes"],
    correct: 1,
  },
  {
    question: "87) array_push() :",
    answers: ["Supprime", "Ajoute à la fin", "Ajoute au début", "Trie"],
    correct: 1,
  },
  {
    question: "88) array_pop() :",
    answers: ["Ajoute", "Supprime le dernier", "Supprime le premier", "Trie"],
    correct: 1,
  },
  {
    question: "89) date() sert à :",
    answers: ["Calculer", "Afficher la date", "Supprimer", "Convertir"],
    correct: 1,
  },
  {
    question: "90) time() retourne :",
    answers: ["Date", "Timestamp", "Heure lisible", "Année"],
    correct: 1,
  },
  {
    question: "91) include_once évite :",
    answers: ["Les erreurs", "Les doublons", "Les sessions", "Les cookies"],
    correct: 1,
  },
  {
    question: "92) require_once évite :",
    answers: [
      "Les doublons",
      "Les boucles",
      "Les variables",
      "Les erreurs SQL",
    ],
    correct: 0,
  },
  {
    question: "93) phpinfo() affiche :",
    answers: ["Code", "Configuration PHP", "Base de données", "Sessions"],
    correct: 1,
  },
  {
    question: "94) unset($_SESSION) :",
    answers: ["Supprime une session", "Détruit toutes", "Erreur", "Rien"],
    correct: 0,
  },
  {
    question: "95) session_destroy() :",
    answers: [
      "Supprime une variable",
      "Détruit la session",
      "Pause",
      "Redémarre",
    ],
    correct: 1,
  },
  {
    question: "96) header('Content-Type: application/json') sert à :",
    answers: ["Envoyer HTML", "Envoyer JSON", "Envoyer XML", "Envoyer texte"],
    correct: 1,
  },
  {
    question: "97) PHP peut être utilisé en CLI :",
    answers: ["Oui", "Non"],
    correct: 0,
  },
  {
    question: "98) Le typage en PHP est :",
    answers: ["Fort", "Faible", "Statique", "Obligatoire"],
    correct: 1,
  },
  {
    question: "99) declare(strict_types=1) rend PHP :",
    answers: ["Plus lent", "Typé strict", "Interprété", "Compilé"],
    correct: 1,
  },
  {
    question: "100) PHP est adapté pour :",
    answers: ["Jeux 3D", "Sites web dynamiques", "Systèmes embarqués", "OS"],
    correct: 1,
  },
  {
    question: "101) Quelle fonction permet d’inclure un fichier ?",
    answers: ["load", "import", "include", "open"],
    correct: 2,
  },
  {
    question:
      "102) Quelle est la différence principale entre include et require ?",
    answers: [
      "Aucune",
      "include arrête le script",
      "require arrête le script en cas d’erreur",
      "include est plus rapide",
    ],
    correct: 2,
  },
  {
    question: "103) Quelle fonction teste si une variable est numérique ?",
    answers: ["is_int()", "is_number()", "is_numeric()", "is_float()"],
    correct: 2,
  },
  {
    question: "104) Quel opérateur logique signifie ET ?",
    answers: ["||", "!", "&&", "=="],
    correct: 2,
  },
  {
    question: "105) Quel opérateur logique signifie OU ?",
    answers: ["&&", "||", "!", "==="],
    correct: 1,
  },
  {
    question: "106) L’opérateur ! signifie :",
    answers: ["ET", "OU", "NON", "ÉGAL"],
    correct: 2,
  },
  {
    question: "107) Quelle fonction convertit en entier ?",
    answers: ["intval()", "parseInt()", "toInt()", "castInt()"],
    correct: 0,
  },
  {
    question: "108) Quelle fonction convertit en chaîne ?",
    answers: ["strval()", "tostring()", "string()", "convert()"],
    correct: 0,
  },
  {
    question: "109) Quelle fonction arrondit un nombre ?",
    answers: ["ceil()", "round()", "floor()", "toutes"],
    correct: 3,
  },
  {
    question: "110) floor(4.9) retourne :",
    answers: ["4", "5", "4.9", "erreur"],
    correct: 0,
  },
  {
    question: "111) ceil(4.1) retourne :",
    answers: ["4", "4.1", "5", "erreur"],
    correct: 2,
  },
  {
    question: "112) round(4.5) retourne :",
    answers: ["4", "5", "4.0", "erreur"],
    correct: 1,
  },
  {
    question: "113) Quelle fonction génère un nombre aléatoire ?",
    answers: ["rand()", "random()", "mt_rand()", "a et c"],
    correct: 3,
  },
  {
    question: "114) Quelle fonction retourne la valeur max d’un tableau ?",
    answers: ["max()", "high()", "top()", "biggest()"],
    correct: 0,
  },
  {
    question: "115) Quelle fonction retourne la valeur min ?",
    answers: ["min()", "low()", "small()", "bottom()"],
    correct: 0,
  },
  {
    question: "116) in_array() sert à :",
    answers: [
      "Ajouter un élément",
      "Supprimer",
      "Vérifier l’existence",
      "Trier",
    ],
    correct: 2,
  },
  {
    question: "117) array_key_exists() vérifie :",
    answers: ["Une valeur", "Une clé", "Un type", "Un index"],
    correct: 1,
  },
  {
    question: "118) array_merge() sert à :",
    answers: ["Trier", "Fusionner des tableaux", "Supprimer", "Copier"],
    correct: 1,
  },
  {
    question: "119) array_reverse() :",
    answers: ["Trie", "Inverse l’ordre", "Supprime", "Ajoute"],
    correct: 1,
  },
  {
    question: "120) explode() utilise :",
    answers: ["Un séparateur", "Un tableau", "Un objet", "Une classe"],
    correct: 0,
  },
  {
    question: "121) implode() retourne :",
    answers: ["Un tableau", "Une chaîne", "Un objet", "Un booléen"],
    correct: 1,
  },
  {
    question: "122) strpos() retourne :",
    answers: ["true/false", "La position", "La longueur", "Le mot"],
    correct: 1,
  },
  {
    question: "123) Si strpos() ne trouve rien, elle retourne :",
    answers: ["-1", "false", "null", "0"],
    correct: 1,
  },
  {
    question: "124) strtolower() :",
    answers: ["Met en majuscules", "Met en minuscules", "Supprime", "Coupe"],
    correct: 1,
  },
  {
    question: "125) strtoupper() :",
    answers: ["Minuscules", "Majuscules", "Chiffres", "Symboles"],
    correct: 1,
  },
  {
    question: "126) substr() permet de :",
    answers: ["Supprimer", "Extraire une sous-chaîne", "Trier", "Convertir"],
    correct: 1,
  },
  {
    question: "127) htmlspecialchars() protège contre :",
    answers: ["SQL Injection", "XSS", "CSRF", "Malware"],
    correct: 1,
  },
  {
    question: "128) addslashes() ajoute :",
    answers: ["Des espaces", "Des guillemets", "Des antislashs", "Des tags"],
    correct: 2,
  },
  {
    question: "129) filter_input() sert à :",
    answers: ["Valider des données", "Supprimer", "Trier", "Compresser"],
    correct: 0,
  },
  {
    question: "130) filter_var() permet :",
    answers: ["Validation", "Nettoyage", "Sécurité", "tous"],
    correct: 3,
  },
  {
    question: "131) Quelle constante représente le répertoire courant ?",
    answers: ["FILE", "LINE", "DIR", "CLASS"],
    correct: 2,
  },
  {
    question: "132) FILE retourne :",
    answers: [
      "Le dossier",
      "Le nom du fichier",
      "Le chemin du fichier",
      "La classe",
    ],
    correct: 2,
  },
  {
    question: "133) LINE retourne :",
    answers: ["Le numéro de ligne", "Le fichier", "La fonction", "La classe"],
    correct: 0,
  },
  {
    question: "134) FUNCTION retourne :",
    answers: [
      "Le nom de la classe",
      "Le nom de la fonction",
      "Le fichier",
      "La ligne",
    ],
    correct: 1,
  },
  {
    question: "135) require_once permet :",
    answers: [
      "Inclusion multiple",
      "Inclusion unique",
      "Suppression",
      "Compilation",
    ],
    correct: 1,
  },
  {
    question: "136) PHP peut gérer les exceptions avec :",
    answers: ["try/catch", "if/else", "switch", "loop"],
    correct: 0,
  },
  {
    question: "137) throw sert à :",
    answers: [
      "Attraper une exception",
      "Lancer une exception",
      "Supprimer",
      "Continuer",
    ],
    correct: 1,
  },
  {
    question: "138) finally s’exécute :",
    answers: ["Seulement en erreur", "Toujours", "Jamais", "Avant try"],
    correct: 1,
  },
  {
    question: "139) set_error_handler() sert à :",
    answers: [
      "Afficher erreurs",
      "Gérer erreurs personnalisées",
      "Supprimer erreurs",
      "Ignorer",
    ],
    correct: 1,
  },
  {
    question: "140) fopen() sert à :",
    answers: ["Ouvrir un fichier", "Lire", "Écrire", "tous"],
    correct: 0,
  },
  {
    question: "141) fread() :",
    answers: ["Écrit", "Lit", "Supprime", "Ferme"],
    correct: 1,
  },
  {
    question: "142) fwrite() :",
    answers: ["Lit", "Écrit", "Supprime", "Ferme"],
    correct: 1,
  },
  {
    question: "143) fclose() :",
    answers: ["Ouvre", "Lit", "Ferme", "Supprime"],
    correct: 2,
  },
  {
    question: "144) file_exists() vérifie :",
    answers: ["Taille", "Type", "Existence", "Droits"],
    correct: 2,
  },
  {
    question: "145) unlink() :",
    answers: ["Crée", "Lit", "Supprime un fichier", "Copie"],
    correct: 2,
  },
  {
    question: "146) move_uploaded_file() :",
    answers: ["Lit", "Supprime", "Déplace un fichier uploadé", "Renomme"],
    correct: 2,
  },
  {
    question: "147) $_FILES['fichier']['name'] contient :",
    answers: [
      "Le type",
      "La taille",
      "Le nom original",
      "Le chemin temporaire",
    ],
    correct: 2,
  },
  {
    question: "148) $_FILES['fichier']['tmp_name'] :",
    answers: ["Nom réel", "Taille", "Chemin temporaire", "Extension"],
    correct: 2,
  },
  {
    question: "149) chmod() sert à :",
    answers: ["Supprimer", "Modifier permissions", "Lire", "Copier"],
    correct: 1,
  },
  {
    question: "150) is_uploaded_file() :",
    answers: ["Vérifie upload", "Supprime", "Déplace", "Lit"],
    correct: 0,
  },
  {
    question: "151) basename() retourne :",
    answers: ["Le dossier", "Le nom du fichier", "L’extension", "Le chemin"],
    correct: 1,
  },
  {
    question: "152) pathinfo() permet :",
    answers: ["Lire", "Infos sur chemin", "Supprimer", "Copier"],
    correct: 1,
  },
  {
    question: "153) parse_url() :",
    answers: ["Valide URL", "Découpe URL", "Encode URL", "Supprime"],
    correct: 1,
  },
  {
    question: "154) urlencode() sert à :",
    answers: ["Décoder", "Encoder URL", "Supprimer", "Trier"],
    correct: 1,
  },
  {
    question: "155) urldecode() :",
    answers: ["Encoder", "Décoder", "Chiffrer", "Compresser"],
    correct: 1,
  },
  {
    question: "156) header('404 Not Found') sert à :",
    answers: ["Rediriger", "Erreur HTTP", "JSON", "HTML"],
    correct: 1,
  },
  {
    question: "157) http_response_code() :",
    answers: [
      "Retourne code HTTP",
      "Envoie mail",
      "Supprime header",
      "Redirige",
    ],
    correct: 0,
  },
  {
    question: "158) sleep(5) :",
    answers: ["Arrête script", "Pause 5 secondes", "Boucle", "Sort"],
    correct: 1,
  },
  {
    question: "159) usleep() utilise :",
    answers: ["Secondes", "Millisecondes", "Microsecondes", "Minutes"],
    correct: 2,
  },
  {
    question: "160) microtime(true) retourne :",
    answers: ["Heure lisible", "Timestamp précis", "Date", "Année"],
    correct: 1,
  },
  {
    question: "161) php_sapi_name() :",
    answers: [
      "Version PHP",
      "Type d’interface (CLI, Apache)",
      "OS",
      "Extension",
    ],
    correct: 1,
  },
  {
    question: "162) ini_get() permet :",
    answers: ["Modifier config", "Lire config", "Supprimer", "Créer"],
    correct: 1,
  },
  {
    question: "163) ini_set() permet :",
    answers: ["Lire", "Modifier config", "Supprimer", "Compiler"],
    correct: 1,
  },
  {
    question: "164) memory_limit est :",
    answers: ["Temps", "Mémoire max", "CPU", "Disque"],
    correct: 1,
  },
  {
    question: "165) max_execution_time :",
    answers: ["Taille fichier", "Temps max script", "RAM", "Upload"],
    correct: 1,
  },
  {
    question: "166) error_log() :",
    answers: ["Affiche", "Enregistre erreurs", "Supprime", "Ignore"],
    correct: 1,
  },
  {
    question: "167) log_errors active :",
    answers: ["Affichage", "Enregistrement erreurs", "Upload", "Sessions"],
    correct: 1,
  },
  {
    question: "168) display_errors :",
    answers: ["Log", "Affiche erreurs", "Supprime", "Encode"],
    correct: 1,
  },
  {
    question: "169) PHP peut générer des PDF avec :",
    answers: ["TCPDF", "FPDF", "DOMPDF", "tous"],
    correct: 3,
  },
  {
    question: "170) cURL sert à :",
    answers: ["Base de données", "Requêtes HTTP", "Sessions", "Cookies"],
    correct: 1,
  },
  {
    question: "171) curl_init() :",
    answers: ["Ferme", "Initialise", "Exécute", "Supprime"],
    correct: 1,
  },
  {
    question: "172) curl_exec() :",
    answers: ["Initialise", "Exécute", "Ferme", "Configure"],
    correct: 1,
  },
  {
    question: "173) curl_close() :",
    answers: ["Ouvre", "Ferme", "Lit", "Écrit"],
    correct: 1,
  },
  {
    question: "174) json_last_error() :",
    answers: ["Code erreur JSON", "Message", "Supprime", "Encode"],
    correct: 0,
  },
  {
    question: "175) serialize() :",
    answers: ["Convertit en chaîne", "Chiffre", "Compresse", "Supprime"],
    correct: 0,
  },
  {
    question: "176) unserialize() :",
    answers: ["Supprime", "Décode", "Restaure variable", "Trie"],
    correct: 2,
  },
  {
    question: "177) eval() :",
    answers: ["Sécurisé", "Dangereux", "Recommandé", "Obligatoire"],
    correct: 1,
  },
  {
    question: "178) PHP est sensible à la casse pour :",
    answers: ["Variables", "Fonctions", "Classes", "Tous"],
    correct: 0,
  },
  {
    question: "179) Les noms de fonctions sont :",
    answers: ["Sensibles à la casse", "Insensibles", "Uniques", "Limités"],
    correct: 1,
  },
  {
    question: "180) strict_types agit sur :",
    answers: ["Typage", "Performance", "Sécurité", "Mémoire"],
    correct: 0,
  },
  {
    question: "181) Type hinting concerne :",
    answers: ["Variables", "Paramètres", "Fonctions", "Tous"],
    correct: 3,
  },
  {
    question: "182) ?string signifie :",
    answers: ["Optionnel", "Nullable", "Tableau", "Objet"],
    correct: 1,
  },
  {
    question: "183) return type est défini avec :",
    answers: [":", "->", "=>", "::"],
    correct: 0,
  },
  {
    question: "184) void signifie :",
    answers: ["Retourne 0", "Retourne null", "Ne retourne rien", "Erreur"],
    correct: 2,
  },
  {
    question: "185) match est introduit en :",
    answers: ["PHP 5", "PHP 7", "PHP 8", "PHP 4"],
    correct: 2,
  },
  {
    question: "186) match est une alternative à :",
    answers: ["if", "for", "switch", "foreach"],
    correct: 2,
  },
  {
    question: "187) null coalescing operator :",
    answers: ["??", "?:", "!!", "&&"],
    correct: 0,
  },
  {
    question: "188) $a ?? $b signifie :",
    answers: ["$a + $b", "$a sinon $b", "$a et $b", "$b seulement"],
    correct: 1,
  },
  {
    question: "189) Opérateur spaceship :",
    answers: ["<=>", "===", "!=", "<="],
    correct: 0,
  },
  {
    question: "190) <=> retourne :",
    answers: ["bool", "-1, 0 ou 1", "string", "array"],
    correct: 1,
  },
  {
    question: "191) PHP supporte les enums depuis :",
    answers: ["PHP 7", "PHP 8.0", "PHP 8.1", "PHP 5"],
    correct: 2,
  },
  {
    question: "192) readonly empêche :",
    answers: ["Lecture", "Écriture après init", "Héritage", "Instanciation"],
    correct: 1,
  },
  {
    question: "193) Named arguments permettent :",
    answers: ["Ordre fixe", "Ordre libre", "Performance", "Sécurité"],
    correct: 1,
  },
  {
    question: "194) spread operator est :",
    answers: ["...", "***", "->", "::"],
    correct: 0,
  },
  {
    question: "195) ...$args permet :",
    answers: ["Tableau", "Arguments variables", "Typage", "Héritage"],
    correct: 1,
  },
  {
    question: "196) PHP est utilisé dans WordPress :",
    answers: ["Oui", "Non"],
    correct: 0,
  },
  {
    question: "197) Symfony est :",
    answers: ["CMS", "Framework PHP", "IDE", "Serveur"],
    correct: 1,
  },
  {
    question: "198) CodeIgniter est :",
    answers: ["CMS", "Framework", "DB", "Plugin"],
    correct: 1,
  },
  {
    question: "199) MVC signifie :",
    answers: [
      "Model View Controller",
      "Main View Code",
      "Module Variable Class",
      "Modern View Core",
    ],
    correct: 0,
  },
  {
    question: "200) PHP est surtout utilisé pour :",
    answers: ["IA", "Backend web", "Jeux", "OS"],
    correct: 1,
  },
  {
    question: "201) L’opérateur ?: est appelé :",
    answers: ["Ternaire", "Binaire", "Unaire", "Logique"],
    correct: 0,
  },
  {
    question: "202) Exemple correct de ternaire :",
    answers: [
      "$a = if($x) 1 : 0;",
      "$a = $x ? 1 : 0;",
      "$a = ($x : 1 ? 0);",
      "$a = $x ?? 1 : 0;",
    ],
    correct: 1,
  },
  {
    question: "203) L’opérateur ?? évite :",
    answers: ["if/else", "undefined variable", "erreurs SQL", "boucles"],
    correct: 1,
  },
  {
    question: "204) isset($x) retourne false si :",
    answers: ["$x = 0", '$x = ""', "$x = null", "$x = false"],
    correct: 2,
  },
  {
    question: "205) empty($x) retourne true si :",
    answers: ["$x = 1", '$x = "abc"', "$x = []", "$x = 5"],
    correct: 2,
  },
  {
    question:
      "206) La portée (scope) d’une variable définie hors fonction est :",
    answers: ["locale", "globale", "statique", "privée"],
    correct: 1,
  },
  {
    question: "207) Pour utiliser une variable globale dans une fonction :",
    answers: ["use", "global", "static", "public"],
    correct: 1,
  },
  {
    question: "208) Une variable static dans une fonction :",
    answers: [
      "Se réinitialise",
      "Garde sa valeur",
      "Est globale",
      "Est supprimée",
    ],
    correct: 1,
  },
  {
    question: "209) PHP est faiblement typé signifie :",
    answers: [
      "Types obligatoires",
      "Conversion automatique",
      "Pas de types",
      "Compilation",
    ],
    correct: 1,
  },
  {
    question: "210) Le typage strict s’active avec :",
    answers: [
      "strict_types(1)",
      "declare(strict_types=1)",
      "set_strict(true)",
      "use strict",
    ],
    correct: 1,
  },
  {
    question: "211) Type union (PHP 8) :",
    answers: ["int|string", "int+string", "int or string", "int,string"],
    correct: 0,
  },
  {
    question: "212) mixed signifie :",
    answers: ["int", "string", "tous types", "null"],
    correct: 2,
  },
  {
    question: "213) never signifie :",
    answers: [
      "retourne null",
      "retourne false",
      "ne retourne jamais",
      "retourne 0",
    ],
    correct: 2,
  },
  {
    question: "214) callable désigne :",
    answers: [
      "une classe",
      "une fonction",
      "une fonction appelable",
      "un tableau",
    ],
    correct: 2,
  },
  {
    question: "215) Arrow functions utilisent :",
    answers: ["function() {}", "fn() =>", "lambda()", "=> {}"],
    correct: 1,
  },
  {
    question: "216) Arrow functions héritent :",
    answers: ["global", "static", "scope parent", "session"],
    correct: 2,
  },
  {
    question: "217) Closure est :",
    answers: ["une classe", "une fonction anonyme", "un objet", "un namespace"],
    correct: 1,
  },
  {
    question: "218) use dans une closure sert à :",
    answers: [
      "importer classe",
      "utiliser variable externe",
      "héritage",
      "sécurité",
    ],
    correct: 1,
  },
  {
    question: "219) Les closures sont des :",
    answers: ["classes", "objets", "méthodes", "interfaces"],
    correct: 1,
  },
  {
    question: "220) array_map() permet :",
    answers: ["filtrer", "transformer", "trier", "supprimer"],
    correct: 1,
  },
  {
    question: "221) array_filter() permet :",
    answers: ["transformer", "filtrer", "trier", "fusionner"],
    correct: 1,
  },
  {
    question: "222) array_reduce() permet :",
    answers: ["réduire à une valeur", "trier", "supprimer", "copier"],
    correct: 0,
  },
  {
    question: "223) array_walk() applique :",
    answers: ["une fonction", "un tri", "une suppression", "une fusion"],
    correct: 0,
  },
  {
    question: "224) uasort() trie selon :",
    answers: ["clés", "valeurs avec callback", "index", "taille"],
    correct: 1,
  },
  {
    question: "225) usort() :",
    answers: ["clés", "valeurs", "valeurs avec callback", "clés avec callback"],
    correct: 2,
  },
  {
    question: "226) ksort() trie par :",
    answers: ["valeurs", "clés", "longueur", "type"],
    correct: 1,
  },
  {
    question: "227) array_keys() retourne :",
    answers: ["valeurs", "clés", "objets", "index numériques"],
    correct: 1,
  },
  {
    question: "228) array_values() retourne :",
    answers: ["clés", "valeurs", "objets", "types"],
    correct: 1,
  },
  {
    question: "229) array_chunk() :",
    answers: ["fusionne", "découpe", "trie", "filtre"],
    correct: 1,
  },
  {
    question: "230) array_slice() :",
    answers: ["supprime", "extrait", "fusionne", "trie"],
    correct: 1,
  },
  {
    question: "231) array_splice() :",
    answers: ["lit", "remplace/supprime", "copie", "affiche"],
    correct: 1,
  },
  {
    question: "232) array_unique() :",
    answers: ["trie", "supprime doublons", "inverse", "filtre"],
    correct: 1,
  },
  {
    question: "233) array_search() retourne :",
    answers: ["true/false", "index ou clé", "valeur", "tableau"],
    correct: 1,
  },
  {
    question: "234) compact() :",
    answers: ["supprime", "crée tableau depuis variables", "trie", "fusionne"],
    correct: 1,
  },
  {
    question: "235) extract() :",
    answers: [
      "supprime variables",
      "crée variables depuis tableau",
      "trie",
      "encode",
    ],
    correct: 1,
  },
  {
    question: "236) Les superglobales sont accessibles :",
    answers: [
      "uniquement en global",
      "dans les fonctions",
      "partout",
      "seulement en classe",
    ],
    correct: 2,
  },
  {
    question: "237) $_REQUEST contient :",
    answers: ["GET", "POST", "COOKIE", "tous"],
    correct: 3,
  },
  {
    question: "238) header_remove() :",
    answers: ["ajoute", "supprime headers", "lit", "redirige"],
    correct: 1,
  },
  {
    question: "239) ob_start() sert à :",
    answers: ["envoyer sortie", "bufferiser sortie", "supprimer", "rediriger"],
    correct: 1,
  },
  {
    question: "240) ob_get_clean() :",
    answers: ["affiche", "nettoie et retourne", "supprime fichier", "encode"],
    correct: 1,
  },
  {
    question: "241) flush() :",
    answers: ["supprime buffer", "envoie buffer", "lit", "ferme"],
    correct: 1,
  },
  {
    question: "242) setcookie() doit être appelé :",
    answers: ["après HTML", "avant affichage", "dans JS", "dans CSS"],
    correct: 1,
  },
  {
    question: "243) Les cookies sont stockés :",
    answers: ["serveur", "client", "base de données", "session"],
    correct: 1,
  },
  {
    question: "244) Durée d’un cookie dépend de :",
    answers: ["PHP", "navigateur", "expiration", "session"],
    correct: 2,
  },
  {
    question: "245) Une session utilise par défaut :",
    answers: ["cookies", "base de données", "fichiers", "cache"],
    correct: 0,
  },
  {
    question: "246) session_regenerate_id() sert à :",
    answers: ["sécurité", "performance", "debug", "affichage"],
    correct: 0,
  },
  {
    question: "247) CSRF signifie :",
    answers: [
      "Cross Site Request Forgery",
      "Code Secure Request Form",
      "Client Server Request File",
      "Cross Script Resource File",
    ],
    correct: 0,
  },
  {
    question: "248) Protection CSRF :",
    answers: ["token", "cookie", "session seule", "captcha"],
    correct: 0,
  },
  {
    question: "249) XSS est :",
    answers: ["attaque SQL", "attaque script", "attaque réseau", "virus"],
    correct: 1,
  },
  {
    question: "250) SQL Injection est :",
    answers: ["faille SQL", "attaque", "bug", "optimisation"],
    correct: 0,
  },
  {
    question: "251) htmlspecialchars protège contre :",
    answers: ["SQLi", "XSS", "CSRF", "DDoS"],
    correct: 1,
  },
  {
    question: "252) prepared statements utilisent :",
    answers: ["concaténation", "paramètres", "echo", "include"],
    correct: 1,
  },
  {
    question: "253) password_needs_rehash() sert à :",
    answers: ["vérifier", "rehasher", "tester algo", "supprimer"],
    correct: 2,
  },
  {
    question: "254) filter_var($email, FILTER_VALIDATE_EMAIL) :",
    answers: ["nettoie", "valide email", "encode", "chiffre"],
    correct: 1,
  },
  {
    question: "255) htmlentities() convertit :",
    answers: ["SQL", "HTML", "JSON", "XML"],
    correct: 1,
  },
  {
    question: "256) Composer utilise :",
    answers: ["composer.json", "package.json", "php.json", "config.json"],
    correct: 0,
  },
  {
    question: "257) vendor/autoload.php sert à :",
    answers: ["charger classes", "config", "DB", "sessions"],
    correct: 0,
  },
  {
    question: "258) PSR signifie :",
    answers: [
      "PHP Standard Recommendation",
      "PHP Style Rules",
      "PHP Standard Recommendation",
      "PHP Specification Rule",
    ],
    correct: 0,
  },
  {
    question: "259) PSR-4 concerne :",
    answers: ["sécurité", "autoload", "DB", "erreurs"],
    correct: 1,
  },
  {
    question: "260) namespace évite :",
    answers: ["bugs", "conflits de noms", "lenteur", "erreurs SQL"],
    correct: 1,
  },
  {
    question: "261) use permet :",
    answers: ["importer namespace", "créer classe", "supprimer", "sécuriser"],
    correct: 0,
  },
  {
    question: "262) trait permet :",
    answers: ["héritage multiple", "duplication", "compilation", "exécution"],
    correct: 0,
  },
  {
    question: "263) final class empêche :",
    answers: ["instanciation", "héritage", "accès", "modification"],
    correct: 1,
  },
  {
    question: "264) abstract class :",
    answers: ["instanciable", "non instanciable", "finale", "statique"],
    correct: 1,
  },
  {
    question: "265) Une méthode abstract doit être :",
    answers: ["privée", "implémentée", "statique", "finale"],
    correct: 1,
  },
  {
    question: "266) interface définit :",
    answers: [
      "propriétés",
      "méthodes sans corps",
      "variables",
      "constructeurs",
    ],
    correct: 1,
  },
  {
    question: "267) implements est utilisé pour :",
    answers: ["classes", "interfaces", "traits", "namespaces"],
    correct: 1,
  },
  {
    question: "268) instanceof vérifie :",
    answers: ["type", "valeur", "égalité", "null"],
    correct: 0,
  },
  {
    question: "269) __toString() est appelé :",
    answers: ["manuellement", "à l’affichage", "au clone", "à la destruction"],
    correct: 1,
  },
  {
    question: "270) __clone() est appelé :",
    answers: ["à new", "à copy", "à clone", "à delete"],
    correct: 2,
  },
  {
    question: "271) __destruct() :",
    answers: ["création", "suppression", "fin objet", "affichage"],
    correct: 2,
  },
  {
    question: "272) Reflection permet :",
    answers: ["sécurité", "introspection", "compilation", "DB"],
    correct: 1,
  },
  {
    question: "273) DateTime est :",
    answers: ["fonction", "classe", "interface", "trait"],
    correct: 1,
  },
  {
    question: "274) DateInterval représente :",
    answers: ["date", "durée", "heure", "fuseau"],
    correct: 1,
  },
  {
    question: "275) DateTimeZone sert à :",
    answers: ["heure locale", "fuseau horaire", "timestamp", "format"],
    correct: 1,
  },
  {
    question: "276) JSON_THROW_ON_ERROR :",
    answers: ["ignore", "lance exception", "affiche", "supprime"],
    correct: 1,
  },
  {
    question: "277) mb_strlen() gère :",
    answers: ["ASCII", "UTF-8", "binaire", "chiffres"],
    correct: 1,
  },
  {
    question: "278) UTF-8 est :",
    answers: ["langue", "encodage", "framework", "DB"],
    correct: 1,
  },
  {
    question: "279) PHP supporte WebSockets via :",
    answers: ["extensions", "natif", "JS", "HTML"],
    correct: 0,
  },
  {
    question: "280) Ratchet est :",
    answers: ["CMS", "lib PHP", "serveur", "framework JS"],
    correct: 1,
  },
  {
    question: "281) REST API utilise :",
    answers: ["SOAP", "HTTP", "FTP", "SMTP"],
    correct: 1,
  },
  {
    question: "282) Méthode REST pour créer :",
    answers: ["GET", "POST", "PUT", "DELETE"],
    correct: 1,
  },
  {
    question: "283) GET doit être :",
    answers: ["sécurisé", "idempotent", "chiffré", "caché"],
    correct: 1,
  },
  {
    question: "284) PUT sert à :",
    answers: ["créer", "lire", "modifier", "supprimer"],
    correct: 2,
  },
  {
    question: "285) DELETE sert à :",
    answers: ["lire", "modifier", "supprimer", "créer"],
    correct: 2,
  },
  {
    question: "286) HTTP code 200 signifie :",
    answers: ["erreur", "succès", "redirection", "interdit"],
    correct: 1,
  },
  {
    question: "287) HTTP code 404 :",
    answers: ["serveur", "non trouvé", "interdit", "timeout"],
    correct: 1,
  },
  {
    question: "288) HTTP code 500 :",
    answers: ["client", "serveur", "succès", "redirection"],
    correct: 1,
  },
  {
    question: "289) CORS concerne :",
    answers: ["DB", "sécurité navigateur", "serveur PHP", "sessions"],
    correct: 1,
  },
  {
    question: "290) header('Access-Control-Allow-Origin:*') :",
    answers: ["bloque", "autorise", "supprime", "encode"],
    correct: 1,
  },
  {
    question: "291) JWT est :",
    answers: ["session", "token", "cookie", "hash"],
    correct: 1,
  },
  {
    question: "292) JWT contient :",
    answers: ["payload", "header", "signature", "tous"],
    correct: 3,
  },
  {
    question: "293) password_hash utilise par défaut :",
    answers: ["MD5", "SHA1", "BCRYPT", "AES"],
    correct: 2,
  },
  {
    question: "294) sodium est :",
    answers: ["DB", "extension crypto", "framework", "serveur"],
    correct: 1,
  },
  {
    question: "295) random_bytes() génère :",
    answers: ["hash", "aléatoire sécurisé", "nombre simple", "texte"],
    correct: 1,
  },
  {
    question: "296) openssl_encrypt() sert à :",
    answers: ["chiffrer", "hacher", "compresser", "encoder"],
    correct: 0,
  },
  {
    question: "297) PHP peut gérer OAuth via :",
    answers: ["libs", "natif", "JS", "HTML"],
    correct: 0,
  },
  {
    question: "298) Laravel utilise :",
    answers: ["MVC", "MVP", "MVVM", "HMVC"],
    correct: 0,
  },
  {
    question: "299) Symfony utilise :",
    answers: ["composants", "monolithique", "JS", "DB"],
    correct: 0,
  },
  {
    question: "300) PHP reste pertinent car :",
    answers: ["simple", "mature", "large écosystème", "tous"],
    correct: 3,
  },
  {
    question: "301) PHP-FPM est :",
    answers: [
      "Un framework",
      "Un gestionnaire de processus PHP",
      "Un serveur web",
      "Une base de données",
    ],
    correct: 1,
  },
  {
    question: "302) PHP-FPM est souvent utilisé avec :",
    answers: ["Apache", "Nginx", "IIS", "tous"],
    correct: 3,
  },
  {
    question: "303) FastCGI sert à :",
    answers: ["Compiler PHP", "Communication serveur-PHP", "Sécurité", "Cache"],
    correct: 1,
  },
  {
    question: "304) opcode cache en PHP :",
    answers: ["APCu", "OPcache", "Redis", "Memcached"],
    correct: 1,
  },
  {
    question: "305) OPcache permet :",
    answers: ["Sécurité", "Performance", "Debug", "Logs"],
    correct: 1,
  },
  {
    question: "306) require vs include_once :",
    answers: [
      "Aucun الفرق",
      "include_once inclut une seule fois",
      "require_once compile",
      "include_once est plus rapide",
    ],
    correct: 1,
  },
  {
    question: "307) spl_autoload_register() sert à :",
    answers: [
      "Charger fonctions",
      "Charger classes automatiquement",
      "Charger sessions",
      "Charger cookies",
    ],
    correct: 1,
  },
  {
    question: "308) SPL signifie :",
    answers: [
      "Standard PHP Library",
      "Simple PHP Loader",
      "Server PHP Layer",
      "System PHP Logic",
    ],
    correct: 0,
  },
  {
    question: "309) Iterator est :",
    answers: ["Une classe", "Une interface", "Un trait", "Une fonction"],
    correct: 1,
  },
  {
    question: "310) Countable permet :",
    answers: ["foreach", "count()", "sort()", "map()"],
    correct: 1,
  },
  {
    question: "311) Generator permet :",
    answers: ["tableau", "itération paresseuse", "tri", "cache"],
    correct: 1,
  },
  {
    question: "312) yield est utilisé avec :",
    answers: ["classes", "closures", "generators", "traits"],
    correct: 2,
  },
  {
    question: "313) Avantage des generators :",
    answers: ["Vitesse", "Mémoire", "Sécurité", "Lisibilité"],
    correct: 1,
  },
  {
    question: "314) strict_types affecte :",
    answers: [
      "retour seulement",
      "paramètres seulement",
      "paramètres et retours",
      "variables globales",
    ],
    correct: 2,
  },
  {
    question: "315) set_exception_handler() :",
    answers: [
      "Gérer exceptions globales",
      "Lancer exception",
      "Ignorer erreurs",
      "Logger",
    ],
    correct: 0,
  },
  {
    question: "316) Throwable est :",
    answers: ["une classe", "une interface", "un trait", "une fonction"],
    correct: 1,
  },
  {
    question: "317) Error est :",
    answers: ["Exception", "Throwable", "Classe finale", "Warning"],
    correct: 1,
  },
  {
    question: "318) try/catch attrape :",
    answers: ["warnings", "notices", "exceptions", "errors fatales"],
    correct: 2,
  },
  {
    question: "319) ErrorException permet :",
    answers: [
      "transformer erreurs en exceptions",
      "supprimer erreurs",
      "cacher erreurs",
      "compiler",
    ],
    correct: 0,
  },
  {
    question: "320) register_shutdown_function() :",
    answers: ["au début script", "à la fin script", "à l’erreur", "au cache"],
    correct: 1,
  },
  {
    question: "321) shutdown function s’exécute :",
    answers: ["avant return", "après exit", "avant include", "après echo"],
    correct: 1,
  },
  {
    question: "322) tick() est lié à :",
    answers: ["signal", "boucle", "mémoire", "compilation"],
    correct: 0,
  },
  {
    question: "323) declare(ticks=1) sert à :",
    answers: ["sécurité", "performance", "signal handling", "cache"],
    correct: 2,
  },
  {
    question: "324) pcntl permet :",
    answers: ["threads", "process control", "sockets", "fichiers"],
    correct: 1,
  },
  {
    question: "325) pcntl_fork() :",
    answers: ["thread", "process enfant", "socket", "fichier"],
    correct: 1,
  },
  {
    question: "326) PHP est multithread :",
    answers: ["oui", "non", "parfois", "dépend OS"],
    correct: 1,
  },
  {
    question: "327) Async en PHP se fait via :",
    answers: ["threads", "extensions", "Java", "HTML"],
    correct: 1,
  },
  {
    question: "328) ReactPHP est :",
    answers: ["framework web", "lib async PHP", "CMS", "DB"],
    correct: 1,
  },
  {
    question: "329) Event loop est utilisé pour :",
    answers: ["sync", "async", "cache", "DB"],
    correct: 1,
  },
  {
    question: "330) Promise en PHP :",
    answers: ["native", "via libs", "impossible", "deprecated"],
    correct: 1,
  },
  {
    question: "331) Swoole apporte :",
    answers: ["PHP synchrone", "serveur async", "templating", "ORM"],
    correct: 1,
  },
  {
    question: "332) Coroutine améliore :",
    answers: ["mémoire", "concurrence", "sécurité", "syntaxe"],
    correct: 1,
  },
  {
    question: "333) Socket en PHP :",
    answers: ["socket_create", "socket_open", "open_socket", "create_socket"],
    correct: 0,
  },
  {
    question: "334) stream_socket_client() :",
    answers: ["serveur", "client", "cache", "DB"],
    correct: 1,
  },
  {
    question: "335) stream context sert à :",
    answers: ["config stream", "compiler", "cache", "debug"],
    correct: 0,
  },
  {
    question: "336) file_get_contents() peut lire :",
    answers: ["fichier", "URL", "stream", "tous"],
    correct: 3,
  },
  {
    question: "337) allow_url_fopen permet :",
    answers: ["lire URL", "écrire DB", "cache", "session"],
    correct: 0,
  },
  {
    question: "338) HTTP wrapper :",
    answers: ["http://", "file://", "php://", "tous"],
    correct: 3,
  },
  {
    question: "339) php://input permet :",
    answers: ["lire POST brut", "écrire fichier", "session", "cookie"],
    correct: 0,
  },
  {
    question: "340) php://memory :",
    answers: ["fichier", "flux mémoire", "cache", "log"],
    correct: 1,
  },
  {
    question: "341) phar est :",
    answers: ["archive PHP", "DB", "framework", "cache"],
    correct: 0,
  },
  {
    question: "342) Phar permet :",
    answers: ["distribution", "compilation", "chiffrement", "logs"],
    correct: 0,
  },
  {
    question: "343) Composer peut installer :",
    answers: ["extensions PHP", "librairies PHP", "PHP lui-même", "OS"],
    correct: 1,
  },
  {
    question: "344) versioning sémantique :",
    answers: ["MAJOR.MINOR.PATCH", "X.Y", "YEAR.MONTH", "BUILD"],
    correct: 0,
  },
  {
    question: "345) ^1.2 dans composer signifie :",
    answers: ["exactement 1.2", ">=1.2 <2.0", "<=1.2", "n’importe"],
    correct: 1,
  },
  {
    question: "346) require-dev sert à :",
    answers: ["production", "développement", "runtime", "cache"],
    correct: 1,
  },
  {
    question: "347) PHPUnit est :",
    answers: ["framework", "lib test", "IDE", "DB"],
    correct: 1,
  },
  {
    question: "348) Test unitaire vérifie :",
    answers: ["module entier", "petite unité", "UI", "performance"],
    correct: 1,
  },
  {
    question: "349) Mock est :",
    answers: ["vrai objet", "faux objet", "DB", "cache"],
    correct: 1,
  },
  {
    question: "350) TDD signifie :",
    answers: [
      "Test Driven Development",
      "Type Data Design",
      "Tool Debug Dev",
      "Test Deploy Dev",
    ],
    correct: 0,
  },
  {
    question: "351) Code coverage mesure :",
    answers: ["bugs", "lignes exécutées", "vitesse", "mémoire"],
    correct: 1,
  },
  {
    question: "352) static analysis :",
    answers: ["exécution", "analyse sans exécuter", "debug", "log"],
    correct: 1,
  },
  {
    question: "353) PHPStan est :",
    answers: ["framework", "outil analyse statique", "IDE", "DB"],
    correct: 1,
  },
  {
    question: "354) Psalm est :",
    answers: ["CMS", "analyse statique", "ORM", "cache"],
    correct: 1,
  },
  {
    question: "355) Lint PHP vérifie :",
    answers: ["logique", "syntaxe", "performance", "sécurité"],
    correct: 1,
  },
  {
    question: "356) php -l sert à :",
    answers: ["exécuter", "lint", "log", "loop"],
    correct: 1,
  },
  {
    question: "357) CI/CD permet :",
    answers: [
      "tests automatiques",
      "déploiement auto",
      "intégration continue",
      "tous",
    ],
    correct: 3,
  },
  {
    question: "358) GitHub Actions est :",
    answers: ["langage", "CI/CD", "framework", "DB"],
    correct: 1,
  },
  {
    question: "359) Docker avec PHP sert à :",
    answers: ["virtualisation légère", "compilation", "DB", "cache"],
    correct: 0,
  },
  {
    question: "360) Image PHP officielle :",
    answers: ["php:8.x", "php_latest", "docker_php", "php/server"],
    correct: 0,
  },
  {
    question: "361) docker-compose permet :",
    answers: ["lancer multi-services", "compiler", "debug", "cache"],
    correct: 0,
  },
  {
    question: "362) ENV en PHP :",
    answers: ["variable OS", "session", "cookie", "DB"],
    correct: 0,
  },
  {
    question: "363) getenv() lit :",
    answers: ["session", "cookie", "variable env", "DB"],
    correct: 2,
  },
  {
    question: "364) Dotenv sert à :",
    answers: ["gérer env", "DB", "cache", "log"],
    correct: 0,
  },
  {
    question: "365) Monolog est :",
    answers: ["framework", "logger", "DB", "cache"],
    correct: 1,
  },
  {
    question: "366) PSR-3 concerne :",
    answers: ["autoload", "logging", "cache", "HTTP"],
    correct: 1,
  },
  {
    question: "367) Cache PSR-6 / PSR-16 :",
    answers: ["sessions", "cache", "DB", "logs"],
    correct: 1,
  },
  {
    question: "368) Redis est utilisé pour :",
    answers: ["cache", "queue", "session", "tous"],
    correct: 3,
  },
  {
    question: "369) Memcached est :",
    answers: ["DB", "cache mémoire", "framework", "serveur web"],
    correct: 1,
  },
  {
    question: "370) ORM signifie :",
    answers: [
      "Object Relational Mapping",
      "Online Resource Manager",
      "Object Runtime Model",
      "Open Relation Method",
    ],
    correct: 0,
  },
  {
    question: "371) Doctrine est :",
    answers: ["CMS", "ORM", "DB", "framework"],
    correct: 1,
  },
  {
    question: "372) Migration sert à :",
    answers: ["déplacer serveur", "versionner DB", "backup", "cache"],
    correct: 1,
  },
  {
    question: "373) Seeder permet :",
    answers: ["vider DB", "remplir DB", "supprimer", "migrer"],
    correct: 1,
  },
  {
    question: "374) Eloquent est :",
    answers: ["ORM Laravel", "framework", "DB", "cache"],
    correct: 0,
  },
  {
    question: "375) Query Builder :",
    answers: ["SQL brut", "abstraction SQL", "DB", "cache"],
    correct: 1,
  },
  {
    question: "376) N+1 problem :",
    answers: ["réseau", "ORM requêtes", "cache", "sécurité"],
    correct: 1,
  },
  {
    question: "377) eager loading évite :",
    answers: ["XSS", "N+1", "SQLi", "CSRF"],
    correct: 1,
  },
  {
    question: "378) Lazy loading :",
    answers: ["charge tout", "charge à la demande", "compile", "cache"],
    correct: 1,
  },
  {
    question: "379) Transaction DB :",
    answers: ["commit/rollback", "select", "join", "index"],
    correct: 0,
  },
  {
    question: "380) ACID signifie :",
    answers: ["Atomicité", "Cohérence", "Isolation", "tous"],
    correct: 3,
  },
  {
    question: "381) Index DB améliore :",
    answers: ["écriture", "lecture", "stockage", "backup"],
    correct: 1,
  },
  {
    question: "382) Explain SQL sert à :",
    answers: ["exécuter", "analyser requête", "sécuriser", "migrer"],
    correct: 1,
  },
  {
    question: "383) Prepared statement réduit :",
    answers: ["bugs", "SQL injection", "latence", "mémoire"],
    correct: 1,
  },
  {
    question: "384) Pool de connexions :",
    answers: ["sécurité", "performance", "cache", "logs"],
    correct: 1,
  },
  {
    question: "385) Queue (RabbitMQ, Redis) sert à :",
    answers: ["async jobs", "cache", "DB", "session"],
    correct: 0,
  },
  {
    question: "386) Cron job :",
    answers: ["tâche planifiée", "event", "cache", "session"],
    correct: 0,
  },
  {
    question: "387) Supervisor sert à :",
    answers: ["DB", "gérer processus", "cache", "logs"],
    correct: 1,
  },
  {
    question: "388) Webhook est :",
    answers: ["callback HTTP", "DB", "cache", "session"],
    correct: 0,
  },
  {
    question: "389) Rate limiting protège contre :",
    answers: ["XSS", "brute force", "SQLi", "CSRF"],
    correct: 1,
  },
  {
    question: "390) DDoS est :",
    answers: ["bug", "attaque réseau", "erreur PHP", "cache"],
    correct: 1,
  },
  {
    question: "391) HTTPS utilise :",
    answers: ["SSL/TLS", "FTP", "SSH", "SMTP"],
    correct: 0,
  },
  {
    question: "392) hash_equals() sert à :",
    answers: ["comparer sécurisé", "hacher", "chiffrer", "encoder"],
    correct: 0,
  },
  {
    question: "393) Timing attack concerne :",
    answers: ["DB", "comparaison", "cache", "UI"],
    correct: 1,
  },
  {
    question: "394) CSP est :",
    answers: [
      "Content Security Policy",
      "Cache Storage Policy",
      "Code Secure PHP",
      "Client Server Protocol",
    ],
    correct: 0,
  },
  {
    question: "395) header CSP sert à :",
    answers: ["XSS", "SQLi", "CSRF", "cache"],
    correct: 0,
  },
  {
    question: "396) SameSite cookie :",
    answers: ["sécurité", "performance", "cache", "session"],
    correct: 0,
  },
  {
    question: "397) HttpOnly cookie empêche :",
    answers: ["JS access", "PHP access", "DB access", "serveur"],
    correct: 0,
  },
  {
    question: "398) Secure cookie nécessite :",
    answers: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correct: 1,
  },
  {
    question: "399) OWASP est :",
    answers: ["framework", "organisation sécurité", "DB", "CMS"],
    correct: 1,
  },
  {
    question: "400) PHP est utilisé en entreprise car :",
    answers: ["stable", "scalable", "écosystème", "tous"],
    correct: 3,
  },
  {
    question: "401) Une API REST utilise principalement :",
    answers: ["SOAP", "XML-RPC", "HTTP", "FTP"],
    correct: 2,
  },
  {
    question: "402) Méthode HTTP pour créer une ressource :",
    answers: ["GET", "POST", "PUT", "DELETE"],
    correct: 1,
  },
  {
    question: "403) PUT sert à :",
    answers: ["créer", "lire", "modifier/remplacer", "supprimer"],
    correct: 2,
  },
  {
    question: "404) PATCH permet :",
    answers: [
      "remplacer toute ressource",
      "modifier partiellement",
      "supprimer",
      "lire",
    ],
    correct: 1,
  },
  {
    question: "405) Code HTTP 200 signifie :",
    answers: ["erreur client", "succès", "redirection", "serveur indisponible"],
    correct: 1,
  },
  {
    question: "406) Code HTTP 201 :",
    answers: ["accepté", "créé", "supprimé", "erreur"],
    correct: 1,
  },
  {
    question: "407) Code HTTP 400 :",
    answers: [
      "serveur error",
      "requête invalide",
      "non autorisé",
      "non trouvé",
    ],
    correct: 1,
  },
  {
    question: "408) Code HTTP 401 :",
    answers: ["interdit", "non trouvé", "non authentifié", "serveur error"],
    correct: 2,
  },
  {
    question: "409) Code HTTP 403 :",
    answers: ["non authentifié", "interdit", "non trouvé", "timeout"],
    correct: 1,
  },
  {
    question: "410) Code HTTP 404 :",
    answers: [
      "serveur HS",
      "interdit",
      "ressource inexistante",
      "mauvaise requête",
    ],
    correct: 2,
  },
  {
    question: "411) Code HTTP 500 :",
    answers: ["erreur client", "erreur serveur", "redirection", "cache"],
    correct: 1,
  },
  {
    question: "412) Une API REST est :",
    answers: ["stateful", "stateless", "compilée", "sécurisée par défaut"],
    correct: 1,
  },
  {
    question: "413) JSON est :",
    answers: ["langage", "format de données", "DB", "framework"],
    correct: 1,
  },
  {
    question: "414) json_encode() retourne :",
    answers: ["tableau", "objet", "string JSON", "bool"],
    correct: 2,
  },
  {
    question: "415) json_decode($json, true) retourne :",
    answers: ["objet", "tableau associatif", "string", "int"],
    correct: 1,
  },
  {
    question: "416) Content-Type JSON :",
    answers: ["text/html", "application/json", "application/xml", "text/plain"],
    correct: 1,
  },
  {
    question: "417) Header Authorization sert à :",
    answers: ["cache", "auth", "debug", "session"],
    correct: 1,
  },
  {
    question: "418) Token JWT contient :",
    answers: ["header", "payload", "signature", "tous"],
    correct: 3,
  },
  {
    question: "419) JWT est encodé en :",
    answers: ["hexadécimal", "base64", "binaire", "ASCII brut"],
    correct: 1,
  },
  {
    question: "420) Avantage JWT :",
    answers: ["stateful", "stateless", "lent", "non sécurisé"],
    correct: 1,
  },
  {
    question: "421) OAuth est :",
    answers: [
      "chiffrement",
      "autorisation",
      "authentification seule",
      "framework PHP",
    ],
    correct: 1,
  },
  {
    question: "422) API Key est :",
    answers: ["mot de passe", "token simple", "certificat", "cookie"],
    correct: 1,
  },
  {
    question: "423) Rate limit API protège contre :",
    answers: ["SQLi", "brute force", "XSS", "CSRF"],
    correct: 1,
  },
  {
    question: "424) CORS concerne :",
    answers: ["DB", "navigateur", "serveur seul", "PHP CLI"],
    correct: 1,
  },
  {
    question: "425) Header CORS principal :",
    answers: [
      "Allow-Origin",
      "Access-Control-Allow-Origin",
      "Origin-Allow",
      "Cross-Origin",
    ],
    correct: 1,
  },
  {
    question: "426) Preflight request utilise :",
    answers: ["GET", "POST", "OPTIONS", "PUT"],
    correct: 2,
  },
  {
    question: "427) CSRF est :",
    answers: [
      "attaque session",
      "attaque injection",
      "attaque cross-site",
      "attaque brute",
    ],
    correct: 2,
  },
  {
    question: "428) Protection CSRF :",
    answers: ["token", "hash", "cookie", "header seul"],
    correct: 0,
  },
  {
    question: "429) XSS permet :",
    answers: ["voler session", "lire DB", "arrêter serveur", "injecter SQL"],
    correct: 0,
  },
  {
    question: "430) htmlspecialchars() protège contre :",
    answers: ["SQLi", "XSS", "CSRF", "DDoS"],
    correct: 1,
  },
  {
    question: "431) htmlentities() :",
    answers: [
      "encode tous caractères",
      "encode certains",
      "décode",
      "supprime",
    ],
    correct: 0,
  },
  {
    question: "432) filter_input() sert à :",
    answers: ["afficher", "filtrer entrée utilisateur", "logger", "compiler"],
    correct: 1,
  },
  {
    question: "433) FILTER_SANITIZE_STRING :",
    answers: ["valide", "nettoie", "chiffre", "hache"],
    correct: 1,
  },
  {
    question: "434) password_hash() utilise par défaut :",
    answers: ["MD5", "SHA1", "bcrypt", "base64"],
    correct: 2,
  },
  {
    question: "435) password_verify() sert à :",
    answers: ["hacher", "comparer mot de passe", "encoder", "décrypter"],
    correct: 1,
  },
  {
    question: "436) Salt est :",
    answers: ["secret", "aléatoire", "public", "inutile"],
    correct: 1,
  },
  {
    question: "437) Rainbow table attaque :",
    answers: ["hash", "session", "cookie", "cache"],
    correct: 0,
  },
  {
    question: "438) HTTPS protège :",
    answers: ["données en transit", "DB", "serveur interne", "code source"],
    correct: 0,
  },
  {
    question: "439) OpenSSL en PHP permet :",
    answers: ["chiffrement", "cache", "ORM", "templating"],
    correct: 0,
  },
  {
    question: "440) Hash est :",
    answers: ["réversible", "irréversible", "chiffré", "compressé"],
    correct: 1,
  },
  {
    question: "441) Encryption est :",
    answers: ["irréversible", "réversible", "hash", "encodage"],
    correct: 1,
  },
  {
    question: "442) Base64 est :",
    answers: ["chiffrement", "encodage", "hash", "compression"],
    correct: 1,
  },
  {
    question: "443) Session hijacking :",
    answers: ["voler session", "supprimer session", "créer session", "cache"],
    correct: 0,
  },
  {
    question: "444) Regénérer session_id empêche :",
    answers: ["XSS", "fixation session", "SQLi", "DDoS"],
    correct: 1,
  },
  {
    question: "445) session_regenerate_id() :",
    answers: ["supprime session", "change ID", "détruit cookie", "cache"],
    correct: 1,
  },
  {
    question: "446) Cookie lifetime :",
    answers: ["durée de vie", "taille", "sécurité", "cache"],
    correct: 0,
  },
  {
    question: "447) setcookie() définit :",
    answers: ["DB", "cookie", "session", "header"],
    correct: 1,
  },
  {
    question: "448) Cookie sans expiration :",
    answers: ["persistant", "session cookie", "sécurisé", "HttpOnly"],
    correct: 1,
  },
  {
    question: "449) PHP.ini permet configurer :",
    answers: ["PHP runtime", "HTML", "DB", "CSS"],
    correct: 0,
  },
  {
    question: "450) display_errors en production :",
    answers: ["ON", "OFF", "obligatoire", "ignoré"],
    correct: 1,
  },
  {
    question: "451) error_reporting(E_ALL) :",
    answers: ["cache", "affiche toutes erreurs", "compile", "supprime"],
    correct: 1,
  },
  {
    question: "452) log_errors permet :",
    answers: ["afficher", "logger erreurs", "supprimer", "compiler"],
    correct: 1,
  },
  {
    question: "453) error_log() écrit :",
    answers: ["DB", "fichier log", "cache", "session"],
    correct: 1,
  },
  {
    question: "454) PSR-4 concerne :",
    answers: ["logging", "autoloading", "cache", "HTTP"],
    correct: 1,
  },
  {
    question: "455) Namespace évite :",
    answers: ["bugs", "conflits de noms", "lenteur", "cache"],
    correct: 1,
  },
  {
    question: "456) use sert à :",
    answers: ["importer namespace", "inclure fichier", "hériter", "instancier"],
    correct: 0,
  },
  {
    question: "457) Trait permet :",
    answers: [
      "héritage multiple",
      "composition code",
      "interface",
      "abstraction",
    ],
    correct: 1,
  },
  {
    question: "458) Conflict trait résolu par :",
    answers: ["override", "insteadof", "final", "static"],
    correct: 1,
  },
  {
    question: "459) final empêche :",
    answers: ["héritage", "instanciation", "interface", "trait"],
    correct: 0,
  },
  {
    question: "460) abstract class :",
    answers: ["instanciable", "non instanciable", "finale", "trait"],
    correct: 1,
  },
  {
    question: "461) Interface définit :",
    answers: ["implémentation", "signatures", "variables", "logique"],
    correct: 1,
  },
  {
    question: "462) readonly property :",
    answers: ["modifiable", "une seule assignation", "static", "private"],
    correct: 1,
  },
  {
    question: "463) Typed property impose :",
    answers: ["valeur", "type", "visibilité", "final"],
    correct: 1,
  },
  {
    question: "464) Nullsafe operator :",
    answers: ["?", "??", "?->", "?:"],
    correct: 2,
  },
  {
    question: "465) Match expression :",
    answers: ["if", "switch amélioré", "boucle", "fonction"],
    correct: 1,
  },
  {
    question: "466) Spread operator :",
    answers: ["...", "::", "=>", "->"],
    correct: 0,
  },
  {
    question: "467) Arrow function utilise :",
    answers: ["function", "fn", "lambda", "arrow"],
    correct: 1,
  },
  {
    question: "468) Closure capture variable par :",
    answers: ["global", "use", "static", "this"],
    correct: 1,
  },
  {
    question: "469) static keyword dans méthode :",
    answers: ["accès objet", "accès classe", "interface", "trait"],
    correct: 1,
  },
  {
    question: "470) Late static binding utilise :",
    answers: ["self", "parent", "static", "this"],
    correct: 2,
  },
  {
    question: "471) Magic method __call() :",
    answers: ["constructeur", "méthode inexistante", "destructeur", "clone"],
    correct: 1,
  },
  {
    question: "472) __get() :",
    answers: ["accès propriété inexistante", "setter", "constructeur", "trait"],
    correct: 0,
  },
  {
    question: "473) serialize() permet :",
    answers: ["DB", "convertir objet en string", "hacher", "chiffrer"],
    correct: 1,
  },
  {
    question: "474) unserialize() peut être :",
    answers: ["sûr", "dangereux", "lent", "inutile"],
    correct: 1,
  },
  {
    question: "475) Object Injection concerne :",
    answers: ["unserialize", "SQL", "XSS", "CSRF"],
    correct: 0,
  },
  {
    question: "476) Reflection permet :",
    answers: ["introspection", "compilation", "cache", "debug"],
    correct: 0,
  },
  {
    question: "477) Attribute (PHP 8) est :",
    answers: ["commentaire", "annotation native", "trait", "interface"],
    correct: 1,
  },
  {
    question: "478) #[Route] est un :",
    answers: ["trait", "attribute", "namespace", "interface"],
    correct: 1,
  },
  {
    question: "479) Middleware est :",
    answers: ["DB", "couche intermédiaire", "cache", "template"],
    correct: 1,
  },
  {
    question: "480) PSR-7 concerne :",
    answers: ["HTTP messages", "cache", "logging", "ORM"],
    correct: 0,
  },
  {
    question: "481) PSR-15 concerne :",
    answers: ["middleware HTTP", "cache", "autoload", "DB"],
    correct: 0,
  },
  {
    question: "482) Slim est :",
    answers: ["CMS", "micro-framework", "ORM", "DB"],
    correct: 1,
  },
  {
    question: "483) Symfony est :",
    answers: ["CMS", "framework PHP", "DB", "cache"],
    correct: 1,
  },
  {
    question: "484) Laravel est basé sur :",
    answers: ["Symfony components", "Zend", "Cake", "Slim"],
    correct: 0,
  },
  {
    question: "485) Blade est :",
    answers: ["ORM", "template engine", "cache", "DB"],
    correct: 1,
  },
  {
    question: "486) Twig est :",
    answers: ["template", "DB", "cache", "framework"],
    correct: 0,
  },
  {
    question: "487) MVC signifie :",
    answers: [
      "Model View Controller",
      "Module View Cache",
      "Model Variable Code",
      "Main View Control",
    ],
    correct: 0,
  },
  {
    question: "488) Controller gère :",
    answers: ["logique", "affichage", "DB", "cache"],
    correct: 0,
  },
  {
    question: "489) Model gère :",
    answers: ["UI", "données", "routes", "cache"],
    correct: 1,
  },
  {
    question: "490) View gère :",
    answers: ["logique", "affichage", "DB", "cache"],
    correct: 1,
  },
  {
    question: "491) Route mappe :",
    answers: [
      "URL → controller",
      "DB → table",
      "cache → mémoire",
      "session → user",
    ],
    correct: 0,
  },
  {
    question: "492) Dependency Injection :",
    answers: [
      "créer dépendances en dur",
      "injecter dépendances",
      "global variables",
      "static only",
    ],
    correct: 1,
  },
  {
    question: "493) Service container :",
    answers: ["stocke services", "DB", "cache", "session"],
    correct: 0,
  },
  {
    question: "494) Singleton est critiqué car :",
    answers: ["lent", "global state", "sécurisé", "inutile"],
    correct: 1,
  },
  {
    question: "495) Factory pattern crée :",
    answers: ["objets", "DB", "cache", "routes"],
    correct: 0,
  },
  {
    question: "496) Repository pattern sépare :",
    answers: ["UI", "logique DB", "cache", "session"],
    correct: 1,
  },
  {
    question: "497) SOLID - S signifie :",
    answers: ["Single Responsibility", "Simple", "Static", "Secure"],
    correct: 0,
  },
  {
    question: "498) SOLID - O signifie :",
    answers: ["Open/Closed", "Object Oriented", "Override", "Optional"],
    correct: 0,
  },
  {
    question: "499) SOLID - L signifie :",
    answers: ["Logic", "Liskov Substitution", "Loop", "Link"],
    correct: 1,
  },
  {
    question: "500) Clean Code vise :",
    answers: ["écrire vite", "lisibilité", "complexité", "magie"],
    correct: 1,
  },
  {
    question: "501) PHP CLI signifie :",
    answers: [
      "Client Logic Interface",
      "Command Line Interface",
      "Common Language Interface",
      "Code Line Interface",
    ],
    correct: 1,
  },
  {
    question: "502) Pour exécuter un script PHP en CLI :",
    answers: ["php run.php", "php script.php", "php start.php", "run php.php"],
    correct: 1,
  },
  {
    question: "503) $argv contient :",
    answers: [
      "variables GET",
      "arguments CLI",
      "variables POST",
      "variables SESSION",
    ],
    correct: 1,
  },
  {
    question: "504) $argc représente :",
    answers: [
      "nombre de fichiers",
      "nombre d’arguments",
      "taille mémoire",
      "nombre de lignes",
    ],
    correct: 1,
  },
  {
    question: "505) exit() permet :",
    answers: ["pause", "terminer script", "inclure fichier", "logger"],
    correct: 1,
  },
  {
    question: "506) die() est :",
    answers: [
      "différent de exit",
      "identique à exit",
      "deprecated",
      "interdit",
    ],
    correct: 1,
  },
  {
    question: "507) PHP peut générer :",
    answers: ["HTML", "JSON", "XML", "tous"],
    correct: 3,
  },
  {
    question: "508) Header HTTP en PHP se définit avec :",
    answers: ["setHeader()", "http_header()", "header()", "response()"],
    correct: 2,
  },
  {
    question: "509) header() doit être appelé :",
    answers: [
      "après echo",
      "avant toute sortie",
      "n’importe quand",
      "après exit",
    ],
    correct: 1,
  },
  {
    question: "510) Output buffering commence avec :",
    answers: [
      "buffer_start()",
      "ob_start()",
      "start_buffer()",
      "echo_buffer()",
    ],
    correct: 1,
  },
  {
    question: "511) ob_get_clean() :",
    answers: [
      "affiche buffer",
      "retourne et vide buffer",
      "supprime buffer",
      "log buffer",
    ],
    correct: 1,
  },
  {
    question: "512) Avantage output buffering :",
    answers: ["sécurité", "performance", "contrôle sortie", "DB"],
    correct: 2,
  },
  {
    question: "513) PHP supporte UTF-8 par défaut :",
    answers: ["oui", "non", "parfois", "deprecated"],
    correct: 1,
  },
  {
    question: "514) Pour UTF-8 correct :",
    answers: ["utf8_encode()", "mbstring", "iconv", "b et c"],
    correct: 3,
  },
  {
    question: "515) strlen('é') en UTF-8 retourne :",
    answers: ["1", "2", "0", "erreur"],
    correct: 1,
  },
  {
    question: "516) mb_strlen('é') retourne :",
    answers: ["1", "2", "0", "erreur"],
    correct: 0,
  },
  {
    question: "517) mbstring est :",
    answers: ["extension PHP", "framework", "DB", "cache"],
    correct: 0,
  },
  {
    question: "518) date() retourne :",
    answers: ["timestamp", "string", "objet", "bool"],
    correct: 1,
  },
  {
    question: "519) time() retourne :",
    answers: ["date", "timestamp Unix", "string", "objet"],
    correct: 1,
  },
  {
    question: "520) strtotime() sert à :",
    answers: [
      "formatter date",
      "parser date",
      "afficher date",
      "comparer date",
    ],
    correct: 1,
  },
  {
    question: "521) DateTime est :",
    answers: ["fonction", "classe", "extension", "trait"],
    correct: 1,
  },
  {
    question: "522) DateTimeImmutable :",
    answers: ["modifiable", "non modifiable", "deprecated", "static"],
    correct: 1,
  },
  {
    question: "523) setTimezone() attend :",
    answers: ["string", "int", "DateTimeZone", "bool"],
    correct: 2,
  },
  {
    question: "524) Fuseau horaire par défaut :",
    answers: ["GMT", "UTC", "serveur", "php.ini"],
    correct: 3,
  },
  {
    question: "525) number_format() sert à :",
    answers: ["arrondir", "formater nombre", "convertir type", "comparer"],
    correct: 1,
  },
  {
    question: "526) float en PHP :",
    answers: ["précis", "imprécis", "entier", "string"],
    correct: 1,
  },
  {
    question: "527) Comparaison stricte utilise :",
    answers: ["==", "===", "=", "<>"],
    correct: 1,
  },
  {
    question: "528) 0 == '0' :",
    answers: ["false", "true", "erreur", "null"],
    correct: 1,
  },
  {
    question: "529) 0 === '0' :",
    answers: ["true", "false", "erreur", "null"],
    correct: 1,
  },
  {
    question: "530) isset() retourne false si :",
    answers: [
      "variable nulle",
      "variable inexistante",
      "variable vide",
      "b et a",
    ],
    correct: 3,
  },
  {
    question: "531) empty() retourne true si :",
    answers: ["0", '""', "null", "tous"],
    correct: 3,
  },
  {
    question: "532) unset() :",
    answers: ["détruit variable", "vide variable", "réinitialise", "cache"],
    correct: 0,
  },
  {
    question: "533) foreach copie valeur par défaut :",
    answers: ["oui", "non", "référence", "objet"],
    correct: 0,
  },
  {
    question: "534) foreach par référence :",
    answers: [
      "foreach($a as &$v)",
      "foreach(&$a as $v)",
      "foreach($a => &$v)",
      "impossible",
    ],
    correct: 0,
  },
  {
    question: "535) break 2 :",
    answers: ["sort une boucle", "sort deux niveaux", "continue", "erreur"],
    correct: 1,
  },
  {
    question: "536) continue 2 :",
    answers: ["stop script", "saute itérations", "saute deux niveaux", "break"],
    correct: 2,
  },
  {
    question: "537) switch compare avec :",
    answers: ["===", "==", "strcmp", "strict"],
    correct: 1,
  },
  {
    question: "538) match compare avec :",
    answers: ["==", "===", "loose", "cast"],
    correct: 1,
  },
  {
    question: "539) default dans match est :",
    answers: ["optionnel", "obligatoire", "interdit", "deprecated"],
    correct: 1,
  },
  {
    question: "540) include retourne :",
    answers: ["true", "false", "1", "valeur du fichier"],
    correct: 3,
  },
  {
    question: "541) require en cas d’erreur :",
    answers: ["warning", "fatal error", "notice", "ignore"],
    correct: 1,
  },
  {
    question: "542) DIR contient :",
    answers: ["fichier", "dossier courant", "URL", "namespace"],
    correct: 1,
  },
  {
    question: "543) FILE contient :",
    answers: ["nom fichier", "chemin complet", "URL", "classe"],
    correct: 1,
  },
  {
    question: "544) LINE retourne :",
    answers: ["ligne actuelle", "totale lignes", "erreur", "offset"],
    correct: 0,
  },
  {
    question: "545) eval() est :",
    answers: ["sécurisé", "dangereux", "rapide", "recommandé"],
    correct: 1,
  },
  {
    question: "546) variable variable :",
    answers: ["$$var", "$var$", "${var}", "@var"],
    correct: 0,
  },
  {
    question: "547) extract() :",
    answers: ["supprime array", "crée variables", "sécurise", "trie"],
    correct: 1,
  },
  {
    question: "548) compact() :",
    answers: ["supprime", "crée array", "trie", "cast"],
    correct: 1,
  },
  {
    question: "549) in_array() :",
    answers: ["cherche clé", "cherche valeur", "trie", "map"],
    correct: 1,
  },
  {
    question: "550) array_key_exists() :",
    answers: ["clé", "valeur", "type", "taille"],
    correct: 0,
  },
  {
    question: "551) array_map() :",
    answers: ["filtre", "transforme", "réduit", "trie"],
    correct: 1,
  },
  {
    question: "552) array_filter() :",
    answers: ["transforme", "filtre", "trie", "merge"],
    correct: 1,
  },
  {
    question: "553) array_reduce() :",
    answers: ["filtre", "transforme", "réduit", "merge"],
    correct: 2,
  },
  {
    question: "554) sort() modifie :",
    answers: ["clés", "valeurs", "tableau original", "copie"],
    correct: 2,
  },
  {
    question: "555) asort() conserve :",
    answers: ["ordre", "clés", "valeurs", "index"],
    correct: 1,
  },
  {
    question: "556) ksort() trie par :",
    answers: ["valeur", "clé", "taille", "type"],
    correct: 1,
  },
  {
    question: "557) usort() utilise :",
    answers: ["fonction callback", "SQL", "regex", "cast"],
    correct: 0,
  },
  {
    question: "558) implode() :",
    answers: ["array → string", "string → array", "merge", "split"],
    correct: 0,
  },
  {
    question: "559) explode() :",
    answers: ["array → string", "string → array", "split chars", "regex"],
    correct: 1,
  },
  {
    question: "560) trim() supprime :",
    answers: ["espaces", "tabulations", "newlines", "tous"],
    correct: 3,
  },
  {
    question: "561) rtrim() :",
    answers: ["gauche", "droite", "milieu", "tout"],
    correct: 1,
  },
  {
    question: "562) ltrim() :",
    answers: ["gauche", "droite", "milieu", "tout"],
    correct: 0,
  },
  {
    question: "563) preg_match() retourne :",
    answers: ["bool", "int", "string", "array"],
    correct: 1,
  },
  {
    question: "564) Regex délimitée par :",
    answers: ['""', "//", "{}", "[]"],
    correct: 1,
  },
  {
    question: "565) preg_replace() :",
    answers: ["cherche", "remplace", "filtre", "split"],
    correct: 1,
  },
  {
    question: "566) preg_split() :",
    answers: ["remplace", "découpe", "cherche", "map"],
    correct: 1,
  },
  {
    question: "567) PDO est :",
    answers: ["extension DB", "ORM", "framework", "cache"],
    correct: 0,
  },
  {
    question: "568) Avantage PDO :",
    answers: ["multi-DB", "rapide", "sécurisé", "tous"],
    correct: 3,
  },
  {
    question: "569) prepare() sert à :",
    answers: ["exécuter", "préparer requête", "fermer", "rollback"],
    correct: 1,
  },
  {
    question: "570) execute() :",
    answers: ["prépare", "exécute", "annule", "log"],
    correct: 1,
  },
  {
    question: "571) fetch() retourne :",
    answers: ["une ligne", "toutes lignes", "bool", "int"],
    correct: 0,
  },
  {
    question: "572) fetchAll() retourne :",
    answers: ["une ligne", "array", "objet", "bool"],
    correct: 1,
  },
  {
    question: "573) PDO::FETCH_ASSOC :",
    answers: ["index numérique", "tableau associatif", "objet", "mixte"],
    correct: 1,
  },
  {
    question: "574) lastInsertId() :",
    answers: ["dernière requête", "dernier ID", "dernier user", "rollback"],
    correct: 1,
  },
  {
    question: "575) beginTransaction() :",
    answers: ["démarre", "valide", "annule", "ferme"],
    correct: 0,
  },
  {
    question: "576) commit() :",
    answers: ["annule", "valide", "ferme", "cache"],
    correct: 1,
  },
  {
    question: "577) rollback() :",
    answers: ["valide", "annule", "ferme", "cache"],
    correct: 1,
  },
  {
    question: "578) MySQLi est :",
    answers: ["orienté objet", "procédural", "les deux", "deprecated"],
    correct: 2,
  },
  {
    question: "579) mysql_* fonctions :",
    answers: ["actives", "sécurisées", "supprimées", "recommandées"],
    correct: 2,
  },
  {
    question: "580) fopen() mode 'r' :",
    answers: ["écriture", "lecture", "append", "binaire"],
    correct: 1,
  },
  {
    question: "581) mode 'w' :",
    answers: ["lecture", "écriture + truncate", "append", "read/write"],
    correct: 1,
  },
  {
    question: "582) mode 'a' :",
    answers: ["écrase", "append", "lecture", "binaire"],
    correct: 1,
  },
  {
    question: "583) file_exists() vérifie :",
    answers: ["lecture", "existence", "permissions", "taille"],
    correct: 1,
  },
  {
    question: "584) unlink() :",
    answers: ["créer fichier", "supprimer fichier", "renommer", "copier"],
    correct: 1,
  },
  {
    question: "585) chmod() modifie :",
    answers: ["propriétaire", "permissions", "taille", "type"],
    correct: 1,
  },
  {
    question: "586) 755 signifie :",
    answers: ["rw-r--r--", "rwxr-xr-x", "rwx------", "r--r--r--"],
    correct: 1,
  },
  {
    question: "587) upload fichier utilise :",
    answers: ["GET", "POST", "PUT", "DELETE"],
    correct: 1,
  },
  {
    question: "588) $_FILES contient :",
    answers: ["chemins", "métadonnées", "cookies", "sessions"],
    correct: 1,
  },
  {
    question: "589) move_uploaded_file() :",
    answers: ["copie", "déplace sécurisé", "renomme", "supprime"],
    correct: 1,
  },
  {
    question: "590) Taille upload max définie par :",
    answers: ["php.ini", "HTML", "JS", "serveur web seulement"],
    correct: 0,
  },
  {
    question: "591) max_execution_time :",
    answers: ["mémoire", "temps script", "upload", "cache"],
    correct: 1,
  },
  {
    question: "592) memory_limit :",
    answers: ["CPU", "RAM PHP", "disque", "cache"],
    correct: 1,
  },
  {
    question: "593) set_time_limit(0) :",
    answers: ["stop script", "temps illimité", "erreur", "cache"],
    correct: 1,
  },
  {
    question: "594) PHP peut envoyer email via :",
    answers: ["sendmail", "SMTP", "mail()", "tous"],
    correct: 3,
  },
  {
    question: "595) mail() en prod :",
    answers: ["fiable", "limité", "sécurisé", "recommandé"],
    correct: 1,
  },
  {
    question: "596) PHPMailer est :",
    answers: ["extension", "lib email", "framework", "CMS"],
    correct: 1,
  },
  {
    question: "597) SMTP Auth utilise :",
    answers: ["login/pass", "token", "cookie", "session"],
    correct: 0,
  },
  {
    question: "598) Spam évité par :",
    answers: ["SPF", "DKIM", "DMARC", "tous"],
    correct: 3,
  },
  {
    question: "599) PHP est surtout utilisé pour :",
    answers: ["desktop", "backend web", "mobile natif", "OS"],
    correct: 1,
  },
  {
    question: "600) PHP reste populaire grâce à :",
    answers: ["simplicité", "frameworks", "hébergement", "tous"],
    correct: 3,
  },
  {
    question: "601) PHP est un langage :",
    answers: ["compilé", "interprété", "assembleur", "machine"],
    correct: 1,
  },
  {
    question: "602) Le moteur PHP s’appelle :",
    answers: ["Zend Engine", "V8", "JVM", "Spider"],
    correct: 0,
  },
  {
    question: "603) PHP est principalement :",
    answers: ["client-side", "server-side", "desktop", "embarqué"],
    correct: 1,
  },
  {
    question: "604) Un script PHP commence par :",
    answers: ["<?php", "<?", "<%", "<script>"],
    correct: 0,
  },
  {
    question: "605) La fermeture PHP est obligatoire :",
    answers: ["toujours", "jamais", "en CLI", "seulement en HTML"],
    correct: 1,
  },
  {
    question: "606) echo est :",
    answers: [
      "une fonction",
      "une structure du langage",
      "une classe",
      "une méthode",
    ],
    correct: 1,
  },
  {
    question: "607) print retourne :",
    answers: ["void", "bool", "int", "string"],
    correct: 2,
  },
  {
    question: "608) echo peut afficher :",
    answers: ["une valeur", "plusieurs valeurs", "tableaux", "objets"],
    correct: 1,
  },
  {
    question: "609) var_dump() sert à :",
    answers: ["afficher formaté", "debug détaillé", "logger", "convertir"],
    correct: 1,
  },
  {
    question: "610) print_r() est surtout utilisé pour :",
    answers: ["prod", "debug simple", "sécurité", "performance"],
    correct: 1,
  },
  {
    question: "611) Commentaire PHP sur une ligne :",
    answers: ["/**", "/* */", "//", "<!-- -->"],
    correct: 2,
  },
  {
    question: "612) Commentaire multi-lignes :",
    answers: ["//", "#", "/* */", "<!-- -->"],
    correct: 2,
  },
  {
    question: "613) Variable PHP commence par :",
    answers: ["@", "#", "$", "%"],
    correct: 2,
  },
  {
    question: "614) PHP est sensible à la casse pour :",
    answers: ["variables", "fonctions", "classes", "mots-clés"],
    correct: 0,
  },
  {
    question: "615) Constante se définit avec :",
    answers: ["var", "define", "const", "b et c"],
    correct: 3,
  },
  {
    question: "616) Une constante est :",
    answers: ["modifiable", "immuable", "privée", "protégée"],
    correct: 1,
  },
  {
    question: "617) Portée globale nécessite :",
    answers: ["static", "use", "global", "const"],
    correct: 2,
  },
  {
    question: "618) Superglobales accessibles partout :",
    answers: ["oui", "non", "parfois", "CLI seulement"],
    correct: 0,
  },
  {
    question: "619) Superglobale pour formulaires POST :",
    answers: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"],
    correct: 1,
  },
  {
    question: "620) $_REQUEST contient :",
    answers: ["GET", "POST", "COOKIE", "tous"],
    correct: 3,
  },
  {
    question: "621) $_SERVER contient :",
    answers: ["infos serveur", "variables session", "cookies", "DB"],
    correct: 0,
  },
  {
    question: "622) $_ENV contient :",
    answers: ["variables environnement", "routes", "cache", "DB"],
    correct: 0,
  },
  {
    question: "623) session_start() :",
    answers: ["crée session", "détruit session", "lit cookie", "ferme session"],
    correct: 0,
  },
  {
    question: "624) session_destroy() :",
    answers: [
      "vide session",
      "détruit session",
      "régénère ID",
      "ferme navigateur",
    ],
    correct: 1,
  },
  {
    question: "625) session_unset() :",
    answers: [
      "détruit cookie",
      "vide variables session",
      "détruit session",
      "cache",
    ],
    correct: 1,
  },
  {
    question: "626) Cookie est stocké :",
    answers: ["serveur", "navigateur", "DB", "cache"],
    correct: 1,
  },
  {
    question: "627) Session est stockée :",
    answers: ["navigateur", "serveur", "client", "JS"],
    correct: 1,
  },
  {
    question: "628) Session ID est envoyé via :",
    answers: ["POST", "GET", "Cookie", "Header custom"],
    correct: 2,
  },
  {
    question: "629) Par défaut session PHP utilise :",
    answers: ["fichiers", "Redis", "DB", "mémoire"],
    correct: 0,
  },
  {
    question: "630) header('Location:') provoque :",
    answers: ["forward", "redirect", "include", "refresh"],
    correct: 1,
  },
  {
    question: "631) Redirection HTTP standard :",
    answers: ["200", "301", "302", "404"],
    correct: 2,
  },
  {
    question: "632) exit après header Location est :",
    answers: ["inutile", "recommandé", "interdit", "automatique"],
    correct: 1,
  },
  {
    question: "633) include_once évite :",
    answers: ["erreur", "double inclusion", "warning", "cache"],
    correct: 1,
  },
  {
    question: "634) require_once est plus strict que include_once :",
    answers: ["vrai", "faux", "parfois", "deprecated"],
    correct: 0,
  },
  {
    question: "635) Autoload évite :",
    answers: ["require manuels", "erreurs", "warnings", "cache"],
    correct: 0,
  },
  {
    question: "636) spl_autoload_register accepte :",
    answers: ["string", "callback", "classe", "namespace"],
    correct: 1,
  },
  {
    question: "637) Nom de classe PHP :",
    answers: ["sensible casse", "insensible", "numérique", "réservé"],
    correct: 1,
  },
  {
    question: "638) new sert à :",
    answers: ["inclure", "instancier", "hériter", "cloner"],
    correct: 1,
  },
  {
    question: "639) __construct() est :",
    answers: ["optionnel", "obligatoire", "statique", "final"],
    correct: 0,
  },
  {
    question: "640) Un destructeur s’appelle :",
    answers: ["__delete", "__destroy", "__destruct", "__unset"],
    correct: 2,
  },
  {
    question: "641) Héritage utilise :",
    answers: ["implements", "extends", "uses", "inherits"],
    correct: 1,
  },
  {
    question: "642) implements est utilisé pour :",
    answers: ["classe", "interface", "trait", "namespace"],
    correct: 1,
  },
  {
    question: "643) Une classe peut implémenter :",
    answers: ["une interface", "plusieurs interfaces", "aucun", "b et c"],
    correct: 3,
  },
  {
    question: "644) Une classe peut hériter de :",
    answers: ["plusieurs classes", "une seule classe", "aucune", "b et c"],
    correct: 3,
  },
  {
    question: "645) Visibilité par défaut d’une propriété :",
    answers: ["private", "protected", "public", "static"],
    correct: 2,
  },
  {
    question: "646) private signifie :",
    answers: [
      "accessible partout",
      "accessible classe",
      "accessible héritage",
      "inaccessible",
    ],
    correct: 1,
  },
  {
    question: "647) protected est accessible :",
    answers: ["classe", "héritage", "a et b", "partout"],
    correct: 2,
  },
  {
    question: "648) public est accessible :",
    answers: ["classe", "héritage", "partout", "namespace"],
    correct: 2,
  },
  {
    question: "649) static property appartient :",
    answers: ["objet", "classe", "instance", "méthode"],
    correct: 1,
  },
  {
    question: "650) self:: fait référence à :",
    answers: ["classe parente", "classe actuelle", "instance", "enfant"],
    correct: 1,
  },
  {
    question: "651) parent:: fait référence à :",
    answers: ["enfant", "interface", "classe parente", "trait"],
    correct: 2,
  },
  {
    question: "652) $this fait référence à :",
    answers: ["classe", "instance", "parent", "trait"],
    correct: 1,
  },
  {
    question: "653) instanceof vérifie :",
    answers: ["type", "valeur", "null", "string"],
    correct: 0,
  },
  {
    question: "654) Clonage objet utilise :",
    answers: ["clone", "copy", "new", "duplicate"],
    correct: 0,
  },
  {
    question: "655) __clone() est appelé :",
    answers: ["création", "destruction", "clonage", "héritage"],
    correct: 2,
  },
  {
    question: "656) Une interface peut contenir :",
    answers: ["méthodes implémentées", "constantes", "propriétés", "logique"],
    correct: 1,
  },
  {
    question: "657) Les méthodes d’une interface sont :",
    answers: ["privées", "protégées", "publiques", "statiques"],
    correct: 2,
  },
  {
    question: "658) Trait peut contenir :",
    answers: ["méthodes", "propriétés", "logique", "tous"],
    correct: 3,
  },
  {
    question: "659) Trait est utilisé avec :",
    answers: ["extends", "implements", "use", "import"],
    correct: 2,
  },
  {
    question: "660) Un trait peut utiliser :",
    answers: ["un autre trait", "une classe", "une interface", "namespace"],
    correct: 0,
  },
  {
    question: "661) Final sur méthode empêche :",
    answers: ["appel", "override", "héritage", "instanciation"],
    correct: 1,
  },
  {
    question: "662) Abstract method doit être :",
    answers: ["implémentée", "finale", "privée", "statique"],
    correct: 0,
  },
  {
    question: "663) Une classe abstraite peut contenir :",
    answers: [
      "méthodes concrètes",
      "méthodes abstraites",
      "propriétés",
      "tous",
    ],
    correct: 3,
  },
  {
    question: "664) Type hinting améliore :",
    answers: ["sécurité", "lisibilité", "robustesse", "tous"],
    correct: 3,
  },
  {
    question: "665) Retour typé impose :",
    answers: ["type", "valeur", "visibilité", "static"],
    correct: 0,
  },
  {
    question: "666) Nullable type utilise :",
    answers: ["!", "?", "??", "::"],
    correct: 1,
  },
  {
    question: "667) Union types utilisent :",
    answers: ["&", "|", "+", ","],
    correct: 1,
  },
  {
    question: "668) Mixed type accepte :",
    answers: ["tout", "int/string", "objet", "null"],
    correct: 0,
  },
  {
    question: "669) Callable représente :",
    answers: ["fonction", "méthode", "closure", "tous"],
    correct: 3,
  },
  {
    question: "670) Strict typing activé par :",
    answers: [
      "declare(strict_types=1)",
      "php.ini",
      "strict(true)",
      "use strict",
    ],
    correct: 0,
  },
  {
    question: "671) Une exception non attrapée :",
    answers: ["ignorée", "warning", "fatal error", "log seulement"],
    correct: 2,
  },
  {
    question: "672) throw sert à :",
    answers: ["attraper", "lancer exception", "ignorer", "logger"],
    correct: 1,
  },
  {
    question: "673) catch peut attraper :",
    answers: ["une exception", "plusieurs exceptions", "Throwable", "tous"],
    correct: 3,
  },
  {
    question: "674) finally s’exécute :",
    answers: [
      "seulement si erreur",
      "seulement si succès",
      "toujours",
      "jamais",
    ],
    correct: 2,
  },
  {
    question: "675) set_error_handler() :",
    answers: ["exceptions", "erreurs PHP", "logs", "cache"],
    correct: 1,
  },
  {
    question: "676) Les erreurs fatales sont :",
    answers: ["récupérables", "ignorées", "non récupérables", "warnings"],
    correct: 2,
  },
  {
    question: "677) trigger_error() génère :",
    answers: ["exception", "erreur PHP", "log", "notice JS"],
    correct: 1,
  },
  {
    question: "678) E_USER_NOTICE est :",
    answers: ["fatal", "warning", "notice", "exception"],
    correct: 2,
  },
  {
    question: "679) assert() sert à :",
    answers: ["test condition", "debug", "sécurité", "cache"],
    correct: 0,
  },
  {
    question: "680) assert peut être désactivé en :",
    answers: ["dev", "prod", "test", "CLI"],
    correct: 1,
  },
  {
    question: "681) Composer autoload utilise :",
    answers: ["PSR-0", "PSR-4", "PSR-7", "PSR-15"],
    correct: 1,
  },
  {
    question: "682) vendor/ contient :",
    answers: ["code app", "libs installées", "configs", "cache"],
    correct: 1,
  },
  {
    question: "683) composer.lock garantit :",
    answers: ["version exacte", "dernière version", "sécurité", "cache"],
    correct: 0,
  },
  {
    question: "684) composer update :",
    answers: [
      "respecte lock",
      "met à jour versions",
      "ignore lock",
      "supprime vendor",
    ],
    correct: 1,
  },
  {
    question: "685) composer install :",
    answers: ["ignore lock", "respecte lock", "met à jour", "supprime"],
    correct: 1,
  },
  {
    question: "686) Namespace est séparé par :",
    answers: ["/", ".", "\\", "::"],
    correct: 2,
  },
  {
    question: "687) Fully Qualified Name commence par :",
    answers: ["\\", "/", ".", "::"],
    correct: 0,
  },
  {
    question: "688) use alias s’écrit :",
    answers: ["use A as B", "use A => B", "import A B", "alias A B"],
    correct: 0,
  },
  {
    question: "689) phpinfo() affiche :",
    answers: ["version PHP", "extensions", "config", "tous"],
    correct: 3,
  },
  {
    question: "690) gettype() retourne :",
    answers: ["type", "valeur", "classe", "taille"],
    correct: 0,
  },
  {
    question: "691) is_array() vérifie :",
    answers: ["type", "valeur", "clé", "taille"],
    correct: 0,
  },
  {
    question: "692) isset($a['x']) sans clé :",
    answers: ["true", "false", "warning", "fatal"],
    correct: 1,
  },
  {
    question: "693) Null coalescing operator :",
    answers: ["?:", "??", "?->", "::"],
    correct: 1,
  },
  {
    question: "694) Elvis operator est :",
    answers: ["??", "?:", "?->", "==="],
    correct: 1,
  },
  {
    question: "695) Ternary operator :",
    answers: ["if", "?:", "??", "match"],
    correct: 1,
  },
  {
    question: "696) Spread array :",
    answers: ["array_merge", "...", "+", "&"],
    correct: 1,
  },
  {
    question: "697) JSON_THROW_ON_ERROR :",
    answers: ["ignore erreurs", "retourne null", "lance exception", "log"],
    correct: 2,
  },
  {
    question: "698) json_last_error() :",
    answers: ["retourne bool", "retourne code erreur", "string", "exception"],
    correct: 1,
  },
  {
    question: "699) PHP 8 améliore surtout :",
    answers: ["performance", "typage", "erreurs", "tous"],
    correct: 3,
  },
  {
    question: "700) PHP est adapté pour concours car :",
    answers: ["complet", "standardisé", "très demandé", "tous"],
    correct: 3,
  },
  {
    question: "701) En PHP, une classe se déclare avec :",
    answers: ["object", "class", "struct", "new"],
    correct: 1,
  },
  {
    question: "702) Une instance de classe se crée avec :",
    answers: ["make", "instance", "new", "create"],
    correct: 2,
  },
  {
    question: "703) Le constructeur s’appelle :",
    answers: ["constructor()", "__construct()", "init()", "__init()"],
    correct: 1,
  },
  {
    question: "704) Le destructeur s’appelle :",
    answers: ["__delete()", "__destroy()", "__destruct()", "end()"],
    correct: 2,
  },
  {
    question: "705) $this fait référence à :",
    answers: ["la classe", "l’objet courant", "le parent", "le fichier"],
    correct: 1,
  },
  {
    question: "706) Une propriété publique est accessible :",
    answers: [
      "uniquement dans la classe",
      "dans la classe et les enfants",
      "partout",
      "seulement via getter",
    ],
    correct: 2,
  },
  {
    question: "707) Une propriété privée est accessible :",
    answers: [
      "partout",
      "seulement dans la classe",
      "dans les enfants",
      "hors classe",
    ],
    correct: 1,
  },
  {
    question: "708) Une méthode protégée est accessible :",
    answers: [
      "uniquement dans la classe",
      "dans la classe et classes filles",
      "partout",
      "hors objet",
    ],
    correct: 1,
  },
  {
    question: "709) L’héritage s’écrit avec :",
    answers: ["implements", "extends", "inherit", "uses"],
    correct: 1,
  },
  {
    question: "710) PHP supporte l’héritage :",
    answers: ["multiple", "simple", "hiérarchique seulement", "aucun"],
    correct: 1,
  },
  {
    question: "711) Une interface se déclare avec :",
    answers: ["abstract", "class", "interface", "implements"],
    correct: 2,
  },
  {
    question: "712) Une classe implémente une interface avec :",
    answers: ["extends", "uses", "implements", "inherits"],
    correct: 2,
  },
  {
    question: "713) Une méthode abstraite :",
    answers: ["a un corps", "n’a pas de corps", "est privée", "est statique"],
    correct: 1,
  },
  {
    question: "714) Une classe abstraite :",
    answers: [
      "peut être instanciée",
      "ne peut pas être instanciée",
      "est finale",
      "est statique",
    ],
    correct: 1,
  },
  {
    question: "715) Le mot‑clé final empêche :",
    answers: ["l’héritage", "l’instanciation", "l’appel", "l’accès"],
    correct: 0,
  },
  {
    question: "716) Une méthode statique s’appelle via :",
    answers: ["$this", "->", "::", "=>"],
    correct: 2,
  },
  {
    question: "717) Une propriété statique appartient :",
    answers: ["à l’objet", "à la classe", "à l’instance", "au fichier"],
    correct: 1,
  },
  {
    question: "718) self:: fait référence à :",
    answers: ["l’objet", "la classe courante", "le parent", "le fichier"],
    correct: 1,
  },
  {
    question: "719) parent:: fait référence à :",
    answers: [
      "la classe enfant",
      "la classe parente",
      "l’objet",
      "l’interface",
    ],
    correct: 1,
  },
  {
    question: "720) Le polymorphisme permet :",
    answers: [
      "plusieurs classes",
      "plusieurs formes",
      "plusieurs objets",
      "plusieurs fichiers",
    ],
    correct: 1,
  },
  {
    question: "721) Typage strict activé avec :",
    answers: [
      "strict=1",
      "declare(strict_types=1)",
      "use strict",
      "type strict",
    ],
    correct: 1,
  },
  {
    question: "722) Une exception est levée avec :",
    answers: ["catch", "try", "throw", "error"],
    correct: 2,
  },
  {
    question: "723) Les exceptions sont gérées par :",
    answers: ["if", "switch", "try/catch", "loop"],
    correct: 2,
  },
  {
    question: "724) Une exception personnalisée :",
    answers: [
      "est interdite",
      "hérite de Exception",
      "est abstraite",
      "est statique",
    ],
    correct: 1,
  },
  {
    question: "725) __toString() est appelé quand :",
    answers: [
      "on affiche un objet",
      "on crée un objet",
      "on détruit un objet",
      "on clone",
    ],
    correct: 0,
  },
  {
    question: "726) __get() est déclenché :",
    answers: [
      "accès propriété inexistante",
      "accès méthode",
      "suppression variable",
      "affichage",
    ],
    correct: 0,
  },
  {
    question: "727) __set() sert à :",
    answers: ["lire", "écrire", "supprimer", "cloner"],
    correct: 1,
  },
  {
    question: "728) Le clonage d’objet utilise :",
    answers: ["copy", "duplicate", "clone", "new"],
    correct: 2,
  },
  {
    question: "729) __clone() est appelé :",
    answers: [
      "après clonage",
      "avant clonage",
      "à l’instanciation",
      "à la destruction",
    ],
    correct: 0,
  },
  {
    question: "730) La surcharge en PHP est :",
    answers: [
      "réelle",
      "partielle",
      "simulée via magic methods",
      "inexistante",
    ],
    correct: 2,
  },
  {
    question: "731) XSS vise :",
    answers: ["serveur", "navigateur utilisateur", "base de données", "réseau"],
    correct: 1,
  },
  {
    question: "732) CSRF exploite :",
    answers: ["session active", "cookie expiré", "mot de passe", "serveur"],
    correct: 0,
  },
  {
    question: "733) hash_equals() sert à :",
    answers: ["comparer chaînes en sécurité", "hacher", "crypter", "décoder"],
    correct: 0,
  },
  {
    question: "734) Les mots de passe doivent utiliser :",
    answers: ["md5", "sha1", "password_hash", "base64"],
    correct: 2,
  },
  {
    question: "735) openssl_encrypt() permet :",
    answers: ["hash", "chiffrement", "compression", "encodage"],
    correct: 1,
  },
  {
    question: "736) HTTPS utilise :",
    answers: ["FTP", "SSL/TLS", "SSH", "UDP"],
    correct: 1,
  },
  {
    question: "737) Inclusion de fichier vulnérable :",
    answers: ["SQL", "XSS", "LFI/RFI", "CSRF"],
    correct: 2,
  },
  {
    question: "738) basename() protège contre :",
    answers: ["SQL", "upload malveillant", "XSS", "CSRF"],
    correct: 1,
  },
  {
    question: "739) filter_var() sert à :",
    answers: ["afficher", "valider", "supprimer", "inclure"],
    correct: 1,
  },
  {
    question: "740) Le principe du moindre privilège concerne :",
    answers: ["UI", "sécurité", "performance", "design"],
    correct: 1,
  },
  {
    question: "741) Une session sécurisée doit :",
    answers: [
      "utiliser un ID fixe",
      "régénérer l’ID",
      "être publique",
      "être statique",
    ],
    correct: 1,
  },
  {
    question: "742) session_regenerate_id() :",
    answers: [
      "supprime la session",
      "évite la fixation de session",
      "affiche la session",
      "prolonge la session",
    ],
    correct: 1,
  },
  {
    question: "743) Un token CSRF est :",
    answers: ["public", "unique", "fixe", "optionnel"],
    correct: 1,
  },
  {
    question: "744) L’échappement HTML protège contre :",
    answers: ["SQL", "XSS", "CSRF", "DOS"],
    correct: 1,
  },
  {
    question: "745) htmlentities() convertit :",
    answers: ["scripts", "caractères spéciaux", "images", "cookies"],
    correct: 1,
  },
  {
    question: "746) strip_tags() sert à :",
    answers: ["ajouter HTML", "supprimer des balises", "crypter", "parser"],
    correct: 1,
  },
  {
    question: "747) realpath() sert à :",
    answers: [
      "lire un fichier",
      "normaliser un chemin",
      "supprimer",
      "inclure",
    ],
    correct: 1,
  },
  {
    question: "748) Une requête préparée empêche :",
    answers: ["XSS", "SQL Injection", "CSRF", "DOS"],
    correct: 1,
  },
  {
    question: "749) PDO recommande :",
    answers: ["concaténation", "bindParam", "echo", "var_dump"],
    correct: 1,
  },
  {
    question: "750) Un upload sécurisé vérifie :",
    answers: [
      "le nom du fichier",
      "l’extension",
      "le type MIME",
      "toutes ces vérifications",
    ],
    correct: 3,
  },
  {
    question: "751) mime_content_type() retourne :",
    answers: ["extension", "type MIME", "taille", "chemin"],
    correct: 1,
  },
  {
    question: "752) Une faille IDOR concerne :",
    answers: ["accès non autorisé", "SQL", "XSS", "CSRF"],
    correct: 0,
  },
  {
    question: "753) password_needs_rehash() sert à :",
    answers: ["vérifier hash", "comparer", "mettre à jour hash", "supprimer"],
    correct: 2,
  },
  {
    question: "754) Une clé secrète doit être :",
    answers: ["dans le code", "publique", "dans .env", "affichée"],
    correct: 2,
  },
  {
    question: "755) random_bytes() génère :",
    answers: ["texte", "un nombre aléatoire sécurisé", "hash", "cookie"],
    correct: 1,
  },
  {
    question: "756) Une attaque brute force vise :",
    answers: ["serveur", "mot de passe", "réseau", "API"],
    correct: 1,
  },
  {
    question: "757) Rate limiting sert à :",
    answers: ["accélérer", "bloquer abus", "afficher", "cacher"],
    correct: 1,
  },
  {
    question: "758) Une API sécurisée utilise :",
    answers: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correct: 1,
  },
  {
    question: "759) Le header Content-Security-Policy protège contre :",
    answers: ["SQL", "XSS", "CSRF", "DOS"],
    correct: 1,
  },
  {
    question: "760) Une faille logique est :",
    answers: ["syntaxique", "erreur métier", "serveur", "réseau"],
    correct: 1,
  },
  {
    question: "761) OPcache sert à :",
    answers: ["stocker sessions", "accélérer PHP", "sécuriser", "compiler JS"],
    correct: 1,
  },
  {
    question: "762) JIT signifie :",
    answers: ["Just In Time", "Java In Tool", "JSON In Text", "Join In Table"],
    correct: 0,
  },
  {
    question: "763) PHP 8 améliore :",
    answers: ["sécurité", "performance", "typage", "toutes"],
    correct: 3,
  },
  {
    question: "764) match retourne :",
    answers: ["bool", "valeur", "void", "array"],
    correct: 1,
  },
  {
    question: "765) match est :",
    answers: ["non strict", "strict", "lent", "obsolète"],
    correct: 1,
  },
  {
    question: "766) Union types permettent :",
    answers: ["un type", "plusieurs types", "aucun type", "auto"],
    correct: 1,
  },
  {
    question: "767) Exemple de union type :",
    answers: ["int", "int|string", "mixed", "any"],
    correct: 1,
  },
  {
    question: "768) mixed signifie :",
    answers: ["aucun type", "tout type", "string", "array"],
    correct: 1,
  },
  {
    question: "769) Named arguments permettent :",
    answers: [
      "ordre obligatoire",
      "ordre libre",
      "pas d’arguments",
      "héritage",
    ],
    correct: 1,
  },
  {
    question: "770) str_contains() retourne :",
    answers: ["string", "int", "bool", "array"],
    correct: 2,
  },
  {
    question: "771) str_starts_with() vérifie :",
    answers: ["fin", "début", "milieu", "longueur"],
    correct: 1,
  },
  {
    question: "772) readonly empêche :",
    answers: ["lecture", "écriture", "affichage", "accès"],
    correct: 1,
  },
  {
    question: "773) Attributs PHP utilisent :",
    answers: ["@", "#[]", "/* */", "<>"],
    correct: 1,
  },
  {
    question: "774) Attributs remplacent :",
    answers: ["variables", "commentaires", "annotations", "constantes"],
    correct: 2,
  },
  {
    question: "775) Composer installe :",
    answers: ["PHP", "dépendances", "serveurs", "base de données"],
    correct: 1,
  },
  {
    question: "776) vendor/ contient :",
    answers: ["config", "dépendances", "vues", "routes"],
    correct: 1,
  },
  {
    question: "777) L’autoloading suit :",
    answers: ["MVC", "PSR‑4", "REST", "CRUD"],
    correct: 1,
  },
  {
    question: "778) PHPUnit sert à :",
    answers: ["déploiement", "tests", "sécurité", "logs"],
    correct: 1,
  },
  {
    question: "779) Un test unitaire vérifie :",
    answers: ["module entier", "fonction isolée", "UI", "base de données"],
    correct: 1,
  },
  {
    question: "780) Mock sert à :",
    answers: ["simuler dépendance", "afficher", "stocker", "supprimer"],
    correct: 0,
  },
  {
    question: "781) Un profiler sert à :",
    answers: [
      "sécuriser",
      "mesurer performance",
      "afficher erreurs",
      "compiler",
    ],
    correct: 1,
  },
  {
    question: "782) Xdebug aide à :",
    answers: ["debug", "déploiement", "sécurité", "upload"],
    correct: 0,
  },
  {
    question: "783) Logging sert à :",
    answers: ["afficher UI", "tracer erreurs", "sécuriser BD", "crypter"],
    correct: 1,
  },
  {
    question: "784) Monolog est :",
    answers: ["framework", "logger", "SGBD", "serveur"],
    correct: 1,
  },
  {
    question: "785) Le cache applicatif utilise :",
    answers: ["RAM", "disque", "CPU", "réseau"],
    correct: 0,
  },
  {
    question: "786) Redis est :",
    answers: [
      "SGBD relationnel",
      "cache clé‑valeur",
      "framework",
      "serveur web",
    ],
    correct: 1,
  },
  {
    question: "787) Une API REST est :",
    answers: ["stateful", "stateless", "lente", "privée"],
    correct: 1,
  },
  {
    question: "788) JSON API utilise :",
    answers: ["XML", "CSV", "JSON", "HTML"],
    correct: 2,
  },
  {
    question: "789) HTTP 404 signifie :",
    answers: ["serveur down", "interdit", "non trouvé", "erreur code"],
    correct: 2,
  },
  {
    question: "790) HTTP 500 est :",
    answers: ["client", "serveur", "réseau", "cache"],
    correct: 1,
  },
  {
    question: "791) Une architecture scalable est :",
    answers: ["lente", "rigide", "extensible", "statique"],
    correct: 2,
  },
  {
    question: "792) Load balancer sert à :",
    answers: ["stocker", "répartir charge", "crypter", "afficher"],
    correct: 1,
  },
  {
    question: "793) Docker permet :",
    answers: [
      "virtualisation légère",
      "compilation",
      "base de données",
      "cache",
    ],
    correct: 0,
  },
  {
    question: "794) CI/CD automatise :",
    answers: ["code", "tests et déploiement", "design", "sécurité"],
    correct: 1,
  },
  {
    question: "795) Git sert à :",
    answers: ["compiler", "versionner", "déployer", "tester"],
    correct: 1,
  },
  {
    question: "796) Une branche Git sert à :",
    answers: ["supprimer code", "isoler travail", "compiler", "publier"],
    correct: 1,
  },
  {
    question: "797) Clean Code vise :",
    answers: ["vitesse", "lisibilité", "sécurité", "UI"],
    correct: 1,
  },
  {
    question: "798) SOLID concerne :",
    answers: [
      "base de données",
      "programmation orientée objet",
      "sécurité",
      "réseau",
    ],
    correct: 1,
  },
  {
    question: "799) PHP reste pertinent grâce à :",
    answers: ["frameworks", "communauté", "web", "toutes"],
    correct: 3,
  },
  {
    question: "800) PHP est idéal pour :",
    answers: [
      "intelligence artificielle",
      "systèmes embarqués",
      "applications web",
      "pilotes",
    ],
    correct: 2,
  },
  {
    question: "801) array_map() sert à :",
    answers: [
      "transformer éléments d’un tableau",
      "filtrer tableau",
      "trier tableau",
      "compter éléments",
    ],
    correct: 0,
  },
  {
    question: "802) array_filter() sert à :",
    answers: [
      "transformer éléments",
      "filtrer éléments",
      "trier",
      "ajouter éléments",
    ],
    correct: 1,
  },
  {
    question: "803) array_reduce() permet :",
    answers: ["transformer tableau en valeur", "trier", "filtrer", "afficher"],
    correct: 0,
  },
  {
    question: "804) array_merge() sert à :",
    answers: ["fusionner tableaux", "filtrer", "copier", "trier"],
    correct: 0,
  },
  {
    question: "805) array_diff() retourne :",
    answers: ["éléments communs", "éléments différents", "fusion", "tri"],
    correct: 1,
  },
  {
    question: "806) count() retourne :",
    answers: ["somme", "nombre d’éléments", "clé maximale", "valeur minimale"],
    correct: 1,
  },
  {
    question: "807) sort() trie :",
    answers: [
      "valeurs ascendant",
      "clés",
      "valeurs descendant",
      "tableau associatif",
    ],
    correct: 0,
  },
  {
    question: "808) rsort() trie :",
    answers: [
      "valeurs ascendant",
      "valeurs descendant",
      "clés",
      "tableau associatif",
    ],
    correct: 1,
  },
  {
    question: "809) asort() trie :",
    answers: [
      "valeurs ascendant",
      "valeurs descendant",
      "clés ascendant",
      "valeurs avec clés conservées",
    ],
    correct: 3,
  },
  {
    question: "810) ksort() trie :",
    answers: [
      "clés ascendant",
      "valeurs",
      "clés descendant",
      "valeurs inversées",
    ],
    correct: 0,
  },
  {
    question: "811) json_encode() convertit :",
    answers: ["JSON en PHP", "PHP en JSON", "XML en JSON", "CSV en JSON"],
    correct: 1,
  },
  {
    question: "812) json_decode() convertit :",
    answers: ["JSON en PHP", "PHP en JSON", "XML", "CSV"],
    correct: 0,
  },
  {
    question: "813) La constante PHP_VERSION contient :",
    answers: [
      "version serveur",
      "version PHP",
      "version base données",
      "version framework",
    ],
    correct: 1,
  },
  {
    question: "814) phpinfo() affiche :",
    answers: ["configuration PHP", "version MySQL", "logs", "extensions"],
    correct: 0,
  },
  {
    question: "815) Les superglobales sont :",
    answers: ["$_GET,$_POST,$_SESSION", "$this", "static", "const"],
    correct: 0,
  },
  {
    question: "816) $_POST contient :",
    answers: ["données URL", "données formulaire POST", "session", "cookies"],
    correct: 1,
  },
  {
    question: "817) $_GET contient :",
    answers: ["données URL", "données POST", "session", "cookies"],
    correct: 0,
  },
  {
    question: "818) $_SESSION sert à :",
    answers: [
      "stocker info utilisateur",
      "données POST",
      "variables locales",
      "fichiers",
    ],
    correct: 0,
  },
  {
    question: "819) $_COOKIE contient :",
    answers: ["session", "cookies client", "fichiers", "URL"],
    correct: 1,
  },
  {
    question: "820) unset() sert à :",
    answers: ["supprimer variable", "créer variable", "initialiser", "cloner"],
    correct: 0,
  },
  {
    question: "821) isset() retourne :",
    answers: [
      "true si variable existe",
      "false",
      "valeur variable",
      "supprime variable",
    ],
    correct: 0,
  },
  {
    question: "822) empty() retourne :",
    answers: ["true si variable vide", "false", "valeur", "type"],
    correct: 0,
  },
  {
    question: "823) require() :",
    answers: ["inclut fichier obligatoire", "optionnel", "supprime", "crée"],
    correct: 0,
  },
  {
    question: "824) include() :",
    answers: ["inclut fichier optionnel", "obligatoire", "supprime", "crée"],
    correct: 0,
  },
  {
    question: "825) require_once() :",
    answers: ["inclut fichier une fois", "plusieurs fois", "supprime", "crée"],
    correct: 0,
  },
  {
    question: "826) include_once() :",
    answers: ["inclut une fois", "plusieurs fois", "supprime", "crée"],
    correct: 0,
  },
  {
    question: "827) fopen() ouvre :",
    answers: ["fichier", "base de données", "session", "réseau"],
    correct: 0,
  },
  {
    question: "828) fclose() ferme :",
    answers: ["fichier", "session", "base de données", "socket"],
    correct: 0,
  },
  {
    question: "829) fread() lit :",
    answers: ["fichier", "session", "base de données", "socket"],
    correct: 0,
  },
  {
    question: "830) fwrite() écrit :",
    answers: ["fichier", "session", "base de données", "socket"],
    correct: 0,
  },
  {
    question: "831) file_get_contents() sert à :",
    answers: [
      "lire fichier",
      "écrire fichier",
      "supprimer fichier",
      "copier fichier",
    ],
    correct: 0,
  },
  {
    question: "832) file_put_contents() sert à :",
    answers: ["écrire fichier", "lire fichier", "supprimer", "copier"],
    correct: 0,
  },
  {
    question: "833) pathinfo() retourne :",
    answers: ["info chemin", "taille", "hash", "extension"],
    correct: 0,
  },
  {
    question: "834) is_file() vérifie :",
    answers: ["fichier existe", "dossier", "lien", "variable"],
    correct: 0,
  },
  {
    question: "835) is_dir() vérifie :",
    answers: ["dossier", "fichier", "lien", "variable"],
    correct: 0,
  },
  {
    question: "836) file_exists() vérifie :",
    answers: ["fichier ou dossier", "lien", "variable", "extension"],
    correct: 0,
  },
  {
    question: "837) move_uploaded_file() sert à :",
    answers: ["déplacer upload", "lire fichier", "supprimer", "crée"],
    correct: 0,
  },
  {
    question: "838) header() sert à :",
    answers: [
      "envoyer header HTTP",
      "afficher texte",
      "lire fichier",
      "inclure",
    ],
    correct: 0,
  },
  {
    question: "839) setcookie() crée :",
    answers: ["cookie", "session", "variable locale", "fichier"],
    correct: 0,
  },
  {
    question: "840) session_start() initialise :",
    answers: ["session", "cookie", "variable locale", "fichier"],
    correct: 0,
  },
  {
    question: "841) fopen() modes possibles :",
    answers: [
      "r,w,a,x",
      "open,read,write",
      "read,write,append",
      "file,open,close",
    ],
    correct: 0,
  },
  {
    question: "842) PHP peut interagir avec :",
    answers: ["MySQL", "PostgreSQL", "SQLite", "tous"],
    correct: 3,
  },
  {
    question: "843) mysqli_connect() sert à :",
    answers: [
      "connecter base MySQL",
      "exécuter requête",
      "fermer connexion",
      "créer table",
    ],
    correct: 0,
  },
  {
    question: "844) PDO sert à :",
    answers: [
      "base de données abstraction",
      "sécurité",
      "performance",
      "réseau",
    ],
    correct: 0,
  },
  {
    question: "845) fetch_assoc() retourne :",
    answers: ["tableau associatif", "tableau indexé", "objet", "JSON"],
    correct: 0,
  },
  {
    question: "846) fetch_object() retourne :",
    answers: ["objet", "tableau associatif", "tableau indexé", "JSON"],
    correct: 0,
  },
  {
    question: "847) prepare() en PDO sert à :",
    answers: [
      "préparer requête",
      "exécuter",
      "fermer connexion",
      "créer table",
    ],
    correct: 0,
  },
  {
    question: "848) execute() en PDO sert à :",
    answers: [
      "exécuter requête",
      "préparer",
      "fermer connexion",
      "créer table",
    ],
    correct: 0,
  },
  {
    question: "849) beginTransaction() démarre :",
    answers: ["transaction", "session", "cookie", "fichier"],
    correct: 0,
  },
  {
    question: "850) commit() valide :",
    answers: ["transaction", "session", "cookie", "fichier"],
    correct: 0,
  },
  {
    question: "851) rollback() annule :",
    answers: ["transaction", "session", "cookie", "fichier"],
    correct: 0,
  },
  {
    question: "852) filter_input(INPUT_GET,...) sert à :",
    answers: ["récupérer GET sécurisé", "POST", "COOKIE", "SESSION"],
    correct: 0,
  },
  {
    question: "853) htmlspecialchars() sert à :",
    answers: ["échapper caractères spéciaux", "hacher", "crypter", "décoder"],
    correct: 0,
  },
  {
    question: "854) addslashes() ajoute :",
    answers: ["'", "/n", "/t", "//"],
    correct: 0,
  },
  {
    question: "855) stripslashes() supprime :",
    answers: ["antislash", "/n", "/t", "//"],
    correct: 0,
  },
  {
    question: "856) session_destroy() supprime :",
    answers: ["session", "cookie", "variable locale", "fichier"],
    correct: 0,
  },
  {
    question: "857) die() ou exit() :",
    answers: ["termine script", "continue", "crée variable", "inclut fichier"],
    correct: 0,
  },
  {
    question: "858) php://input permet :",
    answers: ["lire body HTTP brut", "POST", "GET", "COOKIE"],
    correct: 0,
  },
  {
    question: "859) parse_str() convertit :",
    answers: ["query string en variables", "JSON", "XML", "CSV"],
    correct: 0,
  },
  {
    question: "860) str_replace() sert à :",
    answers: ["remplacer chaîne", "supprimer", "trier", "comparer"],
    correct: 0,
  },
  {
    question: "861) substr() sert à :",
    answers: ["extraire sous-chaîne", "remplacer", "trier", "comparer"],
    correct: 0,
  },
  {
    question: "862) strlen() retourne :",
    answers: [
      "longueur chaîne",
      "nombre mots",
      "caractères spéciaux",
      "taille fichier",
    ],
    correct: 0,
  },
  {
    question: "863) strpos() retourne :",
    answers: [
      "position première occurrence",
      "position dernière",
      "bool",
      "longueur",
    ],
    correct: 0,
  },
  {
    question: "864) strrpos() retourne :",
    answers: ["dernière occurrence", "première", "bool", "longueur"],
    correct: 0,
  },
  {
    question: "865) trim() supprime :",
    answers: ["espaces début/fin", "milieu", "tous", "caractères spéciaux"],
    correct: 0,
  },
  {
    question: "866) ltrim() supprime :",
    answers: ["début", "fin", "milieu", "tous"],
    correct: 0,
  },
  {
    question: "867) rtrim() supprime :",
    answers: ["fin", "début", "milieu", "tous"],
    correct: 0,
  },
  {
    question: "868) explode() :",
    answers: ["découpe chaîne en tableau", "fusion", "trie", "remplace"],
    correct: 0,
  },
  {
    question: "869) implode() :",
    answers: ["tableau en chaîne", "chaîne en tableau", "trie", "remplace"],
    correct: 0,
  },
  {
    question: "870) sprintf() sert à :",
    answers: ["formater chaîne", "trier", "découper", "remplacer"],
    correct: 0,
  },
  {
    question: "871) printf() :",
    answers: ["afficher formaté", "trier", "découper", "remplacer"],
    correct: 0,
  },
  {
    question: "872) number_format() sert à :",
    answers: ["formater nombre", "arrondir", "convertir", "comparer"],
    correct: 0,
  },
  {
    question: "873) round() sert à :",
    answers: ["arrondir nombre", "trier", "comparer", "formater"],
    correct: 0,
  },
  {
    question: "874) ceil() :",
    answers: ["arrondit au supérieur", "inférieur", "égal", "moyenne"],
    correct: 0,
  },
  {
    question: "875) floor() :",
    answers: ["arrondit à l’inférieur", "supérieur", "égal", "moyenne"],
    correct: 0,
  },
  {
    question: "876) rand() génère :",
    answers: ["entier aléatoire", "float", "bool", "string"],
    correct: 0,
  },
  {
    question: "877) mt_rand() :",
    answers: ["entier aléatoire plus rapide", "float", "bool", "string"],
    correct: 0,
  },
  {
    question: "878) time() retourne :",
    answers: ["timestamp actuel", "date formatée", "heure", "minutes"],
    correct: 0,
  },
  {
    question: "879) date() sert à :",
    answers: ["formatter timestamp", "générer timestamp", "date SQL", "trier"],
    correct: 0,
  },
  {
    question: "880) strtotime() :",
    answers: [
      "convertir string en timestamp",
      "timestamp en string",
      "date",
      "heure",
    ],
    correct: 0,
  },
  {
    question: "881) header('Location: ...') :",
    answers: ["redirige", "affiche", "lit", "supprime"],
    correct: 0,
  },
  {
    question: "882) set_time_limit() sert à :",
    answers: ["limiter temps script", "RAM", "CPU", "threads"],
    correct: 0,
  },
  {
    question: "883) error_reporting(E_ALL) :",
    answers: [
      "activer toutes erreurs",
      "désactiver erreurs",
      "logs",
      "alertes",
    ],
    correct: 0,
  },
  {
    question: "884) ini_set('display_errors',1) :",
    answers: ["afficher erreurs", "cacher erreurs", "log", "alerte"],
    correct: 0,
  },
  {
    question: "885) trigger_error() :",
    answers: ["générer erreur", "afficher message", "log", "ignorer"],
    correct: 0,
  },
  {
    question: "886) set_exception_handler() :",
    answers: ["gérer exceptions", "afficher message", "logger", "ignorer"],
    correct: 0,
  },
  {
    question: "887) parse_ini_file() lit :",
    answers: ["fichier ini", "JSON", "XML", "CSV"],
    correct: 0,
  },
  {
    question: "888) gettype() retourne :",
    answers: ["type variable", "valeur", "clé", "fonction"],
    correct: 0,
  },
  {
    question: "889) is_int() vérifie :",
    answers: ["entier", "float", "string", "bool"],
    correct: 0,
  },
  {
    question: "890) is_string() vérifie :",
    answers: ["string", "int", "float", "bool"],
    correct: 0,
  },
  {
    question: "891) is_array() vérifie :",
    answers: ["tableau", "string", "int", "bool"],
    correct: 0,
  },
  {
    question: "892) is_object() vérifie :",
    answers: ["objet", "tableau", "int", "string"],
    correct: 0,
  },
  {
    question: "893) is_bool() vérifie :",
    answers: ["bool", "string", "int", "array"],
    correct: 0,
  },
  {
    question: "894) class_exists() :",
    answers: ["vérifier classe", "méthode", "propriété", "variable"],
    correct: 0,
  },
  {
    question: "895) method_exists() :",
    answers: ["vérifier méthode", "classe", "propriété", "variable"],
    correct: 0,
  },
  {
    question: "896) property_exists() :",
    answers: ["vérifier propriété", "méthode", "classe", "variable"],
    correct: 0,
  },
  {
    question: "897) interface_exists() :",
    answers: ["vérifier interface", "classe", "méthode", "propriété"],
    correct: 0,
  },
  {
    question: "898) function_exists() :",
    answers: ["vérifier fonction", "méthode", "propriété", "classe"],
    correct: 0,
  },
  {
    question: "899) trait_exists() :",
    answers: ["vérifier trait", "fonction", "classe", "propriété"],
    correct: 0,
  },
  {
    question: "900) class_implements() retourne :",
    answers: ["interfaces d’une classe", "méthodes", "propriétés", "traits"],
    correct: 0,
  },
  {
    question: "901) trait_exists() permet de :",
    answers: [
      "vérifier si un trait existe",
      "vérifier si une classe existe",
      "vérifier fonction",
      "vérifier propriété",
    ],
    correct: 0,
  },
  {
    question: "902) class_uses() retourne :",
    answers: [
      "traits utilisés par une classe",
      "méthodes",
      "propriétés",
      "interfaces",
    ],
    correct: 0,
  },
  {
    question: "903) is_callable() vérifie :",
    answers: [
      "si une fonction ou méthode est appelable",
      "si variable existe",
      "si objet instancié",
      "si trait existe",
    ],
    correct: 0,
  },
  {
    question: "904) call_user_func() sert à :",
    answers: [
      "appeler une fonction ou méthode dynamiquement",
      "déclarer une fonction",
      "vérifier fonction",
      "supprimer fonction",
    ],
    correct: 0,
  },
  {
    question: "905) call_user_func_array() sert à :",
    answers: [
      "appeler fonction avec tableau d’arguments",
      "déclarer fonction",
      "vérifier existence",
      "supprimer",
    ],
    correct: 0,
  },
  {
    question: "906) spl_autoload_register() permet :",
    answers: [
      "autoload des classes",
      "inclure fichiers",
      "exécuter fonctions",
      "déboguer",
    ],
    correct: 0,
  },
  {
    question: "907) class_alias() permet :",
    answers: [
      "créer alias d’une classe",
      "supprimer classe",
      "vérifier existence",
      "instancier objet",
    ],
    correct: 0,
  },
  {
    question: "908) compact() crée :",
    answers: [
      "tableau associatif à partir de variables",
      "fusionne tableaux",
      "trie tableau",
      "supprime variable",
    ],
    correct: 0,
  },
  {
    question: "909) extract() permet :",
    answers: [
      "créer variables à partir tableau associatif",
      "fusionner tableaux",
      "trier",
      "supprimer variable",
    ],
    correct: 0,
  },
  {
    question: "910) debug_backtrace() retourne :",
    answers: ["pile d’appels", "variables locales", "erreurs", "logs"],
    correct: 0,
  },
  {
    question: "911) debug_print_backtrace() :",
    answers: [
      "affiche pile d’appels",
      "supprime erreurs",
      "lit variables",
      "compile code",
    ],
    correct: 0,
  },
  {
    question: "912) memory_get_usage() retourne :",
    answers: ["mémoire utilisée", "CPU", "disque", "réseau"],
    correct: 0,
  },
  {
    question: "913) memory_get_peak_usage() retourne :",
    answers: ["pic mémoire utilisé", "mémoire actuelle", "CPU", "réseau"],
    correct: 0,
  },
  {
    question: "914) get_defined_functions() retourne :",
    answers: ["fonctions définies", "variables", "classes", "interfaces"],
    correct: 0,
  },
  {
    question: "915) get_defined_vars() retourne :",
    answers: ["variables définies", "fonctions", "classes", "interfaces"],
    correct: 0,
  },
  {
    question: "916) get_class_methods() retourne :",
    answers: ["méthodes d’une classe", "propriétés", "interfaces", "traits"],
    correct: 0,
  },
  {
    question: "917) get_class_vars() retourne :",
    answers: [
      "variables statiques d’une classe",
      "méthodes",
      "interfaces",
      "traits",
    ],
    correct: 0,
  },
  {
    question: "918) method_exists() vérifie :",
    answers: ["existence méthode dans classe", "classe", "propriété", "trait"],
    correct: 0,
  },
  {
    question: "919) property_exists() vérifie :",
    answers: [
      "existence propriété dans classe",
      "méthode",
      "trait",
      "fonction",
    ],
    correct: 0,
  },
  {
    question: "920) get_class() retourne :",
    answers: ["nom classe objet", "méthodes", "propriétés", "interfaces"],
    correct: 0,
  },
  {
    question: "921) is_subclass_of() vérifie :",
    answers: [
      "si classe est sous-classe d’autre",
      "méthode",
      "propriété",
      "trait",
    ],
    correct: 0,
  },
  {
    question: "922) interface_exists() vérifie :",
    answers: ["existence interface", "classe", "méthode", "propriété"],
    correct: 0,
  },
  {
    question: "923) trait_exists() vérifie :",
    answers: ["existence trait", "classe", "fonction", "propriété"],
    correct: 0,
  },
  {
    question: "924) iterator_to_array() convertit :",
    answers: [
      "iterator en tableau",
      "tableau en iterator",
      "objet en array",
      "JSON",
    ],
    correct: 0,
  },
  {
    question: "925) class_implements() retourne :",
    answers: ["interfaces d’une classe", "méthodes", "propriétés", "traits"],
    correct: 0,
  },
  {
    question: "926) get_parent_class() retourne :",
    answers: ["nom classe parente", "méthode", "propriété", "trait"],
    correct: 0,
  },
  {
    question: "927) get_declared_classes() retourne :",
    answers: ["toutes classes définies", "fonctions", "interfaces", "traits"],
    correct: 0,
  },
  {
    question: "928) get_declared_interfaces() retourne :",
    answers: ["toutes interfaces", "classes", "traits", "fonctions"],
    correct: 0,
  },
  {
    question: "929) get_declared_traits() retourne :",
    answers: ["tous traits", "classes", "interfaces", "fonctions"],
    correct: 0,
  },
  {
    question: "930) class_parents() retourne :",
    answers: [
      "toutes classes parentes",
      "méthodes",
      "propriétés",
      "interfaces",
    ],
    correct: 0,
  },
  {
    question: "931) interface_exists() vérifie :",
    answers: ["interface", "classe", "méthode", "trait"],
    correct: 0,
  },
  {
    question: "932) trait_exists() vérifie :",
    answers: ["trait", "classe", "fonction", "propriété"],
    correct: 0,
  },
  {
    question: "933) get_class_methods() retourne :",
    answers: ["méthodes d’une classe", "propriétés", "interfaces", "traits"],
    correct: 0,
  },
  {
    question: "934) get_class_vars() retourne :",
    answers: [
      "variables statiques d’une classe",
      "méthodes",
      "interfaces",
      "traits",
    ],
    correct: 0,
  },
  {
    question: "935) spl_autoload_register() :",
    answers: [
      "autoload classes",
      "inclure fichiers",
      "exécuter fonctions",
      "debugger",
    ],
    correct: 0,
  },
  {
    question: "936) is_a() vérifie :",
    answers: ["type d’objet", "variable", "fonction", "classe"],
    correct: 0,
  },
  {
    question: "937) iterator_count() retourne :",
    answers: [
      "nombre éléments iterator",
      "nombre éléments tableau",
      "longueur string",
      "taille fichier",
    ],
    correct: 0,
  },
  {
    question: "938) iterator_apply() :",
    answers: [
      "applique fonction à chaque élément iterator",
      "compteur",
      "trie",
      "filtre",
    ],
    correct: 0,
  },
  {
    question: "939) array_key_exists() vérifie :",
    answers: ["clé existe dans tableau", "valeur", "index", "variable"],
    correct: 0,
  },
  {
    question: "940) in_array() vérifie :",
    answers: ["valeur dans tableau", "clé", "index", "variable"],
    correct: 0,
  },
  {
    question: "941) array_search() retourne :",
    answers: ["clé d’une valeur", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "942) array_keys() retourne :",
    answers: ["toutes clés", "toutes valeurs", "tableau", "index"],
    correct: 0,
  },
  {
    question: "943) array_values() retourne :",
    answers: ["toutes valeurs", "clés", "tableau", "index"],
    correct: 0,
  },
  {
    question: "944) array_key_first() retourne :",
    answers: ["première clé", "première valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "945) array_key_last() retourne :",
    answers: ["dernière clé", "dernière valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "946) array_slice() sert à :",
    answers: ["extraire portion tableau", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "947) array_splice() sert à :",
    answers: [
      "extraire et remplacer portion tableau",
      "fusion",
      "trier",
      "supprimer",
    ],
    correct: 0,
  },
  {
    question: "948) array_pad() sert à :",
    answers: ["compléter tableau", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "949) array_flip() sert à :",
    answers: ["inverser clés et valeurs", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "950) array_unique() sert à :",
    answers: ["supprimer doublons", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "951) array_reverse() sert à :",
    answers: ["inverser tableau", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "952) array_sum() retourne :",
    answers: ["somme des valeurs", "produit", "moyenne", "max"],
    correct: 0,
  },
  {
    question: "953) array_product() retourne :",
    answers: ["produit des valeurs", "somme", "moyenne", "max"],
    correct: 0,
  },
  {
    question: "954) array_chunk() sert à :",
    answers: ["diviser tableau en morceaux", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "955) array_key_exists() vérifie :",
    answers: ["clé existe", "valeur", "index", "tableau"],
    correct: 0,
  },
  {
    question: "956) extract() crée :",
    answers: [
      "variables à partir tableau associatif",
      "fusionne tableaux",
      "trie",
      "supprime variable",
    ],
    correct: 0,
  },
  {
    question: "957) compact() crée :",
    answers: [
      "tableau associatif à partir de variables",
      "fusion",
      "trie",
      "supprime variable",
    ],
    correct: 0,
  },
  {
    question: "959) array_map() :",
    answers: ["transformer éléments", "filtrer", "trier", "compter"],
    correct: 0,
  },
  {
    question: "960) array_filter() :",
    answers: ["filtrer", "transformer", "trier", "fusion"],
    correct: 0,
  },
  {
    question: "961) array_reduce() :",
    answers: ["réduire tableau en valeur", "trier", "filtrer", "afficher"],
    correct: 0,
  },
  {
    question: "962) array_merge() :",
    answers: ["fusionner tableaux", "trier", "copier", "supprimer"],
    correct: 0,
  },
  {
    question: "963) array_diff() :",
    answers: ["différences", "intersections", "fusion", "trier"],
    correct: 0,
  },
  {
    question: "964) in_array() :",
    answers: ["valeur dans tableau", "clé", "index", "variable"],
    correct: 0,
  },
  {
    question: "965) array_search() :",
    answers: ["clé d’une valeur", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "966) array_keys() :",
    answers: ["toutes clés", "valeurs", "tableau", "index"],
    correct: 0,
  },
  {
    question: "967) array_values() :",
    answers: ["valeurs", "clés", "tableau", "index"],
    correct: 0,
  },
  {
    question: "968) array_key_first() :",
    answers: ["première clé", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "969) array_key_last() :",
    answers: ["dernière clé", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "970) array_slice() :",
    answers: ["extraire portion", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "971) array_splice() :",
    answers: ["extraire et remplacer", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "972) array_pad() :",
    answers: ["compléter tableau", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "973) array_flip() :",
    answers: ["inverser clés/valeurs", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "974) array_unique() :",
    answers: ["supprimer doublons", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "975) array_reverse() :",
    answers: ["inverser tableau", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "976) array_sum() :",
    answers: ["somme", "produit", "moyenne", "max"],
    correct: 0,
  },
  {
    question: "977) array_product() :",
    answers: ["produit", "somme", "moyenne", "max"],
    correct: 0,
  },
  {
    question: "978) array_chunk() :",
    answers: ["diviser tableau", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "979) array_walk() :",
    answers: ["appliquer fonction éléments", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "980) array_map() :",
    answers: ["transformer éléments", "filtrer", "trier", "compter"],
    correct: 0,
  },
  {
    question: "981) array_filter() :",
    answers: ["filtrer", "transformer", "trier", "fusion"],
    correct: 0,
  },
  {
    question: "982) array_reduce() :",
    answers: ["réduire tableau en valeur", "trier", "filtrer", "afficher"],
    correct: 0,
  },
  {
    question: "983) array_merge() :",
    answers: ["fusionner tableaux", "trier", "copier", "supprimer"],
    correct: 0,
  },
  {
    question: "984) array_diff() :",
    answers: ["différences", "intersections", "fusion", "trier"],
    correct: 0,
  },
  {
    question: "985) in_array() :",
    answers: ["valeur dans tableau", "clé", "index", "variable"],
    correct: 0,
  },
  {
    question: "986) array_search() :",
    answers: ["clé d’une valeur", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "987) array_keys() :",
    answers: ["toutes clés", "valeurs", "tableau", "index"],
    correct: 0,
  },
  {
    question: "988) array_values() :",
    answers: ["valeurs", "clés", "tableau", "index"],
    correct: 0,
  },
  {
    question: "989) array_key_first() :",
    answers: ["première clé", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "990) array_key_last() :",
    answers: ["dernière clé", "valeur", "tableau", "index"],
    correct: 0,
  },
  {
    question: "991) array_slice() :",
    answers: ["extraire portion", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "992) array_splice() :",
    answers: ["extraire et remplacer", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "993) array_pad() :",
    answers: ["compléter tableau", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "994) array_flip() :",
    answers: ["inverser clés/valeurs", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "995) array_unique() :",
    answers: ["supprimer doublons", "fusion", "trier", "supprimer"],
    correct: 0,
  },
  {
    question: "996) array_reverse() :",
    answers: ["inverser tableau", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "997) array_sum() :",
    answers: ["somme", "produit", "moyenne", "max"],
    correct: 0,
  },
  {
    question: "998) array_product() :",
    answers: ["produit", "somme", "moyenne", "max"],
    correct: 0,
  },
  {
    question: "999) array_chunk() :",
    answers: ["diviser tableau", "trier", "fusion", "supprimer"],
    correct: 0,
  },
  {
    question: "1000) array_walk() :",
    answers: ["appliquer fonction éléments", "trier", "fusion", "supprimer"],
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
    document.getElementById(
      "result"
    ).innerText = `Quiz terminé ! Score final: ${score}`;
  }
}

window.onload = loadQuestion;
