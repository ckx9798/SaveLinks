import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

// Axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://linkbrary-api.vercel.app/40-1",
  headers: { "Content-Type": "application/json" },
});

// 쿠키 타입 정의
interface Cookies {
  [key: string]: string;
}

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // 쿠키에서 accessToken 읽기
    const cookies: Cookies = document.cookie.split("; ").reduce((acc: Cookies, cookie: string) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});

    const accessToken: string | undefined = cookies.accessToken;

    // accessToken이 존재하면 Authorization 헤더에 추가
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config; // 수정된 config 반환
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 요청 중 에러 발생 시 처리
    return Promise.reject(error);
  }
);

export default apiClient;
