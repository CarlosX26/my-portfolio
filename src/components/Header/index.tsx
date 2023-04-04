import { useEffect, useState } from "react"
import { ContainerStyled } from "../../styles/container"
import { HeadingStyledOne } from "../../styles/typography"
import { HeaderStyled } from "./styles"

export const Header = () => {
  const [background, setBackground] = useState(false)

  const setHeaderBackground = () => {
    if (window.scrollY > 72) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setHeaderBackground)
  }, [])

  return (
    <HeaderStyled background={background}>
      <ContainerStyled>
        <HeadingStyledOne>{"<Carlos Jr./>"}</HeadingStyledOne>

        <nav>
          <a href="#skills">
            skills
            <div></div>
          </a>
          <a href="#projetos">
            projetos
            <div></div>
          </a>
          <a href="#contato">
            contato
            <div></div>
          </a>
        </nav>
      </ContainerStyled>
    </HeaderStyled>
  )
}
