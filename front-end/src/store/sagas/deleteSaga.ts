import { takeLatest, put, call } from 'redux-saga/effects';
import { deleteSongFailer, deleteSongStart, deleteSongSucess } from '../slices/deleteSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { deleteSongAPI } from '../../api/songAPI';
import { fetchSongsStart } from '../slices/songSlices';

function* deleteSongSaga(action: PayloadAction<string>) {
  
  try {
    
    yield call(deleteSongAPI,action.payload);
    yield put(deleteSongSucess());
    yield put(fetchSongsStart())
  } catch (error) {
    if (error instanceof Error) {
        yield put(deleteSongFailer(error.message));
      } else {
        yield put(deleteSongFailer("An unknown error occurred" ));
        console.error();
      }
   
  }
}

export function* WatchSongDelete() {
  yield takeLatest(deleteSongStart.type, deleteSongSaga);
}