export const siteConfig = {
  name: "AERO NDT",
  tagline: "La Qualité à Votre Service",
  description:
    "AERO NDT est une société de prestation en Contrôle Non Destructif intervenant exclusivement pour la filière Aéronautique suivant la certification FrANDTB",
  url: "https://aero-ndt.com",
  copyright: "© 2023 AERO NDT – Tous droits réservés",
};

export const images = {
  logo: "/images/logo.png",
  brandMark: "/images/brand-mark.png",
  favicon: "/images/favicon.png",
  aboutIllustration: "/images/about-illustration.png",
  aboutEn9100: "/images/about-en9100.png",
  serviceProductionHome: "/images/service-production.png",
  serviceExpertiseHome: "/images/service-expertise.png",
  serviceProductionPage: "/images/service-production-page.png",
  expertiseHero: "/images/expertise-hero.png",
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  {
    href: "/nos-services",
    label: "Nos services",
    children: [
      { href: "/nos-services", label: "Contrôle en production" },
      { href: "/missions-dexpertise-cnd", label: "Missions d'expertise CND" },
    ],
  },
  { href: "/rejoignez-nous", label: "Rejoignez-nous !" },
  { href: "/contacter-nous", label: "Contactez-nous" },
];

export const features = [
  {
    title: "Expertise",
    description: "Des contrôleurs formés et expérimentés.",
    icon: "expertise" as const,
  },
  {
    title: "Economie",
    description: "Gain sur vos coûts de recrutement, de formation, de turnover.",
    icon: "economie" as const,
  },
  {
    title: "Flexibilité",
    description: "Nous nous adaptons à vos besoins. ",
    icon: "flexibilite" as const,
  },
  {
    title: "Disponibilité",
    description: "Votre agenda est notre priorité.",
    icon: "disponibilite" as const,
  },
];

export const homeAbout = {
  title: "Pure player Aéronautique",
  paragraphs: [
    "AERO NDT a émergé en réponse à une demande pressante sur le marché des contrôleurs certifiés FrANDTB.",
  ],
  secondParagraph:
    "Fondée avec l'ambition de satisfaire les besoins en Contrôle Non Destructif ( CND ) de la filière aéronautique à des tarifs compétitifs, notre entreprise vise également à croître en formant de nouveaux collaborateurs.",
};

export const aboutPage = {
  certificationTitle: "Certifié EN9100",
  certificationText:
    "Nous nous engageons à ce que notre organisation réponde  aux exigences de la norme EN4179 et aux exigences spécifiques de la certification FrANDTB .",
};

export const values = [
  {
    title: "Qualité",
    description:
      "Nous nous conformerons aux normes du CND tout en tenant compte de vos exigences particulières pour répondre pleinement à vos besoins.",
    icon: "qualite" as const,
  },
  {
    title: "Service",
    description:
      "Répondre à vos besoins dans vos délais en proposant le dispositif le plus efficient et le plus économique.",
    icon: "service" as const,
  },
  {
    title: "Adaptabilité",
    description: "Vous évoluez dans vos besoins nous construirons la solution  avec vous.",
    icon: "adaptabilite" as const,
  },
  {
    title: "Savoir-être",
    description:
      "Nos collaborateurs sauront s'intégrer à votre environnement industriel en parfaite autonomie.",
    icon: "savoirEtre" as const,
  },
  {
    title: "Ethique",
    description:
      "Nous effectuerons les contrôles en toute impartialité, en respectant les réglementations et spécifications.",
    icon: "ethique" as const,
  },
];

export const servicesPreview = [
  {
    title: "Contrôle en production",
    description: "Mise à disposition de ressources sur votre ligne de contrôle.",
    image: images.serviceProductionHome,
    href: "/nos-services",
  },
  {
    title: "Missions d'expertise CND",
    description: "Nous réalisons des missions du niveau 3 du CND.",
    image: images.serviceExpertiseHome,
    href: "/missions-dexpertise-cnd",
  },
];

