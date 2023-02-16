export interface OrderState {
    personalData: {
        name: string;
        surname: string;
        phone: string;
        email: string;
        city: string;
    },
    delivery: string;
    payment: string;
    comment?: string;
}

interface SetPersonalDataAction {
    
}

interface SetDeliveryAction {
    
}

interface SetPaymentAction {
    
}

export type OrderAction = SetPersonalDataAction | SetDeliveryAction | SetPaymentAction;
