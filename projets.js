const projets = [
  {
    id: 1,
    titre: "Refonte du site web institutionnel",
    description: "Moderniser le site web principal de l'organisation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ville: "MontrÃ©al",
    dateDebut: "2026-01-15",
    dateFinPrevue: "2026-04-30",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "Analyser l'ancien site",
        description:
          "Identifier les pages importantes, les problÃ¨mes actuels et les besoins de refonte.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-01-25",
      },
      {
        id: 2,
        titre: "CrÃ©er la maquette de la page d'accueil",
        description:
          "Produire une maquette claire et responsive de la page principale.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-05",
      },
      {
        id: 3,
        titre: "DÃ©velopper le menu de navigation",
        description:
          "Programmer un menu fonctionnel adaptÃ© aux ordinateurs et aux appareils mobiles.",
        priorite: "Moyenne",
        statut: "En cours",
        dateLimite: "2026-02-20",
      },
      {
        id: 4,
        titre: "IntÃ©grer les pages de contenu",
        description:
          "Ajouter les pages principales avec textes, images et liens internes.",
        priorite: "Moyenne",
        statut: "Ã€ faire",
        dateLimite: "2026-03-15",
      },
    ],
  },

  {
    id: 2,
    titre: "Application de rÃ©servation de salles",
    description:
      "Permettre aux employÃ©s de rÃ©server des salles de rÃ©union.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    ville: "QuÃ©bec",
    dateDebut: "2026-02-01",
    dateFinPrevue: "2026-05-15",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er le modÃ¨le de donnÃ©es des salles",
        description:
          "DÃ©finir les champs nÃ©cessaires pour reprÃ©senter les salles disponibles.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-10",
      },
      {
        id: 2,
        titre: "DÃ©velopper le calendrier de rÃ©servation",
        description:
          "Afficher les disponibilitÃ©s et les rÃ©servations existantes.",
        priorite: "Ã‰levÃ©e",
        statut: "En cours",
        dateLimite: "2026-03-01",
      },
      {
        id: 3,
        titre: "Ajouter la vÃ©rification des conflits",
        description:
          "EmpÃªcher deux rÃ©servations pour la mÃªme salle au mÃªme moment.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-03-20",
      },
    ],
  },

  {
    id: 3,
    titre: "SystÃ¨me de suivi des bogues",
    description:
      "CrÃ©er un outil interne pour dÃ©clarer et suivre les bogues logiciels.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    ville: "Laval",
    dateDebut: "2026-01-20",
    dateFinPrevue: "2026-04-20",
    etat: "En prÃ©paration",
    taches: [
      {
        id: 1,
        titre: "DÃ©finir les types de bogues",
        description:
          "Identifier les catÃ©gories possibles comme interface, sÃ©curitÃ©, performance ou donnÃ©es.",
        priorite: "Moyenne",
        statut: "TerminÃ©e",
        dateLimite: "2026-01-30",
      },
      {
        id: 2,
        titre: "CrÃ©er le formulaire de dÃ©claration",
        description:
          "Permettre Ã  un utilisateur de dÃ©crire un problÃ¨me rencontrÃ©.",
        priorite: "Ã‰levÃ©e",
        statut: "En cours",
        dateLimite: "2026-02-15",
      },
      {
        id: 3,
        titre: "Ajouter les statuts de suivi",
        description:
          "Permettre de suivre les bogues selon leur avancement.",
        priorite: "Moyenne",
        statut: "Ã€ faire",
        dateLimite: "2026-03-01",
      },
    ],
  },

  {
    id: 4,
    titre: "Portail Ã©tudiant",
    description:
      "DÃ©velopper un portail permettant aux Ã©tudiants de consulter leurs informations.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    ville: "Sherbrooke",
    dateDebut: "2026-03-01",
    dateFinPrevue: "2026-06-15",
    etat: "En prÃ©paration",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er la page de connexion",
        description:
          "PrÃ©parer une interface de connexion simple et sÃ©curisÃ©e.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-03-10",
      },
      {
        id: 2,
        titre: "Afficher le profil Ã©tudiant",
        description:
          "PrÃ©senter les informations personnelles de l'Ã©tudiant connectÃ©.",
        priorite: "Moyenne",
        statut: "Ã€ faire",
        dateLimite: "2026-03-25",
      },
      {
        id: 3,
        titre: "Ajouter la consultation des notes",
        description:
          "Afficher les rÃ©sultats scolaires de faÃ§on organisÃ©e.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-04-20",
      },
    ],
  },

  {
    id: 5,
    titre: "Gestionnaire de tÃ¢ches personnelles",
    description:
      "CrÃ©er une application simple de gestion de tÃ¢ches individuelles.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    ville: "Gatineau",
    dateDebut: "2026-01-10",
    dateFinPrevue: "2026-02-28",
    etat: "TerminÃ©",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er l'ajout de tÃ¢che",
        description:
          "Permettre Ã  l'utilisateur de crÃ©er une nouvelle tÃ¢che.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-01-15",
      },
      {
        id: 2,
        titre: "Permettre la modification",
        description:
          "Autoriser la modification du titre, de la prioritÃ© et du statut.",
        priorite: "Moyenne",
        statut: "TerminÃ©e",
        dateLimite: "2026-01-25",
      },
      {
        id: 3,
        titre: "Permettre la suppression",
        description:
          "Ajouter une action de suppression avec confirmation.",
        priorite: "Moyenne",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-05",
      },
    ],
  },

  {
    id: 6,
    titre: "Plateforme de gestion d'Ã©vÃ©nements",
    description:
      "Application pour organiser et gÃ©rer des Ã©vÃ©nements.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    ville: "Trois-RiviÃ¨res",
    dateDebut: "2026-02-10",
    dateFinPrevue: "2026-05-30",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er les Ã©vÃ©nements",
        description:
          "Permettre l'ajout d'un Ã©vÃ©nement avec date, lieu et description.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-25",
      },
      {
        id: 2,
        titre: "GÃ©rer les inscriptions",
        description:
          "Permettre aux participants de s'inscrire Ã  un Ã©vÃ©nement.",
        priorite: "Ã‰levÃ©e",
        statut: "En cours",
        dateLimite: "2026-03-20",
      },
      {
        id: 3,
        titre: "Afficher la liste des participants",
        description:
          "Afficher les personnes inscrites Ã  chaque Ã©vÃ©nement.",
        priorite: "Moyenne",
        statut: "Ã€ faire",
        dateLimite: "2026-04-10",
      },
    ],
  },

  {
    id: 7,
    titre: "Mini CRM pour PME",
    description:
      "GÃ©rer les clients, contacts et opportunitÃ©s commerciales.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    ville: "Longueuil",
    dateDebut: "2026-01-25",
    dateFinPrevue: "2026-06-01",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er la fiche client",
        description:
          "Stocker les informations principales d'un client.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-10",
      },
      {
        id: 2,
        titre: "Ajouter les contacts associÃ©s",
        description:
          "Permettre plusieurs contacts pour une mÃªme entreprise.",
        priorite: "Moyenne",
        statut: "En cours",
        dateLimite: "2026-03-01",
      },
      {
        id: 3,
        titre: "CrÃ©er le pipeline d'opportunitÃ©s",
        description:
          "Suivre les opportunitÃ©s commerciales par Ã©tape.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-04-01",
      },
    ],
  },

  {
    id: 8,
    titre: "Application de gestion d'inventaire",
    description:
      "Suivre les produits, quantitÃ©s et mouvements de stock.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    ville: "Saguenay",
    dateDebut: "2026-02-05",
    dateFinPrevue: "2026-05-20",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er la table des produits",
        description:
          "DÃ©finir les champs nÃ©cessaires pour les produits.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-15",
      },
      {
        id: 2,
        titre: "Ajouter les entrÃ©es de stock",
        description:
          "Permettre d'ajouter des quantitÃ©s Ã  l'inventaire.",
        priorite: "Ã‰levÃ©e",
        statut: "En cours",
        dateLimite: "2026-03-05",
      },
      {
        id: 3,
        titre: "Ajouter les sorties de stock",
        description:
          "Retirer des quantitÃ©s lorsqu'un produit est utilisÃ© ou vendu.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-03-25",
      },
    ],
  },

  {
    id: 9,
    titre: "Blog collaboratif",
    description:
      "Permettre Ã  plusieurs auteurs de publier des articles.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    ville: "Drummondville",
    dateDebut: "2026-01-05",
    dateFinPrevue: "2026-03-30",
    etat: "TerminÃ©",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er les comptes auteurs",
        description:
          "Permettre aux auteurs de se connecter et de publier.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-01-15",
      },
      {
        id: 2,
        titre: "CrÃ©er l'Ã©diteur d'article",
        description:
          "CrÃ©er un formulaire complet pour rÃ©diger un article.",
        priorite: "Ã‰levÃ©e",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-01",
      },
      {
        id: 3,
        titre: "Ajouter les catÃ©gories",
        description:
          "Classer les articles selon diffÃ©rents sujets.",
        priorite: "Moyenne",
        statut: "TerminÃ©e",
        dateLimite: "2026-02-15",
      },
    ],
  },

  {
    id: 10,
    titre: "Gestion des demandes de support",
    description:
      "Outil permettant aux utilisateurs de soumettre des demandes d'aide.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    ville: "Rimouski",
    dateDebut: "2026-03-01",
    dateFinPrevue: "2026-06-30",
    etat: "En prÃ©paration",
    taches: [
      {
        id: 1,
        titre: "CrÃ©er le formulaire de demande",
        description:
          "Permettre aux utilisateurs de dÃ©crire leur problÃ¨me.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-03-15",
      },
      {
        id: 2,
        titre: "Attribuer une demande Ã  un technicien",
        description:
          "Permettre l'assignation d'un ticket Ã  une personne responsable.",
        priorite: "Ã‰levÃ©e",
        statut: "Ã€ faire",
        dateLimite: "2026-04-10",
      },
      {
        id: 3,
        titre: "Ajouter les prioritÃ©s de tickets",
        description:
          "Classer les tickets selon leur urgence.",
        priorite: "Moyenne",
        statut: "Ã€ faire",
        dateLimite: "2026-04-25",
      },
    ],
  },
{
  id: 11,
  titre: "Application de covoiturage local",
  description:
    "Mettre en relation des conducteurs et des passagers pour des trajets locaux.",
  image:
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
  ville: "LÃ©vis",
  dateDebut: "2026-02-18",
  dateFinPrevue: "2026-06-05",
  etat: "En prÃ©paration",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les profils conducteurs",
      description:
        "Permettre aux conducteurs d'ajouter leurs informations.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-03-01",
    },
    {
      id: 2,
      titre: "Publier un trajet",
      description:
        "Permettre la crÃ©ation d'un trajet avec ville de dÃ©part et arrivÃ©e.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-03-20",
    },
    {
      id: 3,
      titre: "RÃ©server une place",
      description:
        "Permettre aux passagers de rÃ©server une place dans un trajet.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-04-15",
    },
  ],
},

