import { combineReducers } from "redux";

// Current Season
import currentSeason from "./currentSeason_reducer";

const rootReducer = combineReducers({
  currentSeason
});

export default rootReducer;
