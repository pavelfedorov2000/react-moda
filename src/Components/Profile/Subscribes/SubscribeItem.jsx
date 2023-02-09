import React from 'react';

const subscribeOptions = {
    "e-mail": "ежедневно на почту past@mail.ru",
    "sms": "по SMS"
};

function SubscribeItem({ id, title, items, handlerSubscribePopup, index, onClickUnsubscribe }) {

    const onChangeSubscribeItem = (index) => {
        //event.preventDefault();
        handlerSubscribePopup(index);
    }

    return (
        <article className="subscribe-item">
            <h4 className="subscribe-item__title">{title}</h4>
            <div className="subscribe-item__content">
                <div className="subscribe-item__wrap">
                    <ul className="subscribe-item__list">
                        {Object.entries(items).map(item => (
                            item[1] === true && <li key={item.toString()}>{`— ${subscribeOptions[item[0]]}`}</li>
                        ))}
                    </ul>

                    <button onClick={onChangeSubscribeItem(index)} className="subscribe-item__change-btn" type="button">Изменить</button>
                </div>

                <div className="subscribe-item__text">Описание подписки на распродажу и акции для женщин и мужчин</div>

                <div className="subscribe-item__bottom">
                    <button onClick={onClickUnsubscribe(id)} className="btn subscribe-item__cancel-btn btn--disabled" type="button">
                        Отменить подписку
                    </button>
                </div>
            </div>
        </article>
    );
}

export default SubscribeItem;