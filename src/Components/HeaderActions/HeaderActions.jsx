import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon, FavoriteIcon, UserIcon } from './icons';
import search from '../../assets/images/icons/search.svg';
import { Link } from 'react-router-dom';

const headerActions = [{
    href: '/orders',
    icon: '<UserIcon />',
    text: 'Профиль'
}, {
    href: '/favorite',
    icon: '<UserIcon />',
    text: 'Избранное'
}, {
    icon: '<CartIcon />',
    text: 'Корзина'
}];

const HeaderActions = ({ onClick, onClickSearch }) => {
    const { totalCount } = useSelector(({ cart }) => cart);
    const { products } = useSelector(({ favorite }) => favorite);

    return (
        <div className="header__actions">
            <button onClick={onClickSearch} className="header__search-btn" type="button" style={{ backgroundImage: `url(${search})` }}></button>
            <Link to="/orders" className="action-header">
                <UserIcon />
                <span>Профиль</span>
            </Link>

            <Link to="/favorite" className="action-header">
                <FavoriteIcon />
                <span>
                    Избранное
                    {products.length !== 0 ?
                        <span>({products.length})</span>
                        :
                        null
                    }
                </span>
            </Link>

            <button onClick={onClick} className="action-header" type="button">
                <CartIcon />
                <span>Корзина
                    {totalCount !== 0 ?
                        <span>({totalCount})</span>
                        :
                        null
                    }
                </span>
            </button>
        </div>
    );
}

export default HeaderActions;