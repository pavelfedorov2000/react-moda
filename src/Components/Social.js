import { instagram, vk, facebook, youtube, tiktok, google } from './Socials';

const socials = [
    {
        name: 'google',
        svg: google,
        link: 'https://www.google.com/',
        auth: true,
    },
    {
        name: 'instagram',
        svg: instagram,
        link: 'https://www.instagram.com/',
    },
    {
        name: 'vk',
        svg: vk,
        link: 'https://vk.com/',
    },
    {
        name: 'facebook',
        svg: facebook,
        link: 'https://www.facebook.com/',
    },
    {
        name: 'youtube',
        svg: youtube,
        link: 'https://www.youtube.com/',
        footer: true
    },
    {
        name: 'tiktok',
        svg: tiktok,
        link: 'https://www.tiktok.com/',
        footer: true
    },
];

export default socials;