import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BasketProduct } from '.';
import { DropBasketText } from '../enums/DropBasketText';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const DropBasket = () => {
    const { totalPrice, totalCount, items } = useTypedSelector((state) => state.cartReducer);
    const { isAsideBasketVisible } = useTypedSelector((state) => state.asidePopupReducer);
    const { closeAsideBasket } = useActions();

    const basketProducts = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    return (
        <div className={classNames('aside-popup drop-basket aside-popup--basket', {
            'active': isAsideBasketVisible
        })}>
            <button onClick={closeAsideBasket} className="aside-popup__close" type="button" aria-label="Закрыть корзину">
                <svg className="icon icon--size_xl" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" />
                </svg>
            </button>

            <div className="drop-basket__body">
                <div className="drop-basket__inner">
                    <div className="aside-popup__title">{Pages.Cart.title}</div>

                    {totalCount === 0 ?
                        <div className="drop-basket__empty">
                            {DropBasketText.Empty}
                        </div>
                        :
                        <>
                            <ul className="drop-basket__products">
                                {basketProducts.map((product) => (
                                    <li key={product.id}>
                                        <BasketProduct {...product} className="drop-basket__product" totalPrice={items[product.id].totalPrice} totalCount={items[product.id].items.length} />
                                    </li>
                                ))}
                            </ul>

                            <div className="drop-basket__total">
                                <div className="drop-basket__total-title">
                                    {DropBasketText.TotalSum}
                                </div>
                                <div className="drop-basket__total-sum">{totalPrice} ₽</div>
                            </div>
                        </>
                    }
                </div>

                <Link onClick={closeAsideBasket} className="drop-basket__btn button" to={`${totalCount === 0 ? '/' : Pages.Cart.path}`}>
                    {totalCount === 0 ? DropBasketText.ContinueBuy : DropBasketText.Checkout}
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default DropBasket;