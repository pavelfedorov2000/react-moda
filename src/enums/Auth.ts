import { InputType } from "./InputType";

export enum Auth {
    Enter = 'Enter',
    Register = 'Register',
    PasswordRecovery = 'PasswordRecovery',
}

export const AuthOptions = {
    [Auth.Enter]: {
        title: 'Авторизация',
        text: 'Войдите или зарегистрируйтесь, чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.'
    },
    [Auth.Register]: {
        title: '',
        text: ''
    },
    [Auth.PasswordRecovery]: {
        title: 'Восстановление пароля',
        text: 'Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля'
    }
};

export const AUTH_TABS = [{
    name: [Auth.Enter],
    id: 'enter',
    title: 'Вход'
}, {
    name: [Auth.Register],
    id: 'register',
    title: 'Регистрация'
}];

export enum EnterOption {
    Phone = 'Phone',
    Email = 'Email',
}

export enum ProfileData {
    NAME = 'NAME',
    SURNAME = 'SURNAME',
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    GENDER = 'GENDER',
    PASSWORD = 'PASSWORD',
    REPEAT_PASSWORD = 'REPEAT_PASSWORD',
}

export interface Field {
    name: string;
    placeholder: string;
    type?: string;
    category?: string;
}

export enum FieldCategory {
    Personal = 'personal',
    Password = 'Password',
}

export const FIELDS: Field[] = [{
    name: ProfileData.NAME,
    placeholder: "Имя",
    category: FieldCategory.Personal,
}, {
    name: ProfileData.SURNAME,
    placeholder: "Фамилия",
    category: FieldCategory.Personal,
}, {
    name: ProfileData.PHONE,
    placeholder: "Ваш телефон",
    type: InputType.Phone
}, {
    name: ProfileData.EMAIL,
    placeholder: "Ваш e-mail",
    type: InputType.Email
}, {
    name: ProfileData.PASSWORD,
    placeholder: "Придумайте пароль",
    type: InputType.Password,
    category: FieldCategory.Password
}, {
    name: ProfileData.REPEAT_PASSWORD,
    placeholder: "Повторите пароль",
    type: InputType.Password,
    category: FieldCategory.Password
}];