import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});

export const fetchProducts = (sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles) => (dispatch) => {
    dispatch(setLoaded(false));

    let sortFilters = [];
    if (sortColors.length > 0) {
        let sortColorsStr = sortColors.map(color => `color=${color}`).join('&');
        sortFilters = [...sortFilters];
        sortFilters.push(sortColorsStr);
    }
    if (sortBrands.length > 0) {
        let sortBrandsStr = sortBrands.map(brand => `brand=${brand}`).join('&');
        sortFilters = [...sortFilters];
        sortFilters.push(sortBrandsStr);
    }
    if (sortStyles.length > 0) {
        let sortStylesStr = sortStyles.map(style => `style=${style}`).join('&');
        sortFilters = [...sortFilters];
        sortFilters.push(sortStylesStr);
    }
    if (sortSizes.length > 0) {
        let sortSizesStr = sortSizes.map(size => `q=${size}`).join('&');
        sortFilters = [...sortFilters];
        sortFilters.push(sortSizesStr);
    }

    function sortByGenerate() {
        if (sortBy.type === 'newProduct') {
            return '&newProduct=true';
        } else if (sortBy.type === 'discount') {
            return `&_sort=${sortBy.type}&${sortBy.type}_ne=0`;
        } else {
            return `&_sort=${sortBy.type}`;
        }
    }

    axios.get(`/products?${sortFilters.join('&')}&price_gte=${sortPrices[0]}&price_lte=${sortPrices[1]}${sortByGenerate()}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setProducts(data));
    });
};

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products
});