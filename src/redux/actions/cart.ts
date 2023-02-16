import { CatalogItem } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export const addProductToCart = (product: CatalogItem) => ({
    type: ActionType.AddProductToCart,
    payload: product,
}); 

export const removeCartProduct = (id: string) => ({
    type: ActionType.RemoveCartProduct,
    payload: id,
});

export const plusProduct = (id: string) => ({
    type: ActionType.PlusProduct,
    payload: id,
});

export const minusProduct = (id: string) => ({
    type: ActionType.MinusProduct,
    payload: id,
});

export const clearCart = () => ({
    type: ActionType.ClearCart,
});