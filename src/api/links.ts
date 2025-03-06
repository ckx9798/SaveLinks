import { AxiosError, AxiosResponse } from "axios";
import { Link, LinkResponse, LinksByIdResponse } from "../type/link";

import apiClient from "./axiosInstance";

export const getLinks = async (): Promise<LinkResponse> => {
  try {
    const response: AxiosResponse<LinkResponse> = await apiClient.get("/links");
    return response.data;
  } catch (error) {
    console.error("getLinks", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

export const getLinksById = async (folderId: number): Promise<LinksByIdResponse> => {
  try {
    const response: AxiosResponse<LinksByIdResponse> = await apiClient.get(`/folders/${folderId}/links`);
    return response.data;
  } catch (error) {
    console.error("getLinksWidthId", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

export const postLinks = async (url: string, folderId: number): Promise<Link> => {
  try {
    const response: AxiosResponse<Link> = await apiClient.post("/links", {
      url,
      folderId,
    });
    return response.data;
  } catch (error) {
    console.error("postLinks", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

export const getFavorite = async (): Promise<LinkResponse> => {
  try {
    const response: AxiosResponse<LinkResponse> = await apiClient.get("/favorites");
    return response.data;
  } catch (error) {
    console.error("getFavorite", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

export const putFavorite = async (linkId: number, isFavorite: boolean): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await apiClient.put(`/links/${linkId}/favorite`, {
      favorite: !isFavorite,
    });
    return response;
  } catch (error) {
    console.error("putFavoite", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

export const EditLinkUrl = async (linkId: number, newUrl: string): Promise<Link> => {
  try {
    const response: AxiosResponse<Link> = await apiClient.put(`links/${linkId}`, {
      url: newUrl,
    });
    return response.data;
  } catch (error) {
    console.error("EditLinkUrl", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};

export const DeleteLinkUrl = async (linkId: number): Promise<void> => {
  try {
    await apiClient.delete(`links/${linkId}`);
  } catch (error) {
    console.error("DeleteLinkUrl", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};
