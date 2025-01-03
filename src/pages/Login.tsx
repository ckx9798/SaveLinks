import Button from "../components/Button";
import CommonInput from "../components/CommonInput";
import schema from "../zod/LoginZod";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onsubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-[400px] flex flex-col" onSubmit={handleSubmit(onsubmit)}>
        <CommonInput register={register} name="email" placeholder="이메일을 입력해주세요" labelName="이메일" />
        {errors.email && <p>{errors.email.message}</p>}
        <CommonInput register={register} name="password" placeholder="비밀번호를 입력해주세요" labelName="비밀번호" />
        {errors.password && <p>{errors.password.message}</p>}
        <Button size="response" text="로그인" />
      </form>
    </div>
  );
}
