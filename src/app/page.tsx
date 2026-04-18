import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSection } from "@/components/problem-section";
import { WorkflowSection } from "@/components/workflow-graphic";
import { Qualifier } from "@/components/qualifier";
import { ConsultingBanner } from "@/components/consulting-banner";
import { Services } from "@/components/services";
import { SprintTimeline } from "@/components/sprint-timeline";
import { Calculator } from "@/components/calculator";
import { SocialProof } from "@/components/social-proof";
import { Consulting } from "@/components/consulting";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <WorkflowSection />
        <Qualifier />
        <ConsultingBanner />
        <Services />
        <SprintTimeline />
        <Calculator />
        <SocialProof />
        <Consulting />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
