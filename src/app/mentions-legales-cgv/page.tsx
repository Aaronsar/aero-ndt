import type { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { PageBanner } from "@/components/page-banner";
import { legalPage, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales & CGV",
  description: `Mentions légales et conditions générales de vente de ${siteConfig.name}.`,
};

export default function LegalPage() {
  return (
    <>
      <PageBanner title="Mentions légales & CGV" />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-8">
            {legalPage.sections.map((section, i) => (
              <AnimateIn key={section.title} delay={i * 50}>
                <div className="card p-8">
                  <h2 className="text-xl font-bold text-heading">{section.title}</h2>
                  <div className="mt-4 space-y-3 leading-relaxed text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
