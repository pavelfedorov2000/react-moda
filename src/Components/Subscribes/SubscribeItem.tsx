import { useCallback } from "react";
import { SubscribeOptions } from "../../constants/subscribe-options";
import { useActions } from "../../hooks/useActions";
import { Subscribe } from "../../interfaces/Subscribe";
import Button from "../../ui/Button";
import { ButtonType } from "../../enums/ButtonType";
import { Title } from "../../ui";
import { TitleLevel } from "../../enums/TitleLevel";

const mainClass = 'subscribe-item';

const SubscribeItem = ({ id, title, items }: Subscribe) => {
    const { cancelSubscribe, openSubscribe } = useActions();

    const handleOpen = useCallback(() => {
        openSubscribe(id);
    }, []);

    const handleCancel = useCallback(() => {
        cancelSubscribe(id);
    }, []);

    return (
        <article className={mainClass}>
            <Title tag={TitleLevel.H4} className={`${mainClass}__title`}>{title}</Title>
            <div className={`${mainClass}__content`}>
                <div className={`${mainClass}__wrap`}>
                    <ul className={`${mainClass}__list`}>
                        {items
                            ?.filter((item) => item.active)
                            .map((item) => (
                                <li key={item.name.toString()}>{
                                    `— ${SubscribeOptions.find((option) => option.name === item.name)?.text}`}
                                </li>
                            ))}
                    </ul>

                    <button onClick={handleOpen} className={`${mainClass}__change-btn`} type="button">Изменить</button>
                </div>

                <div className={`${mainClass}__text`}>Описание подписки на распродажу и акции для женщин и мужчин</div>

                <div className={`${mainClass}__bottom`}>
                    <Button onClick={handleCancel} className="subscribe-item__cancel-btn" text="Отменить подписку" type={ButtonType.Button} isDisabled />
                </div>
            </div>
        </article>
    );
}

export default SubscribeItem;