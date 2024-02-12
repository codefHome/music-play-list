import { toast } from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import SignUpSchemaValidator, { SignUpSchema } from "../schema/SignUpShema";
import { SignupType } from "../interfaces/authType";
import { useAppDispatch,} from "../store/hooks";
import { registerStart, setToggleAuth } from "../store/slices/registerSlice";
import store from '../store/store';

const useSignUpForm = () => {

  const dispatch = useAppDispatch()
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
    dispatch(registerStart(data));
  
    await new Promise((resolve) => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (state.register.loading === false) {
          unsubscribe();
          resolve(0);
        }
      });
    });
  
    const state = store.getState();
    if (state.register.successData.success) {
      const toastId = toast.success(state.register.successData.msg);
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
      reset();
    } else {
      const toastId = toast.error(state.register.successData.msg);
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
    }
    dispatch(setToggleAuth());
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
