import { DropMenu } from "../interfaces/DropMenu";
import { MenuLink } from "../interfaces/MenuLink";

export const dropMenuCategories: MenuLink[] = [{
    title: "Одежда",
    path: "catalog"
}, {
    title: "Обувь",
    path: "catalog"
}, {
    title: "Аксессуары",
    path: "catalog"
}, {
    title: "Бренды",
    path: "brands"
}, {
    title: "Новинки",
    path: "catalog"
}];

export const links: MenuLink[] = [{
    title: "Распродажа",
    path: "catalog"
}, {
    title: "Блог",
    path: "blog"
}, {
    title: "Новости",
    path: "news"
}];

export const dropMenu: DropMenu = {
    items: [{
        items: [
            "Блузки и рубашки",
            "Брюки",
            "Верхняя одежда",
            "Джемперы, свитеры",
            "Джинсы",
            "Домашняя одежда",
        ]
    }, {
        title: "Популярное",
        items: [
            "Водолазки",
            "Вечерние платья",
            "Джинсы",
            "Топы",
            "Юбки",
        ],
    }, {
        title: "Бренды",
        items: [
            "Allora",
            "AllSaints",
            "Allura",
            "Bibi",
            "B2B Black to Black",
            "BeMyMom",
            "Dirkje",
            "Djdutchjeans",
            "Dja Fashion",
            "Faba",
            "все бренды",
        ]
    }]
};