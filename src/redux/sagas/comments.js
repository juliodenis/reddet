import { put, call, takeLatest } from "redux-saga/effects";
import {
  START_CREATE_COMMENT,
  SUCCESS_CREATE_COMMENT,
  START_GET_COMMENTS,
  SUCCESS_GET_COMMENTS,
} from "../actions/comments";
import { apiPostCall, apiPutCall, apiGetCall } from "../api/index";

export function* getComments(payload) {
  const id = payload.postId;
  try {
    const results = yield call(
      apiGetCall,
      "get",
      `https://reddet-api.herokuapp.com/posts/${id}`
    );
    yield put({
      type: SUCCESS_GET_COMMENTS,
      results,
    });
  } catch (error) {
    console.log(error);
  }
  try {
  } catch (error) {}
}

export function* createComment(payload) {
  const id = payload.postId;
  try {
    const results = yield call(
      apiPutCall,
      "put",
      `https://reddet-api.herokuapp.com/posts/${id}`,
      payload
    );
    yield put({
      type: SUCCESS_CREATE_COMMENT,
      results,
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* comments() {
  yield takeLatest(START_CREATE_COMMENT, createComment);
  yield takeLatest(START_GET_COMMENTS, getComments);
}
