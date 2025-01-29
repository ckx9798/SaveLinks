import apiClient from "./axiosInstance";

export const getLinks = async () => {
  try {
    const response = await apiClient.get("/links");
    return response.data;
  } catch (error) {
    console.error("getLinks", error.response?.data || error.message);
    throw error;
  }
};

export const getLinksById = async (folderId) => {
  try {
    const response = await apiClient.get(`/folders/${folderId}/links`);
    return response.data;
  } catch (error) {
    console.error("getLinksWidthId", error.response?.data || error.message);
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

export const getFavorite = async () => {
  try {
    const response = await apiClient.get("/favorites");
    return response.data;
  } catch (error) {
    console.error("getFavorite", error.response?.data || error.message);
    throw error;
  }
};

export const putFavorite = async (linkId, isFavorite) => {
  try {
    const response = await apiClient.put(`/links/${linkId}/favorite`, {
      favorite: !isFavorite,
    });
    return response;
  } catch (error) {
    console.error("putFavoite", error.response?.data || error.message);
    throw error;
  }
};
