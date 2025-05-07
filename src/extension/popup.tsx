import { useEffect, useState } from "react";

import ReactDOM from "react-dom/client";

export const Popup = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [savedShortsList, setSavedShortsList] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // 현재 탭 URL 가져오기
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url ?? "";
      setCurrentUrl(url);
    });
  }, []);

  // ⬆️ 저장
  const saveUrlToSyncStorage = () => {
    if (!currentUrl) return;

    chrome.storage.sync.get(["savedShortsList"], (result) => {
      const existShortsList: string[] = result.savedShortsList || [];
      const updateShortsList = [...existShortsList, currentUrl];

      chrome.storage.sync.set({ savedShortsList: updateShortsList }, () => {
        setSavedShortsList(updateShortsList);
        setMessage("✅ 저장 완료!");
      });
    });
  };

  return (
    <>
      <div className="flex w-80 gap-2 rounded-2xl border border-gray-200 bg-white p-2 font-sans shadow-lg">
        <button
          className="w-full rounded-xl bg-primary px-2 py-2 font-medium text-white transition-all duration-200 hover:bg-indigo-600"
          onClick={saveUrlToSyncStorage}
        >
          ☁️ 저장하기
        </button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            chrome.tabs.create({ url: "https://www.savelinks.xyz/shorts" });
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
