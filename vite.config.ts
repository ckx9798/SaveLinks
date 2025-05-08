import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip", // gzip or brotliCompress
      ext: ".gz", // 생성될 파일 확장자
      verbose: true, // 콘솔 로그 표시
      disable: false, // 압축 활성화
      threshold: 2024, // 최소 압축 크기 (2KB 이상만 압축)
    }),
  ],
  server: {
    proxy: {
      "/api": {
        // target: "http://127.0.0.1:3001",
        target: "https://savelinks-server.onrender.com",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/extension/popup.html"),
        content: resolve(__dirname, "src/extension/content.ts"),
      },
      output: {
        entryFileNames: "[name].js", // ✅ dist/assets 대신 dist/로 바로 출력
      },
    },
  },
});
