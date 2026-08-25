import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type EvolutionNode = {
  index: string;
  name: string;
  tagline: string;
  problem: string[];
  reasoning: string;
  decision: string;
  tradeoff: string;
  impact: string;
  impactStat?: { stat: string; label: string; note: string };
  callout?: string;
};

const NODES: EvolutionNode[] = [
  {
    index: "01",
    name: "Meridian",
    tagline:
      "A workflow platform that orchestrated identity verification APIs through configurable workflows instead of custom implementations.",
    problem: [
      "The company ran more than a hundred identity verification microservices — PAN, Aadhaar, OCR, face match, GST, and more. Every customer needed a different combination of them, so implementation teams ended up hand-building a new workflow for almost every deal.",
    ],
    reasoning:
      "The constraint wasn't the APIs — it was that composition lived in engineers' heads. As long as assembling a workflow required writing code, every deal was custom by default, no matter how similar it was to the last one. The leverage point wasn't building integrations faster. It was moving composition out of code and into something an implementation team could reason about directly.",
    decision:
      "I designed a visual workflow builder instead of a better internal tool for engineers. That turned the real design problem into making 100+ microservices legible to non-engineers — categorisation, search, information panels, and progressive disclosure that let someone compose a workflow without reading documentation for every API.",
    tradeoff:
      "A visual builder is less expressive than code, by definition. I was trading raw flexibility — anything an engineer could hand-build — for something implementation teams could operate on their own. That only pays off if the builder actually covers the common cases well, because it will never cover all of them.",
    impact:
      "Meridian proved the model worked. That's what made the next question possible: was this actually about identity verification, or was identity verification just the first place we'd used it?",
  },
  {
    index: "02",
    name: "Relay",
    tagline:
      "The evolution of Meridian from an identity verification product into an enterprise workflow orchestration platform.",
    problem: [
      "Meridian worked, which created a different risk: if the orchestration model only ever solved identity verification, it stayed a feature of one product instead of becoming a capability the rest of the company could use.",
    ],
    reasoning:
      "The model underneath Meridian wasn't actually about KYC. It was a generic shape — a sequence of API calls with conditional logic — that identity verification happened to be the first use of. Treating it as identity-specific would have meant rebuilding the same idea from scratch the next time some other team hit the same problem.",
    decision:
      "I stopped designing for one team's problem and redesigned the platform as a company-wide capability — any enterprise product or API could be orchestrated through the same engine, not just KYC services.",
    tradeoff:
      "Generalising meant giving up the identity-specific shortcuts Meridian could safely assume. Defaults that made sense when every workflow was KYC-shaped stopped being safe once any API could be plugged in — the platform had to get more abstract to get more useful, and abstraction has a real comprehension cost for anyone new to it.",
    impact: "",
    impactStat: {
      stat: "75%",
      label: "Reduction in go-live time",
      note: "That wasn't a UI win. It changed how implementation teams actually worked.",
    },
  },
  {
    index: "03",
    name: "Lumen",
    tagline: "A low-code platform built on top of the workflow orchestration engine.",
    problem: [
      "Customers wanted more range than the platform gave them. Some wanted to use the company's own APIs, others wanted to combine them with their own — which meant the platform itself had to become extensible, not just configurable.",
    ],
    reasoning:
      "Configurable and extensible aren't the same thing. A configurable system — choose from options we built — eventually hits a ceiling: the moment a customer needs something outside that set, they're back to filing a custom engineering request, which is exactly what the platform existed to avoid. Adding more configuration options doesn't fix that. Changing what kind of system it is does.",
    decision:
      "I designed Lumen as a low-code layer on the orchestration engine — customers build workflows visually, reuse platform components, and integrate their own APIs without an engineering dependency. I also pushed hard for one design system across the whole platform, so whatever came next could scale on top of it instead of starting over.",
    tradeoff:
      "Extensibility costs control. Once customers can bring their own APIs and assemble their own logic, the platform team can no longer guarantee every workflow in production is well-formed the way a fully configured system could. That's the trade I made deliberately: more range for the customer, less certainty for us.",
    impact:
      "Lumen's architecture is what makes the next stage possible at all — bring-your-own-APIs, a marketplace, AI-assisted generation. None of that works on a platform that only knows how to run its own components.",
  },
];

const SUPPORTING_WORK = [
  {
    name: "Recon 360",
    body: "Defined the product structure before a line of UI shipped, and led the research behind it — that groundwork is what helped secure 20+ clients prelaunch.",
  },
  {
    name: "Alfardan's Alpha Pay",
    body: "Designed the remittance experience for Alfardan's Alpha Pay. It crossed 100K downloads after launch.",
  },
];

export function PlatformEvolution() {
  return (
    <section id="work" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Featured Work"
          title="One workflow engine. Three products. A platform that kept outgrowing its original problem."
          lede="This is the reasoning behind three decisions, not three case studies — what shipped matters less here than why."
        />

        <div className="relative mt-20">
          <div className="absolute left-5 top-0 bottom-0 w-px -translate-x-1/2 bg-border sm:left-6" />

          <div className="space-y-20 sm:space-y-24">
            {NODES.map((node) => (
              <div key={node.index} className="relative flex gap-6 sm:gap-10">
                <Reveal delay={0.05} className="relative z-10 flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-sm font-medium tabular-nums text-foreground sm:h-12 sm:w-12 sm:text-base">
                    {node.index}
                  </div>
                </Reveal>

                <div className="flex-1 pb-2 pt-1">
                  <Reveal>
                    <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      {node.name}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
                      {node.tagline}
                    </p>
                  </Reveal>

                  <div className="mt-6 max-w-2xl space-y-4">
                    {node.problem.map((para, pi) => (
                      <Reveal key={pi} delay={0.08 + pi * 0.04}>
                        <p className="text-[15px] leading-relaxed text-muted-foreground">
                          {para}
                        </p>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">
                        The thinking —{" "}
                      </span>
                      {node.reasoning}
                    </p>
                  </Reveal>

                  <Reveal delay={0.16}>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">
                        The decision —{" "}
                      </span>
                      {node.decision}
                    </p>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">
                        The trade-off —{" "}
                      </span>
                      {node.tradeoff}
                    </p>
                  </Reveal>

                  {node.impact ? (
                    <Reveal delay={0.24}>
                      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">
                          The impact —{" "}
                        </span>
                        {node.impact}
                      </p>
                    </Reveal>
                  ) : null}

                  {node.impactStat ? (
                    <Reveal delay={0.24}>
                      <div className="mt-8 flex max-w-2xl flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
                        <div className="text-4xl font-medium text-[var(--accent-a)] sm:text-5xl">
                          {node.impactStat.stat}
                        </div>
                        <div className="border-border sm:border-l sm:pl-6">
                          <p className="text-sm font-medium text-foreground">
                            {node.impactStat.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {node.impactStat.note}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ) : null}

                  {node.callout ? (
                    <Reveal delay={0.28}>
                      <p className="mt-8 max-w-2xl border-l-2 border-[var(--accent-a)] py-1 pl-5 text-[15px] italic leading-relaxed text-foreground/85">
                        {node.callout}
                      </p>
                    </Reveal>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-border pt-10 sm:mt-24">
            <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Supporting work
            </span>
            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {SUPPORTING_WORK.map((item) => (
                <div key={item.name}>
                  <h4 className="text-[15px] font-medium text-foreground">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
