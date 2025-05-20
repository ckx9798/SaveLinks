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
  return (
    url.includes("instagram.com/reel/") || url.includes("instagram.com/reels/") || url.includes("instagram.com/p/")
  );
};

// 인스타 ID 추출
export const extractInstagramId = (url: string): string => {
  const match = url.match(/\/reel\/([^/?]+)/);
  return match ? match[1] : "";
};

// 인스타 임베드용 변환
export const normalizeInstagramUrl = (url: string): string => {
  url = url.trim(); // 공백제거

  // 공유 버전으로 변경
  if (url.includes("instagram.com/reels/")) {
    url = url.replace("instagram.com/reels/", "instagram.com/reel/");
  }

  if (url.includes("instagram.com/p/")) {
    url = url.replace("instagram.com/p/", "instagram.com/reel/");
  }

  // ID 추출
  const match = url.match(/instagram\.com\/reel\/([^/?]+)/);
  const id = match ? match[1] : "";

  if (id) {
    // 임베드용 URL로 변환
    return `https://www.instagram.com/reel/${id}/embed`;
  }

  // 변환 실패 시 원래 URL 반환
  return url;
};

// 유튜브 확인
export const isYoutube = (url: string): boolean => {
  return url.includes("youtube.com");
};

// 유튜브 ID 추출
export const extractYoutubeId = (url: string): string => {
  const match = url.match(/\/shorts\/([^/?]+)/);
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

// TikTok 확인
export const isTiktok = (url: string): boolean => {
  return url.includes("tiktok.com/") && url.includes("/video/");
};

// TikTok video ID 추출
export const extractTiktokId = (url: string): string => {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
};

// TikTok 임베드용 변환
export const normalizeTiktokUrl = (url: string): string => {
  url = url.trim();
  const id = extractTiktokId(url);
  if (id) {
    return `https://www.tiktok.com/embed/${id}`;
  }
  return url;
};
