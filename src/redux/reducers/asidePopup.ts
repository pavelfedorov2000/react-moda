import { ActionType } from "../actionsList";
import { AsidePopupAction, AsidePopupState } from "../types/asidePopup";

const initialState: AsidePopupState = {
    isAuthVisible: false,
    isAsideBasketVisible: false,
}

const burgerReducer = (state = initialState, action: AsidePopupAction): AsidePopupState => {
    switch (action.type) {
        case ActionType.OpenAuth:
            return {
                ...state,
                isAuthVisible: true,
            };
        case ActionType.CloseAuth:
            return {
                ...state,
                isAuthVisible: false,
            };
        case ActionType.OpenAsideBasket:
            return {
                ...state,
                isAsideBasketVisible: true,
            };
        case ActionType.CloseAsideBasket:
            return {
                ...state,
                isAsideBasketVisible: false,
            };
        default:
            return state;
    }
}

export default burgerReducer;