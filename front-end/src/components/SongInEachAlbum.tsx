import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "./Box";
import { Table, Row, Cell } from "./Table";
import Typography from "./Typography";
import { songInAlbumStart } from "../store/slices/songInEachAlbumSlice";
import Pagination from "./Pagination";
import { getUserId } from "../utils/localStorage";

const SongInEachAlbum = () => {
  const dispatch = useAppDispatch();
  const { data, currentPage, totalPages, loading } = useAppSelector(
    (state) => state.songInAlbum
  );
  const userId = getUserId() ?? "";
  const tableHeaders = [
    { id: 1, title: "Album" },
    { id: 2, title: "Total Songs" },
  ];
  useEffect(() => {
    dispatch(songInAlbumStart({ page: currentPage, limit: 8, userId }));
  }, [dispatch]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(songInAlbumStart({ page: currentPage + 1, limit: 8, userId }));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(songInAlbumStart({ page: currentPage - 1, limit: 8, userId }));
    }
  };
  return (
    <Box className="flex flex-col p-4 h-auto w-full">
      <Box>
        <Typography variant="heading1">
          Total Song in Each Album Summary
        </Typography>
        <Table>
          <thead>
            <Row>
              {tableHeaders.map((item) => (
                <Cell variant="primary" key={item?.id}>
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
                  <Cell variant="secondary">{item?.album}</Cell>
                  <Cell variant="secondary">{item?.titles}</Cell>
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
export default SongInEachAlbum;
