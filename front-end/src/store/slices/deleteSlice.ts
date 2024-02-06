import { createSlice, PayloadAction } from '@reduxjs/toolkit';




interface ItemState {
    loading: boolean;
    error: string | null;
  }

  interface DeleteStartType{
    id:string;
    limit:number;
  }
const initialState: ItemState = {
  loading: false,
  error: null,

};

const deleteSongSlice = createSlice({
  name: 'deleteSong',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteSongStart: (state,action: PayloadAction<DeleteStartType> ) => {
      state.loading = true;
      state.error = null;
      
    },
    deleteSongSucess: (state) => {
      state.loading = false;
      state.error = null;
    },
    deleteSongFailer: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteSongStart, deleteSongSucess, deleteSongFailer } = deleteSongSlice.actions;

export default deleteSongSlice.reducer;