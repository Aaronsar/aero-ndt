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
import { expertiseIcons, prestationIcons } from "@/lib/icons";
import { expertiseService, images } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missions d'expertise CND",
  description: expertiseService.bannerDescription,
};

export default function MissionsExpertisePage() {
  return (
    <>
      <PageBanner
        title={expertiseService.title}
        description={expertiseService.bannerDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <AnimateIn>
              <div className="relative">
                <div className="image-frame">
                  <Image
                    src={images.serviceExpertiseHome}
                    alt="Expertise CND en environnement aéronautique"
                    width={1024}
                    height={676}
                    className="relative z-10 h-auto w-full rounded-2xl shadow-xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute -left-3 top-6 z-20 rounded-xl border border-white/80 bg-white px-4 py-3 shadow-lg sm:-left-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Expertise
                  </p>
                  <p className="text-sm font-bold text-heading">Niveau 3 CND</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <SectionHeader
                label="Expertise CND"
                title={expertiseService.subtitle}
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                {expertiseService.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {expertiseService.highlights.map((item) => (
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
                Parlons de votre projet
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
              label="Méthodologie"
              title={expertiseService.processTitle}
              description={expertiseService.processDescription}
            />
          </AnimateIn>

          <div className="mt-14 grid grid-cards gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseService.process.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 70}>
                <article className="card card-hover card-panel group relative p-6 sm:p-8">
                  <span className="text-4xl font-bold text-primary/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IconBadge
                    icon={expertiseIcons[step.icon]}
                    size="sm"
                    className="absolute right-6 top-6"
                  />
                  <h3 className="mt-4 font-bold text-heading">{step.title}</h3>
                  <p className="card-panel-text mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader
              label="Organisation"
              title={expertiseService.modesTitle}
              description={expertiseService.modesDescription}
            />
          </AnimateIn>

          <div className="mt-14 grid grid-cards gap-6 lg:grid-cols-2">
            {expertiseService.modes.map((mode, i) => (
              <AnimateIn key={mode.title} delay={i * 80}>
                <article className="card card-hover card-panel card-panel-row gap-5 p-6 sm:p-8">
                  <IconBadge icon={expertiseIcons[mode.icon]} size="md" className="shrink-0" />
                  <div className="card-panel-text flex min-w-0 flex-col">
                    <h3 className="text-lg font-bold text-heading">{mode.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {mode.description}
                    </p>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader
              label="Prestations"
              title={expertiseService.prestationsTitle}
              description={expertiseService.prestationsDescription}
            />
          </AnimateIn>

          <div className="mt-14 grid grid-cards gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseService.prestations.map((prestation, i) => (
              <AnimateIn key={prestation.title} delay={i * 70}>
                <article className="card card-hover card-panel p-6 sm:p-8">
                  <IconBadge
                    icon={prestationIcons[prestation.icon]}
                    size="md"
                    className="mb-4"
                  />
                  <h3 className="font-bold text-heading">{prestation.title}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {prestation.description}
                  </p>
                  <p className="card-panel-text mt-3 text-sm leading-relaxed text-slate-600">
                    {prestation.detail}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader label="Avantages" title={expertiseService.benefitsTitle} />
          </AnimateIn>

          <div className="mt-14 grid grid-cards gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseService.benefits.map((benefit, i) => (
              <AnimateIn key={benefit.title} delay={i * 70}>
                <article className="card card-hover card-panel card-panel-centered p-6 sm:p-8">
                  <IconBadge icon={expertiseIcons[benefit.icon]} size="md" className="mb-4" />
                  <h3 className="font-bold text-heading">{benefit.title}</h3>
                  <p className="card-panel-text mt-2 text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <CtaBanner />
    </>
  );
}
