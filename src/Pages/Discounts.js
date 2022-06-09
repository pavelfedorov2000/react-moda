import React from 'react';
import lock from '../assets/images/icons/lock.svg';
import check from '../assets/images/icons/discount-check.svg';
import classNames from 'classnames';

function Discounts() {
  const discounts = [0, 3, 5, 7, 10, 13, 15, 17, 20];
  const completed = 5;
  const completedIndex = discounts.indexOf(completed);
  const list = [
    'скидка распространяется на все товары City Moda, кроме производителей с предельными скидками',
    'размер скидки зависит от количества доставленных Вам товаров за последние 12 месяцев от сегодняшнего числа',
    'скидка не сбрасывается в конце календарного года и не начинается заново в начале, она действует все время',
    'скидка автоматически пересчитывается после каждого доставленного Вам заказа',
  ];

  return (
    <>
      <div className="discounts-progress">
        <ol className="discounts-progress__list">
          {discounts.map((discount, i) => (
            <li key={discount} style={{ backgroundImage: `url(${i < completedIndex + 1 ? check : lock})` }} className={classNames('discounts-progress__item', {
              'completed': i <= completedIndex
            })}>{`${discount}%`}</li>
          ))}
        </ol>
      </div>
      <div className="personal-discout">
        <div className="personal-discout__title">{`Ваша персональная скидка - ${completed}%`}</div>
        <ul className="personal-discout__list">
          {list.map((item, i) => (
            <li key={`list-item_${i + 1}`}>{`- ${item}`}{i === list.length - 1 ? ';' : '.'}</li>
          ))}
        </ul>
      </div>
      <div className="discount-add">
        <div className="discount-add__title">
          Сегодня мы добавили к вашей скидке:
        </div>
        <div className="discount-add__value">
          <span className="label discount-add__label label--discount">25%</span>
          <span>На новые коллекции</span>
        </div>
      </div>
    </>
  );
}

export default Discounts;