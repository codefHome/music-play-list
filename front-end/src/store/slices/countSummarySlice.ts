import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountCollectionType, CountSummaryState } from "../../interfaces/songTypes";

const initialState: CountSummaryState = {
  loading: false,
  data:[],
  error: null,
 
};

const songSlices = createSlice({
  name: "countSummary",
  initialState,
  reducers: {
    countSummaryStart(state) {
      state.loading = true;
      state.error = null;
    },
    countSummarySuccess(state, action: PayloadAction<CountCollectionType[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    countSummaryFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    
  },
});

export const {
  countSummaryFailure,
  countSummaryStart,
  countSummarySuccess
 
} = songSlices.actions;

export default songSlices.reducer;
