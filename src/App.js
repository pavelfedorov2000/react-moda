import classNames from 'classnames';
import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Header, Footer, Auth, DropBasket, Social } from './Components';
import { Home, CatalogHome, Catalog, Cart, ProductCard, Favorite, Brands, NotFound, OrderSuccess, Profile, Blog, BlogDetail, News, NewsDetail } from './Pages';
import axios from 'axios';
import women from './assets/images/content/catalog-home/01.jpg';
import children from './assets/images/content/catalog-home/02.jpg';
import men from './assets/images/content/catalog-home/03.jpg';

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
    console.log(blog);

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
        <div className="wrapper">
            <Header categories={categories} activeCategory={activeCategory} onChangeCategory={onChangeCategory} onAsideBasketOpener={openAsideBasket} onAsideAuthOpener={openAsideAuth} phone={phone} />
            <Switch>
                <Route path="/:category" render={() => <Home blog={blog} />} />
                <Route path="/" exact render={() => <CatalogHome onChangeCategory={onChangeCategory} categories={categories} />} />
                <Route path="/catalog" render={() => <Catalog />} />
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

export default App;
