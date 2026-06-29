import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { CtaBanner } from "@/components/cta-banner";
import { IconBadge } from "@/components/icon-badge";
import { PageBanner } from "@/components/page-banner";
import { SectionHeader } from "@/components/section-header";
import { prestationIcons } from "@/lib/icons";
import { expertiseService, images } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missions d'expertise CND",
  description: expertiseService.intro,
};

export default function MissionsExpertisePage() {
  return (
    <>
      <PageBanner title={expertiseService.title} description={expertiseService.intro} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <div className="mx-auto max-w-2xl">
              <Image
                src={images.expertiseHero}
                alt={expertiseService.title}
                width={545}
                height={360}
                className="h-auto w-full rounded-2xl shadow-xl"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-surface pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnimateIn delay={100}>
            <h2 className="section-title">{expertiseService.subtitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {expertiseService.intro}
            </p>
            <Link href="/contacter-nous" className="btn-primary mt-8">
              Contactez-nous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader
              label="Expertise"
              title={expertiseService.prestationsTitle}
            />
          </AnimateIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseService.prestations.map((prestation, i) => (
              <AnimateIn key={prestation.title} delay={i * 70}>
                <article className="card card-hover group flex h-full flex-col items-center p-6 text-center">
                  <IconBadge icon={prestationIcons[prestation.icon]} size="md" className="mb-4" />
                  <h3 className="font-bold text-heading">{prestation.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {prestation.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
