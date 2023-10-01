import { combineReducers } from "redux";
import { ProductReducer, selectProductReducer } from "./ProductReducer";

export const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectProductReducer,
});
