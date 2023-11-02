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
import Labels from '../Labels';
import { FavoriteAction } from '../../enums/FavoriteAriaLabel';
import { Pages } from '../../enums/Page';
import { Image } from '../../ui';
import { ClassName } from '../../enums/ClassName';

const mainClass = 'catalog-card';

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
        //document.body.classList.add(ClassName.Lock);
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
        <article className={mainClass}>
            <Labels discount={discount} isNew={newProduct} />

            {isFavorite ?
                <button onClick={handleRemoveFavorite} className={`${mainClass}__favorite`} type="button" aria-label={FavoriteAction.Add} style={{ backgroundImage: `url(${heartFilled})` }}></button> :
                <button onClick={handleAddFavorite} className={`${mainClass}__favorite`} type="button" aria-label={FavoriteAction.Remove} style={{ backgroundImage: `url(${heart})` }}></button>
            }

            <div className={`${mainClass}__img`}>
                <Image src={imageUrl} alt={`${name} ${brand}`} width={336} height={448} cover />

                <div className={`${mainClass}__info`}>
                    <div className={`${mainClass}__sizes`}>
                        {sizes && SIZES.map(size => (
                            <span key={size} className={classNames(`${mainClass}__size`, {
                                [`${mainClass}__size--disabled`]: !SIZES.includes(sizes[sizes.indexOf(size)])
                            })}>{size}</span>
                        ))}
                    </div>

                    <button onClick={handleOpenPopup} className={`popup-link ${mainClass}__info-link`} type="button">Быстрый просмотр</button>
                </div>
            </div>

            <Link to={`/product-card/${id}`} className={`${mainClass}__title`}>{name}</Link>

            <div className={`${mainClass}__subtitle`}>{brand}</div>

            <Prices price={price} discount={discount} />
        </article>
    );
}

export default CatalogCard;