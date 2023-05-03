import styled from "styled-components"

export const ProjectCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 32px;

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

  & > div > .box-links > a {
    max-width: 136px;
    font-weight: 700;
    font-size: 20px;

    color: var(--color-gray-1);
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: underline;
  }
  .box-links {
    display: flex;
    gap: 16px;
  }
`
