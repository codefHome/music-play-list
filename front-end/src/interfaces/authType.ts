export interface LoginType{
    email:string;
    password:string;
}

export interface SignupType extends LoginType {
    userName:string;
    confirmPassword:string;
}