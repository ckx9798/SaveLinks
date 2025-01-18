import { getCookie } from "./cookie";

export const getFolder = async () => {
  const accessToken = getCookie("accessToken");
  const response = await fetch("https://linkbrary-api.vercel.app/40-1/folders", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data;
};

// export const postFolder = async (name) => {
//   const accessToken = getCookie("accessToken");
//   const response = await fetch("https://linkbrary-api.vercel.app/40-1/folders", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       name: name,
//     }),
//   });
//   const data = await response.json();
//   return data;
// };

// export const getFolderId = async (folderId) => {
//   const accessToken = getCookie("accessToken");
//   const response = await fetch(`https://linkbrary-api.vercel.app/40-1/folders/${folderId}`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   const data = await response.json();
//   return data;
// };
