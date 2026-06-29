import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between">
          <Link href="/">
            <Image
              src="/images/brand-mark.png"
              alt={siteConfig.name}
              width={200}
              height={112}
              className="h-auto w-40 sm:w-48"
            />
          </Link>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>
            {siteConfig.copyright} /{" "}
            <Link href="/mentions-legales-cgv" className="hover:text-[#045cb4]">
              Mentions légales &amp; CGV
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
