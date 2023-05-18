import { TechnologieCard } from "./TechnologieCard"

import { ContainerStyled } from "../../styles/container"
import { TechnologiesSectionStyled } from "./styles"
import { HeadingStyledOne } from "../../styles/typography"
import { technologiesList } from "../../services/database/technologies"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Mousewheel } from "swiper"

import "swiper/css"
import "swiper/css/effect-coverflow"

const TechnologiesSection = () => {
  return (
    <TechnologiesSectionStyled>
      <ContainerStyled>
        <HeadingStyledOne id="tecnologias">Tecnologias</HeadingStyledOne>
        <ul>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              450: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            mousewheel={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Mousewheel]}
          >
            {technologiesList.map(({ name, img, experience }) => (
              <SwiperSlide key={name}>
                <TechnologieCard
                  name={name}
                  img={img}
                  experience={experience}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </ContainerStyled>
    </TechnologiesSectionStyled>
  )
}

export default TechnologiesSection
