export enum SortFilterType {
    Price = 'price',
    //Popular = 'popular',
    NewProduct = 'newProduct',
    Discount = 'discount',
}

export enum Order {
    ASC = 'asc',
    DESC = 'desc',
}

export const SortFilters = [{
    name: 'По возрастанию цены',
    type: SortFilterType.Price,
    order: Order.ASC
}, {
    name: 'По убыванию цены',
    type: SortFilterType.Price,
    order: Order.DESC
}, {
    name: 'По новинкам',
    type: SortFilterType.NewProduct,
    order: Order.DESC
}, {
    name: 'По скидкам',
    type: SortFilterType.Discount,
    order: Order.DESC
}];