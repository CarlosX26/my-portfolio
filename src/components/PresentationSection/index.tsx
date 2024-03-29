import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { SlClose } from "react-icons/sl"

import { ContainerStyled } from "../../styles/container"
import { TextStyledOne } from "../../styles/typography"
import { PresentationSectionStyled } from "./styles"
import { ChatBot } from "../ChatBot"
import { useBotBrainContext } from "../../contexts/BotBrainContext"
import Image from "next/image"
import lottieJson from "../../../public/assets/76723-robot-wave.json"
import dynamic from "next/dynamic"
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false })

const PresentationSection = () => {
  const [chatOn, setChatOn] = useState(false)
  const { startConversation, setStartConversation } = useBotBrainContext()

  const showChat = () => {
    setChatOn((prevState) => !prevState)
  }

  useEffect(() => {
    setTimeout(() => {
      setStartConversation(true)
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PresentationSectionStyled>
      <ContainerStyled>
        <div className="box-info">
          <div>
            <h1>Olá, eu sou Carlos</h1>

            <h2>Desenvolvedor Web Full Stack</h2>

            <TextStyledOne>
              Proficiente em desenvolvimento web e mobile, com sólido domínio
              das linguagens HTML, CSS, JavaScript, TypeScript e Java.
              Experiência comprovada na criação de projetos bem-sucedidos
              utilizando React, React Native, Node, Express e Spring Boot, além
              de integração com banco de dados PostgreSQL. Conhecimento em
              orquestração de contêineres, destacando-se na utilização de Docker
              para aprimorar o processo de desenvolvimento e implantação.
              Atualmente, estou cursando engenharia da computação no IFMA,
              complementando minha formação acadêmica para aprimorar ainda mais
              minhas habilidades na área de tecnologia.
            </TextStyledOne>
          </div>

          <div className="picture-frame">
            <Image
              src="/assets/img/profile.png"
              alt="image profile"
              width={240}
              height={240}
            />
          </div>
        </div>

        <div id="robot" onClick={showChat}>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 128, height: 128 }}
          />

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

export default PresentationSection
