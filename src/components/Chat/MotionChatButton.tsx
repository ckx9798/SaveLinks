import { AnimatePresence, motion } from "framer-motion";

import ChatAi from "./ChatAi";
import ChatButton from "./ChatButton";
import { ChatHistoryProps } from "../../type/chat";
import { useState } from "react";

export default function MotionChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatHistoryProps[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <AnimatePresence mode="popLayout">
      {isChatOpen ? (
        <motion.div
          key="chat"
          initial={{ scale: 0.7, opacity: 0, y: 80 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
          exit={{
            scale: 0.6,
            opacity: 0,
            y: 40,
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 32,
            duration: 0.1,
          }}
          style={{ borderRadius: 16, overflow: "hidden" }}
        >
          <ChatAi
            setIsChatOpen={setIsChatOpen}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            loading={loading}
            setLoading={setLoading}
          />
        </motion.div>
      ) : (
        <motion.div
          key="button"
          initial={{ scale: 0.6, opacity: 0, y: 360 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.6, opacity: 0, y: 360 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            duration: 0.1,
          }}
        >
          <ChatButton setIsChatOpen={setIsChatOpen} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
