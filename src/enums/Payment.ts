enum Payment {
    Cash = 'Cash',
    Card = 'Card',
}

export const PAYMENT_OPTIONS = [{
    name: [Payment.Cash],
    title: "Оплата при получении",
    text: "Наличными или банковской картой при получении"
}, {
    name: [Payment.Card],
    title: "Картой онлайн",
    text: "Перейти к оплате через сервис"
}];