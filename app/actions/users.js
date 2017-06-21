import { push } from 'react-router-redux';
import { authService, userService} from '../services';
import { polyfill } from 'es6-promise';
import md5 from 'spark-md5';

import * as types from '../types';

function fetchUserData() {
  return {type: types.REQUEST_USER_PROFILE };
}

function fetchUserDataSuccess(data) {
  return {type: types.REQUEST_USER_PROFILE_SUCCESS, data};
}

function fetchUserDataError(error) {
  return {type: types.REQUEST_USER_PROFILE_ERROR, error};
}

function updateUserData() {
  return {type: types.UPDATE_USER_PROFILE};
}

function updateUserDataSuccess(data) {
  return {type: types.UPDATE_USER_PROFILE_SUCCESS, data};
}

function updateUserDataError(error){
  return {type: types.UPDATE_USER_PROFILE_ERROR, error};
}

function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  };
}

function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message
  };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function signUpSuccess(message) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message
  };
}

function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return (dispatch) => {
    dispatch(beginLogin());

    return authService().login(data)

      .then((response) => {
        console.log(data);
        console.log(response);
          dispatch(loginSuccess('You have been successfully logged in'));
          dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(loginError('Oops! Invalid username or password'));
      });
  };
}

export function signUp(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return authService().signUp(data)
      .then((response) => {
          dispatch(signUpSuccess('You have successfully registered an account!'));
          dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(signUpError('Oops! Something went wrong when signing up'));
      });
  };
}

export function logOut() {
  return (dispatch) => {
    dispatch(beginLogout());
    return authService().logOut()
      .then((response) => {
          dispatch(logoutSuccess());
      })
      .catch((err) => {
        dispatch(logoutError());
      });
  };
}

export function fetchProfileData() {
  console.log("Fetching...");
   return(dispatch) => {
     dispatch(fetchUserData());
     return userService().getUser()
      .then((userData) => {
        console.log(userData);
        dispatch(fetchUserDataSuccess(userData.data))
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserDataError(err))
      });
   };
}

export function updateProfileData(data, id) {
    return (dispatch) => {
      dispatch(updateUserData());
      return userService().updateUser({data, id})
        .then(() => {
          dispatch(updateUserDataSuccess(data))
        })
        .catch((err) => {
          console.log(err);
          dispatch(updateUserDataError(err))
        });
      };
}
