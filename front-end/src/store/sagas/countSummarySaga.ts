import { takeLatest, put, call } from "redux-saga/effects";


import { countCollectionAPI } from "../../api/songAPI";
import { CountSummaryState } from "../../interfaces/songTypes";
import { countSummaryFailure, countSummaryStart, countSummarySuccess } from "../slices/countSummarySlice";



function* countSummarySaga() {
  try {
    const response: CountSummaryState = yield call(countCollectionAPI);
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