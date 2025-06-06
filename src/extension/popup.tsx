import { useEffect, useState } from "react";

import ReactDOM from "react-dom/client";
import { normalToEmbedUrlSingle } from "../utils/normalToEmbedUrl";

export const Popup = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [message, setMessage] = useState("");

  // 현재 탭 URL 가져오기
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url ?? "";
      setCurrentUrl(url);
    });
  }, []);

  // ⬆️ 저장
  const saveUrlToSyncStorage = (url: string) => {
    if (!url) return;

    const newItem = {
      id: crypto.randomUUID(),
      url: currentUrl,
      embedUrl: normalToEmbedUrlSingle(currentUrl),
    };

    chrome.storage.sync.get(["savedShortsList"], (result) => {
      const prevList = result.savedShortsList || [];
      const updateShortsList = [...prevList, newItem];

      chrome.storage.sync.set({ savedShortsList: updateShortsList }, () => {
        setMessage("✅ 저장 완료!");
      });

      setTimeout(() => {
        window.close();
      }, 1500);
    });
  };

  return (
    <>
      <div className="flex w-80 gap-2 rounded-2xl border border-gray-200 bg-white p-2 font-sans shadow-lg">
        <button
          disabled={!currentUrl}
          className="w-full rounded-xl bg-primary px-2 py-2 font-medium text-white transition-all duration-200 hover:bg-indigo-600"
          onClick={() => saveUrlToSyncStorage(currentUrl)}
        >
          ☁️ 저장하기
        </button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            chrome.tabs.create({ url: "https://www.savelinks.xyz/extension" });
          }}
          className="w-full rounded-xl bg-primary px-2 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-600"
        >
          ✈ 저장소
        </a>
      </div>
      {message && <p className="text-sm font-medium text-green-600">{message}</p>}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Popup />);
