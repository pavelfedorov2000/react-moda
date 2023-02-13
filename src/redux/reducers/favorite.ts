import { ActionType } from "../actionsList";
import { FavoriteProductsAction, FavoriteProductsState } from "../types/favorite";

const initialState: FavoriteProductsState = {
    products: [],
};

const favoriteReducer = (state = initialState, action: FavoriteProductsAction): FavoriteProductsState => {
    switch (action.type) {
        case ActionType.AddFavoriteProduct: {
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        }
        case ActionType.RemoveFavoriteProduct: {
            return {
                ...state,
                products: state.products.filter((favorite) => favorite.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default favoriteReducer;