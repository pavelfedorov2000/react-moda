import { Tab } from "../interfaces/Tab";

export enum ProductTab {
    Details = 'details',
    Delivery = 'delivery',
    Payment = 'payment',
    Shops = 'shops-availability',
    Video = 'video',
}

export const PRODUCT_TABS: Tab[] = [{
    id: ProductTab.Details,
    text: 'Детали',
}, {
    id: ProductTab.Delivery,
    text: 'Доставка',
}, {
    id: ProductTab.Payment,
    text: 'Оплата',
}, {
    id: ProductTab.Shops,
    text: 'Наличие в магазинах',
}, {
    id: ProductTab.Video,
    text: 'Видео',
}];