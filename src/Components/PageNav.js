import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AppRouter from './AppRouter';

function PageNav() {
    console.log(AppRouter);
    const profileRoutes = AppRouter.filter(route => route.profile === true);

    return (
        <nav className="page-nav">
            <ul className="page-nav__list">
                {profileRoutes.map(route => (
                    <Link to={route.path} className="page-nav__link">{route.title}</Link>
                ))}
            </ul>
        </nav>
    );
}

/* {
    profileLinks.map(link => (
        <li key={link.component} className="page-nav__item">
            <Link to={`${url}/${link.path}`} className={classNames('page-nav__link', {
                'active': link.component === link.name
            })} onClick={onClickLink}>{link.name}</Link>
        </li>
    ))
} */

export default PageNav;