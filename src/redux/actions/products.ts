import axios from 'axios';
import { Dispatch } from 'redux';
import { SortFilterType } from '../../enums/SortFilter';
import { Product } from '../../interfaces/CatalogItem';
import { Sort } from '../../interfaces/Sort';
import { ActionType } from '../actionsList';
import { ProductsAction } from '../types/products';

export const setLoaded = (payload: boolean) => ({
    type: ActionType.SetLoaded,
    payload
});

export const fetchProducts = (sortBy: Sort, sortPrices: number[] | string[], sortColors: string[], sortSizes: number[], sortBrands: string[], sortStyles: string[]) => {
    return async(dispatch: Dispatch<ProductsAction>) => {
        dispatch({
            type: ActionType.SetLoaded,
            payload: false
        });

        function sortByGenerate() {
            if (sortBy.type === SortFilterType.NewProduct) {
                return `&${SortFilterType.NewProduct}=true`;
            } else if (sortBy.type === SortFilterType.Discount) {
                return `&_sort=${sortBy.type}&${sortBy.type}_ne=0`;
            } else {
                return `&_sort=${sortBy.type}`;
            }
        }

        const responseUrl = `/products?${sortColors.map((color: string) => `color=${color}`).join('&')}${sortSizes.map((size: number) => `q=${size}`).join('&')}${sortBrands.map((brand: string) => `brand=${brand}`).join('&')}${sortStyles.map((style: string) => `style=${style}`).join('&')}&price_gte=${sortPrices[0]}&price_lte=${sortPrices[1]}${sortByGenerate()}&_order=${sortBy.order}`;

        console.log(responseUrl);
            
        const response = await axios.get(responseUrl);
        dispatch({
            type: ActionType.SetProducts,
            payload: response.data
        });
    }
};

export const setProducts = (products: Product[]) => ({
    type: ActionType.SetProducts,
    payload: products
});