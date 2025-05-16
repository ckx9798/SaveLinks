import { Dispatch, SetStateAction } from "react";

export interface MotionChatButtonProps {
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  chatHistory: { question: string; answer: string }[];
  setChatHistory: React.Dispatch<React.SetStateAction<{ question: string; answer: string }[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChatHistoryProps {
  question: string;
  answer: string;
}

export interface ChatButtonProps {
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}
