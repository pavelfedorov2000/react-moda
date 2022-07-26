export const addFavoriteProduct = (productObj) => ({
    type: 'ADD_FAVORITE_PRODUCT',
    payload: productObj
});

export const removeFavoriteProduct = (id) => ({
    type: 'REMOVE_FAVORITE_PRODUCT',
    payload: id
});