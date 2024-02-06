import { put, takeEvery, call, select } from 'redux-saga/effects';
import {  updateSongAPI } from '../../api/songAPI';
import { PayloadAction } from '@reduxjs/toolkit';
import { FetchResponse, FetchResponse2, FetchSongwithPaginationState,  } from '../../interfaces/songTypes';
import { updateSongFailure, updateSongStart, updateSongSuccess } from '../slices/UpdateSongSlice';
import { fetchSongsStart } from '../slices/songSlices';
import { RootState } from '../store';

function* updateSongSage(action: PayloadAction<FetchResponse2>) {
  try {
    const{limit}=action.payload
    const newItem:FetchResponse = yield call(updateSongAPI,action.payload );
    const { currentPage, }: FetchSongwithPaginationState = yield select((state: RootState) => state.songs);
    yield put(updateSongSuccess(newItem));
    yield put(fetchSongsStart({ page: currentPage, limit }))
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