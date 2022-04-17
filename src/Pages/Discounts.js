import React from 'react';

function Discounts() {
    const discounts = [0, 3, 5, 7, 10, 13, 15, 17, 20];
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
                    {discounts.map(discount => (
                        <li className="discounts-progress__item discounts-progress__item--completed">0%</li>
                    ))}
                </ol>
            </div>
            <div className="personal-discout">
                <div className="personal-discout__title">Ваша персональная скидка - 5%</div>
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