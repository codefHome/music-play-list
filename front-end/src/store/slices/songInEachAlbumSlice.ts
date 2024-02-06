import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationType,  SongInAlbumPagination, SongInAlbumState } from "../../interfaces/songTypes";

const initialState: SongInAlbumState = {
  loading: false,
  data:[],
  error: null, 
  totalPages:0,
  currentPage:1,
 
};

const songInAlbumSlices = createSlice({
  name: "songInAlbum",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    songInAlbumStart(state,action: PayloadAction<PaginationType>) {
      state.loading = true;
      state.error = null;
    },
    songInAlbumSuccess(state, action: PayloadAction<SongInAlbumPagination>) {
      state.loading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },
    songInAlbumFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    
  },
});

export const {
  songInAlbumFailure,
  songInAlbumStart,
  songInAlbumSuccess
 
} = songInAlbumSlices.actions;

export default songInAlbumSlices.reducer;
