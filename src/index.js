import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { App } from "containers";
import store from "redux/store";

const history = createHistory();

export default render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("main") || document.createElement("div")
);
