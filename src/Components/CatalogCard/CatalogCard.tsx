import classNames from 'classnames';
import { useCallback } from 'react';
import heart from '../../assets/images/icons/heart.svg';
import heartFilled from '../../assets/images/icons/heart-filled.svg';
import { Link } from 'react-router-dom';
import Prices from '../Prices';
import { CatalogItem } from '../../interfaces/CatalogItem';
import { SIZES } from '../../constants/sizes';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { FavoriteAriaLabel } from '../../enums/FavoriteAriaLabel';
import Labels from '../Labels';

const CatalogCard = ({ id, articul, name, brand, imageUrl, price, color, sizes, style, discount, newProduct }: CatalogItem) => {
    const { products } = useTypedSelector((state) => state.favoriteReducer);
    const { addFavoriteProduct, removeFavoriteProduct } = useActions();

    const { openProductPopup } = useActions();

    const isFavorite = products.findIndex((product) => product.id === id) !== -1;

    const handleAddFavorite = () => {
        addFavoriteProduct({
            id,
            articul,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            style,
            discount,
            newProduct
        });
    }

    const handleRemoveFavorite = useCallback(() => {
        removeFavoriteProduct(id);
    }, []);

    const handleOpenPopup = () => {
        openProductPopup({
            id,
            articul,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            style,
            discount,
            newProduct
        });
    }

    return (
        <article className="catalog-card">
            <Labels discount={discount} isNew={newProduct} />

            {isFavorite ?
                <button onClick={handleRemoveFavorite} className="catalog-card__favorite" type="button" aria-label={FavoriteAriaLabel.Add} style={{ backgroundImage: `url(${heartFilled})` }}></button> :
                <button onClick={handleAddFavorite} className="catalog-card__favorite" type="button" aria-label={FavoriteAriaLabel.Remove} style={{ backgroundImage: `url(${heart})` }}></button>
            }

            <div className="catalog-card__img">
                <img src={imageUrl} alt={`${name} ${brand}`} width="336" height="448" />

                <div className="catalog-card__info">
                    <div className="catalog-card__sizes">
                        {sizes && SIZES.map(size => (
                            <span key={size} className={classNames('catalog-card__size', {
                                'catalog-card__size--disabled': !SIZES.includes(sizes[sizes.indexOf(size)])
                            })}>{size}</span>
                        ))}
                    </div>

                    <button onClick={handleOpenPopup} className="catalog-card__info-link popup-link" type="button">Быстрый просмотр</button>
                </div>
            </div>

            <Link to={`/product-card/${id}`} className="catalog-card__title">{name}</Link>

            <div className="catalog-card__subtitle">{brand}</div>

            <Prices price={price} discount={discount} />
        </article>
    );
}

export default CatalogCard;