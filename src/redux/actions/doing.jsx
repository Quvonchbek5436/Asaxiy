import { dispatch } from "../store";
import * as t from "../types";


export const getProducts = (data) => {
    dispatch({ type: t.GET_PRODUCTS, payload: data });
};

export const setLike = (data) => {
    dispatch({ type: t.SET_LIKE, payload: data });
};

export const setBasket = (data) => {
    dispatch({ type: t.SET_BASKET, payload: data });
};

export const setBasketLeft = (data) => {
    dispatch({ type: t.SET_LIKE_LEFT, payload: data });
};

export const removeBasket = (data) => {
    dispatch({ type: t.REMOVE_BASKET, payload: data });
};
export const removeLikes = (data) => {
    dispatch({ type: t.REMOVE_LIKES, payload: data });
};

