import { NavLink } from 'react-router-dom';
import { SubPages } from '../enums/Page';
import { OrderData } from '../interfaces/OrderData';
import { formatDate } from '../utils/formatDate';
import DateTime from './DateTime';
import { generateIconClassName } from '../utils/generateIconClassName';
import { IconSize } from '../enums/IconSize';
import { Image } from '../ui';

enum OrderInfoText {
    DeliveryDate = 'Дата доставки',
    Delivery = 'Доставка',
}

const mainClass = 'order-item';

const OrderTableItem = ({ totalPrice, index, date, delivery, items }: OrderData & { index: number; }) => {
    return (
        <article className={`${mainClass} order-table__item`}>
            <header className={`${mainClass}__header`}>
                <div className={`${mainClass}__header-wrap`}>
                    <div className={`${mainClass}__title`}>Заказ от <DateTime date={date} />, №RU{formatDate(date)}-{index + 1}</div>
                    <div className={`${mainClass}__price`}>{totalPrice} ₽</div>
                </div>
                <div className={`${mainClass}__header-buttons`}>
                    <span className="button order-item__status-label">Передан в доставку</span>
                    <button className={`${mainClass}__follow-link`}>
                        <span>Отследить посылку</span>
                        <svg className={generateIconClassName(IconSize.S)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path fillRule='evenodd' clipRule='evenodd'
                                d="M3 10.295L6.79 6.5L7.20508 6L6.79008 5.5L3 1.705L3.705 1L8.705 6L3.705 11L3 10.295Z" />
                        </svg>
                    </button>
                </div>
            </header>
            <div className={`${mainClass}__body`}>
                <div className={`${mainClass}__content`}>
                    <div className={`${mainClass}__delivery-date`}>
                        {OrderInfoText.DeliveryDate}: <DateTime date={date} />
                    </div>
                    <div className={`${mainClass}__delivery-place`}>
                        {OrderInfoText.Delivery}: <span>{delivery.split('').map((letter, i) => i === 0 ? letter.toLowerCase() : letter).join('')}</span>
                    </div>
                    <NavLink to={`${SubPages.Orders.path}/${index}`} className={`${mainClass}__order-details`}>Подробнее о заказе</NavLink>
                </div>
                <div className={`${mainClass}__images`}>
                    {Object.keys(items).map((item) => (
                        <div key={items[item].items[0].id} className={`${mainClass}__img`}>
                            <Image src={items[item].items[0].imageUrl} width={75} height={94} />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default OrderTableItem;