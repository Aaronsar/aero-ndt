import Link from "next/link";
import { Plane } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700">
                <Plane className="h-4 w-4 -rotate-45 text-white" />
              </div>
              <span className="text-lg font-bold text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services/controle-production"
                  className="text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Contrôle en production
                </Link>
              </li>
              <li>
                <Link
                  href="/services/expertise-cnd"
                  className="text-sm text-slate-400 transition hover:text-sky-400"
                >
                  Missions d&apos;expertise CND
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-400">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name} — Tous droits réservés
          </p>
          <Link
            href="/mentions-legales"
            className="text-sm text-slate-500 transition hover:text-sky-400"
          >
            Mentions légales &amp; CGV
          </Link>
        </div>
      </div>
    </footer>
  );
}
