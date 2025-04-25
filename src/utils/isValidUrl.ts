const ensureProtocol = (url: string): string => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(ensureProtocol(url));
    return true;
  } catch {
    return false;
  }
};

export default isValidUrl;
