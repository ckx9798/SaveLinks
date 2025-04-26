import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../components/Button";
import CommonInput from "../components/CommonInput";
import { LoginFormInputs } from "../type/login";
import { postLogin } from "../api/login";
import schema from "../zod/LoginZod";
import { toast } from "react-toastify";
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

  const handleTestLogin = async () => {
    const testEmail = "test011@naver.com";
    const testPassword = "asd123!!";

    // setValue("email", testData.email);
    // setValue("password", testData.password);

    try {
      await postLogin(testEmail, testPassword);
      toast.success("테스트 계정 로그인 성공");
      // 로그인 성공하면 원하는 페이지로 이동!
      navigate("/links");
    } catch (error) {
      console.error("테스트 계정 로그인 실패:", error);
    }
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 md:px-4">
      {/* 배경 이미지 */}
      <img
        src="/login_bg.webp"
        alt="Login background"
        className="absolute left-0 top-0 -z-20 h-full w-full animate-fadeIn object-cover opacity-0"
      />

      {/* 로그인 폼 영역 */}
      <div className="z-10 flex flex-col items-center justify-center">
        <img src="/saveLinks_logo.webp" width={300} alt="Logo" className="mb-8" />

        <button className="-mt-20 text-lg text-gray01" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
      <form className="flex w-full max-w-[400px] flex-col" onSubmit={handleSubmit(handleLogin)}>
        {/* 이메일 입력 */}
        <CommonInput register={register} name="email" placeholder="이메일을 입력해주세요" labelName="이메일" />
        {errors.email && <p className="mb-3 text-red-500">{errors.email.message}</p>}

        {/* 비밀번호 입력 */}
        <div className="relative">
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
        <span className="mt-4 flex flex-col gap-7">
          <Button size="response" text="로그인" />
        </span>
      </form>
      <span className="mt-8 w-full max-w-[400px]">
        <Button
          size="response"
          color="bg-gradient-to-r from-rose-400 to-red-700"
          text="테스트계정으로 로그인"
          onClick={handleTestLogin}
        />
      </span>
    </div>
  );
}
