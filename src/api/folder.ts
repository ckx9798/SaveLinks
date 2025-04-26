import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse, Folder } from "../type/folder";

import apiClient from "./axiosInstance";
import { toast } from "react-toastify";

// 폴더 목록 가져오기
export const getFolder = async (): Promise<Folder[]> => {
  try {
    const response: AxiosResponse<Folder[]> = await apiClient.get("/folders");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;

    toast.error(`폴더 불러오기 실패: ${message}`, {
      toastId: "get-folder-error",
    });
    console.error("getFolder 에러:", message);
    return [];
  }
};

// 폴더 생성
export const postFolder = async (newFolderName: string): Promise<Folder> => {
  try {
    const response: AxiosResponse<Folder> = await apiClient.post("/folders", {
      name: newFolderName,
    });
    toast.success("폴더가 생성되었습니다", {
      toastId: "post-folder-success",
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;

    toast.error(`폴더 생성 실패: ${message}`, {
      toastId: "post-folder-error",
    });
    console.error("postFolder 에러:", message);
    throw error;
  }
};

// 폴더 삭제
export const deleteFolder = async (folderId: number): Promise<void> => {
  try {
    await apiClient.delete(`/folders/${folderId}`);
    toast.success("폴더가 삭제되었습니다", {
      toastId: "delete-folder-success",
    });
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;

    toast.error(`삭제 실패: ${message}`, {
      toastId: "delete-folder-error",
    });
    console.error("deleteFolder 에러:", message);
    throw error;
  }
};

// 폴더명 변경
export const changeFolderName = async (folderId: number, newFolderName: string): Promise<Folder> => {
  try {
    const response: AxiosResponse<Folder> = await apiClient.put(`/folders/${folderId}`, {
      name: newFolderName,
    });
    toast.success("폴더 이름이 변경되었습니다", {
      toastId: "change-folder-success",
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;

    toast.error(`이름 변경 실패: ${message}`, {
      toastId: "change-folder-error",
    });
    console.error("changeFolderName 에러:", message);
    throw error;
  }
};
