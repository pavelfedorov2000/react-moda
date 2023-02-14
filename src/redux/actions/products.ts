import axios from 'axios';
import { Dispatch } from 'redux';
import { Product } from '../../interfaces/CatalogItem';
import { Sort } from '../../interfaces/Sort';
import { ActionType } from '../actionsList';
import { ProductsAction } from '../types/products';

export const setLoaded = (payload: boolean) => ({
    type: ActionType.SetLoaded,
    payload
});

export const fetchProducts = (sortBy?: Sort, sortPrices?: any[], sortColors?: any[], sortSizes?: any[], sortBrands?: any[], sortStyles?: any[]) => {
    return async(dispatch: Dispatch<ProductsAction>) => {
        dispatch({
            type: ActionType.SetLoaded,
            payload: false
        });

        let sortFilters: any[] = [];
        if (sortColors && sortColors.length > 0) {
            let sortColorsStr = sortColors.map((color: string) => `color=${color}`).join('&');
            sortFilters = [...sortFilters];
            sortFilters.push(sortColorsStr);
        }
        if (sortBrands && sortBrands.length > 0) {
            let sortBrandsStr = sortBrands.map((brand: string) => `brand=${brand}`).join('&');
            sortFilters = [...sortFilters];
            sortFilters.push(sortBrandsStr);
        }
        if (sortStyles && sortStyles.length > 0) {
            let sortStylesStr = sortStyles.map((style: string) => `style=${style}`).join('&');
            sortFilters = [...sortFilters];
            sortFilters.push(sortStylesStr);
        }
        if (sortSizes && sortSizes.length > 0) {
            let sortSizesStr = sortSizes.map((size: string) => `q=${size}`).join('&');
            sortFilters = [...sortFilters];
            sortFilters.push(sortSizesStr);
        }

        function sortByGenerate() {
            if (sortBy && sortBy.type === 'newProduct') {
                return '&newProduct=true';
            } else if (sortBy && sortBy.type === 'discount') {
                return `&_sort=${sortBy.type}&${sortBy.type}_ne=0`;
            } else {
                return `&_sort=${sortBy && sortBy.type}`;
            }
        }
            
        //const response = await axios.get(`/products?${sortFilters.join('&')}&price_gte=${sortPrices && sortPrices[0]}&price_lte=${sortPrices && sortPrices[1]}${sortByGenerate()}&_order=${sortBy && sortBy.order}`);
        const response  = await axios.get(`/products`);
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