import { TechnologieCard } from "./TechnologieCard"

import { ContainerStyled } from "../../styles/container"
import { TechnologiesSectionStyled } from "./styles"
import { HeadingStyledOne } from "../../styles/typography"
import { technologiesList } from "../../services/database/technologies"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Mousewheel, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export const TechnologiesSection = () => {
  return (
    <TechnologiesSectionStyled>
      <ContainerStyled>
        <HeadingStyledOne id="tecnologias">Tecnologias</HeadingStyledOne>
        <ul>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            mousewheel={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Mousewheel, Pagination]}
            className="mySwiper"
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
