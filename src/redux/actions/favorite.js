export const addFavoriteProduct = (productObj) => ({
  type: 'ADD_FAVORITE_PRODUCT',
  payload: productObj
});

export const removeFavoriteProduct = (id) => ({
  type: 'ADD_FAVORITE_PRODUCT',
  payload: id
});