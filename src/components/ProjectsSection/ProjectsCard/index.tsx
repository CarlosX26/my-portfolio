import { ProjectCardStyled } from "./styles"
import { IPropsProjectsCard } from "./types"

export const ProjectCard = ({ children, left }: IPropsProjectsCard) => {
  return <ProjectCardStyled left={left}>{children}</ProjectCardStyled>
}
