import { motion } from "framer-motion"

import { ProjectCard } from "../ProjectsCard"
import { projectsList } from "../../../services/database/projects"

import { ContainerStyled } from "../../../styles/container"
import { HeadingStyledTwo, TextStyledOne } from "../../../styles/typography"
import { ProjectListStyled } from "./styles"

export const ProjectList = () => {
  return (
    <ProjectListStyled>
      {projectsList.map((project, index) => {
        const indexEven = index % 2 === 0

        return (
          <motion.div
            initial={{ translateX: indexEven ? "-100%" : "100%" }}
            whileInView={{ translateX: 0 }}
            exit={{ translateX: indexEven ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={project.name}
          >
            <ProjectCard left={!indexEven}>
              <video
                poster="/assets/img/poster-video.webp"
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
              />
              <ContainerStyled>
                <HeadingStyledTwo>{project.name}</HeadingStyledTwo>
                <TextStyledOne color="--color-gray-2" fontStyle="italic">
                  {project.description}
                </TextStyledOne>
                <div className="box-links">
                  {project.links.map((link) => (
                    <a key={link.ref} href={link.ref} target="_blank">
                      {link.name}
                    </a>
                  ))}
                </div>
              </ContainerStyled>
            </ProjectCard>
          </motion.div>
        )
      })}
    </ProjectListStyled>
  )
}
