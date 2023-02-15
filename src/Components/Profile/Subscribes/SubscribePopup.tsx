import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import SubscribePopupItem from './SubscribePopupItem';

const SubscribePopup = () => {
    const { closeSubscribe, submitSubscribe } = useActions();
    const { currentSubscribe } = useTypedSelector((state) => state.subscribesReducer);

    return (
        <div className="popup sale-popup">
            <button onClick={() => closeSubscribe()} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" />
                </svg>
            </button>
            <div className="sale-popup__title">{currentSubscribe?.title}</div>
            <form action="#" className="sale-popup__form">
                <div className="sale-popup__form-items">
                    {currentSubscribe?.items?.map((item) => (
                        <SubscribePopupItem {...item} />
                    ))}
                </div>
                <button onClick={() => submitSubscribe()} className="btn sale-popup__form-btn">Подписаться</button>
            </form>
        </div>
    );
}

export default SubscribePopup;