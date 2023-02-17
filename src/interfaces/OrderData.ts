import { OrderProduct } from "./OrderProduct";
import { PersonalData } from "./PersonalData";

export interface OrderData {
    date: string;
    personalData: PersonalData;
    delivery: string;
    payment: string;
    items: OrderProduct[];
    totalPrice: number;
}