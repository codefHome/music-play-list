import { put, takeEvery, call } from 'redux-saga/effects';
import {  updateSongAPI } from '../../api/songAPI';
import { PayloadAction } from '@reduxjs/toolkit';
import { FetchResponse,  } from '../../interfaces/songTypes';
import { updateSongFailure, updateSongStart, updateSongSuccess } from '../slices/UpdateSongSlice';
import { fetchSongsStart } from '../slices/songSlices';

function* updateSongSage(action: PayloadAction<FetchResponse>) {
  try {
    const newItem:FetchResponse = yield call(updateSongAPI, action.payload);
    yield put(updateSongSuccess(newItem));
    yield put(fetchSongsStart())
  } catch (error) {
   
    if (error instanceof Error) {
        yield put(updateSongFailure(error.message));
      } else {
        yield put(updateSongFailure("An unknown error occurred" ));
        console.error();
      }
  }
}

function* watchUpdateSongSage() {
  yield takeEvery(updateSongStart.type, updateSongSage);
}

export default watchUpdateSongSage;