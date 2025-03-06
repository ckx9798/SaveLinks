import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col text-3xl">
      <button onClick={() => navigate("/login")}>로그인</button>
      <button onClick={() => navigate("/links")}>링크</button>
      <button onClick={() => navigate("/favorite")}>선호</button>
    </div>
  );
}
