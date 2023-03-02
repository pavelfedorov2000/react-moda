import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Pages } from '../../enums/Page';

interface Props {
    title?: string;
    id?: number;
    url?: string;
    product?: boolean;
}

const Crumbs = ({ title, id, url, product }: Props) => {
    const prevRoute = routes.find((route) => route.path === `/${url}`);

    return (
        <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol className="breadcrumbs__list">
                <li className="breadcrumbs__item"><Link to={Pages.Home}>Главная</Link></li>

                {product && <li className="breadcrumbs__item"><Link to={Pages.Catalog}>{Pages.Catalog.title}</Link></li>}

                {id && <li className="breadcrumbs__item"><Link to={`/${url}`}>{prevRoute?.title}</Link></li>}

                <li className="breadcrumbs__item"><span>{title}</span></li>
            </ol>
        </nav>
    );
}

export default Crumbs;