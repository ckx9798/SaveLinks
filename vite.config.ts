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
  ],
});
