import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image = "/images/campus/hero.jpg",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-[32rem] items-center overflow-hidden pt-24 md:min-h-[36rem]",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[image:linear-gradient(180deg,rgba(11,18,32,0.72),rgba(11,18,32,0.55)_45%,rgba(11,18,32,0.78))]" />
      </div>
      <div className="container-ascend relative z-10 w-full py-10 md:py-12">
        {breadcrumbs ? <Breadcrumb items={breadcrumbs} className="mb-4 text-white/70" /> : null}
        {eyebrow ? <p className="eyebrow mb-2 text-accent-sky">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-semibold text-[#0B1220] transition hover:-translate-y-0.5"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
