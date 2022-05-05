const initialState = {
  products: [],
};

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_PRODUCT': {
      const newFavorites = [
        ...state.products,
        action.payload
      ]
      return {
        ...state,
        products: newFavorites
      }
    }
    case 'REMOVE_FAVORITE_PRODUCT': {
      const newFavorites = { ...state.products };
      const filteredFavorites = newFavorites.filter(favorite => favorite.id !== action.payload);
      return {
        ...state,
        products: filteredFavorites
      }
    }

    default:
      return state;
  }

}

export default favorite;