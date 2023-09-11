import { BsLinkedin, BsGithub } from "react-icons/bs"
import { ContainerStyled } from "../../styles/container"
import { HeadingStyledThree } from "../../styles/typography"
import { FooterStyled } from "./styles"

export const Footer = () => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <HeadingStyledThree>Always learning news things!</HeadingStyledThree>

        <div>
          <a
            href="https://www.linkedin.com/in/carlos-junio26/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/CarlosX26"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </ContainerStyled>
    </FooterStyled>
  )
}
