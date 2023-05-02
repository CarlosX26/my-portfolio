import { BsLinkedin, BsGithub } from "react-icons/bs"
import { ContainerStyled } from "../../styles/container"
import { HeadingStyledThree, HeadingStyledTwo } from "../../styles/typography"
import { FooterStyled } from "./styles"

export const Footer = () => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <div className="box-info">
          <div>
            <HeadingStyledTwo>Eu sou Carlos Junio</HeadingStyledTwo>
            <HeadingStyledThree>Always news things!</HeadingStyledThree>
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
          </div>
        </div>
      </ContainerStyled>
    </FooterStyled>
  )
}
