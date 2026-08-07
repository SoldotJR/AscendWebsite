import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CampusGallery } from "@/components/home/campus-gallery";

export const metadata: Metadata = { title: "Gallery", description: "A look at Ascend's campus, classrooms, and student community." };
export default function GalleryPage() {
  return <><PageHero eyebrow="Gallery" title="Moments from the Ascend community." description="Explore our campus, classrooms, and the everyday energy of learning." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} /><CampusGallery /></>;
}
