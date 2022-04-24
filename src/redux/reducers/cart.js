const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {

            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: currentItems.reduce((sum, obj) => sum + obj.price, 0),
                }
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            //const items = Object.values(newItems).map(obj => obj.items);
            //const allPizzas = [].concat.apply([], items); // хак для объединения в один массив без reduce
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'CLEAR_CART': return {
            ...state,
            //items: {},
            //totalPrice: 0,
            //totalCount: 0,
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = { ...state.items };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
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