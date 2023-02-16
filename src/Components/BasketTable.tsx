import { BasketProduct } from '.';
import { BasketTableHead } from '../enums/BasketTableHead';
import { useTypedSelector } from '../hooks/useTypedSelector';

const BasketTable = () => {
    const { items } = useTypedSelector((state) => state.cartReducer);
    const basketProducts = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    return (
        <div className="basket-table">
            <div className="basket-table__head">
                <div className="basket-table__title">{BasketTableHead.Goods}</div>
                <div className="basket-table__title">{BasketTableHead.Quantity}</div>
                <div className="basket-table__title">{BasketTableHead.Price}</div>
            </div>

            <ul className="basket-table__body">
                {basketProducts.map((product) => (
                    <li key={product.id}>
                        <BasketProduct className="basket-table__item" {...product} totalPrice={items[product.id].totalPrice} totalDiscount={items[product.id].totalDiscount}totalCount={items[product.id].items.length} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BasketTable;