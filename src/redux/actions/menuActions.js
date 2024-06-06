import { ActionType } from "../constants/action-type";

export const setPdts = (pdts) => {
  return {
    type: ActionType.SET_PDTS,
    payload: pdts,
  };
};

export const selectedPdts = (pdts) => {
  return {
    type: ActionType.SELECTED_PDTS,
    payload: pdts,
  };
};
