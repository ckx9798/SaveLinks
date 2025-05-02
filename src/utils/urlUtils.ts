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

// 인스타 확인
export const isInstagramReel = (url: string): boolean => {
  return url.includes("instagram.com/reel");
};

// 인스타 ID 추출
export const extractInstagramId = (url: string): string => {
  const match = url.match(/\/reel\/([^\/?]+)/);
  return match ? match[1] : "";
};

// 인스타 임베드용 변환
export const normalizeInstagramUrl = (url: string): string => {
  url = url.trim(); // 공백제거

  // 공유 버전으로 변경
  if (url.includes("instagram.com/reels/")) {
    url = url.replace("instagram.com/reels/", "instagram.com/reel/");
  }
  // 정규식
  const isReel = /instagram\.com\/reel\/[^\/?]+/.test(url);

  // 공유버전 확인
  const hasUtm = url.includes("utm_source");

  if (isReel && !hasUtm) {
    const normalized = url.endsWith("/") ? `${url}?utm_source=ig_web_copy_link` : `${url}/?utm_source=ig_web_copy_link`;
    return normalized;
  }

  return url;
};

// 유튜브 확인
export const isYoutube = (url: string): boolean => {
  return url.includes("youtube.com");
};

// 유튜브 ID 추출
export const extractYoutubeId = (url: string): string => {
  const match = url.match(/\/shorts\/([^\/?]+)/);
  return match ? match[1] : "";
};

// 유튜브 임베드용 변환
export const normalizeYoutubeUrl = (url: string): string => {
  url = url.trim();

  // Shorts URL 처리
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }
  // 일반영상 URL 처리
  const videoMatch = url.match(/v=([^?&]+)/);
  if (videoMatch) {
    return `https://www.youtube.com/embed/${videoMatch[1]}`;
  }

  return url;
};