export const productionService = {
  title: "Contrôle en production",
  subtitle: "Nous contrôlons vos pièces",
  bannerDescription:
    "Mise à disposition de contrôleurs certifiés FrANDTB directement sur votre ligne de production aéronautique.",
  paragraphs: [
    "Le contrôle non destructif fait partie intégrante de vos processus de production afin d'assurer la  conformité et donc la qualité de votre production !",
    "Nos contrôleurs certifiés FrANDTB toute technique et méthode CND interviendront sur vos moyens, sous votre responsabilité, en réponse au besoin structurel ou conjoncturel de votre atelier.",
    "Vous bénéficierez ainsi d'une capacité de contrôle compétente, flexible et adaptable garantissant le respect de livraison des pièces à vos clients.",
  ],
  highlights: [
    "Contrôleurs certifiés FrANDTB, toutes techniques CND",
    "Intervention sur vos moyens, sous votre responsabilité",
    "Réponse aux besoins structurels et conjoncturels",
    "Capacité flexible pour respecter vos délais de livraison",
  ],
  techniquesTitle: "Techniques & méthodes CND",
  techniquesDescription:
    "Nos équipes maîtrisent l'ensemble des méthodes reconnues par la filière aéronautique, conformément à la norme EN4179.",
  techniques: [
    { code: "UT", name: "Ultrasons" },
    { code: "RT", name: "Radiographie" },
    { code: "PT", name: "Ressuage" },
    { code: "MT", name: "Magnétoscopie" },
    { code: "ET", name: "Courants de Foucault" },
  ],
  processTitle: "Notre approche",
  processDescription:
    "Un dispositif pensé pour s'intégrer à votre organisation industrielle, sans rupture dans votre flux de production.",
  process: [
    {
      title: "Analyse du besoin",
      description:
        "Compréhension de votre flux de production, de vos exigences qualité et de vos contraintes de délai.",
      icon: "analyse" as const,
    },
    {
      title: "Intégration atelier",
      description:
        "Mise à disposition de contrôleurs qualifiés, formés à votre environnement et à vos procédures.",
      icon: "integration" as const,
    },
    {
      title: "Exécution CND",
      description:
        "Réalisation des contrôles sur vos moyens, dans le respect de vos instructions et de la réglementation.",
      icon: "execution" as const,
    },
    {
      title: "Continuité & flexibilité",
      description:
        "Ajustement de la capacité selon votre charge atelier, pour garantir la continuité de vos livraisons.",
      icon: "continuite" as const,
    },
  ],
  benefitsTitle: "Ce que vous gagnez",
  benefits: [
    {
      title: "Flexibilité",
      description: "Adaptez la capacité de contrôle à la charge de votre atelier, sans contrainte RH.",
      icon: "flexibilite" as const,
    },
    {
      title: "Économie",
      description: "Réduisez vos coûts de recrutement, de formation et de turnover de contrôleurs.",
      icon: "economie" as const,
    },
    {
      title: "Qualité",
      description: "Conformité aux exigences EN4179 et certification FrANDTB, dans le respect de vos standards.",
      icon: "qualite" as const,
    },
    {
      title: "Réactivité",
      description: "Intervention rapide sur vos lignes pour répondre à vos pics d'activité et urgences clients.",
      icon: "reactivite" as const,
    },
  ],
};

export const expertiseService = {
  title: "Missions d'expertise CND",
  subtitle: "Nous vous proposons des missions variées d'expertise CND",
  intro:
    "Nous garantissons la conformité de l'environnement de contrôle à la réglementation et à vos exigences. L'offre AERO NDT s'adapte à votre organisation, sous forme de délégation ou d'accompagnement pour optimiser vos processus NDT.",
  prestationsTitle: "Nos prestations",
  prestations: [
    {
      title: "Niveau 3 Responsable",
      description: "Nous portons pour vous la responsabilité des activités réglementaires.",
      icon: "niveau3" as const,
    },
    {
      title: "Moyen CND",
      description:
        "Nous assumons pour vous la qualification de tout ou partie de vos processus et moyens CND.",
      icon: "moyenCnd" as const,
    },
    {
      title: "Audit",
      description:
        "Nous préparons pour vous l'audit de qualification client ou de certification PRI Nadcap.",
      icon: "audit" as const,
    },
    {
      title: "Analyse",
      description:
        "Nous analysons et préconisons pour vous des optimisations de vos processus CND.",
      icon: "analyse" as const,
    },
  ],
};

