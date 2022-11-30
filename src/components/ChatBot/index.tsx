import { IoIosArrowDown } from "react-icons/io";
import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";

import { ChatBubble } from "./ChatBubble";
import { useBotBrainContext } from "../../contexts/BotBrainContext";

import { iFormChatBot, iPropsChatBot } from "./types";

import { ChatBotStyled } from "./styles";
import { TextStyledOne } from "../../styles/typography";
import profileImg from "../../assets/img/chatbot.png";

export const ChatBot = ({ showChat }: iPropsChatBot) => {
    const { botDecisions, messages } = useBotBrainContext();

    const { register, handleSubmit, reset } = useForm<iFormChatBot>();

    const onSubmit = ({ message }: iFormChatBot) => {
        const userMessage = {
            img: "default",
            message: message,
            from: "user",
            type: "default",
        };

        botDecisions(userMessage);

        reset();
    };

    return (
        <ChatBotStyled
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="head-chat">
                <div>
                    <img src={profileImg} alt="bot_img" />
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
                <input
                    type="text"
                    placeholder="Mensagem"
                    {...register("message")}
                />
                <button>
                    <BiSend />
                </button>
            </form>
        </ChatBotStyled>
    );
};
