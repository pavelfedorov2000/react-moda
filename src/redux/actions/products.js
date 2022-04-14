// setPizzas должна взять массив пицц pizzas и создать объект
import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});

// асинхронный action (redux thunk): получение пицц (axios), потом сохранение (dispatch)
export const fetchProducts = (sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/products?_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setProducts(data));
    });
    //${sortBy.order != undefined ? `&_order=${sortBy.order}` : ''}
};

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products
});