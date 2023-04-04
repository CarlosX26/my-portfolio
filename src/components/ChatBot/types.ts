import { StaticImageData } from "next/image"

export interface iPropsChatBot {
  showChat: () => void
}

export interface iFormChatBot {
  message: string
}

export interface iMessages {
  img?: string | "default" | undefined
  message: string
  from: string
  type: string
  reference?: string | undefined
}
