const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_CART': {

            //const allPizzas = [].concat.apply([], items); // хак для объединения в один массив без reduce

            return {
                ...state,
                //items: newItems,
                //totalCount,
                //totalPrice,
            };
        }
        case 'CLEAR_CART': return {
            ...state,
            //items: {},
            //totalPrice: 0,
            //totalCount: 0,
        }

        case 'REMOVE_CART_ITEM': {
            //const newItems = { ...state.items };
            //const currentTotalPrice = newItems[action.payload].totalPrice;
            //const currentTotalCount = newItems[action.payload].items.length;
            //delete newItems[action.payload];
            return {
                ...state,
                //items: newItems,
                //totalPrice: state.totalPrice - currentTotalPrice,
                //totalCount: state.totalCount - currentTotalCount,
            }
        }
        case 'MINUS_ITEM': {

            return {
                ...state,
                //items: newItems,
                //totalCount,
                //totalPrice,
            };
        }
        case 'PLUS_ITEM': {

            return {
                ...state,
                //items: newItems,
                //totalCount,
                //totalPrice,
            };
        }
        default:
            return state;
    }
}

export default cart;