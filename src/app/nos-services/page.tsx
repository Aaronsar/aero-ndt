import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { CtaBanner } from "@/components/cta-banner";
import { FeaturesGrid } from "@/components/features-grid";
import { PageBanner } from "@/components/page-banner";
import { images, productionService } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contrôle en production",
  description: productionService.paragraphs[0],
};

export default function NosServicesPage() {
  return (
    <>
      <PageBanner
        title={productionService.title}
        description={productionService.paragraphs[0]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <div className="image-frame mx-auto max-w-4xl">
              <Image
                src={images.serviceProductionPage}
                alt={productionService.title}
                width={1024}
                height={676}
                className="relative z-10 h-auto w-full rounded-2xl shadow-xl"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateIn delay={100}>
            <h2 className="section-title text-center">{productionService.subtitle}</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>{productionService.paragraphs[0]}</p>
              <p>
                Nos contrôleurs{" "}
                <strong className="font-semibold text-heading">certifiés FrANDTB</strong>{" "}
                toute technique et méthode CND interviendront sur vos moyens, sous votre
                responsabilité, en réponse au besoin structurel ou conjoncturel de votre
                atelier.
              </p>
              <p>{productionService.paragraphs[2]}</p>
            </div>
            <div className="mt-10 text-center">
              <Link href="/contacter-nous" className="btn-primary">
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <FeaturesGrid />
      <CtaBanner />
    </>
  );
}
