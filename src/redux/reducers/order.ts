import { PersonalData } from "../../enums/PersonalData";
import { ActionType } from "../actionsList";
import { OrderAction, OrderState } from "../types/order";

const initialState: OrderState = {
    personalData: {
        [PersonalData.NAME]: '',
        [PersonalData.SURNAME]: '',
        [PersonalData.PHONE]: '',
        [PersonalData.EMAIL]: '',
        [PersonalData.CITY]: '',
    },
    DELIVERY: '',
    PAYMENT: '',
    COMMENT: '',
};

const orderReducer = (state = initialState, action: OrderAction): OrderState => {
    switch (action.type) {
        case ActionType.SetPersonalData: {
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    [action.payload.name]: action.payload.value
                }
            };
        }
        case ActionType.SetDelivery: {
            return {
                ...state,
                DELIVERY: action.payload
            };
        }
        case ActionType.SetPayment: {
            return {
                ...state,
                PAYMENT: action.payload
            };
        }
        default:
            return state;
    }
}

export default orderReducer;