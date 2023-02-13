import { ProductDetailsListItem } from "./ProductDetailsListItem";

export interface ProductDetails {
    title: string;
    list: {
        items: ProductDetailsListItem[]
    }
}