{
  id: 12,
  titre: "Gestion d'une clinique",
  description:
    "Application permettant de gÃ©rer les patients et les rendez-vous.",
  image:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  ville: "Blainville",
  dateDebut: "2026-01-22",
  dateFinPrevue: "2026-05-25",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les fiches patients",
      description:
        "Ajouter les informations personnelles des patients.",
      priorite: "Ã‰levÃ©e",
      statut: "TerminÃ©e",
      dateLimite: "2026-02-05",
    },
    {
      id: 2,
      titre: "Planifier les rendez-vous",
      description:
        "Permettre la rÃ©servation d'un rendez-vous mÃ©dical.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-03-05",
    },
    {
      id: 3,
      titre: "Consulter l'historique patient",
      description:
        "Afficher les anciennes consultations d'un patient.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-04-01",
    },
  ],
},

{
  id: 13,
  titre: "Application de suivi de budget",
  description:
    "Permettre aux utilisateurs de suivre leurs revenus et dÃ©penses.",
  image:
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
  ville: "Chicoutimi",
  dateDebut: "2026-03-01",
  dateFinPrevue: "2026-05-20",
  etat: "En prÃ©paration",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les catÃ©gories de dÃ©penses",
      description:
        "DÃ©finir diffÃ©rentes catÃ©gories financiÃ¨res.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-03-12",
    },
    {
      id: 2,
      titre: "Ajouter une dÃ©pense",
      description:
        "Permettre l'ajout d'une nouvelle dÃ©pense.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-03-25",
    },
    {
      id: 3,
      titre: "Afficher le solde mensuel",
      description:
        "Calculer les revenus moins les dÃ©penses.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-05-05",
    },
  ],
},

