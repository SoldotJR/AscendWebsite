import type { Metadata } from "next";
import Image from "next/image";
import { founders } from "@/data/content";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ascend International School’s mission, community, and the founders who built it.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-[72px]">
        <div className="relative aspect-[16/7] min-h-[280px] w-full sm:min-h-[360px]">
          <Image
            src="/images/campus/gallery-6.jpg"
            alt="Ascend International School community"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-ascend mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-[#0B1220] md:text-6xl">About Us</h1>
            <p className="mt-8 text-base leading-relaxed text-[#1f2a3d] md:text-lg">
              Welcome to Ascend International School. We believe that true education extends far
              beyond the covers of a textbook. Our mission is to ignite a lifelong passion for
              learning, cultivate critical thinking, and build strong moral character in every
              student who walks through our doors. Here at Ascend, we don&apos;t just teach for
              tests—we prepare our young adults for life. Through individualized guidance, rigorous
              academic programs, and an inclusive community, we empower students to discover their
              unique strengths and ascend to their full potential. We invite you to explore our
              campus, meet our dedicated faculty, and become part of our vibrant learning community.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#0B1220] md:text-base">
              — Dr. Elizabeth Vance, Head of School
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-[#f8fafc]">
        <div className="container-ascend">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#0B1220] md:text-4xl">
              Welcome Message
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-10 md:space-y-16">
            {founders.map((founder, index) => {
              const imageLeft = index % 2 === 0;
              return (
                <FadeIn key={founder.name} delay={index * 0.04}>
                  <article className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] border border-border bg-white p-6 shadow-soft md:grid-cols-2 md:gap-12 md:p-10">
                    <div
                      className={`relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.25rem] ${imageLeft ? "md:order-1" : "md:order-2"}`}
                    >
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                      <p className="eyebrow">{founder.title}</p>
                      <h3 className="mt-2 text-2xl font-bold text-[#0B1220] md:text-3xl">
                        {founder.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {founder.credentials.join(" · ")}
                      </p>
                      <p className="mt-5 text-base leading-relaxed text-[#1f2a3d]">
                        {founder.message}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
