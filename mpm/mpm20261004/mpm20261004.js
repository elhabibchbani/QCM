const questions = [
{
  question: "Q1. Quelle mémoire perd l'intégralité de son contenu à la mise hors tension ?",
  answers: [
    "A. Le disque dur",
    "B. La mémoire morte (ROM)",
    "C. La mémoire vive (RAM)",
    "D. Le mémoire flash d'une clé USB",
  ],
  correct: 2,
},
{
  question: "Q2. Combien de valeurs distinctes peut-on représenter sur un octet ?",
  answers: [
    "A. 8",
    "B. 64",
    "C. 256",
    "D. 1 024",
  ],
  correct: 2,
},
{
  question: "Q3. Quelle est la valeur décimale du nombre binaire 1011 0010?",
  answers: [
    "A. 162",
    "B. 178",
    "C. 182",
    "D. 194",
  ],
  correct: 1,
},
{
  question: "Q4. Lequel de ces logiciels relève du logiciel système et non de l'applicatif?",
  answers: [
    "A. Un pilote de périphérique",
    "B. Un tableur",
    "C. Un navigateur web",
    "D. Un client de messagerie",
  ],
  correct: 0,
},
{
  question: "Q5. Dans une adresse de courrier électronique, que désigne la partie située après le caractère <<@>>?",
  answers: [
    "A. Le mot de passe de la bolte",
    "B. Le nom de la boîte aux lettres",
    "C. Le protocole de transport",
    "D. Le domaine du serveur de messagerie",
  ],
  correct: 3,
},
{
  question: "Q6. Un fichier de 2,5 Gio est transféré sur une liaison à 50 Mbit/s utiles. Durée approximative du transfert ?",
  answers: [
    "A. Environ 50 secondes",
    "B. Environ 3 minutes 30",
    "C. Environ 7 minutes",
    "D. Environ 14 minutes",
  ],
  correct: 2,
},
{
  question: "Q7. Mémoires et supports de stockage:",
  answers: [
    "A. La mémoire vive est volatile",
    "B. La mémoire vive est plus lente qu'un disque dur mécanique",
    "C. Un disque à mémoire flash conserve les données hors tension",
    "D. La quantité de mémoire vive n'influe pas sur le multitáche",
  ],
  correct: [0, 2],
},
{
  question: "Q8. Un poste affiche l'adresse IP 169.254.18.7 et ne joint aucune ressource du réseau:",
  answers: [
    "A. Il s'est attribué une adresse de lien local, faute de réponse DHCP",
    "B. Cette adresse est publique et routable sur Internet",
    "C. La cause peut être un câble, un port de commutateur inactif ou un service DHCP indisponible",
    "D. Une adresse fixe conforme au plan d'adressage peut rétablir l'accès",
  ],
  correct: [0, 2, 3],
},
{
  question: "Q9. Dans un tableur, la cellule D2 contient=B2*$C$1; la formule est recopiée en D5:",
  answers: [
    "A. DS contient = B5*$C$1",
    "B. La référence SC$1 est absolue et reste inchangée",
    "C. La référence B2 est absolue et reste inchangée",
    "D. La recopic provoque une erreur de calcul",
  ],
  correct: 0,
},
{
  question: "Q10. Quelles pratiques réduisent le risque de compromission d'un poste de travail ?",
  answers: [
    "A. Appliquer régulièrement les correctifs de sécurité",
    "B. Travailler au quotidien avec un compte administrateur",
    "C. Chiffrer le disque des ordinateurs portables",
    "D. Activer l'authentification à double facteur sur les accès distants",
  ],
  correct: [0, 2, 3],
},
{
  question: "Q11. Complexité, dans le pire des cas, de la recherche dichotomique dans un tableau trié de n éléments?",
  answers: [
    "A. 0(1)",
    "B. O(n)",
    "C. O(log n)",
    "D. O( n log n)",
  ],
  correct: 2,
},
{
  question: "Q12. Quelle structure de données applique le principe << dernier entré, premier sorti >> ?",
  answers: [
    "A. La pile",
    "B. La file",
    "C. Le tableau trié",
    "D. Le graphe",
  ],
  correct: 0,
},
{
  question: "Q13.  On insère 3, 7, 2 puis 9  dans une file (FIFO) et dans une pile (LIFO), puis on retire un élément de chacune:",
  answers: [
    "A. 3 de la file, 3 de la pile",
    "B. 9 de la file, 9 de la pile",
    "C. 9 de la file, 3 de la pile",
    "D. 3 de la file, 9 de la pile",
  ],
  correct: 3,
},
{
  question: "Q14. Dans un algorithme, à quoi sert une structure conditionnelle (si... alors... sinon)?",
  answers: [
    "A. A déclarer une variable",
    "B. A répéter un traitement un nombre défini de fois",
    "C. A exécuter un traitement selon qu'une condition est vraie ou fausse",
    "D. A appeler une fonction externe",
  ],
  correct: 2,
},
{
  question: "Q15. Algorithmes de tri",
  answers: [
    "A. Le tri rapide est en O( n log n) en moyenne et en O(n au carré) au pire",
    "B. Le tri à bulles est plus efficace que le tri fusion sur de grands volumes",
    "C. Le tri par sélection est en O(n log n) dans tous les cas",
    "D. Un tri stable préserve l'ordre relatif des éléments de clés égales",
  ],
  correct: [0, 3],
},
{
  question: "Q16. Récursivité:",
  answers: [
    "A. Un cas d'arrêt est indispensable",
    "B. Une profondeur de récursion excessive provoque un débordement de pile",
    "C. Tout algorithme récursif admet une écriture itérative",
    "D. La récursivité est toujours plus rapide que l'itération",
  ],
  correct: [0, 1, 2],
},
{
  question: "Q17. Table de hachage:",
  answers: [
    "A. Elle offre un accès moyen en temps constant à partir d'une clé",
    "B. Les collisions se traitent par chainage ou par adressage ouvert ",
    "C. Elle maintient ses éléments triés selon l'ordre des clés",
    "D. Elle garantit un accès en temps constant même dans le pire des cas",
  ],
  correct: [0, 1],
},
{
  question: "Q18. Parmi ces éléments, lesquels sont des structures de données 7",
  answers: [
    "A. Le tableau",
    "B. La boucle << tant que >>",
    "C. La pile",
    "D. L'instruction d'affectation",
  ],
  correct: [0, 2],
},
{
  question: "Q19. En programmation orientée objet, qu'est-ce qu'une instance",
  answers: [
    "A. La définition abstraite d'un type",
    "B. Une méthode partagée par toutes les classes",
    "C. Un fichier source contenant une classe",
    "D. Un objet concret créé à partir d'une classe",
  ],
  correct: 3,
},
{
  question: "Q20. Dans une classe, comment nomme-t-on une fonction qui y est définie ?",
  answers: [
    "A. Un attribut",
    "B. Un paquetage",
    "C. Une méthode",
    "D. Un commentaire",
  ],
  correct: 2,
},
{
  question: "Q21. Le polymorphisme d'héritage permet: ",
  answers: [
    "A. de regrouper plusieurs classes dans un même fichier",
    "B. d'exécuter, via une référence du type parent, la méthode de la classe réellement instanciée",
    "C. de déclarer plusieurs constructeurs dans une classe ",
    "D. d'interdire tout accès extérieur aux attributs",
  ],
  correct: 1,
},
{
  question: "Q22. Que permet l'héritage en programmation orientée objet ?",
  answers: [
    "A. De réutiliser et de spécialiser les caractéristiques d'une classe existante",
    "B. De dupliquer le code source d'une classe",
    "C. De supprimer une classe d'un programme",
    "D. De chiffrer les données d'un objet",
  ],
  correct: 0,
},
{
  question: "Q23. Parmi ces notions, lesquelles relèvent de la programmation orientée objet?",
  answers: [
    "A. La classe",
    "B. L'héritage",
    "C. La jointure extemе",
    "D. L'encapsulation",
  ],
  correct: [0, 1, 3],
},
{
  question: "Q24. Classes abstraites et interfaces:",
  answers: [
    "A. Une classe abstraite peut porter des méthodes implémentées et des attributs",
    "B. Une classe abstraite n'est pas directement instanciable",
    "C. Une interface déclare des attributs d'état propres à chaque instance",
    "D. Une classe ne peut implémenter qu'une seule interface",
  ],
  correct: [0, 1],
},
{
  question: "Q25. Gestion des exceptions:",
  answers: [
    "A. Le bloc finally, ou son équivalent, s'exécute dans tous les cas",
    "B. Les exceptions constituent le mécanisme normal de contrôle du flux",
    "C. Capturer une exception sans la traiter ni la joumaliser est une mauvaise pratique",
    "D. Une exception non capturée remonte la pile et interrompt le programme",
  ],
  correct: [0, 2, 3],
},
{
  question: "Q26. Passage de paramètres :",
  answers: [
    "A. Objet transmis par référence: les modifications de son état sont visibles de l'appelant",
    "B. Réaffecter le paramètre à un nouvel objet modifie la référence de l'appelant",
    "C. Un type primitif transmis par valeur est copié: sa modification reste locale",
    "D. Les deux modes de passage produisent toujours le même résultat",
  ],
  correct: [0, 2],
},
{
  question: "Q27. Quelle clause SQL filtre les lignes avant tout regroupement ?",
  answers: [
    "A. WHERE",
    "B. HAVING",
    "C. GROUP BY",
    "D. ORDER BY",
  ],
  correct: 0,
},
{
  question: "Q28 : À quoi sert une clé étrangère?",
  answers: [
    "A. A garantir l'unicité des lignes d'une table",
    "B. A accélérer toutes les requêtes de la table",
    "C. A chiffrer une colonne sensible",
    "D. A référencer la clé primaire d'une autre table et assurer l'intégrité référentielle",
  ],
  correct: 3,
},
{
  question: "Q29. Soit EMPLOYE(id, nom, id service) et SERVICE(id, libelle); certains employés n'ont aucun service. Quelle clause FROM retourne tous les employés?",
  answers: [
    "A. EMPLOYE e INNER JOIN SERVICE s ON e.id_service = s.id",
    "B. EMPLOYE e LEFT JOIN SERVICE s ON e.id_service = s.id",
    "C. EMPLOYE e RIGHT JOIN SERVICE s ON e.id_service = s.id",
    "D. EMPLOYE e, SERVICE s WHERE e.id_service = s.id",
  ],
  correct: 1,
},
{
  question: "Q30. Dans une table relationnelle, qu'est-ce qu'un enregistrement?",
  answers: [
    "A. Une colonne de la table",
    "B. Une ligne de la table",
    "C. Un index de la table",
    "D. Une vue de la table",
  ],
  correct: 1,
},
{
  question: "Q31. Quelle instruction SQL permet d'extraire des données d'une table?",
  answers: [
    "A. SELECT",
    "B. UPDATE",
    "C. DELETE",
    "D. CREATE",
  ],
  correct: 0,
},
{
  question: "Q32. Propriétés ACID d'une transaction:",
  answers: [
    "A. L'atomicité: la transaction s'exécute intégralement ou pas du tout",
    "B. L'isolation: les transactions concurrentes n'interferent pas de façon visible",
    "C. La durabilité: les modifications validées survivent à une panne",
    "D. La cohérence impose une exécution strictement séquentielle des transactions",
  ],
  correct: [0, 1, 2],
},
{
  question: "Q33. Index d'une base de données :",
  answers: [
    "A. Ils accélèrent généralement les lectures sélectives",
    "B. Leur création est sans incidence sur le coût des écritures",
    "C Appliquer une fonction à une colonne indexée dans le WHERE peut empêcher l'usage de l'index",
    "D. Intesar systématiquement toutes les colonnes est une bonne pratique",
  ],
  correct: [0, 2],
},
{
  question: "Q34. Regroupement et agrégation:",
  answers: [
    "A. GROUP BY garantit le tri du résultat selon les colonnes de regroupement",
    "B. HAVING filtre les groupes après agrégation",
    "C. Toute colonne non agrégée du SELECT doit figurer dans le GROUP BY",
    "D. HAVING admet une fonction d'agrégation, contrairement à WHERE",
  ],
  correct: [1, 2, 3],
},
{
  question: "Q35. Injection SQL:",
  answers: [
    "A. Elle résulte de la concatenation de données utilisateur non validées ",
    "B. Les requêtes paramétrées constituent la parade de référence ",
    "C. Le moindre privilège du compte applicatif limite l'impact d'une exploitation",
    "D. Le chiffrement TLS de la connexion suffit à la prévenir ",
  ],
  correct: [0, 1, 2],
},
{
  question: "Q36. Parmi ces instructions SQL, lesquelles modifient les données contenues dans une table?",
  answers: [
    "A. INSERT",
    "B. SELECT",
    "C. UPDATE",
    "D. CREATE TABLE",
  ],
  correct: [0, 2],
},
{
  question: "Q37 : Dans une architecture web, le protocole HTTP est :",
  answers: [
    "A. un protocole de transport fiable",
    "B. un protocole applicatif de type requête / réponse ",
    "C. un langage de balisage",
    "D. un système de gestion de bases de données",
  ],
  correct: 1,
},
{
  question: "Q38. Quel langage décrit la structure d'une page web?",
  answers: [
    "A. SQL",
    "B. PHP",
    "C. HTML",
    "D. HTTP",
  ],
  correct: 2,
},
{
  question: "Q39. Dans une architecture web, quel logiciel émet la requête vers le serveur?",
  answers: [
    "A. Le navigateur",
    "B. Le serveur web",
    "C. Le serveur de base de données",
    "D. Le routeur",
  ],
  correct: 0,
},
{
  question: "Q40. Un formulaire transmet un identifiers et un mot de passe Quelle combinaison retenir?",
  answers: [
    "A. Méthode POST sur HTTPS",
    "B. Méthode GET sur HTTPS",
    "C. Méthode POST sur HTTP",
    "D. Méthode GET sur HTTP",
  ],
  correct: 0,
},
{
  question: "Q41. Faille d'injection de script (XSS):",
  answers: [
    "A. Du code est exécuté par le navigateur de la victime",
    "B. L'échappement des données en sortie, selon le contexte, protège\nT'application ",
    "C. Elle ne concerne que les applications sans base de données",
    "D. L'attribut HttpOnly limite le vol du cookie de session par un script",
  ],
  correct: [0, 1, 3],
},
{
  question: "Q42. Sessions et cookies:",
  answers: [
    "A. HTTP est sans état; la session applicative compense cette absence de mémoire",
    "B. Le cookie de session doit porter les attributs Secure et HttpOnly",
    "C. Le jeton de session doit rester inchangé après l'authentification",
    "D. Le mot de passe peut être placé dans un cookie dès lors qu'il est chiffré",
  ],
  correct: [0, 1],
},
{
  question: "Q43. Répartition des contrôles entre navigateur et serveur:",
  answers: [
    "A. Un contrôle côté navigateur suffit à garantir l'intégrité des données enregistrées.",
    "B. Les régies métier doivent être validées côté serveur ",
    "C. Le code JavaScript du navigateur est inspectable et modifiable par l'utilisateur.",
    "D. Le contrôle côté navigateur améliore l'ergonomie sans dispenser du contrôle serveur.",
  ],
  correct: [1, 2, 3],
},
{
  question: "Q44. Parmi ces technologies, lesquelles s'exécutent dans le navigateur de l'utilisateur ?",
  answers: [
    "A. HTML",
    "B. CSS",
    "C. JavaScript",
    "D. MySQL",
  ],
  correct: [0, 1, 2],
},
{
  question: "Q45. Quel service assure la traduction d'un nom de domaine en adresse IP?",
  answers: [
    "A. DHCP",
    "B. DNS",
    "C. NAT",
    "D. FTP",
  ],
  correct: 1,
},
{
  question: "Q46. Quel équipement permet d'interconnecter deux réseaux IP distincts?",
  answers: [
    "A. Un commutateur (switch)",
    "B. Un répéteur",
    "C. Un onduleur",
    "D. Un routeur",
  ],
  correct: 3,
},
{
  question: "Q47. Un serveur répond au ping mais aucune connexion n'aboutit sur le port 8443. Hypothèse la plus pertinente?",
  answers: [
    "A. Le câble réseau du poste client est débranché",
    "B. L'adresse IP du serveur est erronée",
    "C. Le serveur DNS est hors service",
    "D. Le service n'écoute pas sur ce port, ou le flux est filtré",
  ],
  correct: 3,
},
{
  question: "Q48. Protocoles de la pile TCP/IP:",
  answers: [
    "A. ICMP est un protocole de transport fiable dédié au transfert de fichiers",
    "B. TCP assure fiabilité, contrôle de flux et retransmission",
    "C. UDP n'établit pas de connexion et ne garantit pas la livraison",
    "D. HTTPS chiffre les échanges applicatifs au moyen de TLS",
  ],
  correct: [1, 2, 3],
},
{
  question: "Q49. Parmi ces logiciels, lesquels sont des systèmes d'exploitation?",
  answers: [
    "A. Windows",
    "B. Linux",
    "C. Oracle Database",
    "D. Android",
  ],
  correct: [0, 1, 3],
},
{
  question: "Q50. Environnements et mise en production:",
  answers: [
    "A. Séparer développement, recette et production limite le risque de régression",
    "B. Les paramètres de connexion doivent être inscrits en dur dans le code source",
    "C. Déployer directement en production fait gagner du temps sans risque particulier",
    "D. Un plan de retour arrière doit précéder toute mise en production",
  ],
  correct: [0, 3],
},
{
  question: "Q51. Dans un projet informatique, que désigne le cahier des charges?",
  answers: [
    "A. Le code source livré au client",
    "B. Le document décrivant les besoins et les exigences à satisfaire",
    "C. Le planning des congés de l'équipe",
    "D. Le manuel d'installation du logiciel",
  ],
  correct: 1,
},
{
  question: "Q52. Quelle commande intègre dans la branche courante une autre branche en créant un commit de fusion ?",
  answers: [
    "A. git rebase",
    "B. git merge",
    "C. git cherry-pick",
    "D. git reset",
  ],
  correct: 1,
},
{
  question: "Q53. Quelle phase précède immédiatement la mise en production d'une application?",
  answers: [
    "A. L'étude d'opportunité",
    "B. Le codage",
    "C. La recette, ou tests de validation",
    "D. L'analyse des besoins",
  ],
  correct: 2,
},
{
  question: "Q54. Parmi ces phases, lesquelles appartiennent au cycle de vie d'un logiciel?",
  answers: [
    "A. L'analyse des besoins",
    "B. La conception",
    "C. La négociation du bail des locaux",
    "D. La maintenance",
  ],
  correct: [0, 1, 3],
},
{
  question: "Q55. Gestion de versions:",
  answers: [
    "A. Une branche isole le développement d'une fonctionnalité de la ligne principale",
    "B. Un conflit de fusion survient lorsque deux contributions modifient les mêmes lignes",
    "C. L'existence d'un dépôt central dispense de sauvegarder le code ",
    "D. Un message de validation explicite facilite la traçabilité",
  ],
  correct: [0, 1, 3],
},
{
  question: "Q56. Qualité et maintenabilité du code:",
  answers: [
    "A. La revue de code favorise la détection précoce des défauts",
    "B. Une couverture de tests de 100% garantit l'absence de défaut",
    "C. Le refactoring modifie la structure interne sans altérer comportement observable",
    "D. La duplication de code accroît le coût de maintenance",
  ],
  correct: [0, 2, 3],
},
{
  question: "Q57. Comment conserver les mots de passe des utilisateurs en base de données ?",
  answers: [
    "A. En clair, avec un accès restreint aux administrateurs",
    "B. Chiffrés par un algorithme symétrique réversible",
    "C. Encodés en Base64",
    "D. Sous forme d'empreinte produite par une fonction de hachage lente avec sel",
  ],
  correct: 3,
},
{
  question: "Q58 : Authentification et habilitations",
  answers: [
    "A. L'authentification établit l'identité, l'autorisation détermine les droits ",
    "B. Le contrôle d'accès doit être appliqué côté serveur à chaque requête ",
    "C. Masquer un bouton dans l'interface suffit à interdire la fonction ",
    "D. Les mots de passe saisis doivent être journalisés pour le diagnostic ",
  ],
  correct: [0, 1],
},
{
  question: "Q59. Loi 09-08 relative à la protection des données à caractère personnel:",
  answers: [
    "A. Le traitement est en principe soumis à déclaration ou autorisation de la CNDP",
    "B. La loi n'impose aucune obligation de sécurité au responsable du traitement",
    "C. La personne concernée dispose de droits d'accès, de rectification et d'opposition",
    "D. Les données doivent être collectées pour des finalités déterminées et légitimes",
  ],
  correct: [0, 2, 3],
},
{
  question: "Q60 : Parmi ces pratiques, lesquelles renforcent la sécurité d'un mot de passe ?",
  answers: [
    "A. Une longueur suffisante et des caractères variés ",
    "B. Le partage du mot de passe entre collègues ",
    "C. Un mot de passe distinct pour chaque service ",
    "D. Le renouvellement dès qu'une compromission est suspectée ",
  ],
  correct: [0, 2, 3],
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
