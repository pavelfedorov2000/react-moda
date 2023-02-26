import { ActionType } from "../actionsList";

interface Input {
    name: string;
    value: string;
}

export const setPersonalData = ({ name, value }: Input) => ({
    type: ActionType.SetPersonalData,
    payload: { name, value }
});

export const setDelivery = (value: string) => ({
    type: ActionType.SetDelivery,
    payload: value
});

export const setPayment = (value: string) => ({
    type: ActionType.SetPayment,
    payload: value
});

export const resetPersonalData = () => ({
    type: ActionType.ResetPersonalData,
});