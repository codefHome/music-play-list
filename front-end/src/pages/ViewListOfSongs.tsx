import { ChangeEvent, useEffect, useState } from "react";
import Box from "../components/Box";

import Typography from "../components/Typography";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSongsStart } from "../store/slices/songSlices";

import { Cell, Row, Table } from "../components/Table";
import DeleteAndEdit from "../components/DeleteAndEdit";
import { deleteSongStart } from "../store/slices/deleteSlice";
import UpdateSongDetailView from "./UpdateSongDetailView";
import { setIsEdit, setOpen } from "../store/slices/UpdateSongSlice";
import { fetchSingleSongStart } from "../store/slices/singleSongSlice";
import { useSearchParams } from "react-router-dom";
import { filterByGenreStart } from "../store/slices/filterByGenreSlice";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import Button from "../components/Button";
import TextField from "../components/TextField";
const ViewListOfSong = () => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const { songs, currentPage, totalPages, loading } = useAppSelector(
    (state) => state.songs
  );

  const { data:filteredSong } = useAppSelector((state) => state.filterSong);
  const { open } = useAppSelector((state) => state.updateSong);
  const [searchParams, setSearchParams] = useSearchParams();
  const [songTitle, setSongTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const[genre,setGenre]=useState<string>('')
  useEffect(() => {
    dispatch(fetchSongsStart({ page: currentPage, limit: 7 }));
    if(genre !== ''){
    dispatch(filterByGenreStart(genre));}
  }, [dispatch, currentPage,genre]);
  const tableHeaders = [
    { id: 1, title: "Title" },
    { id: 2, title: "Artist" },
    { id: 3, title: "Album" },
    { id: 3, title: "Genre" },
    { id: 4, title: "Action" },
  ];
  const url = new URL(window.location.href);
  const param = (_id: string) => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams(
      {
        ...currentParams,
        id: _id,
      },
      { replace: true }
    );
  };

  const handleEdit = (_id: string) => {
    dispatch(setOpen(true));
    dispatch(setIsEdit(true));
    dispatch(fetchSingleSongStart(_id));
    param(_id);
  };

  const handleClose = () => {
    dispatch(setOpen(false));
    dispatch(setIsEdit(false));
  };
  const handleDelete = () => {
    const deleteData={id:searchParams.get("id") ?? "",limit:7}
    dispatch(deleteSongStart(deleteData));
    searchParams.delete("id");
    window.history.replaceState({}, "", url.href.split("?")[0]);
    setOpenConfirm(false);
  };
  const handleOpen = (title: string, _id: string) => {
    setOpenConfirm(true);
    setSongTitle(title);
    param(_id);
  };
  const handleCancel = () => {
    setOpenConfirm(false);
    setSongTitle("");
    searchParams.delete("id");
    window.history.replaceState({}, "", url.href.split("?")[0]);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchSongsStart({ page: currentPage + 1, limit: 7 }));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchSongsStart({ page: currentPage - 1, limit: 7 }));
    }
  };
const handleFilter = (event:ChangeEvent<HTMLInputElement>) =>{
setGenre(event.target.value)
}
console.log({genre})
  return (
    <>
      <Box display="flex" width="100%" mb='-15px' mt='20px' >
        <Box width="100%" >
          <Box variant="primary">
            <Typography variant="heading1">Song List</Typography>
          </Box>

          <Box
          variant="secondary"
            display="flex"
            flexDirection="column"
           
          >
            <TextField onChange={handleFilter}  borderRadius='10px' mb={3} placeholder="filter using genre" width='50%' />
            <Table  >
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
                ) : (
              ( genre === '' ? songs : filteredSong).map((item) => (
                    <Row key={item?._id} >
                      <Cell variant="secondary">{item?.title}</Cell>
                      <Cell variant="secondary">{item?.artist}</Cell>
                      <Cell variant="secondary">{item?.album}</Cell>
                      <Cell variant="secondary">{item?.genre}</Cell>
                      <Cell variant="secondary">
                        <DeleteAndEdit
                          handleEdit={handleEdit}                         
                          id={item?._id}                         
                          handleOpen={() => handleOpen(item?.title, item?._id)}
                          title={songTitle}
                        />
                      </Cell>
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
      </Box>
      <UpdateSongDetailView open={open} handleClose={handleClose} />
      <Modal isOpen={openConfirm} onClose={handleCancel}>
        <Box  variant="secondary">
          <Typography color="blue" fontSize="20px" textAlign="center">
            Are you Sure?
          </Typography>
          <Typography variant="italic">
            You are deleting Song with title: {songTitle}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Button onClick={handleCancel} variant="secondary">
              Cancel
            </Button>
            <Button onClick={ handleDelete} variant="delete">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ViewListOfSong;
