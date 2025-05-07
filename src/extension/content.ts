function sendSavedUrlsToWebsite() {
  chrome.storage.sync.get(["savedShortsList"], (result) => {
    // 웹사이트로 데이터 전송
    window.postMessage(
      {
        type: "FROM_EXTENSION",
        source: "chrome_extension",
        savedShortsList: result.savedShortsList || [],
      },
      "*"
    );
  });
}

sendSavedUrlsToWebsite(); // 초기실행

export interface SavedItem {
  id: string;
  url: string;
}

window.addEventListener("message", (event) => {
  if (event.data.type === "DELETE_REQUEST" && event.data.itemId) {
    chrome.storage.sync.get(["savedShortsList"], (result: { savedShortsList?: SavedItem[] }) => {
      const prevList: SavedItem[] = result.savedShortsList || [];
      const updatedList = prevList.filter((item) => item.id !== event.data.itemId);

      chrome.storage.sync.set({ savedShortsList: updatedList });
    });
  }
});

// 3. 폴링 대신 storage 변경 감지
chrome.storage.onChanged.addListener((changes) => {
  if (changes.savedShortsList) {
    sendSavedUrlsToWebsite();
  }
});
