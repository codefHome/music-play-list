import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "./Box";

import { Table, Row, Cell } from "./Table";
import { songInGenreStart } from "../store/slices/songInEachGenreSlice";
import Typography from "./Typography";
import Pagination from "./Pagination";
import { getUserId } from "../utils/localStorage";

const SongInGenre = () => {
  const dispatch = useAppDispatch();
  const { data, currentPage, totalPages, loading } = useAppSelector(
    (state) => state.songInGenre
  );
  const userId = getUserId() ?? "";
  const tableHeaders = [
    { id: 1, title: "Genre" },
    { id: 2, title: "Total Songs" },
  ];
  useEffect(() => {
    dispatch(songInGenreStart({ page: currentPage, limit: 8, userId }));
  }, [dispatch]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(songInGenreStart({ page: currentPage + 1, limit: 8, userId }));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(songInGenreStart({ page: currentPage - 1, limit: 8, userId }));
    }
  };

  return (
    <Box className="flex flex-col p-4 h-auto w-full">
      <Typography variant="heading1">
        Total Song in Each Genre Summary
      </Typography>
      <Box className="flex my-10 w-full ">
        <Table overflowY="auto">
          <thead>
            <Row>
              {tableHeaders.map((item) => (
                <Cell
                  variant="primary"
                  key={item?.id}
                  className=" text-xl whitespace-nowrap"
                >
                  {item.title}
                </Cell>
              ))}
            </Row>
          </thead>
          <tbody>
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
                  <Cell className="text-left text-gray-500 break-all px-2 text-lg w-4/5 ">
                    {item?.genre}
                  </Cell>
                  <Cell className="text-center text-gray-500 break-all text-lg w-4/5 ">
                    {item?.count}
                  </Cell>
                </Row>
              ))
            )}
          </tbody>
        </Table>
      </Box>
      <Box className="absolute bottom-0 right-0 left-0 ">
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
export default SongInGenre;
