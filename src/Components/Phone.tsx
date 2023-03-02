import { PHONE } from '../constants/phone';
import { formatPhone } from '../utils/formatPhone';
import { PhoneIcon } from './HeaderActions/icons';

interface Props {
    className?: string;
}

const Phone = ({ className }: Props) => {
    return (
        <a href={`tel:${formatPhone(PHONE)}`} className={className}>
            <PhoneIcon />
            <span>{PHONE}</span>
        </a>
    );
}

export default Phone;