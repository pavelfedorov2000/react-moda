enum Subscribe {
    EMAIL = 'e-mail',
    SMS = 'sms',
}

export const Subscribes = [{
    [Subscribe.EMAIL]: {
        text: 'ежедневно на почту past@mail.ru'
    },
}, {
    [Subscribe.SMS]: {
        text: 'по SMS'
    }
}];