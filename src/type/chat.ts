import { Dispatch, SetStateAction } from "react";

export interface MotionChatButtonProps {
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ChatHistoryProps {
  question: string;
  answer: string;
}
