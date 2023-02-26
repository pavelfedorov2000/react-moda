import { CheckoutTitle } from '../../enums/CheckoutTitle';
import { PERSONAL_DATA } from '../../enums/PersonalData';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const PersonalData = () => {
    const { personalData } = useTypedSelector((state) => state.orderReducer);
    const { setPersonalData } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalData({
            name: event.target.name,
            value: event.target.value
        });
    }

    return (
        <fieldset>
            <legend className="checkout-form__item-title">{CheckoutTitle.Personal}</legend>
            <div className="personal-data-form__inputs">
                {PERSONAL_DATA.map((input, index) => (
                    <input key={input.name.toString()} onChange={handleChange} className="input" name={input.name} value={Object.values(personalData)[index]} placeholder={`${input.placeholder}*`} />
                ))}
            </div>
        </fieldset>
    );
}

export default PersonalData;