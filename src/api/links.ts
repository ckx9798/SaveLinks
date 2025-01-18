import apiClient from "./axiosInstance";

export const getLinks = async () => {
  try {
    const response = await apiClient.get("/links");
    return response.data;
  } catch (error) {
    console.error("getLinks", error);
    throw error;
  }
};

export const postLinks = async (url, folderId) => {
  try {
    const response = await apiClient.post("/links", {
      url: url,
      folderId: folderId,
    });
    return response.data;
  } catch (error) {
    console.error("postLinks", error.response?.data || error.message);
    throw error;
  }
};
