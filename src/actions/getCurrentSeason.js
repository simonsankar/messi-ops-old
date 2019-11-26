import { GET_CURRENT_SEASON } from "./types";
import ops from "../api/ops";

export const getCurrentSeason = () => {
  const request = ops.getCurrSeason();
  return {
    type: GET_CURRENT_SEASON,
    payload: request
  };
};
