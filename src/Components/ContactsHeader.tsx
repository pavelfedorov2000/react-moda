import classNames from 'classnames';
import Phone from './Phone';

interface Props {
    className?: string;
}

const ContactsHeader = ({ className }: Props) => {
    return (
        <div className={classNames('contacts-header', className)}>
            <Phone className="action-header" />
            <span className="contacts-header__descr">Звонок бесплатный</span>
        </div>
    );
}

export default ContactsHeader;