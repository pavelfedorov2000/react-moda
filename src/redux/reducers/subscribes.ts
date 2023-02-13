import { ActionType } from "../actionsList";
import { SubscribesState, SubscibesAction } from "../types/subscribes";

const initialState: SubscribesState = {
    subscribes: [],
    isPopupVisible: false,
    currentSubscribe: undefined
};

const subscribesReducer = (state = initialState, action: SubscibesAction): SubscribesState => {
    switch (action.type) {
        case ActionType.SetSubscribes:
            return {
                ...state,
                subscribes: action.payload,
            };
        case ActionType.ChangeSubscribe:
            return {
                ...state,
                subscribes: state.subscribes.map((subscribe) => {
                    if (subscribe.id === action.payload.id) {
                        return {
                            ...subscribe,
                            ...action.payload
                        }
                    } else {
                        return subscribe;
                    }
                }),
                currentSubscribe: action.payload
            };
        case ActionType.CancelSubscribe:
            return {
                ...state,
                subscribes: state.subscribes.filter((subscribe) => subscribe.id !== action.payload),
            };
        case ActionType.OpenSubscribe:
            return {
                ...state,
                isPopupVisible: true,
                currentSubscribe: state.subscribes.find((subscribe) => subscribe.id === action.payload),
            };
        case ActionType.CloseSubscribe:
            return {
                ...state,
                isPopupVisible: false,
                currentSubscribe: undefined,
            };
        default:
            return state;
    }
}

export default subscribesReducer;