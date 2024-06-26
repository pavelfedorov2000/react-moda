import { SortFilters } from "../../enums/SortFilter";
import { ActionType } from "../actionsList";
import { FiltersAction, FiltersState } from "../types/filters";

const initialState: FiltersState = {
    isVisible: false,
    sortBy: {
        ...SortFilters[0]
    },
    sortPrices: [1000, 100000],
    sortColors: [],
    sortSizes: [],
    sortBrands: [],
    sortStyles: [],
};

const filtersReducer = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type) {
        case ActionType.SetSortBy: {
            return {
                ...state,
                sortBy: action.payload,
            }
        }
        case ActionType.SetSortPrices: {
            return {
                ...state,
                sortPrices: [action.payload[0], action.payload[1]],
            }
        }
        case ActionType.SetSortColors: {

            return {
                ...state,
                sortColors: action.payload,
            }
        }
        case ActionType.SetSortSizes: {
            return {
                ...state,
                sortSizes: action.payload.sort((a, b) => a - b),
            }
        }
        case ActionType.SetSortBrands: {
            return {
                ...state,
                sortBrands: action.payload,
            }
        }
        case ActionType.SetSortStyles: {
            return {
                ...state,
                sortStyles: action.payload,
            }
        }
        case ActionType.ResetSortPrices: {
            return {
                ...state,
                sortPrices: initialState.sortPrices,
            }
        }
        case ActionType.ResetSortColors: {
            return {
                ...state,
                sortColors: [],
            }
        }
        case ActionType.ResetSortSizes: {
            return {
                ...state,
                sortSizes: [],
            }
        }
        case ActionType.ResetSortBrands: {
            return {
                ...state,
                sortBrands: [],
            }
        }
        case ActionType.ResetSortStyles: {
            return {
                ...state,
                sortStyles: [],
            }
        }
        case ActionType.ResetFilters: {
            return initialState;
        }
        case ActionType.OpenFilters: {
            return {
                ...state,
                isVisible: true
            }
        }
        case ActionType.CloseFilters: {
            return {
                ...state,
                isVisible: false
            }
        }
        default:
            return state;
    }
}

export default filtersReducer;