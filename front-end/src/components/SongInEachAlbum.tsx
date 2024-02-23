import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "./Box";
import { Table, Row, Cell } from "./Table";
import Typography from "./Typography";
import { songInAlbumStart } from "../store/slices/songInEachAlbumSlice";
import Pagination from "./Pagination";

const SongInEachAlbum = () => {
  const dispatch = useAppDispatch();
  const { data, currentPage, totalPages, loading } = useAppSelector(
    (state) => state.songInAlbum
  );
  const tableHeaders = [
    { id: 1, title: "Album" },
    { id: 2, title: "Total Songs" },
  ];
  useEffect(() => {
    dispatch(songInAlbumStart({ page: currentPage, limit: 8 }));
  }, [dispatch]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(songInAlbumStart({ page: currentPage + 1, limit: 8 }));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(songInAlbumStart({ page: currentPage - 1, limit: 8 }));
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
                variant="loading"
              >
                <Typography variant="heading2">Loading ...</Typography>
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
