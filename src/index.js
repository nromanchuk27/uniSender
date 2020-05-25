import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.sass";
import App from "./App";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux/es/redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
