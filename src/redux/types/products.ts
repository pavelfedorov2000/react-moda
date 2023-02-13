import { Product } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export interface ProductsState {
    products: Product[],
    isLoaded: boolean,
}

interface SetLoadedAction {
    type: ActionType.SetLoaded;
    payload: boolean;
}

interface SetProductsAction {
    type: ActionType.SetProducts;
    payload: Product[];
}

export type ProductsAction = SetLoadedAction | SetProductsAction;