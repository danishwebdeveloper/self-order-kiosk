import axios from "axios"
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, ORDER_SET_TYPE } from "./constants"

// Action and setOrderType and make 2 arguments one is dispatch and another one is what we want to update??
export const setOrderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType,
    })
}

// make async function of categoriesList and dispatch and available for the main Order Screen or where it required!
export const listCategories = async(dispatch) => {
    dispatch({
        type: CATEGORY_LIST_REQUEST
    })
    try {
        const { data } = await axios.get('/api/categories')
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message,
        })
    }
}