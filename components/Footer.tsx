import Image from "next/image";
import Link from "next/link";
import { Globe2, Mail, MapPin, Phone, Share2, Users, Video } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-naye-blue-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
              <Image src="/images/logo.png" alt="NayePankh logo" width={42} height={42} />
            </span>
            <div>
              <p className="font-black">NayePankh Foundation</p>
              <p className="text-sm text-blue-100">{site.registration}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-blue-100">
            A student-led movement creating practical, local impact through education,
            healthcare, relief and volunteer-powered community action.
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe2, Users, Video, Share2].map((Icon, index) => (
              <span
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blue-50"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-orange-200">
            Explore
          </h3>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-blue-100 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-orange-200">
            Contact
          </h3>
          <div className="space-y-4 text-sm text-blue-100">
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0" size={18} />
              {site.email}
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0" size={18} />
              {site.phone}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0" size={18} />
              {site.cities}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-100">
        Copyright 2026 NayePankh Foundation. Built for trust, impact and community action.
      </div>
    </footer>
  );
}
