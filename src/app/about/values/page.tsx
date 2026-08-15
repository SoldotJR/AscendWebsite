import type { Metadata } from "next";
import { GetInTouch } from "@/components/about/get-in-touch";
import { ValuesPanel } from "@/components/about/values-panel";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "Vision, mission, four pillars, and the educational approach that guides Ascend International School.",
};

export default function OurValuesPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-white pt-28">
        <div className="container-ascend">
          <FadeIn>
            <h1 className="text-center text-4xl font-bold tracking-tight text-[#0B1220] md:text-5xl">
              Our Values
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#1f2a3d] md:text-lg">
              The principles that shape how we teach, support, and grow with every student.
            </p>
          </FadeIn>
          <div className="mt-10">
            <ValuesPanel />
          </div>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
}
