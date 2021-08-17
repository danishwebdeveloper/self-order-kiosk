import React, { createContext, useReducer } from 'react';
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, ORDER_SET_TYPE } from './constants';

export const Store = createContext();

const initialState = {
    categoryList: {
        loading: true,
    },
    order: {
        orderType: 'Eat In',
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ORDER_SET_TYPE:
            return {
                ...state,
                order: {...state.order, orderType: action.payload }
            }

            // Now make cases for categoriesList
        case CATEGORY_LIST_REQUEST:
            return {...state, categoryList: { loading: true } };
        case CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categoryList: { loading: false, categories: action.payload },
            };
        case CATEGORY_LIST_FAIL:
            return {
                ...state,
                categoryList: { loading: false, error: action.payload },
            };

        default:
            return state;
    }
}

// State provoder all wrapper component and make hooks and accessable
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value = { value } > { props.children } < /Store.Provider>
}