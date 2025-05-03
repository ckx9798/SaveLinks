export interface ShortsProps {
  id: number;
  url: string;
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

export interface AddShortsProps {
  shortsLinks: ShortsProps[];
  setShortsLinks: React.Dispatch<React.SetStateAction<ShortsProps[]>>;
}

export const addShortsLink = async (url: string) => {
  const res = await fetch(`/api/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  const data = await res.json();
  return data;
};

export const getShortsLink = async () => {
  const res = await fetch(`/api/links`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data: ShortsProps[] = await res.json();
  return data;
};

export const deleteShortsLink = async (id: number) => {
  const res = await fetch(`/api/links/${id}`, {
    method: "DELETE",
  });

  const data: ShortsProps[] = await res.json();
  console.log(data);
};
