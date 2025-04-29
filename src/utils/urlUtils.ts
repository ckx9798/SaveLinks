// 응답 이미지 처리
export const isValidImage = (src?: string) =>
  !!src &&
  !src.startsWith("/meta") &&
  src !== "/link.svg" &&
  /^(https?:\/\/)/.test(src) &&
  /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(src);

// url 로직 통일
export const normalizeUrl = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
