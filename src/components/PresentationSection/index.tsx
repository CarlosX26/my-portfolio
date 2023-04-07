import { useEffect, useRef, useState } from "react"
import { CgArrowLongDown } from "react-icons/cg"
import { AnimatePresence, motion } from "framer-motion"
import { SlClose } from "react-icons/sl"
import lottie from "lottie-web"

import { ContainerStyled } from "../../styles/container"
import { HeadingStyledTwo, TextStyledOne } from "../../styles/typography"
import { PresentationSectionStyled } from "./styles"
import { ChatBot } from "../ChatBot"
import { useBotBrainContext } from "../../contexts/BotBrainContext"
import Image from "next/image"

export const PresentationSection = () => {
  const refAnimation = useRef<HTMLDivElement | null>(null)
  const refAudioAlert = useRef<HTMLAudioElement | null>(null)
  const [chatOn, setChatOn] = useState(false)
  const { startConversation, setStartConversation } = useBotBrainContext()

  const showChat = () => {
    setChatOn((prevState) => !prevState)
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: refAnimation.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/assets/76723-robot-wave.json"),
    })

    setTimeout(async () => {
      setStartConversation(true)
      await refAudioAlert.current?.play()
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PresentationSectionStyled>
      <ContainerStyled>
        <div className="box-text">
          <HeadingStyledTwo>Desenvolvedor Web Full Stack</HeadingStyledTwo>
          <h1>Carlos Junio</h1>

          <TextStyledOne fontStyle="italic" color="--color-gray-2">
            Olá seja bem vindo, eu sou o Carlos, tenho 21 anos, estou me
            formando em Desenvolvimento <strong>Web Full Stack</strong> pela{" "}
            <strong>Kenzie Academy Brasil</strong>, e estou sempre buscando
            novos desafios.
          </TextStyledOne>
        </div>

        <div className="box-img">
          <Image
            src="/assets/img/profile.webp"
            alt="profile__img"
            width={240}
            height={240}
          />
        </div>

        <a className="box-scroll-icon" href="#tecnologias">
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

          {startConversation && (
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setStartConversation(false)
                }}
              >
                <SlClose />
              </button>
              <p>Olá, vamos conversar?</p>
              <span></span>
              <audio src="/assets/audio/viber.mp3" ref={refAudioAlert}></audio>
            </div>
          )}
        </div>

        <AnimatePresence>
          {chatOn && <ChatBot showChat={showChat} />}
        </AnimatePresence>
      </ContainerStyled>
    </PresentationSectionStyled>
  )
}
