import { iProjectsList } from "./types";
import pandaCookingDemo from "../../assets/video/panda-cooking-demo.mp4";
import kenzieHubDemo from "../../assets/video/kenzie-hub-demo.mp4";
import spotifyCloneDemo from "../../assets/video/spotify-demo.mp4";
import burguerKenzieDemo from "../../assets/video/kenzie-burguer-demo.mp4";
import rockPaperScissorsDemo from "../../assets/video/rock-paper-scissor-demo.mp4";

export const projectsList: iProjectsList[] = [
  {
    name: "Panda Cooking",
    video: pandaCookingDemo,
    description:
      "Panda Cooking, é uma comunidade onde você pode enviar suas próprias receitas, visualizar receitas, adicionar comentários e muito mais.",
    link: "https://panda-cooking-fk8wi1yhm-felipebulhoes.vercel.app/",
  },
  {
    name: "Kenzie Hub",
    video: kenzieHubDemo,
    description:
      "Kenzie Hub, é uma plataforma onde você pode gerenciar suas hards skills, podendo adicionar uma skill, deletar, editar e muito mais.",
    link: "https://react-kenzie-hub-ts.vercel.app/",
  },
  {
    name: "Spotify Clone",
    video: spotifyCloneDemo,
    description:
      "Spotify Clone, uma simples aplicação web onde o intuito é apenas mostrar o poder de estilização do tailwind css.",
    link: "https://react-spotify-clone-tau.vercel.app/",
  },
  {
    name: "Burguer Kenzie",
    video: burguerKenzieDemo,
    description:
      "Burguer Kenzie, é uma aplicação web que simula uma lanchonete, onde você pode adicionar produtos ao carrinhos, alterar quantidade e muito mais.",
    link: "https://react-hamburgueria-kenzie.vercel.app/",
  },
  {
    name: "Rock Paper Scissors",
    video: rockPaperScissorsDemo,
    description:
      "Rock Paper Scissors, o famoso pedra papel tesoura, feito totalmente com JAVASCRIPT Vanila, e utilizando POO.",
    link: "https://carlosx26.github.io/rock-paper-scissors-js/",
  },
];
