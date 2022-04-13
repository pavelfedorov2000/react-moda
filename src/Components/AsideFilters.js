import React from 'react';

function AsideFilters(props) {
    return (
        <div className="aside-filters">
            <ul className="aside-filters__list">
                <li className="aside-filters__item">
                    <div className="aside-filters__item-title">
                        <a className="aside-filters__link" href="#">Одежда</a>
                        <button className="aside-filters__item-drop" aria-label="Развернуть">
                            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                            </svg>
                        </button>
                    </div>
                    <ul className="aside-filters__sublist">
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Блузки и рубашки</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Брюки</a>
                        </li>
                        <li className="aside-filters__sublist-title">
                            <a className="aside-filters__link" href="#">Верхняя одежда</a>
                            <button className="aside-filters__item-drop" aria-label="Развернуть">
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                                </svg>
                            </button>
                        </li>
                        <ul className="aside-filters__sublist">
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">Демисезонные куртки</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">Жилеты</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">Легкие куртки и ветровки</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link active" href="#">Пальто</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">Плащи и тренчи</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">Шубы и дубленки</a>
                            </li>
                        </ul>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Джемперы, свитеры</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Джинсы</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Домашняя одежда</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Комбинезоны</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Одежда для беременных</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Пиджаки и костюмы</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Платья и сарафаны</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Спортивные костюмы</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Шорты</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Юбки</a>
                        </li>
                    </ul>
                </li>
                <li className="aside-filters__item">
                    <div className="aside-filters__item-title">
                        <a className="aside-filters__link" href="#">Аксессуары</a>
                        <button className="aside-filters__item-drop" aria-label="Развернуть">
                            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                            </svg>
                        </button>
                    </div>
                    <ul className="aside-filters__sublist">
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Lorem</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Lorem</a>
                        </li>
                        <li className="aside-filters__sublist-title">
                            <a className="aside-filters__link" href="#">Lorem</a>
                            <button className="aside-filters__item-drop" aria-label="Развернуть">
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                                </svg>
                            </button>
                        </li>
                        <ul className="aside-filters__sublist">
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">lorem</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">lorem</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">lorem</a>
                            </li>
                        </ul>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">lorem</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">lorem</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">lorem</a>
                        </li>
                    </ul>
                </li>
                <li className="aside-filters__item">
                    <div className="aside-filters__item-title">
                        <a className="aside-filters__link" href="#">Обувь</a>
                        <button className="aside-filters__item-drop" aria-label="Развернуть">
                            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                            </svg>
                        </button>
                    </div>
                    <ul className="aside-filters__sublist">
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Lorem</a>
                        </li>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">Lorem</a>
                        </li>
                        <li className="aside-filters__sublist-title">
                            <a className="aside-filters__link" href="#">Lorem</a>
                            <button className="aside-filters__item-drop" aria-label="Развернуть">
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                                </svg>
                            </button>
                        </li>
                        <ul className="aside-filters__sublist">
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">lorem</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">lorem</a>
                            </li>
                            <li className="aside-filters__sublist-item">
                                <a className="aside-filters__link" href="#">lorem</a>
                            </li>
                        </ul>
                        <li className="aside-filters__sublist-item">
                            <a className="aside-filters__link" href="#">lorem</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="banner aside-filters__banner">
                Рекламный баннер
            </div>
        </div>

    );
}

export default AsideFilters;