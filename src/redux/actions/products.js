// setPizzas должна взять массив пицц pizzas и создать объект
import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload
});

// асинхронный action (redux thunk): получение (axios), потом сохранение (dispatch)
export const fetchProducts = (sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles) => (dispatch) => {
  dispatch(setLoaded(false));

  let sortFilters = [];
  if (sortColors.length > 0) {
    let sortColorsStr = sortColors.map(color => `color=${color}`).join('&');
    sortFilters = [...sortFilters];
    sortFilters.push(sortColorsStr);
    console.log(sortFilters);
  }
  if (sortBrands.length > 0) {
    let sortBrandsStr = sortBrands.map(brand => `brand=${brand}`).join('&');
    sortFilters = [...sortFilters];
    sortFilters.push(sortBrandsStr);
    console.log(sortFilters);
  }
  if (sortStyles.length > 0) {
    let sortStylesStr = sortStyles.map(style => `style=${style}`).join('&');
    sortFilters = [...sortFilters];
    sortFilters.push(sortStylesStr);
    console.log(sortFilters);
  }
  if (sortSizes.length > 0) {
    let sortSizesStr = sortSizes.map(size => `q=${size}`).join('&');
    sortFilters = [...sortFilters];
    sortFilters.push(sortSizesStr);
    console.log(sortFilters);
  }
  //console.log(sortColorsStr);
  axios.get(`/products?${sortFilters.join('&')}&price_gte=${sortPrices[0]}&price_lte=${sortPrices[1]}&_sort=${sortBy.type}&_order=${sortBy.order}}`).then(({ data }) => {
    dispatch(setProducts(data));
  });
  //${sortBy.order != undefined ? `&_order=${sortBy.order}` : ''}
};

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products
});