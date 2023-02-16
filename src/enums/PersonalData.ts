export enum PersonalData {
    NAME = 'NAME',
    SURNAME = 'SURNAME',
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    CITY = 'CITY',
}

interface PersonalDataType {
    name: string;
    placeholder: string;
}

export const PERSONAL_DATA: PersonalDataType[] = [{
    name: PersonalData.NAME,
    placeholder: "Имя"
}, {
    name: PersonalData.SURNAME,
    placeholder: "Фамилия"
}, {
    name: PersonalData.PHONE,
    placeholder: "Ваш телефон*"
}, {
    name: PersonalData.EMAIL,
    placeholder: "Ваш e-mail*"
}, {
    name: PersonalData.CITY,
    placeholder: "Город, населенный пункт*"
}];