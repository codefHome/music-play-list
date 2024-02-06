import { takeLatest, put, call } from "redux-saga/effects";
import { PaginationType, SongAndAlbumSuccesResponse } from "../../interfaces/songTypes";
import { countSongAndAlbumOfArtistAPI } from "../../api/songAPI";
import { songAndAlbumFailure, songAndAlbumStart, songAndAlbumSuccess } from "../slices/countSongAndAlbumOfArtistSlice";
import { PayloadAction } from "@reduxjs/toolkit";



function* songAndAlbumeSaga(action: PayloadAction<PaginationType>) {
  try {
    const{page,limit}= action.payload
    const response: SongAndAlbumSuccesResponse = yield call(countSongAndAlbumOfArtistAPI,page,limit);
    yield put(songAndAlbumSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(songAndAlbumFailure(error.message));
    } else {
      yield put(songAndAlbumFailure("An unknown error occurred"));
      console.error();
    }
  }
}

export function* watchSongAndAlbumeSaga() {
  yield takeLatest(songAndAlbumStart.type, songAndAlbumeSaga);
}