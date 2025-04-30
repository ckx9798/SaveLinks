export interface Folder {
  id: number;
  createdAt: string;
  name: string;
  linkCount: number;
}

export interface EditFolderNameModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  currentFolder: Folder;
}

export interface AddLinkProps {
  folderList: Folder[];
}

export interface ErrorResponse {
  message: string;
}
