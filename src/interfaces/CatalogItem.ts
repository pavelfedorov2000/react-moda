export interface CatalogItem {
    id: number,
    imageUrl: string,
    name: string,
    brand: string,
    logo: string,
    sizes: number[],
    price: number,
    discount?: number,
    style: string,
    color: string,
    rating: number,
    newProduct?: boolean,
    articul: string,
    //details: any[]
}