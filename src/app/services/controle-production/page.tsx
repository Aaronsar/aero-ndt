import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Settings } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Contrôle en production",
  description: "Mise à disposition de ressources CND certifiées sur votre ligne de contrôle.",
};

const benefits = [
  "Contrôleurs certifiés FrANDTB",
  "Intégration rapide sur vos lignes",
  "Flexibilité des plannings",
  "Réduction des coûts de recrutement",
  "Continuité opérationnelle garantie",
];

export default function ControleProductionPage() {
  return (
    <>
      <section className="hero-grid pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux services
          </Link>
          <div className="mt-6 inline-flex rounded-2xl bg-sky-500/10 p-4 text-sky-400">
            <Settings className="h-10 w-10" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Contrôle en production
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Mise à disposition de ressources sur votre ligne de contrôle.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-white">Notre approche</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Nous intégrons des contrôleurs certifiés FrANDTB directement sur vos
                lignes de production. Cette prestation vous permet de renforcer vos
                équipes sans les contraintes du recrutement et de la formation, tout
                en maintenant un niveau d&apos;exigence conforme aux standards
                aéronautiques.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-white">Avantages</h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
