import { ActionTypes } from "../constant";
import { Products } from "../../interface";
export const getProductListAction = () => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.GET_PRODUCT_REQUEST,
    });

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });

      if (!response.ok) {
        // Handle non-successful responses here (e.g., status code other than 200)
        throw new Error(`Failed to get product: ${response.status}`);
      }

      const responseData = await response.json();

      // Dispatch action with successful response data
      dispatch({
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        payload: responseData as Products[],
      });
    } catch (error: any) {
      // Dispatch action if an error occurs during the fetch or parsing the response
      dispatch({
        type: ActionTypes.GET_PRODUCT_FAIL,
        payload: { error: error.message || "Failed to get product" },
      });
    }
  };
};
