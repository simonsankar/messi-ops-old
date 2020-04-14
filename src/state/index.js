import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import records from "./records/reducer";
import seasons from "./seasons/reducer";

const rootReducer = combineReducers({
  records,
  seasons
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  {
    records: { loading: false, data: [], error: null },
    seasons: { loading: false, data: [], error: null }
  },
  composeEnhancers(applyMiddleware(thunk))
);
