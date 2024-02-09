import { z } from "zod";

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/;
export const SignUpSchema = z.object({
  userName:z.string().min(3,'User Name at least contains 3 characters.').refine((value) => value.trim().length > 0, {
    message: "User Name is required",
  }),
  email: z.string().email("Please enter a valid email.").refine((value) => value.trim().length > 0, {
    message: "Email is required",
  }),
 
  password: z
  .string()
  .max(20, 'Password cannot exceed 20 characters')
  .refine((value) => /[A-Z]/.test(value), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine((value) => /[!@#$%^&*]/.test(value), {
    message: 'Password must contain at least one special character',
  })
  .refine((value) => /\d/.test(value), {
    message: 'Password must contain at least one digit',
  })
  .refine((value) => value.trim().length > 0, {
    message: "Password is required",
  })
  .refine((value) => value.length >= 8, {
    message: "Password should be more than 7 characters",
  }),
confirmPassword: z.string().refine((value) => value.trim().length > 0, {
    message: "Confirm Password is required",
  })
})
.refine((data) => data.password === data.confirmPassword, {
  message: "The passwords miss match.",
  path: ["confirmPassword"],
})

  type SignUpSchemaValidator=z.infer<typeof SignUpSchema>
  export default SignUpSchemaValidator
