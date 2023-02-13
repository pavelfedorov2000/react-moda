import { CatalogItem } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export const addFavoriteProduct = (product: CatalogItem) => ({
    type: ActionType.AddFavoriteProduct,
    payload: product
});

export const removeFavoriteProduct = (id: number) => ({
    type: ActionType.RemoveFavoriteProduct,
    payload: id
});