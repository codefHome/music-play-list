import { Link } from "react-router-dom";
import Box from "../components/Box";
import Typography from "../components/Typography";
import { SideMenuProps } from "../interfaces/songTypes";
import IconButton from "../components/IconButton";
import CloseIcon from "../assets/CloseIcon";

const SideMenu = ({ showMenu, handleClose }: SideMenuProps) => {
  return (
    <>
      {showMenu && (
        <Box className="fixed left-0 top-0 w-2/5 md:w-1/6 h-2/4 bg-[#92E3A9] p-3 z-50">
          <Box className="absolute right-0 top-0">
            <IconButton onClick={handleClose} icon={<CloseIcon />} />
          </Box>
          <ul className="flex flex-col gap-4 justify-start">
            <Box onClick={handleClose}>
              <li>
                <Link to="/home">
                  <Typography variant="heading2">Home</Typography>
                </Link>
              </li>
            </Box>
            <Box onClick={handleClose}>
              <li>
                <Link to="/add-song">
                  <Typography variant="heading2">Add Songs</Typography>
                </Link>
              </li>
            </Box>
            <Box onClick={handleClose}>
              <li>
                <Link to="/view-songs">
                  <Typography variant="heading2">View Songs</Typography>
                </Link>
              </li>
            </Box>
            <Box onClick={handleClose}>
              <li>
                <Link to="/view-Statistics">
                  <Typography variant="heading2">
                    {" "}
                    View Songs Statics
                  </Typography>
                </Link>
              </li>
            </Box>

            <Box onClick={handleClose}>
              <li>
                <Link to="/">
                  <Typography variant="heading2"> Sign out</Typography>
                </Link>
              </li>
            </Box>
          </ul>
        </Box>
      )}
    </>
  );
};

export default SideMenu;
