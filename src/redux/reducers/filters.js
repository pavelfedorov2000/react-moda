const initialState = {
    sortBy: {
        type: 'price',
        order: 'asc',
    },
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    return state;
}

export default filters;