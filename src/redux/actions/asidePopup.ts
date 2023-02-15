import { ActionType } from "../actionsList";

export const openAuth = () => ({
    type: ActionType.OpenAuth
});

export const closeAuth = () => ({
    type: ActionType.CloseAuth
});

export const openAsideBasket = () => ({
    type: ActionType.OpenAsideBasket
});

export const closeAsideBasket = () => ({
    type: ActionType.CloseAsideBasket
});