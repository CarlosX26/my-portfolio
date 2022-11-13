import { useEffect, useRef, useState } from "react";
import { CgArrowLongDown } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import lottie from "lottie-web";

import { ContainerStyled } from "../../styles/container";
import { HeadingStyledTwo, TextStyledOne } from "../../styles/typography";
import { PresentationSectionStyled } from "./styles";
import profileImg from "../../assets/img/profile.jpg";
import bgVideo from "../../assets/video/bg-video.mp4";
import { ChatBot } from "../ChatBot";

export const PresentationSection = () => {
  const refAnimation = useRef<HTMLDivElement | null>(null);
  const [chatOn, setChatOn] = useState(false);

  const showChat = () => {
    setChatOn((prevState) => !prevState);
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: refAnimation.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/76723-robot-wave.json"),
    });
  }, []);

  return (
    <PresentationSectionStyled>
      <ContainerStyled>
        <div className="box-text">
          <HeadingStyledTwo>Desenvolvedor front end</HeadingStyledTwo>
          <h1>Carlos Junio</h1>

          <TextStyledOne fontStyle="italic" color="--color-gray-2">
            Olá bem vindo, sou Carlos Jr., tenho 21 anos e sou de Santa-Inês
            Maranhão. Ainda quando criança, tive meu primeiro contato com os
            computadores me lembro como se fosse ontem, na adolescência eu
            trocava os sistemas operacionais dos meus celulares, ao completar o
            ensino médio, já imginava que um dia seria desenvolvedor, então
            passei para o curso de Engenharia Da Computação, infelizmente não
            era o que eu queria, pois na faculdade não se aprende a programar,
            foi então que decidir correr atrás do que eu realmente amava, foi
            quando conheci a Kenzie Academy Brasil, e a partir daí, minha vida
            mudou por completo, comecei a dar meus primeiros passos com HTML,
            CSS e JAVASCRIPT, e hoje após mais de 6 meses de muito code, estou
            pronto para minha primeira vaga.
          </TextStyledOne>
        </div>

        <div className="box-img">
          <img src={profileImg} alt="profile__img" />
        </div>

        <motion.a
          className="box-scroll-icon"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          href="#skills"
        >
          <motion.div
            whileHover={{ top: 4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CgArrowLongDown />
          </motion.div>
          <TextStyledOne>Scroll</TextStyledOne>
        </motion.a>

        <div id="robot" onClick={showChat}>
          <div ref={refAnimation}></div>

          <TextStyledOne>Olá, bem vindo</TextStyledOne>
        </div>

        <AnimatePresence>
          {chatOn && <ChatBot showChat={showChat} />}
        </AnimatePresence>
      </ContainerStyled>

      <video src={bgVideo} autoPlay muted loop playsInline />
    </PresentationSectionStyled>
  );
};
