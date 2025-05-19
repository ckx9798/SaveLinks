import {
  isInstagramReel,
  isTiktok,
  isYoutube,
  normalizeInstagramUrl,
  normalizeTiktokUrl,
  normalizeYoutubeUrl,
} from "./urlUtils";

export const normalToEmbedUrl = (urls: string[]): string[] => {
  return urls.map((url) => {
    if (isYoutube(url)) {
      return normalizeYoutubeUrl(url);
    }
    if (isInstagramReel(url)) {
      return normalizeInstagramUrl(url);
    }
    return url;
  });
};

export const normalToEmbedUrlSingle = (url: string): string => {
  if (isYoutube(url)) {
    return normalizeYoutubeUrl(url);
  }
  if (isInstagramReel(url)) {
    return normalizeInstagramUrl(url);
  }
  if (isTiktok(url)) {
    return normalizeTiktokUrl(url);
  }
  return url;
};
