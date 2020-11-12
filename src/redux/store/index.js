import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import rootSaga from "../sagas";
import reducers from "../reducers";

const sagaMiddleware = reduxSaga();

const initialState = {
  posts: [],
  users: [],
};

export default () => {
  return {
    ...createStore(reducers, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
