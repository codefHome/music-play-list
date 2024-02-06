
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "./Box"

import { Table, Row,Cell } from "./Table"
import { songInGenreStart } from "../store/slices/songInEachGenreSlice";
import Typography from "./Typography";
import Pagination from "./Pagination";

const SongInGenre = () =>{
    const dispatch = useAppDispatch()
    const { data,currentPage, totalPages, loading} = useAppSelector((state) => state.songInGenre);
    const tableHeaders = [
        { id: 1, title: "Genre" },
        { id: 2, title: "Total Songs" },
      ];
      useEffect(() => {
        dispatch(songInGenreStart({ page: currentPage, limit: 8 }))
   
      }, [dispatch]);
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          dispatch(songInGenreStart({ page: currentPage + 1, limit: 8 }));
        }
      };
    
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          dispatch(songInGenreStart({ page: currentPage - 1, limit: 8 }));
        }
      };
    return(
<Box width='fit-content' height='300px'>
    <Box variant="tableStyle">
    <Typography variant="heading1">Total Song in Each Genre Summary</Typography>
    <Table  overflowY='auto'>
              <thead>
                <Row>
                  {tableHeaders.map((item) => (
                    <Cell variant="primary" key={item?.id}>
                      {item.title}
                    </Cell>
                  ))}
                </Row>
              </thead>
              <tbody style={{position:'relative'}}>
                {
                  loading ? (
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
                data?.map((item,index) => (
                  <Row key={index}>
                    <Cell variant="secondary">{item?.genre}</Cell>
                    <Cell variant="secondary">{item?.count}</Cell>
                  </Row>
                )
                ))}
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
    )
}
export default SongInGenre