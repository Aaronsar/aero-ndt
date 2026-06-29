import Link from "next/link";
import { ArrowRight, Microscope, Settings } from "lucide-react";
import { services } from "@/lib/site-config";

const serviceIcons = [Settings, Microscope];

export function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Prestations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Nos services CND
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Link
                key={service.slug}
                href={service.href}
                className="group glass relative overflow-hidden rounded-3xl p-8 transition hover:border-sky-500/30 lg:p-10"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-500/5 transition group-hover:bg-sky-500/10" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition group-hover:gap-3">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
