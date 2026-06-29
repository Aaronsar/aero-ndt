import {
  Award,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  Cog,
  HeartHandshake,
  LineChart,
  Puzzle,
  Scale,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
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

export type FeatureIconKey = keyof typeof featureIcons;
export type ValueIconKey = keyof typeof valueIcons;
export type PrestationIconKey = keyof typeof prestationIcons;
