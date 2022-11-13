import { iSkillsList } from "./types";
import htmlIcon from "../../assets/img/icons8-html-5.svg";
import cssIcon from "../../assets/img/icons8-css3.svg";
import javaScriptIcon from "../../assets/img/icons8-javascript.svg";
import typeScriptIcon from "../../assets/img/icons8-typescript.svg";
import reactIcon from "../../assets/img/icons8-reagir.svg";
import reactNativeIcon from "../../assets/img/icon-native.png";
import tailwindIcon from "../../assets/img/icon-tailwindcss.svg";
import styledIcon from "../../assets/img/icon-styled.svg";
import figmaIcon from "../../assets/img/icons8-figma.svg";
import gitIcon from "../../assets/img/icons8-git.svg";

export const skillsList: iSkillsList[] = [
  {
    name: "HTML",
    img: htmlIcon,
    description:
      "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
  },
  {
    name: "CSS",
    img: cssIcon,
    description:
      "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.",
  },
  {
    name: "JAVASCRIPT",
    img: javaScriptIcon,
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  },
  {
    name: "TYPESCRIPT",
    img: typeScriptIcon,
    description:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
  },
  {
    name: "REACT",
    img: reactIcon,
    description:
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  },
  {
    name: "REACT NATIVE",
    img: reactNativeIcon,
    description:
      "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa",
  },
  {
    name: "TAILWIND CSS",
    img: tailwindIcon,
    description:
      "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
  },
  {
    name: "STYLED COMPONENTS",
    img: styledIcon,
    description:
      "Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web.",
  },
  {
    name: "FIGMA",
    img: figmaIcon,
    description:
      "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.",
  },
  {
    name: "GIT",
    img: gitIcon,
    description:
      "É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
  },
];
