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
    <Box
      width="200px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="playerInfo">{artist}</Typography>
      <Typography variant="playerInfo">{title}</Typography>
      <Typography variant="playerInfo">{album}</Typography>
      <Typography variant="playerInfo">{genre}</Typography>
    </Box>
  );
};

export default InformationCard;
