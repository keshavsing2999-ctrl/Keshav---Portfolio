import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandRibbon } from './components/BrandRibbon';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { usePortfolio } from './hooks/usePortfolio';

function App() {
  const data = usePortfolio();

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-gray-200 antialiased font-family-kanit selection:bg-purple-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header Area */}
      <HeroSection profile={data.profile} />

      {/* Collaborated Brand Ribbon */}
      <BrandRibbon />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-12">
        {/* About Section */}
        <AboutSection bio={data.profile.bio} yearsOfExperience={data.profile.yearsOfExperience} />

        {/* Experience Section */}
        <ExperienceSection experience={data.experience} />

        {/* Services Section */}
        <ServicesSection skills={data.skills} />

        {/* Projects Section */}
        <ProjectsSection projects={data.projects} />

        {/* Testimonials Section */}
        <TestimonialsSection testimonials={data.testimonials} />
      </main>

      {/* Footer & Contacts */}
      <Footer profile={data.profile} />
    </div>
  );
}

export default App;
