import { Link, useNavigate } from "react-router-dom";
import Box from "./components/Box";
import Typography from "./components/Typography";
import Button from "./components/Button";
import { deleteToken } from "./utils/sessionUtils";
import { removeUserId } from "./utils/localStorage";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOUt = () => {
    deleteToken();
    removeUserId();
    navigate("/");
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg="white"
      p="15px"
      variant="gap"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
    >
      <Box display="flex" justifyContent="start" pl={3}>
        <Link to="/home">
          <Typography color="blue">Home</Typography>
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="end"
        alignItems="center"
        variant="gap"
        mr={3}
      >
        <Link to="/add-song">
          <Typography color="blue">Add Songs</Typography>
        </Link>
        <Link to="/view-songs">
          <Typography color="blue">View Songs</Typography>
        </Link>
        <Link to="/view-Statistics">
          <Typography color="blue"> View Songs Statics</Typography>
        </Link>

        <Button
          onClick={handleSignOUt}
          color="blue"
          border="none"
          background="transparent"
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};
export default Header;
