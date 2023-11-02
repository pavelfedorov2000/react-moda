import { Pages } from "../enums/Page";
import { DropMenu } from "../interfaces/DropMenu";
import { MenuLink } from "../interfaces/MenuLink";

export const DROP_MENU_CATEGORIES: MenuLink[] = [{
    title: "Одежда",
    path: Pages.Catalog.path
}, {
    title: "Обувь",
    path: Pages.Catalog.path
}, {
    title: "Аксессуары",
    path: Pages.Catalog.path
}, {
    title: "Бренды",
    path: Pages.Brands.path
}, {
    title: "Новинки",
    path: Pages.Catalog.path
}];

export const LINKS: MenuLink[] = [{
    title: "Распродажа",
    path: Pages.Catalog.path
}, {
    title: "Блог",
    path: Pages.News.path
}, {
    title: "Новости",
    path: Pages.Blog.path
}];

export const DROP_MENU: DropMenu = {
    items: [{
        items: [
            "Блузки и рубашки",
            "Брюки",
            "Верхняя одежда",
            "Джемперы, свитеры",
            "Джинсы",
            "Домашняя одежда",
        ]
    }, {
        title: "Популярное",
        items: [
            "Водолазки",
            "Вечерние платья",
            "Джинсы",
            "Топы",
            "Юбки",
        ],
    }, {
        title: "Бренды",
        items: [
            "Allora",
            "AllSaints",
            "Allura",
            "Bibi",
            "B2B Black to Black",
            "BeMyMom",
            "Dirkje",
            "Djdutchjeans",
            "Dja Fashion",
            "Faba",
            "все бренды",
        ]
    }]
};

export const FOOTER_MENU = [{
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

export const FOOTER_LINKS: string[][] = [
    ['Женщинам', 'Мужчинам', 'Детям'],
    ['Распродажа', 'Новинки']
];