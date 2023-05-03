import { ProjectCardStyled } from "./styles"
import { IPropsProjectsCard } from "./types"

export const ProjectCard = ({ children }: IPropsProjectsCard) => {
  return <ProjectCardStyled>{children}</ProjectCardStyled>
}
