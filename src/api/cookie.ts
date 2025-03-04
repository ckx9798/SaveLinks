export const getCookie = (name: string): string | undefined => {
  const value: string = `; ${document.cookie}`;
  const parts: string[] = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop();
    return cookieValue ? cookieValue.split(";").shift() : undefined;
  }
  return undefined;
};
