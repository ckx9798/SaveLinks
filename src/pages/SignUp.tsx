import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import Button from "../components/Button";
import CommonInput from "../components/CommonInput";
import { postSignUp } from "../api/login";
import schema from "../zod/SingUpZod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    const { email, password, name } = data;
    postSignUp(email, password, name)
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src="/savelinks.svg" width={180} alt="Logo" />
        <button className="text-primary" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <form className="flex w-full max-w-[400px] flex-col" onSubmit={handleSubmit(handleSignUp)}>
        <CommonInput register={register} name="email" placeholder="이메일을 입력해주세요" labelName="이메일" />
        {errors.email && <p className="mb-3 text-red-500">{errors.email.message}</p>}

        <CommonInput register={register} name="name" placeholder="이름을 입력해주세요" labelName="이름" />
        {errors.name && <p className="mb-3 text-red-500">{errors.name.message}</p>}

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
            className="absolute right-3 top-[50%] translate-y-[-20%] text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="mb-3 text-red-500">{errors.confirmPassword.message}</p>}

        <Button size="response" text="회원가입" />
      </form>
    </div>
  );
}
