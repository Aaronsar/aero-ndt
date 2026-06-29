import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope, Settings } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Découvrez nos prestations en Contrôle Non Destructif pour l'aéronautique.",
};

const serviceIcons = [Settings, Microscope];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-grid pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Prestations
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Nos services CND
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Des solutions adaptées à vos besoins en contrôle non destructif dans la
            filière aéronautique.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={service.slug}
                className="glass grid items-center gap-8 rounded-3xl p-8 lg:grid-cols-[auto_1fr_auto] lg:p-10"
              >
                <div className="inline-flex rounded-2xl bg-sky-500/10 p-4 text-sky-400">
                  <Icon className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  <p className="mt-2 text-slate-400">{service.description}</p>
                  <p className="mt-3 text-sm text-slate-500">{service.longDescription}</p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 self-start rounded-full border border-sky-500/30 px-5 py-2.5 text-sm font-semibold text-sky-400 transition hover:bg-sky-500/10 lg:self-center"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
