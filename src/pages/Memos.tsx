import { useEffect, useState } from "react";

import AddMemo from "../components/Memos/AddMemo";
import Header from "../components/Header";
import MemoItem from "../components/Memos/MemoItem";
import { MemoProps } from "../type/memo";
import MotionChatButton from "../components/Chat/MotionChatButton";
import NoMemos from "../components/Memos/NoMemos";

export default function Memos() {
  const [selectedMemo, setSelectedMemo] = useState<MemoProps | null>(null); // 선택된 메모

  // 메모 로컬스토리지에서 불러오기
  const [memos, setMemos] = useState<MemoProps[]>(() => {
    try {
      const stored = localStorage.getItem("memos");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("로컬스토리지 파싱 에러:", e);
      return [];
    }
  });

  // memos 상태가 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center px-6">
        <img
          src="/layout_bg.webp"
          alt="배경 이미지"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        />
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddMemo memos={memos} setMemos={setMemos} />
        </div>
      </div>

      <div className="h-full min-h-[100vh] bg-gray04 py-4">
        {memos.length !== 0 ? (
          <div className="align-items-center mx-auto mb-6 grid w-full max-w-[1400px] grid-cols-1 justify-items-center gap-x-2 gap-y-2 px-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
            {memos.map((memo) => (
              <MemoItem
                key={memo.id}
                memo={memo}
                setMemos={setMemos}
                selectedMemo={selectedMemo}
                setSelectedMemo={setSelectedMemo}
              />
            ))}
          </div>
        ) : (
          <NoMemos />
        )}
      </div>
      <MotionChatButton />
    </>
  );
}
