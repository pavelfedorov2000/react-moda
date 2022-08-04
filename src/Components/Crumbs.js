import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { RouterContext } from '../context';

function Crumbs({ title, id, url, product }) {
    const { routes } = useContext(RouterContext);

    const prevRoute = routes.find(route => route.path === `/${url}`);

    return (
        <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol className="breadcrumbs__list">
                <li className="breadcrumbs__item"><Link to="/home">Главная</Link></li>
                {product && <li className="breadcrumbs__item"><Link to={`/catalog`}>Каталог</Link></li>}
                {id !== undefined && <li className="breadcrumbs__item"><Link to={`/${url}`}>{prevRoute.title}</Link></li>}
                <li className="breadcrumbs__item"><span>{title}</span></li>
            </ol>
        </nav>
    );
}

export default Crumbs;

//{cart && <li className="breadcrumbs__item"><Link to={`/cart`}>Ваша корзина</Link></li>}