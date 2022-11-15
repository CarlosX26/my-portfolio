import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import { iPropsChatBubble } from "./types";
import { ChatBubbleStyled } from "./styles";
import profileBot from "../../../assets/img/chatbot.png";

export const ChatBubble = ({
  message,
  from,
  type,
  reference,
}: iPropsChatBubble) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChatBubbleStyled from={from} type={type}>
        {from === "Jarvis" ? (
          <img src={profileBot} alt="bot_profile" />
        ) : (
          <FaUserCircle />
        )}
        {type === "link" || type === "file" ? (
          <a
            href={reference}
            target="_blank"
            rel="noreferrer"
            download={type === "file" ? true : false}
          >
            {message}
          </a>
        ) : (
          <p>{message}</p>
        )}
      </ChatBubbleStyled>
    </motion.div>
  );
};
