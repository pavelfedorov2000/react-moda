import { Tab } from "../interfaces/Tab";

export enum ProductTab {
    Details = 'details',
    Delivery = 'delivery',
    Payment = 'payment',
    Shops = 'shops-availability',
    Video = 'video',
}

export const ProductTabs: Tab[] = [{
    href: ProductTab.Details,
    text: 'Детали',
}, {
    href: ProductTab.Delivery,
    text: 'Доставка',
}, {
    href: ProductTab.Payment,
    text: 'Оплата',
}, {
    href: ProductTab.Shops,
    text: 'Наличие в магазинах',
}, {
    href: ProductTab.Video,
    text: 'Видео',
}];