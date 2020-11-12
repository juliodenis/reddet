import React from "react";
import { createStore } from "redux";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import reducers from "../redux/reducers";

const initialState = {
  posts: [],
  users: [],
};

const store = createStore(reducers, initialState);
const history = createBrowserHistory();

const ProviderMock = (props) => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
