import { combineReducers } from "redux";
import { ProductReducer, selectProductReducer } from "./ProductReducer";
import userSlice from "./userSlice";
import AddCart from "./AddCart";
export const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectProductReducer,
  user: userSlice,
  AddToCart: AddCart,
});

// allProducts: ProductReducer,
// product: selectProductReducer,
// user: userSlice,
// AddToCart: AddCart,
