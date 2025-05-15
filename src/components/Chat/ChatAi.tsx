// src/ChatAi.tsx

import { ChatHistoryProps, MotionChatButtonProps } from "../../type/chat";

import ReactMarkdown from "react-markdown";
import { askToGemini } from "./chat";
import { useState } from "react";

export default function ChatAi({ setIsChatOpen }: MotionChatButtonProps) {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatHistoryProps[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await askToGemini(input);
    setChatHistory((prev) => [...prev, { question: input, answer: result }]);
    setInput("");
    setLoading(false);
  };

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex h-[300px] w-[300px] flex-col rounded-2xl bg-white shadow-2xl lg:h-[400px] lg:w-[400px]"
      style={{
        minHeight: 340,
        border: "1px solid #ececec",
        boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
      }}
    >
      {/* 상단 바 */}
      <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-3">
        <h1 className="flex items-center gap-2 text-lg font-bold text-white">
          <span role="img" aria-label="chat">
            💬
          </span>
          Gemini Chat
        </h1>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-white transition hover:bg-blue-600"
          onClick={() => setIsChatOpen((prev) => !prev)}
        >
          ✖
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-5 py-4">
        {chatHistory.map((chat, i) => (
          <div key={i} className="flmb-4 flex flex-col gap-4">
            <div className="max-w-[80%] self-end rounded-xl bg-blue-100 px-4 py-2 text-blue-900 shadow-sm">
              {chat.question}
            </div>
            <div className="max-w-[80%] self-start whitespace-pre-line rounded-xl bg-gray-100 px-4 py-2 leading-tight text-gray-800 shadow-sm">
              <ReactMarkdown>{chat.answer}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="max-w-[80%] animate-pulse self-start rounded-xl bg-gray-100 px-4 py-2 italic text-gray-400 shadow-sm">
            Gemini가 생각 중...
          </div>
        )}
      </div>

      {/* 입력창 */}
      <form
        className="flex gap-2 rounded-b-2xl border-t border-gray-200 bg-white px-5 py-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 transition focus:border-blue-400 focus:outline-none"
          disabled={loading}
        />
        <button
          type="submit"
          className={`rounded-full px-5 py-2 font-semibold text-white transition ${
            loading ? "cursor-not-allowed bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "생각 중..." : "보내기"}
        </button>
      </form>
    </div>
  );
}
