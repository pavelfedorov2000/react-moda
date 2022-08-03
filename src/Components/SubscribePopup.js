import React from 'react';
import SubscribePopupItem from './SubscribePopupItem';


function SubscribePopup({ onCloseSubscribePopup, subscribes, currentSubscribe, onChangeSubscribe, title }) {

    const saleItems = ['e-mail', 'sms'];

    const onClickChangeSubscribe = (obj) => {
        onChangeSubscribe(obj);
    }

    return (
        <div className="popup sale-popup">
            <button onClick={() => onCloseSubscribePopup()} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" fill="#F4F4F6" />
                </svg>
            </button>
            <div className="sale-popup__title">{title}</div>
            <form action="#" className="sale-popup__form">
                <div className="sale-popup__form-items">
                    {saleItems.map(item => (
                        <SubscribePopupItem key={item} onClickChangeSubscribe={onClickChangeSubscribe} subscribes={subscribes} item={item} currentSubscribe={currentSubscribe} />
                    ))}
                </div>
                <button className="btn sale-popup__form-btn" type="submit">Подписаться</button>
            </form>
        </div>
    );
}

export default SubscribePopup;