import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: "https://linkbrary-api.vercel.app/40-1",
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    // 쿠키에서 accessToken 읽기
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});

    const accessToken = cookies.accessToken;

    // accessToken이 존재하면 Authorization 헤더에 추가
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config; // 수정된 config 반환
  },
  (error) => {
    // 요청 중 에러 발생 시 처리
    return Promise.reject(error);
  }
);

export default apiClient;
