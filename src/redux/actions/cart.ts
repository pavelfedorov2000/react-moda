import { ActionType } from "../actionsList";

export const addProductToCart = (product: any) => ({
    type: ActionType.AddProductToCart,
    payload: product,
}); 

export const removeCartProduct = (id: number | string) => ({
    type: ActionType.RemoveCartProduct,
    payload: id,
});

export const plusProduct = (id: number | string) => ({
    type: ActionType.PlusProduct,
    payload: id,
});

export const minusProduct = (id: number | string) => ({
    type: ActionType.MinusProduct,
    payload: id,
});

export const clearCart = () => ({
    type: ActionType.ClearCart,
});