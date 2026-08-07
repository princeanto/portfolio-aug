import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";

const CONTACT_EMAIL = "princeladislas@gmail.com";
const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prince-ladislas/" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionEyebrow>Contact</SectionEyebrow>

        <Reveal delay={0.05}>
          <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            If you&apos;re dealing with a complex platform problem, I&apos;d
            like to hear about it.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[15px] font-medium text-background transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              {CONTACT_EMAIL}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-[15px] font-medium text-foreground transition-colors duration-300 ease-out hover:bg-surface"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        {SOCIAL_LINKS.length > 0 ? (
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        ) : null}

        <div className="mt-20 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Prince. Enterprise Product Designer.</span>
        </div>
      </div>
    </section>
  );
}
