import Box from "../components/Box";
import Button from "../components/Button";
import Typography from "../components/Typography";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setToggleAuth } from "../store/slices/registerSlice";

const AuthView = () => {
  const { toggleAuth } = useAppSelector((state) => state.register);
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(setToggleAuth());
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="100%"
    >
      <Box variant="primary">
        <Box
          variant="loginBox"
          width="300px"
          backgroundImage="url(/login-back.png)"
        >
          <Typography
            color="#fae80b"
            backgroundColor="transparent"
            fontSize="30px"
            fontWeight="bold"
          >
            {toggleAuth ? "Got un Account ?" : "New Here?"}
          </Typography>
          <Typography color="white" textAlign="center" fontSize="20px">
            {toggleAuth
              ? "Sign in  and Enjoy your Music"
              : "Sign up and create your favorite music playlists."}
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="500px"
            mt={3}
          >
            <Button type="button" onClick={handleToggle} variant="auth">
              {toggleAuth ? "Sign In" : "Sign up"}
            </Button>
          </Box>
        </Box>
        {toggleAuth ? <SignUp /> : <SignIn />}
      </Box>
    </Box>
  );
};
export default AuthView;
