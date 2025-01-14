export const postLogin = async (email, password) => {
  const response = await fetch("https://linkbrary-api.vercel.app/40-1/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 추가
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await response.json();

  // 액세스 토큰을 쿠키에 저장
  document.cookie = `accessToken=${data.accessToken}; path=/; secure; samesite=strict`;

  return data;
};
