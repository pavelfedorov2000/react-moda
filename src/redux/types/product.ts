import { CatalogItem } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export interface ProductState {
    activeProduct: CatalogItem | null;
}

interface OpenPopupAction {
    type: ActionType.OpenProductPopup;
    payload: CatalogItem;
}

interface ClosePopupAction {
    type: ActionType.CloseProductPopup;
}

export type ProductAction = OpenPopupAction | ClosePopupAction;