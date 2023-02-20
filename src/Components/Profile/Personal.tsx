import { FieldCategory, FIELDS, ProfileData } from '../../enums/Auth';
import { Genders } from '../../enums/Gender';
import { ProfileFields } from '../../enums/Profile';
import { UpdateStatuses } from '../../enums/UpdateStatus';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Field from '../Field';
import Gender from '../Gender';
import ProfileNotify from '../ProfileNotify';

const Personal = () => {
    const profileData = useTypedSelector((state) => state.profileReducer);
    const { PHONE, EMAIL, isUpdated } = profileData;
    const { openProfileEditPopup, setProfileData } = useActions();

    const handleOpenEditPopup = (name: string, title: string) => {
        openProfileEditPopup({
            name,
            title
        });
    }

    const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({
            name: event.target.name,
            value: event.target.value
        });
    }

    return (
        <>
            <form className="profile-personal profile-page__form">
                <div className="profile-personal__item">
                    <div className="profile-personal__item-title">{ProfileFields.Personal.title}</div>
                    <div className="profile-personal__row">
                        <div className="profile-personal__fields">
                            {FIELDS.filter((field) => field.category === FieldCategory.Personal)
                                .map((field) => {
                                    return {
                                        ...field,
                                        value: profileData[field.name]
                                    }
                                })
                                .map((field) => (
                                <Field key={field.name} {...field} readOnly />
                            ))}
                        </div>
                        <button className="link-btn" type="button" onClick={() => handleOpenEditPopup(FieldCategory.Personal, ProfileFields.Personal.title)}>
                            {ProfileFields.Personal.changeButton}
                        </button>
                    </div>
                    <div className="profile-personal__row">
                        <div className="profile-personal__fields">
                            <div className="profile-personal__row-field profile-personal__gender">
                                <div className="profile-personal__field-title">Пол</div>
                                <div className="profile-personal__gender-radios">
                                    {Object.keys(Genders).map((gender) => (
                                        <Gender key={gender} onChange={handleChangeGender} className="profile-personal__gender-radio" gender={Genders[gender]} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-personal__item">
                    <div className="profile-personal__item-title">{ProfileFields.Contacts.title}</div>
                    <div className="profile-personal__row">
                        <div className="profile-personal__fields">
                            {FIELDS.filter((field) => field.name === ProfileData.PHONE).map((field) => (
                                <Field key={field.name} {...field} value={PHONE} readOnly />
                            ))}
                        </div>
                        <button className="link-btn" type="button" onClick={() => handleOpenEditPopup(ProfileData.PHONE, 'Изменить номер телефона')}>
                            Изменить номер телефона
                        </button>
                    </div>
                    <div className="profile-personal__row">
                        <div className="profile-personal__fields">
                            {FIELDS.filter((field) => field.name === ProfileData.EMAIL).map((field) => (
                                <Field key={field.name} {...field} value={EMAIL} readOnly />
                            ))}
                        </div>
                        <button className="link-btn" type="button" onClick={() => handleOpenEditPopup(ProfileData.EMAIL, 'Изменить email')}>
                            Изменить email
                        </button>
                    </div>
                </div>
                
                <div className="profile-personal__item">
                    <div className="profile-personal__row">
                        <div className="profile-personal__item-title">{ProfileFields.Password.title}</div>
                        <button className="link-btn" type="button" onClick={() => handleOpenEditPopup(FieldCategory.Password, 'Изменить пароль')}>
                            {ProfileFields.Password.changeButton}
                        </button>
                    </div>
                </div>
            </form>
            {
                isUpdated && <ProfileNotify status={UpdateStatuses.success.text} text={UpdateStatuses.success.text} />
            }
        </>
    );
}

export default Personal;