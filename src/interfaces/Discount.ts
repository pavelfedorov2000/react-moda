export interface Discount {
    list: number[];
    personalDiscount: number;
    info: {
        items: string[]
    }
    addPercent: number;
}