import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sass/index.scss";
import "./index.css";
import "./overrides.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// React router
import { BrowserRouter } from "react-router-dom";
// Redux state management
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
// Middlewares
import ReduxPromise from "redux-promise";
// Root reducer
import rootReducer from "./reducers/index";

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
