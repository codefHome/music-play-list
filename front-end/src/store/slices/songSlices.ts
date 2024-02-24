import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  FetchAllSongWithPagination, FetchSongwithPagination, FetchSongwithPaginationState,   } from "../../interfaces/songTypes";

const initialState: FetchSongwithPaginationState = {
 songs:[],
 loading:false,
 error:null,
 totalPages:0,
 currentPage:1
};

const songSlices = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchSongsStart(state,action: PayloadAction<FetchAllSongWithPagination>) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(state, action: PayloadAction<FetchSongwithPagination>) {
      state.loading = false;
      state.songs = action.payload.data
      state.currentPage=action.payload.currentPage
      state.totalPages=action.payload.totalPages
     
    },
    fetchSongsFailer(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  
    
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailer,
 
 
} = songSlices.actions;

export default songSlices.reducer;
