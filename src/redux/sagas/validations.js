import { put, call, takeLatest } from "redux-saga/effects";
import { SET_POST_STATE, SUCCESS_SET_POST_STATE } from "../actions/validations";

export function* setPostState(payload) {
  yield put({
    type: SUCCESS_SET_POST_STATE,
    payload,
  });
}

export default function* validations() {
  yield takeLatest(SET_POST_STATE, setPostState);
}
