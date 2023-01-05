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
                    <HeadingStyledTwo>
                        Desenvolvedor Web Full Stack
                    </HeadingStyledTwo>
                    <h1>Carlos Junio</h1>

                    <TextStyledOne fontStyle="italic" color="--color-gray-2">
                        Olá seja bem vindo, eu sou o Carlos, tenho 21 anos,
                        estou me formando em Desenvolvimento{" "}
                        <strong>Web Full Stack</strong> pela{" "}
                        <strong>Kenzie Academy Brasil</strong>, e estou sempre
                        buscando novos desafios.
                    </TextStyledOne>
                </div>

                <div className="box-img">
                    <img src={profileImg} alt="profile__img" />
                </div>

                <a className="box-scroll-icon" href="#skills">
                    <motion.div
                        whileHover={{ top: 4 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <CgArrowLongDown />
                    </motion.div>
                    <TextStyledOne>Scroll</TextStyledOne>
                </a>

                <div id="robot" onClick={showChat}>
                    <div ref={refAnimation}></div>

                    <p>Olá, vamos conversar?</p>
                </div>

                <AnimatePresence>
                    {chatOn && <ChatBot showChat={showChat} />}
                </AnimatePresence>
            </ContainerStyled>

            <video src={bgVideo} autoPlay muted loop playsInline />
        </PresentationSectionStyled>
    );
};
