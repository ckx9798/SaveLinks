import "./App.css";
import "./styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Devtools 추가
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

// Lazy-loaded components
const Favorite = React.lazy(() => import("./pages/Favorite"));
const Home = React.lazy(() => import("./pages/Home"));
const Layout = React.lazy(() => import("./components/layout/Layout"));
const Links = React.lazy(() => import("./pages/Links"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Memos = React.lazy(() => import("./pages/Memos"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/memos" element={<Memos />} />
            <Route element={<Layout />}>
              <Route path="/links" element={<Links />} />
              <Route path="/favorite" element={<Favorite />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
