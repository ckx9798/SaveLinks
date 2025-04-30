import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse, Link, LinkResponse, LinksByIdResponse } from "../type/link";

import apiClient from "./axiosInstance";
import { toast } from "react-toastify";

// 전체 링크 목록 가져오기
export const getLinks = async (): Promise<LinkResponse> => {
  try {
    const response: AxiosResponse<LinkResponse> = await apiClient.get("/links");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`링크 불러오기 실패: ${message}`, {
      toastId: "get-links-error",
    });
    console.error("getLinks 에러", message);
    throw error;
  }
};

// 폴더별 링크 조회
export const getLinksById = async (folderId: number): Promise<LinksByIdResponse> => {
  try {
    const response: AxiosResponse<LinksByIdResponse> = await apiClient.get(`/folders/${folderId}/links`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`폴더 링크 조회 실패: ${message}`, {
      toastId: "get-links-by-id-error",
    });
    console.error("getLinksById 에러", message);
    throw error;
  }
};

// 링크 추가
export const postLinks = async (url: string, folderId: number): Promise<Link> => {
  try {
    const response: AxiosResponse<Link> = await apiClient.post("/links", {
      url,
      folderId,
    });
    toast.success("링크가 추가되었습니다", {
      toastId: "post-links-success",
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`링크 추가 실패: ${message}`, {
      toastId: "post-links-error",
    });
    console.error("postLinks", message);
    throw error;
  }
};

// 즐겨찾기 링크 조회
export const getFavorite = async (): Promise<LinkResponse> => {
  try {
    const response: AxiosResponse<LinkResponse> = await apiClient.get("/favorites");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`즐겨찾기 불러오기 실패: ${message}`, {
      toastId: "get-favorite-error",
    });
    console.error("getFavorite", message);
    throw error;
  }
};

// 즐겨찾기 상태 변경
export const putFavorite = async (linkId: number, isFavorite: boolean): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await apiClient.put(`/links/${linkId}/favorite`, {
      favorite: !isFavorite,
    });
    toast.success("즐겨찾기 상태가 변경되었습니다", {
      toastId: "put-favorite-success",
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`즐겨찾기 변경 실패: ${message}`, {
      toastId: "put-favorite-error",
    });
    console.error("putFavorite", message);
    throw error;
  }
};

// 링크 수정
export const EditLinkUrl = async (linkId: number, newUrl: string): Promise<Link> => {
  try {
    const response: AxiosResponse<Link> = await apiClient.put(`links/${linkId}`, {
      url: newUrl,
    });
    toast.success("링크가 수정되었습니다.", {
      toastId: "edit-link-success",
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`링크 수정 실패: ${message}`, {
      toastId: "edit-link-error",
    });
    console.error("EditLinkUrl", message);
    throw error;
  }
};

// 링크 삭제
export const DeleteLinkUrl = async (linkId: number): Promise<void> => {
  try {
    await apiClient.delete(`links/${linkId}`);
    toast.success("링크가 삭제되었습니다.", {
      toastId: "delete-link-success",
    });
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`링크 삭제 실패: ${message}`, {
      toastId: "delete-link-error",
    });
    console.error("DeleteLinkUrl", message);
    throw error;
  }
};
