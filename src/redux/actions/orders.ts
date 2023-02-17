import { OrderData } from "../../interfaces/OrderData";
import { ActionType } from "../actionsList";

export const setOrderData = (data: OrderData) => ({
    type: ActionType.SetOrderData,
    payload: data
});