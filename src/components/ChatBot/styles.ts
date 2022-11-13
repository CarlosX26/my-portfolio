import { motion } from "framer-motion";
import styled from "styled-components";

export const ChatBotStyled = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 64px;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;

  border-radius: 8px 8px 0 0;
  background: var(--color-gray-2);

  .head-chat {
    background: var(--color-brand-3);
    width: 100%;
    height: 64px;
    border-radius: 8px 8px 0 0;
    padding: 0 16px;
  }
  .head-chat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head-chat > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .head-chat > div > img {
    background: var(--color-gray-2);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .head-chat > button {
    background: none;
    cursor: pointer;
  }
  .head-chat > button > svg {
    font-size: 32px;
    color: var(--color-gray-2);
  }
  .body-chat {
    height: 280px;
    padding: 16px 16px;
  }
  .body-chat > p {
    height: 32px;
    background: var(--color-brand-1);
    border-radius: 8px;
    color: var(--color-gray-1);
    padding: 6px 0 0 8px;
  }
  .footer-chat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    background: var(--color-brand-3);
    padding: 0 16px;
  }
  .footer-chat > input {
    height: 40px;
    border-radius: 8px;
    padding-left: 16px;
    background: var(--color-gray-2);
    width: 240px;
  }
  .footer-chat > button {
    width: 40px;
    background: var(--color-gray-2);
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  .footer-chat > button > svg {
    font-size: 24px;
  }
`;
