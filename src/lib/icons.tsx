import {
  Award,
  BadgeCheck,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Cog,
  FileSearch,
  Handshake,
  HeartHandshake,
  LineChart,
  Plane,
  Puzzle,
  RefreshCw,
  Scale,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  UserCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const featureIcons = {
  expertise: ScanLine,
  economie: CircleDollarSign,
  flexibilite: SlidersHorizontal,
  disponibilite: CalendarCheck,
} as const satisfies Record<string, LucideIcon>;

export const valueIcons = {
  qualite: Award,
  service: HeartHandshake,
  adaptabilite: Puzzle,
  savoirEtre: UsersRound,
  ethique: Scale,
} as const satisfies Record<string, LucideIcon>;

export const prestationIcons = {
  niveau3: ShieldCheck,
  moyenCnd: Cog,
  audit: ClipboardCheck,
  analyse: LineChart,
} as const satisfies Record<string, LucideIcon>;

export const productionIcons = {
  analyse: ClipboardList,
  integration: UserCheck,
  execution: ScanLine,
  continuite: RefreshCw,
  flexibilite: SlidersHorizontal,
  economie: CircleDollarSign,
  qualite: Award,
  reactivite: Clock,
} as const satisfies Record<string, LucideIcon>;

export const expertiseIcons = {
  diagnostic: FileSearch,
  proposition: Handshake,
  deployment: ShieldCheck,
  suivi: LineChart,
  delegation: ShieldCheck,
  accompagnement: UsersRound,
  conformite: Scale,
  serenite: Award,
  performance: TrendingUp,
  certification: ClipboardCheck,
} as const satisfies Record<string, LucideIcon>;

export const aboutIcons = {
  en9100: Award,
  en4179: ShieldCheck,
  frandtb: BadgeCheck,
  aeronautique: Plane,
} as const satisfies Record<string, LucideIcon>;

export type FeatureIconKey = keyof typeof featureIcons;
export type ValueIconKey = keyof typeof valueIcons;
export type PrestationIconKey = keyof typeof prestationIcons;
export type ProductionIconKey = keyof typeof productionIcons;
export type ExpertiseIconKey = keyof typeof expertiseIcons;
export type AboutIconKey = keyof typeof aboutIcons;
