import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales & CGV",
  description: "Mentions légales et conditions générales de vente de AERO NDT.",
};

export default function LegalPage() {
  return (
    <>
      <section className="hero-grid pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Mentions légales &amp; CGV
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass space-y-8 rounded-3xl p-8 lg:p-10">
            <div>
              <h2 className="text-lg font-semibold text-white">Éditeur du site</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                {siteConfig.name}
                <br />
                {siteConfig.address}
                <br />
                Email : {siteConfig.email}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Hébergement</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Ce site est hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">
                Conditions générales de vente
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Les conditions générales de vente de {siteConfig.name} s&apos;appliquent
                à l&apos;ensemble des prestations de services en Contrôle Non Destructif
                proposées par la société. Pour toute demande d&apos;information, veuillez
                nous contacter à {siteConfig.email}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
