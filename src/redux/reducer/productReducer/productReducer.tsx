// postReducer.ts
import { ActionTypes } from "../../constant";
import { Products } from "../../../interface";

interface productstate {
  products: any;
  loading: boolean;
  error: string | null;
}

const initialState: productstate = {
  products: [],
  loading: false,
  error: null,
};

type ProductAction = {
  type: string;
  payload?: Products;
  error?: string;
};

export const productReducer = (
  state: productstate = initialState,
  action: ProductAction
): productstate => {
  switch (action.type) {
    // ADD PRODUCT
    case ActionTypes.ADD_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        products: [...state.products, action.payload as Products],
        loading: false,
        error: null,
      };
    case ActionTypes.ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error || "An error occurred while adding a product",
        products: [],
      };

    // GET PRODUCT
    case ActionTypes.GET_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error || "An error occurred",
        products: [],
      };

    //DELETE PRODUCT
    case ActionTypes.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.DELETE_PRODUCT_SUCCESS:
      const productIdToDelete = action.payload;
      const updatedProducts = state.products.filter(
        (product: Products) => product.id !== productIdToDelete
      );
      return {
        ...state,
        products: updatedProducts,
        loading: false,
        error: null,
      };
    case ActionTypes.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error || "Failed to delete product",
        products: [],
      };
    default:
      return state;
  }
};
