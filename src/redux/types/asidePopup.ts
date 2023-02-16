import { ActionType } from "../actionsList";

export interface AsidePopupState {
    isAuthVisible: boolean;
    isAsideBasketVisible: boolean;
}

interface OpenAuthAction {
    type: ActionType.OpenAuth;
}

interface CloseAuthAction {
    type: ActionType.CloseAuth;
}

interface OpenAsideBasketAction {
    type: ActionType.OpenAsideBasket;
}

interface CloseAsideBasketAction {
    type: ActionType.CloseAsideBasket;
}

export type AsidePopupAction =
    OpenAuthAction
    | CloseAuthAction
    | OpenAsideBasketAction
    | CloseAsideBasketAction;