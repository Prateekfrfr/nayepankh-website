"use client";

import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
            <Image
              src="/images/logo.png"
              alt="NayePankh Foundation logo"
              width={44}
              height={44}
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-wide text-naye-blue sm:text-base">
              NayePankh
            </span>
            <span className="block text-xs font-semibold text-slate-500">
              Foundation
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-naye-blue text-white shadow"
                    : "text-slate-600 hover:bg-slate-50 hover:text-naye-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/volunteer"
            className="rounded-full px-4 py-2 text-sm font-bold text-naye-blue transition hover:bg-blue-50"
          >
            Join us
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-naye-orange px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-500"
          >
            <HeartHandshake size={18} />
            Donate
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-naye-blue shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-naye-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
