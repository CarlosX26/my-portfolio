import { ProjectCardStyled } from "./styles";
import { iPropsProjectsCard } from "./types";

export const ProjectCard = ({ children, left }: iPropsProjectsCard) => {
  return <ProjectCardStyled left={left}>{children}</ProjectCardStyled>;
};
