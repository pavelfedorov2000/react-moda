import { Gaps } from "../enums/Gap";

export const splideOptions = {
    speed: 1000,
    gap: Gaps.XL,
    perPage: 4,
    perMove: 1,
    breakpoints: {
        1024: { perPage: 2, gap: Gaps.L },
        767: { perPage: 1, gap: Gaps.S },
    },
};