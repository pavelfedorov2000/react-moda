import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Button from '../ui/Button';
import SubscribeItem from '../components/Subscribes/SubscribeItem';
import SubscribePopup from '../components/Subscribes/SubscribePopup';
import { ClassName } from '../enums/ClassName';
import { Title } from '../ui';
import { TitleLevel } from '../enums/TitleLevel';

const mainClass = 'profile-subscribes';

const Subscribes = () => {
    const { fetchSubscribes } = useActions();
    const { subscribes, isPopupVisible } = useTypedSelector((state) => state.subscribesReducer);

    useEffect(() => {
        fetchSubscribes();
    }, []);

    return (
        <>
            <div className={mainClass}>
                {subscribes.length !== 0 ?
                    <ul className={`${mainClass}__list`}>
                        {subscribes
                            .filter((subscribe) => subscribe.items?.some((item) => item.active))
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
                    <Title tag={TitleLevel.H4} className="subscribe-item__title">Модная рассылка раз в неделю</Title>
                    <div className="subscribe-item__content">
                        <div className="subscribe-item__email">На почту past@mail.ru</div>
                        <Button className="subscribe-item__btn" text="Подписаться" />
                    </div>
                </article>
            </div>

            {isPopupVisible &&
                <div className={`${ClassName.Overlay} ${ClassName.Active}`}>
                    <SubscribePopup />
                </div>
            }
        </>
    );
}


export default Subscribes;