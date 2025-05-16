import { ChatButtonProps } from "../../type/chat";
import { MessageCircle } from "lucide-react";

export default function ChatButton({ setIsChatOpen }: ChatButtonProps) {
  return (
    <button
      onClick={() => setIsChatOpen((prev) => !prev)}
      className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 hover:bg-blue-100 lg:h-14 lg:w-14"
    >
      <MessageCircle className="h-6 w-6 text-blue-600 lg:h-8 lg:w-8" />
      <span className="sr-only">채팅 열기</span>
    </button>
  );
}
