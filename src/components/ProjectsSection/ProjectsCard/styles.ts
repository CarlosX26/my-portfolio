import styled from "styled-components"
import { IPropsProjectCardStyled } from "./types"

export const ProjectCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > video {
    width: 80%;
    height: 536px;
    object-fit: cover;
    object-position: center;
    border-radius: 0px 0px
      ${({ left }: IPropsProjectCardStyled) =>
        left ? "0px 256px" : "256px 0px"};

    align-self: ${({ left }: IPropsProjectCardStyled) =>
      left ? "end" : "unset"};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
  }
  & > div > p {
    width: 70%;
    max-width: 520px;
    line-height: 24px;
    letter-spacing: 2px;
  }
  & > div > a {
    max-width: 136px;
    font-weight: 700;
    font-size: 20px;

    color: var(--color-gray-1);
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: underline;
  }
  @media (max-width: 868px) {
    & > video {
      height: 424px;
    }
  }
  @media (max-width: 668px) {
    & > video {
      height: 320px;
    }
  }
  @media (max-width: 468px) {
    & > video {
      height: 224px;
      border-radius: 0px 0px
        ${({ left }: IPropsProjectCardStyled) =>
          left ? "0px 128px" : "128px 0px"};
    }
  }
`