{
  id: 14,
  titre: "Plateforme de petites annonces",
  description:
    "CrÃ©er un site permettant aux utilisateurs de publier des annonces.",
  image:
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  ville: "Sorel-Tracy",
  dateDebut: "2026-02-08",
  dateFinPrevue: "2026-06-12",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er une annonce",
      description:
        "Permettre l'ajout d'une annonce avec image et prix.",
      priorite: "Ã‰levÃ©e",
      statut: "TerminÃ©e",
      dateLimite: "2026-02-25",
    },
    {
      id: 2,
      titre: "Afficher les annonces",
      description:
        "PrÃ©senter les annonces dans une grille.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-03-20",
    },
    {
      id: 3,
      titre: "Filtrer par catÃ©gorie",
      description:
        "Permettre le filtrage des annonces.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-04-15",
    },
  ],
},

{
  id: 15,
  titre: "Gestion d'un refuge animalier",
  description:
    "Application pour gÃ©rer les animaux et les adoptions.",
  image:
    "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
  ville: "Val-d'Or",
  dateDebut: "2026-01-28",
  dateFinPrevue: "2026-05-18",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les fiches animaux",
      description:
        "Ajouter les informations des animaux du refuge.",
      priorite: "Ã‰levÃ©e",
      statut: "TerminÃ©e",
      dateLimite: "2026-02-12",
    },
    {
      id: 2,
      titre: "Afficher les animaux disponibles",
      description:
        "Lister les animaux disponibles Ã  l'adoption.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-03-10",
    },
    {
      id: 3,
      titre: "CrÃ©er une demande d'adoption",
      description:
        "Permettre Ã  un utilisateur de faire une demande.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-04-05",
    },
  ],
},

