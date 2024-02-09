import { z } from "zod";

// export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/;
export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email.").refine((value) => value.trim().length > 0, {
    message: "Email is required",
  }),
 
  password:z.string() .refine((value) => value.trim().length > 0, {
    message: "Password is required",
  }),
  
})
  type LoginSchemaValidator=z.infer<typeof LoginSchema>
  export default LoginSchemaValidator
