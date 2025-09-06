import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AsidePopupClose, BasketProduct } from '.';
import { DropBasketText } from '../enums/DropBasketText';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ClassName } from '../enums/ClassName';
import { PopupId } from '../enums/PopupId';

const mainClass = PopupId.DropBasket;
const popupClass = `${ClassName.AsidePopup} ${mainClass} ${ClassName.AsidePopup}--${mainClass.split('-')[1]}`;

const DropBasket = () => {
    const { totalPrice, totalCount, items } = useTypedSelector((state) => state.cartReducer);
    const { isAsideBasketVisible } = useTypedSelector((state) => state.asidePopupReducer);
    const { closeAsideBasket } = useActions();

    const basketProducts = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        closeAsideBasket();
    }

    return (
        <div id={PopupId.DropBasket} className={classNames(popupClass, {
            [ClassName.Active]: isAsideBasketVisible
        })}>
            <AsidePopupClose onClick={closeAsideBasket} ariaLabel="Закрыть корзину быстрого просмотра" />

            <div className={`${mainClass}__body`}>
                <div className={`${mainClass}__inner`}>
                    <div className={`${ClassName.AsidePopup}__title`}>{Pages.Cart.title}</div>

                    {totalCount == 0 ?
                        <div className={`${mainClass}__empty`}>
                            {DropBasketText.Empty}
                        </div>
                        :
                        <>
                            <ul className={`${mainClass}__products`}>
                                {basketProducts.map((product) => (
                                    <li key={product.id}>
                                        <BasketProduct {...product} className={`${PopupId}__product`} totalPrice={items[product.id].totalPrice} totalCount={items[product.id].items.length} />
                                    </li>
                                ))}
                            </ul>

                            <div className={`${mainClass}__total`}>
                                <div className={`${mainClass}__total-title`}>
                                    {DropBasketText.TotalSum}
                                </div>
                                <div className={`${mainClass}__total-sum`}>{totalPrice} ₽</div>
                            </div>
                        </>
                    }
                </div>

                <Link onClick={handleClose} className={`${ClassName.Button} ${mainClass}__btn`} to={totalCount == 0 ? Pages.Catalog.path : Pages.Cart.path}>
                    {totalCount == 0 ? DropBasketText.ContinueBuy : DropBasketText.Checkout}
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd"
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default DropBasket;
