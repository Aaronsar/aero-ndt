export const siteConfig = {
  name: "AERO NDT",
  tagline: "La Qualité à Votre Service",
  description:
    "Société de prestation en Contrôle Non Destructif intervenant exclusivement pour la filière Aéronautique, certification FrANDTB.",
  url: "https://aero-ndt.com",
  email: "contact@aero-ndt.com",
  phone: "+33 1 23 45 67 89",
  address: "France",
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  {
    href: "/services",
    label: "Nos services",
    children: [
      { href: "/services/controle-production", label: "Contrôle en production" },
      { href: "/services/expertise-cnd", label: "Missions d'expertise CND" },
    ],
  },
  { href: "/rejoignez-nous", label: "Rejoignez-nous" },
  { href: "/contact", label: "Contact" },
];

export const features = [
  {
    title: "Expertise",
    description: "Des contrôleurs formés et expérimentés.",
    icon: "Award",
  },
  {
    title: "Économie",
    description: "Gain sur vos coûts de recrutement, de formation et de turnover.",
    icon: "TrendingDown",
  },
  {
    title: "Flexibilité",
    description: "Nous nous adaptons à vos besoins.",
    icon: "Shuffle",
  },
  {
    title: "Disponibilité",
    description: "Votre agenda est notre priorité.",
    icon: "Clock",
  },
];

export const services = [
  {
    slug: "controle-production",
    title: "Contrôle en production",
    description: "Mise à disposition de ressources sur votre ligne de contrôle.",
    longDescription:
      "Nous intégrons des contrôleurs certifiés FrANDTB directement sur vos lignes de production pour garantir la continuité et la qualité de vos opérations CND.",
    href: "/services/controle-production",
  },
  {
    slug: "expertise-cnd",
    title: "Missions d'expertise CND",
    description: "Nous réalisons des missions du niveau 3 du CND.",
    longDescription:
      "Nos experts niveau 3 interviennent pour la qualification de procédures, l'audit de vos processus CND et le support technique avancé.",
    href: "/services/expertise-cnd",
  },
];
