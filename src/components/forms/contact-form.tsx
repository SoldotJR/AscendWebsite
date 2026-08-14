"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  message: z.string().min(10, "Please share a short message"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "h-12 w-full rounded-lg border-0 bg-[#f4f6f9] px-4 text-sm text-[#0B1220] outline-none ring-1 ring-transparent transition placeholder:text-[#8a97ab] focus:bg-white focus:ring-2 focus:ring-primary";

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setDone(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Field label="Name" error={errors.name?.message}>
        <input className={fieldClass} placeholder="Enter your name" {...register("name")} />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          className={fieldClass}
          placeholder="Enter your email"
          {...register("email")}
        />
      </Field>
      <Field label="Phone number" error={errors.phone?.message}>
        <input
          className={fieldClass}
          placeholder="Enter your phone number"
          {...register("phone")}
        />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={6}
          className={cn(fieldClass, "h-auto resize-y py-3")}
          placeholder="Enter your message"
          {...register("message")}
        />
      </Field>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {done ? (
        <p className="text-sm text-accent-emerald" role="status">
          Thank you. We will get back to you shortly.
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
      <span className="font-semibold text-[#0B1220]">{label}</span>
      {children}
      {error ? <span className="block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
