import { Sort } from "../../interfaces/Sort";
import { ActionType } from "../actionsList";

export interface FiltersState {
    isVisible: boolean,
    sortBy: Sort,
    sortPrices: [number, number],
    sortColors: string[],
    sortSizes: number[],
    sortBrands: string[],
    sortStyles: string[],
}

interface SetSortByAction {
    type: ActionType.SetSortBy;
    payload: Sort;
}

interface SetPriceFromAction {
    type: ActionType.SetPriceFrom;
    payload: number;
} 

interface SetPriceToAction {
    type: ActionType.SetPriceTo;
    payload: number;
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
    | SetPriceFromAction
    | SetPriceToAction
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