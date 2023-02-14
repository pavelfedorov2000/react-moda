import { BasketProduct } from '.';

const basketTableHead = [{
    name: 'goods',
    title: 'Товары',
}, {
    name: 'quantity',
    title: 'Кол-во',
}, {
    name: 'price',
    title: 'Стоимость'
}];

function BasketTable({ items }) {
    const addedProducts = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    return (
        <div className="basket-table">
            <div className="basket-table__head">
                {basketTableHead.map(item => (
                    <div key={item.name} className="basket-table__title">{item.title}</div>
                ))}
            </div>

            <div className="basket-table__body">
                {addedProducts.map(product => (
                    <BasketProduct className="basket-table__item" key={product.id} {...product} totalPrice={items[product.id].totalPrice} totalDiscount={items[product.id].totalDiscount} totalCount={items[product.id].items.length} />
                ))}
            </div>
        </div>
    );
}

export default BasketTable;