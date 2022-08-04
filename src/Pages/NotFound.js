import React from 'react';
import { Link } from 'react-router-dom';

const crumbs = ['Перейти на главную', 'Женщинам', 'Детям', 'Мужчинам', 'Аксессуары'];

function NotFound({ title }) {
    return (
        <main className="page not-found-page">
            <div className="container">
                <div className="not-found-page__inner">
                    <h1 className="not-found-page__title">404</h1>

                    <div className="not-found-page__subtitle">{title}</div>

                    <nav className="breadcrumbs" aria-label="breadcrumbs">
                        <ul className="breadcrumbs__list">
                            {crumbs.map((crumb, i) => (
                                <li className="breadcrumbs__item">
                                    <Link key={`crumb-${i + 1}`} to={`/${i === 0 ? 'home' : 'catalog'}`} className="breadcrumbs__link">{crumb}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    );
}

//<Link key={`crumb-${i + 1}`} to={i == 0 ? '/' : '/catalog'} className="breadcrumbs__item">{crumb}</Link>

export default NotFound;