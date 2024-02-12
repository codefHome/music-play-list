export const setUserId =(userId:string) =>{
    localStorage.setItem('userId',userId)
}
export const removeUserId =() =>{
    localStorage.removeItem('userId')
}


export const getUserId = () => {
   return localStorage.getItem('userId');

    
  }