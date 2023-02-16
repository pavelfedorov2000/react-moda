import { Sort } from "../../interfaces/Sort";
import { ActionType } from "../actionsList";

export const setSortBy = ({ type, order }: Sort) => ({
    type: ActionType.SetSortBy,
    payload: { type, order }
});

export const setSortPrices = (range: number[]) => ({
    type: ActionType.SetSortPrices,
    payload: range
});

export const setSortColors = (arr: string[]) => ({
    type: ActionType.SetSortColors,
    payload: arr
});

export const setSortSizes = (arr: number[]) => ({
    type: ActionType.SetSortSizes,
    payload: arr
});

export const setSortBrands = (arr: string[]) => ({
    type: ActionType.SetSortBrands,
    payload: arr
});

export const setSortStyles = (arr: string[]) => ({
    type: ActionType.SetSortStyles,
    payload: arr
});

export const resetSortPrices = () => ({
    type: ActionType.ResetSortPrices,
});

export const resetSortColors = () => ({
    type: ActionType.ResetSortColors,
});

export const resetSortBrands = () => ({
    type: ActionType.ResetSortBrands,
});

export const resetSortStyles = () => ({
    type: ActionType.ResetSortStyles,
});

export const resetSortSizes = () => ({
    type: ActionType.ResetSortSizes,
});

export const resetFilters = () => ({
    type: ActionType.ResetFilters,
});

export const openFilters = () => ({
    type: ActionType.OpenFilters,
});

export const closeFilters = () => ({
    type: ActionType.CloseFilters,
});