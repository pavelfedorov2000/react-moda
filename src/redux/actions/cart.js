export const addItemToCart = (productObj) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: productObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const plusPizza = (id) => ({
    type: 'PLUS_ITEM',
    payload: id,
});

export const minusPizza = (id) => ({
    type: 'MINUS_ITEM',
    payload: id,
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});