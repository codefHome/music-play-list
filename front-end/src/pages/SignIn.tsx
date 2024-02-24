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
        <Box
          variant="loginBox"
          backgroundImage="url(/bg-image.png)"
          className="flex flex-col gap-4 w-fit"
        >
          <Typography variant="heading1">Login to Your Account</Typography>

          <EmailInput
            id="email"
            placeholder="Email"
            label="Email"
            control={control}
            errors={errors?.email}
            errorMessage={errors?.email?.message ?? ""}
          />

          <Box display="flex" flexDirection="column">
            <PasswordField
              id="password"
              placeholder="Password"
              control={control}
              label="Password"
              errors={errors?.password}
              errorMessage={errors?.password?.message ?? ""}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="w-fit"
          >
            <Typography variant="heading3">Forgot Password</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="w-fit"
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
