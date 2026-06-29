import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { SectionHeader } from "@/components/section-header";
import { servicesPreview } from "@/lib/site-config";

export function ServicesSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn>
          <SectionHeader label="Prestations" title="Nos services CND" />
        </AnimateIn>

        <div className="mt-14 grid grid-cards gap-6 lg:grid-cols-2">
          {servicesPreview.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 100}>
              <Link
                href={service.href}
                className="card card-hover card-panel group block h-full overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/95 via-black/70 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white drop-shadow-sm sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/90 drop-shadow-sm sm:text-base">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white drop-shadow-sm transition group-hover:gap-3">
                      En savoir plus
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
