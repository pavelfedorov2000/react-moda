import { Gaps } from "../enums/Gap";

export const SPLIDE_OPTIONS = {
    type: 'loop',
    speed: 1000,
    gap: Gaps.XL,
    perPage: 4,
    perMove: 1,
    breakpoints: {
        1024: { perPage: 2, gap: Gaps.L },
        767: { perPage: 1, gap: Gaps.S },
    },
};