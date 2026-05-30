const projets = [
  {
    id: 1,
    titre: "Refonte du site web institutionnel",
    description: "Moderniser le site web principal de l'organisation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ville: "Montréal",
    dateDebut: "2026-01-15",
    dateFinPrevue: "2026-04-30",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "Analyser l'ancien site",
        description:
          "Identifier les pages importantes, les problèmes actuels et les besoins de refonte.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-01-25",
      },
      {
        id: 2,
        titre: "Créer la maquette de la page d'accueil",
        description:
          "Produire une maquette claire et responsive de la page principale.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-02-05",
      },
      {
        id: 3,
        titre: "Développer le menu de navigation",
        description:
          "Programmer un menu fonctionnel adapté aux ordinateurs et aux appareils mobiles.",
        priorite: "Moyenne",
        statut: "En cours",
        dateLimite: "2026-02-20",
      },
      {
        id: 4,
        titre: "Intégrer les pages de contenu",
        description:
          "Ajouter les pages principales avec textes, images et liens internes.",
        priorite: "Moyenne",
        statut: "�? faire",
        dateLimite: "2026-03-15",
      },
    ],
  },

  {
    id: 2,
    titre: "Application de réservation de salles",
    description:
      "Permettre aux employés de réserver des salles de réunion.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    ville: "Québec",
    dateDebut: "2026-02-01",
    dateFinPrevue: "2026-05-15",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "Créer le modèle de données des salles",
        description:
          "Définir les champs nécessaires pour représenter les salles disponibles.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-02-10",
      },
      {
        id: 2,
        titre: "Développer le calendrier de réservation",
        description:
          "Afficher les disponibilités et les réservations existantes.",
        priorite: "�?levée",
        statut: "En cours",
        dateLimite: "2026-03-01",
      },
      {
        id: 3,
        titre: "Ajouter la vérification des conflits",
        description:
          "Empêcher deux réservations pour la même salle au même moment.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-03-20",
      },
    ],
  },

  {
    id: 3,
    titre: "Système de suivi des bogues",
    description:
      "Créer un outil interne pour déclarer et suivre les bogues logiciels.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    ville: "Laval",
    dateDebut: "2026-01-20",
    dateFinPrevue: "2026-04-20",
    etat: "En préparation",
    taches: [
      {
        id: 1,
        titre: "Définir les types de bogues",
        description:
          "Identifier les catégories possibles comme interface, sécurité, performance ou données.",
        priorite: "Moyenne",
        statut: "Terminée",
        dateLimite: "2026-01-30",
      },
      {
        id: 2,
        titre: "Créer le formulaire de déclaration",
        description:
          "Permettre �  un utilisateur de décrire un problème rencontré.",
        priorite: "�?levée",
        statut: "En cours",
        dateLimite: "2026-02-15",
      },
      {
        id: 3,
        titre: "Ajouter les statuts de suivi",
        description:
          "Permettre de suivre les bogues selon leur avancement.",
        priorite: "Moyenne",
        statut: "�? faire",
        dateLimite: "2026-03-01",
      },
    ],
  },

  {
    id: 4,
    titre: "Portail étudiant",
    description:
      "Développer un portail permettant aux étudiants de consulter leurs informations.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    ville: "Sherbrooke",
    dateDebut: "2026-03-01",
    dateFinPrevue: "2026-06-15",
    etat: "En préparation",
    taches: [
      {
        id: 1,
        titre: "Créer la page de connexion",
        description:
          "Préparer une interface de connexion simple et sécurisée.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-03-10",
      },
      {
        id: 2,
        titre: "Afficher le profil étudiant",
        description:
          "Présenter les informations personnelles de l'étudiant connecté.",
        priorite: "Moyenne",
        statut: "�? faire",
        dateLimite: "2026-03-25",
      },
      {
        id: 3,
        titre: "Ajouter la consultation des notes",
        description:
          "Afficher les résultats scolaires de façon organisée.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-04-20",
      },
    ],
  },

  {
    id: 5,
    titre: "Gestionnaire de tâches personnelles",
    description:
      "Créer une application simple de gestion de tâches individuelles.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    ville: "Gatineau",
    dateDebut: "2026-01-10",
    dateFinPrevue: "2026-02-28",
    etat: "Terminé",
    taches: [
      {
        id: 1,
        titre: "Créer l'ajout de tâche",
        description:
          "Permettre �  l'utilisateur de créer une nouvelle tâche.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-01-15",
      },
      {
        id: 2,
        titre: "Permettre la modification",
        description:
          "Autoriser la modification du titre, de la priorité et du statut.",
        priorite: "Moyenne",
        statut: "Terminée",
        dateLimite: "2026-01-25",
      },
      {
        id: 3,
        titre: "Permettre la suppression",
        description:
          "Ajouter une action de suppression avec confirmation.",
        priorite: "Moyenne",
        statut: "Terminée",
        dateLimite: "2026-02-05",
      },
    ],
  },

  {
    id: 6,
    titre: "Plateforme de gestion d'événements",
    description:
      "Application pour organiser et gérer des événements.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    ville: "Trois-Rivières",
    dateDebut: "2026-02-10",
    dateFinPrevue: "2026-05-30",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "Créer les événements",
        description:
          "Permettre l'ajout d'un événement avec date, lieu et description.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-02-25",
      },
      {
        id: 2,
        titre: "Gérer les inscriptions",
        description:
          "Permettre aux participants de s'inscrire �  un événement.",
        priorite: "�?levée",
        statut: "En cours",
        dateLimite: "2026-03-20",
      },
      {
        id: 3,
        titre: "Afficher la liste des participants",
        description:
          "Afficher les personnes inscrites �  chaque événement.",
        priorite: "Moyenne",
        statut: "�? faire",
        dateLimite: "2026-04-10",
      },
    ],
  },

  {
    id: 7,
    titre: "Mini CRM pour PME",
    description:
      "Gérer les clients, contacts et opportunités commerciales.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    ville: "Longueuil",
    dateDebut: "2026-01-25",
    dateFinPrevue: "2026-06-01",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "Créer la fiche client",
        description:
          "Stocker les informations principales d'un client.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-02-10",
      },
      {
        id: 2,
        titre: "Ajouter les contacts associés",
        description:
          "Permettre plusieurs contacts pour une même entreprise.",
        priorite: "Moyenne",
        statut: "En cours",
        dateLimite: "2026-03-01",
      },
      {
        id: 3,
        titre: "Créer le pipeline d'opportunités",
        description:
          "Suivre les opportunités commerciales par étape.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-04-01",
      },
    ],
  },

  {
    id: 8,
    titre: "Application de gestion d'inventaire",
    description:
      "Suivre les produits, quantités et mouvements de stock.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    ville: "Saguenay",
    dateDebut: "2026-02-05",
    dateFinPrevue: "2026-05-20",
    etat: "En cours",
    taches: [
      {
        id: 1,
        titre: "Créer la table des produits",
        description:
          "Définir les champs nécessaires pour les produits.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-02-15",
      },
      {
        id: 2,
        titre: "Ajouter les entrées de stock",
        description:
          "Permettre d'ajouter des quantités �  l'inventaire.",
        priorite: "�?levée",
        statut: "En cours",
        dateLimite: "2026-03-05",
      },
      {
        id: 3,
        titre: "Ajouter les sorties de stock",
        description:
          "Retirer des quantités lorsqu'un produit est utilisé ou vendu.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-03-25",
      },
    ],
  },

  {
    id: 9,
    titre: "Blog collaboratif",
    description:
      "Permettre �  plusieurs auteurs de publier des articles.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    ville: "Drummondville",
    dateDebut: "2026-01-05",
    dateFinPrevue: "2026-03-30",
    etat: "Terminé",
    taches: [
      {
        id: 1,
        titre: "Créer les comptes auteurs",
        description:
          "Permettre aux auteurs de se connecter et de publier.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-01-15",
      },
      {
        id: 2,
        titre: "Créer l'éditeur d'article",
        description:
          "Créer un formulaire complet pour rédiger un article.",
        priorite: "�?levée",
        statut: "Terminée",
        dateLimite: "2026-02-01",
      },
      {
        id: 3,
        titre: "Ajouter les catégories",
        description:
          "Classer les articles selon différents sujets.",
        priorite: "Moyenne",
        statut: "Terminée",
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
    etat: "En préparation",
    taches: [
      {
        id: 1,
        titre: "Créer le formulaire de demande",
        description:
          "Permettre aux utilisateurs de décrire leur problème.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-03-15",
      },
      {
        id: 2,
        titre: "Attribuer une demande �  un technicien",
        description:
          "Permettre l'assignation d'un ticket �  une personne responsable.",
        priorite: "�?levée",
        statut: "�? faire",
        dateLimite: "2026-04-10",
      },
      {
        id: 3,
        titre: "Ajouter les priorités de tickets",
        description:
          "Classer les tickets selon leur urgence.",
        priorite: "Moyenne",
        statut: "�? faire",
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
  ville: "Lévis",
  dateDebut: "2026-02-18",
  dateFinPrevue: "2026-06-05",
  etat: "En préparation",
  taches: [
    {
      id: 1,
      titre: "Créer les profils conducteurs",
      description:
        "Permettre aux conducteurs d'ajouter leurs informations.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-03-01",
    },
    {
      id: 2,
      titre: "Publier un trajet",
      description:
        "Permettre la création d'un trajet avec ville de départ et arrivée.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-03-20",
    },
    {
      id: 3,
      titre: "Réserver une place",
      description:
        "Permettre aux passagers de réserver une place dans un trajet.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-04-15",
    },
  ],
},

{
  id: 12,
  titre: "Gestion d'une clinique",
  description:
    "Application permettant de gérer les patients et les rendez-vous.",
  image:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  ville: "Blainville",
  dateDebut: "2026-01-22",
  dateFinPrevue: "2026-05-25",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "Créer les fiches patients",
      description:
        "Ajouter les informations personnelles des patients.",
      priorite: "�?levée",
      statut: "Terminée",
      dateLimite: "2026-02-05",
    },
    {
      id: 2,
      titre: "Planifier les rendez-vous",
      description:
        "Permettre la réservation d'un rendez-vous médical.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-03-05",
    },
    {
      id: 3,
      titre: "Consulter l'historique patient",
      description:
        "Afficher les anciennes consultations d'un patient.",
      priorite: "Moyenne",
      statut: "�? faire",
      dateLimite: "2026-04-01",
    },
  ],
},

{
  id: 13,
  titre: "Application de suivi de budget",
  description:
    "Permettre aux utilisateurs de suivre leurs revenus et dépenses.",
  image:
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
  ville: "Chicoutimi",
  dateDebut: "2026-03-01",
  dateFinPrevue: "2026-05-20",
  etat: "En préparation",
  taches: [
    {
      id: 1,
      titre: "Créer les catégories de dépenses",
      description:
        "Définir différentes catégories financières.",
      priorite: "Moyenne",
      statut: "�? faire",
      dateLimite: "2026-03-12",
    },
    {
      id: 2,
      titre: "Ajouter une dépense",
      description:
        "Permettre l'ajout d'une nouvelle dépense.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-03-25",
    },
    {
      id: 3,
      titre: "Afficher le solde mensuel",
      description:
        "Calculer les revenus moins les dépenses.",
      priorite: "Moyenne",
      statut: "�? faire",
      dateLimite: "2026-05-05",
    },
  ],
},

{
  id: 14,
  titre: "Plateforme de petites annonces",
  description:
    "Créer un site permettant aux utilisateurs de publier des annonces.",
  image:
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  ville: "Sorel-Tracy",
  dateDebut: "2026-02-08",
  dateFinPrevue: "2026-06-12",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "Créer une annonce",
      description:
        "Permettre l'ajout d'une annonce avec image et prix.",
      priorite: "�?levée",
      statut: "Terminée",
      dateLimite: "2026-02-25",
    },
    {
      id: 2,
      titre: "Afficher les annonces",
      description:
        "Présenter les annonces dans une grille.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-03-20",
    },
    {
      id: 3,
      titre: "Filtrer par catégorie",
      description:
        "Permettre le filtrage des annonces.",
      priorite: "Moyenne",
      statut: "�? faire",
      dateLimite: "2026-04-15",
    },
  ],
},

