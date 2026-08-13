export const STAGE_CHAIN = [
  { name: "IDFlow", desc: "Compose verification flows visually" },
  { name: "M2P Connect", desc: "The engine, generalised and governed" },
  { name: "Wand", desc: "Where the data finally became readable" },
] as const;

export const SCOPING_ROOM = [
  "Regional CEO",
  "Product",
  "Development head",
  "Implementation head",
  "Sales head",
  "Design — me",
] as const;

export const RESEARCH_METHODS = [
  { label: "Taxonomy", value: "Card sorting" },
  { label: "Node system", value: "Information architecture" },
  { label: "Through build", value: "Usability testing" },
  { label: "Pre-launch", value: "Beta observation" },
] as const;

export const RESEARCH_CATEGORIES = [
  "Trigger",
  "KYC",
  "AML",
  "AI",
  "Integrations",
  "Files",
  "Time",
  "Database",
  "Communications",
] as const;

export type Decision = { index: string; title: string; body: string };

export const DECISIONS: Decision[] = [
  {
    index: "01",
    title: "Progressive disclosure",
    body: "Hovering any node or category gives a two-line explanation; configuration opens in a right-side panel. Expose everything at once and the builder becomes the form it was replacing.",
  },
  {
    index: "02",
    title: "Custom APIs — leave a door open",
    body: "A space to add your own endpoint with its keys and credentials, merged into the same flow and returned through the same single call. Some client requirements can never be expressed as pre-built microservices. Rather than stretch the node system to cover them, I left a door open.",
  },
  {
    index: "03",
    title: "Version history, unasked for",
    body: "Published and draft tracks, numbered versions with author and timestamp, restore and publish. Proposed in the scoping room before anyone requested it — in regulated finance, knowing who changed what, when and why isn't a convenience, it's the difference between a platform an auditor accepts and one they don't.",
  },
];

export const WALLS = [
  {
    tag: "Wall 01",
    title: "They couldn't find their own errors",
    body: "A flow would fail, the output would be wrong, and there was no way to tell which of twelve nodes caused it. For a product whose entire promise is making logic visible, the failure state was invisible.",
  },
  {
    tag: "Wall 02",
    title: "They couldn't build the screens",
    body: "A verification journey isn't only logic — it's the pages the end customer sees. The flow could be composed, but the interface around it still needed a separate build, which put a team back in the loop.",
  },
];

export const FIX_ITEMS = [
  "Two error levels — field and node — because they fail for different reasons and need different fixes",
  'Coded errors in plain English: not "404", but which API trigger has no handler for it',
  "The failing node highlighted on canvas, so location is immediate",
  "A checklist of which cases are handled and which aren't",
  "Re-validate in place, so fixing doesn't mean starting over",
  "A UI builder, so screens became part of the flow rather than a project alongside it",
];

export const IMPACT_METRICS = [
  { label: "Implementation Impact", value: "80%", caption: "Faster client go-live, against the previous cross-functional baseline" },
  { label: "Platform Impact", value: "100+", caption: "Microservices orchestrated behind a single API call" },
  { label: "Adoption", value: "20+", caption: "Enterprise clients supported on the platform" },
  { label: "Team Efficiency", value: "2–3 hrs", caption: "Per client, per supporting team — down from weeks each" },
] as const;

export const WHATS_NEXT = ["Bring Your Own APIs", "Marketplace", "AI Workflow Assistant"] as const;
