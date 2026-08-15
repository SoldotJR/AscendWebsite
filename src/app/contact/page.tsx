import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ascend International School in Yangon.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We're here to help" />

      <section className="section-padding bg-white">
        <div className="container-ascend">
          <FadeIn>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0B1220] md:text-4xl">
              Leave us a message
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#1f2a3d] md:text-lg">
              Ask a question, book a campus visit, or tell us which programme you are interested in.
              Our admissions team will reply as soon as we can.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-[1.5rem] bg-[#0f3d8c] p-7 shadow-soft md:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-white">Send a message</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  Tell us which programme you are exploring and how we can help.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-[1.5rem] bg-[#0f3d8c] p-7 shadow-soft md:p-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Address & contact information
                  </h3>
                  <ul className="mt-6 space-y-5 text-sm leading-relaxed text-white">
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                      <div className="space-y-1">
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
                    </li>
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-gold">
                        {siteConfig.email}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                      <span>{siteConfig.address.full}</span>
                    </li>
                  </ul>
                </div>

                <iframe
                  title="Ascend International School location"
                  src={siteConfig.mapEmbed}
                  className="h-72 w-full flex-1 rounded-[1.5rem] shadow-soft sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
