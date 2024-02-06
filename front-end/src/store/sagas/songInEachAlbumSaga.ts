import { takeLatest, put, call } from "redux-saga/effects";
import { countSongInEachAlbumAPI } from "../../api/songAPI";
import { PaginationType,  SongInAlbumSuccesResponse } from "../../interfaces/songTypes";
import { songInAlbumSuccess, songInAlbumFailure, songInAlbumStart } from "../slices/songInEachAlbumSlice";
import { PayloadAction } from "@reduxjs/toolkit";





function* songInAlbumSaga(action: PayloadAction<PaginationType>) {
  try {
    const{page,limit}= action.payload
    const response: SongInAlbumSuccesResponse = yield call(countSongInEachAlbumAPI,page,limit);
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