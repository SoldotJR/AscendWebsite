import Link from "next/link";
import { cn } from "@/lib/utils";

export function Breadcrumb({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="rounded-sm hover:opacity-100 focus-ring opacity-80">
                {item.label}
              </Link>
            ) : (
              <span className="opacity-100">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
