import { ProductDetails } from "./ProductDetails";

export interface CatalogItem {
    id: number;
    imageUrl: string;
    name: string;
    brand: string;
    sizes: number[];
    price: number;
    discount?: number;
    style: string;
    color: string;
    //rating?: number;
    isFavorite?: boolean;
    newProduct?: boolean;
}

export interface Product extends CatalogItem {
    logo: string;
    articul: string;
    details: ProductDetails[];
}