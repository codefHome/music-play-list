import { put, takeEvery, call } from 'redux-saga/effects';

import { addSongAPI } from '../../api/songAPI';
import { addSongStart, addSongSuccess, addsongFailure } from '../slices/addSongSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../interfaces/songTypes';

function* insertSongSaga(action: PayloadAction<Song>) {
  try {
    const newItem:{msg:string,success:boolean} = yield call(addSongAPI, action.payload);
   if(newItem.success){
    yield put(addSongSuccess(newItem?.msg));
   }else{
    yield put(addsongFailure(newItem.msg));
   }
   
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