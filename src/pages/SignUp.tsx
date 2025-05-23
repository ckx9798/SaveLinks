import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../components/Button";
import CommonInput from "../components/CommonInput";
import { SignUpFormInputs } from "../type/login";
import { postSignUp } from "../api/login";
import schema from "../zod/SingUpZod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  // 회원가입 핸들러 함수 타입 정의
  const handleSignUp: SubmitHandler<SignUpFormInputs> = (data) => {
    const { email, password, name } = data;
    postSignUp(email, password, name)
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 md:px-4">
      {/* 배경 이미지 */}
      <img
        src="/login_bg.webp"
        alt="Login background"
        className="animate-fadeIn absolute left-0 top-0 -z-20 h-full w-full object-cover opacity-0"
      />

      {/* 로그인 폼 영역 */}
      <div className="z-10 flex flex-col items-center justify-center">
        <img src="/saveLinks_logo.webp" width={300} alt="Logo" className="mb-8" />

        <button className="-mt-20 text-lg text-gray01" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <form className="flex w-full max-w-[400px] flex-col" onSubmit={handleSubmit(handleSignUp)}>
        {/* 이메일 입력 */}
        <CommonInput register={register} name="email" placeholder="이메일을 입력해주세요" labelName="이메일" />
        {errors.email && <p className="mb-3 text-red-500">{errors.email.message}</p>}

        {/* 이름 입력 */}
        <CommonInput register={register} name="name" placeholder="이름을 입력해주세요" labelName="이름" />
        {errors.name && <p className="mb-3 text-red-500">{errors.name.message}</p>}

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

        {/* 비밀번호 확인 입력 */}
        <div className="relative">
          <CommonInput
            register={register}
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
            labelName="비밀번호 확인"
            type={showConfirmPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute right-3 top-[50%] mb-5 translate-y-[-20%] text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="mb-3 text-red-500">{errors.confirmPassword.message}</p>}

        <span className="mt-4">
          <Button size="response" text="회원가입" />
        </span>
      </form>
    </div>
  );
}
