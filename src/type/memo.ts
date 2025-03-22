export interface MemoProps {
  id: string; // 고유 ID (UUID 또는 숫자)
  title: string; // 메모 제목
  description?: string; // 상세 설명 (옵션)
  createdAt: Date; // 생성 날짜
  updatedAt?: Date; // 업데이트된 날짜 (옵션)
}

export interface AddMemosProps {
  memos: MemoProps[];
  setMemos: (memos: MemoProps[]) => void;
}

export interface MemoItemProps {
  memo: MemoProps;
  setMemos: React.Dispatch<React.SetStateAction<MemoProps[]>>;
  selectedMemo: MemoProps | null;
  setSelectedMemo: React.Dispatch<React.SetStateAction<MemoProps | null>>;
}

export interface AddMemoModalProps {
  setIsAddMemoOpen: (isOpen: boolean) => void;
  memo: MemoProps;
  setMemos: (memos: MemoProps[]) => void;
}

export interface EditMemoModalProps {
  setIsEditMemoModalOpen: (open: boolean) => void;
  selectedMemo: MemoProps;
  setSelectedMemo: React.Dispatch<React.SetStateAction<MemoProps | null>>;
  setMemos: React.Dispatch<React.SetStateAction<MemoProps[]>>;
}
