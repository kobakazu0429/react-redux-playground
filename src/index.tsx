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
      <Counter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
