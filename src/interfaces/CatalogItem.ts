import { ProductDetails } from "./ProductDetails";

export interface ProductBase {
    articul: string;
    imageUrl: string;
    name: string;
    brand: string;
    color: string;
}

export interface CatalogItem extends ProductBase {
    id: string;
    sizes: number[];
    price: number;
    discount?: number;
    style: string;
    //rating?: number;
    isFavorite?: boolean;
    newProduct?: boolean;
}

export interface Product extends CatalogItem {
    logo: string;
    details: ProductDetails[];
}