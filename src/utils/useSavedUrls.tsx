import { useCallback, useEffect, useState } from "react";

export function useSavedUrls() {
  const [savedUrls, setSavedUrls] = useState([]);

  const deleteItem = useCallback((itemId: string) => {
    window.postMessage(
      {
        type: "DELETE_REQUEST",
        itemId,
        source: "website",
      },
      "*"
    );
  }, []);

  useEffect(() => {
    // 확장 프로그램에서 보낸 메시지 수신
    const handleExtensionMessage = (event: MessageEvent) => {
      if (event.data.type === "FROM_EXTENSION" && event.data.source === "chrome_extension") {
        setSavedUrls(event.data.savedShortsList);
        console.log("확장 프로그램에서 받은 URL 목록:", event.data.savedShortsList);
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener("message", handleExtensionMessage);

    // 필요 시 데이터 요청
    window.postMessage(
      {
        type: "TO_EXTENSION",
        source: "website",
        action: "REQUEST_DATA",
      },
      "*"
    );

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("message", handleExtensionMessage);
    };
  }, []);

  return { savedUrls, deleteItem };
}
