import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribesContext } from '../../../context';
import { fetchSubscribes, cancelSubscribe } from '../../../redux/actions/subscribes';
import Button from '../../Button';
import SubscribeItem from './SubscribeItem';
import SubscribePopup from './SubscribePopup';

function Subscribes() {
    React.useEffect(() => {
        dispatch(fetchSubscribes()); // вернет функцию
    }, []); // [] = componentDidMout

    const dispatch = useDispatch();
    const subscribes = useSelector(({ subscribes }) => subscribes.subscribes); // вытаскиваем подписки из стора

    const [visibleSubscribePopup, setVisibleSubscribePopup] = useState(null);

    const currentSubscribe = subscribes && subscribes[visibleSubscribePopup];

    let obj;
    if (currentSubscribe) {
        const { id, title, items } = currentSubscribe;

        obj = {
            id,
            title,
            items
        };
    }

    const saleItems = ['e-mail', 'sms'];

    // Экшн на отмену подписки
    const handleCancelSubscribe = (id) => {
        dispatch(cancelSubscribe(id));
    }

    // Экшн на изменение подписок
    const handleChangeSubscribe = (obj) => {
        dispatch({
            type: 'CHANGE_SUBSCRIBE',
            payload: obj
        });
    }

    const onSubscribePopupOpen = (i) => {
        setVisibleSubscribePopup(i);
    }

    const onCloseSubscribePopup = () => {
        setVisibleSubscribePopup(null);
    }

    return (
        <>
            <div className="profile-subscribes">
                {subscribes.length !== 0 ?
                    subscribes.map((subscribe, i) => (
                        <SubscribeItem onClickUnsubscribe={handleCancelSubscribe} handlerSubscribePopup={onSubscribePopupOpen} index={i} key={subscribe.id} {...subscribe} />
                    ))
                    :
                    <div>Нет активных подписок!</div>
                }

                <div className="profile-subscribes__item subscribe-item profile-subscribes__item--aside">
                    <h4 className="subscribe-item__title">Модная рассылка раз в неделю</h4>
                    <div className="subscribe-item__content">
                        <div className="subscribe-item__email">На почту past@mail.ru</div>
                        <Button className="subscribe-item__btn" text="Подписаться" />
                    </div>
                </div>
            </div>

            {visibleSubscribePopup !== null &&
                <SubscribesContext.Provider value={{
                    subscribes,
                    currentSubscribe,
                    handleChangeSubscribe,
                    obj,
                    saleItems
                }}>
                    <div className="overlay active">
                        <SubscribePopup onCloseSubscribePopup={onCloseSubscribePopup} />
                    </div>
                </SubscribesContext.Provider>
            }
        </>
    );
}


export default Subscribes;