import classNames from 'classnames';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Pages, SubPages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { OrderData } from '../interfaces/OrderData';
import { formatDate } from '../utils/formatDate';
import { formatDateTime } from '../utils/formatDateTime';
import { WithClassName } from '../types/types';

enum OrderDetailsTableTitle {
    Order = 'Заказ',
    Receiver = 'Получатель',
    Delivery = 'Доставка',
    Payment = 'Оплата',
    Total = 'Итого',
}

const mainClass = 'order-details-table';

const OrderDetailsTable = ({ totalPrice, date, personalData, delivery, payment, className }: OrderData & WithClassName) => {
    const { NAME, SURNAME, PHONE, EMAIL, CITY } = personalData;

    const { url } = useRouteMatch();

    const { resetPersonalData } = useActions();

    return (
        <div className={classNames(mainClass, className)}>
            <div className={`${mainClass}__item`}>
                <div className={`${mainClass}__item-title`}>{OrderDetailsTableTitle.Order}:</div>
                <p>№RU{formatDate(date)}</p>
                <p>от <time dateTime={formatDateTime(date)}>{date}</time></p>
            </div>

            <div className={`${mainClass}__item`}>
                <div className={`${mainClass}__item-title`}>{OrderDetailsTableTitle.Receiver}:</div>
                <p>{NAME} {SURNAME}</p>
                <p>{PHONE}</p>
                <p>{EMAIL}</p>
                <p>г.{CITY}</p>
            </div>

            <div className={`${mainClass}__item`}>
                <div className={`${mainClass}__item-title`}>{OrderDetailsTableTitle.Delivery}:</div>
                <p>{delivery}</p>
            </div>

            <div className={`${mainClass}__item`}>
                <div className={`${mainClass}__item-title`}>{OrderDetailsTableTitle.Payment}:</div>
                <p>{payment}</p>
            </div>

            <div className={`${mainClass}__item`}>
                <div className={`${mainClass}__item-wrap`}>
                    <div className={`${mainClass}__item-title`}>
                        {OrderDetailsTableTitle.Total}:
                        <span>{totalPrice} ₽</span>
                    </div>
                    <span className="order-status">Не оплачен</span>
                </div>

                {`/${url.split('/')[1]}` === SubPages.Orders.path &&
                    <Link to="/pay" className={`button ${mainClass}__btn`}>Оплатить</Link>
                }
            </div>

            {url === Pages.OrderSuccess.path &&
                <div className={`${mainClass}__item`}>
                    <Link onClick={() => resetPersonalData()} to={SubPages.Orders.path} className={`button ${mainClass}__btn`}>Оплатить</Link>
                </div>
            }
        </div>
    );
}

export default OrderDetailsTable;