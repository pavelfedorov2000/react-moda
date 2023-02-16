import { Sort } from "../../interfaces/Sort";
import { ActionType } from "../actionsList";

export interface FiltersState {
    isVisible: boolean,
    sortBy: Sort,
    sortPrices: number[],
    sortColors: string[],
    sortSizes: number[],
    sortBrands: string[],
    sortStyles: string[],
}

interface SetSortByAction {
    type: ActionType.SetSortBy;
    payload: Sort;
}

interface SetSortPricesAction {
    type: ActionType.SetSortPrices;
    payload: number[];
}

interface SetSortColorsAction {
    type: ActionType.SetSortColors;
    payload: string[];
}

interface SetSortSizesAction {
    type: ActionType.SetSortSizes;
    payload: number[];
}

interface SetSortBrandsAction {
    type: ActionType.SetSortBrands;
    payload: string[];
}

interface SetSortStylesAction {
    type: ActionType.SetSortStyles;
    payload: string[];
}

interface ResetSortPricesAction {
    type: ActionType.ResetSortPrices;
} 

interface ResetSortColorsAction {
    type: ActionType.ResetSortColors;
}

interface ResetSortSizesAction {
    type: ActionType.ResetSortSizes;
}

interface ResetSortBrandsAction {
    type: ActionType.ResetSortBrands;
}

interface ResetSortStylesAction {
    type: ActionType.ResetSortStyles;
}

interface ResetFiltersAction {
    type: ActionType.ResetFilters;
}

interface OpenFiltersAction {
    type: ActionType.OpenFilters
}

interface CloseFiltersAction {
    type: ActionType.CloseFilters
}

export type FiltersAction =
    SetSortByAction
    | SetSortPricesAction
    | SetSortColorsAction
    | SetSortSizesAction
    | SetSortBrandsAction
    | SetSortStylesAction
    | ResetSortPricesAction
    | ResetSortColorsAction
    | ResetSortSizesAction
    | ResetSortBrandsAction
    | ResetSortStylesAction
    | ResetFiltersAction
    | OpenFiltersAction
    | CloseFiltersAction;