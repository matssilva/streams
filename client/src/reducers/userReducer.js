import { SET_USER_ID } from '../actions/types';

const INITIAL_STATE = {
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
