import styled from "styled-components"

export const TechnologiesSectionStyled = styled.section`
  background-color: var(--color-brand-2);

  .swiper-slide {
    width: 296px;
    height: 100%;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 400px) {
    .swiper-slide {
      width: 192px;
      height: 100%;
    }
  }
`
