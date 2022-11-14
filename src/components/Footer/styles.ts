import styled from "styled-components";

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

  .box-email {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .box-email > input {
    min-width: 248px;
    height: 48px;
    border-radius: 8px;
    padding-left: 16px;
  }
  .box-email > input:focus {
    outline: 2px solid var(--color-brand-2);
  }
  .box-email > textarea:focus {
    outline: 2px solid var(--color-brand-2);
  }
  .box-email > textarea {
    min-width: 248px;
    height: 48px;
    border-radius: 8px;
    padding-left: 16px;
    padding-top: 16px;
  }
  .box-email > button {
    height: 48px;
    border-radius: 8px;
    background: var(--color-brand-2);
    color: var(--color-gray-1);
    cursor: pointer;
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
`;
