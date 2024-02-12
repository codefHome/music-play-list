import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery, call } from 'redux-saga/effects';
import { RegisterPayload, SuccessType } from '../../interfaces/authType';
import { registerAPI } from '../../api/songAPI';
import { registerFailure, registerStart, registerSuccess } from '../slices/registerSlice';



function* registerSaga(action: PayloadAction<RegisterPayload>) {
  try {
    const newItems:SuccessType = yield call(registerAPI, action.payload);
    yield put(registerSuccess(newItems));
  } catch (error) {
   
    if (error instanceof Error) {
        yield put(registerFailure(error.message));
      } else {
        yield put(registerFailure("An unknown error occurred" ));
        console.error();
      }
  }
}

function* watchRegisterSaga() {
  yield takeEvery(registerStart.type, registerSaga);
}

export default watchRegisterSaga;