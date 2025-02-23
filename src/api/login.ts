import { MdEmail } from "react-icons/md";
import apiClient from "./axiosInstance";

export const postLogin = async (email, password) => {
  try {
    const response = await fetch("https://linkbrary-api.vercel.app/40-1/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // 응답 상태 코드 확인
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // 액세스 토큰을 쿠키에 저장
    document.cookie = `accessToken=${data.accessToken}; path=/; secure; samesite=strict`;

    return data;
  } catch (error) {
    console.error("Error during login:", error.message);

    // 에러 메시지를 반환하거나, 필요 시 사용자에게 전달할 수 있는 형식으로 처리
    return { error: error.message };
  }
};

export const postSignUp = async (email, password, name) => {
  try {
    const response = await apiClient.post("/auth/sign-up", {
      email: email,
      password: password,
      name: name,
    });
    return response.data;
  } catch (error) {
    console.error("putFavoite", error.response?.data || error.message);
    throw error;
  }
};
