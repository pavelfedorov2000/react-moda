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
                currentSubscribe: {
                    ...state.currentSubscribe,
                    items: state.currentSubscribe?.items?.map(item => {
                        if (item.name === action.payload) {
                            return {
                                ...item,
                                active: !item.active
                            }
                        } else {
                            return item;
                        }
                    })
                }
            };
        case ActionType.SubmitSubscribe:
            const currentSubscribe = state.currentSubscribe;
            
            return {
                ...state,
                subscribes: currentSubscribe ? state.subscribes.map((subscribe) => {
                    if (subscribe.id === currentSubscribe.id) {
                        return currentSubscribe
                    } else {
                        return subscribe
                    }
                }) : state.subscribes,
                isPopupVisible: false,
                currentSubscribe: undefined
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