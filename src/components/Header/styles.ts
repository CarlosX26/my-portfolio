import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  inset: 0;
  z-index: 101;

  height: 72px;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  & > div > nav {
    display: flex;
    gap: 32px;
  }

  & > div > nav > a {
    color: var(--color-text);
    font-weight: 700;
  }
  & > div > nav > a > div {
    transition: all 0.3s;
    width: 0px;
    height: 2px;
  }

  & > div > nav > a:hover > div {
    background: #fff;
    width: 100%;
  }

  @media (max-width: 768px) {
    & > div > nav {
      display: none;
    }
  }
`;
