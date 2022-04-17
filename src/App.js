import classNames from 'classnames';
import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Header, Footer, Auth, DropBasket, Social } from './Components';
import { Catalog, Cart, ProductCard, Favorite, Brands, NotFound, OrderSuccess, Profile } from './Pages';


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

    function generateCrumbs(crumbs, crumb, i) {
        switch (i) {
            case 0:
                return <li className="breadcrumbs__item"><Link to="/" exact>{crumb}</Link></li>
            case crumbs.length - 1:
                return <li className="breadcrumbs__item"><span>{crumb}</span></li>
            default:
                return <li className="breadcrumbs__item"><a href="#">{crumb}</a></li>
        }
    }
    return (
        <div className="wrapper">
            <Header onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} phone={phone} />
            <Switch>
                <Route path="/" component={Catalog} exact />
                <Route path="/favorite" component={Favorite} />
                <Route path="/cart" component={Cart} />
                <Route path="/order-success" component={OrderSuccess} />
                <Route path="/product-card" component={ProductCard} />
                <Route path="/brands" component={Brands} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/profile" component={Profile} />
            </Switch>
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
