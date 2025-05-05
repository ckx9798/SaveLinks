import { ShortsProps } from "../type/shorts";

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
  return data;
};
