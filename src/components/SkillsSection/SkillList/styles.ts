import styled from "styled-components";

export const SkillListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px 24px;
  margin-top: 80px;
  margin-bottom: 32px;

  @media (max-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
