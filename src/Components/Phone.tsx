import { PHONE } from '../constants/phone';
import { WithClassName } from '../types/types';
import { formatPhone } from '../utils/formatPhone';
import { PhoneIcon } from './HeaderActions/icons';

const Phone = ({ className }: WithClassName) => {
    return (
        <a href={`tel:${formatPhone(PHONE)}`} className={className}>
            <PhoneIcon />
            <span>{PHONE}</span>
        </a>
    );
}

export default Phone;