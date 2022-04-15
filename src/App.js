import classNames from 'classnames';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Header, Footer, Auth, DropBasket, Social } from './Components';
import { Catalog, Cart, ProductCard, Favorite, Brands } from './Pages';


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
        return <Link className="breadcrumbs__item" to="/" exact>{crumb}</Link>
      case crumbs.length - 1:
        return <span className="breadcrumbs__item">{crumb}</span>
      default:
        return <a className="breadcrumbs__item" href="#">{crumb}</a>
    }
  }
  return (
    <div className="wrapper">
      <Header onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} phone={phone} />
      <Route path="/" component={Catalog} exact generateCrumbs={generateCrumbs} />
      <Route path="/favorite" component={Favorite} exact />
      <Route path="/cart" component={Cart} exact />
      <Route path="/product-card" component={ProductCard} exact />
      <Route path="/brands" component={Brands} exact />
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
