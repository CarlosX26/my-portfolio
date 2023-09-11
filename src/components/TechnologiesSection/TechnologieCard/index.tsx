import Image from "next/image"
import { HeadingStyledThree } from "../../../styles/typography"
import { TechnologieCardStyled } from "./styles"
import { IPropsTechnologieCard } from "./types"

export const TechnologieCard = ({ img, name }: IPropsTechnologieCard) => {
  return (
    <TechnologieCardStyled>
      <Image src={img} alt="skill__icon" width={96} height={96} />
      <HeadingStyledThree>{name}</HeadingStyledThree>
    </TechnologieCardStyled>
  )
}