{
  id: 15,
  titre: "Gestion d'un refuge animalier",
  description:
    "Application pour gérer les animaux et les adoptions.",
  image:
    "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
  ville: "Val-d'Or",
  dateDebut: "2026-01-28",
  dateFinPrevue: "2026-05-18",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "Créer les fiches animaux",
      description:
        "Ajouter les informations des animaux du refuge.",
      priorite: "�?levée",
      statut: "Terminée",
      dateLimite: "2026-02-12",
    },
    {
      id: 2,
      titre: "Afficher les animaux disponibles",
      description:
        "Lister les animaux disponibles �  l'adoption.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-03-10",
    },
    {
      id: 3,
      titre: "Créer une demande d'adoption",
      description:
        "Permettre �  un utilisateur de faire une demande.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-04-05",
    },
  ],
},

{
  id: 16,
  titre: "Application météo régionale",
  description:
    "Afficher les prévisions météo de différentes villes.",
  image:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
  ville: "Sept-Îles",
  dateDebut: "2026-02-10",
  dateFinPrevue: "2026-04-30",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "Ajouter les villes",
      description:
        "Créer une liste de villes consultables.",
      priorite: "Moyenne",
      statut: "Terminée",
      dateLimite: "2026-02-20",
    },
    {
      id: 2,
      titre: "Afficher les prévisions",
      description:
        "Afficher la météo des prochains jours.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-03-15",
    },
    {
      id: 3,
      titre: "Ajouter les icônes météo",
      description:
        "Afficher des icônes selon les conditions.",
      priorite: "Faible",
      statut: "�? faire",
      dateLimite: "2026-04-01",
    },
  ],
},

