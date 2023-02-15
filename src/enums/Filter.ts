import { BRANDS, COLORS, STYLES } from "../constants/filters";
import { SIZES } from "../constants/sizes";
import { SortFilters } from "./SortFilter";

export enum Filter {
    Sort = 'sort',
    Color = 'color',
    Size = 'size',
    Brand = 'brand',
    Style = 'style',
    Price = 'price',
}

export interface FilterType {
    toggleTitle: string;
    title?: string;
    items: string[] | number[];
}

export const FILTERS = {
    [Filter.Sort]: {
        toggleTitle: SortFilters[0].name,
        items: SortFilters
    },
    [Filter.Color]: {
        toggleTitle: 'Цвет',
        items: COLORS
    },
    [Filter.Size]: {
        toggleTitle: 'Размер',
        title: 'Ваш российский размер',
        items: SIZES
    },
    [Filter.Style]: {
        toggleTitle: 'Стиль',
        items: STYLES
    },
    [Filter.Brand]: {
        toggleTitle: 'Бренды',
        items: BRANDS
    },
    [Filter.Price]: {
        toggleTitle: 'Цена',
    }
};