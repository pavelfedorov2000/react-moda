import axios from 'axios';
import { Dispatch } from 'redux';
import { SortFilterType } from '../../enums/SortFilter';
import { Product } from '../../interfaces/CatalogItem';
import { Sort } from '../../interfaces/Sort';
import { ActionType } from '../actionsList';
import { ProductsAction } from '../types/products';
import { FetchFilter } from '../../enums/FetchFilter';

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
                return `&${FetchFilter.Sort}=${sortBy.type}&${sortBy.type}_ne=0`;
            } else {
                return `&${FetchFilter.Sort}=${sortBy.type}`;
            }
        }

        const responseUrl = `/products?${sortColors.map((color: string) => `color=${color}`).join('&')}${sortSizes.map((size: number) => `q=${size}`).join('&')}${sortBrands.map((brand: string) => `brand=${brand}`).join('&')}${sortStyles.map((style: string) => `style=${style}`).join('&')}&price${FetchFilter.GreaterThen}=${sortPrices[0]}&price${FetchFilter.LessThen}=${sortPrices[1]}${sortByGenerate()}&${FetchFilter.Order}=${sortBy.order}`;
            
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