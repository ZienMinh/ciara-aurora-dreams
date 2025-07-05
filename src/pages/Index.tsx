import AuroraBackground from '@/components/AuroraBackground';
import HeroSection from '@/components/HeroSection';
import Hero3DSection from '@/components/Hero3DSection';
import SkillsSection from '@/components/SkillsSection';
import WorkspaceSection from '@/components/WorkspaceSection';
import HobbiesSection from '@/components/HobbiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AuroraBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <Hero3DSection />
        <SkillsSection />
        <WorkspaceSection />
        <HobbiesSection />
        
        {/* Footer */}
        <footer className="py-12 text-center border-t border-white/10">
          <div className="glass-card inline-block px-8 py-4 rounded-full border border-white/10">
            <p className="text-muted-foreground">
              Made with 💖 and lots of ☕ by Ciara
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;