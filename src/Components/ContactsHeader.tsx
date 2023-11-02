import classNames from 'classnames';
import Phone from './Phone';
import { WithClassName } from '../types/types';

const mainClass = 'contacts-header';

const ContactsHeader = ({ className }: WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <Phone className="action-header" />
            <span className={`${mainClass}__descr`}>Звонок бесплатный</span>
        </div>
    );
}

export default ContactsHeader;