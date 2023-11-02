import { BasketProduct } from '.';
import { BasketTableHead } from '../enums/BasketTableHead';
import { useTypedSelector } from '../hooks/useTypedSelector';

const mainClass = 'basket-table';

const BasketTable = () => {
    const { items } = useTypedSelector((state) => state.cartReducer);
    const basketProducts = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__head`}>
                {Object.values(BasketTableHead).map((title, index) => (
                    <div key={index} className={`${mainClass}__title`}>{title}</div>
                ))}
            </div>

            <ul className={`${mainClass}__body`}>
                {basketProducts.map((product) => (
                    <li key={product.id}>
                        <BasketProduct className={`${mainClass}__item`} {...product} totalPrice={items[product.id].totalPrice} totalDiscount={items[product.id].totalDiscount}totalCount={items[product.id].items.length} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BasketTable;