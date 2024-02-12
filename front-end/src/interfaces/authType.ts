
export interface LoginType{
    email:string;
    password:string;
}

export interface SignupType extends LoginType {
    userName:string;
    confirmPassword:string;
}

export interface RegisterPayload extends Omit<SignupType,'confirmPassword'>{}

export interface RegisterState {
    loading: boolean | null;
    error: string | null;
    data:RegisterPayload
    successData:SuccessType,
    toggleAuth:boolean
}
export interface SuccessType{
    msg:string | null;
    success: boolean | null
}

export interface LoginState {
    loading: boolean | null;
    error: string | null;
    data:LoginSuccessData
    successData:SuccessType,
  
}

export interface LoginSuccessData{
    userName:string;
    userId:string;
    email:string;
    _id:string;
    token:string;
}
export interface LoginSuccessType {
   successData:SuccessType,
   data:LoginSuccessData
}
