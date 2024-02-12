import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddSongPayload, AddSongState,  } from "../../interfaces/songTypes";
import { SuccessType } from "../../interfaces/authType";

const initialState: AddSongState = {
  loading: false,
  error: null,
  successData:{} as SuccessType,
  data: [],
  isAdded:null
};

const addSongSlice = createSlice({
  name: "addSong",
  initialState,
  reducers: {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addSongStart: (state, action: PayloadAction<AddSongPayload>) => {
      state.loading = true;
      state.error = null;
      state.successData={} as SuccessType
     
    },

    addSongSuccess: (state,action: PayloadAction<SuccessType>) => {
      state.loading = false;
      state.error = null;
      state.successData= {msg:action.payload.msg,success:action.payload.success}

    },
    addSongFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAdded = false
      
    },
    // setIsAdded: (state, action: PayloadAction<boolean | null>) => {
      
    //   state.isAdded = action.payload;
    //   state.successData.success=action.payload
      
    // },
    
  },
});

export const { addSongStart, addSongSuccess, addSongFailure } =
  addSongSlice.actions;

export default addSongSlice.reducer;
