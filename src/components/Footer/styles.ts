import styled from "styled-components"

export const FooterStyled = styled.footer`
  background-color: var(--color-gray-3);

  & > div {
    min-height: 344px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .box-info > img {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .box-info {
    display: flex;
    gap: 16px;
  }
  .box-info > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .box-info > div > div {
    display: flex;
    gap: 16px;
  }
  .box-info > div > div > a {
    color: var(--color-gray-1);
    font-size: 32px;
  }

  @media (max-width: 868px) {
    & > div {
      flex-direction: column;
      align-items: stretch;
      padding-bottom: 16px;
    }
    .box-info > img {
      display: none;
    }
  }
`
