import { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Button from '../../Button';
import SubscribeItem from './SubscribeItem';
import SubscribePopup from './SubscribePopup';

const Subscribes = () => {
    const { fetchSubscribes } = useActions();
    const { subscribes, isPopupVisible } = useTypedSelector((state) => state.subscribesReducer);

    useEffect(() => {
        fetchSubscribes();
    }, []);

    return (
        <>
            <div className="profile-subscribes">
                {subscribes.length !== 0 ?
                    <ul className="profile-subscribes__list">
                        {subscribes
                            .filter((subscribe) => subscribe.items?.some(item => item.active))
                            .map((subscribe) => (
                                <li key={subscribe.id}>
                                    <SubscribeItem {...subscribe} />
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

            {isPopupVisible &&
                <div className="overlay active">
                    <SubscribePopup />
                </div>
            }
        </>
    );
}


export default Subscribes;