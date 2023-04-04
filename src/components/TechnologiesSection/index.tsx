import { TechnologieCard } from "./TechnologieCard"
import { TechnologiesList } from "./TechnologiesList"

import { ContainerStyled } from "../../styles/container"
import { TechnologiesSectionStyled } from "./styles"
import { HeadingStyledOne } from "../../styles/typography"
import { technologiesList } from "../../services/database/technologies"

export const TechnologiesSection = () => {
  return (
    <TechnologiesSectionStyled>
      <ContainerStyled>
        <HeadingStyledOne id="tecnologias">Tecnologias</HeadingStyledOne>
        <TechnologiesList>
          {technologiesList.map(({ name, img, description }) => (
            <TechnologieCard
              key={name}
              name={name}
              img={img}
              description={description}
            />
          ))}
        </TechnologiesList>
      </ContainerStyled>
    </TechnologiesSectionStyled>
  )
}
