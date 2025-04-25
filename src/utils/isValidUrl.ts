const ensureProtocol = (url: string): string => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(ensureProtocol(url));
    const hostname = parsedUrl.hostname;

    // 허용할 도메인 끝 목록
    const validTlds = [".com", ".net", ".org", ".co.kr", ".kr", ".io", ".dev"];
    return validTlds.some((tld) => hostname.endsWith(tld));
  } catch {
    return false;
  }
};

export default isValidUrl;
