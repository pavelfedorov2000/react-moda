import { ActionType } from "../actionsList";

export interface AsidePopupState {
    isAuthVisible: boolean;
    isAsideBasketVisible: boolean;
    isPasswordRecoveryVisible: boolean;
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

interface OpenPasswordRecoveryAction {
    type: ActionType.OpenPasswordRecovery;
}

interface ClosePasswordRecoveryAction {
    type: ActionType.ClosePasswordRecovery;
}

export type AsidePopupAction =
    OpenAuthAction
    | CloseAuthAction
    | OpenAsideBasketAction
    | CloseAsideBasketAction
    | OpenPasswordRecoveryAction
    | ClosePasswordRecoveryAction;