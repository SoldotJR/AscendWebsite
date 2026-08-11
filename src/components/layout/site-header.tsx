"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { mobileExtraLinks, navigation, siteConfig, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const searchSuggestions = [
  { label: "IGCSE", href: "/academics/igcse" },
  { label: "IAL", href: "/academics/a-levels" },
  { label: "OSSD", href: "/academics/ossd" },
  { label: "GED", href: "/academics/ged" },
  { label: "Pre-IGCSE", href: "/academics/pre-igcse" },
  { label: "All Courses", href: "/academics" },
  { label: "Clubs & Activities", href: "/campus-life" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

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
        className={className}
        onClick={onNavigate}
        data-active={isActive || undefined}
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
        className={cn(className, "inline-flex items-center gap-1")}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        data-active={isActive || undefined}
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
            <div className="min-w-[11rem] overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-soft">
              <Link
                href={item.href}
                role="menuitem"
                className={cn(
                  "block rounded-xl px-3.5 py-2 text-sm font-semibold text-[#0B1220] transition",
                  "hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]",
                  pathname === item.href &&
                    "bg-[var(--nav-soft-blue)] text-[var(--nav-soft-blue-text)]"
                )}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                All Courses
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className={cn(
                    "block rounded-xl px-3.5 py-2 text-sm font-semibold text-[#0B1220] transition",
                    "hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]",
                    pathname === child.href &&
                      "bg-[var(--nav-soft-blue)] text-[var(--nav-soft-blue-text)]"
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setCoursesOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const filtered = searchSuggestions.filter((item) =>
    query ? item.label.toLowerCase().includes(query.toLowerCase()) : true
  );

  const navLinkClass = (active: boolean) =>
    cn(
      "focus-ring rounded-xl px-3.5 py-2 text-sm font-semibold text-[#0B1220] transition duration-300",
      "hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]",
      "data-[active]:bg-[var(--nav-soft-blue)] data-[active]:text-[var(--nav-soft-blue-text)]",
      active && "bg-[var(--nav-soft-blue)] text-[var(--nav-soft-blue-text)]"
    );

  return (
    <>
      <header
        className={cn(
          "site-header fixed inset-x-0 top-0 z-50",
          scrolled || open ? "is-scrolled py-3" : "py-4"
        )}
      >
        <div className="container-ascend flex items-center justify-between gap-3">
          <Link href="/" className="focus-ring relative z-10 flex shrink-0 items-center gap-3 rounded-md">
            <Image
              src="/images/brand/logo.png"
              alt={siteConfig.name}
              width={160}
              height={42}
              className="h-9 w-auto object-contain transition duration-300 drop-shadow-sm"
              priority
            />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <nav
            className="hidden items-center gap-1.5 rounded-2xl bg-white p-1.5 shadow-soft lg:flex dark:bg-white"
            aria-label="Primary pages"
          >
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} className={navLinkClass(false)} />
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <div ref={searchRef} className="relative flex items-center">
              <div
                className={cn(
                  "flex items-center overflow-hidden rounded-full border transition-all duration-300 ease-out",
                  searchOpen
                    ? "w-[min(18rem,42vw)] border-border bg-white pl-3 pr-1 shadow-soft"
                    : "w-10 border-transparent bg-white/90"
                )}
              >
                <Search
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition",
                    !searchOpen && "hidden"
                  )}
                />
                <input
                  ref={inputRef}
                  id="site-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages..."
                  className={cn(
                    "h-10 w-full bg-transparent px-2 text-sm text-foreground outline-none transition-opacity duration-200",
                    searchOpen ? "opacity-100" : "pointer-events-none w-0 px-0 opacity-0"
                  )}
                  aria-label="Search site"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={searchOpen ? "Close search" : "Open search"}
                  aria-expanded={searchOpen}
                  className="text-foreground hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]"
                  onClick={() => setSearchOpen((value) => !value)}
                >
                  {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                </Button>
              </div>

              <AnimatePresence>
                {searchOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full z-50 mt-2 w-[min(20rem,85vw)] overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
                  >
                    <div className="max-h-64 overflow-y-auto py-2">
                      {filtered.length ? (
                        filtered.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]"
                            onClick={() => {
                              setSearchOpen(false);
                              setQuery("");
                            }}
                          >
                            {item.label}
                          </Link>
                        ))
                      ) : (
                        <p className="px-4 py-3 text-sm text-muted-foreground">No matching pages</p>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <ThemeToggle className="rounded-full bg-white text-foreground hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]" />
            <Button asChild className="hidden sm:inline-flex" size="sm">
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white text-foreground hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-md border-l border-border bg-background px-6 pb-10 pt-24 shadow-soft lg:hidden"
          >
            <nav className="flex h-full flex-col gap-1 overflow-y-auto" aria-label="Mobile pages">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Pages
              </p>
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
                        "rounded-xl bg-white px-3 py-3 text-lg font-medium text-[#0B1220] transition",
                        "hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]",
                        active && "bg-[var(--nav-soft-blue)] text-[var(--nav-soft-blue-text)]"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="rounded-xl bg-white">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-lg font-medium text-[#0B1220]"
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
                                "block rounded-lg px-3 py-2 text-base text-[#0B1220]",
                                "hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]",
                                pathname === item.href &&
                                  "bg-[var(--nav-soft-blue)] text-[var(--nav-soft-blue-text)]"
                              )}
                              onClick={() => setOpen(false)}
                            >
                              All Courses
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-3 py-2 text-base text-[#0B1220]",
                                  "hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]",
                                  pathname === child.href &&
                                    "bg-[var(--nav-soft-blue)] text-[var(--nav-soft-blue-text)]"
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
                  className="rounded-xl bg-white px-3 py-2.5 text-base text-[#0B1220] hover:bg-[var(--nav-soft-blue)] hover:text-[var(--nav-soft-blue-text)]"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-6" size="lg">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
