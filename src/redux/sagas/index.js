import { all, fork } from "redux-saga/effects";
import posts from "./posts";
import auths from "./auths";
import users from "./users";
import comments from "./comments";
import validations from "./validations";

const dataSagas = [
  fork(posts),
  fork(auths),
  fork(users),
  fork(comments),
  fork(validations),
];

export default function* rootSaga() {
  yield all([...dataSagas]);
}
