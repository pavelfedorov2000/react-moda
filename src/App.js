import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { Header, Footer, Auth, DropBasket, BurgerMenu } from './Components';
import axios from 'axios';
import { AppContext } from './context';
import AppRouter from './Components/AppRouter';
import { removeCartItem, plusItem, minusItem } from './redux/actions/cart';
import { removeFavoriteProduct } from './redux/actions/favorite';
import { useDispatch } from 'react-redux';

function App() {

    const phone = '8 800 250 30 05';

    // Открытие / закрытие боковой корзины
    const [visibleAsideBasket, setVisibleAsideBasket] = useState(false);
    const openAsideBasket = () => {
        setVisibleAsideBasket(!visibleAsideBasket);
    }
    const closeAsideBasket = () => {
        setVisibleAsideBasket(!visibleAsideBasket);
    }

    // Открытие / закрытие боковой авторизации
    const [visibleAsideAuth, setVisibleAsideAuth] = useState(false);
    const openAsideAuth = () => {
        setVisibleAsideAuth(!visibleAsideAuth);
    }
    const closeAsideAuth = () => {
        setVisibleAsideAuth(!visibleAsideAuth);
    }

    // Открытие / закрытие бургер-меню
    const [visibleBurgerMenu, setVisibleBurgerMenu] = useState(false);
    const openBurgerMenu = () => {
        setVisibleBurgerMenu(true);
    }
    const closeBurgerMenu = () => {
        setVisibleBurgerMenu(false);
    }

    const [categories, setCategories] = useState([]);
    React.useEffect(() => {
        axios.get('/categories').then(({ data }) => {
            setCategories(data);
        });
    }, []); // [] = componentDidMout

    const [blog, setBlog] = useState([]);
    React.useEffect(() => {
        axios.get('/blog').then(({ data }) => {
            setBlog(data);
        });
    }, []); // [] = componentDidMout

    const [discounts, setDiscounts] = useState([]);
    React.useEffect(() => {
        axios.get('/discounts').then(({ data }) => {
            setDiscounts(data);
        });
    }, []); // [] = componentDidMout

    const [sizesList, setSizesList] = useState([]);
    React.useEffect(() => {
        axios.get('/sizes').then(({ data }) => {
            setSizesList(data);
        });
    }, []); // [] = componentDidMout

    const [activeCategory, setActiveCategory] = useState(0);

    const onChangeCategory = (i) => {
        setActiveCategory(i);
    }

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

    const dispatch = useDispatch();

    // Экшн на добавление в избранное
    const onClickAddFavorite = useCallback((obj) => {
        dispatch({
            type: 'ADD_FAVORITE_PRODUCT',
            payload: obj
        });
    }, []);

    // Экшн на удаление из избранного
    const onClickRemoveFavorite = useCallback((id) => {
        dispatch(removeFavoriteProduct(id));
    }, []);

    // Экшн на добавление в корзину
    const onAddCart = useCallback((obj) => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: obj
        });
    }, []);

    const onRemoveItem = useCallback((id) => {
        dispatch(removeCartItem(id)); // диспатчим экшн на удаление
    }, []);
    const onMinusItem = useCallback((id) => {
        dispatch(minusItem(id)); // диспатчим экшн на +1
    }, []);
    const onPlusItem = useCallback((id) => {
        dispatch(plusItem(id)); // диспатчим экшн на удаление -1
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
                <Header onOpenBurgerMenu={openBurgerMenu} categories={categories} onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} dropMenuCategories={dropMenuCategories} links={links} />
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
