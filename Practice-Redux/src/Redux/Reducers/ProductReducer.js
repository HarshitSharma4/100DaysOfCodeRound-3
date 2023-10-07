import { ActionType } from "../Constants/Action.type";
import {createSlice} from "@redusjs/toolkit"
const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};


export const userSlice = createSlice({
  name:"user",
  initialState:{
    user:null,
  },
  reducers:{
       logIn:(state,action)=>{
            state.user = action.payload
       },
       logOut: (state) =>{
        state.user=null
       }
  }
})
