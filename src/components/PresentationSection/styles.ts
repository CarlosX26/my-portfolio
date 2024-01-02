import styled from "styled-components"

export const PresentationSectionStyled = styled.section`
  background: var(--color-brand-2);
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 72px;
  padding-bottom: 16px;
  display: flex;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & > div > .box-info {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

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

    & > div > p {
      max-width: 664px;
      letter-spacing: 1px;
    }

    & > .picture-frame {
      width: 240px;
      height: 240px;
      background-color: var(--color-gray-1);
      padding: 16px;
      border-radius: 256px;
      box-shadow: 5px 5px 3px var(--color-gray-3);
    }

    & > .picture-frame > img {
      object-fit: cover;
      border-radius: 8px;
    }
  }

  #robot {
    position: fixed;
    bottom: 16px;
    left: 95%;
    transform: translateX(-95%);
    width: 128px;
    height: 128px;
    cursor: pointer;
    z-index: 101;
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

  @media (max-width: 1050px) {
    .box-info {
      flex-direction: column-reverse;
      align-items: center;

      & > .picture-frame {
        margin-bottom: 32px;
      }
    }
  }

  @media (max-width: 640px) {
    & > div > .box-info {
      & > div > h1 {
        font-size: 40px;
      }
      & > div > h2 {
        font-size: 16px;
      }

      & > .picture-frame,
      & > .picture-frame > img {
        width: 192px;
        height: 192px;
      }
    }
  }
  @media (max-width: 420px) {
    & > div > .box-info {
      & > div > h1 {
        font-size: 24px;
      }
    }
  }
`
