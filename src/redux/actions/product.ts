import { CatalogItem } from "../../interfaces/CatalogItem";
import { ActionType } from "../actionsList";

export const openProductPopup = (product: CatalogItem) => ({
    type: ActionType.OpenProductPopup,
    payload: product
});

export const closeProductPopup = () => ({
    type: ActionType.CloseProductPopup,
});