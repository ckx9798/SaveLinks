import { Folder } from "./folder";

export interface SelectLinkFolderModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  folderList: Folder[];
  newLink: string;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserDropdownProps {
  onClose: () => void;
  onLinkClick: () => void;
  onMemoClick: () => void;
  onShortsClick: () => void;
  onLogoutClick: () => void;
}

// 폴더명 변경 모달
export interface ChangeFolderNameImageProps {
  currentFolder: Folder;
}
//폴더 삭제 모달
export interface DeleteFolderImageProps {
  currentFolder: Folder;
  setCurrentFolder: React.Dispatch<React.SetStateAction<Folder | null>>;
}
export interface CommonModalProps {
  title: string;
  inputPlaceholder?: string;
  buttonText: string;
  onClose: () => void;
  onSubmit: (inputValue?: string) => void;
  showInput?: boolean;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  contentText?: string;
  buttonColor?: "primary" | "secondary" | "gradientRed" | "gradientBlue";
}
