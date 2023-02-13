import { instagram, vk, facebook, youtube, tiktok, google } from '../Components/Socials';
import { Social } from '../interfaces/Social';

export const socials: Social[] = [{
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
}];