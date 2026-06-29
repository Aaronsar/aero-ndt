"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Plane, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 shadow-lg shadow-sky-500/20 transition group-hover:shadow-sky-500/40">
            <Plane className="h-4 w-4 -rotate-45 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="glass min-w-[240px] rounded-xl p-2 shadow-2xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-slate-300 transition hover:bg-sky-500/10 hover:text-sky-300"
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
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500"
          >
            Contactez-nous
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-slate-300 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#030712]/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <span className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5"
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
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white"
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
