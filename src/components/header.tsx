"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images, navLinks } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src={images.logo}
            alt="AERO NDT"
            width={180}
            height={64}
            className="h-12 w-auto sm:h-14"
            priority
          />
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
                <button className="flex items-center gap-1 px-4 py-2 text-[15px] text-slate-600 transition hover:text-[#045cb4]">
                  {link.label}
                  <span className="text-xs">▾</span>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[240px] rounded border border-slate-200 bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 transition hover:bg-[#f0f5fa] hover:text-[#045cb4]"
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
                className="px-4 py-2 text-[15px] text-slate-600 transition hover:text-[#045cb4]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="rounded p-2 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="py-2">
                  <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded px-2 py-2 text-sm text-slate-600 hover:bg-[#f0f5fa]"
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
                  className="rounded px-2 py-2.5 text-sm text-slate-600 hover:bg-[#f0f5fa]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
