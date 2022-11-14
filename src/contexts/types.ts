import React from "react";
import { iMessages } from "../components/ChatBot/types";

export interface iPropsBotBrainContext {
  children: React.ReactNode;
}

export interface iBotBrainContext {
  messages: iMessages[];
  botDecisions: (message: iMessages) => void;
}
