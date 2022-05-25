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
            const subscribesCopy = [...state.subscribes];
            let currentSubscribe = subscribesCopy.filter(subscribe => subscribe.id == action.payload.id)[0];
            //console.log(currentSubscribe);
            subscribesCopy.splice(+action.payload.id, 1);
            console.log(action.payload);
            currentSubscribe = action.payload;
            const changedSubscribes = [
                ...subscribesCopy,
                currentSubscribe
            ]
            //const thisSubscribe = newSubscribes;
            return {
                ...state,
                subscribes: changedSubscribes,
            };
        case 'CANCEL_SUBSCRIBE':
            const newSubscribes = [...state.subscribes];
            const filteredSubscribes = newSubscribes.filter(subscribe => subscribe.id != action.payload);
            return {
                ...state,
                subscribes: filteredSubscribes,
            };
        default:
            return state;
    }
}

export default subscribes;