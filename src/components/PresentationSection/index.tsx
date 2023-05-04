import { useEffect, useRef, useState } from "react"
import { CgArrowLongDown } from "react-icons/cg"
import { AnimatePresence, motion } from "framer-motion"
import { SlClose } from "react-icons/sl"
import lottie from "lottie-web"

import { ContainerStyled } from "../../styles/container"
import { TextStyledOne } from "../../styles/typography"
import { PresentationSectionStyled } from "./styles"
import { ChatBot } from "../ChatBot"
import { useBotBrainContext } from "../../contexts/BotBrainContext"
import Image from "next/image"

export const PresentationSection = () => {
  const refDivBot = useRef<HTMLDivElement | null>(null)
  const refDivBg = useRef<HTMLDivElement | null>(null)
  const refAudioAlert = useRef<HTMLAudioElement | null>(null)
  const [chatOn, setChatOn] = useState(false)
  const { startConversation, setStartConversation } = useBotBrainContext()

  const showChat = () => {
    setChatOn((prevState) => !prevState)
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: refDivBot.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/assets/76723-robot-wave.json"),
    })

    lottie.loadAnimation({
      container: refDivBg.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/assets/141822-background-square-animation.json"),
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
        <div className="box-info">
          <div>
            <h1>Olá, eu sou Carlos</h1>

            <h2>Desenvolvedor Web Full Stack</h2>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="picture-frame"
          >
            <Image
              src="/assets/img/profile.webp"
              alt="image profile"
              width={240}
              height={240}
            />
          </motion.div>
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
          <div ref={refDivBot}></div>

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

        <div id="background" ref={refDivBg}></div>
      </ContainerStyled>
    </PresentationSectionStyled>
  )
}
