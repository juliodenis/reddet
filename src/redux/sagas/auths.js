import { put, call, takeLatest } from "redux-saga/effects";
import {
  START_LOGIN_USER,
  SUCCESS_LOGED_USER,
  START_LOGOUT_USER,
  INIT_USERDATA,
} from "../actions/auths";

export function* login(payload) {
  const { id, userId } = payload;
  const userData = {
    id,
    userId,
  };

  const authValues = {
    ...userData,
  };
  localStorage.setItem("auth", JSON.stringify(authValues));

  yield put({
    type: SUCCESS_LOGED_USER,
    authValues,
  });
}

export function* logout(payload) {
  localStorage.removeItem("auth");
  yield put({
    type: START_LOGOUT_USER,
  });
}

export function* initUserData() {
  const userData = JSON.parse(localStorage.getItem("auth"));
  if (userData) {
    yield put({
      type: INIT_USERDATA,
      payload: userData,
    });
  }
}

export default function* auths() {
  yield takeLatest(START_LOGIN_USER, login);
  yield takeLatest(START_LOGOUT_USER, logout);
}
