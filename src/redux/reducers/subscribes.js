const initialState = {
    subscribes: [],
};

const subscribes = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SUBSCRIBES':
            return {
                ...state,
                subscribes: action.payload,
            };
        case 'CHANGE_SUBSCRIBE':
            /* const subscribesCopy = [...state.subscribes];
            let currentSubscribe = subscribesCopy.find(subscribe => subscribe.id == action.payload.id);
            subscribesCopy.splice(+action.payload.id, 1);
            currentSubscribe = action.payload;
            const changedSubscribes = [
                ...subscribesCopy,
                currentSubscribe
            ] */
            return {
                ...state,
                subscribes: state.subscribes.map(subscribe => {
                    if (subscribe.id === action.payload.id) {
                        return {
                            ...subscribe,
                            ...action.payload
                        }
                    }

                    return subscribe;
                }),
            };
        case 'CANCEL_SUBSCRIBE':
            return {
                ...state,
                subscribes: state.subscribes.filter(subscribe => subscribe.id !== action.payload),
            };
        default:
            return state;
    }
}

export default subscribes;