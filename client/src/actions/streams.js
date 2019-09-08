import streamsApi from '../apis/streams';
import history from '../history';

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().user;
  const response = await streamsApi.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streamsApi.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = streamId => async dispatch => {
  const response = await streamsApi.get(`/streams/${streamId}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (streamId, formValues) => async dispatch => {
  const response = await streamsApi.put(`/streams/${streamId}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = streamId => async dispatch => {
  await streamsApi.delete(`/streams/${streamId}`);
  dispatch({ type: DELETE_STREAM, payload: streamId });
};
