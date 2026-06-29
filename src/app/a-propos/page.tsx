import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { CtaBanner } from "@/components/cta-banner";
import { FeaturesGrid } from "@/components/features-grid";
import { IconBadge } from "@/components/icon-badge";
import { PageBanner } from "@/components/page-banner";
import { SectionHeader } from "@/components/section-header";
import { ServicesPreview } from "@/components/services-preview";
import { ValueCards } from "@/components/value-cards";
import { aboutIcons } from "@/lib/icons";
import { aboutPage, images, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description: aboutPage.bannerDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={siteConfig.tagline}
        description={aboutPage.bannerDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <AnimateIn>
              <div className="relative">
                <div className="image-frame">
                  <Image
                    src={images.serviceProductionHome}
                    alt="Contrôle non destructif en filière aéronautique"
                    width={1024}
                    height={676}
                    className="relative z-10 h-auto w-full rounded-2xl shadow-xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute -left-3 top-6 z-20 rounded-xl border border-white/80 bg-white px-4 py-3 shadow-lg sm:-left-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Certifié
                  </p>
                  <p className="text-sm font-bold text-heading">EN9100</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <SectionHeader label="Qui sommes-nous" title={aboutPage.storyTitle} align="left" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                {aboutPage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {aboutPage.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacter-nous" className="btn-primary mt-10">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader
              label="Certification"
              title={aboutPage.certificationTitle}
              description={aboutPage.certificationDescription}
            />
          </AnimateIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {aboutPage.certifications.map((cert, i) => (
              <AnimateIn key={cert.title} delay={i * 70}>
                <article className="card card-hover group flex h-full flex-col p-8 text-center">
                  <IconBadge icon={aboutIcons[cert.icon]} size="md" className="mx-auto mb-5" />
                  <h3 className="text-lg font-bold text-heading">{cert.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {cert.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={120}>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white px-6 py-5 text-center text-sm leading-relaxed text-slate-600">
              {aboutPage.certificationText}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader
              label="Engagement"
              title={aboutPage.commitmentTitle}
              description={aboutPage.commitmentDescription}
            />
          </AnimateIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {aboutPage.commitments.map((commitment, i) => (
              <AnimateIn key={commitment.title} delay={i * 80}>
                <article className="card card-hover flex h-full gap-5 p-8">
                  <IconBadge icon={aboutIcons[commitment.icon]} size="md" className="shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-heading">{commitment.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {commitment.description}
                    </p>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <ValueCards />
      <ServicesPreview />
      <CtaBanner />
    </>
  );
}
