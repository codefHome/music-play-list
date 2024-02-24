import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "./Box";

import { Table, Row, Cell } from "./Table";

import Typography from "./Typography";
import { songAndAlbumStart } from "../store/slices/countSongAndAlbumOfArtistSlice";
import Pagination from "./Pagination";
import { getUserId } from "../utils/localStorage";

const SongAndAlbumOfEachArtist = () => {
  const dispatch = useAppDispatch();
  const { data, currentPage, totalPages, loading } = useAppSelector(
    (state) => state.sondAndAlbum
  );
  const userId = getUserId() ?? "";
  const tableHeaders = [
    { id: 1, title: "Artist" },
    { id: 2, title: "Total Songs" },
    { id: 2, title: "Total Album" },
  ];
  useEffect(() => {
    dispatch(songAndAlbumStart({ page: currentPage, limit: 8, userId }));
  }, [dispatch]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(songAndAlbumStart({ page: currentPage + 1, limit: 8, userId }));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(songAndAlbumStart({ page: currentPage - 1, limit: 8, userId }));
    }
  };
  return (
    <Box className="w-full">
      <Box>
        <Typography variant="heading1">
          Total Song and Album of Each Artist Summary
        </Typography>
        <Table>
          <thead>
            <Row>
              {tableHeaders.map((item) => (
                <Cell
                  variant="primary"
                  className="text-orange-500 text-lg"
                  key={item?.id}
                >
                  {item.title}
                </Cell>
              ))}
            </Row>
          </thead>
          <tbody style={{ position: "relative" }}>
            {loading ? (
              <Box
                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="h-[200px]"
              >
                <Typography className="absolute right-[50%] top-[50%] h-  text-black ">
                  Loading ...
                </Typography>
              </Box>
            ) : data?.length === 0 ? (
              <Box className="flex  h-[200px] w-full  ">
                <Typography className="absolute right-[50%] top-[50%]   text-black ">
                  No Record Found
                </Typography>
              </Box>
            ) : (
              data?.map((item, index) => (
                <Row key={index}>
                  <Cell variant="secondary">{item?.artist}</Cell>
                  <Cell variant="secondary">{item?.title}</Cell>
                  <Cell variant="secondary">{item?.album}</Cell>
                </Row>
              ))
            )}
          </tbody>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </Box>
    </Box>
  );
};
export default SongAndAlbumOfEachArtist;
