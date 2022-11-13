import styled from "styled-components";
import { iPropsProjectCardStyled } from "./types";

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
      ${({ left }: iPropsProjectCardStyled) =>
        left ? "0px 256px" : "256px 0px"};

    align-self: ${({ left }: iPropsProjectCardStyled) =>
      left ? "end" : "unset"};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
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
`;
