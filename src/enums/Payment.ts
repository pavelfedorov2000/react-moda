enum Payment {
    Cash = 'Cash',
    Card = 'Card',
}

export const PAYMENT = {
    [Payment.Cash]: {
        title: "Оплата при получении",
        text: "Наличными или банковской картой при получении"
    },
    [Payment.Card]: {
        title: "Картой онлайн",
        text: "Перейти к оплате через сервис"
    }
};