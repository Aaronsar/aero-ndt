import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-blue-800 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Prêt à renforcer votre équipe CND ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sky-100">
              Contactez-nous pour discuter de vos besoins en contrôle non destructif
              dans la filière aéronautique.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-sky-50"
              >
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/rejoignez-nous"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Rejoignez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
