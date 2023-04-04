import { iPropsSkillList } from "./types"
import { SkillListStyled } from "./styles"

export const SkillList = ({ children }: iPropsSkillList) => {
  return <SkillListStyled>{children}</SkillListStyled>
}
