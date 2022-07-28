import React, { useState } from 'react';
import lock from '../assets/images/icons/lock.svg';
import check from '../assets/images/icons/discount-check.svg';
import classNames from 'classnames';
import axios from 'axios';

function Discounts() {

    const [discounts, setDiscounts] = useState([]);
    React.useEffect(() => {

        axios.get('/discounts').then(({ data }) => {
            setDiscounts(data);
        });
    }, []); // [] = componentDidMout

    const { list, completed, info } = discounts;

    const completedIndex = list.indexOf(completed);

    return (
        <>
            <div className="discounts-progress">
                <ol className="discounts-progress__list">
                    {list.map((discount, i) => (
                        <li key={discount} style={{ backgroundImage: `url(${i < completedIndex + 1 ? check : lock})` }} className={classNames('discounts-progress__item', {
                            'completed': i <= completedIndex
                        })}>{`${discount}%`}</li>
                    ))}
                </ol>
            </div>
            <div className="personal-discout">
                <div className="personal-discout__title">{`Ваша персональная скидка - ${completed}%`}</div>
                <ul className="personal-discout__list">
                    {info.map((item, i) => (
                        <li key={`list-item_${i + 1}`}>{`- ${item}`}{i === info.length - 1 ? ';' : '.'}</li>
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