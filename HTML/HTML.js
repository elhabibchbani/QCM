const questions = [
  {
    question: "1) Quel est le rôle de la balise <a> en HTML ?",
    answers: [
      "Créer un lien hypertexte",
      "Ajouter une image",
      "Créer un paragraphe",
      "Mettre du texte en gras",
    ],
    correct: 0,
  },
  {
    question:
      "2) Quelle balise est utilisée pour créer un formulaire en HTML ?",
    answers: ["<form>", "<input>", "<button>", "<fieldset>"],
    correct: 0,
  },
  {
    question: "3) La balise <img> est utilisée pour :",
    answers: [
      "Afficher une image",
      "Insérer une vidéo",
      "Créer un lien",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question:
      "4) Quel attribut de <img> est obligatoire pour l'accessibilité ?",
    answers: ["src", "alt", "title", "href"],
    correct: 1,
  },
  {
    question: "5) Pour mettre un texte en gras, on utilise :",
    answers: ["<strong>", "<em>", "<bdi>", "<i>"],
    correct: 0,
  },
  {
    question: "6) Pour créer une liste à puces, on utilise :",
    answers: ["<ul>", "<ol>", "<li>", "<dl>"],
    correct: 0,
  },
  {
    question: "7) Pour créer une liste numérotée, on utilise :",
    answers: ["<ul>", "<ol>", "<li>", "<dl>"],
    correct: 1,
  },
  {
    question: "8) Comment définit-on une ligne dans une liste ?",
    answers: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 1,
  },
  {
    question: "9) La balise <table> sert à :",
    answers: [
      "Créer un tableau",
      "Ajouter une image",
      "Faire un formulaire",
      "Créer une section",
    ],
    correct: 0,
  },
  {
    question: "10) Pour créer une cellule de tableau, on utilise :",
    answers: ["<tr>", "<td>", "<th>", "<table>"],
    correct: 1,
  },
  {
    question: "11) Pour définir un en-tête de tableau, on utilise :",
    answers: ["<tr>", "<td>", "<th>", "<thead>"],
    correct: 2,
  },
  {
    question:
      "12) Quelle balise HTML est sémantique pour le contenu principal ?",
    answers: ["<header>", "<main>", "<section>", "<div>"],
    correct: 1,
  },
  {
    question: "13) Pour créer un paragraphe, on utilise :",
    answers: ["<p>", "<div>", "<span>", "<section>"],
    correct: 0,
  },
  {
    question: "14) Pour mettre du texte en italique, on utilise :",
    answers: ["<i>", "<em>", "<strong>", "<b>"],
    correct: 1,
  },
  {
    question: "15) Quelle balise sert à ajouter un titre de niveau 1 ?",
    answers: ["<h1>", "<h2>", "<h6>", "<title>"],
    correct: 0,
  },
  {
    question: "16) Quelle balise est utilisée pour le pied de page ?",
    answers: ["<footer>", "<section>", "<aside>", "<header>"],
    correct: 0,
  },
  {
    question: "17) Pour grouper des champs dans un formulaire, on utilise :",
    answers: ["<input>", "<fieldset>", "<label>", "<form>"],
    correct: 1,
  },
  {
    question: "18) Quel attribut relie un <label> à un <input> ?",
    answers: ["for", "id", "name", "type"],
    correct: 0,
  },
  {
    question: "19) Quel type d'input est utilisé pour les cases à cocher ?",
    answers: ["text", "radio", "checkbox", "submit"],
    correct: 2,
  },
  {
    question: "20) Quel type d'input est utilisé pour un bouton radio ?",
    answers: ["text", "radio", "checkbox", "button"],
    correct: 1,
  },
  {
    question: "21) La balise <br> sert à :",
    answers: [
      "Créer un saut de ligne",
      "Ajouter un paragraphe",
      "Créer un tableau",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "22) La balise <hr> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter une ligne horizontale",
      "Créer une section",
      "Ajouter une image",
    ],
    correct: 1,
  },
  {
    question: "23) Pour insérer une vidéo, on utilise :",
    answers: ["<video>", "<iframe>", "<img>", "<source>"],
    correct: 0,
  },
  {
    question: "24) Pour définir la source d'une vidéo, on utilise :",
    answers: ["src", "href", "data", "link"],
    correct: 0,
  },
  {
    question: "25) Pour intégrer un son, on utilise :",
    answers: ["<audio>", "<video>", "<sound>", "<mp3>"],
    correct: 0,
  },
  {
    question: "26) La balise <meta> sert à :",
    answers: [
      "Ajouter des métadonnées",
      "Créer un lien",
      "Afficher une image",
      "Définir un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "27) Pour définir l'encodage de la page, on utilise :",
    answers: [
      '<meta charset="UTF-8">',
      '<meta name="viewport">',
      '<meta http-equiv="refresh">',
      '<meta name="description">',
    ],
    correct: 0,
  },
  {
    question:
      "28) Quelle balise définit le titre de la page affiché dans l'onglet ?",
    answers: ["<title>", "<h1>", "<head>", "<header>"],
    correct: 0,
  },
  {
    question: "29) La balise <link> sert à :",
    answers: [
      "Lier un fichier CSS",
      "Ajouter un lien hypertexte",
      "Créer un formulaire",
      "Ajouter un script",
    ],
    correct: 0,
  },
  {
    question: "30) Pour insérer un script JavaScript, on utilise :",
    answers: ["<script>", "<js>", "<code>", "<link>"],
    correct: 0,
  },
  {
    question: "31) Pour créer un bouton, on utilise :",
    answers: [
      "<button>",
      '<input type="button">',
      "<a>",
      "Les 2 premières réponses",
    ],
    correct: 3,
  },
  {
    question: "32) Pour un champ texte dans un formulaire, on utilise :",
    answers: [
      '<input type="text">',
      "<textarea>",
      '<input type="password">',
      "1 et 2 sont corrects",
    ],
    correct: 3,
  },
  {
    question: "33) Pour un champ mot de passe, on utilise :",
    answers: [
      '<input type="password">',
      '<input type="text">',
      "<textarea>",
      '<input type="hidden">',
    ],
    correct: 0,
  },
  {
    question: "34) Pour un bouton d'envoi de formulaire, on utilise :",
    answers: [
      '<input type="submit">',
      '<button type="submit">',
      "Les 2 sont corrects",
      '<input type="text">',
    ],
    correct: 2,
  },
  {
    question:
      "35) Quel attribut définit le texte à l'intérieur d'un champ texte avant saisie ?",
    answers: ["value", "placeholder", "title", "label"],
    correct: 1,
  },
  {
    question:
      "36) Pour créer un lien vers une ancre dans la même page, on utilise :",
    answers: [
      '<a href="#id">',
      '<a href="id">',
      '<a src="#id">',
      '<a src="id">',
    ],
    correct: 0,
  },
  {
    question: "37) La balise <iframe> sert à :",
    answers: [
      "Intégrer une autre page web",
      "Ajouter un tableau",
      "Insérer un formulaire",
      "Créer une section",
    ],
    correct: 0,
  },
  {
    question:
      "38) Pour ouvrir un lien dans un nouvel onglet, on utilise l'attribut :",
    answers: [
      'target="_blank"',
      'href="_blank"',
      'rel="blank"',
      'type="blank"',
    ],
    correct: 0,
  },
  {
    question: "39) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et signifier une importance",
      "Mettre du texte en italique",
      "Créer un en-tête",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "40) La balise <em> sert à :",
    answers: [
      "Mettre en emphase (italique)",
      "Mettre en gras",
      "Créer un tableau",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "41) Pour créer une section thématique, on utilise :",
    answers: ["<section>", "<article>", "<aside>", "<div>"],
    correct: 0,
  },
  {
    question: "42) Pour un article indépendant, on utilise :",
    answers: ["<article>", "<section>", "<aside>", "<header>"],
    correct: 0,
  },
  {
    question: "43) Pour un contenu secondaire ou complémentaire, on utilise :",
    answers: ["<aside>", "<section>", "<article>", "<footer>"],
    correct: 0,
  },
  {
    question: "44) Pour ajouter une image responsive, on peut utiliser :",
    answers: [
      '<img src="..." style="max-width:100%">',
      '<img srcset="...">',
      "Les deux méthodes",
      "<picture> uniquement",
    ],
    correct: 2,
  },
  {
    question:
      "45) Pour insérer une image alternative selon la taille de l'écran, on utilise :",
    answers: ["<picture>", "<img>", "<video>", "<source>"],
    correct: 0,
  },
  {
    question: "46) Pour créer un commentaire en HTML, on utilise :",
    answers: [
      "<!-- commentaire -->",
      "// commentaire",
      "/* commentaire */",
      "# commentaire",
    ],
    correct: 0,
  },
  {
    question: "47) La balise <nav> sert à :",
    answers: [
      "Définir une zone de navigation",
      "Créer un paragraphe",
      "Ajouter une image",
      "Mettre un lien",
    ],
    correct: 0,
  },
  {
    question: "48) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un lien",
      "Créer un pied de page",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "49) La balise <body> contient :",
    answers: [
      "Tout le contenu visible de la page",
      "Les métadonnées",
      "Les scripts uniquement",
      "Les styles CSS",
    ],
    correct: 0,
  },
  {
    question: "50) La balise <head> contient :",
    answers: [
      "Métadonnées, titre, CSS et scripts",
      "Le contenu principal visible",
      "Les images",
      "Les formulaires",
    ],
    correct: 0,
  },
  {
    question: "51) L'attribut href dans <a> définit :",
    answers: [
      "L'URL du lien",
      "La couleur du lien",
      "L'ID du lien",
      "Le type de lien",
    ],
    correct: 0,
  },
  {
    question: "52) L'attribut src dans <img> définit :",
    answers: [
      "Le chemin de l'image",
      "La largeur de l'image",
      "La hauteur de l'image",
      "L'ID de l'image",
    ],
    correct: 0,
  },
  {
    question: "53) L'attribut alt dans <img> sert à :",
    answers: [
      "Décrire l'image pour l'accessibilité",
      "Définir la largeur",
      "Définir la hauteur",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "54) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Mettre en gras",
      "Mettre en italique",
      "Créer un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "55) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un lien",
      "Créer un en-tête",
      "Mettre en italique",
    ],
    correct: 0,
  },
  {
    question: "56) La balise <code> sert à :",
    answers: [
      "Afficher du code informatique",
      "Créer un paragraphe",
      "Ajouter une image",
      "Mettre du texte en gras",
    ],
    correct: 0,
  },
  {
    question: "57) La balise <pre> sert à :",
    answers: [
      "Afficher du texte préformaté",
      "Mettre du texte en gras",
      "Ajouter un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "58) Pour grouper des options dans un <select>, on utilise :",
    answers: ["<optgroup>", "<option>", "<select>", "<group>"],
    correct: 0,
  },
  {
    question: "59) Pour créer une option dans un <select>, on utilise :",
    answers: ["<option>", "<select>", "<input>", "<label>"],
    correct: 0,
  },
  {
    question: "60) L'attribut type='email' dans <input> sert à :",
    answers: [
      "Valider une adresse email",
      "Masquer le texte",
      "Créer un mot de passe",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "61) L'attribut type='number' dans <input> sert à :",
    answers: [
      "Entrer un nombre uniquement",
      "Entrer du texte",
      "Créer une case à cocher",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "62) L'attribut type='date' dans <input> sert à :",
    answers: [
      "Sélectionner une date",
      "Entrer un texte",
      "Créer un bouton",
      "Entrer un nombre",
    ],
    correct: 0,
  },
  {
    question: "63) L'attribut type='color' dans <input> sert à :",
    answers: [
      "Choisir une couleur",
      "Entrer un texte",
      "Entrer un nombre",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "64) L'attribut required dans un champ <input> sert à :",
    answers: [
      "Rendre le champ obligatoire",
      "Afficher du texte",
      "Masquer le champ",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "65) L'attribut disabled dans un champ <input> sert à :",
    answers: [
      "Désactiver le champ",
      "Rendre le champ obligatoire",
      "Ajouter un lien",
      "Ajouter du texte",
    ],
    correct: 0,
  },
  {
    question: "66) L'attribut readonly dans un <input> sert à :",
    answers: [
      "Rendre le champ en lecture seule",
      "Rendre le champ obligatoire",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: '67) La balise <button type="reset"> sert à :',
    answers: [
      "Réinitialiser le formulaire",
      "Envoyer le formulaire",
      "Ajouter un texte",
      "Créer une image",
    ],
    correct: 0,
  },
  {
    question: '68) La balise <button type="submit"> sert à :',
    answers: [
      "Envoyer le formulaire",
      "Réinitialiser le formulaire",
      "Ajouter un texte",
      "Créer une image",
    ],
    correct: 0,
  },
  {
    question: "69) Pour créer un champ caché, on utilise :",
    answers: [
      '<input type="hidden">',
      '<input type="text">',
      '<input type="password">',
      '<input type="button">',
    ],
    correct: 0,
  },
  {
    question: "70) La balise <select> sert à :",
    answers: [
      "Créer une liste déroulante",
      "Créer un bouton",
      "Ajouter un texte",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "71) La balise <textarea> sert à :",
    answers: [
      "Créer un champ texte multiligne",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "72) L'attribut cols dans <textarea> définit :",
    answers: [
      "Le nombre de colonnes",
      "Le nombre de lignes",
      "La largeur en pixels",
      "La hauteur en pixels",
    ],
    correct: 0,
  },
  {
    question: "73) L'attribut rows dans <textarea> définit :",
    answers: [
      "Le nombre de lignes",
      "Le nombre de colonnes",
      "La largeur en pixels",
      "La hauteur en pixels",
    ],
    correct: 0,
  },
  {
    question: "74) Pour ajouter un favicon, on utilise :",
    answers: [
      '<link rel="icon" href="favicon.ico">',
      '<link rel="shortcut" href="favicon.ico">',
      '<meta favicon="favicon.ico">',
      '<img src="favicon.ico">',
    ],
    correct: 0,
  },
  {
    question: "75) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Afficher du texte",
      "Ajouter une image",
      "Créer un tableau",
    ],
    correct: 0,
  },
  {
    question: "76) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter une image bitmap",
      "Créer un tableau",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "77) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsives",
      "Créer un tableau",
      "Ajouter un texte",
      "Créer un formulaire",
    ],
    correct: 0,
  },
  {
    question: "78) La balise <source> dans <video> ou <audio> sert à :",
    answers: [
      "Définir les fichiers multimédia",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "79) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Créer un bouton",
      "Ajouter une image",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "80) La balise <summary> sert à :",
    answers: [
      "Définir le titre visible de <details>",
      "Créer un bouton",
      "Ajouter un texte",
      "Créer un tableau",
    ],
    correct: 0,
  },
  {
    question: "81) Pour créer un lien externe sécurisé, on utilise :",
    answers: [
      'rel="noopener noreferrer"',
      'target="_self"',
      'rel="external"',
      'href="secure"',
    ],
    correct: 0,
  },
  {
    question: "82) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Mettre du texte en gras",
      "Créer un tableau",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "83) La balise <cite> sert à :",
    answers: [
      "Citer une source",
      "Ajouter une image",
      "Créer un lien",
      "Mettre du texte en gras",
    ],
    correct: 0,
  },
  {
    question: "84) La balise <dfn> sert à :",
    answers: [
      "Définir un terme",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "85) La balise <time> sert à :",
    answers: [
      "Afficher une date ou heure",
      "Créer un tableau",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "86) La balise <address> sert à :",
    answers: [
      "Afficher des coordonnées",
      "Créer un bouton",
      "Ajouter un texte",
      "Créer un tableau",
    ],
    correct: 0,
  },
  {
    question: "87) La balise <bdi> sert à :",
    answers: [
      "Isoler le texte pour la direction",
      "Mettre en gras",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "88) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Mettre en gras",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "89) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "90) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Créer un bouton",
      "Ajouter un texte",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "91) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Afficher du texte",
      "Ajouter une image",
      "Créer un tableau",
    ],
    correct: 0,
  },
  {
    question: "92) La balise <slot> sert à :",
    answers: [
      "Définir une zone dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "93) La balise <iframe sandbox> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Afficher une image",
      "Créer un bouton",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: '94) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "95) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter du JS",
      "Ajouter un texte",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "96) L'attribut media dans <link> sert à :",
    answers: [
      "Définir le type de support CSS",
      "Ajouter un texte",
      "Ajouter une image",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "97) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "98) Pour indiquer la langue de la page, on utilise :",
    answers: [
      '<html lang="fr">',
      '<meta lang="fr">',
      '<body lang="fr">',
      '<head lang="fr">',
    ],
    correct: 0,
  },
  {
    question: "99) La balise <base> sert à :",
    answers: [
      "Définir l'URL de base pour les liens",
      "Ajouter une image",
      "Créer un bouton",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "100) Pour inclure un fichier externe JS, on utilise :",
    answers: [
      '<script src="script.js"></script>',
      '<link src="script.js">',
      '<script href="script.js">',
      '<link href="script.js">',
    ],
    correct: 0,
  },
  {
    question: '101) La balise <meta name="viewport"> sert à :',
    answers: [
      "Adapter la mise en page aux appareils mobiles",
      "Ajouter du texte",
      "Créer un bouton",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "102) L'attribut content dans <meta> sert à :",
    answers: [
      "Donner la valeur de la métadonnée",
      "Définir un lien",
      "Ajouter une image",
      "Créer un paragraphe",
    ],
    correct: 0,
  },
  {
    question:
      "103) Pour faire un retour à la ligne dans un formulaire, on utilise :",
    answers: ["<br>", "<p>", "<hr>", "<div>"],
    correct: 0,
  },
  {
    question: "104) La balise <label> sert à :",
    answers: [
      "Associer un texte à un champ de formulaire",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "105) La balise <datalist> sert à :",
    answers: [
      "Fournir une liste d'options pour un <input>",
      "Créer un tableau",
      "Ajouter une image",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question:
      "106) Pour ajouter un lien vers un fichier CSS externe, on utilise :",
    answers: [
      '<link rel="stylesheet" href="style.css">',
      '<style src="style.css">',
      '<script src="style.css">',
      '<link src="style.css">',
    ],
    correct: 0,
  },
  {
    question:
      "107) Pour insérer une police externe depuis Google Fonts, on utilise :",
    answers: [
      '<link href="URL_police" rel="stylesheet">',
      '<style src="URL_police">',
      '<script src="URL_police">',
      '<font src="URL_police">',
    ],
    correct: 0,
  },
  {
    question: "108) La balise <figure> sert à :",
    answers: [
      "Regrouper une image et sa légende",
      "Créer un paragraphe",
      "Ajouter un lien",
      "Créer un tableau",
    ],
    correct: 0,
  },
  {
    question: "109) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Créer un paragraphe",
      "Ajouter un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "110) Pour insérer une ligne horizontale, on utilise :",
    answers: ["<hr>", "<br>", "<line>", "<div>"],
    correct: 0,
  },
  {
    question: "111) Pour ajouter un commentaire HTML invisible, on utilise :",
    answers: [
      "<!-- commentaire -->",
      "/* commentaire */",
      "// commentaire",
      "# commentaire",
    ],
    correct: 0,
  },
  {
    question: "112) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter une image",
      "Créer un tableau",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "113) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "114) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Créer un lien",
      "Ajouter un texte",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "115) La balise <hr> est :",
    answers: [
      "Auto-fermante",
      "Nécessite une fermeture",
      "Crée un paragraphe",
      "Crée un lien",
    ],
    correct: 0,
  },
  {
    question: "116) La balise <br> est :",
    answers: [
      "Auto-fermante",
      "Nécessite une fermeture",
      "Crée un paragraphe",
      "Crée un lien",
    ],
    correct: 0,
  },
  {
    question: "117) Pour afficher du texte barré, on utilise :",
    answers: ["<del>", "<s>", "<strike>", "Les 3 sont corrects"],
    correct: 3,
  },
  {
    question: "118) La balise <ins> sert à :",
    answers: [
      "Marquer du texte inséré",
      "Supprimer du texte",
      "Créer un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "119) La balise <b> sert à :",
    answers: [
      "Mettre le texte en gras (sans importance sémantique)",
      "Mettre en italique",
      "Créer un lien",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "120) La balise <i> sert à :",
    answers: [
      "Mettre le texte en italique (sans emphase)",
      "Mettre en gras",
      "Créer un lien",
      "Ajouter un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "121) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Mettre en gras",
      "Mettre en italique",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "122) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Mettre en gras",
      "Mettre en italique",
      "Souligner le texte",
    ],
    correct: 0,
  },
  {
    question: "123) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Mettre le texte en exposant",
      "Créer un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "124) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Mettre le texte en indice",
      "Créer un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "125) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Mettre en gras",
      "Mettre en italique",
      "Souligner le texte",
    ],
    correct: 0,
  },
  {
    question: "126) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Mettre en gras",
      "Mettre en italique",
      "Souligner le texte",
    ],
    correct: 0,
  },
  {
    question: "127) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Mettre en gras",
      "Mettre en italique",
      "Souligner le texte",
    ],
    correct: 0,
  },
  {
    question: "128) La balise <progress> sert à :",
    answers: [
      "Afficher une progression",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "129) La balise <meter> sert à :",
    answers: [
      "Afficher une mesure dans une plage",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "130) La balise <details> sert à :",
    answers: [
      "Afficher du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "131) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "132) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "133) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "134) L'attribut srcset dans <img> sert à :",
    answers: [
      "Définir plusieurs sources d'image selon la résolution",
      "Ajouter un lien",
      "Créer un bouton",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "135) La balise <picture> sert à :",
    answers: [
      "Afficher une image responsive",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "136) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "137) La balise <audio> sert à :",
    answers: [
      "Ajouter un son",
      "Ajouter une image",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "138) La balise <video> sert à :",
    answers: [
      "Ajouter une vidéo",
      "Ajouter une image",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "139) La balise <source> sert à :",
    answers: [
      "Définir le fichier multimédia pour <video> ou <audio>",
      "Créer un bouton",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "140) La balise <iframe> sert à :",
    answers: [
      "Intégrer une autre page web",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "141) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '142) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "143) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter du JS",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "144) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "145) La balise <base> sert à :",
    answers: [
      "Définir l'URL de base pour les liens",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "146) L'attribut type='tel' dans <input> sert à :",
    answers: [
      "Entrer un numéro de téléphone",
      "Entrer un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "147) L'attribut pattern dans <input> sert à :",
    answers: [
      "Définir une expression régulière pour validation",
      "Entrer un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "148) L'attribut autofocus dans <input> sert à :",
    answers: [
      "Placer le curseur sur le champ au chargement",
      "Rendre le champ obligatoire",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "149) L'attribut multiple dans <input type='file'> sert à :",
    answers: [
      "Sélectionner plusieurs fichiers",
      "Sélectionner un seul fichier",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: '150) La balise <meta http-equiv="refresh"> sert à :',
    answers: [
      "Rafraîchir automatiquement la page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '151) La balise <meta name="description"> sert à :',
    answers: [
      "Décrire le contenu de la page pour le SEO",
      "Ajouter un texte visible",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '152) La balise <meta name="keywords"> sert à :',
    answers: [
      "Définir des mots-clés pour le SEO",
      "Ajouter un texte visible",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '153) La balise <meta name="author"> sert à :',
    answers: [
      "Indiquer l'auteur de la page",
      "Ajouter un texte visible",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '154) La balise <meta name="robots"> sert à :',
    answers: [
      "Contrôler l'indexation par les moteurs de recherche",
      "Ajouter un texte visible",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "155) La balise <header> peut contenir :",
    answers: [
      "Logo, titre, menu",
      "Pied de page",
      "Tableaux",
      "Formulaires uniquement",
    ],
    correct: 0,
  },
  {
    question: "156) La balise <footer> peut contenir :",
    answers: [
      "Copyright, contact, liens secondaires",
      "En-tête principal",
      "Tableaux",
      "Formulaires uniquement",
    ],
    correct: 0,
  },
  {
    question: "157) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un lien",
      "Créer un bouton",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "158) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un lien",
      "Créer un bouton",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "159) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "160) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un lien",
      "Créer un bouton",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "161) L'attribut lang dans <html> sert à :",
    answers: [
      "Définir la langue de la page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "162) L'attribut charset dans <meta> sert à :",
    answers: [
      "Définir l'encodage de caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "163) La balise <head> contient :",
    answers: [
      "Métadonnées, CSS, scripts, titre",
      "Contenu visible",
      "Images",
      "Formulaires",
    ],
    correct: 0,
  },
  {
    question: "164) La balise <body> contient :",
    answers: [
      "Tout le contenu visible de la page",
      "Métadonnées",
      "CSS",
      "Scripts uniquement",
    ],
    correct: 0,
  },
  {
    question: "165) La balise <title> sert à :",
    answers: [
      "Définir le titre affiché dans l'onglet du navigateur",
      "Créer un en-tête",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '166) La balise <link rel="icon"> sert à :',
    answers: [
      "Ajouter un favicon",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "167) La balise <script> sert à :",
    answers: [
      "Ajouter du JavaScript",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "168) L'attribut defer dans <script> sert à :",
    answers: [
      "Charger le script après le HTML",
      "Charger le script avant le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "169) L'attribut async dans <script> sert à :",
    answers: [
      "Charger le script de manière asynchrone",
      "Charger le script après le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "170) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JavaScript est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "171) La balise <em> sert à :",
    answers: [
      "Mettre du texte en emphase (italique)",
      "Mettre en gras",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "172) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer une importance",
      "Mettre en italique",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "173) La balise <b> sert à :",
    answers: [
      "Mettre le texte en gras sans importance sémantique",
      "Mettre en italique",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "174) La balise <i> sert à :",
    answers: [
      "Mettre le texte en italique sans emphase",
      "Mettre en gras",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "175) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Mettre en gras",
      "Mettre en italique",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "176) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Mettre en gras",
      "Mettre en italique",
      "Souligner le texte",
    ],
    correct: 0,
  },
  {
    question: "177) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Mettre le texte en exposant",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "178) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Mettre le texte en indice",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "179) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Mettre en gras",
      "Mettre en italique",
      "Souligner le texte",
    ],
    correct: 0,
  },
  {
    question: "180) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "181) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "182) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "183) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "184) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "185) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "186) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "187) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "188) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "189) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "190) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "191) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "192) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "193) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "194) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "195) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "196) L'attribut srcset dans <img> sert à :",
    answers: [
      "Fournir plusieurs images selon la résolution",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "197) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsives",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "198) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à une image",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "199) La balise <audio> sert à :",
    answers: [
      "Ajouter un son",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "200) La balise <video> sert à :",
    answers: [
      "Ajouter une vidéo",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "201) La balise <source> sert à :",
    answers: [
      "Définir les fichiers multimédia",
      "Créer un bouton",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "202) La balise <iframe> sert à :",
    answers: [
      "Intégrer une autre page web",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "203) L'attribut width dans <img> sert à :",
    answers: [
      "Définir la largeur de l'image",
      "Définir la hauteur de l'image",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "204) L'attribut height dans <img> sert à :",
    answers: [
      "Définir la hauteur de l'image",
      "Définir la largeur de l'image",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "205) L'attribut alt dans <img> sert à :",
    answers: [
      "Décrire l'image pour l'accessibilité",
      "Définir la largeur",
      "Définir la hauteur",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "206) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques avec JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "207) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "208) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsives",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "209) La balise <figure> sert à :",
    answers: [
      "Regrouper une image et sa légende",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "210) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "211) La balise <form> sert à :",
    answers: [
      "Créer un formulaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "212) La balise <input> sert à :",
    answers: [
      "Créer un champ dans un formulaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "213) La balise <textarea> sert à :",
    answers: [
      "Créer un champ texte multiligne",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "214) La balise <button> sert à :",
    answers: [
      "Créer un bouton",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "215) La balise <select> sert à :",
    answers: [
      "Créer une liste déroulante",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "216) La balise <option> sert à :",
    answers: [
      "Créer une option dans un <select>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "217) La balise <optgroup> sert à :",
    answers: [
      "Grouper des options dans un <select>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "218) L'attribut placeholder dans <input> sert à :",
    answers: [
      "Afficher un texte indicatif",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "219) L'attribut required dans <input> sert à :",
    answers: [
      "Rendre le champ obligatoire",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "220) L'attribut readonly dans <input> sert à :",
    answers: [
      "Rendre le champ en lecture seule",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },

  {
    question: "221) L'attribut disabled dans <input> sert à :",
    answers: [
      "Désactiver le champ",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "222) L'attribut type='text' dans <input> sert à :",
    answers: [
      "Créer un champ texte simple",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "223) L'attribut type='password' dans <input> sert à :",
    answers: [
      "Masquer le texte saisi",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "224) L'attribut type='email' dans <input> sert à :",
    answers: [
      "Valider une adresse email",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "225) L'attribut type='number' dans <input> sert à :",
    answers: [
      "Entrer un nombre uniquement",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "226) L'attribut type='url' dans <input> sert à :",
    answers: [
      "Valider une URL",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "227) L'attribut type='tel' dans <input> sert à :",
    answers: [
      "Entrer un numéro de téléphone",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "228) L'attribut type='file' dans <input> sert à :",
    answers: [
      "Sélectionner un fichier",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "229) L'attribut multiple dans <input type='file'> sert à :",
    answers: [
      "Sélectionner plusieurs fichiers",
      "Sélectionner un seul fichier",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "230) L'attribut autofocus dans <input> sert à :",
    answers: [
      "Placer le curseur sur le champ au chargement",
      "Rendre le champ obligatoire",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "231) L'attribut pattern dans <input> sert à :",
    answers: [
      "Définir une expression régulière pour validation",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "232) La balise <fieldset> sert à :",
    answers: [
      "Regrouper des champs de formulaire",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "233) La balise <legend> sert à :",
    answers: [
      "Ajouter un titre à <fieldset>",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "234) La balise <label> sert à :",
    answers: [
      "Associer un texte à un champ de formulaire",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: '235) La balise <button type="submit"> sert à :',
    answers: [
      "Envoyer le formulaire",
      "Réinitialiser le formulaire",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '236) La balise <button type="reset"> sert à :',
    answers: [
      "Réinitialiser le formulaire",
      "Envoyer le formulaire",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '237) La balise <input type="submit"> sert à :',
    answers: [
      "Envoyer le formulaire",
      "Réinitialiser le formulaire",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '238) La balise <input type="reset"> sert à :',
    answers: [
      "Réinitialiser le formulaire",
      "Envoyer le formulaire",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '239) La balise <input type="checkbox"> sert à :',
    answers: [
      "Créer une case à cocher",
      "Créer un bouton radio",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '240) La balise <input type="radio"> sert à :',
    answers: [
      "Créer un bouton radio",
      "Créer une case à cocher",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: '241) La balise <input type="button"> sert à :',
    answers: [
      "Créer un bouton",
      "Ajouter un texte",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: '242) La balise <input type="image"> sert à :',
    answers: [
      "Créer un bouton image",
      "Ajouter un texte",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: '243) La balise <input type="hidden"> sert à :',
    answers: [
      "Créer un champ caché",
      "Ajouter un texte",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "244) La balise <output> sert à :",
    answers: [
      "Afficher le résultat d'un calcul",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "245) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "246) La balise <meter> sert à :",
    answers: [
      "Afficher une mesure dans une plage",
      "Créer un bouton",
      "Ajouter un lien",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "247) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "248) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "249) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "250) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "251) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "252) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "253) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "254) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsives",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "255) La balise <figure> sert à :",
    answers: [
      "Regrouper une image et sa légende",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "256) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "257) La balise <video> sert à :",
    answers: [
      "Ajouter une vidéo",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "258) La balise <audio> sert à :",
    answers: [
      "Ajouter un son",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "259) La balise <source> sert à :",
    answers: [
      "Définir le fichier multimédia pour <video> ou <audio>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "260) L'attribut controls dans <video> ou <audio> sert à :",
    answers: [
      "Afficher les contrôles de lecture",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "261) L'attribut autoplay dans <video> ou <audio> sert à :",
    answers: [
      "Lancer automatiquement la lecture",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "262) L'attribut loop dans <video> ou <audio> sert à :",
    answers: [
      "Rejouer automatiquement la vidéo ou l'audio",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "263) L'attribut muted dans <video> ou <audio> sert à :",
    answers: [
      "Couper le son par défaut",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "264) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "265) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "266) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "267) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "268) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '269) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "270) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter du texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: '271) La balise <meta charset="UTF-8"> sert à :',
    answers: [
      "Définir l'encodage des caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question:
      '272) La balise <meta name="viewport" content="width=device-width, initial-scale=1.0"> sert à :',
    answers: [
      "Adapter la page aux écrans mobiles",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "273) La balise <title> sert à :",
    answers: [
      "Définir le titre affiché dans l'onglet du navigateur",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "274) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "275) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "276) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "277) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "278) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "279) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "280) La balise <main> sert à :",
    answers: [
      "Contenu principal de la page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "281) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique de la page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "282) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres avec niveaux hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "283) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "284) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "285) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "286) La balise <ul> sert à :",
    answers: [
      "Créer une liste non ordonnée",
      "Créer une liste ordonnée",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "287) La balise <ol> sert à :",
    answers: [
      "Créer une liste ordonnée",
      "Créer une liste non ordonnée",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "288) La balise <li> sert à :",
    answers: [
      "Créer un élément de liste",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "289) La balise <dl> sert à :",
    answers: [
      "Créer une liste de définitions",
      "Créer une liste ordonnée",
      "Créer une liste non ordonnée",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "290) La balise <dt> sert à :",
    answers: [
      "Définir le terme dans une liste de définitions",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "291) La balise <dd> sert à :",
    answers: [
      "Définir la description d'un terme dans une liste de définitions",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "292) La balise <table> sert à :",
    answers: [
      "Créer un tableau",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "293) La balise <tr> sert à :",
    answers: [
      "Créer une ligne de tableau",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "294) La balise <th> sert à :",
    answers: [
      "Créer une cellule d'en-tête de tableau",
      "Créer une cellule normale",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "295) La balise <td> sert à :",
    answers: [
      "Créer une cellule normale de tableau",
      "Créer une cellule d'en-tête",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "296) La balise <caption> sert à :",
    answers: [
      "Ajouter un titre à un tableau",
      "Créer une ligne de tableau",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "297) La balise <colgroup> sert à :",
    answers: [
      "Grouper des colonnes dans un tableau",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "298) La balise <col> sert à :",
    answers: [
      "Définir une colonne dans <colgroup>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "299) La balise <thead> sert à :",
    answers: [
      "Regrouper les lignes d'en-tête d'un tableau",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "300) La balise <tbody> sert à :",
    answers: [
      "Regrouper les lignes de corps d'un tableau",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "301) La balise <tfoot> sert à :",
    answers: [
      "Regrouper les lignes de pied de tableau",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "302) La balise <a> sert à :",
    answers: [
      "Créer un lien hypertexte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "303) L'attribut href dans <a> sert à :",
    answers: [
      "Définir l'URL du lien",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un tableau",
    ],
    correct: 0,
  },
  {
    question: "304) L'attribut target='_blank' dans <a> sert à :",
    answers: [
      "Ouvrir le lien dans un nouvel onglet",
      "Ouvrir le lien dans la même page",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "305) L'attribut download dans <a> sert à :",
    answers: [
      "Télécharger le fichier lié",
      "Ouvrir le lien",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "306) La balise <img> sert à :",
    answers: [
      "Afficher une image",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "307) L'attribut src dans <img> sert à :",
    answers: [
      "Définir la source de l'image",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "308) L'attribut alt dans <img> sert à :",
    answers: [
      "Décrire l'image pour l'accessibilité",
      "Définir la source",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "309) L'attribut width dans <img> sert à :",
    answers: [
      "Définir la largeur de l'image",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "310) L'attribut height dans <img> sert à :",
    answers: [
      "Définir la hauteur de l'image",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "311) La balise <figure> sert à :",
    answers: [
      "Grouper une image et sa légende",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "312) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "313) La balise <video> sert à :",
    answers: [
      "Ajouter une vidéo",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "314) La balise <audio> sert à :",
    answers: [
      "Ajouter un son",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "315) La balise <source> sert à :",
    answers: [
      "Définir le fichier multimédia pour <video> ou <audio>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "316) L'attribut controls dans <video> ou <audio> sert à :",
    answers: [
      "Afficher les contrôles de lecture",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "317) L'attribut autoplay dans <video> ou <audio> sert à :",
    answers: [
      "Lancer automatiquement la lecture",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "318) L'attribut loop dans <video> ou <audio> sert à :",
    answers: [
      "Rejouer automatiquement le média",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "319) L'attribut muted dans <video> ou <audio> sert à :",
    answers: [
      "Couper le son par défaut",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "320) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "321) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "322) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page web externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "323) La balise <script> sert à :",
    answers: [
      "Ajouter du JavaScript",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "324) L'attribut defer dans <script> sert à :",
    answers: [
      "Charger le script après le HTML",
      "Charger le script avant le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "325) L'attribut async dans <script> sert à :",
    answers: [
      "Charger le script de façon asynchrone",
      "Charger le script après le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "326) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '327) La balise <link rel="icon"> sert à :',
    answers: [
      "Ajouter un favicon",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '328) La balise <meta name="viewport"> sert à :',
    answers: [
      "Adapter la page aux écrans mobiles",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '329) La balise <meta charset="UTF-8"> sert à :',
    answers: [
      "Définir l'encodage des caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "330) La balise <title> sert à :",
    answers: [
      "Définir le titre de la page affiché dans l'onglet",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "331) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou de section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "332) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "333) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "334) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "335) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "336) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "337) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "338) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "339) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "340) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "341) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "342) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer l'importance",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "343) La balise <em> sert à :",
    answers: [
      "Mettre du texte en italique pour emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "344) La balise <b> sert à :",
    answers: [
      "Mettre du texte en gras sans importance sémantique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "345) La balise <i> sert à :",
    answers: [
      "Mettre du texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "346) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "347) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "348) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "349) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "350) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "351) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "352) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "353) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "354) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "355) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "356) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "357) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "358) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "359) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "360) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "361) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "362) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "363) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "364) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "365) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "366) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "367) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "368) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "369) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "370) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "371) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "372) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "373) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "374) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '375) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "376) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '377) La balise <meta charset="UTF-8"> sert à :',
    answers: [
      "Définir l'encodage des caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '378) La balise <meta name="viewport"> sert à :',
    answers: [
      "Adapter la page aux écrans mobiles",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "379) La balise <title> sert à :",
    answers: [
      "Définir le titre de la page affiché dans l'onglet",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "380) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou de section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "381) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "382) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "383) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "384) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "385) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "386) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "387) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "388) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "389) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "390) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "391) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer l'importance",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "392) La balise <em> sert à :",
    answers: [
      "Mettre du texte en italique pour emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "393) La balise <b> sert à :",
    answers: [
      "Mettre du texte en gras sans importance sémantique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "394) La balise <i> sert à :",
    answers: [
      "Mettre du texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "395) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "396) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "397) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "398) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "399) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "400) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "401) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "402) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "403) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "404) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "405) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "406) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "407) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "408) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "409) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "410) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "411) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "412) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "413) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "414) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "415) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "416) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "417) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "418) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "419) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "420) La balise <script> sert à :",
    answers: [
      "Ajouter du JavaScript",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "421) L'attribut defer dans <script> sert à :",
    answers: [
      "Charger le script après le HTML",
      "Charger le script avant le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "422) L'attribut async dans <script> sert à :",
    answers: [
      "Charger le script de façon asynchrone",
      "Charger le script après le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "423) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '424) La balise <link rel="icon"> sert à :',
    answers: [
      "Ajouter un favicon",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '425) La balise <meta name="viewport"> sert à :',
    answers: [
      "Adapter la page aux écrans mobiles",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '426) La balise <meta charset="UTF-8"> sert à :',
    answers: [
      "Définir l'encodage des caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "427) La balise <title> sert à :",
    answers: [
      "Définir le titre de la page affiché dans l'onglet",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "428) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "429) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "430) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "431) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "432) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "433) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "434) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "435) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "436) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "437) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "438) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "439) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer l'importance",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "440) La balise <em> sert à :",
    answers: [
      "Mettre du texte en italique pour emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "441) La balise <b> sert à :",
    answers: [
      "Mettre du texte en gras sans importance sémantique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "442) La balise <i> sert à :",
    answers: [
      "Mettre du texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "443) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "444) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "445) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "446) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "447) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "448) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "449) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "450) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "451) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "452) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "453) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "454) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "455) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "456) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "457) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "458) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "459) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "460) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "461) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "462) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "463) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "464) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "465) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "466) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "467) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "468) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "469) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "470) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "471) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '472) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "473) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '474) La balise <meta charset="UTF-8"> sert à :',
    answers: [
      "Définir l'encodage des caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '475) La balise <meta name="viewport"> sert à :',
    answers: [
      "Adapter la page aux écrans mobiles",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "476) La balise <title> sert à :",
    answers: [
      "Définir le titre de la page affiché dans l'onglet",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "477) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "478) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "479) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "480) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "481) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "482) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "483) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "484) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "485) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "486) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "487) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "488) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer l'importance",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "489) La balise <em> sert à :",
    answers: [
      "Mettre du texte en italique pour emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "490) La balise <b> sert à :",
    answers: [
      "Mettre du texte en gras sans importance sémantique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "491) La balise <i> sert à :",
    answers: [
      "Mettre du texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "492) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "493) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "494) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "495) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "496) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "497) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "498) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "499) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "500) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "501) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "502) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "503) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "504) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "505) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "506) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "507) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "508) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "509) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "510) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "511) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "512) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "513) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "514) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "515) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "516) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "517) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "518) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "519) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "520) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '521) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "522) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "523) La balise <script> sert à :",
    answers: [
      "Ajouter du JavaScript",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "524) L'attribut defer dans <script> sert à :",
    answers: [
      "Charger le script après le HTML",
      "Charger le script avant le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "525) L'attribut async dans <script> sert à :",
    answers: [
      "Charger le script de façon asynchrone",
      "Charger le script après le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "526) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '527) La balise <link rel="icon"> sert à :',
    answers: [
      "Ajouter un favicon",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "528) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "529) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "530) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "531) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "532) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "533) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "534) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "535) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "536) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "537) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "538) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "539) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer l'importance",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "540) La balise <em> sert à :",
    answers: [
      "Mettre du texte en italique pour emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "541) La balise <b> sert à :",
    answers: [
      "Mettre du texte en gras sans importance sémantique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "542) La balise <i> sert à :",
    answers: [
      "Mettre du texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "543) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "544) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "545) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "546) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "547) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "548) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "549) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "550) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "551) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "552) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "553) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "554) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "555) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "556) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "557) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "558) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "559) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "560) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "561) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "562) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "563) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "564) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "565) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "566) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "567) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "568) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "569) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "570) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "571) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '572) La balise <link rel="stylesheet"> sert à :',
    answers: [
      "Lier un fichier CSS externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "573) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "574) La balise <script> sert à :",
    answers: [
      "Ajouter du JavaScript",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "575) L'attribut defer dans <script> sert à :",
    answers: [
      "Charger le script après le HTML",
      "Charger le script avant le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "576) L'attribut async dans <script> sert à :",
    answers: [
      "Charger le script de façon asynchrone",
      "Charger le script après le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "577) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: '578) La balise <link rel="icon"> sert à :',
    answers: [
      "Ajouter un favicon",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "579) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "580) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "581) La balise <nav> sert à :",
    answers: [
      "Définir la zone de navigation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "582) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal unique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "583) La balise <section> sert à :",
    answers: [
      "Définir une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "584) La balise <article> sert à :",
    answers: [
      "Créer un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "585) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "586) La balise <h1> à <h6> sert à :",
    answers: [
      "Définir les titres hiérarchiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "587) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "588) La balise <br> sert à :",
    answers: [
      "Faire un retour à la ligne",
      "Créer un paragraphe",
      "Ajouter un texte",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "589) La balise <hr> sert à :",
    answers: [
      "Créer une ligne horizontale",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "590) La balise <strong> sert à :",
    answers: [
      "Mettre du texte en gras et indiquer l'importance",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "591) La balise <em> sert à :",
    answers: [
      "Mettre du texte en italique pour emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "592) La balise <b> sert à :",
    answers: [
      "Mettre du texte en gras sans importance sémantique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "593) La balise <i> sert à :",
    answers: [
      "Mettre du texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "594) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "595) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "596) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "597) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "598) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "599) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "600) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "601) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "602) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "603) La balise <cite> sert à :",
    answers: [
      "Citer la source d'une œuvre",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "604) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "605) La balise <time> sert à :",
    answers: [
      "Afficher une date ou une heure",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "606) La balise <address> sert à :",
    answers: [
      "Afficher des informations de contact",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "607) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "608) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "609) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "610) La balise <meter> sert à :",
    answers: [
      "Afficher une valeur dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "611) La balise <details> sert à :",
    answers: [
      "Créer un contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "612) La balise <summary> sert à :",
    answers: [
      "Donner le titre du contenu déroulable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "613) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "614) La balise <template> sert à :",
    answers: [
      "Stocker du contenu pour JS",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "615) La balise <slot> sert à :",
    answers: [
      "Définir un emplacement dans un Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "616) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques dynamiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "617) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "618) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "619) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "620) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "621) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "622) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "623) La balise <link rel='stylesheet'> sert à :",
    answers: [
      "Lier un fichier CSS externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "624) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "625) La balise <script> sert à :",
    answers: [
      "Ajouter du JavaScript",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "626) L'attribut defer dans <script> sert à :",
    answers: [
      "Charger le script après le HTML",
      "Charger le script avant le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "627) L'attribut async dans <script> sert à :",
    answers: [
      "Charger le script de façon asynchrone",
      "Charger le script après le HTML",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "628) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS est désactivé",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "629) La balise <link rel='icon'> sert à :",
    answers: [
      "Ajouter un favicon",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "630) La balise <header> sert à :",
    answers: [
      "Créer un en-tête de page ou section",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "631) La balise <section> sert à :",
    answers: [
      "Structurer une section thématique",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "632) La balise <article> sert à :",
    answers: [
      "Représenter un contenu indépendant",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "633) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "634) La balise <figure> sert à :",
    answers: [
      "Regrouper une image et sa légende",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "635) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à une image",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "636) La balise <fieldset> sert à :",
    answers: [
      "Grouper des champs d'un formulaire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "637) La balise <legend> sert à :",
    answers: [
      "Donner un titre à <fieldset>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "638) L'attribut placeholder dans <input> sert à :",
    answers: [
      "Afficher un texte indicatif dans le champ",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "639) L'attribut required dans <input> sert à :",
    answers: [
      "Rendre le champ obligatoire",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "640) L'attribut autocomplete dans <input> sert à :",
    answers: [
      "Autoriser ou non l'auto-complétion",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "641) L'attribut autofocus dans <input> sert à :",
    answers: [
      "Mettre le focus sur le champ au chargement",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "642) L'attribut pattern dans <input> sert à :",
    answers: [
      "Valider avec une expression régulière",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "643) L'attribut maxlength dans <input> sert à :",
    answers: [
      "Limiter le nombre de caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "644) L'attribut minlength dans <input> sert à :",
    answers: [
      "Définir le minimum de caractères",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "645) L'attribut type='email' dans <input> sert à :",
    answers: [
      "Valider une adresse e-mail",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "646) L'attribut type='number' dans <input> sert à :",
    answers: [
      "Autoriser uniquement des nombres",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "647) L'attribut type='tel' dans <input> sert à :",
    answers: [
      "Entrer un numéro de téléphone",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "648) L'attribut type='url' dans <input> sert à :",
    answers: [
      "Valider une URL",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "649) L'attribut type='date' dans <input> sert à :",
    answers: [
      "Sélectionner une date",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "650) La balise <button type='button'> sert à :",
    answers: [
      "Créer un bouton simple",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un formulaire",
    ],
    correct: 0,
  },

  {
    question: "651) La balise <button type='submit'> sert à :",
    answers: [
      "Envoyer un formulaire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "652) La balise <button type='reset'> sert à :",
    answers: [
      "Réinitialiser un formulaire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "653) La balise <datalist> sert à :",
    answers: [
      "Proposer une liste d'options pour <input>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "654) La balise <output> sert à :",
    answers: [
      "Afficher le résultat d'un calcul",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "655) La balise <progress> peut afficher :",
    answers: [
      "Une barre de progression",
      "Un paragraphe",
      "Un lien",
      "Un bouton",
    ],
    correct: 0,
  },
  {
    question: "656) La balise <meter> sert à :",
    answers: [
      "Afficher une mesure dans une plage",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "657) La balise <details> permet :",
    answers: [
      "D'afficher un contenu pliable",
      "Ajouter un texte",
      "Ajouter un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "658) La balise <summary> sert à :",
    answers: [
      "Titre visible de <details>",
      "Ajouter un texte",
      "Ajouter un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "659) L'attribut controls dans <video> sert à :",
    answers: [
      "Afficher les contrôles de lecture",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "660) L'attribut autoplay dans <video> sert à :",
    answers: [
      "Lancer automatiquement la vidéo",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "661) L'attribut loop dans <audio> sert à :",
    answers: [
      "Rejouer la piste automatiquement",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "662) L'attribut muted dans <audio> sert à :",
    answers: [
      "Couper le son par défaut",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "663) La balise <source> dans <audio> ou <video> sert à :",
    answers: [
      "Définir le fichier multimédia",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "664) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsive",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "665) L'attribut srcset dans <img> sert à :",
    answers: [
      "Fournir plusieurs sources d'images",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un formulaire",
    ],
    correct: 0,
  },
  {
    question: "666) La balise <form action=''> sert à :",
    answers: [
      "Définir l'URL d'envoi",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "667) L'attribut method='post' dans <form> sert à :",
    answers: [
      "Envoyer les données de façon sécurisée",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "668) L'attribut method='get' dans <form> sert à :",
    answers: [
      "Envoyer les données dans l'URL",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question:
      "669) L'attribut enctype='multipart/form-data' dans <form> sert à :",
    answers: [
      "Envoyer des fichiers via le formulaire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "670) L'attribut name dans <input> sert à :",
    answers: [
      "Donner un nom au champ pour le serveur",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },

  {
    question: "671) L'attribut value dans <input> sert à :",
    answers: [
      "Définir la valeur du champ",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter une image",
    ],
    correct: 0,
  },
  {
    question: "672) La balise <link rel='preconnect'> sert à :",
    answers: [
      "Préconnecter à une ressource",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "673) La balise <link rel='preload'> sert à :",
    answers: [
      "Précharger une ressource importante",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "674) La balise <meta name='author'> sert à :",
    answers: [
      "Indiquer l'auteur de la page",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "675) La balise <meta name='robots'> sert à :",
    answers: [
      "Donner des directives aux robots",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "676) L'attribut charset dans <meta> sert à :",
    answers: [
      "Définir l'encodage",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "677) La balise <!DOCTYPE html> sert à :",
    answers: [
      "Définir le type de document comme HTML5",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "678) La balise <link rel='stylesheet' media='print'> sert à :",
    answers: [
      "Appliquer un CSS à l'impression",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "679) La balise <meta http-equiv='refresh'> sert à :",
    answers: [
      "Rafraîchir automatiquement la page",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "680) La balise <html lang='fr'> sert à :",
    answers: [
      "Définir la langue de la page",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "681) L'attribut hidden dans <input> sert à :",
    answers: [
      "Cacher le champ",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "682) La balise <link rel='manifest'> sert à :",
    answers: [
      "Lier un fichier manifeste pour PWA",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "683) La balise <meta name='theme-color'> sert à :",
    answers: [
      "Définir la couleur thème pour les navigateurs mobiles",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "684) La balise <link rel='dns-prefetch'> sert à :",
    answers: [
      "Pré-résoudre un nom de domaine",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "685) La balise <template> est :",
    answers: [
      "Invisible jusqu'à utilisation via JavaScript",
      "Visible immédiatement",
      "Crée un lien",
      "Crée un bouton",
    ],
    correct: 0,
  },
  {
    question: "686) La balise <slot> permet :",
    answers: [
      "Placer du contenu dans un template Web Component",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "687) La balise <figure> peut contenir :",
    answers: [
      "Une image et une légende",
      "Seulement du texte",
      "Une table",
      "Un lien",
    ],
    correct: 0,
  },
  {
    question: "688) La balise <figcaption> est :",
    answers: [
      "Une légende pour l'élément <figure>",
      "Un paragraphe simple",
      "Un bouton",
      "Un lien",
    ],
    correct: 0,
  },
  {
    question: "689) La balise <dialog open> sert à :",
    answers: [
      "Ouvrir une boîte de dialogue par défaut",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "690) La balise <picture> peut contenir :",
    answers: [
      "Plusieurs sources d'images",
      "Seulement un <img>",
      "Un lien",
      "Un formulaire",
    ],
    correct: 0,
  },

  {
    question: "691) L'attribut media dans <link> sert à :",
    answers: [
      "Appliquer le CSS selon le type d'écran",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "692) La balise <meta name='viewport'> sert à :",
    answers: [
      "Gérer l'affichage sur mobile",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "693) L'attribut alt dans <img> sert à :",
    answers: [
      "Décrire l'image si elle ne s'affiche pas",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "694) L'attribut title dans <img> sert à :",
    answers: [
      "Afficher une info-bulle",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "695) La balise <map> sert à :",
    answers: [
      "Créer une image cliquable avec zones",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "696) La balise <area> sert à :",
    answers: [
      "Définir les zones cliquables dans <map>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "697) L'attribut shape dans <area> sert à :",
    answers: [
      "Définir la forme de la zone cliquable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "698) L'attribut coords dans <area> sert à :",
    answers: [
      "Définir les coordonnées de la zone cliquable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "699) La balise <audio> permet :",
    answers: [
      "Lire des fichiers audio",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "700) La balise <video> permet :",
    answers: [
      "Lire des fichiers vidéo",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "701) L'attribut poster dans <video> sert à :",
    answers: [
      "Afficher une image avant la lecture",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "702) La balise <track> dans <video> sert à :",
    answers: [
      "Ajouter des sous-titres",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "703) La balise <embed> sert à :",
    answers: [
      "Intégrer du contenu externe (ex: PDF)",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "704) La balise <object> sert à :",
    answers: [
      "Intégrer du contenu multimédia ou interactif",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "705) L'attribut data dans <object> sert à :",
    answers: [
      "Définir l'URL du contenu",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "706) La balise <param> sert à :",
    answers: [
      "Passer des paramètres à <object>",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "707) La balise <iframe> permet :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "708) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques avec JS",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "709) La balise <svg> permet :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "710) L'attribut viewBox dans <svg> sert à :",
    answers: [
      "Définir le système de coordonnées",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },

  {
    question: "711) La balise <symbol> dans <svg> sert à :",
    answers: [
      "Définir un symbole réutilisable",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "712) La balise <use> dans <svg> sert à :",
    answers: [
      "Réutiliser un symbole",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "713) L'attribut viewBox dans <svg> sert à :",
    answers: [
      "Adapter le contenu à la taille",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "714) La balise <math> sert à :",
    answers: [
      "Écrire des formules mathématiques",
      "Ajouter un texte",
      "Créer un bouton",
      "Ajouter un lien",
    ],
    correct: 0,
  },
  {
    question: "715) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "716) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "717) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "718) La balise <mark> sert à :",
    answers: [
      "Surligner du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "719) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "720) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "721) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte inséré",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "722) La balise <q> sert à :",
    answers: [
      "Indiquer une citation courte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "723) La balise <blockquote> sert à :",
    answers: [
      "Indiquer une citation longue",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "724) La balise <cite> sert à :",
    answers: [
      "Citer une source",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "725) La balise <time> sert à :",
    answers: [
      "Indiquer une date ou heure",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "726) La balise <address> sert à :",
    answers: [
      "Informations de contact",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "727) La balise <header> sert à :",
    answers: [
      "Créer un en-tête",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "728) La balise <footer> sert à :",
    answers: [
      "Créer un pied de page",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "729) La balise <nav> sert à :",
    answers: [
      "Définir une zone de navigation",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "730) La balise <main> sert à :",
    answers: [
      "Contenir le contenu principal",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "731) La balise <section> sert à :",
    answers: [
      "Structurer une section thématique",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "732) La balise <article> sert à :",
    answers: [
      "Contenu autonome ou indépendant",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "733) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire ou complémentaire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "734) La balise <figure> sert à :",
    answers: [
      "Regrouper une image et sa légende",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "735) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende pour <figure>",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "736) La balise <hgroup> sert à :",
    answers: [
      "Regrouper plusieurs titres",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "737) La balise <pre> sert à :",
    answers: [
      "Afficher du texte formaté",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "738) La balise <code> sert à :",
    answers: [
      "Indiquer du code informatique",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "739) La balise <samp> sert à :",
    answers: [
      "Indiquer la sortie d'un programme",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "740) La balise <kbd> sert à :",
    answers: [
      "Indiquer une saisie clavier",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "741) La balise <var> sert à :",
    answers: [
      "Indiquer une variable",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "742) La balise <b> sert à :",
    answers: [
      "Mettre le texte en gras sans importance",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "743) La balise <strong> sert à :",
    answers: [
      "Mettre le texte en gras avec importance",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "744) La balise <i> sert à :",
    answers: [
      "Mettre le texte en italique sans importance",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "745) La balise <em> sert à :",
    answers: [
      "Mettre le texte en italique avec emphase",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "746) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "747) La balise <s> sert à :",
    answers: [
      "Barrer le texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "748) La balise <q> sert à :",
    answers: [
      "Afficher une citation courte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "749) La balise <blockquote> sert à :",
    answers: [
      "Afficher une citation longue",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "750) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "751) La balise <address> sert à :",
    answers: [
      "Afficher les informations de contact",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "752) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "753) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "754) La balise <mark> sert à :",
    answers: [
      "Surligner du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "755) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "756) La balise <del> sert à :",
    answers: [
      "Indiquer du texte supprimé",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "757) La balise <ins> sert à :",
    answers: [
      "Indiquer du texte ajouté",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "758) La balise <hr> sert à :",
    answers: [
      "Ajouter une ligne horizontale",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "759) La balise <br> sert à :",
    answers: [
      "Ajouter un saut de ligne",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "760) La balise <wbr> sert à :",
    answers: [
      "Suggérer un point de coupure dans le texte",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "761) La balise <video> sert à :",
    answers: [
      "Lire des fichiers vidéo",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "762) La balise <audio> sert à :",
    answers: [
      "Lire des fichiers audio",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "763) La balise <source> dans <video> ou <audio> sert à :",
    answers: [
      "Définir le fichier multimédia",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "764) La balise <track> dans <video> ou <audio> sert à :",
    answers: [
      "Ajouter des sous-titres",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "765) L'attribut controls dans <video> ou <audio> sert à :",
    answers: [
      "Afficher les contrôles",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "766) L'attribut autoplay dans <video> ou <audio> sert à :",
    answers: [
      "Lancer automatiquement la lecture",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "767) L'attribut loop dans <video> ou <audio> sert à :",
    answers: [
      "Rejouer automatiquement",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "768) L'attribut muted dans <video> ou <audio> sert à :",
    answers: [
      "Couper le son",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "769) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "770) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL à intégrer",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "771) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur",
      "Définir la hauteur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "772) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur",
      "Définir la largeur",
      "Ajouter un texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "773) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "774) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques avec JS",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "775) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "776) L'attribut viewBox dans <svg> sert à :",
    answers: [
      "Définir le système de coordonnées",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "777) La balise <symbol> dans <svg> sert à :",
    answers: [
      "Définir un symbole réutilisable",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "778) La balise <use> dans <svg> sert à :",
    answers: [
      "Réutiliser un symbole",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "779) La balise <template> sert à :",
    answers: [
      "Stocker du contenu HTML invisible",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "780) La balise <slot> sert à :",
    answers: [
      "Placer du contenu dans un Web Component",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },

  {
    question: "781) La balise <form> sert à :",
    answers: [
      "Créer un formulaire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "782) L'attribut action dans <form> sert à :",
    answers: [
      "Définir l'URL d'envoi",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "783) L'attribut method dans <form> sert à :",
    answers: [
      "Définir la méthode d'envoi",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "784) L'attribut enctype dans <form> sert à :",
    answers: [
      "Définir l'encodage pour fichiers",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "785) La balise <input> sert à :",
    answers: [
      "Créer un champ de saisie",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "786) La balise <textarea> sert à :",
    answers: [
      "Créer une zone de texte multi-lignes",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "787) La balise <select> sert à :",
    answers: [
      "Créer un menu déroulant",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "788) La balise <option> sert à :",
    answers: [
      "Définir une option dans <select>",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "789) La balise <optgroup> sert à :",
    answers: [
      "Grouper des options dans <select>",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "790) La balise <button> sert à :",
    answers: [
      "Créer un bouton",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un champ",
    ],
    correct: 0,
  },

  {
    question: "791) La balise <label> sert à :",
    answers: [
      "Associer un texte à un champ",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "792) La balise <fieldset> sert à :",
    answers: [
      "Grouper des champs de formulaire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "793) La balise <legend> sert à :",
    answers: [
      "Ajouter un titre à <fieldset>",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "794) La balise <datalist> sert à :",
    answers: [
      "Fournir des options pour <input>",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "795) La balise <output> sert à :",
    answers: [
      "Afficher un résultat calculé",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "796) L'attribut placeholder dans <input> sert à :",
    answers: [
      "Afficher un texte indicatif",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "797) L'attribut required dans <input> sert à :",
    answers: [
      "Rendre le champ obligatoire",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "798) L'attribut readonly dans <input> sert à :",
    answers: [
      "Rendre le champ en lecture seule",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "799) L'attribut disabled dans <input> sert à :",
    answers: [
      "Désactiver le champ",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "800) L'attribut autofocus dans <input> sert à :",
    answers: [
      "Mettre le focus sur le champ au chargement",
      "Ajouter un texte",
      "Créer un lien",
      "Ajouter un bouton",
    ],
    correct: 0,
  },
  {
    question: "801) L'attribut type='text' dans <input> sert à :",
    answers: [
      "Créer un champ texte simple",
      "Créer un champ mot de passe",
      "Créer un champ e-mail",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "802) L'attribut type='password' dans <input> sert à :",
    answers: [
      "Masquer les caractères saisis",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "803) L'attribut type='email' dans <input> sert à :",
    answers: [
      "Valider une adresse e-mail",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "804) L'attribut type='number' dans <input> sert à :",
    answers: [
      "Autoriser uniquement les nombres",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "805) L'attribut type='tel' dans <input> sert à :",
    answers: [
      "Entrer un numéro de téléphone",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "806) L'attribut type='url' dans <input> sert à :",
    answers: [
      "Valider une URL",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "807) L'attribut type='date' dans <input> sert à :",
    answers: [
      "Sélectionner une date",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "808) L'attribut type='color' dans <input> sert à :",
    answers: [
      "Choisir une couleur",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "809) L'attribut type='checkbox' dans <input> sert à :",
    answers: [
      "Créer une case à cocher",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "810) L'attribut type='radio' dans <input> sert à :",
    answers: [
      "Créer un bouton radio",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "811) L'attribut type='file' dans <input> sert à :",
    answers: [
      "Sélectionner un fichier à envoyer",
      "Créer un champ texte simple",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "812) L'attribut type='submit' dans <input> sert à :",
    answers: [
      "Envoyer le formulaire",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "813) L'attribut type='reset' dans <input> sert à :",
    answers: [
      "Réinitialiser le formulaire",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "814) L'attribut type='button' dans <input> sert à :",
    answers: [
      "Créer un bouton simple",
      "Créer un champ texte",
      "Créer un lien",
      "Envoyer un formulaire",
    ],
    correct: 0,
  },
  {
    question: "815) L'attribut checked dans <input> sert à :",
    answers: [
      "Pré-cocher une case ou un bouton radio",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "816) L'attribut selected dans <option> sert à :",
    answers: [
      "Sélectionner une option par défaut",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "817) L'attribut multiple dans <select> sert à :",
    answers: [
      "Permettre la sélection multiple",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "818) L'attribut name dans <input> ou <select> sert à :",
    answers: [
      "Identifier le champ pour le serveur",
      "Créer un bouton",
      "Créer un lien",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "819) L'attribut value dans <input> ou <option> sert à :",
    answers: [
      "Définir la valeur du champ ou option",
      "Créer un bouton",
      "Créer un lien",
      "Ajouter un texte",
    ],
    correct: 0,
  },
  {
    question: "820) La balise <label> sert à :",
    answers: [
      "Associer un texte descriptif à un champ",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "821) La balise <fieldset> sert à :",
    answers: [
      "Grouper des champs de formulaire",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "822) La balise <legend> sert à :",
    answers: [
      "Donner un titre à un groupe de champs",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "823) La balise <button type='submit'> sert à :",
    answers: [
      "Envoyer un formulaire",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "824) La balise <button type='reset'> sert à :",
    answers: [
      "Réinitialiser le formulaire",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "825) La balise <button type='button'> sert à :",
    answers: [
      "Créer un bouton simple",
      "Créer un champ texte",
      "Créer un lien",
      "Envoyer un formulaire",
    ],
    correct: 0,
  },
  {
    question: "826) La balise <datalist> sert à :",
    answers: [
      "Fournir des suggestions pour <input>",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "827) La balise <output> sert à :",
    answers: [
      "Afficher le résultat d'un calcul",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "828) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "829) La balise <meter> sert à :",
    answers: [
      "Afficher une mesure dans une plage",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "830) La balise <details> sert à :",
    answers: [
      "Afficher un contenu pliable",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "831) La balise <summary> sert à :",
    answers: [
      "Définir le titre visible de <details>",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "832) L'attribut autoplay dans <video> ou <audio> sert à :",
    answers: [
      "Lire automatiquement le média",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "833) L'attribut loop dans <video> ou <audio> sert à :",
    answers: [
      "Rejouer automatiquement le média",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "834) L'attribut muted dans <video> ou <audio> sert à :",
    answers: [
      "Couper le son par défaut",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "835) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsives",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "836) La balise <source> dans <picture> sert à :",
    answers: [
      "Définir les différentes sources d'images",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "837) L'attribut srcset dans <img> sert à :",
    answers: [
      "Fournir plusieurs sources d'images",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "838) L'attribut sizes dans <img> sert à :",
    answers: [
      "Définir la taille de l'image selon le viewport",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "839) L'attribut alt dans <img> sert à :",
    answers: [
      "Décrire l'image si elle ne s'affiche pas",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "840) L'attribut width dans <img> sert à :",
    answers: [
      "Définir la largeur de l'image",
      "Définir la hauteur",
      "Créer un champ texte",
      "Créer un bouton",
    ],
    correct: 0,
  },

  {
    question: "841) L'attribut height dans <img> sert à :",
    answers: [
      "Définir la hauteur de l'image",
      "Définir la largeur",
      "Créer un champ texte",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "842) La balise <figure> sert à :",
    answers: [
      "Regrouper une image et sa légende",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "843) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "844) La balise <map> sert à :",
    answers: [
      "Créer une image cliquable avec zones",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "845) La balise <area> sert à :",
    answers: [
      "Définir une zone cliquable dans <map>",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "846) L'attribut coords dans <area> sert à :",
    answers: [
      "Définir les coordonnées de la zone",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "847) L'attribut shape dans <area> sert à :",
    answers: [
      "Définir la forme de la zone cliquable",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "848) La balise <script> sert à :",
    answers: [
      "Intégrer du JavaScript",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "849) L'attribut src dans <script> sert à :",
    answers: [
      "Définir le fichier JS externe",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "850) L'attribut defer dans <script> sert à :",
    answers: [
      "Différer l'exécution jusqu'au chargement du DOM",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },

  {
    question: "851) L'attribut async dans <script> sert à :",
    answers: [
      "Exécuter le script de façon asynchrone",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "852) La balise <noscript> sert à :",
    answers: [
      "Afficher un contenu si JS désactivé",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "853) La balise <link> sert à :",
    answers: [
      "Lier un fichier CSS externe",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "854) L'attribut rel dans <link> sert à :",
    answers: [
      "Définir la relation avec le document",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "855) L'attribut href dans <link> sert à :",
    answers: [
      "Définir le chemin du fichier CSS",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "856) La balise <meta> sert à :",
    answers: [
      "Fournir des métadonnées",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "857) L'attribut charset dans <meta> sert à :",
    answers: [
      "Définir le codage des caractères",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "858) L'attribut name dans <meta> sert à :",
    answers: [
      "Définir le type de métadonnée",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "859) L'attribut content dans <meta> sert à :",
    answers: [
      "Définir la valeur de la métadonnée",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "860) La balise <title> sert à :",
    answers: [
      "Définir le titre de la page",
      "Créer un champ texte",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },

  {
    question: "861) La balise <body> contient :",
    answers: [
      "Tout le contenu visible de la page",
      "Les métadonnées",
      "Le CSS externe",
      "Le JavaScript externe",
    ],
    correct: 0,
  },
  {
    question: "862) La balise <head> contient :",
    answers: [
      "Les métadonnées et liens externes",
      "Le contenu visible",
      "Le CSS intégré",
      "Le JS intégré",
    ],
    correct: 0,
  },
  {
    question: "863) La balise <html> sert à :",
    answers: [
      "Définir le document HTML",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "864) L'attribut lang dans <html> sert à :",
    answers: [
      "Définir la langue du document",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "865) La balise <!DOCTYPE html> sert à :",
    answers: [
      "Déclarer la version HTML5",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "866) La balise <em> sert à :",
    answers: [
      "Mettre le texte en emphase (italique)",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "867) La balise <strong> sert à :",
    answers: [
      "Mettre le texte en importance (gras)",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "868) La balise <b> sert à :",
    answers: [
      "Mettre le texte en gras sans importance",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "869) La balise <i> sert à :",
    answers: [
      "Mettre le texte en italique sans emphase",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "870) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },

  {
    question: "871) La balise <s> sert à :",
    answers: [
      "Barrer le texte",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "872) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "873) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "874) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "875) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "876) La balise <br> sert à :",
    answers: [
      "Saut de ligne",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "877) La balise <hr> sert à :",
    answers: [
      "Ligne horizontale",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "878) La balise <p> sert à :",
    answers: [
      "Créer un paragraphe",
      "Ajouter un texte",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "879) La balise <br> sert à :",
    answers: [
      "Saut de ligne",
      "Créer un paragraphe",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "880) La balise <hr> sert à :",
    answers: [
      "Ligne horizontale",
      "Créer un paragraphe",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },

  {
    question: "881) La balise <h1> à <h6> sert à :",
    answers: [
      "Titres hiérarchiques",
      "Créer un paragraphe",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "882) La balise <ol> sert à :",
    answers: [
      "Liste ordonnée",
      "Liste non ordonnée",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "883) La balise <ul> sert à :",
    answers: [
      "Liste non ordonnée",
      "Liste ordonnée",
      "Créer un lien",
      "Créer un bouton",
    ],
    correct: 0,
  },
  {
    question: "884) La balise <li> sert à :",
    answers: [
      "Élément de liste",
      "Créer un lien",
      "Créer un bouton",
      "Créer un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "885) La balise <a> sert à :",
    answers: [
      "Créer un lien hypertexte",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "886) L'attribut href dans <a> sert à :",
    answers: [
      "Définir l'URL du lien",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "887) L'attribut target='_blank' dans <a> sert à :",
    answers: [
      "Ouvrir le lien dans un nouvel onglet",
      "Ouvrir dans la même page",
      "Créer un bouton",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "888) L'attribut download dans <a> sert à :",
    answers: [
      "Télécharger le fichier lié",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "889) La balise <img> sert à :",
    answers: [
      "Afficher une image",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "890) La balise <figure> sert à :",
    answers: [
      "Regrouper image et légende",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },

  {
    question: "891) La balise <figcaption> sert à :",
    answers: [
      "Ajouter une légende à <figure>",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "892) La balise <video> sert à :",
    answers: [
      "Lire des fichiers vidéo",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "893) La balise <audio> sert à :",
    answers: [
      "Lire des fichiers audio",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "894) La balise <source> dans <video> ou <audio> sert à :",
    answers: [
      "Définir le fichier multimédia",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "895) La balise <track> dans <video> ou <audio> sert à :",
    answers: [
      "Ajouter des sous-titres",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "896) L'attribut controls dans <video> ou <audio> sert à :",
    answers: [
      "Afficher les contrôles",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "897) L'attribut autoplay dans <video> ou <audio> sert à :",
    answers: [
      "Lire automatiquement le média",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "898) L'attribut loop dans <video> ou <audio> sert à :",
    answers: [
      "Rejouer automatiquement le média",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "899) L'attribut muted dans <video> ou <audio> sert à :",
    answers: [
      "Couper le son par défaut",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "900) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Créer un paragraphe",
      "Créer un bouton",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "901) L'attribut src dans <iframe> sert à :",
    answers: [
      "Définir l'URL de la page à intégrer",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "902) L'attribut width dans <iframe> sert à :",
    answers: [
      "Définir la largeur de l'iframe",
      "Définir la hauteur",
      "Créer un bouton",
      "Créer un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "903) L'attribut height dans <iframe> sert à :",
    answers: [
      "Définir la hauteur de l'iframe",
      "Définir la largeur",
      "Créer un bouton",
      "Créer un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "904) L'attribut sandbox dans <iframe> sert à :",
    answers: [
      "Sécuriser le contenu intégré",
      "Définir la largeur",
      "Créer un bouton",
      "Créer un paragraphe",
    ],
    correct: 0,
  },
  {
    question: "905) La balise <canvas> sert à :",
    answers: [
      "Dessiner des graphiques avec JS",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "906) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "907) L'attribut viewBox dans <svg> sert à :",
    answers: [
      "Définir le système de coordonnées",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "908) La balise <symbol> dans <svg> sert à :",
    answers: [
      "Définir un symbole réutilisable",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "909) La balise <use> dans <svg> sert à :",
    answers: [
      "Réutiliser un symbole défini",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "910) La balise <template> sert à :",
    answers: [
      "Stocker du contenu HTML invisible",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "911) La balise <slot> sert à :",
    answers: [
      "Placer du contenu dans un Web Component",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "912) La balise <form> sert à :",
    answers: [
      "Créer un formulaire",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "913) L'attribut action dans <form> sert à :",
    answers: [
      "Définir l'URL d'envoi",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "914) L'attribut method dans <form> sert à :",
    answers: [
      "Définir la méthode d'envoi",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "915) L'attribut enctype dans <form> sert à :",
    answers: [
      "Définir l'encodage pour fichiers",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "916) La balise <input> sert à :",
    answers: [
      "Créer un champ de saisie",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "917) La balise <textarea> sert à :",
    answers: [
      "Créer une zone de texte multi-lignes",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "918) La balise <select> sert à :",
    answers: [
      "Créer un menu déroulant",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "919) La balise <option> sert à :",
    answers: [
      "Définir une option dans <select>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "920) La balise <optgroup> sert à :",
    answers: [
      "Grouper des options dans <select>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "921) La balise <button> sert à :",
    answers: [
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
      "Créer un lien",
    ],
    correct: 0,
  },
  {
    question: "922) La balise <label> sert à :",
    answers: [
      "Associer un texte à un champ",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "923) La balise <fieldset> sert à :",
    answers: [
      "Grouper des champs de formulaire",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "924) La balise <legend> sert à :",
    answers: [
      "Donner un titre à un groupe de champs",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "925) La balise <datalist> sert à :",
    answers: [
      "Fournir des suggestions pour <input>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "926) La balise <output> sert à :",
    answers: [
      "Afficher un résultat calculé",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "927) La balise <progress> sert à :",
    answers: [
      "Afficher une barre de progression",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "928) La balise <meter> sert à :",
    answers: [
      "Afficher une mesure dans une plage",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "929) La balise <details> sert à :",
    answers: [
      "Afficher un contenu pliable",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "930) La balise <summary> sert à :",
    answers: [
      "Définir le titre visible de <details>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "931) La balise <link> sert à :",
    answers: [
      "Lier un fichier CSS externe",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "932) La balise <meta> sert à :",
    answers: [
      "Fournir des métadonnées",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "933) La balise <title> sert à :",
    answers: [
      "Définir le titre de la page",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "934) La balise <head> contient :",
    answers: [
      "Les métadonnées",
      "Le contenu visible",
      "Créer un bouton",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "935) La balise <body> contient :",
    answers: [
      "Tout le contenu visible",
      "Les métadonnées",
      "Créer un bouton",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "936) La balise <html> sert à :",
    answers: [
      "Définir le document HTML",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "937) La balise <!DOCTYPE html> sert à :",
    answers: [
      "Déclarer la version HTML5",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "938) L'attribut lang dans <html> sert à :",
    answers: [
      "Définir la langue du document",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "939) La balise <script> sert à :",
    answers: [
      "Intégrer du JavaScript",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "940) L'attribut src dans <script> sert à :",
    answers: [
      "Définir le fichier JS externe",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "941) L'attribut defer dans <script> sert à :",
    answers: [
      "Différer l'exécution du script",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "942) L'attribut async dans <script> sert à :",
    answers: [
      "Exécuter le script de façon asynchrone",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "943) La balise <noscript> sert à :",
    answers: [
      "Afficher du contenu si JS désactivé",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "944) La balise <style> sert à :",
    answers: [
      "Ajouter du CSS interne",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "945) La balise <bdi> sert à :",
    answers: [
      "Isoler un texte pour la direction",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "946) La balise <bdo> sert à :",
    answers: [
      "Forcer la direction du texte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "947) La balise <abbr> sert à :",
    answers: [
      "Définir une abréviation",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "948) La balise <address> sert à :",
    answers: [
      "Afficher les informations de contact",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "949) La balise <q> sert à :",
    answers: [
      "Citation courte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "950) La balise <blockquote> sert à :",
    answers: [
      "Citation longue",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "951) La balise <pre> sert à :",
    answers: [
      "Afficher du texte préformaté",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "952) La balise <code> sert à :",
    answers: [
      "Indiquer du code informatique",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "953) La balise <kbd> sert à :",
    answers: [
      "Indiquer la saisie clavier",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "954) La balise <samp> sert à :",
    answers: [
      "Indiquer la sortie d'un programme",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "955) La balise <var> sert à :",
    answers: [
      "Indiquer une variable",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "956) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "957) La balise <small> sert à :",
    answers: [
      "Réduire la taille du texte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "958) La balise <sub> sert à :",
    answers: [
      "Mettre le texte en indice",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "959) La balise <sup> sert à :",
    answers: [
      "Mettre le texte en exposant",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "960) La balise <b> sert à :",
    answers: [
      "Gras sans importance",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "961) La balise <i> sert à :",
    answers: [
      "Italique sans emphase",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "962) La balise <em> sert à :",
    answers: [
      "Italique avec emphase",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "963) La balise <strong> sert à :",
    answers: [
      "Gras avec importance",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "964) La balise <u> sert à :",
    answers: [
      "Souligner le texte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "965) La balise <s> sert à :",
    answers: [
      "Barrer le texte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "966) La balise <q> sert à :",
    answers: [
      "Citation courte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "967) La balise <blockquote> sert à :",
    answers: [
      "Citation longue",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "968) La balise <pre> sert à :",
    answers: [
      "Texte préformaté",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "969) La balise <code> sert à :",
    answers: [
      "Code informatique",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "970) La balise <samp> sert à :",
    answers: [
      "Sortie programme",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "971) La balise <kbd> sert à :",
    answers: [
      "Saisie clavier",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "972) La balise <var> sert à :",
    answers: [
      "Variable",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "973) La balise <figure> sert à :",
    answers: [
      "Grouper image et légende",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "974) La balise <figcaption> sert à :",
    answers: [
      "Légende pour <figure>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "975) La balise <video> sert à :",
    answers: [
      "Lire des vidéos",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "976) La balise <audio> sert à :",
    answers: [
      "Lire des fichiers audio",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "977) La balise <source> dans <video> ou <audio> sert à :",
    answers: [
      "Définir le fichier média",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "978) La balise <track> dans <video> ou <audio> sert à :",
    answers: [
      "Ajouter des sous-titres",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "979) La balise <iframe> sert à :",
    answers: [
      "Intégrer une page externe",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "980) La balise <canvas> sert à :",
    answers: [
      "Dessiner graphiques avec JS",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "981) La balise <svg> sert à :",
    answers: [
      "Créer des graphiques vectoriels",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "982) La balise <math> sert à :",
    answers: [
      "Écrire des formules mathématiques",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "983) La balise <fieldset> sert à :",
    answers: [
      "Grouper des champs",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "984) La balise <legend> sert à :",
    answers: [
      "Titre pour <fieldset>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "985) La balise <details> sert à :",
    answers: [
      "Contenu pliable",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "986) La balise <summary> sert à :",
    answers: [
      "Titre pour <details>",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "987) La balise <main> sert à :",
    answers: [
      "Contenu principal",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "988) La balise <section> sert à :",
    answers: [
      "Sectionner le contenu",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "989) La balise <article> sert à :",
    answers: [
      "Contenu autonome",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "990) La balise <aside> sert à :",
    answers: [
      "Contenu secondaire",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },

  {
    question: "991) La balise <header> sert à :",
    answers: [
      "Entête de page ou section",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "992) La balise <footer> sert à :",
    answers: [
      "Pied de page ou section",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "993) La balise <nav> sert à :",
    answers: [
      "Contenu de navigation",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "994) La balise <mark> sert à :",
    answers: [
      "Surligner le texte",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "995) La balise <time> sert à :",
    answers: [
      "Indiquer une date ou heure",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "996) La balise <wbr> sert à :",
    answers: [
      "Suggestion de coupure de mot",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "997) La balise <template> sert à :",
    answers: [
      "Contenu HTML invisible pour JS",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "998) La balise <slot> sert à :",
    answers: [
      "Contenu dynamique dans Web Components",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "999) La balise <dialog> sert à :",
    answers: [
      "Créer une boîte de dialogue",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
    ],
    correct: 0,
  },
  {
    question: "1000) La balise <picture> sert à :",
    answers: [
      "Afficher des images responsives",
      "Créer un bouton",
      "Créer un paragraphe",
      "Créer une liste",
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
