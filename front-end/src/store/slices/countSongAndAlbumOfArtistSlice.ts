import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {   FetchAllSongWithPagination, SongAndAlbumPagination, SongAndAlbumState,  } from "../../interfaces/songTypes";

const initialState: SongAndAlbumState = {
  loading: false,
  data:[],
  error: null,
  totalPages:0,
  currentPage:1
 
};

const songAndAlbumSlice = createSlice({
  name: "songAndAlbum",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    songAndAlbumStart(state,action: PayloadAction<FetchAllSongWithPagination>) {
      state.loading = true;
      state.error = null;
    },
    songAndAlbumSuccess(state, action: PayloadAction<SongAndAlbumPagination>) {
      state.loading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },
    songAndAlbumFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    
  },
}); 

export const {
  songAndAlbumFailure,
  songAndAlbumStart,
  songAndAlbumSuccess
 
} = songAndAlbumSlice.actions;

export default songAndAlbumSlice.reducer;