export const careers = {
  title: "Nos offres d'emplois",
  subtitle: "Nous recherchons des profils UT RT PT MT ET EN4179 Frandtb",
};

export const contactPage = {
  introTitle: "Vos projets, vos besoins, notre expertise !",
  formTitle: "Contactez-nous",
  formDescription:
    "Remplissez ce formulaire pour nous faire part de vos besoins spécifiques. L'un de nos experts vous contactera rapidement afin de trouver la meilleure solution personnalisée pour vous.",
  address: "44000 Nantes",
  contacts: [
    {
      phone: "+33 (0) 6 08 74 32 08",
      email: "icretel@aero-ndt.com",
    },
    {
      phone: "+33 (6) 75 41 13 30",
      email: "dberthou@aero-ndt.com",
    },
  ],
  formFields: {
    name: "Nom",
    phone: "Numéro de téléphone",
    email: "E-mail",
    company: "Société",
    subject: "Sujet",
    file: "Téléverser un fichier",
    message: "Question",
    submit: "Soumettre",
  },
};

export const legalPage = {
  sections: [
    {
      title: "Éditeur",
      paragraphs: [
        "www.aero-ndt.com est un site officiel de AERO NDT",
        "AERO NDT",
        "Numéro de SIREN : 980 048 821",
        "Adresse : AERO NDT, 17 Boulevard de Berlin, 44000 Nantes",
        "esarfati@aero-ndt.com",
      ],
    },
    {
      title: "Directeur de la publication",
      paragraphs: ["SARFATI Eric"],
    },
    {
      title: "Hébergement",
      paragraphs: [
        "OVH, SAS au capital de 10 069 020 €",
        "RCS Lille Métropole 424 761 419 00045",
        "Code APE 2620Z",
        "N° TVA : FR 22 424 761 419",
        "Siège social : 2 rue Kellermann – 59100 Roubaix – France.",
      ],
    },
    {
      title: "Liens hypertexte",
      paragraphs: [
        "AERO NDT ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l'utilisation de ces sites incombent pleinement à l'utilisateur. Il se conformera à leurs conditions d'utilisation.",
      ],
    },
    {
      title: "Droit d'auteur et plagiat",
      paragraphs: [
        "Le site aero-ndt.com, son contenu intégral (textes, visuels, photos…) est protégé par les droits d'auteurs.",
      ],
    },
    {
      title: "Politique de confidentialité",
      paragraphs: [
        "Les données à caractère personnel collectées font l'objet d'un traitement dont le responsable est AERO NDT.",
        "Ces données sont exclusivement destinées à AERO NDT et nécessaires au traitement de votre demande. Elles ne sont en aucun cas transmises à des tiers.",
        "Elles sont conservées pendant 1 an à compter de la réception de la demande ou tout au long de la durée du contrat à compter de sa date de signature par le client.",
        "Conformément à la loi 78.17 relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification, d'opposition, de limitation du traitement, d'effacement et de portabilité de vos données que vous pouvez exercer par courrier à l'adresse AERO NDT, 70 rue de la Monesse, 92310 Sèvres, en précisant vos nom, prénom, adresse ou email, et en joignant une photocopie recto/verso de votre pièce d'identité.",
        "En cas de difficulté en lien avec la gestion de vos données personnelles, vous pouvez adresser une réclamation auprès de la CNIL. 78.17 relative à l'informatique, aux fichiers et aux libertés.",
        "AERO NDT pourra procéder à des analyses statistiques sans que celles-ci soient nominatives et pourra en informer des tiers (organismes d'évaluation de fréquentation) sous une forme résumée et non nominative.",
      ],
    },
    {
      title: "Crédits",
      paragraphs: [
        "Conception et production :",
        "Le site AERO NDT a été créé à l'aide du logiciel wordpress.",
      ],
    },
  ],
};
