export interface Folder {
  id: number;
  createdAt: string;
  name: string;
  linkCount: number;
}

export interface EditFolderNameImageProps {
  currentFolder: Folder;
}
export interface EditFolderNameModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  currentFolder: Folder;
}

export interface AddFolderModalProps {
  setIsAddFolderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddLinkProps {
  folderList: Folder[];
}

export interface ErrorResponse {
  message: string;
}
