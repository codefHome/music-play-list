import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery, call } from 'redux-saga/effects';
import {  LoginSuccessType, LoginType } from '../../interfaces/authType';
import { LoginAPI } from '../../api/songAPI';
import { loginFailure, loginStart, loginSuccess } from '../slices/loginSlice';

function* loginSaga(action: PayloadAction<LoginType>) {
  try {
    const newItems:LoginSuccessType = yield call(LoginAPI, action.payload);
    yield put(loginSuccess(newItems));
  } catch (error) {
   
    if (error instanceof Error) {
        yield put(loginFailure(error.message));
      } else {
        yield put(loginFailure("An unknown error occurred" ));
        console.error();
      }
  }
}

function* watchLoginSaga() {
  yield takeEvery(loginStart.type, loginSaga);
}

export default watchLoginSaga;