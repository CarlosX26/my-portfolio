import styled from "styled-components"

export const FooterStyled = styled.footer`
  background-color: var(--color-gray-3);

  & > div {
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & > div > div {
    display: flex;
    gap: 16px;
  }
  & > div > div > a {
    color: var(--color-gray-1);
    font-size: 32px;
  }
`
