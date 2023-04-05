import styled from "styled-components"

export const TechnologieCardStyled = styled.li`
  border-radius: 8px;

  background-color: var(--color-gray-3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
  padding: 16px;

  & > h2 {
    margin-top: 32px;
  }

  & > img {
    width: 96px;
    height: 96px;
  }

  & > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    max-height: 32px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & > div {
    display: none;
    color: #fff;
    margin-top: 72px;
    overflow-y: scroll;
    margin-bottom: 16px;
  }
  & > div::-webkit-scrollbar {
    width: 0px;
  }
`
