import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { Page } from '../interfaces/Route';
import { ClassName } from '../enums/ClassName';

const crumbs = ['Перейти на главную', 'Женщинам', 'Детям', 'Мужчинам', 'Аксессуары'];

const mainClass = 'not-found-page';

const NotFound = ({ title }: Page) => {
    return (
        <main className={`${ClassName.Page} ${mainClass}`}>
            <div className={ClassName.Container}>
                <div className={`${mainClass}__inner`}>
                    <h1 className={`${mainClass}__title`}>404</h1>

                    <div className={`${mainClass}__subtitle`}>{title}</div>

                    <nav className={ClassName.Crumbs} aria-label="Хлебные крошки">
                        <ul className={`${ClassName.Crumbs}__list`}>
                            {crumbs.map((crumb, index) => (
                                <li key={index} className={`${ClassName.Crumbs}__item`}>
                                    <Link to={index === 0 ? Pages.Home : Pages.Catalog} className={`${ClassName.Crumbs}__link`}>
                                        {crumb}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    );
}

export default NotFound;