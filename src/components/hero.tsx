import Link from "next/link";
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero-grid relative min-h-screen overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
            <Shield className="h-4 w-4" />
            Certification FrANDTB — Filière Aéronautique
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500"
            >
              Contactez-nous
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        <div className="animate-fade-up mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-24">
          {[
            { value: "100%", label: "Aéronautique" },
            { value: "FrANDTB", label: "Certifiés" },
            { value: "Niveau 3", label: "Expertise CND" },
            { value: "24/7", label: "Disponibilité" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <div className="gradient-text text-2xl font-bold sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <Sparkles className="h-5 w-5 text-sky-500/50" />
      </div>
    </section>
  );
}
