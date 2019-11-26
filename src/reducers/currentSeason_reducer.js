import { GET_CURRENT_SEASON } from "../actions/types";
const currentSeason = (state = null, action) => {
  switch (action.type) {
    case GET_CURRENT_SEASON:
      return action.payload;
    default:
      return state;
  }
};
export default currentSeason;
