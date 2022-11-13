import { ContainerStyled } from "../../styles/container";
import { HeadingStyledOne } from "../../styles/typography";
import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
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
  );
};
