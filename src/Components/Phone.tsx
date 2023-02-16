import { phone } from '../constants/phone';
import { formatPhone } from '../utils/formatPhone';
import { PhoneIcon } from './HeaderActions/icons';

interface Props {
    className?: string;
}

const Phone = ({ className }: Props) => {
    return (
        <a href={`tel:${formatPhone(phone)}`} className={className}>
            <PhoneIcon />
            <span>{phone}</span>
        </a>
    );
}

export default Phone;