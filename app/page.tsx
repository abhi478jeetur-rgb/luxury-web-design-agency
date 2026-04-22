import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StartSection } from "@/components/start-section";
import { FeaturesChess } from "@/components/features-chess";
import { FeaturesGrid } from "@/components/features-grid";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CtaFooter } from "@/components/cta-footer";
import { SectionContainer } from "@/components/ui/section-container";

import { AboutSection } from "@/components/about-section";
import { FAQ } from "@/components/faq";

export default function Page() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/30 selection:text-white overflow-x-hidden">
      <div className="relative z-10 w-full">
        <AnnouncementBar />
        <Navbar />
        
        <Hero />
        
        <div className="bg-black w-full">
          <SectionContainer>
            <StartSection />
          </SectionContainer>

          <SectionContainer id="about">
            <AboutSection />
          </SectionContainer>
          
          <SectionContainer id="process">
            <FeaturesChess />
          </SectionContainer>
          
          <SectionContainer id="services">
            <FeaturesGrid />
          </SectionContainer>
          
          <SectionContainer id="work">
            <Stats />
          </SectionContainer>
          
          <SectionContainer>
            <Testimonials />
          </SectionContainer>
          
          <SectionContainer>
            <FAQ />
          </SectionContainer>
          
          <SectionContainer id="pricing">
            <CtaFooter />
          </SectionContainer>
        </div>
      </div>
    </main>
  );
}
