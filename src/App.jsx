import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { Header, Footer, Auth, DropBasket, BurgerMenu } from './Components';
import axios from 'axios';
import { AppContext } from './context';
import AppRouter from './Components/AppRouter';
import { removeCartItem, plusItem, minusItem } from './redux/actions/cart';
import { removeFavoriteProduct } from './redux/actions/favorite';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
    const [visibleAsideBasket, setVisibleAsideBasket] = useState(false);
    const openAsideBasket = () => {
        setVisibleAsideBasket(!visibleAsideBasket);
    }
    const closeAsideBasket = () => {
        setVisibleAsideBasket(!visibleAsideBasket);
    }

    const [visibleAsideAuth, setVisibleAsideAuth] = useState(false);
    const openAsideAuth = () => {
        setVisibleAsideAuth(!visibleAsideAuth);
    }
    const closeAsideAuth = () => {
        setVisibleAsideAuth(!visibleAsideAuth);
    }

    const [visibleBurgerMenu, setVisibleBurgerMenu] = useState(false);

    const openBurgerMenu = () => {
        setVisibleBurgerMenu(true);
    }

    const closeBurgerMenu = () => {
        setVisibleBurgerMenu(false);
    }

    const [sizesList, setSizesList] = useState([]);
    useEffect(() => {
        axios.get('/sizes').then(({ data }) => {
            setSizesList(data);
        });
    }, []);

    const [activeCategory, setActiveCategory] = useState(0);

    const onChangeCategory = (i) => {
        setActiveCategory(i);
    }

    const dispatch = useDispatch();

    const onClickAddFavorite = useCallback((obj) => {
        dispatch({
            type: 'ADD_FAVORITE_PRODUCT',
            payload: obj
        });
    }, []);

    const onClickRemoveFavorite = useCallback((id) => {
        dispatch(removeFavoriteProduct(id));
    }, []);

    const onAddCart = useCallback((obj) => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: obj
        });
    }, []);

    const onRemoveItem = useCallback((id) => {
        dispatch(removeCartItem(id));
    }, []);
    const onMinusItem = useCallback((id) => {
        dispatch(minusItem(id));
    }, []);
    const onPlusItem = useCallback((id) => {
        dispatch(plusItem(id));
    }, []);

    return (
        <AppContext.Provider value={{
            activeCategory,
            onChangeCategory,
            sizesList,
            onAddCart,
            onClickAddFavorite,
            onClickRemoveFavorite,
            onRemoveItem,
            onMinusItem,
            onPlusItem
        }}>
            <div className={classNames('wrapper', {
                '_lock': visibleBurgerMenu
            })}>
                <Header onOpenAsideBasket={openAsideBasket} onOpenBurger={openBurgerMenu} visibleBurgerMenu={visibleBurgerMenu} />
                <BurgerMenu isVisible={visibleBurgerMenu} onClose={closeBurgerMenu} />
                <AppRouter />
                <Footer />
                <div className={classNames('overlay', {
                    'active': visibleAsideBasket || visibleAsideAuth
                })}>


                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;

//<Auth onCloseAsideAuth={closeAsideAuth} visibleAsideAuth={visibleAsideAuth} />
//<DropBasket onCloseAsideBasket={closeAsideBasket} visibleAsideBasket={visibleAsideBasket} />
