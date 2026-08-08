export type Stage = {
  index: string;
  name: string;
  why: string;
  whatChanged: string;
  whyNext: string;
  decision: string;
  reason: string;
  tradeoff: string;
  impact: string;
};

export const STAGES: Stage[] = [
  {
    index: "01",
    name: "IDFlow",
    why: "M2P ran 100+ identity verification microservices — PAN, Aadhaar, OCR, face match, GST, and more — and every customer needed a different combination, so implementation teams hand-built a new workflow for almost every deal.",
    whatChanged: "Composition moved out of code and into a visual workflow builder that non-engineers could operate directly.",
    whyNext: "IDFlow proved the orchestration model worked — which raised the question of whether it was actually about identity verification, or just happened to start there.",
    decision: "Categorised 100+ microservices into a visual workflow builder.",
    reason: "Composition lived in engineers' heads — every deal was custom by default, no matter how similar it was to the last one.",
    tradeoff: "Less expressive than code, by definition. Only pays off if the builder covers the common cases well — it will never cover all of them.",
    impact: "Non-engineers could compose a workflow without reading documentation for every API.",
  },
  {
    index: "02",
    name: "M2P Connect",
    why: "IDFlow worked, which created a different risk: if the orchestration model only ever solved identity verification, it stayed a feature of one product instead of a capability the rest of the company could use.",
    whatChanged: "The platform was redesigned as a company-wide capability — any enterprise product or API could be orchestrated through the same engine, not just KYC services.",
    whyNext: "Customers immediately wanted more range than a generalized-but-fixed platform could give them.",
    decision: "Generalised the orchestration engine beyond identity verification.",
    reason: "The model underneath IDFlow was a generic shape — a sequence of API calls with conditional logic — that identity verification happened to be the first use of.",
    tradeoff: "Lost the identity-specific shortcuts IDFlow could safely assume. The platform had to get more abstract to get more useful, and abstraction has a real comprehension cost for anyone new to it.",
    impact: "75% reduction in go-live time for standard workflow implementations.",
  },
  {
    index: "03",
    name: "Wand",
    why: "Some customers wanted to use M2P's own APIs, others wanted to combine them with their own — the platform needed to become extensible, not just configurable.",
    whatChanged: "A low-code layer on top of the orchestration engine let customers build workflows visually, reuse platform components, and integrate their own APIs without an engineering dependency — built on one unified design system.",
    whyNext: "An extensible platform is the precondition for a marketplace, not the end state.",
    decision: "Built a low-code layer plus one unified design system across the whole platform.",
    reason: "Configurable systems hit a ceiling — the moment a customer needs something outside the option set, they're back to filing a custom engineering request. Extending what kind of system it is was the only way past that.",
    tradeoff: "Less control over what customers build. The platform team can no longer guarantee every workflow in production is well-formed the way a fully configured system could.",
    impact: "Unlocked bring-your-own-API and marketplace-style extensibility as the platform's next stage.",
  },
];

export const IMPACT_METRICS = [
  { label: "Platform Impact", value: "100+", caption: "APIs orchestrated into reusable workflows" },
  { label: "Implementation Impact", value: "75%", caption: "Reduction in go-live time, M2P Connect" },
  { label: "Adoption", value: "20+", caption: "Enterprise clients supported on the platform" },
  { label: "Customer Impact", value: "Now viable", caption: "Smaller customers — reduced implementation effort made them worth onboarding" },
] as const;
