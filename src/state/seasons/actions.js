import { GET_SEASONS } from "../types";
import { seasonssRef } from "../../api/firebase";

export const getRecords = (dispatch) => {
  dispatch({ type: GET_SEASONS.PENDING });
  return seasonssRef.on("value", (snapshot) => {
    return dispatch({
      type: GET_SEASONS.SUCCESS,
      payload: snapshot.val() ? Object.values(snapshot.val()) : [],
    });
  });
};