{
  id: 17,
  titre: "Gestion de tournoi sportif",
  description:
    "Créer et gérer des tournois avec équipes et matchs.",
  image:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  ville: "Laval",
  dateDebut: "2026-01-15",
  dateFinPrevue: "2026-05-01",
  etat: "En cours",
  taches: [
    {
      id: 1,
      titre: "Créer les équipes",
      description:
        "Ajouter les équipes participantes.",
      priorite: "�?levée",
      statut: "Terminée",
      dateLimite: "2026-01-30",
    },
    {
      id: 2,
      titre: "Créer le calendrier des matchs",
      description:
        "Programmer les rencontres.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-02-28",
    },
    {
      id: 3,
      titre: "Entrer les scores",
      description:
        "Permettre l'ajout des résultats.",
      priorite: "Moyenne",
      statut: "�? faire",
      dateLimite: "2026-03-20",
    },
  ],
},

{
  id: 18,
  titre: "Application de réservation d'hôtel",
  description:
    "Permettre la réservation de chambres en ligne.",
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  ville: "Mont-Tremblant",
  dateDebut: "2026-02-05",
  dateFinPrevue: "2026-06-10",
  etat: "En préparation",
  taches: [
    {
      id: 1,
      titre: "Créer les chambres",
      description:
        "Ajouter les chambres avec prix et capacité.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-02-25",
    },
    {
      id: 2,
      titre: "Créer les réservations",
      description:
        "Permettre de réserver une chambre.",
      priorite: "�?levée",
      statut: "�? faire",
      dateLimite: "2026-03-25",
    },
    {
      id: 3,
      titre: "Afficher les disponibilités",
      description:
        "Vérifier les chambres libres.",
      priorite: "�?levée",
      statut: "�? faire",
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
      titre: "Créer les abonnements",
      description:
        "Définir les différents forfaits.",
      priorite: "Moyenne",
      statut: "Terminée",
      dateLimite: "2026-01-30",
    },
    {
      id: 2,
      titre: "Ajouter les membres",
      description:
        "Créer les fiches membres.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-02-25",
    },
    {
      id: 3,
      titre: "Suivre les paiements",
      description:
        "Afficher les paiements effectués.",
      priorite: "Moyenne",
      statut: "�? faire",
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
      titre: "Créer les commandes",
      description:
        "Ajouter les commandes �  livrer.",
      priorite: "�?levée",
      statut: "Terminée",
      dateLimite: "2026-02-15",
    },
    {
      id: 2,
      titre: "Assigner un livreur",
      description:
        "Associer un livreur �  une commande.",
      priorite: "�?levée",
      statut: "En cours",
      dateLimite: "2026-03-10",
    },
    {
      id: 3,
      titre: "Suivre la livraison",
      description:
        "Afficher le statut en temps réel.",
      priorite: "Moyenne",
      statut: "�? faire",
      dateLimite: "2026-04-05",
    },
  ],
}  
];