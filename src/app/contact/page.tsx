import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ascend International School in Yangon.",
};

export default function ContactPage() {
  return (
    <section className="bg-white pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-ascend">
        <h1 className="max-w-2xl font-serif text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl md:text-5xl">
          We&apos;re here to help
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-xl font-semibold text-[#0B1220]">Leave us a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-[#e6ebf3] bg-[#f8fafc] p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-[#0B1220]">Address & contact information</h2>
              <ul className="mt-6 space-y-5 text-sm leading-relaxed text-[#1f2a3d]">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="space-y-1">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block hover:text-primary"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{siteConfig.address.full}</span>
                </li>
              </ul>
            </div>

            <iframe
              title="Ascend International School location"
              src={siteConfig.mapEmbed}
              className="mt-6 h-72 w-full rounded-2xl border border-[#e6ebf3] sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
