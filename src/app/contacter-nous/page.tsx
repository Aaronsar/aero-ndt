import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/page-banner";
import { contactPage } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description: contactPage.formDescription,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title={contactPage.introTitle}
        description={contactPage.formDescription}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
            <AnimateIn>
              <div>
                <span className="section-label">Coordonnées</span>
                <h2 className="section-title mt-2">{contactPage.formTitle}</h2>

                <div className="mt-8 space-y-4">
                  <div className="card flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Adresse</p>
                      <p className="mt-1 font-medium text-heading">
                        {contactPage.address}
                      </p>
                    </div>
                  </div>

                  {contactPage.contacts.map((contact) => (
                    <div key={contact.email} className="card p-5">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="font-medium text-heading hover:text-primary"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="font-medium text-heading hover:text-primary"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
