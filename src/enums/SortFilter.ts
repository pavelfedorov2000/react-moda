enum SortFilterType {
    Price = 'price',
    //Popular = 'popular',
    NewProduct = 'newProduct',
    Discount = 'discount',
}

enum Order {
    ASC = 'asc',
    DESC = 'desc',
}

export const SortFilters = [{
    name: 'возрастанию цены',
    type: SortFilterType.Price,
    order: Order.ASC
}, {
    name: 'убыванию цены',
    type: SortFilterType.Price,
    order: Order.DESC
}, {
    name: 'новинкам',
    type: SortFilterType.NewProduct,
    order: Order.DESC
}, {
    name: 'скидкам',
    type: SortFilterType.Discount,
    order: Order.DESC
}];