import axios from "axios";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export const askToGemini = async (userMessage: string): Promise<string> => {
  console.log("🌍 API KEY:", apiKey);

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "응답이 없어요!";
  } catch (error) {
    console.error("Gemini API 호출 실패:", error);
    return "❌ 에러가 발생했어요!";
  }
};
