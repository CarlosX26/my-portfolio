import styled from "styled-components";
import { iPropsChatBubbleStyled } from "./types";

export const ChatBubbleStyled = styled.div`
  display: flex;
  gap: 16px;
  align-self: end;
  flex-direction: ${({ from }: iPropsChatBubbleStyled) =>
    from === "Jarvis" ? "row" : "row-reverse"};

  & > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--color-gray-1);
  }
  & > svg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: var(--color-gray-3);
  }
  & > p,
  & > a {
    min-height: 32px;
    width: 240px;
    background: var(
      ${({ from }: iPropsChatBubbleStyled) =>
        from === "Jarvis" ? "--color-brand-2" : "--color-brand-1"}
    );
    border-radius: 8px;
    color: var(--color-gray-1);
    padding: 6px 0 6px 8px;
    text-decoration: ${({ type }: iPropsChatBubbleStyled) =>
      type === "link" ? "underline" : "unset"};
  }
`;
