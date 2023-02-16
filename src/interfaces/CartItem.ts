import { CatalogItem } from "./CatalogItem";

export interface CartItem extends CatalogItem  {
    articul: string;
    size: number;
    totalCount: number;
    totalPrice: number;
    totalDiscount?: number;
}