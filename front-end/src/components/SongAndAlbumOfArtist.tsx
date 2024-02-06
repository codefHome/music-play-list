
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "./Box"

import { Table, Row,Cell } from "./Table"

import Typography from "./Typography";
import { songAndAlbumStart } from "../store/slices/countSongAndAlbumOfArtistSlice";
import Pagination from "./Pagination";

const SongAndAlbumOfEachArtist = () =>{
    const dispatch = useAppDispatch()
    const { data,currentPage, totalPages, loading } = useAppSelector((state) => state.sondAndAlbum);
    const tableHeaders = [
        { id: 1, title: "Artist" },
        { id: 2, title: "Total Songs" },
        { id: 2, title: "Total Album" },
      ];
      useEffect(() => {
   
        dispatch(songAndAlbumStart({ page: currentPage, limit: 8 }))
   
      }, [dispatch]);
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          dispatch(songAndAlbumStart({ page: currentPage + 1, limit: 8 }));
        }
      };
    
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          dispatch(songAndAlbumStart({ page: currentPage - 1, limit: 8 }));
        }
      };
    return(
<Box width='fit-content'>
    <Box variant="tableStyle">
    <Typography variant="heading1">Total Song and Album of Each Artist Summary</Typography>
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
              <tbody style={{position:'relative'}}>
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
                  ) :(data?.map((item,index) => (
                  <Row key={index}>
                    <Cell variant="secondary">{item?.artist}</Cell>
                    <Cell variant="secondary">{item?.title}</Cell>
                    <Cell variant="secondary">{item?.album}</Cell>
                  </Row>)
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
export default SongAndAlbumOfEachArtist