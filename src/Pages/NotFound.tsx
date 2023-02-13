import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { Page } from '../interfaces/Route';

const crumbs = ['Перейти на главную', 'Женщинам', 'Детям', 'Мужчинам', 'Аксессуары'];

const NotFound = ({ title }: Page) => {
    return (
        <main className="page not-found-page">
            <div className="container">
                <div className="not-found-page__inner">
                    <h1 className="not-found-page__title">404</h1>

                    <div className="not-found-page__subtitle">{title}</div>

                    <nav className="breadcrumbs" aria-label="breadcrumbs">
                        <ul className="breadcrumbs__list">
                            {crumbs.map((crumb, i) => (
                                <li key={crumb.toString()} className="breadcrumbs__item">
                                    <Link to={i === 0 ? Pages.Home : Pages.Catalog} className="breadcrumbs__link">{crumb}</Link>
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