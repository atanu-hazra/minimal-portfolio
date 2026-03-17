import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SkillsPreview from "@/components/Sections/SkillsSection/SkillsPreview";
import ExperienceSection from "@/components/Sections/ExperienceSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SkillsPreview/>

        <ExperienceSection/>
      <div className="bg-[#121f2b]">
        <ProjectsSection/>
      </div>
    </div>
  );
}