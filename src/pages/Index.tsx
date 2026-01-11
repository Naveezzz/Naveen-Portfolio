import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { CursorGlow } from '../components/CursorGlow';
import { PageTransition } from '../components/PageTransition';
import { LoadingScreen } from '../components/LoadingScreen';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <PageTransition>
        <CursorGlow />
        <Navigation />
        <main className="relative overflow-hidden">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Index;
