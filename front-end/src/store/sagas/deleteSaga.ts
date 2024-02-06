import { takeLatest, put, call, select } from 'redux-saga/effects';
import { deleteSongFailer, deleteSongStart, deleteSongSucess } from '../slices/deleteSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { deleteSongAPI } from '../../api/songAPI';
import { fetchSongsStart } from '../slices/songSlices';
import { FetchSongwithPaginationState } from '../../interfaces/songTypes';
import { RootState } from '../store';
// import { fetchSongsStart } from '../slices/songSlices';
interface ActionDeleteType{
  id:string;
  limit:number;
}
function* deleteSongSaga(action: PayloadAction<ActionDeleteType>) {
  
  try {
    
    yield call(deleteSongAPI,action.payload);
    const{limit}=action.payload
    const { currentPage, }: FetchSongwithPaginationState = yield select((state: RootState) => state.songs);
    yield put(deleteSongSucess());
    yield put(fetchSongsStart({ page: currentPage, limit }))
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