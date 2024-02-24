import { takeLatest, put, call } from "redux-saga/effects";
import { countSongInEachAlbumAPI } from "../../api/songAPI";
import { FetchAllSongWithPagination,  SongInAlbumSuccesResponse } from "../../interfaces/songTypes";
import { songInAlbumSuccess, songInAlbumFailure, songInAlbumStart } from "../slices/songInEachAlbumSlice";
import { PayloadAction } from "@reduxjs/toolkit";





function* songInAlbumSaga(action: PayloadAction<FetchAllSongWithPagination>) {
  try {
    const{page,limit,userId}= action.payload
    const response: SongInAlbumSuccesResponse = yield call(countSongInEachAlbumAPI,page,limit,userId);
    yield put(songInAlbumSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(songInAlbumFailure(error.message));
    } else {
      yield put(songInAlbumFailure("An unknown error occurred"));
      console.error();
    }
  }
}

export function* watchSongInAlbumSaga() {
  yield takeLatest(songInAlbumStart.type, songInAlbumSaga);
}