import classNames from 'classnames';
import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Header, Footer, Auth, DropBasket, Social, BurgerMenu } from './Components';
import { Home, CatalogHome, Catalog, Cart, ProductCard, Favorite, Brands, NotFound, OrderSuccess, Profile, Blog, BlogDetail, News, NewsDetail } from './Pages';
import axios from 'axios';
import women from './assets/images/content/catalog-home/01.jpg';
import children from './assets/images/content/catalog-home/02.jpg';
import men from './assets/images/content/catalog-home/03.jpg';

function App() {

  const phone = '8 800 250 30 05';

  const [visibleAsideBasket, setVisibleAsideBasket] = useState(false);
  // Открытие / закрытие боковой корзины
  const openAsideBasket = () => {
    setVisibleAsideBasket(!visibleAsideBasket);
  }
  const closeAsideBasket = () => {
    setVisibleAsideBasket(!visibleAsideBasket);
  }

  const [visibleAsideAuth, setVisibleAsideAuth] = useState(false);
  // Открытие / закрытие боковой авторизации
  const openAsideAuth = () => {
    setVisibleAsideAuth(!visibleAsideAuth);
  }
  const closeAsideAuth = () => {
    setVisibleAsideAuth(!visibleAsideAuth);
  }

  const [visibleBurgerMenu, setVisibleBurgerMenu] = useState(false);
  // Открытие / закрытие бургер-меню
  const openBurgerMenu = () => {
    setVisibleBurgerMenu(true);
  }
  const closeBurgerMenu = () => {
    setVisibleBurgerMenu(false);
  }

  const [news, setNews] = useState([]);
  React.useEffect(() => {
    axios.get('/news').then(({ data }) => {
      setNews(data);
    });
  }, []); // [] = componentDidMout

  const [blog, setBlog] = useState([]);
  React.useEffect(() => {
    axios.get('/blog').then(({ data }) => {
      setBlog(data);
    });
  }, []); // [] = componentDidMout

  const categories = [
    {
      name: 'zhenshchinam',
      text: 'Женщинам',
      imageUrl: women
    },
    {
      name: 'detyam',
      text: 'Детям',
      imageUrl: children
    },
    {
      name: 'muzhchinam',
      text: 'Мужчинам',
      imageUrl: men
    },
  ];

  const dropMenuCategories = [
    {
      title: "Одежда",
      path: "catalog"
    },
    {
      title: "Обувь",
      path: "catalog"
    },
    {
      title: "Аксессуары",
      path: "catalog"
    },
    {
      title: "Бренды",
      path: "brands"
    },
    {
      title: "Новинки",
      path: "catalog"
    },
  ];
  const links = [
    {
      title: "Распродажа",
      path: "catalog"
    },
    {
      title: "Блог",
      path: "blog"
    },
    {
      title: "Новости",
      path: "news"
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const onChangeCategory = (i) => {
    setActiveCategory(categories[i].name);
  }

  /* const [activeNews, setActiveNews] = useState(null);
  const onClickNews = (i) => {
    setActiveNews(i);
  } */

  /* function generateCrumbs(crumbs, crumb, i) {
    switch (i) {
      case 0:
        return <li className="breadcrumbs__item"><Link to="/" exact>{crumb}</Link></li>
      case crumbs.length - 1:
        return <li className="breadcrumbs__item"><span>{crumb}</span></li>
      default:
        return <li className="breadcrumbs__item"><a href="#">{crumb}</a></li>
    }
  } */
  return (
    <div className={classNames('wrapper', {
      '_lock': visibleBurgerMenu
    })}>
      <Header onOpenBurgerMenu={openBurgerMenu} categories={categories} activeCategory={activeCategory} onChangeCategory={onChangeCategory} onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} phone={phone} dropMenuCategories={dropMenuCategories} links={links} />
      <BurgerMenu visibleBurgerMenu={visibleBurgerMenu} onCloseBurgerMenu={closeBurgerMenu} categories={categories} activeCategory={activeCategory} onChangeCategory={onChangeCategory} phone={phone} dropMenuCategories={dropMenuCategories} links={links} />
      <Switch>
        <Route path="/" component={Catalog} exact />
        <Route path="/favorite" component={Favorite} />
        <Route path="/cart" component={Cart} />
        <Route path="/order-success" render={() => <OrderSuccess />} />
        <Route path="/product-card/:id" render={() => <ProductCard />} />
        <Route path="/brands" component={Brands} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/profile" component={Profile} />
        <Route path="/blog" render={() => <Blog blog={blog} />} />
        <Route path="/blog-detail/:id" render={() => <BlogDetail />} />
        <Route path="/news" render={() => <News news={news} />} />
        <Route path="/news-detail/:id" render={() => <NewsDetail />} />
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

//<Route path="/:category" render={() => <Home blog={blog} />} />
//<Route path="/catalog-home" render={() => <CatalogHome onChangeCategory={onChangeCategory} categories={categories} />} />

export default App;
