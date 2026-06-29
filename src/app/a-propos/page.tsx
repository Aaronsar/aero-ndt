import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="bg-white pt-12 pb-8 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-semibold text-[#1e293b] sm:text-4xl">
            {siteConfig.tagline}
          </h1>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Image
            src={images.aboutEn9100}
            alt=""
            width={545}
            height={360}
            className="mx-auto h-auto w-full max-w-xl rounded-lg"
          />
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="section-title text-2xl sm:text-3xl">
            {aboutPage.certificationTitle}
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Nous nous engageons à ce que notre organisation réponde&nbsp; aux exigences
            de la <strong className="font-semibold text-[#1e293b]">norme</strong>{" "}
            <strong className="font-semibold text-[#1e293b]">EN4179</strong> et aux
            exigences spécifiques de la{" "}
            <strong className="font-semibold text-[#1e293b]">certification FrANDTB</strong>
            .
          </p>
        </div>
      </section>

      <ServicesPreview />
      <ValueCards />
    </>
  );
}
