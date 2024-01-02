import styled from "styled-components"
import { IPropsChatBubbleStyled } from "./types"

export const ChatBubbleStyled = styled.div<IPropsChatBubbleStyled>`
  display: flex;
  gap: 16px;
  align-self: end;
  flex-direction: ${({ from }) => (from === "Jarvis" ? "row" : "row-reverse")};

  & > p,
  & > a {
    white-space: break-spaces;
    min-height: 32px;
    width: 240px;
    background: var(
      ${({ from }) =>
        from === "Jarvis" ? "--color-brand-2" : "--color-brand-1"}
    );
    border-radius: 8px;
    color: var(--color-gray-1);
    padding: 6px 0 6px 8px;
    text-decoration: ${({ type }) => (type === "link" ? "underline" : "unset")};
  }
`
