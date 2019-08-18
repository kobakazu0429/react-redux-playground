import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Counter from "./containers/counter";
import { store } from "./stores";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Counter />
        <a href="https://github.com/kobakazu0429/react-redux-playground">
          Code is here.
        </a>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
