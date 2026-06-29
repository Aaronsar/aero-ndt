import Image from "next/image";
import Link from "next/link";
import { servicesPreview } from "@/lib/site-config";

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title mb-12 text-center text-2xl sm:text-3xl">
          Nos services CND
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {servicesPreview.map((service) => (
            <article key={service.title} className="text-center">
              <Image
                src={service.image}
                alt={service.title}
                width={1024}
                height={676}
                className="mx-auto h-auto w-full max-w-md rounded-lg"
              />
              <h3 className="mt-6 text-xl font-semibold text-[#1e293b] sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
              <Link href={service.href} className="btn-primary mt-6">
                En savoir plus
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
