import classNames from 'classnames';
import submitArrow from '../assets/images/icons/submit-arr.svg';
import { WithClassName } from '../types/types';

interface Props {
    actionText: string;
    placeholder: string;
}

const mainClass = 'form-row';

const FormRow = ({ className, actionText, placeholder }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <input className={`${mainClass}__input`} type="email" name="email" placeholder={placeholder} />
            <button className={`${mainClass}__btn`} type="submit" aria-label={actionText} style={{ backgroundImage: `url(${submitArrow})` }}></button>
        </div>
    );
}

export default FormRow;