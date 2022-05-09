const initialState = {
    data: {}
};

const order = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'SET_ORDER_DATA': {
            return {
                ...state,
                data: action.payload,
            };
        }
        default:
            return state;
    }
}

export default order;