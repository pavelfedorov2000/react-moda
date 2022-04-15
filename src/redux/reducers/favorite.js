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
      //const oldFavorites = state.products;
      const removingItem = state.products.findIndex(product => product.id === action.payload);
      console.log(removingItem);
      const newFavorites = state.products.splice(removingItem, 1);
      return {
        ...state,
        products: newFavorites
      }
    }

    default:
      return state;
  }

}

export default favorite;