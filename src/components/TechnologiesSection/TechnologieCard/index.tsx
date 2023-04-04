import Image from "next/image"
import { HeadingStyledTwo, TextStyledOne } from "../../../styles/typography"
import { TechnologieCardStyled } from "./styles"
import { IPropsTechnologieCard } from "./types"

export const TechnologieCard = ({
  img,
  name,
  description,
}: IPropsTechnologieCard) => {
  return (
    <TechnologieCardStyled>
      <Image src={img} alt="skill__icon" width={96} height={96} />
      <HeadingStyledTwo>{name}</HeadingStyledTwo>
      <TextStyledOne fontStyle="italic">{description}</TextStyledOne>
      <div>{description}</div>
    </TechnologieCardStyled>
  )
}
