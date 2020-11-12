import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/styles/App.scss";
import App from "./routes/App";
import storeFn from "./redux/store";

const store = storeFn();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
