import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { CtaBanner } from "@/components/cta-banner";
import { PageBanner } from "@/components/page-banner";
import { ServicesPreview } from "@/components/services-preview";
import { ValueCards } from "@/components/value-cards";
import { aboutPage, images, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title={siteConfig.tagline} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <div className="mx-auto max-w-2xl">
              <Image
                src={images.aboutEn9100}
                alt=""
                width={545}
                height={360}
                className="mx-auto h-auto w-full rounded-2xl shadow-lg"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-surface pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnimateIn delay={100}>
            <span className="section-label">Certification</span>
            <h2 className="section-title mt-3">{aboutPage.certificationTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Nous nous engageons à ce que notre organisation réponde&nbsp; aux exigences
              de la <strong className="font-semibold text-heading">norme</strong>{" "}
              <strong className="font-semibold text-heading">EN4179</strong> et aux
              exigences spécifiques de la{" "}
              <strong className="font-semibold text-heading">certification FrANDTB</strong>
              .
            </p>
          </AnimateIn>
        </div>
      </section>

      <ServicesPreview />
      <ValueCards />
      <CtaBanner />
    </>
  );
}
