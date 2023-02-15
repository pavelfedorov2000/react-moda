export enum ActionType {
    FetchBlog = 'FetchBlog',
    FetchBlogSuccess = 'FetchBlogSuccess',
    FetchBlogError = 'FetchBlogError',

    SetSubscribes = 'SetSubscribes',
    ChangeSubscribe = 'ChangeSubscribe',
    SubmitSubscribe = 'SubmitSubscribe',
    CancelSubscribe = 'CancelSubscribe',
    OpenSubscribe = 'OpenSubscribe',
    CloseSubscribe = 'CloseSubscribe',

    SetLoaded = 'SetLoaded',
    FetchProducts = 'FetchProducts',
    SetProducts = 'SetProducts',

    SetSortBy = 'SetSortBy',
    SetPriceFrom = 'SetPriceFrom',
    SetPriceTo = 'SetPriceTo',
    SetSortColors = 'SetSortColors',
    SetSortSizes = 'SetSortSizes',
    SetSortBrands = 'SetSortBrands',
    SetSortStyles = 'SetSortStyles',

    ResetSortPrices = 'ResetSortPrices',
    ResetSortColors = 'ResetSortColors',
    ResetSortSizes = 'ResetSortSizes',
    ResetSortBrands = 'ResetSortBrands',
    ResetSortStyles = 'ResetSortStyles',
    ResetFilters = 'ResetFilters',

    OpenFilters = 'OpenFilters',
    CloseFilters = 'CloseFilters',

    AddFavoriteProduct = 'AddFavoriteProduct',
    RemoveFavoriteProduct = 'RemoveFavoriteProduct',

    OpenProductPopup = 'OpenProductPopup',
    CloseProductPopup = 'CloseProductPopup',

    SetCategory = 'SetCategory',

    OpenBurgerMenu = 'OpenBurgerMenu',
    CloseBurgerMenu = 'CloseBurgerMenu',

    OpenAuth = 'OpenAuth',
    OpenAsideBasket = 'OpenAsideBasket',
    CloseAuth = 'CloseAuth',
    CloseAsideBasket = 'CloseAsideBasket',
}