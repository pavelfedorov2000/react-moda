import { ActionType } from "../actionsList";

export const setPersonaData = (value: string) => ({
    type: ActionType.SetPersonaData,
    payload: value
});

export const setDelivery = (value: string) => ({
    type: ActionType.SetDelivery,
    payload: value
});

export const setPayment = (value: string) => ({
    type: ActionType.SetPayment,
    payload: value
});