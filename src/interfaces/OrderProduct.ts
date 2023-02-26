import { ProductBase } from "./CatalogItem";

export interface OrderProduct extends ProductBase {
    sizes: number[];
    totalCount: number;
}