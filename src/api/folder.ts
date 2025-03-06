import { AxiosError, AxiosResponse } from "axios";

import { Folder } from "../type/folder";
import apiClient from "./axiosInstance";

// getFolder 함수
export const getFolder = async (): Promise<Folder[]> => {
  try {
    const response: AxiosResponse<Folder[]> = await apiClient.get("/folders");
    return response.data;
  } catch (error) {
    console.error("getFolder 에러", (error as AxiosError).response?.data || (error as Error).message);
    return [];
  }
};

// postFolder 함수
export const postFolder = async (newFolderName: string): Promise<Folder> => {
  try {
    const response: AxiosResponse<Folder> = await apiClient.post("/folders", {
      name: newFolderName,
    });
    return response.data;
  } catch (error) {
    console.error("postFolder 에러", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

// deleteFolder 함수
export const deleteFolder = async (folderId: number): Promise<void> => {
  try {
    await apiClient.delete(`/folders/${folderId}`);
  } catch (error) {
    console.error("deleteFolder 에러", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

// changeFolderName 함수
export const changeFolderName = async (folderId: number, newFolderName: string): Promise<Folder> => {
  try {
    const response: AxiosResponse<Folder> = await apiClient.put(`/folders/${folderId}`, {
      name: newFolderName,
    });
    return response.data;
  } catch (error) {
    console.error("changeFolderName 에러", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};
