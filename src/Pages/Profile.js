import classNames from 'classnames';
import React, { useState } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { MyOrders, Subscribes, Discounts, Personal } from './';

function Profile() {
    const crumbs = ['Главная', 'Мои заказы'];
    const profileLinks = [
        {
            name: 'Мои заказы',
            path: '/profile/orders',
            component: MyOrders,
        },
        {
            name: 'Скидки',
            path: '/profile/discounts',
            component: Discounts,
        },
        {
            name: 'Управление подписками',
            path: '/profile/subscribes',
            component: Subscribes,
        },
        {
            name: 'Персональные данные',
            path: '/profile/personal',
            component: Personal,
        },
    ];
    const [title, setTitle] = useState(profileLinks[0].name);
    const [breadcrumbs, setNewBreadcrumbs] = useState(crumbs);
    const onClickLink = (e) => {
        let newBreadcrumbs = breadcrumbs.splice(-1, 1, e.target.textContent);
        setNewBreadcrumbs(newBreadcrumbs);
        setTitle(e.target.textContent);
    }

    return (
        <main className="page profile-page">
            <div className="container">
                <nav className="breadcrumbs" aria-label="breadcrumbs">
                    <ol className="breadcrumbs__list">
                        {breadcrumbs.map((crumb, i) => (
                            i === breadcrumbs.length - 1 ? <li className="breadcrumbs__item"><span>{crumb}</span></li> : <li className="breadcrumbs__item"><Link to={profileLinks[i].path}>{crumb}</Link></li>
                        ))}
                    </ol>
                </nav>

                <h1 className="title page__title">Профиль</h1>

                <div className="profile-page__inner">
                    <nav className="page-nav">
                        <ul className="page-nav__list">
                            {profileLinks.map((link, i) => (
                                <li key={`link-${i + 1}`} className="page-nav__item">
                                    <NavLink key={link.component} to={link.path} className="page-nav__link">{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="profile-page__body">
                        <h2 className="profile-page__title">{title}</h2>
                        <Switch>
                            {profileLinks.map(page => (
                                <Route key={page.component} path={page.path} component={page.component} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;