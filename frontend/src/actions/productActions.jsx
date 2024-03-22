// productActions.js
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
import axios from 'axios';

export const listProducts = (category = '') => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get(`/api/products?category=${category}`);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ 
            type: PRODUCT_LIST_FAIL, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        });
    }
};

export const updateProduct = (id, updatedData) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST });
        const { data } = await axios.put(`/api/products/update/${id}/`, updatedData);
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ 
            type: PRODUCT_UPDATE_FAIL, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        });
    }
};

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ 
            type: PRODUCT_DETAILS_FAIL, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        });
    }
};

