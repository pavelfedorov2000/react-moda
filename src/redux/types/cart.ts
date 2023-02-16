import { CatalogItem } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export interface CartState {
    items: any,
    totalPrice: number,
    totalCount: number,
    totalDiscount: number,
}

interface AddProductToCartAction {
    type: ActionType.AddProductToCart;
    payload: CatalogItem;
}

interface RemoveCartProductAction {
    type: ActionType.RemoveCartProduct;
    payload: string;
}

interface PlusProductAction {
    type: ActionType.PlusProduct;
    payload: string;
}

interface MinusProductAction {
    type: ActionType.MinusProduct;
    payload: string;
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