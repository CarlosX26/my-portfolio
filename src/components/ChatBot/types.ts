export interface IPropsChatBot {
  showChat: () => void
}

export interface IFormChatBot {
  message: string
}

export interface IMessages {
  img?: string | "default" | undefined
  message: string
  from: string
  type: string
  reference?: string | undefined
}
