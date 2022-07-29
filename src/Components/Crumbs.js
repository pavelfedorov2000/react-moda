import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Crumbs({ title }) {
    return (
        <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol className="breadcrumbs__list">
                <li className="breadcrumbs__item"><Link to="/">Главная</Link></li>
                <li className="breadcrumbs__item"><span>{title}</span></li>
            </ol>
        </nav>
    );
}

export default Crumbs;