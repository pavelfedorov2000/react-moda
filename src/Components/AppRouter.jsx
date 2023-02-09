import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Home, CatalogHome, Catalog, Cart, ProductCard, Favorite, Brands, NotFound, OrderSuccess, Blog, BlogDetail, News, NewsDetail, Profile } from '../Pages';
import { Discounts, MyOrders, OrderDetail, Personal } from './Profile';
import emptyProducts from '../assets/images/icons/empty-catalog.svg';
import emptyBlog from '../assets/images/icons/empty-blog.svg';
import { RouterContext } from '../context';
import { Subscribes } from './Profile/Subscribes';

const routes = [{
    id: 0,
    path: "/",
    component: CatalogHome,
    exact: true
}, {
    id: 1,
    path: "/home",
    component: Home
}, {
    id: 2,
    title: "Каталог",
    path: "/catalog",
    component: Catalog,
    empty: {
        icon: {
            src: emptyProducts
        },
        title: {
            text: "Нет актуальных товаров"
        }
    }
}, {
    id: 3,
    title: "Избранные товары",
    path: "/favorite",
    component: Favorite,
    empty: {
        icon: {
            src: emptyProducts
        },
        title: {
            text: "Нет актуальных товаров"
        }
    }
}, {
    id: 4,
    path: "/product-card/:id",
    component: ProductCard
}, {
    id: 5,
    title: "Ваша корзина",
    path: "/cart",
    component: Cart
}, {
    id: 6,
    title: "Спасибо за заказ!",
    before: "/cart",
    path: "/order-success",
    component: OrderSuccess
}, {
    id: 7,
    title: "Бренды",
    path: "/brands",
    component: Brands
}, {
    id: 8,
    title: "Блог",
    path: "/blog",
    component: Blog,
    exact: true,
    empty: {
        icon: {
            src: emptyBlog
        },
        title: {
            text: "Нет актуальных товаров"
        }
    }
}, {
    id: 9,
    path: "/blog/:id",
    component: BlogDetail,
    exact: true
}, {
    id: 10,
    title: "Новости и акции",
    path: "/news",
    component: News,
    exact: true,
    empty: {
        icon: {
            src: emptyBlog
        },
        title: {
            text: "Нет актуальных новостей и акций"
        }
    }
}, {
    id: 11,
    path: "/news/:id",
    component: NewsDetail,
    exact: true
}, {
    id: 12,
    profile: true,
    title: "Мои заказы",
    path: "/orders",
    component: Profile,
    SubPage: MyOrders,
    exact: true,
    empty: {
        icon: {
            src: emptyBlog
        },
        title: {
            text: "Нет актуальных товаров"
        }
    }
}, {
    id: 13,
    profile: true,
    title: "Подробнее о заказе",
    path: "/orders/:index",
    component: Profile,
    SubPage: OrderDetail,
    exact: true,
    notVisible: true
}, {
    id: 14,
    profile: true,
    title: "Скидки",
    path: "/discounts",
    component: Profile,
    SubPage: Discounts,
}, {
    id: 15,
    profile: true,
    title: "Управление подписками",
    path: "/subscribes",
    component: Profile,
    SubPage: Subscribes,
}, {
    id: 16,
    profile: true,
    title: "Персональные данные",
    path: "/personal",
    component: Profile,
    SubPage: Personal,
}, {
    id: 17,
    title: "Похоже, мы не можем найти нужную вам страницу",
    path: "/not-found",
    component: NotFound
}];

function AppRouter() {
    return (
        <RouterContext.Provider value={{
            routes,
        }}>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.id}
                        exact={route.exact === true ? true : false}
                        path={route.path}
                        render={() => <route.component {...route} />}
                    />
                ))}
                <Redirect to={routes[routes.length - 1].path} />
            </Switch>
        </RouterContext.Provider>
    );
}

export default AppRouter;