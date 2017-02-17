import * as types from '../constants/actionTypes';

export function loginSuccess() {
  return { type: types.LOGIN_SUCCESS, isLoggedIn: true };
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS, isLoggedIn: false };
}



export function login(userInput) {
  return (dispatch, getState) => {
    dispatch(loginSuccess());
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess())
    return new Promise((resolve, reject) => {
      resolve();
    })
  }
}
