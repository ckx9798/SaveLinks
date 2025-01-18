import Button from "../components/Button";
import CommonInput from "../components/CommonInput";
import { getFolder } from "../api/folder";
import { postLogin } from "../api/login";
import schema from "../zod/LoginZod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const onsubmit = (data) => {
    const { email, password } = data;
    postLogin(email, password)
      .then((response) => {
        navigate("/links");
      })
      .catch((error) => console.error(error));
  };

  const check1 = () => {
    getFolder();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div>
        <img src="/savelinks.svg" width={180} />
        <p>회원이 아니신가요?</p>
        <a>회원가입하기</a>
      </div>
      <form className="flex w-full max-w-[400px] flex-col" onSubmit={handleSubmit(onsubmit)}>
        <CommonInput register={register} name="email" placeholder="이메일을 입력해주세요" labelName="이메일" />
        {errors.email && <p className="mb-3 text-red-500">{errors.email.message}</p>}
        <CommonInput register={register} name="password" placeholder="비밀번호를 입력해주세요" labelName="비밀번호" />
        {errors.password && <p className="mb-3 text-red-500">{errors.password.message}</p>}
        <Button size="response" text="로그인" />
      </form>
      <button onClick={check1}>asdasd</button>
    </div>
  );
}
