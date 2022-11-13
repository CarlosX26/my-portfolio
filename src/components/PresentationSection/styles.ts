import styled from "styled-components";

export const PresentationSectionStyled = styled.section`
  background: var(--color-brand-2);
  width: 100%;
  position: relative;

  & > video {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.3);
  }

  & > div {
    position: relative;
    z-index: 50;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > .box-text {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  & > div > .box-text > h2 {
    letter-spacing: 4px;
  }
  & > div > .box-text > h1 {
    font-size: 80px;
    color: var(--color-heading);
    letter-spacing: 4px;
  }
  & > div > .box-text > p {
    max-width: 520px;
  }

  & > div > .box-img > img {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  & > div > .box-scroll-icon {
    cursor: pointer;
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);

    border: 1px solid #999999;
    border-radius: 50%;
  }

  & > div > .box-scroll-icon > div {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  & > div > .box-scroll-icon > div > svg {
    font-size: 24px;
    color: var(--color-gray-1);
  }
  & > div > .box-scroll-icon > p {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
