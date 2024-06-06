import { combineReducers } from "redux";
import { productReducer, selectedPoductReducer } from "./productReducer";

const reducers = combineReducers({
  allPdts: productReducer,
  sltPdts: selectedPoductReducer,
});

export default reducers;
