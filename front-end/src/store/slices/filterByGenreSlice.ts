import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchResponse, SongsState } from "../../interfaces/songTypes";

const initialState: SongsState = {
  loading: false,
  data: [],
  error: null,
 
};

const filterByGenreSlice = createSlice({
  name: "filterSong",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filterByGenreStart(state,action:PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    filterByGenreSuccess(state, action: PayloadAction<FetchResponse[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    filterByGenreFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    
  },
});

export const {
    filterByGenreStart,
    filterByGenreSuccess,
  filterByGenreFailure,
 
} = filterByGenreSlice.actions;

export default filterByGenreSlice.reducer;
