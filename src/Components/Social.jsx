import classNames from 'classnames';
import { socials } from '../constants/socials';

const Social = ({ className, filterParam }) => {
    return (
        <ul className={classNames('social', className)}>
            {socials.filter(social => !social[filterParam]).map(social => (
                <li key={social.name} className={classNames('social__item', {
                    'social__item--google': social.name === 'google'
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