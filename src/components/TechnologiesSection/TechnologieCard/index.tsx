import Image from "next/image"
import { HeadingStyledThree, TextStyledOne } from "../../../styles/typography"
import { TechnologieCardStyled } from "./styles"
import { IPropsTechnologieCard } from "./types"

export const TechnologieCard = ({
  img,
  name,
  experience,
}: IPropsTechnologieCard) => {
  return (
    <TechnologieCardStyled>
      <Image src={img} alt="skill__icon" width={96} height={96} />
      <HeadingStyledThree>{name}</HeadingStyledThree>
      <TextStyledOne>Exp: {experience}</TextStyledOne>
    </TechnologieCardStyled>
  )
}
