import { motion } from "framer-motion"
import { Avatar, AvatarBadge } from "@chakra-ui/react"

import { iPropsChatBubble } from "./types"
import { ChatBubbleStyled } from "./styles"

export const ChatBubble = ({
  img,
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
        {img && (
          <Avatar size="sm" src={img} bg="gray.500">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
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
  )
}
