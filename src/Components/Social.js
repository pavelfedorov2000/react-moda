import classNames from 'classnames';
import React from 'react';
import { instagram, vk, facebook, youtube, tiktok, google } from './Socials';

function Social({ className, filterParam }) {
    const socials = React.useMemo(() => [{
        name: 'google',
        svg: google,
        link: {
            href: 'https://www.google.com/'
        },
        auth: true,
    }, {
        name: 'instagram',
        svg: instagram,
        link: {
            href: 'https://www.instagram.com/'
        },
    }, {
        name: 'vk',
        svg: vk,
        link: {
            href: 'https://vk.com/'
        },
    }, {
        name: 'facebook',
        svg: facebook,
        link: {
            href: 'https://www.facebook.com/'
        },
    }, {
        name: 'youtube',
        svg: youtube,
        link: {
            href: 'https://www.youtube.com/'
        },
        footer: true
    }, {
        name: 'tiktok',
        svg: tiktok,
        link: {
            href: 'https://www.tiktok.com/'
        },
        footer: true
    }], [instagram, vk, facebook, youtube, tiktok, google]);

    return (
        <ul className={classNames('social', className)}>
            {socials.filter(soc => !soc[filterParam]).map(soc => (
                <li key={soc.name} className={classNames('social__item', {
                    'social__item--google': soc.name === 'google'
                })}>
                    <a className="social__link" href={soc.link.href} target="_blank" rel="nofollow">
                        <soc.svg />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Social;