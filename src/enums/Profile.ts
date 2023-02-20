export enum ProfileTitle {
    Personal = 'Personal',
    Contacts = 'Contacts',
    Password = 'Password',
}

export const ProfileFields = {
    [ProfileTitle.Personal]: {
        title: 'Личные данные',
        changeButton: 'Изменить личные данные'
    },
    [ProfileTitle.Contacts]: {
        title: 'Контактные данные',
    },
    [ProfileTitle.Password]: {
        title: 'Безопасность: пароль',
        changeButton: 'Изменить пароль'
    }
};