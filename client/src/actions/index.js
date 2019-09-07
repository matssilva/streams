import { SIGN_IN, SIGN_OUT, SET_USER_ID } from './types';

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const setUserId = userId => {
  return {
    type: SET_USER_ID,
    payload: userId
  };
};
