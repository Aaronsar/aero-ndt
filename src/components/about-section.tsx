import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="glass aspect-[4/3] overflow-hidden rounded-3xl">
              <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 p-12">
                <div className="animate-float">
                  <Plane className="h-24 w-24 -rotate-45 text-sky-500/40" />
                </div>
                <p className="mt-6 text-center text-sm uppercase tracking-[0.3em] text-sky-400/60">
                  Pure player Aéronautique
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-sky-500/10 blur-2xl" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              À propos
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Pure player Aéronautique
            </h2>
            <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
              <p>
                AERO NDT a émergé en réponse à une demande pressante sur le marché des
                contrôleurs certifiés FrANDTB.
              </p>
              <p>
                Fondée avec l&apos;ambition de satisfaire les besoins en Contrôle Non
                Destructif (CND) de la filière aéronautique à des tarifs compétitifs,
                notre entreprise vise également à croître en formant de nouveaux
                collaborateurs.
              </p>
            </div>
            <Link
              href="/a-propos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
