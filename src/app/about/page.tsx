import type { Metadata } from "next";
import Image from "next/image";
import { founders, pillars } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About Ascend",
  description:
    "Learn about Ascend International School’s mission, vision, founders, and pathway to the world’s best universities.",
};

const timeline = [
  {
    year: "2024",
    title: "Ascend is founded",
    text: "Founded in Yangon to give ambitious students accelerated international pathways and serious university counselling.",
  },
  {
    year: "Programs",
    title: "Pathways take shape",
    text: "Pre-IGCSE, IGCSE, International A Levels, GED, and OSSD form a coherent ladder toward global admissions.",
  },
  {
    year: "Forward",
    title: "Greater possibilities",
    text: "Students continue ascending—through examinations, extracurricular depth, and offers from leading universities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ascend"
        title="Your pathway to the best universities in the world."
        description="Ascend International School offers IGCSE, O-Level, and A-Level programs designed to prepare students for top universities worldwide—with academic excellence, personal growth, and a supportive learning environment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="section-padding">
        <div className="container-ascend grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Story"
              title="Built for students ready to ascend."
              description="We focus on academic excellence, personal growth, and a supportive learning environment where every student can thrive."
            />
            <div className="mt-8 space-y-4">
              <blockquote className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-royal">
                  Mission
                </p>
                <p className="mt-4 font-serif text-2xl leading-relaxed">
                  “Our mission is to provide a rigorous and globally-minded preparatory education
                  that fosters intellectual curiosity, ethical leadership, and lifelong learning. We
                  empower students to ascend beyond expectations.”
                </p>
              </blockquote>
              <blockquote className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-gold">
                  Vision
                </p>
                <p className="mt-4 font-serif text-2xl leading-relaxed">
                  “At Ascend International School, we envision a world where every student has the
                  tools, support, and inspiration to reach their highest potential and make
                  meaningful contributions to society.”
                </p>
              </blockquote>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/campus/gallery-2.jpg"
                alt="Ascend learning environment"
                fill
                className="object-cover"
                sizes="45vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface-muted/50">
        <div className="container-ascend">
          <SectionHeading
            eyebrow="The Four Pillars"
            title="What every Ascend student experiences."
            description="Accelerated programs, test preparation, university counseling, and extracurricular development—working as one system."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.05}>
                <div className="h-full rounded-[1.5rem] border border-border bg-card p-6">
                  <p className="text-xs font-bold text-accent-gold">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-ascend">
          <SectionHeading
            eyebrow="Timeline"
            title="A young school with a clear direction."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year} className="relative rounded-[1.5rem] border border-border p-6">
                <p className="font-serif text-4xl text-royal">{item.year}</p>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-ascend">
          <SectionHeading
            eyebrow="Founders"
            title="Leadership shaped by world-class education."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="flex gap-6 rounded-[2rem] border border-border bg-card p-6"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={120}
                  height={120}
                  className="h-28 w-24 rounded-2xl object-cover"
                />
                <div>
                  <p className="eyebrow">{founder.title}</p>
                  <h3 className="mt-2 font-serif text-2xl">{founder.name}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {founder.credentials.map((credential) => (
                      <li key={credential}>{credential}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
