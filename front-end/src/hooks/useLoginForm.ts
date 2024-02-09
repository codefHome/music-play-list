import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import LoginSchemaValidator, { LoginSchema } from "../schema/LoginSchema";
import { LoginType } from "../interfaces/authType";

const useLoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginSchemaValidator>({
    mode: "onChange",

    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginSchemaValidator> = async (
    data: LoginType
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

export default useLoginForm;
