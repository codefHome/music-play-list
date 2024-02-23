import { CardProps } from "../interfaces/songTypes";
import Box from "./Box";

import Typography from "./Typography";

const SongCard = ({ title, artist, album, genre, icon }: CardProps) => {
  return (
    <Box className="flex flex-col w-full px-2 h-auto border-1 bg-white rounded-lg">
      <Box className="flex justify-between items-center bg-[#A7E8D0]">
        <Typography className="w-full text-black bold text-lg py-5 flex justify-center break-all ">
          {title}
        </Typography>
        {icon}
      </Box>

      <Box className="flex flex-col p-2 gap-2 ">
        <Box className="flex  items-center">
          <Typography variant="heading2">Artist:&nbsp;</Typography>
          <Typography variant="normal" className="break-all">
            {artist}
          </Typography>
        </Box>
        <Box className="flex ">
          <Typography variant="heading2">Album:&nbsp;</Typography>
          <Typography variant="normal" className="break-all">
            {album}
          </Typography>
        </Box>
        <Box className="flex ">
          <Typography variant="heading2">Genre:&nbsp;</Typography>
          <Typography variant="normal" className="break-all">
            {genre}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SongCard;
