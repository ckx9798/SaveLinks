import { Folder } from "./folder";

export interface LinkDeleteDropdownModalProps {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  linkId: number;
}

export interface LinkEditDropdownModalProps {
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  linkId: number;
}

export interface SelectLinkFolderModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  folderList: Folder[];
  newLink: string;
}

export interface UserDropdownProps {
  onClose: () => void;
  onLinkClick: () => void;
  onMemoClick: () => void;
  onLogoutClick: () => void;
}
s;
