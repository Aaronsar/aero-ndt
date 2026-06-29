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
  icons: {
    expertise: "/images/icon-expertise.png",
    economie: "/images/icon-economie.png",
    flexibilite: "/images/icon-flexibilite.png",
    disponibilite: "/images/icon-disponibilite.png",
  },
  values: {
    qualite: "/images/value-qualite.png",
    service: "/images/value-service.png",
    adaptabilite: "/images/value-adaptabilite.png",
    savoirEtre: "/images/value-savoir-etre.png",
    ethique: "/images/value-ethique.png",
  },
  prestations: {
    niveau3: "/images/prestation-niveau3.png",
    moyenCnd: "/images/prestation-moyen-cnd.png",
    audit: "/images/prestation-audit.png",
    analyse: "/images/prestation-analyse.png",
  },
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
    icon: images.icons.expertise,
  },
  {
    title: "Economie",
    description: "Gain sur vos coûts de recrutement, de formation, de turnover.",
    icon: images.icons.economie,
  },
  {
    title: "Flexibilité",
    description: "Nous nous adaptons à vos besoins. ",
    icon: images.icons.flexibilite,
  },
  {
    title: "Disponibilité",
    description: "Votre agenda est notre priorité.",
    icon: images.icons.disponibilite,
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
    image: images.values.qualite,
  },
  {
    title: "Service",
    description:
      "Répondre à vos besoins dans vos délais en proposant le dispositif le plus efficient et le plus économique.",
    image: images.values.service,
  },
  {
    title: "Adaptabilité",
    description: "Vous évoluez dans vos besoins nous construirons la solution  avec vous.",
    image: images.values.adaptabilite,
  },
  {
    title: "Savoir-être",
    description:
      "Nos collaborateurs sauront s'intégrer à votre environnement industriel en parfaite autonomie.",
    image: images.values.savoirEtre,
  },
  {
    title: "Ethique",
    description:
      "Nous effectuerons les contrôles en toute impartialité, en respectant les réglementations et spécifications.",
    image: images.values.ethique,
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
  paragraphs: [
    "Le contrôle non destructif fait partie intégrante de vos processus de production afin d'assurer la  conformité et donc la qualité de votre production !",
    "Nos contrôleurs certifiés FrANDTB toute technique et méthode CND interviendront sur vos moyens, sous votre responsabilité, en réponse au besoin structurel ou conjoncturel de votre atelier.",
    "Vous bénéficierez ainsi d'une capacité de contrôle compétente, flexible et adaptable garantissant le respect de livraison des pièces à vos clients.",
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
      image: images.prestations.niveau3,
    },
    {
      title: "Moyen CND",
      description:
        "Nous assumons pour vous la qualification de tout ou partie de vos processus et moyens CND.",
      image: images.prestations.moyenCnd,
    },
    {
      title: "Audit",
      description:
        "Nous préparons pour vous l'audit de qualification client ou de certification PRI Nadcap.",
      image: images.prestations.audit,
    },
    {
      title: "Analyse",
      description:
        "Nous analysons et préconisons pour vous des optimisations de vos processus CND.",
      image: images.prestations.analyse,
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
