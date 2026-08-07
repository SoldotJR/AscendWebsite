import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <section className="flex min-h-[70vh] items-center pt-24"><div className="container-ascend text-center"><p className="eyebrow">404</p><h1 className="mt-4 font-serif text-5xl md:text-7xl">This path is still being explored.</h1><p className="mx-auto mt-6 max-w-xl text-muted-foreground">The page you are looking for may have moved, changed, or never existed.</p><Button asChild className="mt-8"><Link href="/">Return home</Link></Button></div></section>;
}
