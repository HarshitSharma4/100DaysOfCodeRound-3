import { combineReducers } from "redux";
import { ProductReducer, selectProductReducer } from "./ProductReducer";
import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import AddCart from "./AddCart";
export const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectProductReducer,
  user: userSlice,
  AddToCart: AddCart,
});

//export const reducers = configureStore({
//   reducer: {
//     allProducts: ProductReducer,
//     product: selectProductReducer,
//     user: userSlice,
//     AddToCart: AddCart,
//   },
// });
