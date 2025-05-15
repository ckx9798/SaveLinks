import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const isExtensionBuild = process.env.BUILD_TARGET === "extension";

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
  build: {
    outDir: "dist",
    rollupOptions: {
      input: isExtensionBuild
        ? {
            popup: resolve(__dirname, "src/extension/popup.html"),
            content: resolve(__dirname, "src/extension/content.ts"),
          }
        : resolve(__dirname, "index.html"),
      output: isExtensionBuild ? { entryFileNames: "[name].js" } : {}, // 웹 배포는 기본 출력 설정 사용
    },
  },
});
