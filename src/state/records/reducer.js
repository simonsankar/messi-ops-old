import { GET_RECORDS } from "../types";

const records = (
  state = {
    loading: false,
    data: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case GET_RECORDS.PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_RECORDS.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      };
    case GET_RECORDS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default records;
