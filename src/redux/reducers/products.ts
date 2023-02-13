import { ActionType } from "../actionsList";
import { ProductsAction, ProductsState } from "../types/products";

const initialState: ProductsState = {
    products: [],
    isLoaded: false,
};

const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ActionType.SetProducts:
            return {
                ...state,
                products: action.payload,
                isLoaded: true,
            };
        case ActionType.SetLoaded:
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    }
}

export default productsReducer;