import AddMemo from "../components/Memos/AddMemo";
import Header from "../components/Header";
import MemoItem from "../components/Memos/MemoItem";
import { MemoProps } from "../type/memo";
import NoMemos from "../components/Memos/NoMemos";
import { useState } from "react";

export default function Memos() {
  const [memos, setMemos] = useState<MemoProps[]>([]); // 메모 배열
  const [selectedMemo, setSelectedMemo] = useState<MemoProps | null>(null); // 선택된 메모

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-gray05 px-3">
        <Header />
        <div className="mb-8 flex h-[80px] w-full items-center justify-center md:h-[120px]">
          <AddMemo memos={memos} setMemos={setMemos} />
        </div>
      </div>

      {memos.length !== 0 ? (
        <div className="align-items-center mx-auto mb-6 grid w-full max-w-[1200px] grid-cols-2 justify-items-center gap-x-2 px-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
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
    </>
  );
}
