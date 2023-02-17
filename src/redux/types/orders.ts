import { OrderData } from "../../interfaces/OrderData";
import { ActionType } from "../actionsList";

export interface OrdersState {
    data: OrderData[];
}

interface SetOrderDataAction {
    type: ActionType.SetOrderData;
    payload: OrderData;
}

export type OrdersAction = SetOrderDataAction;