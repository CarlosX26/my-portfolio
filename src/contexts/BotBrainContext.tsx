import { createContext, useContext, useState } from "react";
import { iMessages } from "../components/ChatBot/types";
import { iBotBrainContext, iPropsBotBrainContext } from "./types";
import curriculoPdf from "../assets/pdf/curriculo.pdf";

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
        message: "Iniciar conversa com o Carlos.",
        from: "Jarvis",
        type: "link",
        reference:
          "https://api.whatsapp.com/send?phone=+55++98981464032&text=Ol%C3%A1%20venho%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.",
      };
      setTimeout(() => {
        setMessages([...messages, userMessage, responseJarvis]);
      }, 500);
    } else if (
      message.toLocaleLowerCase().match(/curriculo/g) ||
      message.toLocaleLowerCase().match(/currículo/g)
    ) {
      const responseJarvis = {
        message: "Clique aqui para baixar o currículo do Carlos.",
        from: "Jarvis",
        type: "file",
        reference: curriculoPdf,
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
        message: "Desculpe recurso não disponível, tente outro.",
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
