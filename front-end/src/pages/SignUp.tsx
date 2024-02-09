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
          <Box variant="loginBox" backgroundImage="url(/bg-image.png)">
            <Typography variant="heading1">Create your Account </Typography>
            <Box display="flex" flexDirection="column">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography color="black" width="85px">
                  User Name:
                </Typography>
                <Controller
                  name="userName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="userName"
                      placeholder="Full Name"
                      borderRadius="5px"
                      width="330px"
                      height="30px"
                      backgroundColor="transparent"
                      fontSize="18px"
                      lineHeight="1.5"
                    />
                  )}
                />
              </Box>

              {!!errors.userName && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                  width="400px"
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
                  width="400px"
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
                  width="400px"
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
                  width="400px"
                >
                  {errors?.confirmPassword?.message}
                </Typography>
              )}
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="500px"
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
