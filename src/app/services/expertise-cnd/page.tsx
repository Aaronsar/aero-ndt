import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Microscope } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Missions d'expertise CND",
  description: "Missions de niveau 3 en Contrôle Non Destructif pour la filière aéronautique.",
};

const benefits = [
  "Qualification de procédures CND",
  "Audit et revue de processus",
  "Support technique niveau 3",
  "Conformité normes aéronautiques",
  "Accompagnement sur mesure",
];

export default function ExpertiseCndPage() {
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
            <Microscope className="h-10 w-10" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Missions d&apos;expertise CND
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Nous réalisons des missions du niveau 3 du CND.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-white">Notre expertise</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Nos experts niveau 3 interviennent pour la qualification de
                procédures, l&apos;audit de vos processus CND et le support technique
                avancé. Nous accompagnons les industriels aéronautiques dans la
                conformité et l&apos;optimisation de leurs opérations de contrôle non
                destructif.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-white">Prestations</h2>
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
