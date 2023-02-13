enum Page {
    CatalogHome = 'CatalogHome',
    Home = 'Home',
    Catalog = 'Catalog',
    Favorite = 'Favorite',
    ProductCard = 'ProductCard',
    Cart = 'Cart',
    OrderSuccess = 'OrderSuccess',
    Brands = 'Brands',
    Blog = 'Blog',
    BlogDetail = 'BlogDetail',
    News = 'News',
    DetailNews = 'DetailNews',
    Profile = 'Profile',
    NotFound = 'NotFound',
}

enum SubPage {
    Orders = 'Orders',
    OrderDetail = 'OrderDetail',
    Discounts = 'Discounts',
    Subscribes = 'Subscribes',
    Personal = 'Personal',
}

export const Pages = {
    [Page.CatalogHome]: {
        path: '/'
    },
    [Page.Home]: {
        path: '/home'
    },
    [Page.Catalog]: {
        title: 'Каталог',
        path: '/catalog',
        empty: 'Нет актуальных товаров'
    },
    [Page.Favorite]: {
        title: 'Избранные товары',
        path: '/favorite',
        empty: 'Нет актуальных товаров'
    },
    [Page.ProductCard]: {
        path: '/product-card/:id'
    },
    [Page.Cart]: {
        title: 'Ваша корзина',
        path: '/cart'
    },
    [Page.OrderSuccess]: {
        title: 'Спасибо за заказ!',
        path: '/order-success'
    },
    [Page.Brands]: {
        title: 'Бренды',
        path: '/brands'
    },
    [Page.Blog]: {
        title: 'Блог',
        path: '/blog',
        empty: 'Нет актуальных новостей и акций'
    },
    [Page.BlogDetail]: {
        path: '/blog/:id'
    },
    [Page.News]: {
        title: 'Новости и акции',
        path: '/news',
        empty: 'Нет актуальных новостей и акций'
    },
    [Page.DetailNews]: {
        path: '/news/:id'
    },
    [Page.Profile]: {
        title: 'Профиль',
        path: '/profile'
    },
    [Page.NotFound]: {
        title: 'Похоже, мы не можем найти нужную вам страницу',
        path: '/not-found'
    }
}

export const SubPages = {
    [SubPage.Orders]: {
        title: 'Мои заказы',
        path: '/orders',
        empty: 'Нет актуальных товаров'
    },
    [SubPage.OrderDetail]: {
        title: 'Заказ №',
        path: '/orders/:index'
    },
    [SubPage.Discounts]: {
        title: 'Скидки',
        path: '/discounts'
    },
    [SubPage.Subscribes]: {
        title: 'Управление подписками',
        path: '/subscribes'
    },
    [SubPage.Personal]: {
        title: 'Персональные данные',
        path: '/personal'
    }
}