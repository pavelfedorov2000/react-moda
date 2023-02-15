import { ActionType } from "../actionsList";
import { CategoryAction, CategoryState } from "../types/category";

const initialState: CategoryState = {
    activeCategory: 0,
}

const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case ActionType.SetCategory:
            return {
                ...state,
                activeCategory: action.payload,
            };
        default:
            return state;
    }
}

export default categoryReducer;