import styled from "styled-components"

export const PresentationSectionStyled = styled.section`
  background: var(--color-brand-2);
  width: 100%;
  position: relative;

  & > img {
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
    position: relative;
    font-size: 80px;
    color: var(--color-heading);
    letter-spacing: 4px;
    white-space: nowrap;
    overflow: hidden;
  }
  & > div > .box-text > p {
    max-width: 520px;
  }
  & > div > .box-text > p > strong {
    color: var(--color-brand-3);
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

    transition: all 0.3s ease;
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

  #robot {
    position: fixed;
    bottom: 16px;
    left: 95%;
    transform: translateX(-95%);
    width: 128px;
    height: 128px;
    cursor: pointer;
  }

  #robot > div ~ div {
    position: absolute;
    top: -24px;
    left: -78px;
    background: #fff;
    color: var(--color-gray-3);
    padding: 4px;
    border-radius: 8px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 8px;

    & > button > svg {
      color: red;
      font-size: 20px;
      /* z-index: 2; */
    }

    & > p {
      width: 84px;
    }

    & > span {
      position: absolute;
      bottom: -12px;
      right: 0;
      width: 0;
      height: 0;
      border-top: 24px solid transparent;
      border-left: 32px solid #fff;
      rotate: 180deg;
    }
  }

  @media (max-width: 868px) {
    & > div {
      flex-direction: column;
      gap: 16px;
      padding-top: 72px;
      padding-bottom: 32px;
    }
    & > div > .box-text {
      gap: 16px;
    }
    & > div > .box-text > h1 {
      font-size: 64px;
    }
  }
  @media (max-width: 668px) {
    & > div > .box-text > h1 {
      font-size: 48px;
    }
  }
  @media (max-width: 468px) {
    & > div > .box-text > h2 {
      font-size: 16px;
    }
    & > div > .box-text > h1 {
      font-size: 40px;
    }
  }
`
