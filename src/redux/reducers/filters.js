const initialState = {
  sortBy: {
    type: 'price',
    order: 'asc',
  },
  sortPrices: [1000, 100000],
  sortColors: [],
  sortSizes: [],
  sortBrands: [],
  sortStyles: [],
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY': {
      return {
        ...state,
        sortBy: action.payload,
      }
    }
    case 'SET_SORT_PRICES': {
      return {
        ...state,
        sortPrices: action.payload,
      }
    }
    case 'SET_SORT_COLORS': {

      return {
        ...state,
        sortColors: action.payload,
      }
    }
    case 'SET_SORT_SIZES': {
      return {
        ...state,
        sortSizes: action.payload.sort((a, b) => a - b),
      }
    }
    case 'SET_SORT_BRANDS': {
      return {
        ...state,
        sortBrands: action.payload,
      }
    }
    case 'SET_SORT_STYLES': {
      return {
        ...state,
        sortStyles: action.payload,
      }
    }
    case 'RESET_SORT_PRICES': {
      return {
        ...state,
        sortPrices: initialState.sortPrices,
      }
    }
    case 'RESET_SORT_COLORS': {
      return {
        ...state,
        sortColors: initialState.sortColors,
      }
    }
    case 'RESET_SORT_SIZES': {
      return {
        ...state,
        sortSizes: initialState.sortSizes,
      }
    }
    case 'RESET_SORT_BRANDS': {
      return {
        ...state,
        sortBrands: initialState.sortBrands,
      }
    }
    case 'RESET_SORT_STYLES': {
      return {
        ...state,
        sortStyles: initialState.sortStyles,
      }
    }
    case 'RESET_ALL_FILTERS': {
      return state;
    }
    default:
      return state;
  }
}

export default filters;