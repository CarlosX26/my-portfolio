import styled from "styled-components"
import { ITextStyledProps } from "./types/types"

const HeadingStyledOne = styled.h1<ITextStyledProps>`
  font-size: var(--heading-1);
  font-weight: 700;
  color: var(--color-heading);
`
const HeadingStyledTwo = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  color: var(--color-heading);
`
const HeadingStyledThree = styled.h3`
  font-size: var(--heading-3);
  font-weight: 700;
  color: var(--color-heading);
`

const TextStyledOne = styled.p`
  font-size: var(--text-1);
  font-weight: 400;
  font-style: ${({ fontStyle = "normal" }: ITextStyledProps) => fontStyle};
  color: var(${({ color = "--color-text" }: ITextStyledProps) => color});
`

const TextStyledTwo = styled(TextStyledOne)`
  font-size: var(--text-2);
`

export {
  HeadingStyledOne,
  HeadingStyledTwo,
  HeadingStyledThree,
  TextStyledOne,
  TextStyledTwo,
}
