"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

// The "reimagined" showcase page is a full-bleed, immersive experiment
// with its own chrome -- it opts out of the shared site header.
const HEADERLESS_ROUTES = ["/platform-evolution/reimagined"];

export function SiteHeader() {
  const pathname = usePathname();
  if (HEADERLESS_ROUTES.some((route) => pathname?.startsWith(route))) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-[13px] font-semibold text-background">
            P
          </span>
          <span className="text-[15px] font-medium tracking-tight text-foreground">
            Prince
          </span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden text-[14px] font-medium text-foreground sm:block"
          >
            Let&apos;s talk
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
