import { instagram, vk, facebook, youtube, tiktok, google } from '../components/Socials';
import { FilterParam, SocialList } from '../enums/Social';
import { Social as SocialType } from '../interfaces/Social';

export const SOCIALS: SocialType[] = [{
    name: SocialList.Google,
    svg: google,
    link: {
        href: 'https://www.google.com/'
    },
    place: FilterParam.Auth,
}, {
    name: SocialList.Instagram,
    svg: instagram,
    link: {
        href: 'https://www.instagram.com/'
    },
}, {
    name: SocialList.Vk,
    svg: vk,
    link: {
        href: 'https://vk.com/'
    },
}, {
    name: SocialList.Facebook,
    svg: facebook,
    link: {
        href: 'https://www.facebook.com/'
    },
}, {
    name: SocialList.Youtube,
    svg: youtube,
    link: {
        href: 'https://www.youtube.com/'
    },
    place: FilterParam.Footer,
}, {
    name: SocialList.Tiktok,
    svg: tiktok,
    link: {
        href: 'https://www.tiktok.com/'
    },
    place: FilterParam.Footer,
}];

