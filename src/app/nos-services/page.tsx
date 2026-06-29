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
import { productionIcons } from "@/lib/icons";
import { images, productionService } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contrôle en production",
  description: productionService.bannerDescription,
};

export default function NosServicesPage() {
  return (
    <>
      <PageBanner
        title={productionService.title}
        description={productionService.bannerDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <AnimateIn>
              <div className="relative">
                <div className="image-frame">
                  <Image
                    src={images.serviceProductionHome}
                    alt="Contrôle non destructif en production aéronautique"
                    width={1024}
                    height={676}
                    className="relative z-10 h-auto w-full rounded-2xl shadow-xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute -left-3 top-6 z-20 rounded-xl border border-white/80 bg-white px-4 py-3 shadow-lg sm:-left-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Pure player
                  </p>
                  <p className="text-sm font-bold text-heading">100% Aéronautique</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <SectionHeader
                label="Production"
                title={productionService.subtitle}
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>{productionService.paragraphs[0]}</p>
                <p>{productionService.paragraphs[1]}</p>
                <p>{productionService.paragraphs[2]}</p>
              </div>
              <ul className="mt-8 space-y-3">
                {productionService.highlights.map((item) => (
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
                Demander un devis
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
              title={productionService.processTitle}
              description={productionService.processDescription}
            />
          </AnimateIn>

          <div className="mt-14 grid grid-cards gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productionService.process.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 70}>
                <article className="card card-hover card-panel group relative p-6 sm:p-8">
                  <span className="text-4xl font-bold text-primary/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IconBadge
                    icon={productionIcons[step.icon]}
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
              label="Compétences"
              title={productionService.techniquesTitle}
              description={productionService.techniquesDescription}
            />
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {productionService.techniques.map((technique) => (
                <div
                  key={technique.code}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light px-5 py-2.5"
                >
                  <span className="font-bold text-primary">{technique.code}</span>
                  <span className="text-sm text-slate-600">{technique.name}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface px-6 py-5 text-center text-sm leading-relaxed text-slate-600">
              Tous nos contrôleurs sont certifiés selon la norme{" "}
              <strong className="font-semibold text-heading">EN4179</strong> et la
              certification{" "}
              <strong className="font-semibold text-heading">FrANDTB</strong>, garantissant
              la conformité de chaque intervention sur vos pièces aéronautiques.
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <SectionHeader label="Avantages" title={productionService.benefitsTitle} />
          </AnimateIn>

          <div className="mt-14 grid grid-cards gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productionService.benefits.map((benefit, i) => (
              <AnimateIn key={benefit.title} delay={i * 70}>
                <article className="card card-hover card-panel card-panel-centered p-6 sm:p-8">
                  <IconBadge icon={productionIcons[benefit.icon]} size="md" className="mb-4" />
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
