import { ActionType } from "../actionsList";
import { OrdersState, OrdersAction } from "../types/orders";

const initialState: OrdersState = {
    data: []
};

const ordersReducer = (state = initialState, action: OrdersAction): OrdersState => {
    switch (action.type) {
        case ActionType.SetOrderData: {
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ],
            };
        }
        default:
            return state;
    }
}

export default ordersReducer;