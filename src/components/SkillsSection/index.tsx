import { SkillCard } from "./SkillCard";
import { SkillList } from "./SkillList";

import { ContainerStyled } from "../../styles/container";
import { SkillsSectionStyled } from "./styles";
import { HeadingStyledOne } from "../../styles/typography";
import { skillsList } from "../../services/database/skills";

export const SkillsSection = () => {
  return (
    <SkillsSectionStyled>
      <ContainerStyled>
        <HeadingStyledOne id="skills">Skills</HeadingStyledOne>
        <SkillList>
          {skillsList.map(({ name, img, description }) => (
            <SkillCard
              key={name}
              name={name}
              img={img}
              description={description}
            />
          ))}
        </SkillList>
      </ContainerStyled>
    </SkillsSectionStyled>
  );
};
