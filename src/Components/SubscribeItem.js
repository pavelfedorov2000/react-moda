import React from 'react';

function SubscribeItem({ title, items }) {
  return (
    <div className="profile-subscribes__item subscribe-item">
      <h4 className="subscribe-item__title">{title}</h4>
      <div className="subscribe-item__content">
        <div className="subscribe-item__wrap">
          <ul className="subscribe-item__list">
            {items.map((item, i) => (
              <li key={`item-${i + 1}`}>{`— ${item}`}</li>
            ))}
          </ul>
          <a className="subscribe-item__change-btn" href="#sale-popup" data-fancybox>Изменить</a>
        </div>
        <div className="subscribe-item__text">Описание подписки на распродажу и акции для женщин и мужчин</div>
        <div className="subscribe-item__bottom">
          <button className="btn subscribe-item__cancel-btn btn--disabled" type="button">
            Отменить подписку
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeItem;