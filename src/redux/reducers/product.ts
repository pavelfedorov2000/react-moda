import { ActionType } from "../actionsList";
import { ProductAction, ProductState } from "../types/product";

const initialState: ProductState = {
    activeProduct: null,
}

const productReducer = (state = initialState, action: ProductAction):ProductState => {
    switch (action.type) {
        case ActionType.OpenProductPopup:
            return {
                ...state,
                activeProduct: action.payload,
            };
        case ActionType.CloseProductPopup:
            return {
                ...state,
                activeProduct: null,
            };
        default:
            return state;
    }
}

export default productReducer;