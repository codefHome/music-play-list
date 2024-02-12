import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegisterPayload, RegisterState, SuccessType } from "../../interfaces/authType";

const initialState: RegisterState ={
    loading:false,
    error:null,
    data:{}  as RegisterPayload,
    successData:{} as SuccessType,
    toggleAuth:false
}

export const registerSlice= createSlice({
    name:'register',
    initialState,
    reducers:{
        setToggleAuth: (state) =>{
state.toggleAuth= !state.toggleAuth
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        registerStart: (state, action: PayloadAction<RegisterPayload>) => {
            state.loading = true;
            state.error = null;
            state.successData={} as SuccessType
          },
          registerSuccess: (state,action: PayloadAction<SuccessType>) => {
            state.loading = false;
            state.error = null;
            state.successData= {msg:action.payload.msg,success:action.payload.success}
          },
          registerFailure: (state, action: PayloadAction<string>) => {
            state.loading = false; 
            state.error = action.payload; 
          },
    }
})

export const {registerStart,registerSuccess,registerFailure,setToggleAuth} = registerSlice.actions

export default registerSlice.reducer