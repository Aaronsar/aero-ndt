import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Heart, Rocket } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Rejoignez-nous",
  description: "Rejoignez l'équipe AERO NDT et développez votre carrière en CND aéronautique.",
};

const perks = [
  {
    icon: GraduationCap,
    title: "Formation continue",
    description: "Développez vos compétences en CND avec des parcours certifiants FrANDTB.",
  },
  {
    icon: Rocket,
    title: "Évolution de carrière",
    description: "Rejoignez une entreprise en croissance dans un secteur exigeant.",
  },
  {
    icon: Heart,
    title: "Environnement stimulant",
    description: "Travaillez au cœur de la filière aéronautique avec des experts passionnés.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="hero-grid pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Carrières
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Rejoignez-nous !
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            AERO NDT forme et recrute des contrôleurs CND pour répondre aux besoins
            croissants de la filière aéronautique.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="glass rounded-2xl p-8">
                <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400">
                  <perk.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{perk.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{perk.description}</p>
              </div>
            ))}
          </div>

          <div className="glass mt-12 rounded-3xl p-8 text-center lg:p-12">
            <h2 className="text-2xl font-bold text-white">Candidature spontanée</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Vous êtes contrôleur CND ou souhaitez vous former dans le domaine ?
              Envoyez-nous votre candidature.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:from-sky-400 hover:to-blue-500"
            >
              Postuler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
