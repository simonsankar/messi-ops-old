import { GET_RECORDS } from "../types";
import { recordsRef } from "../../api/firebase";

export const getRecords = () => {
  recordsRef.on("value", snapshot => {
    console.log(snapshot.val());
  });
};
