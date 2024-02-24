import Typography from "./Typography";
import { InformationCardType } from "../interfaces/songTypes";
import Box from "./Box";

const InformationCard = ({
  title,
  artist,
  album,
  genre,
}: InformationCardType) => {
  return (
    <Box className="flex flex-wrap lg:flex-col justify-start lg:justify-center items-center w-full">
      <Typography variant="playerInfo">{artist},&nbsp;</Typography>
      <Typography variant="playerInfo">{title},&nbsp;</Typography>
      <Typography variant="playerInfo">{album},&nbsp;</Typography>
      <Typography variant="playerInfo">{genre}</Typography>
    </Box>
  );
};

export default InformationCard;
