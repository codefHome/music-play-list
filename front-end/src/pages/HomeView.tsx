import { ChangeEvent, useEffect, useState } from "react";
import Box from "../components/Box";

import MusicPlayer from "./VideoPlayerComponent";

import Typography from "../components/Typography";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSongsStart } from "../store/slices/songSlices";
import { Song } from "../interfaces/songTypes";
import TextField from "../components/TextField";
import { filterByGenreStart } from "../store/slices/filterByGenreSlice";

import IconButton from "../components/IconButton";
import { SearchIcon } from "../assets/SearchIcon";
import InformationCard from "../components/InformationCard";
import Pagination from "../components/Pagination";

const HomeView = () => {
  const [genre, setGenre] = useState<string>("");
  const [artistInfo, setArtistInfo] = useState<Song>({} as Song);
  const dispatch = useAppDispatch();
  const [musicPlaying, setMusicPlaying] = useState<boolean>(
    JSON.parse(localStorage.getItem("isPlaying")!)
  );

  const { songs, currentPage, totalPages } = useAppSelector(
    (state) => state.songs
  );
  const { data: filteredSong } = useAppSelector((state) => state.filterSong);
  const [currentUrl, setCurrentUrl] = useState<string>(
    getVideoIdFromUrl(songs[0]?.videoUrl) ?? ""
  );

  const handleCurrentUrl = (data: Song) => {
    localStorage.setItem("isPlaying", JSON.stringify(true));
    setMusicPlaying(JSON.parse(localStorage.getItem("isPlaying")!));
    if (data?.videoUrl !== undefined || data?.videoUrl !== "") {
      setCurrentUrl(getVideoIdFromUrl(data?.videoUrl) ?? "");
    }
    setArtistInfo(data);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseClick = (event: any, data: Song) => {
    setCurrentUrl(getVideoIdFromUrl(data?.videoUrl) ?? "");
    event.target.pauseVideo();
    setArtistInfo(data);
  };
  function getVideoIdFromUrl(url: string | undefined): string | null {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    while ((match = regex.exec(url ?? "")) !== null) {
      if (match[1] === "v") {
        return match[2];
      }
    }
    return null;
  }
  useEffect(() => {
    dispatch(fetchSongsStart({ page: currentPage, limit: 3 }));
    if (genre !== "") {
      dispatch(filterByGenreStart(genre));
    }
  }, [dispatch, currentPage, genre]);

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };
  const handleSearch = () => {
    if (genre !== "") {
      dispatch(filterByGenreStart(genre));
    }
  };
  useEffect(() => {
    localStorage.setItem("isPlaying", JSON.stringify(false));
    setMusicPlaying(JSON.parse(localStorage.getItem("isPlaying")!));
  }, []);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchSongsStart({ page: currentPage - 1, limit: 7 }));
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchSongsStart({ page: currentPage + 1, limit: 7 }));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      mb={0}
      mt="20px"
      justifyContent="space-between"
      className=" bg-[#e0f3dd] "
    >
      <Box
        display="flex "
        justifyContent={!musicPlaying ? "center" : ""}
        alignItems={!musicPlaying ? "center" : ""}
        width="100%"
      >
        <TextField
          onChange={handleFilter}
          borderRadius="10px"
          mb={3}
          placeholder="filter using genre"
          width="45%"
        />
        <Box mt={musicPlaying ? "5px" : "-5px"}>
          <IconButton icon={<SearchIcon />} onClick={handleSearch} />
        </Box>
      </Box>

      <Box
        className="flex "
        width="100%"
        mb="-15px"
        mt="-10px"
        justifyContent="space-between"
      >
        {musicPlaying ? (
          <Box className="flex flex-col lg:flex-row gap-5 w-full justify-between p-3">
            <Box className="flex flex-col w-full lg:w-3/5 ">
              <MusicPlayer height={450} url={currentUrl} autoPlay={1} />
              <Box display="flex" justifyContent="start" alignItems="center">
                <Typography variant="heading1">{artistInfo?.artist}</Typography>
                <Typography color="black">,({artistInfo?.title})</Typography>
                <Typography variant="italic">,{artistInfo?.album}</Typography>
              </Box>
            </Box>

            <Box
              className="flex flex-col w-full lg:w-2/5 justify-end items-end mr-2"
              variant="gap"
            >
              {(genre === "" ? songs ?? [] : filteredSong ?? []).map((item) => (
                <Box
                  className="flex flex-wrap lg:flex-nowrap"
                  flexDirection="column"
                  justifyContent="end"
                  height="fit-content"
                  key={item._id}
                >
                  <Box variant="secondary" width="350px">
                    <Box
                      className="flex flex-wrap lg:flex-nowrap"
                      variant="gap"
                      height="fit-content"
                    >
                      <MusicPlayer
                        height={150}
                        url={getVideoIdFromUrl(item?.videoUrl) ?? ""}
                        handleOnStateChange={(event) =>
                          handleMouseClick(event, item)
                        }
                      />
                      <InformationCard
                        title={item?.title}
                        artist={item?.artist}
                        album={item?.album}
                        genre={item?.genre}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box
            className="flex flex-wrap lg:flex-nowrap"
            height="fit-content"
            width="100%"
          >
            <Box
              className="flex flex-wrap lg:flex-nowrap"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              variant="gap"
            >
              {(genre === "" ? songs ?? [] : filteredSong ?? []).map((item) => (
                <Box variant="secondary" width="fit-content" key={item?._id}>
                  <Box
                    className="flex flex-wrap lg:flex-nowrap"
                    variant="gap"
                    height="fit-content"
                  >
                    <MusicPlayer
                      height={250}
                      url={getVideoIdFromUrl(item?.videoUrl) ?? ""}
                      handleOnStateChange={() => handleCurrentUrl(item)}
                    />
                    <InformationCard
                      title={item?.title}
                      artist={item?.artist}
                      album={item?.album}
                      genre={item?.genre}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
      {(songs.length || filteredSong.length) && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={4}
          className="w-full bg-green-300 fixed  bottom-0 left-0"
        >
          <Pagination
            currentPage={currentPage ?? 0}
            totalPages={totalPages ?? 0}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            bg="#86efac"
          />
        </Box>
      )}
    </Box>
  );
};

export default HomeView;
