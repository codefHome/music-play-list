import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import PasswordField from "../components/PasswordField";
import Typography from "../components/Typography";
import useLoginForm from "../hooks/useLoginForm";

const SignIn = () => {
  const { control, errors, handleSubmit, onSubmit } = useLoginForm();
  return (
    <Box variant="primary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box variant="loginBox" backgroundImage="url(/bg-image.png)">
          <Typography variant="heading1">Login to Your Account</Typography>

          <Box
            display="flex"
            flexDirection="column"
            backgroundColor="transparent"
          >
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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="500px"
          >
            <Typography variant="heading3">Forgot Password</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="500px"
          >
            <Button type="submit" variant="auth">
              Sign In
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
