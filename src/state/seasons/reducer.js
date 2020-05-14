import { GET_SEASONS } from "../types";
const seasons = (state = { loading: false, data: [], error: null }, action) => {
  switch (action.type) {
    case GET_SEASONS.PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_SEASONS.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case GET_SEASONS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default seasons;
