"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { mobileExtraLinks, navigation, siteConfig, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function NavLink({
  item,
  className,
  onNavigate,
}: {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasChildren = Boolean(item.children?.length);

  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href ||
        pathname.startsWith(`${item.href}/`) ||
        Boolean(item.children?.some((child) => pathname === child.href));

  useEffect(() => {
    if (!hasChildren) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [hasChildren]);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(className, isActive && "text-primary")}
        onClick={onNavigate}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(className, "inline-flex items-center gap-1", isActive && "text-primary")}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        {item.title}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 pt-2"
            role="menu"
          >
            <div className="min-w-[12rem] overflow-hidden rounded-xl border border-border bg-white py-2 shadow-soft">
              <Link
                href={item.href}
                role="menuitem"
                className={cn(
                  "block px-4 py-2.5 text-sm font-semibold text-[#0B1220] transition hover:bg-[#f3f6fb] hover:text-primary",
                  pathname === item.href && "text-primary"
                )}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                All Programmes
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className={cn(
                    "block px-4 py-2.5 text-sm font-semibold text-[#0B1220] transition hover:bg-[#f3f6fb] hover:text-primary",
                    pathname === child.href && "text-primary"
                  )}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  const navLinkClass =
    "px-2.5 py-2 text-[15px] font-bold text-[#0B1220] transition hover:text-primary xl:px-3";

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white">
        <div className="container-ascend flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="focus-ring relative z-10 flex shrink-0 items-center rounded-md">
            <span className="inline-flex items-center rounded-lg bg-[#0f3d8c] px-3 py-2">
              <Image
                src="/images/brand/logo.png"
                alt={siteConfig.name}
                width={160}
                height={42}
                className="h-8 w-auto object-contain"
                priority
              />
            </span>
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-end gap-1 lg:flex xl:gap-2"
            aria-label="Primary pages"
          >
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} className={navLinkClass} />
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="text-[#0B1220] hover:bg-[#f3f6fb] hover:text-primary lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-md border-l border-border bg-white px-6 pb-10 pt-24 shadow-soft lg:hidden"
          >
            <nav className="flex h-full flex-col gap-1 overflow-y-auto" aria-label="Mobile pages">
              {navigation.map((item) => {
                if (!item.children?.length) {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-lg px-3 py-3 text-lg font-bold text-[#0B1220] transition hover:bg-[#f3f6fb] hover:text-primary",
                        active && "text-primary"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-lg font-bold text-[#0B1220]"
                      aria-expanded={coursesOpen}
                      onClick={() => setCoursesOpen((value) => !value)}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          coursesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {coursesOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 px-2 pb-3">
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-lg px-3 py-2 text-base font-semibold text-[#0B1220] hover:bg-[#f3f6fb] hover:text-primary",
                                pathname === item.href && "text-primary"
                              )}
                              onClick={() => setOpen(false)}
                            >
                              All Programmes
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-3 py-2 text-base font-semibold text-[#0B1220] hover:bg-[#f3f6fb] hover:text-primary",
                                  pathname === child.href && "text-primary"
                                )}
                                onClick={() => setOpen(false)}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
              <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                More
              </p>
              {mobileExtraLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-[#0B1220] hover:bg-[#f3f6fb] hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
