import { Header } from "../../components/Header";
import { PresentationSection } from "../../components/PresentationSection";
import { SkillsSection } from "../../components/SkillsSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <PresentationSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};
