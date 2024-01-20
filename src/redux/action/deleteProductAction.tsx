import { ActionTypes } from "../constant";
export const deleteProductAction = (productID: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.DELETE_PRODUCT_REQUEST,
    });

    try {
      dispatch({
        type: ActionTypes.DELETE_PRODUCT_SUCCESS,
        payload: productID,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.DELETE_PRODUCT_FAIL,
        payload: { error: error.message || "Failed to delete product" },
      });
    }
  };
};
