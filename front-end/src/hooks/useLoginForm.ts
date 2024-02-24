import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import LoginSchemaValidator, { LoginSchema } from "../schema/LoginSchema";
import { LoginType } from "../interfaces/authType";
import { loginStart } from "../store/slices/loginSlice";
import { useAppDispatch } from "../store/hooks";
import store from "../store/store";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { setUserId } from "../utils/localStorage";
import { saveToken } from "../utils/sessionUtils";
import { setToggleAuth } from "../store/slices/registerSlice";

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();
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
    dispatch(loginStart(data));
    await new Promise((resolve) => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (state.login.loading === false) {
          unsubscribe();
          resolve(0);
        }
      });
    });
    const state = store.getState();
    if (state.login.successData.success) {
      navigate("/home");
      setUserId(state.login.data.userId)
   saveToken(state.login.data.token)
    } else {
      const toastId = toast.error(state.login.successData.msg);
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
    }
if(state.login.successData.msg?.toLowerCase() === 'user not found'){
  dispatch(setToggleAuth());
}
    reset();
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
