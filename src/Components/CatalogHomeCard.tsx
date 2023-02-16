import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { Category } from '../interfaces/Category';

interface Props extends Category {
    index: number;
}

const CatalogHomeCard = ({ imageUrl, text, index }: Props) => {
    const { setCategory } = useActions();

    return (
        <Link onClick={() => setCategory(index)} className="catalog-home-card" to={Pages.Home.path}>
            <img className="catalog-home-card__img" src={imageUrl} alt="фото" width="465" height="610" />
            <div className="catalog-home-card__title">{text}</div>
        </Link>
    );
}

export default CatalogHomeCard;