import { takeLatest, put, call } from "redux-saga/effects";


import { FilterSongType, SongsState } from "../../interfaces/songTypes";
import { filterByGenreAPI, } from "../../api/songAPI";
import { PayloadAction } from "@reduxjs/toolkit";
import { filterByGenreFailure, filterByGenreStart, filterByGenreSuccess } from "../slices/filterByGenreSlice";

function* filterByGenreSaga(action: PayloadAction<FilterSongType>) {
  const{userId,genre}=action.payload
  try {
    const response: SongsState = yield call(filterByGenreAPI,genre,userId);
    yield put(filterByGenreSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(filterByGenreFailure(error.message));
    } else {
      yield put(filterByGenreFailure("An unknown error occurred"));
      console.error();
    }
  }
}

export function* watchFilterSaga() {
  yield takeLatest(filterByGenreStart.type, filterByGenreSaga);
}
