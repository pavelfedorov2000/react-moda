import { useSelector } from 'react-redux';
import { CartIcon, FavoriteIcon, UserIcon } from './icons';
import search from '../../assets/images/icons/search.svg';
import { Link } from 'react-router-dom';
import { Pages, SubPages } from '../../enums/Page';

const headerActions = [{
    href: SubPages.Orders,
    icon: UserIcon,
    text: 'Профиль'
}, {
    href: Pages.Favorite,
    icon: FavoriteIcon,
    text: 'Избранное'
}, {
    icon: CartIcon,
    text: 'Корзина'
}];

const profile = headerActions[0];

const HeaderActions = ({ onClick, onClickSearch }) => {
    //const { totalCount } = useSelector(({ cart }) => cart);
    //const { products } = useSelector(({ favorite }) => favorite);

    const totalCount = 1;
    const products = 2;

    return (
        <div className="header__actions">
            <button onClick={onClickSearch} className="header__search-btn" type="button" style={{ backgroundImage: `url(${search})` }}></button>
            <Link to="/orders" className="action-header">
                {<profile.icon />}
                <span>{profile.text}</span>
            </Link>

            <Link to="/favorite" className="action-header">
                <FavoriteIcon />
                <span>
                    Избранное
                    {products.length !== 0 && <span>({products.length})</span>}
                </span>
            </Link>

            <button onClick={onClick} className="action-header" type="button">
                <CartIcon />
                <span>Корзина
                    {totalCount !== 0 && <span>({totalCount})</span>}
                </span>
            </button>
        </div>
    );
}

export default HeaderActions;