{
  id: 16,
  titre: "Application mÃ©tÃ©o rÃ©gionale",
  description:
    "Afficher les prÃ©visions mÃ©tÃ©o de diffÃ©rentes villes.",
  image:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
  ville: "Sept-ÃŽles",
  dateDebut: "2026-02-10",
  dateFinPrevue: "2026-04-30",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "Ajouter les villes",
      description:
        "CrÃ©er une liste de villes consultables.",
      priorite: "Moyenne",
      statut: "TerminÃ©e",
      dateLimite: "2026-02-20",
    },
    {
      id: 2,
      titre: "Afficher les prÃ©visions",
      description:
        "Afficher la mÃ©tÃ©o des prochains jours.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-03-15",
    },
    {
      id: 3,
      titre: "Ajouter les icÃ´nes mÃ©tÃ©o",
      description:
        "Afficher des icÃ´nes selon les conditions.",
      priorite: "Faible",
      statut: "Ã€ faire",
      dateLimite: "2026-04-01",
    },
  ],
},

{
  id: 17,
  titre: "Gestion de tournoi sportif",
  description:
    "CrÃ©er et gÃ©rer des tournois avec Ã©quipes et matchs.",
  image:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  ville: "Laval",
  dateDebut: "2026-01-15",
  dateFinPrevue: "2026-05-01",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les Ã©quipes",
      description:
        "Ajouter les Ã©quipes participantes.",
      priorite: "Ã‰levÃ©e",
      statut: "TerminÃ©e",
      dateLimite: "2026-01-30",
    },
    {
      id: 2,
      titre: "CrÃ©er le calendrier des matchs",
      description:
        "Programmer les rencontres.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-02-28",
    },
    {
      id: 3,
      titre: "Entrer les scores",
      description:
        "Permettre l'ajout des rÃ©sultats.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-03-20",
    },
  ],
},

{
  id: 18,
  titre: "Application de rÃ©servation d'hÃ´tel",
  description:
    "Permettre la rÃ©servation de chambres en ligne.",
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  ville: "Mont-Tremblant",
  dateDebut: "2026-02-05",
  dateFinPrevue: "2026-06-10",
  etat: "En prÃ©paration",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les chambres",
      description:
        "Ajouter les chambres avec prix et capacitÃ©.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-02-25",
    },
    {
      id: 2,
      titre: "CrÃ©er les rÃ©servations",
      description:
        "Permettre de rÃ©server une chambre.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-03-25",
    },
    {
      id: 3,
      titre: "Afficher les disponibilitÃ©s",
      description:
        "VÃ©rifier les chambres libres.",
      priorite: "Ã‰levÃ©e",
      statut: "Ã€ faire",
      dateLimite: "2026-04-20",
    },
  ],
},

{
  id: 19,
  titre: "Gestion d'une salle de sport",
  description:
    "Suivre les abonnements et les membres.",
  image:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  ville: "Boucherville",
  dateDebut: "2026-01-18",
  dateFinPrevue: "2026-05-22",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les abonnements",
      description:
        "DÃ©finir les diffÃ©rents forfaits.",
      priorite: "Moyenne",
      statut: "TerminÃ©e",
      dateLimite: "2026-01-30",
    },
    {
      id: 2,
      titre: "Ajouter les membres",
      description:
        "CrÃ©er les fiches membres.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-02-25",
    },
    {
      id: 3,
      titre: "Suivre les paiements",
      description:
        "Afficher les paiements effectuÃ©s.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-03-30",
    },
  ],
},

{
  id: 20,
  titre: "Application de livraison",
  description:
    "Suivre les livraisons et les livreurs.",
  image:
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  ville: "Saint-Eustache",
  dateDebut: "2026-02-01",
  dateFinPrevue: "2026-06-01",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "CrÃ©er les commandes",
      description:
        "Ajouter les commandes Ã  livrer.",
      priorite: "Ã‰levÃ©e",
      statut: "TerminÃ©e",
      dateLimite: "2026-02-15",
    },
    {
      id: 2,
      titre: "Assigner un livreur",
      description:
        "Associer un livreur Ã  une commande.",
      priorite: "Ã‰levÃ©e",
      statut: "En cours",
      dateLimite: "2026-03-10",
    },
    {
      id: 3,
      titre: "Suivre la livraison",
      description:
        "Afficher le statut en temps rÃ©el.",
      priorite: "Moyenne",
      statut: "Ã€ faire",
      dateLimite: "2026-04-05",
    },
  ],
}  
];