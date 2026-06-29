import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-[#0c4a6e] px-8 py-14 text-center sm:px-16 sm:py-16">
          <div className="pointer-events-none absolute inset-0 mesh-pattern opacity-30" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Un projet CND ? Parlons-en.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Nos experts vous accompagnent sur vos lignes de production et vos missions
              d&apos;expertise niveau 3.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contacter-nous"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/rejoignez-nous"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Rejoignez-nous !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
