import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponse } from "../type/folder";
import { SignUpFormInputs } from "../type/login";
import apiClient from "./axiosInstance";
import { toast } from "react-toastify";

interface LoginResponse {
  accessToken: string;
}

export const postLogin = async (email: string, password: string): Promise<LoginResponse | { error: string }> => {
  try {
    const response = await fetch("https://linkbrary-api.vercel.app/40-1/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: LoginResponse = await response.json();

    document.cookie = `accessToken=${data.accessToken}; path=/; secure; samesite=strict`;

    return data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`로그인 실패: ${message}`, {
      toastId: "put-favorite-error",
    });
    console.error("Error during login:", (error as Error).message);
    return { error: (error as Error).message };
  }
};

export const postSignUp = async (email: string, password: string, name: string): Promise<SignUpFormInputs> => {
  try {
    const response: AxiosResponse<SignUpFormInputs> = await apiClient.post("/auth/sign-up", {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const message = axiosError.response?.data?.message || axiosError.message;
    toast.error(`회원가입 실패: ${message}`, {
      toastId: "put-favorite-error",
    });
    console.error("Sign-up error", (error as AxiosError).response?.data || (error as Error).message);
    throw error;
  }
};
