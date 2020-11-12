import { put, call, takeLatest } from "redux-saga/effects";
import {
  START_GET_POSTS,
  SUCCESS_GET_POSTS,
  START_CREATE_POST,
  SUCCESS_CREATE_POST,
  START_DELETE_POST,
  SUCCESS_DELETE_POST,
  START_GET_ONE_POST,
  SUCCESS_GET_ONE_POST,
} from "../actions/posts";
import { apiGetCall, apiPostCall, apiDeleteCall } from "../api/index";

export function* getPosts({ payload }) {
  try {
    const results = yield call(
      apiGetCall,
      "get",
      "https://reddet-api.herokuapp.com/posts"
    );
    yield put({ type: SUCCESS_GET_POSTS, results });
  } catch (error) {
    console.log(error);
  }
}

export function* createPost(payload) {
  try {
    const results = yield call(
      apiPostCall,
      "post",
      "https://reddet-api.herokuapp.com/posts",
      payload
    );
    console.log("llamada de los posts", results);
    yield put({
      type: SUCCESS_CREATE_POST,
      results,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* deletePost(payload) {
  const id = payload.payload;
  try {
    const results = yield call(
      apiDeleteCall,
      "delete",
      `https://reddet-api.herokuapp.com/posts/${id}`,
      id
    );
    yield put({
      type: SUCCESS_DELETE_POST,
      results,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* getOnePost({ payload }) {
  const id = payload;
  try {
    const results = yield call(
      apiGetCall,
      "get",
      `https://reddet-api.herokuapp.com/posts/${id}`
    );
    yield put({ type: SUCCESS_GET_ONE_POST, results });
  } catch (error) {
    console.log(error);
  }
}

export default function* posts() {
  yield takeLatest(START_GET_POSTS, getPosts);
  yield takeLatest(START_CREATE_POST, createPost);
  yield takeLatest(START_DELETE_POST, deletePost);
  yield takeLatest(START_GET_ONE_POST, getOnePost);
}
