import React from "react"
import { IMessages } from "../components/ChatBot/types"

export interface IPropsBotBrainContext {
  children: React.ReactNode
}

export interface IBotBrainContext {
  messages: IMessages[]
  botDecisions: (message: IMessages) => void
  startConversation: boolean
  setStartConversation: React.Dispatch<React.SetStateAction<boolean>>
}
