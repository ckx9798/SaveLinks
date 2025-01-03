import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, { message: "이메일은11 필수값입니다" }),
  password: z.string().min(1, { message: "비번은 필수값입니다" }),
});

export default schema;
