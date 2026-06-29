import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Users } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez AERO NDT, pure player du Contrôle Non Destructif pour la filière aéronautique.",
};

const values = [
  {
    icon: Target,
    title: "Spécialisation",
    description: "100% dédiés à la filière aéronautique et à la certification FrANDTB.",
  },
  {
    icon: Users,
    title: "Formation",
    description: "Nous formons de nouveaux collaborateurs pour répondre à la demande du marché.",
  },
  {
    icon: CheckCircle2,
    title: "Qualité",
    description: "Des contrôleurs expérimentés et rigoureux pour garantir l'excellence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-grid pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            À propos
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Pure player Aéronautique
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            AERO NDT a émergé en réponse à une demande pressante sur le marché des
            contrôleurs certifiés FrANDTB.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none space-y-6 text-slate-400 leading-relaxed">
              <p>
                Fondée avec l&apos;ambition de satisfaire les besoins en Contrôle Non
                Destructif (CND) de la filière aéronautique à des tarifs compétitifs,
                notre entreprise vise également à croître en formant de nouveaux
                collaborateurs.
              </p>
              <p>
                Notre équipe de contrôleurs certifiés intervient exclusivement dans le
                secteur aéronautique, garantissant une expertise pointue et une
                parfaite maîtrise des normes et procédures en vigueur.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8">
                <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
