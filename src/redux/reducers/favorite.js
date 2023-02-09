const initialState = {
    products: [],
};

const favorite = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_PRODUCT': {
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        }
        case 'REMOVE_FAVORITE_PRODUCT': {
            return {
                ...state,
                products: state.products.filter(favorite => favorite.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default favorite;