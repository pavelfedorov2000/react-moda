// Action Creators
export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order }
});

export const setSortPrices = (from, to) => ({
  type: 'SET_SORT_PRICES',
  payload: [from, to]
});

export const setSortColors = (arr) => ({
  type: 'SET_SORT_COLORS',
  payload: arr
});

export const setSortSizes = (arr) => ({
  type: 'SET_SORT_SIZES',
  payload: arr
});

export const setSortBrands = (arr) => ({
  type: 'SET_SORT_BRANDS',
  payload: arr
});

export const setSortStyles = (arr) => ({
  type: 'SET_SORT_STYLES',
  payload: arr
});

export const resetSortPrices = () => ({
  type: 'RESET_SORT_PRICES',
});