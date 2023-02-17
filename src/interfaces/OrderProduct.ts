import { ProductBase } from "./CatalogItem";

export interface OrderProduct extends ProductBase {
    size: number;
    totalCount: number;
}