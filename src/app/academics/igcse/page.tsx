import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programs } from "@/data/content";
import { ProgramPage } from "@/components/academics/program-page";

const program = programs.find((p) => p.slug === "igcse");

export const metadata: Metadata = { title: program?.title ?? "Program", description: program?.overview };

export default function Page() {
  if (!program) notFound();
  return <ProgramPage program={program} />;
}
