import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { expertiseService, images } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missions d'expertise CND",
  description: expertiseService.intro,
};

export default function MissionsExpertisePage() {
  return (
    <>
      <section className="bg-white pt-12 pb-8 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-semibold text-[#1e293b] sm:text-4xl">
            {expertiseService.title}
          </h1>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Image
            src={images.expertiseHero}
            alt={expertiseService.title}
            width={545}
            height={360}
            className="mx-auto h-auto w-full max-w-xl rounded-lg"
          />
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="section-title text-2xl sm:text-3xl">
            {expertiseService.subtitle}
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">{expertiseService.intro}</p>
          <Link href="/contacter-nous" className="btn-primary mt-8">
            Contactez-nous
          </Link>
        </div>
      </section>

      <section className="bg-[#f0f5fa] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-title mb-12 text-center text-2xl sm:text-3xl">
            {expertiseService.prestationsTitle}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseService.prestations.map((prestation) => (
              <article
                key={prestation.title}
                className="card flex flex-col items-center p-6 text-center"
              >
                <Image
                  src={prestation.image}
                  alt=""
                  width={120}
                  height={120}
                  className="mb-4 h-24 w-auto object-contain"
                />
                <h3 className="text-lg font-semibold text-[#1e293b]">{prestation.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {prestation.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
