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
      backgroundColor="hsl(112, 48%, 91%)"
      className="w-full h-auto lg:h-full self-center"
    >
      <Box
        className="flex flex-col lg:flex-row justify-center items-center h-auto p-2 self-center bg-[#FFEDE9] w-fit "
        border="1px solid white"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      >
        <Box
          variant="loginBox"
          backgroundImage="url(/login-back.png)"
          padding="20px"
          className="w-[280px] md:w-fit self-center"
        >
          <Typography
            color="#fae80b"
            backgroundColor="transparent"
            fontSize="30px"
            fontWeight="bold"
          >
            {toggleAuth ? "Got un Account ?" : "New Here?"}
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            fontSize="20px"
            className="w-[250px] md:w-full flex-wrap"
          >
            {toggleAuth
              ? "Sign in  and Enjoy your Music"
              : "Sign up and create your favorite music playlists."}
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="w-fit"
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
