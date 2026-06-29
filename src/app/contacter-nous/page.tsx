import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "@/components/contact-form";
import { IconBadge } from "@/components/icon-badge";
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
                    <IconBadge icon={MapPin} size="sm" />
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
                        <IconBadge icon={Phone} size="sm" />
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="font-medium text-heading hover:text-primary"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <IconBadge icon={Mail} size="sm" />
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
