// setPizzas должна взять массив пицц pizzas и создать объект
import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload
});

// асинхронный action (redux thunk): получение (axios), потом сохранение (dispatch)
export const fetchProducts = (sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles) => (dispatch) => {
  dispatch(setLoaded(false));
  let sortColorsStr;
  //console.log(sortBrands);
  const sortFilters = [...sortColors, ...sortSizes, ...sortBrands, ...sortStyles];
  //console.log(sortFilters);
  if (sortColors.length > 0) {
    sortColorsStr = sortColors.map(color => `color=${color}`).join('&');
    //sortColorsStr = `q=${sortColors.join('')}`;
  }
  //console.log(sortColorsStr);
  axios.get(`/products?${sortColorsStr}&price_gte=${sortPrices[0]}&price_lte=${sortPrices[1]}&_sort=${sortBy.type}&_order=${sortBy.order}}`).then(({ data }) => {
    dispatch(setProducts(data));
  });
  //${sortBy.order != undefined ? `&_order=${sortBy.order}` : ''}
};

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products
});