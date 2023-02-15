import classNames from 'classnames';
import { SOCIALS } from '../constants/socials';
import { SocialList } from '../enums/Social';

interface Props {
    className?: string;
    filterParam: string;
}

const Social = ({ className, filterParam }: Props) => {
    return (
        <ul className={classNames('social', className)}>
            {SOCIALS.filter((social) => social.place !== filterParam).map((social) => (
                <li key={social.name} className={classNames('social__item', {
                    'social__item--google': social.name === SocialList.Google
                })}>
                    <a className="social__link" href={social.link.href} target="_blank" rel="nofollow">
                        <social.svg />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Social;