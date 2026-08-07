"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  program: z.string().min(1, "Select a program"),
  message: z.string().min(10, "Please share a short message"),
  visit: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "h-11 w-full rounded-[0.9rem] border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function InquiryForm({
  intent = "inquiry",
}: {
  intent?: "inquiry" | "application" | "visit";
}) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      program: "",
      visit: intent === "visit",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setDone(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-[1.75rem] border border-border bg-card p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input className={fieldClass} {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={fieldClass} {...register("email")} />
        </Field>
        <Field label="Phone / Viber / WhatsApp" error={errors.phone?.message}>
          <input className={fieldClass} {...register("phone")} />
        </Field>
        <Field label="Program interest" error={errors.program?.message}>
          <select className={fieldClass} {...register("program")}>
            <option value="">Select a program</option>
            {programs.map((program) => (
              <option key={program.slug} value={program.title}>
                {program.title}
              </option>
            ))}
            <option value="University Counseling">University Counseling</option>
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(fieldClass, "h-auto resize-y py-3")}
          {...register("message")}
        />
      </Field>
      <label className="flex items-center gap-3 text-sm text-muted-foreground">
        <input type="checkbox" className="h-4 w-4 rounded border-border" {...register("visit")} />
        I would like to schedule a campus visit
      </label>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {intent === "application"
          ? "Submit Application Inquiry"
          : intent === "visit"
            ? "Request Campus Visit"
            : "Send Inquiry"}
      </Button>
      {done ? (
        <p className="text-sm text-accent-emerald" role="status">
          Thank you. Our admissions team will respond shortly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2 text-sm">
      <span className="font-medium text-foreground">{label}</span>
      {children}
      {error ? <span className="block text-xs text-red-600 dark:text-red-400">{error}</span> : null}
    </label>
  );
}
