import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddSongState, Song } from "../../interfaces/songTypes";

const initialState: AddSongState = {
  loading: false,
  error: null,
  success:null,
  data: [],
};

const addSongSlice = createSlice({
  name: "addSong",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addSongStart: (state, action: PayloadAction<Song>) => {
      state.loading = true;
      state.error = null;
    },
    addSongSuccess: (state,action: PayloadAction<string>) => {
      state.loading = false;
      state.error = null;
      state.success=action.payload

    },
    addsongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.success=action.payload
      
    },
  },
});

export const { addSongStart, addSongSuccess, addsongFailure } =
  addSongSlice.actions;

export default addSongSlice.reducer;
