import submitArrow from '../assets/images/icons/submit-arr.svg';

interface Props {
    actionText: string;
    placeholder: string;
}

const FormRow = ({ actionText, placeholder }: Props) => {
    return (
        <div className="form-row subscribe-form__wrap">
            <input className="form-row__input" type="email" name="email" placeholder={placeholder} />
            <button className="form-row__btn" type="submit" aria-label={actionText} style={{ backgroundImage: `url(${submitArrow})` }}></button>
        </div>
    );
}

export default FormRow;