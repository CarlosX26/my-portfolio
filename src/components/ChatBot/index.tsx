import { IoIosArrowDown } from "react-icons/io";
import { BiSend } from "react-icons/bi";
import { iPropsChatBot } from "./types";

import { ChatBotStyled } from "./styles";
import { TextStyledOne } from "../../styles/typography";
import profileImg from "../../assets/img/chatbot.png";

export const ChatBot = ({ showChat }: iPropsChatBot) => {
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
        <p>Estamos em desenvolvimento. :(</p>
      </div>

      <form className="footer-chat">
        <input type="text" placeholder="Mensagem" />
        <button disabled>
          <BiSend />
        </button>
      </form>
    </ChatBotStyled>
  );
};
