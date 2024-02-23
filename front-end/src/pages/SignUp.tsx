import { Controller } from "react-hook-form";
import Box from "../components/Box";
import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import PasswordField from "../components/PasswordField";
import Typography from "../components/Typography";
import useSignUpForm from "../hooks/useSignUpForm";
import TextField from "../components/TextField";

const SignUp = () => {
  const { control, errors, handleSubmit, onSubmit } = useSignUpForm();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="100%"
      backgroundColor=""
    >
      <Box variant="primary">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            variant="loginBox"
            backgroundImage="url(/bg-image.png)"
            className="gap-0 lg:gap-3 w-fit"
          >
            <Typography variant="heading1">Create your Account </Typography>
            <Box display="flex" flexDirection="column" className="w-full">
              <Box className="flex flex-col lg:flex-row justify-center items-center w-full">
                <Typography className="text-black w-[95px] ml-0 lg:ml-[-5px]">
                  User Name:
                </Typography>
                <Box className="w-[250px] lg:w-[345px]">
                  <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="userName"
                        placeholder="Full Name"
                        border="1px solid black"
                        borderRadius="5px"
                        className="w-[250px] lg:w-[345px] "
                        height="45px"
                        backgroundColor="transparent"
                        fontSize="18px"
                        lineHeight="1.5"
                      />
                    )}
                  />
                </Box>
              </Box>

              {!!errors.userName && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                  className="w-fit"
                >
                  {errors?.userName?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <EmailInput
                id="email"
                placeholder="Email"
                label="Email"
                control={control}
              />
              {!!errors.email && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                  className="w-fit"
                >
                  {errors?.email?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <PasswordField
                id="password"
                placeholder="Password"
                control={control}
                label="Password"
              />
              {!!errors.password && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                  className="w-fit"
                >
                  {errors?.password?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <PasswordField
                id="confirmPassword"
                placeholder="Confirm Password"
                control={control}
                label="Confirm "
              />
              {!!errors.confirmPassword && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                  className="w-fit"
                >
                  {errors?.confirmPassword?.message}
                </Typography>
              )}
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              className="w-fit"
              mt={2}
            >
              <Button type="submit" variant="auth">
                Sign Up
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default SignUp;
