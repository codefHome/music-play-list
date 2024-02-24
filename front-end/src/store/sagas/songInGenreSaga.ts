import { takeLatest, put, call } from "redux-saga/effects";


import {  countSongInEachGenreAPI } from "../../api/songAPI";
import { FetchAllSongWithPagination,  SongInGenreSuccesResponse } from "../../interfaces/songTypes";
import { songInGenreSuccess, songInGenreFailure, songInGenreStart } from "../slices/songInEachGenreSlice";
import { PayloadAction } from "@reduxjs/toolkit";



function* songInGenreSaga(action: PayloadAction<FetchAllSongWithPagination>) {
  try {
    const{page,limit,userId}= action.payload
    const response: SongInGenreSuccesResponse = yield call(countSongInEachGenreAPI,page,limit,userId);
    yield put(songInGenreSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(songInGenreFailure(error.message));
    } else {
      yield put(songInGenreFailure("An unknown error occurred"));
      console.error();
    }
  }
}

export function* watchsongInGenreSaga() {
  yield takeLatest(songInGenreStart.type, songInGenreSaga);
}