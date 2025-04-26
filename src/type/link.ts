import { Folder } from "./folder";

export interface Link {
  id: number;
  favorite: boolean;
  url: string;
  title: string;
  imageSource: string;
  description: string;
  createdAt: string;
}

export interface LinkResponse {
  list: Link[];
}

export interface LinksByIdResponse {
  totalCount: number;
  list: Link[];
}

export interface SeletFolderPartProps {
  folderList: Folder[];
  handleFolderClick: (id: number, name: string) => void;
  setIsAddFolderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchLinkPartProps {
  setSearchLink: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkItemProps {
  link: Link;
}

export interface ErrorResponse {
  message: string;
}
