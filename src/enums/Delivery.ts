enum Delivery {
    Courier = 'Courier',
    Postamat = 'Postamat',
}

enum DeliveryInput {
    INDEX = 'INDEX',
    STREET = 'STREET',
    HOME = 'HOME',
    FLAT = 'FLAT',
};

export const DELIVERY_OPTIONS = [{
    name: [Delivery.Courier],
    title: 'Курьер'
}, {
    name: [Delivery.Postamat],
    title: 'Доставка в пункты выдачи заказов и постаматы'
}];

export const DELIVERY_INPUTS = {
    [DeliveryInput.INDEX]: 'Индекс',
    [DeliveryInput.STREET]: 'Улица',
    [DeliveryInput.HOME]: 'Дом, корпус',
    [DeliveryInput.FLAT]: 'Квартира/офис'
};