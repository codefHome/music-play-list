import { Link } from "react-router-dom";
import Box from "./components/Box";
import Typography from "./components/Typography";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="end"
      alignItems="center"
      bg="white"
      p="15px"
      variant="gap"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
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
    </Box>
  );
};
export default Header;
