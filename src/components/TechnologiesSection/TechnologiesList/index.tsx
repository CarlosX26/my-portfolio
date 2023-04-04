import { IPropsTechnologiesList } from "./types"
import { TechnologiesListStyled } from "./styles"

export const TechnologiesList = ({ children }: IPropsTechnologiesList) => {
  return <TechnologiesListStyled>{children}</TechnologiesListStyled>
}
