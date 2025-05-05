export interface ShortsProps {
  id: number;
  url: string;
}
export interface ShortsItemProps {
  link: ShortsProps;
}

export interface ShortsDropdownProps {
  link: ShortsProps;
  setOpenDropdownId: (id: number | null) => void;
}

export interface FullScreenShortsModalProps {
  shortsUrl: string;
  setIsModalOpen: (open: boolean) => void;
  setOpenDropdownId: (id: number | null) => void;
}

export interface DeleteShortsModalProps {
  shortsId: number;
  setIsDeleteModalOpen: (open: boolean) => void;
  setOpenDropdownId: (id: number | null) => void;
}
