import { AddMemosProps, MemoProps } from "../../type/memo";

import Button from "../Button";
import { useState } from "react";

export default function AddMemo({ memos, setMemos }: AddMemosProps) {
  const [memoTitle, setMemoTitle] = useState("");

  // 배열 업데이트 함수
  const handleAddMemo = () => {
    if (!memoTitle.trim()) return; // 빈 값 방지

    const memo: MemoProps = {
      id: crypto.randomUUID(), // 고유 ID 생성
      title: memoTitle,
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setMemos([memo, ...memos]); // 부모 컴포넌트의 상태 업데이트
    setMemoTitle(""); // 입력 필드 초기화
  };

  return (
    <>
      <div
        className="flex max-h-[120px] w-full max-w-[800px] items-center justify-between rounded-xl border border-primary bg-white px-3 py-2 md:px-5 md:py-2"
        onClick={handleAddMemo}
      >
        <div className="flex w-full gap-5">
          <img src="/link.svg" />
          <input
            type="text"
            value={memoTitle}
            onChange={(e) => setMemoTitle(e.target.value)}
            placeholder="Add Your New Memo"
            className="mr-5 w-full bg-inherit px-2 text-2xl focus:outline-none md:py-2"
          />
        </div>
        <Button size="xs" text="Add" />
      </div>
    </>
  );
}
