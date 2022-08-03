import React, { useState } from 'react';
import lock from '../assets/images/icons/lock.svg';
import check from '../assets/images/icons/discount-check.svg';
import classNames from 'classnames';
import axios from 'axios';
import { PageNav } from '../Components';

function Discounts({ title }) {

    const [discounts, setDiscounts] = useState([]);
    React.useEffect(() => {
        axios.get('/discounts').then(({ data }) => {
            setDiscounts(data);
        });
    }, []); // [] = componentDidMout

    console.log(discounts);

    const { list, completed, info } = discounts;

    const completedIndex = list.indexOf(completed);

    console.log(list);

    return (
        <main className="page profile-page">
            <div className="container">

                <h1 className="title page__title">Профиль</h1>

                <div className="profile-page__inner">
                    <PageNav />
                    <div className="profile-page__body">
                        <h2 class="profile-page__title">{title}</h2>
                        {discounts &&
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
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Discounts;