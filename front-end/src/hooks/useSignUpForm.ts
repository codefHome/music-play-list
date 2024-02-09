import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import SignUpSchemaValidator, { SignUpSchema } from "../schema/SignUpShema";
import { SignupType } from "../interfaces/authType";

const useSignUpForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpSchemaValidator>({
    mode: "onChange",

    defaultValues: {
        userName:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit: SubmitHandler<SignUpSchemaValidator> = async (
    data: SignupType
  ) => {
    console.log({ data });
  };

  return {
    control,
    onSubmit,
    errors,
    handleSubmit,
    reset,
  };
};

export default useSignUpForm;
