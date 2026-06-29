import type { Metadata } from "next";
import { legalPage, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales & CGV",
  description: `Mentions légales et conditions générales de vente de ${siteConfig.name}.`,
};

export default function LegalPage() {
  return (
    <>
      <section className="bg-[#f0f5fa] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-semibold text-[#1e293b] sm:text-4xl">
            Mentions légales &amp; CGV
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-10">
            {legalPage.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-[#1e293b]">{section.title}</h2>
                <div className="mt-4 space-y-3 text-slate-600 leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
