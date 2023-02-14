import { CatalogItem } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export interface FavoriteProductsState {
    products: CatalogItem[]
}

interface AddFavoriteProductAction {
    type: ActionType.AddFavoriteProduct;
    payload: CatalogItem;
}

interface RemoveFavoriteProductAction {
    type: ActionType.RemoveFavoriteProduct;
    payload: string;
}

export type FavoriteProductsAction = AddFavoriteProductAction | RemoveFavoriteProductAction;