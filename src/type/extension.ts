export interface ShortsObjProps {
  id: string;
  url: string;
  embedUrl: string;
}

export interface ExtensionShortsProps {
  shortsObj: ShortsObjProps;
}

export interface ExtensionDropdownProps {
  shortsObj: ShortsObjProps;
  setOpenDropdownId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ExtensionFullScreenModalProps {
  shortsUrl: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDropdownId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ExtensionDeleteModalProps {
  shortsObj: ShortsObjProps;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDropdownId: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface ExtensionHeaderProps {
  maxWidth: string;
}
