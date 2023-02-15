import { ActionType } from "../actionsList";

export interface CartState {
    items: {},
    totalPrice: number,
    totalCount: number,
    totalDiscount: number,
}

interface AddProductToCartAction {
    type: ActionType.AddProductToCart;
    payload: any;
}

interface RemoveCartProductAction {
    type: ActionType.RemoveCartProduct;
    payload: number;
}

interface PlusProductAction {
    type: ActionType.PlusProduct;
    payload: number;
}

interface MinusProductAction {
    type: ActionType.MinusProduct;
    payload: number;
}

interface ClearCartAction {
    type: ActionType.ClearCart;
}

export type CartAction =
    AddProductToCartAction
    | RemoveCartProductAction
    | PlusProductAction
    | MinusProductAction
    | ClearCartAction;