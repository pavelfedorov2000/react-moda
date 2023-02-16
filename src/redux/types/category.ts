import { ActionType } from "../actionsList";

export interface CategoryState {
    activeCategory: number;
}

interface SetCategoryAction {
    type: ActionType.SetCategory;
    payload: number;
}

export type CategoryAction = SetCategoryAction;