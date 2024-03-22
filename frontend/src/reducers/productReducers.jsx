// productReducers.js
import { 
  PRODUCT_LIST_REQUEST, 
  PRODUCT_LIST_SUCCESS, 
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [], loading: false, error: null }, action) => {
  switch (action.type) {
      case PRODUCT_LIST_REQUEST:
          return { loading: true, products: [], error: null };
      case PRODUCT_LIST_SUCCESS:
          return { loading: false, products: action.payload, error: null };
      case PRODUCT_LIST_FAIL:
          return { loading: false, products: [], error: action.payload };
      default:
          return state;
  }
};

export const productDetailsReducer = (state = { product: { reviews: [] }, loading: false, error: null }, action) => {
  switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
          return { loading: true, product: { reviews: [] }, error: null };
      case PRODUCT_DETAILS_SUCCESS:
          return { loading: false, product: action.payload, error: null };
      case PRODUCT_DETAILS_FAIL:
          return { loading: false, product: { reviews: [] }, error: action.payload };
      default:
          return state;
  }
};

export const productUpdateReducer = (state = { product: {}, loading: false, error: null }, action) => {
  switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
          return { loading: true, product: {}, error: null };
      case PRODUCT_UPDATE_SUCCESS:
          return { loading: false, product: action.payload, error: null };
      case PRODUCT_UPDATE_FAIL:
          return { loading: false, product: {}, error: action.payload };
      default:
          return state;
  }
};

