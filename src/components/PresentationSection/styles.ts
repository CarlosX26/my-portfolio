import styled from "styled-components"

export const PresentationSectionStyled = styled.section`
  background: var(--color-brand-2);
  width: 100%;
  position: relative;

  .box-info {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    & > div > h1 {
      color: var(--color-heading);
      font-size: 64px;
      font-weight: 900;
    }
    & > div > h2 {
      color: var(--color-heading);
      font-size: 24px;
      font-weight: 700;
    }

    & > .picture-frame {
      rotate: 355deg;
      background-color: var(--color-gray-1);
      padding: 16px;
      border-radius: 8px;
      box-shadow: 5px 5px 3px var(--color-gray-3);
    }

    & > .picture-frame > img {
      object-fit: cover;
      width: 240px;
      height: 240px;
      border-radius: 8px;
    }
  }

  & > div {
    position: relative;
    z-index: 50;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    top: -20px;
    left: -74px;
    width: 120px;
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

  #background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -101;
  }

  @media (max-width: 1020px) {
    .box-info {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
  }

  @media (max-width: 640px) {
    .box-info {
      & > div > h1 {
        font-size: 32px;
      }
      & > div > h2 {
        font-size: 16px;
      }
      & > .picture-frame > img {
        width: 196px;
        height: 196px;
      }
    }
  }
`
