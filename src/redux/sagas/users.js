import { put, call, takeLatest } from "redux-saga/effects";
import {
  START_GET_USER,
  SUCCESS_GET_USER,
  START_UPDATE_USER,
  SUCCESS_UPDATE_USER,
} from "../actions/users";
import { apiGetCall, apiPostCall, apiPutCall } from "../api/index";

export function* getUser(payload) {
  try {
    const id = payload.userId;
    const result = yield call(
      apiGetCall,
      "get",
      `http://localhost:4000/users/${id}`
    );
    yield put({
      type: SUCCESS_GET_USER,
      result,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* updateUser({ payload }) {
  const id = payload.id;
  try {
    const results = yield call(
      apiPutCall,
      "put",
      `http://localhost:4000/users/${id}`,
      payload
    );
    yield put({
      type: SUCCESS_UPDATE_USER,
      results,
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* posts() {
  yield takeLatest(START_GET_USER, getUser);
  yield takeLatest(START_UPDATE_USER, updateUser);
}
