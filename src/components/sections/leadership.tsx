import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const PILLARS = [
  {
    title: "Mentoring",
    body: "I teach principles, not answers. When a junior designer asks how to build something, I don't solve it for them — I explain the thinking underneath it, so the next problem is theirs to solve alone.",
  },
  {
    title: "Feedback style",
    body: "I'm direct, and I expect the same back. Before anyone brings me a review, I ask two questions first: did you solve the problem, and are you satisfied with the solution. Most of what would've been feedback answers itself — what's left is worth an actual conversation.",
  },
  {
    title: "Cross-functional collaboration",
    body: "On Relay, design sat between regional leadership, product management, solution engineering, sales operations, and QA. The job wasn't the screens — it was translating business strategy into something an implementation team could actually use.",
  },
  {
    title: "Community — Madrasters",
    body: "I've been part of Madrasters for 3+ years and serve as an ambassador for the community. I've organized 15+ events — generative AI workshops, UI/UX sessions, product and design meetups. Learning shouldn't be locked inside one company, so I spend time building it in the open.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Leadership"
          title="Design work doesn't stop at the deliverable."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
