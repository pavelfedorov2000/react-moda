import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    const crumbs = ['Перейти на главную', 'Женщинам', 'Детям', 'Мужчинам', 'Аксессуары'];

    return (
        <main className="page not-found-page">
            <div className="container">
                <div className="not-found-page__inner">
                    <h1 className="not-found-page__title">404</h1>
                    <div className="not-found-page__subtitle">Похоже, мы не можем найти нужную вам страницу</div>
                    <nav className="breadcrumbs">
                        <ul className="breadcrumbs__list">
                            {crumbs.map((crumb, i) => (
                                <Link key={`crumb-${i + 1}`} to="/" className="breadcrumbs__item">{crumb}</Link>
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