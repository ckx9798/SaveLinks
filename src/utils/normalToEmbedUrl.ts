import { isInstagramReel, isYoutube, normalizeInstagramUrl, normalizeYoutubeUrl } from "./urlUtils";

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
  return url;
};
