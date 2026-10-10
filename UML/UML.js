const questions = [
{
  question: "Q1. Que signifie UML ?",
  answers: [
    "A. Unified Modeling Language",
    "B. Universal Machine Language",
    "C. Unified Management Logic",
    "D. User Modeling Language",
  ],
  correct: 0,
},
{
  question: "Q2. Quel est le rôle principal d'UML ?",
  answers: [
    "A. Compiler un programme",
    "B. Modéliser et représenter un système",
    "C. Exécuter un programme",
    "D. Gérer directement une base de données",
  ],
  correct: 1,
},
{
  question: "Q3. UML est principalement :",
  answers: [
    "A. Un langage de programmation",
    "B. Un système d'exploitation",
    "C. Un langage de modélisation",
    "D. Un compilateur",
  ],
  correct: 2,
},
{
  question: "Q4. UML est-il réservé au langage Java ?",
  answers: [
    "A. Oui",
    "B. Oui, mais uniquement pour les applications Web",
    "C. Oui, mais uniquement pour Android",
    "D. Non, il peut modéliser des systèmes développés avec différents langages",
  ],
  correct: 3,
},
{
  question: "Q5. UML est utilisé principalement pendant :",
  answers: [
    "A. L'analyse et la conception des systèmes",
    "B. L'impression des documents",
    "C. La réparation du matériel uniquement",
    "D. La compilation uniquement",
  ],
  correct: 0,
},
{
  question: "Q6. Combien de catégories principales de diagrammes UML distingue-t-on généralement ?",
  answers: [
    "A. Une seule",
    "B. Deux : structurels et comportementaux",
    "C. Cinq uniquement",
    "D. Dix catégories principales",
  ],
  correct: 1,
},
{
  question: "Q7. Quel élément n'est pas un diagramme UML ?",
  answers: [
    "A. Diagramme de classes",
    "B. Diagramme de séquence",
    "C. Diagramme SQL",
    "D. Diagramme d'activités",
  ],
  correct: 2,
},
{
  question: "Q8. UML facilite principalement :",
  answers: [
    "A. L'augmentation de la mémoire RAM",
    "B. La réparation du processeur",
    "C. La configuration du BIOS",
    "D. La communication entre les acteurs d'un projet",
  ],
  correct: 3,
},
{
  question: "Q9. Un modèle UML représente :",
  answers: [
    "A. Une représentation simplifiée d'un système",
    "B. Un programme obligatoirement exécutable",
    "C. Un fichier audio",
    "D. Un système d'exploitation",
  ],
  correct: 0,
},
{
  question: "Q10. Quel outil peut être utilisé pour créer des diagrammes UML ?",
  answers: [
    "A. Un antivirus uniquement",
    "B. StarUML",
    "C. Un pilote matériel",
    "D. Un serveur DHCP",
  ],
  correct: 1,
},
{
  question: "Q11. Quel diagramme représente les fonctionnalités offertes par un système à ses utilisateurs ?",
  answers: [
    "A. Diagramme de classes",
    "B. Diagramme de déploiement",
    "C. Diagramme de cas d'utilisation",
    "D. Diagramme de composants",
  ],
  correct: 2,
},
{
  question: "Q12. Comment appelle-t-on une entité externe qui interagit avec le système ?",
  answers: [
    "A. Une classe",
    "B. Une méthode",
    "C. Un attribut",
    "D. Un acteur",
  ],
  correct: 3,
},
{
  question: "Q13. Quel symbole représente généralement un acteur UML ?",
  answers: [
    "A. Un bonhomme stylisé",
    "B. Un losange noir",
    "C. Un cercle rempli",
    "D. Un triangle noir",
  ],
  correct: 0,
},
{
  question: "Q14. Un cas d'utilisation représente :",
  answers: [
    "A. Une variable",
    "B. Une fonctionnalité ou un service rendu par le système",
    "C. Un serveur physique",
    "D. Une adresse IP",
  ],
  correct: 1,
},
{
  question: "Q15. La frontière du système dans un diagramme de cas d'utilisation est généralement représentée par :",
  answers: [
    "A. Un cercle",
    "B. Un triangle",
    "C. Un rectangle",
    "D. Un losange noir",
  ],
  correct: 2,
},
{
  question: "Q16. La relation <<include>> signifie généralement :",
  answers: [
    "A. Un héritage entre classes",
    "B. Une suppression d'acteur",
    "C. Une relation physique entre serveurs",
    "D. L'inclusion obligatoire du comportement d'un autre cas d'utilisation",
  ],
  correct: 3,
},
{
  question: "Q17. La relation <<extend>> représente généralement :",
  answers: [
    "A. Un comportement supplémentaire conditionnel ou optionnel",
    "B. Une composition entre objets",
    "C. Une variable privée",
    "D. Une relation entre packages uniquement",
  ],
  correct: 0,
},
{
  question: "Q18. Dans un système bancaire, « Retirer de l'argent » est :",
  answers: [
    "A. Une classe abstraite obligatoirement",
    "B. Un cas d'utilisation possible",
    "C. Un serveur",
    "D. Une adresse mémoire",
  ],
  correct: 1,
},
{
  question: "Q19. Un acteur peut-il être un autre système informatique ?",
  answers: [
    "A. Non, jamais",
    "B. Oui, mais uniquement un système Java",
    "C. Oui, un système externe peut jouer le rôle d'acteur",
    "D. Non, seuls les humains peuvent être acteurs",
  ],
  correct: 2,
},
{
  question: "Q20. Quel diagramme convient le mieux pour représenter les interactions entre un client et les fonctionnalités d'une application ?",
  answers: [
    "A. Diagramme de déploiement",
    "B. Diagramme de classes",
    "C. Diagramme d'états",
    "D. Diagramme de cas d'utilisation",
  ],
  correct: 3,
},
{
  question: "Q21. Quel diagramme représente la structure statique d'un système ?",
  answers: [
    "A. Diagramme de classes",
    "B. Diagramme d'activités",
    "C. Diagramme de séquence",
    "D. Diagramme d'états",
  ],
  correct: 0,
},
{
  question: "Q22. Une classe UML contient généralement :",
  answers: [
    "A. Uniquement des adresses IP",
    "B. Un nom, des attributs et des opérations",
    "C. Uniquement des acteurs",
    "D. Uniquement des serveurs",
  ],
  correct: 1,
},
{
  question: "Q23. Un objet est :",
  answers: [
    "A. Un diagramme de déploiement",
    "B. Une relation d'héritage",
    "C. Une instance d'une classe",
    "D. Un package obligatoirement",
  ],
  correct: 2,
},
{
  question: "Q24. Quel symbole indique la visibilité publique d'un attribut ou d'une opération ?",
  answers: [
    "A. -",
    "B. #",
    "C. ~",
    "D. +",
  ],
  correct: 3,
},
{
  question: "Q25. Quel symbole indique la visibilité privée ?",
  answers: [
    "A. -",
    "B. +",
    "C. #",
    "D. *",
  ],
  correct: 0,
},
{
  question: "Q26. Quel symbole indique généralement la visibilité protégée ?",
  answers: [
    "A. +",
    "B. #",
    "C. -",
    "D. /",
  ],
  correct: 1,
},
{
  question: "Q27. Un attribut d'une classe représente généralement :",
  answers: [
    "A. Un acteur externe",
    "B. Une transition",
    "C. Une donnée ou une propriété de la classe",
    "D. Un serveur réseau",
  ],
  correct: 2,
},
{
  question: "Q28. Une opération d'une classe représente généralement :",
  answers: [
    "A. Une adresse physique",
    "B. Une multiplicité",
    "C. Un package",
    "D. Un comportement ou un service",
  ],
  correct: 3,
},
{
  question: "Q29. Que signifie la multiplicité 1..* ?",
  answers: [
    "A. Un ou plusieurs",
    "B. Zéro ou un",
    "C. Exactement zéro",
    "D. Exactement deux",
  ],
  correct: 0,
},
{
  question: "Q30. Que signifie la multiplicité 0..1 ?",
  answers: [
    "A. Un ou plusieurs",
    "B. Zéro ou un",
    "C. Au moins deux",
    "D. Exactement trois",
  ],
  correct: 1,
},
{
  question: "Q31. Que signifie la multiplicité 1..1 ?",
  answers: [
    "A. Zéro ou plusieurs",
    "B. Un ou plusieurs",
    "C. Exactement un",
    "D. Zéro ou un",
  ],
  correct: 2,
},
{
  question: "Q32. Que signifie la multiplicité 0..* ?",
  answers: [
    "A. Exactement un",
    "B. Un seul objet",
    "C. Au moins un",
    "D. Zéro ou plusieurs",
  ],
  correct: 3,
},
{
  question: "Q33. Une association entre deux classes représente généralement :",
  answers: [
    "A. Un lien structurel entre elles",
    "B. Une erreur de compilation",
    "C. Une instruction SQL",
    "D. Une boucle obligatoire",
  ],
  correct: 0,
},
{
  question: "Q34. Une classe abstraite est généralement :",
  answers: [
    "A. Toujours instanciable directement",
    "B. Une classe qui ne peut pas être instanciée directement",
    "C. Un objet déjà créé",
    "D. Un acteur externe",
  ],
  correct: 1,
},
{
  question: "Q35. L'encapsulation consiste notamment à :",
  answers: [
    "A. Supprimer toutes les méthodes",
    "B. Transformer une classe en serveur",
    "C. Contrôler l'accès aux données et aux détails internes",
    "D. Remplacer UML par SQL",
  ],
  correct: 2,
},
{
  question: "Q36. Quelle relation UML représente l'héritage ?",
  answers: [
    "A. Composition",
    "B. Agrégation",
    "C. Dépendance",
    "D. Généralisation",
  ],
  correct: 3,
},
{
  question: "Q37. Quel symbole représente généralement la généralisation en UML ?",
  answers: [
    "A. Une ligne terminée par un triangle blanc",
    "B. Un losange noir",
    "C. Un cercle rempli",
    "D. Un rectangle",
  ],
  correct: 0,
},
{
  question: "Q38. La composition représente généralement :",
  answers: [
    "A. Une relation entre acteurs uniquement",
    "B. Une relation forte entre un tout et ses parties",
    "C. Une relation de compilation",
    "D. Une relation entre adresses IP",
  ],
  correct: 1,
},
{
  question: "Q39. Quel symbole représente généralement une composition ?",
  answers: [
    "A. Un triangle blanc",
    "B. Un cercle vide",
    "C. Un losange noir",
    "D. Une flèche pointillée",
  ],
  correct: 2,
},
{
  question: "Q40. L'agrégation représente généralement :",
  answers: [
    "A. Un héritage",
    "B. Une exception",
    "C. Une méthode abstraite",
    "D. Une relation tout-partie plus faible",
  ],
  correct: 3,
},
{
  question: "Q41. Quel symbole représente généralement une agrégation ?",
  answers: [
    "A. Un losange blanc",
    "B. Un losange noir",
    "C. Un triangle noir",
    "D. Un cercle rempli",
  ],
  correct: 0,
},
{
  question: "Q42. Une dépendance UML indique généralement :",
  answers: [
    "A. Une relation d'héritage obligatoire",
    "B. Qu'un élément utilise ou dépend d'un autre",
    "C. Une composition forte uniquement",
    "D. Une relation entre utilisateurs uniquement",
  ],
  correct: 1,
},
{
  question: "Q43. Laquelle de ces relations exprime l'héritage ?",
  answers: [
    "A. Client utilise Paiement",
    "B. Voiture contient Moteur",
    "C. Chien hérite de Animal",
    "D. Étudiant possède un nom",
  ],
  correct: 2,
},
{
  question: "Q44. Dans une relation de généralisation, le triangle blanc pointe généralement vers :",
  answers: [
    "A. La classe enfant",
    "B. L'objet créé",
    "C. L'attribut privé",
    "D. La classe parent",
  ],
  correct: 3,
},
{
  question: "Q45. Quelle affirmation concernant l'agrégation et la composition est correcte ?",
  answers: [
    "A. La composition exprime généralement un lien tout-partie plus fort que l'agrégation",
    "B. L'agrégation est toujours plus forte que la composition",
    "C. Les deux indiquent obligatoirement un héritage",
    "D. Aucune ne peut relier des classes",
  ],
  correct: 0,
},
{
  question: "Q46. Quel diagramme représente les échanges de messages entre objets au cours du temps ?",
  answers: [
    "A. Diagramme de composants",
    "B. Diagramme de séquence",
    "C. Diagramme de classes",
    "D. Diagramme de déploiement",
  ],
  correct: 1,
},
{
  question: "Q47. Dans un diagramme de séquence, le temps s'écoule généralement :",
  answers: [
    "A. De droite à gauche uniquement",
    "B. De bas en haut",
    "C. De haut en bas",
    "D. Sans ordre temporel",
  ],
  correct: 2,
},
{
  question: "Q48. Une ligne de vie représente généralement :",
  answers: [
    "A. Une table SQL",
    "B. Un serveur obligatoirement",
    "C. Une relation d'héritage",
    "D. Un participant et son existence au cours du temps",
  ],
  correct: 3,
},
{
  question: "Q49. Dans un diagramme de séquence, une flèche entre deux participants représente généralement :",
  answers: [
    "A. Un message",
    "B. Un attribut",
    "C. Une classe abstraite",
    "D. Un package",
  ],
  correct: 0,
},
{
  question: "Q50. Un message synchrone implique généralement que :",
  answers: [
    "A. Aucun participant ne répond jamais",
    "B. L'émetteur attend la fin de l'appel avant de poursuivre",
    "C. Le message est toujours envoyé par e-mail",
    "D. Le système s'arrête définitivement",
  ],
  correct: 1,
},
{
  question: "Q51. Quel élément UML permet de représenter une interaction conditionnelle ou répétée dans un diagramme de séquence ?",
  answers: [
    "A. Un attribut privé",
    "B. Un losange de composition uniquement",
    "C. Un fragment combiné comme alt ou loop",
    "D. Une multiplicité 1..* uniquement",
  ],
  correct: 2,
},
{
  question: "Q52. Dans un diagramme de séquence, le fragment alt représente généralement :",
  answers: [
    "A. Une classe abstraite",
    "B. Un déploiement",
    "C. Une association permanente",
    "D. Des alternatives conditionnelles",
  ],
  correct: 3,
},
{
  question: "Q53. Dans un diagramme de séquence, le fragment loop représente :",
  answers: [
    "A. Une répétition",
    "B. Un héritage",
    "C. Une composition",
    "D. Une classe",
  ],
  correct: 0,
},
{
  question: "Q54. Le diagramme de séquence appartient principalement aux diagrammes :",
  answers: [
    "A. Structurels",
    "B. Comportementaux, plus précisément d'interaction",
    "C. Physiques uniquement",
    "D. De base de données uniquement",
  ],
  correct: 1,
},
{
  question: "Q55. Quel diagramme convient pour détailler l'ordre des appels entre un client, une application et une base de données ?",
  answers: [
    "A. Diagramme de déploiement uniquement",
    "B. Diagramme de packages",
    "C. Diagramme de séquence",
    "D. Diagramme de classes uniquement",
  ],
  correct: 2,
},
{
  question: "Q56. Quel diagramme représente un workflow ou un processus métier ?",
  answers: [
    "A. Diagramme de composants",
    "B. Diagramme de déploiement",
    "C. Diagramme de classes",
    "D. Diagramme d'activités",
  ],
  correct: 3,
},
{
  question: "Q57. Dans un diagramme d'activités, le nœud initial est généralement représenté par :",
  answers: [
    "A. Un cercle noir rempli",
    "B. Un losange blanc",
    "C. Un triangle blanc",
    "D. Un rectangle vide",
  ],
  correct: 0,
},
{
  question: "Q58. Dans un diagramme d'activités, un losange représente généralement :",
  answers: [
    "A. Une classe",
    "B. Une décision ou une fusion de flux",
    "C. Un acteur",
    "D. Un package",
  ],
  correct: 1,
},
{
  question: "Q59. Quel diagramme représente les états d'un objet et les transitions entre ces états ?",
  answers: [
    "A. Diagramme de composants",
    "B. Diagramme de classes",
    "C. Diagramme d'états",
    "D. Diagramme de déploiement",
  ],
  correct: 2,
},
{
  question: "Q60. Dans un diagramme d'états, une transition représente :",
  answers: [
    "A. Un attribut",
    "B. Un package",
    "C. Un acteur",
    "D. Le passage d'un état à un autre",
  ],
  correct: 3,
},
{
  question: "Q61. Quel diagramme est adapté pour représenter les étapes d'une commande en ligne ?",
  answers: [
    "A. Diagramme d'activités",
    "B. Diagramme de composants uniquement",
    "C. Diagramme de déploiement uniquement",
    "D. Diagramme de packages uniquement",
  ],
  correct: 0,
},
{
  question: "Q62. Quel diagramme est adapté pour représenter les états d'une commande : créée, payée, expédiée et livrée ?",
  answers: [
    "A. Diagramme de classes uniquement",
    "B. Diagramme d'états",
    "C. Diagramme de déploiement",
    "D. Diagramme de composants",
  ],
  correct: 1,
},
{
  question: "Q63. Dans un diagramme d'activités, les flèches représentent généralement :",
  answers: [
    "A. Des attributs",
    "B. Des classes parentes",
    "C. Le flux de contrôle entre les actions",
    "D. Des adresses IP",
  ],
  correct: 2,
},
{
  question: "Q64. Dans un diagramme d'activités, les couloirs (swimlanes) servent notamment à :",
  answers: [
    "A. Définir les types de données",
    "B. Compiler le programme",
    "C. Définir les adresses réseau",
    "D. Répartir les responsabilités entre acteurs ou unités",
  ],
  correct: 3,
},
{
  question: "Q65. Un diagramme d'états est particulièrement utile pour :",
  answers: [
    "A. Un objet dont le comportement dépend de son état",
    "B. Décrire uniquement les tables SQL",
    "C. Décrire uniquement le matériel",
    "D. Remplacer le langage Java",
  ],
  correct: 0,
},
{
  question: "Q66. Quel diagramme représente les composants logiciels et leurs dépendances ?",
  answers: [
    "A. Diagramme d'états",
    "B. Diagramme de composants",
    "C. Diagramme d'activités",
    "D. Diagramme de séquence",
  ],
  correct: 1,
},
{
  question: "Q67. Quel diagramme représente les nœuds physiques et le déploiement des artefacts ?",
  answers: [
    "A. Diagramme de cas d'utilisation",
    "B. Diagramme d'activités",
    "C. Diagramme de déploiement",
    "D. Diagramme de séquence",
  ],
  correct: 2,
},
{
  question: "Q68. Quel diagramme permet d'organiser les éléments en packages ?",
  answers: [
    "A. Diagramme de séquence",
    "B. Diagramme d'états",
    "C. Diagramme de déploiement",
    "D. Diagramme de packages",
  ],
  correct: 3,
},
{
  question: "Q69. Quel diagramme représente un instantané des objets et de leurs liens à un moment donné ?",
  answers: [
    "A. Diagramme d'objets",
    "B. Diagramme d'activités",
    "C. Diagramme de déploiement",
    "D. Diagramme de cas d'utilisation",
  ],
  correct: 0,
},
{
  question: "Q70. Quel diagramme permet de représenter les interactions avec une vue globale du flux de contrôle ?",
  answers: [
    "A. Diagramme de composants",
    "B. Diagramme d'activités",
    "C. Diagramme de packages",
    "D. Diagramme de déploiement",
  ],
  correct: 1,
},
{
  question: "Q71. Dans un diagramme de déploiement, un nœud représente généralement :",
  answers: [
    "A. Une méthode Java",
    "B. Une association entre attributs",
    "C. Une ressource matérielle ou un environnement d'exécution",
    "D. Un acteur uniquement",
  ],
  correct: 2,
},
{
  question: "Q72. Quel diagramme est le plus adapté pour représenter l'architecture physique d'une application répartie sur plusieurs serveurs ?",
  answers: [
    "A. Diagramme de classes",
    "B. Diagramme de séquence uniquement",
    "C. Diagramme d'états",
    "D. Diagramme de déploiement",
  ],
  correct: 3,
},
{
  question: "Q73. Quel diagramme est adapté pour représenter les dépendances entre modules logiciels ?",
  answers: [
    "A. Diagramme de composants",
    "B. Diagramme d'états",
    "C. Diagramme d'activités uniquement",
    "D. Diagramme de séquence uniquement",
  ],
  correct: 0,
},
{
  question: "Q74. Quel diagramme décrit la structure logique d'un ensemble de classes ?",
  answers: [
    "A. Diagramme de déploiement",
    "B. Diagramme de classes",
    "C. Diagramme d'activités",
    "D. Diagramme de séquence",
  ],
  correct: 1,
},
{
  question: "Q75. Le diagramme de communication UML met principalement en évidence :",
  answers: [
    "A. La configuration du BIOS",
    "B. Les tables SQL uniquement",
    "C. Les liens entre participants et les messages échangés",
    "D. Le déploiement matériel uniquement",
  ],
  correct: 2,
},
{
  question: "Q76. Quel concept de programmation orientée objet permet à une classe de reprendre les caractéristiques d'une autre ?",
  answers: [
    "A. Encapsulation",
    "B. Compilation",
    "C. Instanciation uniquement",
    "D. Héritage",
  ],
  correct: 3,
},
{
  question: "Q77. Le polymorphisme permet notamment :",
  answers: [
    "A. D'utiliser une même interface avec plusieurs comportements possibles",
    "B. De supprimer toutes les classes",
    "C. De remplacer tous les attributs par des packages",
    "D. D'empêcher l'héritage dans tous les cas",
  ],
  correct: 0,
},
{
  question: "Q78. L'encapsulation permet notamment :",
  answers: [
    "A. De rendre tous les attributs publics obligatoirement",
    "B. De protéger les données et contrôler leur accès",
    "C. De transformer une classe en serveur",
    "D. De supprimer les méthodes",
  ],
  correct: 1,
},
{
  question: "Q79. Une interface en programmation orientée objet définit généralement :",
  answers: [
    "A. Un serveur physique",
    "B. Une adresse réseau",
    "C. Un contrat de comportements à fournir",
    "D. Une table de données obligatoirement",
  ],
  correct: 2,
},
{
  question: "Q80. Une classe abstraite :",
  answers: [
    "A. Ne peut contenir aucune méthode",
    "B. Est toujours une interface réseau",
    "C. Doit obligatoirement être instanciée directement",
    "D. Ne peut généralement pas être instanciée directement",
  ],
  correct: 3,
},
{
  question: "Q81. En UML, la visibilité publique est notée :",
  answers: ["A. +", "B. -", "C. #", "D. ~"],
  correct: 0,
},
{
  question: "Q82. En UML, la visibilité privée est notée :",
  answers: ["A. +", "B. -", "C. #", "D. *"],
  correct: 1,
},
{
  question: "Q83. En UML, la visibilité protégée est notée :",
  answers: ["A. +", "B. -", "C. #", "D. /"],
  correct: 2,
},
{
  question: "Q84. En UML, une opération abstraite est généralement indiquée par :",
  answers: [
    "A. Une adresse IP",
    "B. Un losange noir",
    "C. Une multiplicité 0..1",
    "D. Une notation en italique dans les conventions UML classiques",
  ],
  correct: 3,
},
{
  question: "Q85. Une méthode redéfinie dans une sous-classe correspond au concept de :",
  answers: [
    "A. Redéfinition (override)",
    "B. Compilation SQL",
    "C. Agrégation",
    "D. Déploiement",
  ],
  correct: 0,
},
{
  question: "Q86. Une association réflexive relie :",
  answers: [
    "A. Deux systèmes d'exploitation",
    "B. Une classe à elle-même",
    "C. Deux langages de programmation",
    "D. Un acteur à un serveur obligatoirement",
  ],
  correct: 1,
},
{
  question: "Q87. Une classe associée à une autre par une association plusieurs-à-plusieurs peut être représentée par une multiplicité :",
  answers: [
    "A. 1..1 des deux côtés obligatoirement",
    "B. 0..1 des deux côtés uniquement",
    "C. 0..* ou * aux deux extrémités",
    "D. 1..1 et 1..1 uniquement",
  ],
  correct: 2,
},
{
  question: "Q88. Dans un diagramme de classes, le nom d'une classe est généralement placé :",
  answers: [
    "A. Dans un cercle noir",
    "B. Sous le diagramme obligatoirement",
    "C. Dans un losange",
    "D. Dans le compartiment supérieur du rectangle de classe",
  ],
  correct: 3,
},
{
  question: "Q89. La notation `- solde : double` signifie généralement :",
  answers: [
    "A. Un attribut privé nommé solde de type double",
    "B. Une méthode publique nommée solde",
    "C. Une classe appelée double",
    "D. Un acteur nommé solde",
  ],
  correct: 0,
},
{
  question: "Q90. La notation `+ calculer() : int` indique généralement :",
  answers: [
    "A. Un attribut privé",
    "B. Une opération publique retournant un entier",
    "C. Une classe abstraite sans méthode",
    "D. Une relation de composition",
  ],
  correct: 1,
},
{
  question: "Q91. Une classe marquée `{abstract}` est :",
  answers: [
    "A. Une classe toujours instanciable directement",
    "B. Un package",
    "C. Une classe abstraite",
    "D. Un acteur",
  ],
  correct: 2,
},
{
  question: "Q92. La contrainte `{ordered}` indique généralement que :",
  answers: [
    "A. Les éléments sont tous privés",
    "B. La classe est abstraite",
    "C. L'objet doit être détruit immédiatement",
    "D. Les éléments associés sont ordonnés",
  ],
  correct: 3,
},
{
  question: "Q93. Dans un diagramme de cas d'utilisation, un acteur se trouve généralement :",
  answers: [
    "A. À l'extérieur de la frontière du système",
    "B. Obligatoirement à l'intérieur de chaque cas d'utilisation",
    "C. Dans le compartiment des attributs d'une classe",
    "D. Dans un losange noir",
  ],
  correct: 0,
},
{
  question: "Q94. Dans une relation <<include>>, la flèche en pointillés pointe généralement vers :",
  answers: [
    "A. Le cas d'utilisation qui inclut",
    "B. Le cas d'utilisation inclus",
    "C. L'acteur uniquement",
    "D. La frontière du système",
  ],
  correct: 1,
},
{
  question: "Q95. Dans une relation <<extend>>, la flèche en pointillés pointe généralement vers :",
  answers: [
    "A. Le cas d'utilisation d'extension uniquement",
    "B. L'acteur",
    "C. Le cas d'utilisation de base étendu",
    "D. Le serveur physique",
  ],
  correct: 2,
},
{
  question: "Q96. Pour représenter les fonctionnalités d'une application de gestion des étudiants, quel diagramme choisir ?",
  answers: [
    "A. Diagramme de déploiement",
    "B. Diagramme d'états",
    "C. Diagramme de composants uniquement",
    "D. Diagramme de cas d'utilisation",
  ],
  correct: 3,
},
{
  question: "Q97. Pour représenter les classes Étudiant, Formation et Inscription ainsi que leurs relations, quel diagramme choisir ?",
  answers: [
    "A. Diagramme de classes",
    "B. Diagramme d'activités",
    "C. Diagramme de déploiement",
    "D. Diagramme de séquence uniquement",
  ],
  correct: 0,
},
{
  question: "Q98. Pour représenter chronologiquement l'envoi d'une demande, sa validation et l'enregistrement en base de données, quel diagramme choisir ?",
  answers: [
    "A. Diagramme de packages",
    "B. Diagramme de séquence",
    "C. Diagramme de déploiement",
    "D. Diagramme de classes uniquement",
  ],
  correct: 1,
},
{
  question: "Q99. Pour représenter les étapes de traitement d'un dossier avec des conditions et des décisions, quel diagramme choisir ?",
  answers: [
    "A. Diagramme de composants",
    "B. Diagramme d'objets uniquement",
    "C. Diagramme d'activités",
    "D. Diagramme de déploiement",
  ],
  correct: 2,
},
{
  question: "Q100. Quelle affirmation concernant UML est correcte ?",
  answers: [
    "A. UML est un système d'exploitation",
    "B. UML est un langage exclusivement réservé à Java",
    "C. UML remplace tous les langages de programmation",
    "D. UML aide à analyser, concevoir et documenter un système",
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
