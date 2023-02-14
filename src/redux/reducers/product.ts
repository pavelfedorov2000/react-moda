import { ActionType } from "../actionsList";
import { ProductAction, ProductState } from "../types/product";

const initialState: ProductState = {
    popupProduct: null,
}

const productReducer = (state = initialState, action: ProductAction):ProductState => {
    switch (action.type) {
        case ActionType.OpenProductPopup:
            return {
                ...state,
                popupProduct: action.payload,
            };
        case ActionType.CloseProductPopup:
            return {
                ...state,
                popupProduct: null,
            };
        default:
            return state;
    }
}

export default productReducer;