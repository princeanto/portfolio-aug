import { Opening } from "@/components/sections/opening";
import { HowIThink } from "@/components/sections/how-i-think";
import { PlatformEvolution } from "@/components/sections/platform-evolution";
import { EvidenceStrip } from "@/components/sections/evidence-strip";
import { Leadership } from "@/components/sections/leadership";
import { Vision } from "@/components/sections/vision";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Opening />
      <HowIThink />
      <PlatformEvolution />
      <EvidenceStrip />
      <Leadership />
      <Vision />
      <Contact />
    </>
  );
}
