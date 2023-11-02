import classNames from 'classnames';
import whatsapp from '../assets/images/icons/whatsup.svg';
import { WithClassName } from '../types/types';
import { Image } from '../ui';
import { ClassName } from '../enums/ClassName';

const mainClass = 'whatsapp';
const whatsApp = {
    link: 'https://wa.me/',
    text: 'WhatsApp',
};

const WhatsApp = ({ className }: WithClassName) => {
    return (
        <a href={whatsApp.link} className={classNames(mainClass, className)} target="_blank" rel="nofollow">
            <Image className={ClassName.Icon} src={whatsapp} alt={whatsApp.text} width={16} height={16} />
            <span className={`${mainClass}__text`}>{whatsApp.text}</span>
        </a>
    );
}

export default WhatsApp;