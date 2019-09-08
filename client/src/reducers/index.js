import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import streamsReducer from './streamsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  form: formReducer,
  streams: streamsReducer
});
