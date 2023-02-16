import { NavLink } from 'react-router-dom';
import DateTime from './DateTime';

const OrderTableItem = ({ totalPrice, index, date, delivery, items }) => {
    return (
        <div className="order-item order-table__item">
            <header className="order-item__header">
                <div className="order-item__header-wrap">
                    <div className="order-item__title">Заказ от <DateTime date={date} />, №RU{date.split('.').join('')}-{index + 1}</div>
                    <div className="order-item__price">{`${totalPrice} ₽`}</div>
                </div>
                <div className="order-item__header-buttons">
                    <span className="button order-item__status-label">Передан в доставку</span>
                    <button className="order-item__follow-link">
                        <span>Отследить посылку</span>
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 10.295L6.79 6.5L7.20508 6L6.79008 5.5L3 1.705L3.705 1L8.705 6L3.705 11L3 10.295Z"
                                fill="#101112" />
                        </svg>
                    </button>
                </div>
            </header>
            <div className="order-item__body">
                <div className="order-item__content">
                    <div className="order-item__delivery-date">
                        Дата доставки: <DateTime date={date} />
                    </div>
                    <div className="order-item__delivery-place">
                        Доставка: <span>{delivery.split('').map((letter, i) => i === 0 ? letter.toLowerCase() : letter).join('')}</span>
                    </div>
                    <NavLink to={`orders/${index}`} className="order-item__order-details">Подробнее о заказе</NavLink>
                </div>
                <div className="order-item__images">
                    {Object.keys(items).map(item => (
                        <div key={items[item].items[0].id} className="order-item__img">
                            <img src={items[item].items[0].imageUrl} alt="фото" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrderTableItem;