import { put, takeEvery, call } from 'redux-saga/effects';

import { addSongAPI } from '../../api/songAPI';
import { addSongStart, addSongSuccess, addSongFailure } from '../slices/addSongSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../interfaces/songTypes';
import { SuccessType } from '../../interfaces/authType';

function* insertSongSaga(action: PayloadAction<Song>) {
  try {
    const newItems:SuccessType = yield call(addSongAPI, action.payload);
    yield put(addSongSuccess(newItems));
  } catch (error) {
   
    if (error instanceof Error) {
        yield put(addSongFailure(error.message));
      } else {
        yield put(addSongFailure("An unknown error occurred" ));
        console.error();
      }
  }
}

function* watchAddSongSaga() {
  yield takeEvery(addSongStart.type, insertSongSaga);
}

export default watchAddSongSaga;