import Image from "next/image"
import { HeadingStyledTwo, TextStyledOne } from "../../../styles/typography"
import { SkillCardStyled } from "./styles"
import { iPropsSkillCard } from "./types"

export const SkillCard = ({ img, name, description }: iPropsSkillCard) => {
  return (
    <SkillCardStyled>
      <Image src={img} alt="skill__icon" width={96} height={96} />
      <HeadingStyledTwo>{name}</HeadingStyledTwo>
      <TextStyledOne fontStyle="italic">{description}</TextStyledOne>
      <div>{description}</div>
    </SkillCardStyled>
  )
}
