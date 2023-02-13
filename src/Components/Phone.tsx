import { phone } from '../constants/phone';
import { PhoneIcon } from './HeaderActions/icons';

interface Props {
    className?: string;
}

const Phone = ({ className }: Props) => {
    return (
        <a href={`tel:${phone.split(' ').join('')}`} className={className}>
            <PhoneIcon />
            <span>{phone}</span>
        </a>
    );
}

export default Phone;