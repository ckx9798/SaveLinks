import apiClient from "./axiosInstance";

export const getFolder = async () => {
  try {
    const response = await apiClient.get("/folders");
    return response;
  } catch (error) {
    console.error("getFolder 에러", error.response?.data || error.message);
    return [];
  }
};

export const postFolder = async (newFolderName) => {
  try {
    const response = await apiClient.post("/folders", {
      name: newFolderName,
    });
    return response.data;
  } catch (error) {
    console.error("postFolder 에러", error.response?.data || error.message);
    throw error;
  }
};

export const deleteFolder = async (folderId) => {
  try {
    const response = await apiClient.delete(`/folders/${folderId}`);
    return response.data;
  } catch (error) {
    console.error("deleteFolder 에러", error.response?.data || error.message);
    throw error;
  }
};

export const changeFolderName = async (folderId, newFolderName) => {
  try {
    const response = await apiClient.put(`/folders/${folderId}`, {
      name: newFolderName,
    });
    return response.data;
  } catch (error) {
    console.error("changeFolderName 에러", error.response?.data || error.message);
    throw error;
  }
};
