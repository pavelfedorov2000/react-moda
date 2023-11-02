import { Route } from '../interfaces/Route';
import emptyCatalog from '../assets/images/icons/empty-catalog.svg';
import emptyBlog from '../assets/images/icons/empty-blog.svg';
import { Catalog, CatalogHome, Favorite, Home, ProductCard, Cart, OrderSuccess, Brands, Blog, BlogDetail, News, DetailNews, Profile, NotFound } from '../Pages';
import { Discounts, MyOrders, OrderDetail, Personal, Subscribes } from '../modules';
import { Pages, SubPages } from '../enums/Page';

export const routes: Route[] = [{
    id: 0,
    ...Pages.CatalogHome,
    component: CatalogHome,
    exact: true
}, {
    id: 1,
    path: Pages.Home.path,
    component: Home
}, {
    id: 2,
    ...Pages.Catalog,
    component: Catalog,
    emptyBlock: {
        icon: {
            src: emptyCatalog
        },
        title: {
            text: Pages.Catalog.empty
        }
    }
}, {
    id: 3,
    title: Pages.Favorite.title,
    path: Pages.Favorite.path,
    component: Favorite,
    emptyBlock: {
        icon: {
            src: emptyCatalog
        },
        title: {
            text: Pages.Favorite.empty
        }
    }
}, {
    id: 4,
    ...Pages.ProductCard,
    component: ProductCard
}, {
    id: 5,
    ...Pages.Cart,
    component: Cart,
    emptyBlock: {
        icon: {
            src: emptyCatalog
        },
        title: {
            text: Pages.Cart.empty
        }
    }
}, {
    id: 6,
    ...Pages.OrderSuccess,
    before: Pages.Cart.path,
    component: OrderSuccess
}, {
    id: 7,
    ...Pages.Brands,
    component: Brands
}, {
    id: 8,
    ...Pages.Blog,
    component: Blog,
    exact: true,
    emptyBlock: {
        icon: {
            src: emptyBlog
        },
        title: {
            text: Pages.Blog.empty
        }
    }
}, {
    id: 9,
    ...Pages.BlogDetail,
    component: BlogDetail,
    exact: true
}, {
    id: 10,
    ...Pages.News,
    component: News,
    exact: true,
    emptyBlock: {
        icon: {
            src: emptyBlog
        },
        title: {
            text: Pages.News.empty
        }
    }
}, {
    id: 11,
    ...Pages.DetailNews,
    component: DetailNews,
    exact: true
}, {
    id: 12,
    profile: true,
    ...SubPages.Orders,
    component: Profile,
    SubPage: MyOrders,
    exact: true,
    emptyBlock: {
        icon: {
            src: emptyBlog
        },
        title: {
            text: SubPages.Orders.empty
        }
    }
}, {
    id: 13,
    profile: true,
    ...SubPages.OrderDetail,
    component: Profile,
    SubPage: OrderDetail,
    exact: true,
    notVisible: true
}, {
    id: 14,
    profile: true,
    ...SubPages.Discounts,
    component: Profile,
    SubPage: Discounts,
}, {
    id: 15,
    profile: true,
    ...SubPages.Subscribes,
    component: Profile,
    SubPage: Subscribes,
}, {
    id: 16,
    profile: true,
    ...SubPages.Personal,
    component: Profile,
    SubPage: Personal,
}, {
    id: 17,
    ...Pages.NotFound,
    component: NotFound
}];