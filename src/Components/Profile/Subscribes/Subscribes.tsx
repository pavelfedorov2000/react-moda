import { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Subscribe } from '../../../interfaces/Subscribe';
import Button from '../../Button';
import SubscribeItem from './SubscribeItem';
import SubscribePopup from './SubscribePopup';

const Subscribes = () => {
    const { fetchSubscribes } = useActions();
    const { subscribes, isPopupVisible } = useTypedSelector((state) => state.subscribesReducer);
    const filteredSubscribes = subscribes.filter((subscribe) => subscribe.items?.some(item => item.active));

    useEffect(() => {
        fetchSubscribes();
    }, []);

    return (
        <>
            <div className="profile-subscribes">
                {filteredSubscribes.length !== 0 ?
                    <ul className="profile-subscribes__list">
                        {subscribes
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