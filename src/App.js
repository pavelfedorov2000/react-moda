import classNames from 'classnames';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer, Auth, DropBasket, Social } from './Components';
import { Catalog, Cart, ProductCard } from './Pages';


function App() {

    const phone = '8 800 250 30 05';


    const [visibleAsideBasket, setVisibleAsideBasket] = useState(false);
    const [visibleAsideAuth, setVisibleAsideAuth] = useState(false);
    const openAsideBasket = () => {
        setVisibleAsideBasket(!visibleAsideBasket);
    }
    const closeAsideBasket = () => {
        setVisibleAsideBasket(!visibleAsideBasket);
    }
    const openAsideAuth = () => {
        setVisibleAsideAuth(!visibleAsideAuth);
    }
    const closeAsideAuth = () => {
        setVisibleAsideAuth(!visibleAsideAuth);
    }
    return (
        <div className="wrapper">
            <Header onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} phone={phone} />
            <Route path="/" component={Catalog} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/product-card" component={ProductCard} exact />
            <Footer socials={Social} phone={phone} />
            <div className={classNames('overlay', {
                'active': visibleAsideBasket || visibleAsideAuth
            })}>
                <Auth onCloseAsideAuth={closeAsideAuth} visibleAsideAuth={visibleAsideAuth} socials={Social} />
                <DropBasket onCloseAsideBasket={closeAsideBasket} visibleAsideBasket={visibleAsideBasket} />
            </div>
        </div>
    );
}

export default App;
