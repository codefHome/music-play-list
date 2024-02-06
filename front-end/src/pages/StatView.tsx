import { useEffect } from "react";
import Box from "../components/Box";
import CommonPieChart from "../components/CommonPieChart";
import Typography from "../components/Typography";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { countSummaryStart } from "../store/slices/countSummarySlice";

import SongInGenre from "../components/SongInGenre";
import SongAndAlbumOfEachArtist from "../components/SongAndAlbumOfArtist";
import SongInEachAlbum from "../components/SongInEachAlbum";

const StatView = () => {
  const { data: countSummary } = useAppSelector((state) => state.countSummary);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(countSummaryStart());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      variant="gap"
    >
      <Typography variant="heading1">Top Statistics of Songs</Typography>
      <Box variant="summary">
        <Box width="fit-content" height="400px">
          <Box variant="tableStyle">
            <Typography variant="heading1" mb="20px">
              Total Count Summary
            </Typography>
            <CommonPieChart chartData={countSummary ?? []} />
          </Box>
        </Box>
        <SongInGenre />
      </Box>
      <Box variant="summary">
        <SongAndAlbumOfEachArtist />
        <SongInEachAlbum />
      </Box>
    </Box>
  );
};
export default StatView;
