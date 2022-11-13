import { HeadingStyledTwo, TextStyledOne } from "../../../styles/typography";
import { SkillCardStyled } from "./styles";
import { iPropsSkillCard } from "./types";

export const SkillCard = ({ img, name, description }: iPropsSkillCard) => {
  return (
    <SkillCardStyled>
      <img src={img} alt="skill__icon" />
      <HeadingStyledTwo>{name}</HeadingStyledTwo>
      <TextStyledOne fontStyle="italic">{description}</TextStyledOne>
      <div>{description}</div>
    </SkillCardStyled>
  );
};
