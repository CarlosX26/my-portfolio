import { createContext, useContext, useState } from "react";
import { iMessages } from "../components/ChatBot/types";
import { iBotBrainContext, iPropsBotBrainContext } from "./types";

const BotBrainContext = createContext({} as iBotBrainContext);

export const BotBrainContextProvider = ({
  children,
}: iPropsBotBrainContext) => {
  const botData = [
    {
      message: "Olá eu sou o Jarvis.",
      from: "Jarvis",
      type: "default",
    },
    {
      message: "Assistente virtual do Carlos.",
      from: "Jarvis",
      type: "default",
    },
    {
      message: "Como posso ajudar?",
      from: "Jarvis",
      type: "default",
    },
  ];
  const [messages, setMessages] = useState([...botData] as iMessages[]);

  const botDecisions = (userMessage: iMessages) => {
    setMessages([...messages, userMessage]);

    const { message } = userMessage;

    if (message.toLocaleLowerCase().includes("limpar")) {
      setMessages([...botData]);
    } else if (message.toLocaleLowerCase().match(/github/g)) {
      const responseJarvis = {
        message: "Aqui está o GitHub do Carlos.",
        from: "Jarvis",
        type: "link",
        reference: "https://github.com/CarlosX26",
      };

      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else if (message.toLocaleLowerCase().match(/linkedin/g)) {
      const responseJarvis = {
        message: "Aqui está o LinkedIn do Carlos.",
        from: "Jarvis",
        type: "link",
        reference: "https://www.linkedin.com/in/carlos-junio-b02165240/",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else if (message.toLocaleLowerCase().match(/contato/g)) {
      const responseJarvis = {
        message:
          "informações de contato: email:cjunior1@live.com número: (98) 98146-4032",
        from: "Jarvis",
        type: "default",
      };

      setTimeout(() => {
        setMessages([
          ...messages,
          userMessage,
          responseJarvis,
          {
            message: "Deseja enviar um email, ou chamar no whatsapp?",
            from: "Jarvis",
            type: "default",
          },
        ]);
      }, 500);
    } else if (message.toLocaleLowerCase().match(/email/g)) {
      const responseJarvis = {
        message: "Desculpe recurso em desenvolvimento, tente outro.",
        from: "Jarvis",
        type: "default",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else if (message.toLocaleLowerCase().match(/whatsapp/g)) {
      const responseJarvis = {
        message: "Desculpe recurso em desenvolvimento, tente outro.",
        from: "Jarvis",
        type: "default",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else if (message.toLocaleLowerCase().match(/curriculo/g)) {
      const responseJarvis = {
        message: "Desculpe recurso em desenvolvimento, tente outro.",
        from: "Jarvis",
        type: "default",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else if (message.toLocaleLowerCase().match(/certificado/g)) {
      const responseJarvis = {
        message: "Desculpe recurso em desenvolvimento, tente outro.",
        from: "Jarvis",
        type: "default",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else {
      const responseJarvis = {
        message: "Desculpe recurso em desenvolvimento, tente outro.",
        from: "Jarvis",
        type: "default",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    }
  };

  return (
    <BotBrainContext.Provider value={{ botDecisions, messages }}>
      {children}
    </BotBrainContext.Provider>
  );
};

export const useBotBrainContext = (): iBotBrainContext =>
  useContext(BotBrainContext);
