"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { images, navLinks } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0 transition opacity-90 hover:opacity-100">
          <Image
            src={images.logo}
            alt="AERO NDT"
            width={180}
            height={64}
            className="h-11 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="rounded-lg px-3.5 py-2 text-[15px] font-medium text-slate-600 transition hover:bg-surface hover:text-primary">
                  {link.label}
                  <span className="ml-1 text-xs opacity-60">▾</span>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[260px] overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-slate-600 transition hover:bg-primary-light hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-[15px] font-medium text-slate-600 transition hover:bg-surface hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contacter-nous" className="btn-primary !py-2.5 !px-5 !text-sm">
            Contact
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          className="rounded-lg p-2.5 text-slate-700 transition hover:bg-surface lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="py-1">
                  <p className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-2 py-2.5 text-sm font-medium text-slate-600 hover:bg-surface"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-600 hover:bg-surface"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contacter-nous"
              className="btn-primary mt-3 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Contactez-nous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
