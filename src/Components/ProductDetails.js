import React from 'react';

function ProductDetails(props) {
    return (
        <div id="details" className="tabs-content product-details tabs-content--active">
            <section className="product-details__section">
                <div className="product-details__section-top">
                    <h5 className="product-details__section-title">Общие характеристики</h5>
                    <button className="product-details__hide-btn product-details__hide-btn--active" type="button">
                        Скрыть
                    </button>
                </div>
                <dl className="product-details__list">
                    <div className="product-details__list-item">
                        <dt>Пол:</dt>
                        <dd>Женский</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Стиль:</dt>
                        <dd>Повседневный</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Сезон:</dt>
                        <dd>Зима</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Страна производитель:</dt>
                        <dd>Италия</dd>
                    </div>
                </dl>
            </section>
            <section className="product-details__section">
                <div className="product-details__section-top">
                    <h5 className="product-details__section-title">Размеры на модель</h5>
                    <button className="product-details__hide-btn product-details__hide-btn--active" type="button">
                        Скрыть
                    </button>
                </div>
                <dl className="product-details__list">
                    <div className="product-details__list-item">
                        <dt>
                            Размер товара на модели:
                            <div className="tooltip">
                                <button className="tooltip__btn" type="button" aria-label="Открыть подсказку">
                                    <svg viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.2273 10.7726C16.2273 15.0157 12.771 18.4614 8.5 18.4614C4.22904 18.4614 0.772727 15.0157 0.772727 10.7726C0.772727 6.52946 4.22904 3.08376 8.5 3.08376C12.771 3.08376 16.2273 6.52946 16.2273 10.7726Z"
                                            stroke="#C0C0C0" stroke-width="1.54545" />
                                        <path
                                            d="M7.75542 7.93005V6.18291H9.51569V7.93005H7.75542ZM7.75542 15.7725V8.88901H9.51569V15.7725H7.75542Z"
                                            fill="#C0C0C0" />
                                    </svg>
                                </button>
                                <div className="tooltip__content">
                                    Текст подсказки: универсальное полотно, обладающее высокой
                                    прочностью
                                </div>
                            </div>
                        </dt>
                        <dd>S</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Параметры модели:</dt>
                        <dd>80-60-86</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Рост модели на фото:</dt>
                        <dd>178</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Длина:</dt>
                        <dd>73 см</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Длина рукава:</dt>
                        <dd>57 см</dd>
                    </div>
                </dl>
            </section>
            <section className="product-details__section">
                <div className="product-details__section-top">
                    <h5 className="product-details__section-title">Состав</h5>
                    <button className="product-details__hide-btn product-details__hide-btn--active" type="button">
                        Скрыть
                    </button>
                </div>
                <dl className="product-details__list">
                    <div className="product-details__list-item">
                        <dt>
                            Материал верха:
                            <div className="tooltip">
                                <button className="tooltip__btn" type="button" aria-label="Открыть подсказку">
                                    <svg viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.2273 10.7726C16.2273 15.0157 12.771 18.4614 8.5 18.4614C4.22904 18.4614 0.772727 15.0157 0.772727 10.7726C0.772727 6.52946 4.22904 3.08376 8.5 3.08376C12.771 3.08376 16.2273 6.52946 16.2273 10.7726Z"
                                            stroke="#C0C0C0" stroke-width="1.54545" />
                                        <path
                                            d="M7.75542 7.93005V6.18291H9.51569V7.93005H7.75542ZM7.75542 15.7725V8.88901H9.51569V15.7725H7.75542Z"
                                            fill="#C0C0C0" />
                                    </svg>
                                </button>
                                <div className="tooltip__content">
                                    Текст подсказки: универсальное полотно, обладающее высокой
                                    прочностью
                                </div>
                            </div>
                        </dt>
                        <dd>100% Альпака</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>
                            Материал подкладки:
                            <div className="tooltip">
                                <button className="tooltip__btn" type="button" aria-label="Открыть подсказку">
                                    <svg viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.2273 10.7726C16.2273 15.0157 12.771 18.4614 8.5 18.4614C4.22904 18.4614 0.772727 15.0157 0.772727 10.7726C0.772727 6.52946 4.22904 3.08376 8.5 3.08376C12.771 3.08376 16.2273 6.52946 16.2273 10.7726Z"
                                            stroke="#C0C0C0" stroke-width="1.54545" />
                                        <path
                                            d="M7.75542 7.93005V6.18291H9.51569V7.93005H7.75542ZM7.75542 15.7725V8.88901H9.51569V15.7725H7.75542Z"
                                            fill="#C0C0C0" />
                                    </svg>
                                </button>
                                <div className="tooltip__content">
                                    Текст подсказки: универсальное полотно, обладающее высокой прочностью
                                </div>
                            </div>
                        </dt>
                        <dd>100% Полиэстер</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>
                            Материал утеплителя:
                        </dt>
                        <dd>100% Полиэстер</dd>
                    </div>
                </dl>
            </section>
            <section className="product-details__section">
                <div className="product-details__section-top">
                    <h5 className="product-details__section-title">Конструктивные особенности</h5>
                    <button className="product-details__hide-btn product-details__hide-btn--active" type="button">
                        Скрыть
                    </button>
                </div>
                <dl className="product-details__list">
                    <div className="product-details__list-item">
                        <dt>Покрой:</dt>
                        <dd>Прямой</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Капюшон:</dt>
                        <dd>Нет</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Количество карманов:</dt>
                        <dd>2</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Застежка:</dt>
                        <dd>Молния</dd>
                    </div>
                </dl>
            </section>
            <section className="product-details__section">
                <div className="product-details__section-top">
                    <h5 className="product-details__section-title">Дополнительные характеристики</h5>
                    <button className="product-details__hide-btn product-details__hide-btn--active" type="button">
                        Скрыть
                    </button>
                </div>
                <dl className="product-details__list">
                    <div className="product-details__list-item">
                        <dt>Узор:</dt>
                        <dd>Однотонный</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Цвет:</dt>
                        <dd>Бежевый</dd>
                    </div>
                    <div className="product-details__list-item">
                        <dt>Артикул:</dt>
                        <dd>MP002XW08J2L</dd>
                    </div>
                </dl>
            </section>
        </div>
    );
}

export default ProductDetails;