import { HomeHero } from "@/components/home/home-hero";
import { AcademicPrograms } from "@/components/home/academic-programs";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AcademicPrograms />
      <TestimonialsCarousel />
    </>
  );
}
