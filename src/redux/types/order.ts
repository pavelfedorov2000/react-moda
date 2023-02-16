import { ActionType } from "../actionsList";

export interface OrderState {
    personalData: {
        NAME: string;
        SURNAME: string;
        PHONE: string;
        EMAIL: string;
        CITY: string;
    },
    DELIVERY: string;
    PAYMENT: string;
    COMMENT?: string;
}

interface SetPersonalDataAction {
    type: ActionType.SetPersonalData;
    payload: any;
}

interface SetDeliveryAction {
    type: ActionType.SetDelivery;
    payload: string;
}

interface SetPaymentAction {
    type: ActionType.SetPayment;
    payload: string;
}

export type OrderAction = SetPersonalDataAction | SetDeliveryAction | SetPaymentAction;
