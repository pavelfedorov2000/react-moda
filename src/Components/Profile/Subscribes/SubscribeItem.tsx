import { SubscribeOptions } from "../../../constants/SubscribeOptions";
import { useActions } from "../../../hooks/useActions";
import { Subscribe } from "../../../interfaces/Subscribe";

const SubscribeItem = ({ id, title, items }: Subscribe) => {
    const { cancelSubscribe, openSubscribe } = useActions();

    return (
        <article className="subscribe-item">
            <h4 className="subscribe-item__title">{title}</h4>
            <div className="subscribe-item__content">
                <div className="subscribe-item__wrap">
                    <ul className="subscribe-item__list">
                        {items
                            ?.filter((item) => item.active)
                            .map((item) => (
                                <li key={item.name.toString()}>{`— ${SubscribeOptions.find((option) => option.name === item.name)?.text}`}</li>
                            ))}
                    </ul>

                    <button onClick={() => openSubscribe(id)} className="subscribe-item__change-btn" type="button">Изменить</button>
                </div>

                <div className="subscribe-item__text">Описание подписки на распродажу и акции для женщин и мужчин</div>

                <div className="subscribe-item__bottom">
                    <button onClick={() => cancelSubscribe(id)} className="btn subscribe-item__cancel-btn btn--disabled" type="button">
                        Отменить подписку
                    </button>
                </div>
            </div>
        </article>
    );
}

export default SubscribeItem;