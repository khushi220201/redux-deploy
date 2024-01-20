import { Products } from "../../interface";
import { ActionTypes } from "../constant";
import { v4 as uuidv4 } from "uuid";

export const addProductAction = (productData: Products) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.ADD_PRODUCT_REQUEST,
    });

    try {
      const data = {
        id: uuidv4().toString(),
        ...productData,
      };

      // Dispatch action with successful response data
      dispatch({
        type: ActionTypes.ADD_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      // Dispatch action if an error occurs during the fetch or parsing the response
      dispatch({
        type: ActionTypes.ADD_PRODUCT_FAIL,
        payload: { error: error.message || "Failed to add product" },
      });
    }
  };
};
