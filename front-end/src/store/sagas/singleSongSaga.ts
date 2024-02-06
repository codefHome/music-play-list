import { takeLatest, put, call } from 'redux-saga/effects';



import {  SingleSongState,  } from '../../interfaces/songTypes';
import {   getSongByIdAPI } from '../../api/songAPI';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchSingleSongFailer, fetchSingleSongStart, fetchSingleSongSuccess } from '../slices/singleSongSlice';


function* fetchSingleSongSaga(action: PayloadAction<string>) {
  try {
    const response:SingleSongState = yield call(getSongByIdAPI,action.payload);
    yield put(fetchSingleSongSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchSingleSongFailer(error.message));
    } else {
      yield put(fetchSingleSongFailer("An unknown error occurred"));
      console.error();
    }
  }
}

export function* watchFetchSingleSong() {
  yield takeLatest(fetchSingleSongStart.type, fetchSingleSongSaga);
}