import React from 'react';
import { Link } from 'react-router-dom';

const footerMenu = [{
    name: 'catalog',
    title: {
        text: "Каталог"
    },
    items: [{
        link: {
            text: 'Новинки'
        }
    }, {
        link: {
            text: 'Одежда'
        }
    }, {
        link: {
            text: 'Аксессуары'
        }
    }, {
        link: {
            text: 'Распродажа'
        }
    }]
}, {
    name: 'help',
    title: {
        text: "Помощь покупателю"
    },
    items: [{
        link: {
            text: 'Отследить заказ',
            href: '/follow'
        }
    }, {
        link: {
            text: 'Доставка и оплата',
            href: '/delivery'
        }
    }, {
        link: {
            text: 'Бесконтактная информация',
            href: '/info'
        }
    }, {
        link: {
            text: 'Обмен и возврат',
            href: '/exchange'
        }
    }, {
        link: {
            text: 'FAQ / Часто задаваемые вопросы',
            href: '/faq'
        }
    }, {
        link: {
            text: 'Программа лояльности',
            href: '/loyalty'
        }
    }, {
        link: {
            text: 'Подарочные сертификаты',
            href: '/certificates'
        }
    }, {
        link: {
            text: 'Правила работы сайта',
            href: '/site-rules'
        }
    }, {
        link: {
            text: 'Политика конфиденциальности',
            href: '/politics'
        }
    }, {
        link: {
            text: 'Карта сайта',
            href: '/site-map'
        }
    }]
}, {
    name: 'about',
    title: {
        text: "О компании"
    },
    items: [{
        link: {
            text: 'О компании'
        }
    }, {
        link: {
            text: 'Сотрудничество',
            href: '/cooperation'
        }
    }, {
        link: {
            text: 'Контакты',
            href: '/contacts'
        }
    }, {
        link: {
            text: 'Обратная связь',
            href: '/feedback'
        }
    }]
}];

function FooterMenu() {
    return (
        <div className="footer__cols">
            {footerMenu.map((col, i) => (
                <div key={col.name} className="footer__col">
                    <div className="footer__col-title">{col.title.text}</div>

                    <ul className="footer__list">
                        {col.items.map((item, j) => (
                            <li key={item.link.href ?? `/${col.name}_${j}`} className="footer__list-item">
                                <Link to={item.link.href ?? `/${col.name}`} className="footer__list-link">{item.link.text}</Link>
                            </li>
                        ))}
                    </ul>

                    {i === footerMenu.length - 1 ? <Link to="/news" className="footer__col-title">Новости и акции</Link> : null}
                </div>
            ))}
        </div>
    );
}

export default FooterMenu;