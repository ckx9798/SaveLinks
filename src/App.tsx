import "./App.css";
import "./styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Login from "./pages/Login";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Devtools 추가
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지
      gcTime: 1000 * 60 * 10, // ✅ 10분 동안 캐시 유지 후 삭제
    },
  },
});

// LocalStorage에 React Query 캐시 저장
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage, // LocalStorage 사용
});

// persistQueryClient를 사용하여 캐시 데이터 유지
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
