import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { contactPage } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description: contactPage.formDescription,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pt-12 pb-8 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-semibold text-[#1e293b] sm:text-4xl">
            {contactPage.introTitle}
          </h1>
        </div>
      </section>

      <section className="pb-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="section-title text-2xl">{contactPage.formTitle}</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {contactPage.formDescription}
              </p>

              <div className="mt-8 space-y-6">
                <div className="card p-5">
                  <p className="text-slate-600">{contactPage.address}</p>
                </div>

                {contactPage.contacts.map((contact) => (
                  <div key={contact.email} className="card space-y-2 p-5">
                    <p>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="text-[#1e293b] hover:text-[#046bd2]"
                      >
                        {contact.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#1e293b] hover:text-[#046bd2]"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
