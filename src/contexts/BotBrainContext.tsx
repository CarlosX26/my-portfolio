import { createContext, useContext, useState } from "react"
import { IMessages } from "../components/ChatBot/types"
import { IBotBrainContext, IPropsBotBrainContext } from "./types"

const BotBrainContext = createContext({} as IBotBrainContext)

export const BotBrainContextProvider = ({
  children,
}: IPropsBotBrainContext) => {
  const botImg = "https://img.icons8.com/3d-fluency/94/null/chatbot.png"

  const botData = [
    {
      img: botImg,
      message: "Olá eu sou o Jarvis.",
      from: "Jarvis",
      type: "default",
    },
    {
      message: "Assistente virtual do Carlos.",
      from: "Jarvis",
      type: "default",
    },
    {
      message:
        "Eu posso te ajudar com informações sobre contato, currículo e redes sociais referentes ao Carlos.",
      from: "Jarvis",
      type: "default",
    },
  ]
  const [messages, setMessages] = useState([...botData] as IMessages[])
  const [startConversation, setStartConversation] = useState(false)

  const generateMessage = (
    message: string,
    from: string,
    type: string,
    img?: string,
    reference?: string
  ): IMessages => {
    return {
      img,
      message: message,
      from: from,
      type: type,
      reference,
    }
  }

  const botDecisions = (userMessage: IMessages) => {
    setMessages([...messages, userMessage])

    const { message } = userMessage

    if (message.toLocaleLowerCase().includes("limpar")) {
      setMessages([...botData])
    } else if (message.toLocaleLowerCase().match(/github/g)) {
      const responseJarvis = generateMessage(
        "Aqui está o GitHub do Carlos.",
        "Jarvis",
        "link",
        botImg,
        "https://github.com/CarlosX26"
      )

      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis])
      }, 500)
    } else if (message.toLocaleLowerCase().match(/linkedin/g)) {
      const responseJarvis = generateMessage(
        "Aqui está o LinkedIn do Carlos.",
        "Jarvis",
        "link",
        botImg,
        "https://www.linkedin.com/in/carlos-junio26/"
      )
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis])
      }, 500)
    } else if (message.toLocaleLowerCase().match(/contato/g)) {
      const responseJarvis = generateMessage(
        "informações de contato: email:cjunior1@live.com número: (98) 98146-4032",
        "Jarvis",
        "default",
        botImg
      )

      setTimeout(() => {
        setMessages([
          ...messages,
          userMessage,
          responseJarvis,
          generateMessage(
            "Deseja enviar um email, ou chamar no whatsapp?",
            "Jarvis",
            "default"
          ),
        ])
      }, 500)
    } else if (message.toLocaleLowerCase().match(/email/g)) {
      const responseJarvis = generateMessage(
        "Clique aqui para enviar um email ao Carlos.",
        "Jarvis",
        "link",
        botImg,
        "mailto:cjunior1@live.com"
      )
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis])
      }, 500)
    } else if (message.toLocaleLowerCase().match(/whatsapp/g)) {
      const responseJarvis = generateMessage(
        "Iniciar conversa com o Carlos.",
        "Jarvis",
        "link",
        botImg,
        "https://api.whatsapp.com/send?phone=+55++98981464032&text=Ol%C3%A1%20venho%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."
      )
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis])
      }, 500)
    } else if (
      message.toLocaleLowerCase().match(/curriculo/g) ||
      message.toLocaleLowerCase().match(/currículo/g)
    ) {
      const responseJarvis = generateMessage(
        "Funcionalidade em desenvolvimento ;)",
        "Jarvis",
        "default",
        botImg
      )
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis])
      }, 500)
    } else {
      const responseJarvis = generateMessage(
        "Desculpe recurso não disponível, tente outro.",
        "Jarvis",
        "default",
        botImg
      )
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis])
      }, 500)
    }
  }

  return (
    <BotBrainContext.Provider
      value={{
        botDecisions,
        messages,
        startConversation,
        setStartConversation,
      }}
    >
      {children}
    </BotBrainContext.Provider>
  )
}

export const useBotBrainContext = (): IBotBrainContext =>
  useContext(BotBrainContext)
