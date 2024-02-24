import { useEffect, useState } from "react";
import Box from "../components/Box";
import CommonPieChart from "../components/CommonPieChart";
import Typography from "../components/Typography";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { countSummaryStart } from "../store/slices/countSummarySlice";

import SongInGenre from "../components/SongInGenre";
import SongAndAlbumOfEachArtist from "../components/SongAndAlbumOfArtist";
import SongInEachAlbum from "../components/SongInEachAlbum";
import Button from "../components/Button";
import ComboBox from "../components/ComboBox";
import { VisibleType } from "../interfaces/songTypes";
import { getUserId } from "../utils/localStorage";

const StatView = () => {
  const initialValue = {
    count: false,
    song: false,
    album: false,
    genre: false,
  };
  const { data: countSummary } = useAppSelector((state) => state.countSummary);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<VisibleType>({
    ...initialValue,
    count: true,
  } as VisibleType);
  const [selectedOption, setSelectedOption] = useState<string>("count");
  const handleCount = () => {
    setVisible({ ...initialValue, count: true });
    setSelectedOption("");
  };
  const handleSong = () => {
    setVisible({ ...initialValue, song: true });
    setSelectedOption("");
  };
  const handleAlbum = () => {
    setVisible({ ...initialValue, album: true });
    setSelectedOption("");
  };
  const handleGenre = () => {
    setVisible({ ...initialValue, genre: true });
    setSelectedOption("");
  };

  const handleComboBoxChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    setVisible(initialValue);
  };
  const userId = getUserId() ?? "";
  useEffect(() => {
    dispatch(countSummaryStart({ userId }));
  }, [dispatch]);
  const options = [
    { label: "Count Summary", value: "count" },
    { label: "Total Songs in Genre", value: "genre" },
    { label: "Total Song and Album of Artist", value: "song" },
    { label: "Total song in Album", value: "album" },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      variant="gap"
      className="bg-[#e0f3dd] h-[89%] p-4 "
    >
      <Typography className="my-4" variant="heading1">
        Top Statistics of Songs
      </Typography>
      <Box className="flex flex-col lg:flex-row border-1 bg-white  w-full h-full">
        <Box className="  bg-white lg:bg-blue-500 w-full md:w-1/5">
          <Box className="hidden lg:flex flex-col   p-4  gap-5 bg-blue-200 h-full">
            <Button
              onClick={handleCount}
              className="bg-transparent text-black border-none text-left hover:bg-green-100"
            >
              Count Summary
            </Button>
            <Button
              onClick={handleGenre}
              className="bg-transparent text-black border-none text-left hover:bg-green-100"
            >
              Total Songs in Genre
            </Button>
            <Button
              onClick={handleSong}
              className="bg-transparent text-black border-none text-left hover:bg-green-100"
            >
              Total Song and Album of Artist
            </Button>
            <Button
              onClick={handleAlbum}
              className="bg-transparent text-black border-none text-left hover:bg-green-100"
            >
              Total song in Album
            </Button>
          </Box>
          <Box className="flex lg:hidden w-full h-auto ">
            <ComboBox
              onChange={handleComboBoxChange}
              color="black"
              options={options}
            />
          </Box>
        </Box>

        <Box className="flex justify-center items-center w-full lg:w-4/5 p-3">
          {(visible.count || selectedOption === "count") && (
            <Box
              className="flex flex-col gap-4 border-1 m-1 "
              backgroundColor="#FFF"
              borderRadius="15px"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            >
              <CommonPieChart chartData={countSummary} />
            </Box>
          )}
          {(visible.genre || selectedOption === "genre") && (
            <Box
              className="flex flex-col gap-4 border-1 m-1 relative pb-4 w-full"
              backgroundColor="#FFF"
            >
              <SongInGenre />
            </Box>
          )}
          {(visible.song || selectedOption === "song") && (
            <SongAndAlbumOfEachArtist />
          )}
          {(visible.album || selectedOption === "album") && <SongInEachAlbum />}
        </Box>
      </Box>
    </Box>
  );
};
export default StatView;
