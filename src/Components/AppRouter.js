import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Home, CatalogHome, Catalog, Cart, ProductCard, Favorite, Brands, NotFound, OrderSuccess, Blog, BlogDetail, News, NewsDetail, Profile } from '../Pages';
import { Discounts, MyOrders, OrderDetail, Personal, Subscribes } from './Profile';
import emptyProducts from '../assets/images/icons/empty-catalog.svg';
import emptyBlog from '../assets/images/icons/empty-blog.svg';
import { RouterContext } from '../context';

function AppRouter() {

    const routes = [{
        path: "/",
        component: CatalogHome,
        exact: true
    }, {
        path: "/home",
        component: Home
    }, {
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
        path: "/product-card/:id",
        component: ProductCard
    }, {
        title: "Ваша корзина",
        path: "/cart",
        component: Cart
    }, {
        title: "Спасибо за заказ!",
        before: "/cart",
        path: "/order-success",
        component: OrderSuccess
    }, {
        title: "Бренды",
        path: "/brands",
        component: Brands
    }, {
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
        path: "/blog/:id",
        component: BlogDetail,
        exact: true
    }, {
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
        path: "/news/:id",
        component: NewsDetail,
        exact: true
    }, {
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
        profile: true,
        path: "/orders/:index",
        component: Profile,
        SubPage: OrderDetail,
        exact: true
    }, {
        profile: true,
        title: "Скидки",
        path: "/discounts",
        component: Profile,
        SubPage: Discounts,
    }, {
        profile: true,
        title: "Управление подписками",
        path: "/subscribes",
        component: Profile,
        SubPage: Subscribes,
    }, {
        profile: true,
        title: "Персональные данные",
        path: "/personal",
        component: Profile,
        SubPage: Personal,
    }, {
        title: "Похоже, мы не можем найти нужную вам страницу",
        path: "/not-found",
        component: NotFound
    }];

    return (
        <RouterContext.Provider value={{
            routes,
        }}>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        exact={route.exact === true ? true : false}
                        path={route.path}
                        render={() => <route.component {...route} />}
                    />
                ))}
                <Redirect to="/not-found" />
            </Switch>
        </RouterContext.Provider>
    );
}

export default AppRouter;