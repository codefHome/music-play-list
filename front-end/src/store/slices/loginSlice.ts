import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginState, LoginSuccessData, LoginSuccessType, LoginType, SuccessType } from "../../interfaces/authType";

const initialState: LoginState ={
    loading:false,
    error:null,
    data:{} as LoginSuccessData ,
    successData:{} as SuccessType,
}

export const loginSlice= createSlice({
    name:'register',
    initialState,
    reducers:{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        loginStart: (state, action: PayloadAction<LoginType>) => {
            state.loading = true;
            state.error = null;
            state.successData={} as SuccessType
          },
          loginSuccess: (state,action: PayloadAction<LoginSuccessType>) => {
            state.loading = false;
            state.error = null;
            state.successData= action.payload.successData
            state.data=action.payload.data
          },
          loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false; 
            state.error = action.payload; 
          },
    }
})

export const {loginStart,loginSuccess,loginFailure} = loginSlice.actions

export default loginSlice.reducer