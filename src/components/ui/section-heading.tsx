import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="prose-ascend mt-3 text-sm md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
