import { ActionType } from "../actionsList";

export const setOrderData = (data: any) => ({
    type: ActionType.SetOrderData,
    payload: data
});