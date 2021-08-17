import { ORDER_SET_TYPE } from "./constants"

// Action and setOrderType and make 2 arguments one is dispatch and another one is what we want to update??
export const setOrderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType,
    })
}