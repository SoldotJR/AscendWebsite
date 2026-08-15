import Image from "next/image";
import Link from "next/link";
import { aboutLinks, courseLinks, siteConfig } from "@/lib/site";

const extraActivityLinks = [
  { title: "Clubs & Activities", href: "/campus-life" },
  { title: "Student Life", href: "/student-life" },
  { title: "Gallery", href: "/gallery" },
];

const socialLinks = [
  { label: "f", href: siteConfig.social.facebook, name: "Facebook" },
  { label: "in", href: siteConfig.social.linkedin, name: "LinkedIn" },
  { label: "ig", href: "https://www.instagram.com/", name: "Instagram" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0f3d8c] text-white">
      <div className="container-ascend py-12">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/brand/logo.png"
            alt={siteConfig.name}
            width={220}
            height={58}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              Location
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/90">{siteConfig.address.full}</p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              Phone
            </h3>
            <div className="mt-4 space-y-1 text-sm text-white/90">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block hover:text-accent-gold"
                >
                  {phone}
                </a>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              Mail
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-white/90 hover:text-accent-gold"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              About Ascend
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent-gold">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              Our Programmes
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent-gold">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              Extracurriculars
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {extraActivityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent-gold">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-accent-gold">
              Follow us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-xs font-semibold text-white transition hover:border-accent-gold hover:bg-accent-gold hover:text-[#0B1220]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-ascend py-5 text-sm text-white/70">
          <p>
            © copyright {siteConfig.name} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
