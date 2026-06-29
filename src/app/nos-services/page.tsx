import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturesGrid } from "@/components/features-grid";
import { images, productionService } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contrôle en production",
  description: productionService.paragraphs[0],
};

export default function NosServicesPage() {
  return (
    <>
      <section className="bg-white pt-12 pb-8 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-semibold text-[#1e293b] sm:text-4xl">
            {productionService.title}
          </h1>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Image
            src={images.serviceProductionPage}
            alt={productionService.title}
            width={1024}
            height={676}
            className="mx-auto h-auto w-full max-w-4xl rounded-lg"
          />
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="section-title text-2xl sm:text-3xl">
            {productionService.subtitle}
          </h2>
          <div className="mt-6 space-y-4 text-left text-slate-600 leading-relaxed">
            <p>{productionService.paragraphs[0]}</p>
            <p>
              Nos contrôleurs{" "}
              <strong className="font-semibold text-[#1e293b]">certifiés FrANDTB</strong>{" "}
              toute technique et méthode CND interviendront sur vos moyens, sous votre
              responsabilité, en réponse au besoin structurel ou conjoncturel de votre
              atelier.
            </p>
            <p>{productionService.paragraphs[2]}</p>
          </div>
          <Link href="/contacter-nous" className="btn-primary mt-8">
            Contactez-nous
          </Link>
        </div>
      </section>

      <FeaturesGrid />
    </>
  );
}
