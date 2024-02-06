import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchResponse, SingleSongState } from "../../interfaces/songTypes";

const initialState: SingleSongState = {
  loading: false,
  error: null,
  data: {
    _id: "",
    title: "",
    artist: "",
    album: "",
    genre: ""
  } ,
};

const singleSongSlices = createSlice({
  name: "singleSong",
  initialState,
  reducers: {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchSingleSongStart(state,action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleSongSuccess(state, action: PayloadAction<FetchResponse>) {
      state.loading = false;
      state.data = {...action.payload};
    },
    fetchSingleSongFailer(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  
  fetchSingleSongStart,
  fetchSingleSongFailer,
  fetchSingleSongSuccess,
} = singleSongSlices.actions;

export default singleSongSlices.reducer;
