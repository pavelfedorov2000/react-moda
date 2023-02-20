import { Field as FieldType, ProfileData, FIELDS } from '../enums/Auth';
import { InputType } from "../enums/InputType";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Field from './Field';

interface EditField extends FieldType {
    value?: string;
}

const SmallPopup = () => {
    const profileData = useTypedSelector((state) => state.profileReducer);
    const { PASSWORD, REPEAT_PASSWORD, editPopup } = profileData;

    const { setProfileData, closeProfileEditPopup, setProfileDataUpdated } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({
            name: event.target.name,
            value: event.target.value
        });
    }

    const editFields: EditField[] = FIELDS.map((field) => {
        const key = Object.keys(profileData).find((name) => name === field.name);

        if (field.name === ProfileData.PASSWORD) {
            return {
                ...field,
                placeholder: 'Новый пароль',
            }
        }

        if (field.type === InputType.Password) {
            return {
                ...field,
                value: ''
            }
        }

        return {
            ...field,
            value: key ? profileData[key] : null
        };
    }).filter((field) => field.category === editPopup.name || field.name === editPopup.name);

    const handleClose = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        closeProfileEditPopup();
        setProfileDataUpdated(true);
        setTimeout(() => {
            setProfileDataUpdated(false);
        }, 3000);
    }

    const isDisabledButton =
        editFields.some((field) => field.value === '')
        || PASSWORD === ''
        || REPEAT_PASSWORD === ''
        || PASSWORD !== REPEAT_PASSWORD;

    return (
        <div className="overlay active">
            <div className="popup small-popup">
                <button onClick={closeProfileEditPopup} className="popup__close" type="button">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" />
                    </svg>
                </button>
                <div className="small-popup__title">{editPopup.title}</div>
                <form onSubmit={handleClose} action="#" className="small-popup__form">
                    {editFields.map((field) => (
                        <Field key={field.name} onInput={handleChange} {...field} />
                    ))}
                    <button className="button small-popup__form-btn"
                            type="submit"
                            disabled={isDisabledButton}>Сохранить</button>
                </form>
            </div>
        </div>
    );
};

export default SmallPopup;