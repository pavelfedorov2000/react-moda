import { ActionType } from "../actionsList";

export interface OrdersState {
    data: any[];
}

interface SetOrderDataAction {
    type: ActionType.SetOrderData;
    payload: any[];
}

export type OrdersAction = SetOrderDataAction;