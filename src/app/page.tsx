import { HomeHero } from "@/components/home/home-hero";
import { WhyAscend } from "@/components/home/why-ascend";
import { AcademicPrograms } from "@/components/home/academic-programs";
import { StudentJourney } from "@/components/home/student-journey";
import { UniversityPathway } from "@/components/home/university-pathway";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { CampusGallery } from "@/components/home/campus-gallery";
import { LatestNews } from "@/components/home/latest-news";
import { HomeCTA } from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyAscend />
      <AcademicPrograms />
      <StudentJourney />
      <UniversityPathway />
      <TestimonialsCarousel />
      <CampusGallery limit={6} />
      <LatestNews />
      <HomeCTA />
    </>
  );
}
