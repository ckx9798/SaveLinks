import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../components/Button";
import CommonInput from "../components/CommonInput";
import { LoginFormInputs } from "../type/login";
import { postLogin } from "../api/login";
import schema from "../zod/LoginZod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false); // 비밀번호 보이기/숨기기 상태

  // 로그인 핸들러 함수 타입 정의
  const handleLogin: SubmitHandler<LoginFormInputs> = (data) => {
    const { email, password } = data;
    postLogin(email, password)
      .then(() => navigate("/links"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[url(login_bg.png)] bg-cover px-6 md:px-4">
      <div className="flex flex-col items-center justify-center">
        <img src="/saveLinks_logo.png" width={400} alt="Logo" />
        <button className="-mt-16 text-lg text-gray01" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
      <form className="flex w-full max-w-[400px] flex-col" onSubmit={handleSubmit(handleLogin)}>
        {/* 이메일 입력 */}
        <CommonInput register={register} name="email" placeholder="이메일을 입력해주세요" labelName="이메일" />
        {errors.email && <p className="mb-3 text-red-500">{errors.email.message}</p>}

        {/* 비밀번호 입력 */}
        <div className="relative mb-6">
          <CommonInput
            register={register}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            labelName="비밀번호"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute right-3 top-[50%] translate-y-[-20%] text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
        </div>
        {errors.password && <p className="mb-3 text-red-500">{errors.password.message}</p>}

        <Button size="response" text="로그인" />
      </form>
    </div>
  );
}
