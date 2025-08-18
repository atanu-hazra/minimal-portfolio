import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SkillsPreview from "@/components/Sections/SkillsSection/SkillsPreview";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SkillsPreview/>
      <ProjectsSection/>
    </div>
  );
}
