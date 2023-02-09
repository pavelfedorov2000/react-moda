import React, { useContext } from 'react';
import { SubscribeItemContext, SubscribesContext } from '../../../context';
import SubscribePopupItem from './SubscribePopupItem';

const saleItems = ['e-mail', 'sms'];

function SubscribePopup({ onCloseSubscribePopup }) {
    const { currentSubscribe } = useContext(SubscribesContext);

    return (
        <div className="popup sale-popup">
            <button onClick={() => onCloseSubscribePopup()} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" fill="#F4F4F6" />
                </svg>
            </button>
            <div className="sale-popup__title">{currentSubscribe.title}</div>
            <form action="#" className="sale-popup__form">
                <div className="sale-popup__form-items">
                    {saleItems.map(item => (
                        <SubscribeItemContext.Provider key={item} value={{ item }}>
                            <SubscribePopupItem />
                        </SubscribeItemContext.Provider>
                    ))}
                </div>
                <button className="btn sale-popup__form-btn" type="submit">Подписаться</button>
            </form>
        </div>
    );
}

export default SubscribePopup;