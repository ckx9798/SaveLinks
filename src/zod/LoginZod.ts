import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "올바른 이메일 형식이 아닙니다." })
    .min(1, { message: "이메일은 필수 입력 항목입니다." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
    .max(100, { message: "비밀번호는 100자를 초과할 수 없습니다." }),
});

export default schema;
