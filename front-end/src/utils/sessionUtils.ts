import jsCookie from 'js-cookie';
import CryptoJS from 'crypto-js';

const USER_SECRET_KEY = 'this is key'
const TOKEN_COOKIE_KEY= 'thisissecretkey'

export function saveCookie(name: string, value: object | string) {
  const cipher = CryptoJS.AES.encrypt(JSON.stringify(value), USER_SECRET_KEY).toString();
  const expires = new Date();
  expires.setHours(expires.getHours() + 5000);
  jsCookie.set(name, cipher, { secure: true, expires, sameSite: 'strict' });
}

export function getCookie(name: string) {
  const value = jsCookie.get(name);

  if (value) {
    const bytes = CryptoJS.AES.decrypt(value, USER_SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  }

  return null
}

export function removeCookie(name: string) {
  jsCookie.remove(name);
}

export const getToken = () => {
    return getCookie(TOKEN_COOKIE_KEY)
  }
  
  export const saveToken = (token: string) => {
    return saveCookie(TOKEN_COOKIE_KEY, token)
  }
  
  export const deleteToken = () => {
    return removeCookie(TOKEN_COOKIE_KEY)
  }