/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  PaginationType, SongInGenre, SongInGenrePagination, SongInGenreState } from "../../interfaces/songTypes";

const initialState: SongInGenreState = {
  loading: false,
  data:[],
  error: null,
  totalPages:0,
 currentPage:1
};

const songInGenreSlice = createSlice({
  name: "songInGenre",
  initialState,
  reducers: {
    songInGenreStart(state, action: PayloadAction<PaginationType>) {
      state.loading = true;
      state.error = null;
    },
    songInGenreSuccess(state, action: PayloadAction<SongInGenrePagination>) {
      state.loading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },
    songInGenreFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    
  },
});

export const {
  songInGenreFailure,
  songInGenreStart,
  songInGenreSuccess
 
} = songInGenreSlice.actions;

export default songInGenreSlice.reducer;
