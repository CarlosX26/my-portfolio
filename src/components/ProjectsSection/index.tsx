import { ContainerStyled } from "../../styles/container";
import { HeadingStyledOne } from "../../styles/typography";
import { ProjectList } from "./ProjectsList";
import { ProjectsSectionStyled } from "./styles";

export const ProjectsSection = () => {
  return (
    <ProjectsSectionStyled>
      <ContainerStyled>
        <HeadingStyledOne id="projetos">Projetos</HeadingStyledOne>
      </ContainerStyled>

      <ProjectList />
    </ProjectsSectionStyled>
  );
};
