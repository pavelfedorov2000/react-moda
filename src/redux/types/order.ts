import { PersonalData } from "../../interfaces/PersonalData";
import { ActionType } from "../actionsList";

export interface OrderState {
    personalData: PersonalData,
    DELIVERY: string;
    PAYMENT: string;
    COMMENT?: string;
}

interface SetPersonalDataAction {
    type: ActionType.SetPersonalData;
    payload: any;
}

interface ResetPersonalDataAction {
    type: ActionType.ResetPersonalData;
}

interface SetDeliveryAction {
    type: ActionType.SetDelivery;
    payload: string;
}

interface SetPaymentAction {
    type: ActionType.SetPayment;
    payload: string;
}

export type OrderAction = SetPersonalDataAction | SetDeliveryAction | SetPaymentAction | ResetPersonalDataAction;
