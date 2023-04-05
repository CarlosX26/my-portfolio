import { IoIosArrowDown } from "react-icons/io"
import { BiSend } from "react-icons/bi"
import { useForm } from "react-hook-form"

import { ChatBubble } from "./ChatBubble"
import { useBotBrainContext } from "../../contexts/BotBrainContext"

import { IFormChatBot, IPropsChatBot } from "./types"

import { ChatBotStyled } from "./styles"
import { TextStyledOne } from "../../styles/typography"
import Image from "next/image"

export const ChatBot = ({ showChat }: IPropsChatBot) => {
  const { botDecisions, messages } = useBotBrainContext()

  const { register, handleSubmit, reset } = useForm<IFormChatBot>()

  const onSubmit = ({ message }: IFormChatBot) => {
    if (!message) {
      return
    }

    const userMessage = {
      img: "default",
      message: message,
      from: "user",
      type: "default",
    }

    botDecisions(userMessage)

    reset()
  }

  return (
    <ChatBotStyled
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="head-chat">
        <div>
          <Image
            src="https://img.icons8.com/3d-fluency/94/null/chatbot.png"
            alt="bot_img"
            width={48}
            height={48}
          />
          <TextStyledOne>Jarvis</TextStyledOne>
        </div>

        <button onClick={showChat}>
          <IoIosArrowDown />
        </button>
      </div>

      <div className="body-chat">
        {messages.map((el, index) => (
          <ChatBubble
            key={index}
            img={el.img}
            message={el.message}
            from={el.from}
            type={el.type}
            reference={el.reference}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="footer-chat">
        <input type="text" placeholder="Mensagem" {...register("message")} />
        <button>
          <BiSend />
        </button>
      </form>
    </ChatBotStyled>
  )
}
