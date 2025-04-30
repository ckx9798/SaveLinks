import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // 분석 결과 자동으로 브라우저에서 열기
      filename: "bundle-analysis.html", // 결과 파일 이름
      gzipSize: true, // gzip 크기 표시
      brotliSize: true, // brotli 크기 표시
    }),
    compression({
      algorithm: "gzip", // gzip or brotliCompress
      ext: ".gz", // 생성될 파일 확장자
      verbose: true, // 콘솔 로그 표시
      disable: false, // 압축 활성화
      threshold: 2024, // 최소 압축 크기 (2KB 이상만 압축)
    }),
  ],
});
