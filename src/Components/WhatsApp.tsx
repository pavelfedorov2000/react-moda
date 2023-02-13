import classNames from 'classnames';
import whatsapp from '../assets/images/icons/whatsup.svg';

interface Props {
    className?: string;
}

const WhatsApp = ({ className }: Props) => {
    return (
        <a href="https://wa.me/" className={classNames('whatsapp', className)} target="_blank" rel="nofollow">
            <img className="icon" src={whatsapp} alt="WhatsApp" width="16" height="16" />
            <span className="whatsapp__text">WhatsApp</span>
        </a>
    );
}

export default WhatsApp;