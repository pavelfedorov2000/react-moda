import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { Header, Footer, Auth, DropBasket, BurgerMenu } from './Components';
import axios from 'axios';
import { AppContext } from './context';
import AppRouter from './Components/AppRouter';
import { removeCartItem, plusItem, minusItem } from './redux/actions/cart';
import { removeFavoriteProduct } from './redux/actions/favorite';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const dropMenuCategories = [{
    id: 0,
    title: "Одежда",
    path: "catalog"
}, {
    id: 1,
    title: "Обувь",
    path: "catalog"
}, {
    id: 2,
    title: "Аксессуары",
    path: "catalog"
}, {
    id: 3,
    title: "Бренды",
    path: "brands"
}, {
    id: 4,
    title: "Новинки",
    path: "catalog"
}];

const links = [{
    id: 0,
    title: "Распродажа",
    path: "catalog"
}, {
    id: 1,
    title: "Блог",
    path: "blog"
}, {
    id: 2,
    title: "Новости",
    path: "news"
}];

const phone = '8 800 250 30 05';

function App() {
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

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('/categories').then(({ data }) => {
            setCategories(data);
        });
    }, []);

    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get('/blog').then(({ data }) => {
            setBlog(data);
        });
    }, []);

    const [discounts, setDiscounts] = useState([]);
    useEffect(() => {
        axios.get('/discounts').then(({ data }) => {
            setDiscounts(data);
        });
    }, []);

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

    // Экшн на добавление в избранное
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
            phone,
            activeCategory,
            onChangeCategory,
            categories,
            blog,
            discounts,
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
                <Header onOpenBurgerMenu={openBurgerMenu} categories={categories} onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} dropMenuCategories={dropMenuCategories} links={links} handleOpenBurger={openBurgerMenu} visibleBurgerMenu={visibleBurgerMenu} />
                <BurgerMenu visibleBurgerMenu={visibleBurgerMenu} onCloseBurgerMenu={closeBurgerMenu} categories={categories} dropMenuCategories={dropMenuCategories} links={links} />
                <AppRouter />
                <Footer />
                <div className={classNames('overlay', {
                    'active': visibleAsideBasket || visibleAsideAuth
                })}>
                    <Auth onCloseAsideAuth={closeAsideAuth} visibleAsideAuth={visibleAsideAuth} />
                    <DropBasket onCloseAsideBasket={closeAsideBasket} visibleAsideBasket={visibleAsideBasket} />
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
