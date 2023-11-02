import classNames from 'classnames';
import { SOCIALS } from '../constants/socials';
import { SocialList } from '../enums/Social';
import { WithClassName } from '../types/types';

const mainClass = 'social';

const Social = ({ className, filterParam }: { filterParam: string; } & WithClassName) => {
    return (
        <ul className={classNames(mainClass, className)}>
            {SOCIALS.filter((social) => social.place !== filterParam).map((social) => (
                <li key={social.name} className={classNames(`${mainClass}__item`, {
                    [`${mainClass}__item--${SocialList.Google}`]: social.name === SocialList.Google
                })}>
                    <a className={`${mainClass}__link`} href={social.link.href} target="_blank" rel="nofollow">
                        <social.svg />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Social;