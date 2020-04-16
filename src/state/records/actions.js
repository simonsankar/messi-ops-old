import { GET_RECORDS } from "../types";
import { recordsRef } from "../../api/firebase";

export const getRecords = dispatch => {
  dispatch({ type: GET_RECORDS.PENDING });
  return recordsRef.on("value", snapshot => {
    return dispatch({
      type: GET_RECORDS.SUCCESS,
      payload: Object.values(snapshot.val())
    });
  });
};
