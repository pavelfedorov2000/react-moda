import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribesContext } from '../../../context';
import { fetchSubscribes, cancelSubscribe } from '../../../redux/actions/subscribes';
import Button from '../../Button';
import SubscribeItem from './SubscribeItem';
import SubscribePopup from './SubscribePopup';

const saleItems = ['e-mail', 'sms'];

function Subscribes() {
    useEffect(() => {
        dispatch(fetchSubscribes());
    }, []);

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

    const handleCancelSubscribe = useCallback((id) => {
        dispatch(cancelSubscribe(id));
    }, []);

    const handleChangeSubscribe = useCallback((obj) => {
        dispatch({
            type: 'CHANGE_SUBSCRIBE',
            payload: obj
        });
    }, []);

    const onSubscribePopupOpen = (i) => {
        setVisibleSubscribePopup(i);
    }

    const onCloseSubscribePopup = () => {
        setVisibleSubscribePopup(null);
    }

    console.log(subscribes);

    return (
        <>
            <div className="profile-subscribes">
                {subscribes.length !== 0 ?
                    <ul className="profile-subscribes__list">
                        {subscribes.map((subscribe, i) => (
                            <li key={subscribe.id}>
                                <SubscribeItem onClickUnsubscribe={handleCancelSubscribe} handlerSubscribePopup={onSubscribePopupOpen} index={i} {...subscribe} />
                            </li>
                        ))}
                    </ul>
                    :
                    <div>Нет активных подписок!</div>
                }

                <article className="profile-subscribes__aside subscribe-item">
                    <h4 className="subscribe-item__title">Модная рассылка раз в неделю</h4>
                    <div className="subscribe-item__content">
                        <div className="subscribe-item__email">На почту past@mail.ru</div>
                        <Button className="subscribe-item__btn" text="Подписаться" />
                    </div>
                </article>
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