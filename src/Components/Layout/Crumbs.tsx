import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Pages } from '../../enums/Page';
import { ClassName } from '../../enums/ClassName';

interface Props {
    title?: string;
    id?: number;
    url?: string;
    product?: boolean;
}

const mainClass = ClassName.Crumbs;

const Crumbs = ({ title, id, url, product }: Props) => {
    const prevRoute = routes.find((route) => route.path === `/${url}`);

    return (
        <nav className={mainClass} aria-label="Хлебные крошки">
            <ol className={`${mainClass}__list`}>
                <li className={`${mainClass}__item`}>
                    <Link to={Pages.Home}>Главная</Link>
                </li>

                {product && <li className={`${mainClass}__item`}><Link to={Pages.Catalog}>{Pages.Catalog.title}</Link></li>}

                {id && <li className={`${mainClass}__item`}><Link to={`/${url}`}>{prevRoute?.title}</Link></li>}

                <li className={`${mainClass}__item`}><span>{title}</span></li>
            </ol>
        </nav>
    );
}

export default Crumbs;