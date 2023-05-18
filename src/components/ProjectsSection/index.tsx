import { ContainerStyled } from "../../styles/container"
import { HeadingStyledOne } from "../../styles/typography"
import { ProjectList } from "./ProjectsList"
import { ProjectsSectionStyled } from "./styles"

const ProjectsSection = () => {
  return (
    <ProjectsSectionStyled>
      <ContainerStyled>
        <HeadingStyledOne id="projetos">Projetos</HeadingStyledOne>
      </ContainerStyled>

      <ProjectList />
    </ProjectsSectionStyled>
  )
}

export default ProjectsSection
