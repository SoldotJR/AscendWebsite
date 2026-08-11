import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { programs } from "@/data/content";
import { NewsletterForm } from "@/components/forms/newsletter-form";

const quickLinks = [
  { title: "About", href: "/about" },
  { title: "Courses", href: "/academics" },
  { title: "Clubs & Activities", href: "/campus-life" },
  { title: "Faculty", href: "/faculty" },
  { title: "News", href: "/news" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface pt-10">
      <div className="container-ascend grid gap-8 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <Image
            src="/images/brand/logo.png"
            alt={siteConfig.name}
            width={180}
            height={48}
            className="h-9 w-auto object-contain"
          />
          <p className="prose-ascend mt-3 max-w-sm text-sm">
            A Pearson-approved international school in Yangon preparing students for top global
            universities through accelerated pathways and personalized counselling.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-royal/40"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xs font-semibold">f</span>
            </a>
            <a
              href={siteConfig.social.linkedin}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-royal/40"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xs font-semibold">in</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Courses
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link href={program.href} className="text-muted-foreground hover:text-foreground">
                  {program.slug === "a-levels" ? "IAL" : program.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/university-counseling"
                className="text-muted-foreground hover:text-foreground"
              >
                University Counseling
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Stay Informed
          </h3>
          <p className="mt-5 text-sm text-muted-foreground">
            Receive admissions updates, open days, and pathway news.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
              <div className="space-y-1">
                {siteConfig.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-foreground">
                    {phone}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-ascend mt-8 flex flex-col gap-3 border-t border-border py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
