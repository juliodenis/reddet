import { put, call, takeLatest } from "redux-saga/effects";
import {
  START_CREATE_COMMENT,
  SUCCESS_CREATE_COMMENT,
  START_GET_COMMENTS,
  SUCCESS_GET_COMMENTS,
} from "../actions/comments";
import { apiPostCall, apiPutCall, apiGetCall } from "../api/index";

export function* getComments({ payload }) {
  const id = payload;
  try {
    const results = yield call(
      apiGetCall,
      "get",
      `https://reddet-api.herokuapp.com/comments?postId=${id}`
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
  try {
    const results = yield call(
      apiPostCall,
      "post",
      `https://reddet-api.herokuapp.com/comments`,
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
