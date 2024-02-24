import { takeLatest, put, call } from "redux-saga/effects";


import { countCollectionAPI } from "../../api/songAPI";
import { CountSummaryState } from "../../interfaces/songTypes";
import { countSummaryFailure, countSummaryStart, countSummarySuccess } from "../slices/countSummarySlice";
import { PayloadAction } from "@reduxjs/toolkit";



function* countSummarySaga(action: PayloadAction<{userId:string}>) {
  const{userId} = action.payload
  try {
    const response: CountSummaryState = yield call(countCollectionAPI,userId);
    yield put(countSummarySuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(countSummaryFailure(error.message));
    } else {
      yield put(countSummaryFailure("An unknown error occurred"));
      console.error();
    }
  }
}

export function* watchCountSummarySaga() {
  yield takeLatest(countSummaryStart.type, countSummarySaga);
}