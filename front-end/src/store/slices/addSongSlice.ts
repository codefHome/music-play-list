import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddSongState, Song } from "../../interfaces/songTypes";

const initialState: AddSongState = {
  loading: false,
  error: null,
  successData:{ msg:'', success:null},
  data: [],
  isAdded:null
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

    addSongSuccess: (state,action: PayloadAction<{msg:string,success:boolean}>) => {
      state.loading = false;
      state.error = null;
      state.successData= action.payload

    },
    addsongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAdded = false
      
    },
    setIsAdded: (state, action: PayloadAction<boolean | null>) => {
      
      state.isAdded = action.payload;
      state.successData.success=action.payload
      
    },
    
  },
});

export const { addSongStart, addSongSuccess, addsongFailure,setIsAdded } =
  addSongSlice.actions;

export default addSongSlice.reducer;
