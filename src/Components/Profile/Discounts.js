import React, { useContext } from 'react';
import lock from '../../assets/images/icons/lock.svg';
import check from '../../assets/images/icons/discount-check.svg';
import classNames from 'classnames';
import { AppContext } from '../../context';

function Discounts() {
    const { discounts } = useContext(AppContext);

    const { list, personalDiscount, info, addPercent } = discounts;
    const personalDiscountIndex = list.indexOf(personalDiscount);

    return (
        <>
            <div className="discounts-progress">
                <ol className="discounts-progress__list">
                    {list.map((discount, i) => (
                        <li key={discount} style={{ backgroundImage: `url(${i < personalDiscountIndex + 1 ? check : lock})` }} className={classNames('discounts-progress__item', {
                            'completed': i <= personalDiscountIndex
                        })}>{`${discount}%`}</li>
                    ))}
                </ol>
            </div>

            <div className="personal-discout">
                <div className="personal-discout__title">{`Ваша персональная скидка - ${personalDiscount}%`}</div>
                <ul className="personal-discout__list">
                    {info.items.map((item, i) => (
                        <li key={`list-item_${i + 1}`}>{`- ${item}`}{i === info.items.length - 1 ? ';' : '.'}</li>
                    ))}
                </ul>
            </div>

            <div className="discount-add">
                <div className="discount-add__title">
                    Сегодня мы добавили к вашей скидке:
                </div>
                <div className="discount-add__value">
                    <span className="label discount-add__label label--discount">{addPercent}%</span>
                    <span>На новые коллекции</span>
                </div>
            </div>
        </>
    );
}

export default Discounts;