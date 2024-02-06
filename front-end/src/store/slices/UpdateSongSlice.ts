import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  FetchResponse,  UpdateSongState } from "../../interfaces/songTypes";

const initialState: UpdateSongState = {
  loading: false,
  error: null,
  isEdit: false,
  open:false
};

const updateSongSlice = createSlice({
  name: "updateSong",
  initialState,
  reducers: {
    setIsEdit: (state, action: PayloadAction<boolean>) => {
        state.isEdit = action.payload;
      },
      setOpen: (state, action: PayloadAction<boolean>) => {
        state.open = action.payload;
      },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateSongStart: (state, action: PayloadAction<FetchResponse>) => {
      state.loading = true;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateSongSuccess: (state,action: PayloadAction<FetchResponse>) => {
      state.loading = false;

      state.error = null;

    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateSongStart, updateSongSuccess, updateSongFailure,setIsEdit,setOpen } =
updateSongSlice.actions;

export default updateSongSlice.reducer;
