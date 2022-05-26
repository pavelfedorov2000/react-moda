const initialState = {
    sortBy: {
        type: 'price',
        order: 'asc',
    },
    sortPrices: [1000, 100000],
    sortColors: [],
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY': {
            return {
                ...state,
                sortBy: action.payload,
            }
        }
        case 'SET_SORT_PRICES': {
            return {
                ...state,
                sortPrices: action.payload,
            }
        }
        case 'SET_SORT_COLORS': {
            return {
                ...state,
                sortColors: action.payload,
            }
        }
        case 'RESET_SORT_PRICES': {
            return {
                ...state,
                sortPrices: initialState.sortPrices,
            }
        }
        case 'RESET_ALL_FILTERS': {
            return state;
        }
        default:
            return state;
    }
}

export default filters;