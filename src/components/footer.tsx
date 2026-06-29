import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactPage, navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/brand-mark.png"
                alt={siteConfig.name}
                width={180}
                height={100}
                className="h-auto w-36 brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/nos-services" className="transition hover:text-white">
                  Contrôle en production
                </Link>
              </li>
              <li>
                <Link
                  href="/missions-dexpertise-cnd"
                  className="transition hover:text-white"
                >
                  Missions d&apos;expertise CND
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {contactPage.address}
              </li>
              {contactPage.contacts.map((c) => (
                <li key={c.email}>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-1 flex items-center gap-2 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>
            {siteConfig.copyright} /{" "}
            <Link href="/mentions-legales-cgv" className="transition hover:text-white">
              Mentions légales &amp; CGV
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
