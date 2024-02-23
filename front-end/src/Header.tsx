import { Link, useNavigate } from "react-router-dom";
import Box from "./components/Box";
import Typography from "./components/Typography";
import Button from "./components/Button";
import { deleteToken } from "./utils/sessionUtils";
import { removeUserId } from "./utils/localStorage";
import { MenuIcon } from "./assets/MenuIcon";
import IconButton from "./components/IconButton";
import SideMenu from "./pages/SideMenu";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleSignOut = () => {
    deleteToken();
    removeUserId();
    navigate("/");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box
        className="hidden md:flex"
        justifyContent="space-between"
        bg="white"
        p="15px"
        variant="gap"
        boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
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
            onClick={handleSignOut}
            color="blue"
            border="none"
            background="transparent"
          >
            Sign Out
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
          className="flex md:hidden justify-end"
        >
          <IconButton onClick={handleOpen} icon={<MenuIcon />} />
        </Box>
        <SideMenu showMenu={open} handleClose={handleClose} />
      </Box>
    </>
  );
};
export default Header;
