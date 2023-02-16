enum PersonalData {
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
    name: PersonalData.SURNAME,
    placeholder: "Ваш телефон*"
}, {
    name: PersonalData.SURNAME,
    placeholder: "Ваш e-mail*"
}, {
    name: PersonalData.SURNAME,
    placeholder: "Город, населенный пункт*"
}];