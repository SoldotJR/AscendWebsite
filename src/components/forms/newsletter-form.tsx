"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDone(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Email address"
          className="h-11 w-full rounded-full border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          {...register("email")}
        />
        <Button type="submit" disabled={isSubmitting} className="shrink-0">
          Subscribe
        </Button>
      </div>
      {errors.email ? (
        <p className="text-xs text-red-600 dark:text-red-400">{errors.email.message}</p>
      ) : null}
      {done ? (
        <p className="text-xs text-accent-emerald" role="status">
          Thank you — you are on the list.
        </p>
      ) : null}
    </form>
  );
}
