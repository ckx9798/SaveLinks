import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
});
