import { ActionType } from "../actionsList";
import { BurgerAction, BurgerState } from "../types/burger";

const initialState: BurgerState = {
    isOpenMenu: false,
}

const burgerReducer = (state = initialState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case ActionType.OpenBurgerMenu:
            return {
                ...state,
                isOpenMenu: true,
            };
        case ActionType.CloseBurgerMenu:
            return {
                ...state,
                isOpenMenu: false,
            };
        default:
            return state;
    }
}

export default burgerReducer;