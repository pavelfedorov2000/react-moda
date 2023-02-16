import { ActionType } from "../actionsList";
import { CartAction, CartState } from "../types/cart";

const initialState: CartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    totalDiscount: 0,
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case ActionType.AddProductToCart: {

            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: currentItems.reduce((sum, obj) => sum + obj.price, 0),
                    totalDiscount: currentItems.reduce((sum, obj) => sum + (obj.discount !== 0 ? obj.price * obj.discount / 100 : 0), 0)
                }
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
            const totalDiscount = Object.keys(newItems).reduce((sum, key) => newItems[key].totalDiscount + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
                totalDiscount
            };
        }

        case ActionType.RemoveCartProduct: {
            const newItems = { ...state.items };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalDiscount = newItems[action.payload].totalDiscount;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalDiscount: state.totalDiscount - currentTotalDiscount,
                totalCount: state.totalCount - currentTotalCount
            }
        }

        case ActionType.MinusProduct: {
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: Object.values(newObjItems).reduce((sum: number, obj: any) => sum + obj.price, 0),
                    totalDiscount: Object.values(newObjItems).reduce((sum: number, obj: any) => sum + (obj.discount !== 0 ? obj.price * obj.discount / 100 : 0), 0),
                }
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
            const totalDiscount = Object.keys(newItems).reduce((sum, key) => newItems[key].totalDiscount + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
                totalDiscount
            };
        }

        case ActionType.PlusProduct: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: Object.values(newObjItems).reduce((sum, obj) => sum + obj.price, 0),
                    totalDiscount: Object.values(newObjItems).reduce((sum, obj) => sum + (obj.discount !== 0 ? obj.price * obj.discount / 100 : 0), 0)
                }
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
            const totalDiscount = Object.keys(newItems).reduce((sum, key) => newItems[key].totalDiscount + sum, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
                totalDiscount
            };
        }
        case ActionType.ClearCart: return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0
        }
        default:
            return state;
    }
}

export default cartReducer;