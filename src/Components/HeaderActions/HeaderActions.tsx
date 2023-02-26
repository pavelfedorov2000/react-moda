import { CartIcon, FavoriteIcon, UserIcon } from './icons';
import search from '../../assets/images/icons/search.svg';
import { Pages, SubPages } from '../../enums/Page';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ActionHeader from '../ActionHeader';
import { useActions } from '../../hooks/useActions';
import { useMemo } from 'react';
import { HeaderAction } from '../../interfaces/HeaderAction';

interface Props {
    onClickSearch: () => void;
}

const HeaderActions = ({ onClickSearch }: Props) => {
    const { products } = useTypedSelector((state) => state.favoriteReducer);
    const { items } = useTypedSelector((state) => state.cartReducer);
    const profileState = useTypedSelector((state) => state.profileReducer);

    const { openAuth, openAsideBasket } = useActions();

    const totalCount = Object.keys(items).length;

    const headerActions: HeaderAction[] = useMemo(() => [{
        popupId: 'auth-popup',
        href: Object.values(profileState).every((value) => value !== '') ? SubPages.Personal.path : undefined,
        icon: <UserIcon />,
        text: Pages.Profile.title,
        onClick: Object.values(profileState).some((value) => value === '') ? openAuth : undefined,
        hasPopup: 'dialog'
    }, {
        href: Pages.Favorite.path,
        icon: <FavoriteIcon />,
        text: "Избранное",
        quantity: products.length
    }, {
        popupId: 'drop-basket',
        icon: <CartIcon />,
        text: Pages.Cart.title,
        onClick: openAsideBasket,
        quantity: totalCount,
        hasPopup: 'dialog'
    }], [products, totalCount]);

    return (
        <div className="header__actions">
            <button onClick={onClickSearch} className="header__search-btn" type="button" style={{ backgroundImage: `url(${search})` }}></button>
            {headerActions.map((button, index) => (
                <ActionHeader key={index} {...button} />
            ))}
        </div>
    );
}

export default HeaderActions;