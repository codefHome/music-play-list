import { put, takeEvery, call } from 'redux-saga/effects';

import { addSongAPI } from '../../api/songAPI';
import { addSongStart, addSongSuccess, addsongFailure } from '../slices/addSongSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Song, SuccessResopnse } from '../../interfaces/songTypes';

function* insertSongSaga(action: PayloadAction<Song>) {
  try {
    const newItems:SuccessResopnse = yield call(addSongAPI, action.payload);
    yield put(addSongSuccess(newItems.data));
    // yield put(addsongFailure(newItems.data.msg));
   
   
  } catch (error) {
   
    if (error instanceof Error) {
        yield put(addsongFailure(error.message));
      } else {
        yield put(addsongFailure("An unknown error occurred" ));
        console.error();
      }
  }
}

function* watchAddSongSaga() {
  yield takeEvery(addSongStart.type, insertSongSaga);
}

export default watchAddSongSaga;