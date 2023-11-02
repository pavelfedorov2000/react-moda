import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { Category } from '../interfaces/Category';
import { Image } from '../ui';

const mainClass = 'catalog-home-card';

const CatalogHomeCard = ({ imageUrl, text, index }: Category & { index: number; }) => {
    const { setCategory } = useActions();

    return (
        <Link onClick={() => setCategory(index)} className={mainClass} to={Pages.Home.path}>
            <Image className={`${mainClass}__img`} src={imageUrl} width={465} height={610} />
            <span className={`${mainClass}__title`}>{text}</span>
        </Link>
    );
}

export default CatalogHomeCard;