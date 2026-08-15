import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GetInTouch() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ascend">
        <div className="rounded-[1.5rem] border border-border bg-[#f3f6fb] px-8 py-12 text-center md:px-16">
          <p className="eyebrow">Admissions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1220] md:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1f2a3d] md:text-lg">
            Ready to learn more about Ascend? Speak with our team, book a campus visit, or ask about
            the programme that is right for your child.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-royal"
          >
            Get in touch with us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
