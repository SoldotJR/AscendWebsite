"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: readonly { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className={cn("space-y-3", className)}>
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.question}
          value={item.question}
          className="overflow-hidden rounded-[1.25rem] border border-border bg-card"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold md:text-base">
              {item.question}
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 [[data-state=open]_&]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
