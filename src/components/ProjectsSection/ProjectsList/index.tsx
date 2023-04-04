import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

import { ProjectCard } from "../ProjectsCard"
import { projectsList } from "../../../services/database/projects"

import { ContainerStyled } from "../../../styles/container"
import { HeadingStyledTwo, TextStyledOne } from "../../../styles/typography"
import { ProjectListStyled } from "./styles"

export const ProjectList = () => {
  return (
    <ProjectListStyled>
      {projectsList.map((project, index) =>
        index % 2 === 0 ? (
          <motion.div
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: 0 }}
            exit={{ translateX: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={project.name}
          >
            <ProjectCard>
              <video src={project.video} autoPlay muted loop playsInline />

              <ContainerStyled>
                <HeadingStyledTwo>{project.name}</HeadingStyledTwo>
                <TextStyledOne color="--color-gray-2" fontStyle="italic">
                  {project.description}
                </TextStyledOne>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <span>ver projeto</span>
                  <FaArrowRight />
                </a>
              </ContainerStyled>
            </ProjectCard>
          </motion.div>
        ) : (
          <motion.div
            initial={{ translateX: "100%" }}
            whileInView={{ translateX: 0 }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={project.name}
          >
            <ProjectCard left={true}>
              <video src={project.video} autoPlay muted loop playsInline />
              <ContainerStyled>
                <HeadingStyledTwo>{project.name}</HeadingStyledTwo>
                <TextStyledOne color="--color-gray-2" fontStyle="italic">
                  {project.description}
                </TextStyledOne>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <span>ver projeto</span>
                  <FaArrowRight />
                </a>
              </ContainerStyled>
            </ProjectCard>
          </motion.div>
        )
      )}
    </ProjectListStyled>
  )
}
