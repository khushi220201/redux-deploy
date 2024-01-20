import { combineReducers } from "redux";
import { productReducer } from "./productReducer/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
});
export default rootReducer;
