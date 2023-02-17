import classNames from 'classnames';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Pages, SubPages } from '../enums/Page';
import { OrderData } from '../interfaces/OrderData';
import { formatDate } from '../utils/formatDate';
import { formatDateTime } from '../utils/formatDateTime';

enum OrderDetailsTableTitle {
    Order = 'Заказ',
    Receiver = 'Получатель',
    Delivery = 'Доставка',
    Payment = 'Оплата',
    Total = 'Итого',
}

interface Props extends OrderData {
    className?: string;
}

const OrderDetailsTable = ({ totalPrice, date, personalData, delivery, payment, className }: Props) => {
    const { NAME, SURNAME, PHONE, EMAIL, CITY } = personalData;

    const { url } = useRouteMatch();

    return (
        <div className={classNames('order-details-table', className)}>
            <div className="order-details-table__item">
                <div className="order-details-table__item-title">{OrderDetailsTableTitle.Order}:</div>
                <p>№RU{formatDate(date)}</p>
                <p>от <time dateTime={formatDateTime(date)}>{date}</time></p>
            </div>

            <div className="order-details-table__item">
                <div className="order-details-table__item-title">{OrderDetailsTableTitle.Receiver}:</div>
                <p>{NAME} {SURNAME}</p>
                <p>{PHONE}</p>
                <p>{EMAIL}</p>
                <p>г.{CITY}</p>
            </div>

            <div className="order-details-table__item">
                <div className="order-details-table__item-title">{OrderDetailsTableTitle.Delivery}:</div>
                <p>{delivery}</p>
            </div>

            <div className="order-details-table__item">
                <div className="order-details-table__item-title">{OrderDetailsTableTitle.Payment}:</div>
                <p>{payment}</p>
            </div>

            <div className="order-details-table__item">
                <div className="order-details-table__item-wrap">
                    <div className="order-details-table__item-title">
                        {OrderDetailsTableTitle.Total}:
                        <span>{totalPrice} ₽</span>
                    </div>
                    <span className="order-status">Не оплачен</span>
                </div>

                {`/${url.split('/')[1]}` === SubPages.Orders.path &&
                    <Link to="/pay" className="button order-details-table__btn">Оплатить</Link>
                }
            </div>

            {url === Pages.OrderSuccess.path &&
                <div className="order-details-table__item">
                    <Link to={SubPages.Orders.path} className="button order-details-table__btn">Оплатить</Link>
                </div>
            }
        </div>
    );
}

export default OrderDetailsTable;