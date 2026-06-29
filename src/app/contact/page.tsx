import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez AERO NDT pour vos besoins en Contrôle Non Destructif.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-grid pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Une question, un projet ? Notre équipe est à votre disposition.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: "Téléphone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Localisation", value: siteConfig.address },
              ].map((item) => (
                <div key={item.label} className="glass flex items-start gap-4 rounded-2xl p-6">
                  <div className="rounded-xl bg-sky-500/10 p-3 text-sky-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 text-white transition hover:text-sky-400">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form className="glass rounded-3xl p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-white">Envoyez-nous un message</h2>
              <div className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-400">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-400">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 py-3.5 text-sm font-semibold text-white transition hover:from-sky-400 hover:to-blue-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
